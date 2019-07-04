import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import { RootState } from "./types";
import { profile } from "./store/profile.module";

Vue.use(Vuex);

const store: StoreOptions<any> = {
  state: {
    version: "1.0.0" // a simple property
  },
  modules: {
    profile
  }
};
export default new Vuex.Store<RootState>(store);
