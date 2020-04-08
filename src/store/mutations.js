export default{
    getPosts: (state, posts) => (state.posts = posts),
    insertPost: (state, post) => state.posts.unshift(post)
}