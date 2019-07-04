<template>
  <div>
    <h1>{{ title }}</h1>

    <div>
      <label>first Name: </label>
      <input :value="activeUser.firstName" @input="dispatchFirstName($event)" />
    </div>
    <div>
      <label>Last Name: </label>
      <input :value="activeUser.lastName" @input="dispatchLastName($event)" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator";
import { ProfileState, User } from "@/types";
import { State, Action, Getter } from "vuex-class";
const namespace: string = "profile";

@Component({})
export default class UserFormComponent extends Vue {
  @State(state => state.user, { namespace }) activeUser!: User;

  @Prop({ type: String, default: "No title" }) private title!: string;

  @State(state => state.user.firstName, { namespace }) firstName!: string;
  @State(state => state.user.lastName, { namespace }) lastName!: string;

  @Action("setName", { namespace }) setFirstName: any;
  @Action("setLastName", { namespace }) setLastName: any;

  dispatchFirstName(event: any): void {
    this.setFirstName(event.target.value);
  }
  dispatchLastName(event: any): void {
    this.setLastName(event.target.value);
  }
}
</script>
