<template>
  <div class="v-users">
    <hr />
    <div class="v-user__body">
      <vUser v-for="row in USERS" :key="row.id" :row_user="row" />
    </div>
  </div>
</template>

<script>
import vUser from "./v-user";
import { mapGetters } from "vuex";

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
    // ...mapActions(["GET_USERS_FROM_API"]),
  },
  computed: {
    ...mapGetters(["USERS"]),
  },
  mounted() {
    // this.GET_USERS_FROM_API();
  },
};
</script>

<style>
.v_users {
  max-width: 900px;
  margin: 0 auto;
}

</style>