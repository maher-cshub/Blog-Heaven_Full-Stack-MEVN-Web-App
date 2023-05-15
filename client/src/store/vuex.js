import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts : []
  },
  getters:{
    posts: (state) => {return state.posts}
  },
  mutations: {
    GetPosts(state,payload){
      state.posts = payload
    }
  },
  actions: {
    getPosts({commit}, payload) {
      commit("GetPosts",payload)
    }
  },
  modules: {
  }
})
