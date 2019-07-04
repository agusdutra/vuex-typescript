<template>
  <div class="home">
    <div class="user">
      <UserFormComponent :title="'User Form'"></UserFormComponent>
    </div>
    <div class="user">
      <UserInfoComponent></UserInfoComponent>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import UserFormComponent from "@/components/UserFormComponent.vue"; // @ is an alias to /src
import UserInfoComponent from "@/components/UserInfoComponent.vue"; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
    UserFormComponent,
    UserInfoComponent
  }
})
export default class Home extends Vue {
  atributo: string = "adas";

  computed1 = () => {
    return this.atributo;
  };
}
</script>
<style lang="scss">
.home {
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  .user {
    border: 1px solid black;
    margin: 30px;
    padding: 15px;
  }
}
</style>
