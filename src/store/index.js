import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tarifs: []
  },
  mutations: {
    SET_TARIFS_TO_STATE: (state, tarifs) => {
      state.tarifs = tarifs;
    }
  },
  actions: {
    GET_TARIFS_FROM_API({commit}) {
      return axios("https://tarifnik.ru/rabota/api/data_controller", {
        method: "GET"
      })
      .then((tarifs) => {
          commit("SET_TARIFS_TO_STATE", tarifs.data);
          return tarifs;
      })
      .catch((error) => {
        console.log(error);
        return error;
      })
    }
  },
  getters: {
    TARIFS(state) {
      return state.tarifs;
    }
  },
  modules: {},
});
