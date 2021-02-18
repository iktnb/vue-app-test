<template>
  <div class="v-user-modal">
    <div class="header">
      <span></span>
      <span @click="closeUserModal">X</span>
    </div>
    <div class="content">
      <slot><h1>hello</h1></slot>
    </div>
    <div class="footer">
      <button @click="closeUserModal" class="close-btn">Close</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-user-modal",
  data() {
    return {};
  },
  methods: {
    closeUserModal() {
      this.$emit("closeUserModal");
    },
  },
};
</script>

<style>
.v-user-modal {
  padding: 15px;
  position: fixed;
  width: 25%;

  top: 15%;
  left: 35%;

  border: 1px solid black;
  background: grey;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.content {
  display: flex;
  justify-content: center;
  align-items: center;
}
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.close-bts {
  background: red;
  padding: 8px;
}
</style>