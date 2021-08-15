<template>
  <div class="design-one">
    <div v-if="!displayResults" class="design-one__container">
      <AppCard :message="message" :sentiments="sentiments" :quote="getCurrentQuote">
        <div class="design-one__btn__container">
          <div v-for="item in sentiments" :key="item.label">
            <button class="design-one__btn" @click="setQuoteScore(item)">
              <img class="design-one__btn__image" :src="item.src" :alt="item.label">
              <p>{{ item.label }}</p>
            </button>
          </div>
        </div>
      </AppCard>
      <button class="design-one__btn-next" @click="setNextQuote">
        <fa icon="chevron-right" class="design-one__btn-next__icon" />
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
  name: "DesignOne",

  components: { Results },

  setup() {
    const store = useStore()

    const displayResults = ref(false)

    const quotes = computed(() => store.state.quotes)
    const sentiments = computed(() => store.getters.getSentiments)

    const currentQuoteId = ref(0)

    const message = ref('How do you feel about these quotes?')

    const userResult = computed(() => store.getters.getSurveyUser)
    const allResult = computed(() => store.getters.getSurveyOverall)
    const getTotalVoter = computed(() => store.getters.getTotalVoter)

    function setNextQuote () {
      if(currentQuoteId.value < quotes.value.length - 1) {
        currentQuoteId.value = currentQuoteId.value + 1
      } else {
        store.dispatch('handleUserFinishSurvey')
        displayResults.value = true
      }
    }

    const getCurrentQuote = computed(() => quotes.value[currentQuoteId.value])

    function setQuoteScore(sentiment) {
      const payload = {
        id:currentQuoteId.value,
        sentiment: sentiment
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
      sentiments,
      setNextQuote,
      getCurrentQuote,
      setQuoteScore,
      userResult,
      allResult,
      getTotalVoter,
      displayResults
    }
  }

});
</script>

<style lang="scss" scoped>
.design-one {
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

  &__btn {
    width: 100px;
    height: 90px;
    color: white;

    &__container {
      align-self: center;
      margin: 2rem 0;
      display: flex;
      justify-content: space-between;
      width: 60%;
    }

    &__image {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
