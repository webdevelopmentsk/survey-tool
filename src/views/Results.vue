<template>
  <div class="result">
    <div class="result__header"> Results <span>{{ `(from ${totalVoter} voters)` }}</span> </div>
    <div class="result__most-popular">
      <div class="result__most-popular__title"> The most popular quote </div>
      <div class="result__most-popular__img__container">
        <img class="result__most-popular__img" :src="allData[0].src" :alt="allData[0].alt">
      </div>
      <div class="result__most-popular__score">{{ `Fit/Like: ${allData[0].percent.toFixed(2)}%` }}</div>
    </div>

    <div class="result__all">
      <div class="result__all__title"> All Result </div>
      <div class="result__all__item__container">
        <div v-for="item in allData" :key="item.id" class="result__all__item">
          <div class="result__all__img__container">
            <img class="result__all__img" :src="item.src" :alt="item.alt">
            <div class="result__all__score">
              {{ `${item.percent > 0 ? `Fit: ${item.percent.toFixed(2)}`
                : `Does not like/does not fit: ${100 - Math.abs(item.percent.toFixed(2))}`}%` }}
            </div>
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

      @media(max-width: 767px) {
        font-size: 1.5rem;
      }
    }

    &__most-popular {

        &__score {
            font-size: 1.5rem;
            color: white;
            width: 200px;
            padding: 1rem 0;
            background-color: black;

            @media(max-width: 767px) {
               width: 100%;
            }
        }

        &__title {
            font-size: 2rem;
            @media(max-width: 767px) {
              font-size: 1.5rem;
            }
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

                @media(max-width: 767px) {
                justify-content: center;
                width: 100%;
                }
            }
        }

        &__score {
            font-size: 1rem;
            color:black;
        }

    }
}
</style>