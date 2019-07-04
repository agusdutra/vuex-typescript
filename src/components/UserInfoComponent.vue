<template>
  <div>
    <h2>User Info</h2>
    <div>
      <label>first Name:</label>
      <b>{{ activeUser.firstName }}</b>
    </div>
    <div>
      <label>Last Name:</label>
      <b>{{ user.lastName }}</b>
    </div>
    <div>
      <label>@Getter(fullName):</label>
      <b>{{ fullName }}</b>
      <br />
      <label>@MapGetters(fullNameReversed):</label>
      <b>{{ fullNameReversed }}</b>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { User } from "@/types";
import { State, Getter } from "vuex-class";
import { MapGetters, MapState } from "../store/mappers";

const namespace: string = "profile";

@Component({})
export default class UserInfoComponent extends Vue {
  @State(state => state.user, { namespace }) activeUser!: User;
  @Getter("fullName", { namespace }) fullName!: string;

  @MapGetters(namespace, ["fullNameReversed"]) getters!: any;

  @MapState(namespace, ["user"]) states!: any;
}
</script>
<style lang="scss">
label {
  text-align: left;
}
</style>
