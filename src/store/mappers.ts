import { createDecorator } from "vue-class-component";
import { mapGetters, mapState, mapActions } from "vuex";

export function MapGetters(namespace: string, getters: any) {
  return createDecorator(options => {
    if (!options.computed) {
      options.computed = {};
    }
    Object.assign(options.computed, mapGetters(namespace, getters));
  });
}

export function MapActions(namespace: string, action: any) {
  return createDecorator(options => {
    debugger;
    if (!options.computed) {
      options.computed = {};
    }
    Object.assign(options.computed, mapActions(namespace, action));
  });
}

export function MapState(namespace: string, states: any) {
  return createDecorator(options => {
    if (!options.computed) {
      options.computed = {};
    }
    Object.assign(options.computed, mapState(namespace, states));
  });
}
