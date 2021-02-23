<template>
  <div class="v-new-post">
    <form action="" class="form-new-post">
      <p><input type="text" placeholder="Title" /></p>

      <textarea name="" id="" cols="30" rows="10"></textarea>

      <p><button>Sumbit</button></p>
    </form>
  </div>
</template>

<script>
export default {
  name: "v-new-post",
};
</script>

<style scoped>
.form-new-post {
  display: flex;
  flex-direction: column;
}
</style>