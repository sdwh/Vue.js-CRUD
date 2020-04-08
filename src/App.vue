<template>
  <div class="container" id="app">
    <div class="heading">
      <h1>Application Heading</h1>
    </div>
    <hr />
    <add-post></add-post>
    <Posts></Posts>
  </div>
</template>

<script>
import Posts from './components/Posts.vue'
import AddPost from './components/AddPost.vue'

export default {
  name: 'App',
  components: {
    Posts,
    AddPost
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
