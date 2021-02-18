<template>
  <div class="v-user">
    <vUserModal v-if="isUserModalVisible" @closeUserModal="closeUserInfo"
      ><div class="v-user-company">
        <h3>{{ row_user.name }}</h3>

        <h4>{{ row_user.company.name }}</h4>
        <h4>{{ row_user.company.bs }}</h4>
        <h4>{{ row_user.company.catchPhrase }}</h4>
      </div>
    </vUserModal>
    <div class="v-user-rows">
      <div class="row row__id">{{ row_user.id }}</div>
      <div class="row row__name">{{ row_user.name }}</div>
      <div class="row row__email">{{ row_user.email }}</div>
      <div class="row row__website">{{ row_user.website }}</div>
      <button class="info-btn" @click="showUserInfo">info</button>
    </div>
  </div>
</template>
 
<script>
import vUserModal from "./v-user-modal";
export default {
  name: "v-user",
  components: {
    vUserModal,
  },
  props: {
    row_user: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  data() {
    return {
      isUserModalVisible: false,
    };
  },
  methods: {
    showUserInfo() {
      this.isUserModalVisible = true;
    },
    closeUserInfo() {
      this.isUserModalVisible = false;
    },
  },
};
</script>

<style>

.v-user-company {
    color: #ffffff;
}
.v-user-rows {
  display: flex;
  justify-content: space-around;
}
.row {
  text-align: left;
  flex-basis: 25%;
  padding-bottom: 15px;
}
</style>