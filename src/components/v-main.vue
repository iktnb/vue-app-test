<template>
  <div class="v-main">
    <v-main-header/>
    <router-view></router-view>
    <!-- <VUsers :users_data="USERS" /> -->
  </div>
</template>


<script>
import { mapActions, mapGetters } from "vuex";
import VMainHeader from './v-main-header.vue';
// import VUsers from "./users/v-users";

export default {
  name: "v-main",
  components: {
    VMainHeader
    // VUsers,
  },
  methods: {
    ...mapActions(["GET_USERS_FROM_API"]),
    ...mapActions(["GET_POSTS_FROM_API"])
  
  },
  computed: {
    ...mapGetters(["USERS"]),
    ...mapGetters(["POSTS"])
  },
  mounted() {
    this.GET_USERS_FROM_API();
    this.GET_POSTS_FROM_API();
  },
};
</script>

<style>
.v-main {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  max-width: 900px;
  margin: 0 auto;
}
</style>