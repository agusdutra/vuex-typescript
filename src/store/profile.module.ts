import { Module, ActionTree, MutationTree, GetterTree } from "vuex";
import { RootState, ProfileState } from "@/types";

export const state: ProfileState = {
  user: {
    firstName: "Name ",
    lastName: "LastName",
    email: "",
    phone: ""
  },
  error: false
};

const namespaced: boolean = true;

const getters: GetterTree<ProfileState, RootState> = {
  fullName(state): string {
    const { user } = state;
    const firstName = (user && user.firstName) || "";
    const lastName = (user && user.lastName) || "";
    return `${firstName} ${lastName}`;
  },
  fullNameReversed(state): string {
    const { user } = state;
    const firstName = (user && user.firstName) || "";
    const lastName = (user && user.lastName) || "";
    const fullName = `${firstName} ${lastName}`;
    return fullName
      .split("")
      .reverse()
      .join("");
  }
};
const actions: ActionTree<ProfileState, RootState> = {
  setName({ commit }, name: string): void {
    commit("setName", name);
  },
  setLastName({ commit }, lastName: string): void {
    commit("setLastName", lastName);
  }
};
const mutations: MutationTree<ProfileState> = {
  setName(state, firstName): void {
    if (state.user) {
      state.user.firstName = firstName;
    }
  },
  setLastName(state, lastName: string): void {
    if (state.user) {
      state.user.lastName = lastName;
    }
  }
};

export const profile: Module<ProfileState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations
};
