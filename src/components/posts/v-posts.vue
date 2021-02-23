<template>
  <div class="v-posts">

    <div class="button-div"><router-link to="/createPost"><button>Create New post</button></router-link></div>
    <v-post-item v-for="row in paginatedUser" :key="row.id" :row_post="row"/>

    <div class="v-posts__pagination">
      <div
        class="page"
        v-for="page in pages"
        :key="page"
        :class="{ page__selected: page === pageNumber }"
        @click="pageClick(page)"
      >
        {{ page }}
      </div>
    </div>
  </div>
</template>

<script>
import vPostItem from "./v-post-item.vue";
import { mapGetters } from "vuex";
export default {
  components: { vPostItem },
  name: "v-posts",
  methods: {
    pageClick(page) {
      this.pageNumber = page;
    },


  
  },
  data() {
    return {
      postPerPage: 10,
      pageNumber: 1,
    };
  },
  computed: {
    ...mapGetters(["POSTS"]),

    pages() {
      return Math.ceil(this.POSTS.length / 10);
    },

    paginatedUser() {
      let from = (this.pageNumber - 1) * this.postPerPage;
      let to = from + this.postPerPage;
      return this.POSTS.slice(from, to);
    },
  },
};
</script>

<style scoped>
.v-posts {
}

.v-posts__pagination {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 15px;
  align-items: center;
}

.page {
  padding: 8px;
  border: solid 1px grey;
}

.page:hover {
  background: lightslategray;
  cursor: pointer;
  color: white;
}

.page__selected {
  background: lightslategray;
  cursor: pointer;
  color: white;
}

.button-div {
  margin-bottom: 10px;
}
</style>