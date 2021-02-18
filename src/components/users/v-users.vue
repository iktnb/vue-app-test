<template>
  <div class="v-users">
    <div class="v-users__header">
      <p>Id</p>
      <p>Name</p>
      <p>Email</p>
      <p>Website</p>
      <div></div>
    </div>
    <hr />
    <div class="v-user__body">
      <vUser v-for="row in USERS" :key="row.id" :row_user="row" />
    </div>
  </div>
</template>

<script>
import vUser from "./v-user";
import { mapActions, mapGetters } from "vuex";


export default {
  name: "v-users",
  components: {
    vUser,
  },
  // props: {
  //   users_data: {
  //     type: Array,
  //     default: () => {
  //       return [];
  //     },
  //   },
  // },
  data() {
    return {};
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
.v_users {
  max-width: 900px;
  margin: 0 auto;
}

.v-users__header {
  display: flex;
  justify-content: space-around;
  text-align: left;
  flex-basis: 25%;
}
</style>