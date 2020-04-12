<template>
  <div class="heading">
    <h1>Posts App</h1>
    <h4>Let me hear your voices.</h4>
    <AddPost/>
    <Posts/>
  </div>
</template>

<script>
import Posts from "@/components/Posts.vue"
import AddPost from "@/components/AddPost.vue"
export default {
  name: "home",
  components: {
    Posts,
    AddPost
  }
};
</script>

<style>
</style>
