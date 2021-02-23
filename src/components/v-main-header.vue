.<template>
  <div class="v-main-header">
    <router-link to="/posts" active-class="grey"><button>Posts</button></router-link>
    <h1>TestApp</h1>
    <router-link to="/userList"><button>UserList</button></router-link>
  </div>
</template>

<script>
export default {
  name: "v-main-header",
};
</script>

<style>
.v-main-header {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>