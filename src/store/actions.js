import axios from 'axios'
export default{
    async getPostsAction({ commit }){
        const response = await axios.get(
            'https://jsonplaceholder.typicode.com/posts?_limit=5'
        )
        commit('getPosts', response.data);
    }
}