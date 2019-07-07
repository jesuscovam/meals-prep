import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    recipes: [],
    apiUrl: 'https://api.edeman.com/search'
  },
  mutations: {
    setRecipes(state, payload) {
      state.recipes = payload;
    }
  },
  actions: {
    async getRecipes({state, commit}, plan) {
      try {
        let response = await axios.get(`${state.apiUrl}`,  {
          params: {
            q: plan,
            app_id: '910b6dbd',
            app_key: '4df41d42c8c21f9bafbb0304356f4efb',
            from: 0,
            to: 9
          }
        });
        commit('setRecipes', response.data.hits);
      }
      catch(err) {
        commit('setRecipes', []);
        return err
      }
    }
  }
})
