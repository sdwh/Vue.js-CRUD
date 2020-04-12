# Vue.js-CRUD
Example Code of Vue.js About how to CRUD From web API

## Step 1 Vue-CLI

```batch
npm install vue-cli -g
```

```batch
vue create projectNmae
```

## Step 2 Bootstrap-Vue

```batch
npm i bootstrap bootstrap-vue
```

add src/components/Posts.vue
update main.js to import bs4, bs4-vue, Posts.vue

```batch
npm run serve
```

verify results.

## Step 3 Vuex

```batch
npm i vuex
mkdir src/store
```

add actions.js, getters.js, index.js, mutations.js, state.js
update main.js to use *store*
update getters.js

```js
export default {
    getAllPosts: (state) => {
        return state.posts
    }
}
```

update state.js, insert fake data

```js
export default {
    posts : [ ... ]
}
```

update Posts.vue to fill daata from store

```js
<script>
    import {mapGetters} from 'vuex'
    export default {
        name: 'Posts',
        computed: mapGetters(["getAllPosts"])
    }
</script>
```

## Step 4 fetch from Web API

```batch
npm i axios
```

update state.js, remove fake data

updatea actions.js

```js
import axios from 'axios'
export default{
    async getPostAction({ commit }){
        const response = await axios.get(
            'https://jsonplaceholder.typicode.com/posts?_limit=5'
        )
        commit('getPosts', response.data);
    }
}
```

update mutations.js

```js
export default{
    getPosts: (state, posts) => (state.posts = posts)
}
```

update Posts.vue, when **created** components call **getPostAction** to fetch data

```js

```

## Step 5, Post Data

add src/components/AddPost.vue
- methoids: onSubmit()
- data: return form : {}

update App.vue, add add-post tag
update Posts.vue

## Step 6, Delete Data

update Posts.vue : add delete button

```html
<div class="mt-3">
    <b-button-group size="sm">
        <b-button @click="removePostAction(p.id)" variant="danger">Delete</b-button>
    <b-button-group>
</div>
```

update action.js
- async removePostAction({commit}, id)

update mutations.js
- deletePost: (state, id) => state.posts.filter(c => c.id !== id)

## Step 7, Vue Router

```batch
npm install vue-router
```

update main.js : to user router object

add components\Home.vue : add routing anchor link

update components\App.vue : add router-link tag

```html
<div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
</div>
```

add components\About.vue

add src\router.js

