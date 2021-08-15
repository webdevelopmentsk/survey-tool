import { createStore } from "vuex";

const store = createStore({
  state: {
    quotes: [],
    sentiments: [],
    surveyOverall: [],
    surveyUser: [],
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

    getSurveyOverall(state) {
      let allData = state.surveyOverall.sort((a,b) => b.score - a.score)
      allData.map((item) => {
        const percentLike = item.score *100 /state.totalVoter
        item.percent = percentLike
      })
      return allData
    },

    getSurveyUser(state) {
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

    setSurveyUser (state, payload) {
      state.surveyUser = payload
    },

    setSurveyOverall (state, payload) {
      state.surveyOverall = payload
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
      commit('setSurveyUser', quotes)
    },

    fetchsurveyOverall({ commit, }) {
      const quotes = [
        {id: 0, src: '/img/quotes/img_statement_1.png', alt:"quote1", score: 100},
        {id: 1, src: '/img/quotes/img_statement_2.png', alt:"quote2", score: 190},
        {id: 2, src: '/img/quotes/img_statement_3.png', alt:"quote3", score: -20},
        {id: 3, src: '/img/quotes/img_statement_4.png', alt:"quote4", score: -10},
        {id: 4, src: '/img/quotes/img_statement_5.png', alt:"quote5", score: 120},
        {id: 5, src: '/img/quotes/img_statement_6.png', alt:"quote6", score: 150},
      ]

      commit('setSurveyOverall', quotes)
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
      let userScores = state.surveyUser
      userScores[payload.id].score = payload.sentiment.score
      commit('setSurveyUser', userScores)
    },

    handleUserFinishSurvey ({ commit, state }) {
      const allResult = state.surveyOverall

      allResult.map((quote) => {
        state.surveyUser.map((userQuote) => {
          if(userQuote.id === quote.id) {
            quote.score = userQuote.score + quote.score
          }
        })
      })

      commit('setTotalVoter')
      commit('setSurveyOverall', allResult)
    }
  },
  modules: {},
})

export default store