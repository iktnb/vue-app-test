<template>
  <div class="v-main">
    <router-view></router-view>
    <!-- <VUsers :users_data="USERS" /> -->
  </div>
</template>


<script>
import { mapActions, mapGetters } from "vuex";
// import VUsers from "./users/v-users";

export default {
  name: "v-main",
  components: {
    // VUsers,
  },
  methods: {
    ...mapActions(["GET_USERS_FROM_API"]),
  },
  computed: {
    ...mapGetters(["USERS"]),
  },
  mounted() {
    this.GET_USERS_FROM_API();
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