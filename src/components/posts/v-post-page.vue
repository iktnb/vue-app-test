<template>
  <div class="v-post-page">
    <div class="headPost">
      <h2>Title: {{ post.title }}</h2>
      <h3>Author: {{ user.name }}</h3>
      <p>{{post.body}}</p>
    </div>
    <div class="comments">
      <h3>Comments</h3>
      <v-comment-item
      v-for="row in comment" :key="row.id" :row_comment="row"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import VCommentItem from './v-comment-item.vue';
export default {
  name: "v-post-page",
  components: {
    VCommentItem

  },
  props: {},
  computed: {
    ...mapGetters(["POSTS"]),
    ...mapGetters(["USERS"]),
    ...mapGetters(["COMMENTS"]),

    post() {
      let result = {};
      let vm = this;
      this.POSTS.map(function (item) {
        if (item.id === vm.$route.query.post) {
          result = item;
        }
      });
      return result;
    },
    user() {
      let result = {};
      let mv = this;
      this.USERS.map(function (item) {
        if (item.id === mv.post.userId) {
          result = item;
        }
      });
      return result;
    },
    comment() {
        let obj = {};
        let i = 0;
        let mv = this;
        this.COMMENTS.map(function (item) {
            if (item.postId === mv.$route.query.post) {
                obj[i] = item;
                i = i + 1;
            }
        });
        return obj;
    }
  },
  methods: {
    ...mapActions(["GET_COMMENTS_FROM_API"]),
  },
  mounted() {
    this.GET_COMMENTS_FROM_API();
  },
};
</script>

<style scoped>
.v-post-page {
}
</style>