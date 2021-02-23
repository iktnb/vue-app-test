<template>
  <div class="v-post-item" @click="goToPostPage(row_post.id)">
    <span class="title">{{ row_post.title }}</span>
    <span class="body">{{ row_post.body }}</span>
  </div>
</template>

<script>
export default {
  name: "v-posts-item",
  props: {
    row_post: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  methods: {
    goToPostPage(id) {
      this.$router.push({ name: "post", query: { post: id } });
    },
  },
};
</script>

<style scoped>
.v-post-item {
  border: 1px grey solid;
  text-align: left;
  padding: 5px;
  border-radius: 10px;
  margin-bottom: 5px;
  display: flex;
  flex-direction: column;
}

.h4 {
  padding: 0;
  margin: 0;
  line-height: 0;
}

.title {
  font-weight: 600;
}
</style>