<template>
  <div class="result">
    <div class="result__header"> Results <span>{{ `(from ${totalVoter} voters)` }}</span> </div>
    <div class="result__most-popular">
      <div class="result__most-popular__title"> The most popular quote </div>
      <div class="result__most-popular__img__container">
        <img class="result__most-popular__img" :src="allData[0].src" :alt="allData[0].alt">
      </div>
      <div class="result__most-popular__score">{{ `Score: ${allData[0].score}` }}</div>
    </div>

    <div class="result__all">
      <div class="result__all__title"> All Result </div>
      <div class="result__all__item__container">
        <div v-for="item in allData" :key="item.id" class="result__all__item">
          <div class="result__all__img__container">
            <img class="result__all__img" :src="item.src" :alt="item.alt">
            <div class="result__all__score">{{ `Score: ${item.score}` }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Results",

  props: {
      userData: {
          type: Array
      },
      allData: {
          type: Array
      },
      totalVoter: {
          type: Number
      }
  },

  setup(props) {
    console.log('allData',props.allData)
    console.log('userData',props.userData)

    return { }
  }
});
</script>

<style lang="scss" scoped>
.result {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &__header {
        font-size: 3rem;
        margin: 2rem 0;
    }

    &__most-popular {

        &__score {
            font-size: 1.5rem;
            color: white;
            width: 150px;
            padding: 1rem 0;
            background-color: black;
        }

        &__title {
            font-size: 2rem;
        }

        &__img {
            width: 100%;

            &__container {
                width: 500px;
                display: flex;
                justify-content: center;
                margin: 2rem 0;
            }
        }
    }

    &__all {
        &__title {
            font-size: 2rem;
            margin: 2rem 0;
        }
        &__img {
            width: 100%;
            height: 100%;
            &__container {
                width: 300px;
                height: 210px;
            }
        }

        &__item {
            margin: 1rem 0;

            &__container {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-around;
            }
        }

        &__score {
            font-size: 1rem;
            color:black;
        }

    }
}
</style>