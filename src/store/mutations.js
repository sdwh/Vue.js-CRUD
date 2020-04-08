export default{
    getPosts: (state, posts) => (state.posts = posts),
    insertPost: (state, post) => state.posts.unshift(post),
    deletePost: (state, id) => state.posts.filter(c => c.id !== id)
}