<template>
  <div class="design-two">
    <div v-if="!displayResults" class="design-two__container">
      <AppCard :message="message" :quote="getCurrentQuote">
        <div class="design-two__rating">
          <div class="design-two__rating__text">does not fit all</div>
          <button v-for="item in 5" :key="item" class="design-two__rating__item" @click="setQuoteScore(item)">
            <fa
              icon="star"
              class="design-two__rating__icon"
              :value="item"
              :class="currentQuoteScore && item <= currentQuoteScore && 'design-two__rating__icon--active'"
            />
          </button>
          <div class="design-two__rating__text">fits very well</div>
        </div>
      </AppCard>
      <button class="design-two__btn-next" @click="setNextQuote">
        <fa icon="chevron-right" class="design-two__btn-next__icon" />
      </button>
    </div>
    <Results v-else :userData="allResult" :allData="allResult" :totalVoter="getTotalVoter" />
  </div>
</template>

<script>
import { defineComponent, computed, ref } from "vue"
import { useStore } from 'vuex'

import Results from './Results.vue'

export default defineComponent({
  name: "DesignTwo",

  components: { Results },

  setup() {
    const store = useStore()

    const displayResults = ref(false)

    const quotes = computed(() => store.state.quotes)

    const currentQuoteId = ref(0)

    const currentQuoteScore = ref(null)

    const message = ref('How do you feel about these quotes?')

    const userResult = computed(() => store.getters.getSurveyUser)
    const allResult = computed(() => store.getters.getSurveyOverall)
    const getTotalVoter = computed(() => store.getters.getTotalVoter)

    function setNextQuote () {
      if(currentQuoteId.value < quotes.value.length - 1) {
        setTimeout(function(){
          currentQuoteId.value = currentQuoteId.value + 1
          currentQuoteScore.value = null
        }, 1000)
      } else {
        store.dispatch('handleUserFinishSurvey')
        displayResults.value = true
      }
    }

    const getCurrentQuote = computed(() => quotes.value[currentQuoteId.value])

    function setQuoteScore(score) {
      currentQuoteScore.value = score

      let setScore = 0;
      switch (score) {
        case 1: setScore = -1; break;
        case 2: setScore = -0.5; break;
        case 3: setScore = 0; break;
        case 4: setScore = 0.5; break;
        case 5: setScore = 1; break;
      }

      const payload = {
        id:currentQuoteId.value,
        sentiment: {
          score: setScore
        }
      }
      store.dispatch('handleUserSelectSentiment', payload)
      setNextQuote()
    }

    //Fetch Data
    function fetchData() {
      store.dispatch('fetchQuotes')
      store.dispatch('fetchSentiments')
      store.dispatch('fetchsurveyOverall')
    }

    fetchData()

    return {
      currentQuoteId,
      message,
      setNextQuote,
      getCurrentQuote,
      setQuoteScore,
      userResult,
      allResult,
      getTotalVoter,
      displayResults,
      currentQuoteScore
    }
  }

});
</script>

<style lang="scss" scoped>
.design-two {
  width: 100%;
  height: 100%;

  &__container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__btn-next {
    margin-left: 2rem;
    background-color: #C0C0C0;
    width: 45px;
    height:45px;
    border:none;
    -webkit-box-shadow: 3px 0px 9px -3px #000000;
    box-shadow: 3px 0px 9px -3px #000000;

    &__icon {
    color: white;
    font-size: 1rem;
    }
  }

  &__rating {
    display: flex;
    margin-top: 2rem;
    align-items: center;

    &__text {
      margin: 0 1rem;
      color: white;
      font-size: 1rem;
    }

    &__item {
      border: none;
      background-color: transparent;
    }

    &__icon {
      color: white;
      font-size: 2rem;
      margin-right: 0.5rem;

      &--active {
        color: pink;
      }
    }
  }


}
</style>
