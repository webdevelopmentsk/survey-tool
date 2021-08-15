import { createStore } from "vuex";

const store = createStore({
  state: {
    quotes: [],
    sentiments: [],
    surveyOverallD1: [],
    surveyUserD1: [],
    totalVoter: 200,
  },

  getters: {
    getQuotes(state) {
      return state.quotes
    },

    getSentiments(state) {
      return state.sentiments
    },

    getTotalVoter(state) {
      return state.totalVoter
    },

    getSurveyOverallD1(state) {
      return state.surveyOverallD1.sort((a,b) => b.score - a.score)
    },

    getSurveyUserD1(state) {
      return state.surveyUserD1
    }
  },

  mutations: {
    setQuotes (state, payload) {
      state.quotes = payload
    },

    setSentiments (state, payload) {
      state.sentiments = payload
    },

    setSurveyUserD1 (state, payload) {
      state.surveyUserD1 = payload
    },

    setSurveyOverallD1 (state, payload) {
      state.surveyOverallD1 = payload
    },

    setTotalVoter(state) {
      state.totalVoter = state.totalVoter + 1
    }
  },
  actions: {
    fetchQuotes ({ commit }){
      const quotes = [
        {id: 0, src: '/img/quotes/img_statement_1.png', alt:"quote1", score: 0},
        {id: 1, src: '/img/quotes/img_statement_2.png', alt:"quote2", score: 0},
        {id: 2, src: '/img/quotes/img_statement_3.png', alt:"quote3", score: 0},
        {id: 3, src: '/img/quotes/img_statement_4.png', alt:"quote4", score: 0},
        {id: 4, src: '/img/quotes/img_statement_5.png', alt:"quote5", score: 0},
        {id: 5, src: '/img/quotes/img_statement_6.png', alt:"quote6", score: 0},
      ]

      commit('setQuotes', quotes)
      commit('setSurveyUserD1', quotes)
    },

    fetchsurveyOverallD1({ commit, }) {
      const quotes = [
        {id: 0, src: '/img/quotes/img_statement_1.png', alt:"quote1", score: 20},
        {id: 1, src: '/img/quotes/img_statement_2.png', alt:"quote2", score: 15},
        {id: 2, src: '/img/quotes/img_statement_3.png', alt:"quote3", score: 4},
        {id: 3, src: '/img/quotes/img_statement_4.png', alt:"quote4", score: 99},
        {id: 4, src: '/img/quotes/img_statement_5.png', alt:"quote5", score: 12},
        {id: 5, src: '/img/quotes/img_statement_6.png', alt:"quote6", score: 18},
      ]

      commit('setSurveyOverallD1', quotes)
    },

    fetchSentiments ({ commit }){
      const sentiments = [
        { label: 'Hiss', score: -1, src: '/img/sentiments/img_cat_supersad.png' },
        { label: 'Meow', score: 0, src: '/img/sentiments/img_cat_neutral.png' },
        { label: 'Prr', score: 1, src: '/img/sentiments/img_cat_happy.png' }
      ]
      commit('setSentiments', sentiments)
    },

    handleUserSelectSentiment ({ commit, state }, payload) {
      let userScores = state.surveyUserD1
      userScores[payload.id].score = payload.sentiment.score
      commit('setSurveyUserD1', userScores)
    },

    handleUserFinishSurvey ({ commit, state }) {
      const allResult = state.surveyOverallD1

      console.log('allResult', allResult)
      allResult.map((quote) => {
        state.surveyUserD1.map((userQuote) => {
          if(userQuote.id === quote.id) {
            quote.score = userQuote.score + quote.score
          }
        })
      })
      commit('setTotalVoter')
      commit('setSurveyOverallD1', allResult)
    }
  },
  modules: {},
})

export default store