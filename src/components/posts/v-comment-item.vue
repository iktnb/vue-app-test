<template>
  <div class="v-comment-item">
    <div class="name">{{ row_comment.name }}</div>
    <div class="emai">{{ row_comment.email }}</div>
    <br>
    <div class="body">{{ row_comment.body }}</div>
  </div>
</template>

<script>
export default {
  name: "v-comment-item",
  data() {
    return {};
  },
  props: {
    row_comment: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
};
</script>

.<style scoped>
.v-comment-item {
  border: 1px solid grey;
  text-align: left;
  border-radius: 14px;
  padding: 5px;
  margin-bottom: 5px;
}

.name {
  text-align: left;
}
</style>