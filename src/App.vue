<template>
  <div id="app">
    
    <!-- <VUsers :users_data="USERS" /> -->
    <vMain/>
  </div>
</template>

<script>
// import { mapActions, mapGetters } from "vuex";
import vMain from './components/v-main'
// import VUsers from "./components/users/v-users";

export default {
  name: "App",
  components: {
    // VUsers,
    vMain
  },
  methods: {
    // ...mapActions(["GET_USERS_FROM_API"]),
  },
  computed: {
    // ...mapGetters(["USERS"]),
  },
  mounted() {
    // this.GET_USERS_FROM_API();
  },
};
</script>

<style>
#app {
  
}
</style>
