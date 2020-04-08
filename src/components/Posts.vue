<template>
    <div>
        <h2>Posts 清單列</h2>
        <b-list-group>
            <b-list-group-item v-for="p in getAllPosts" :key="p.id">
                User: {{p.userId}} <br/>
                Title: {{p.title}} <br/>
                <hr />
                Content: {{p.body}}
                <div class="mt-3">
                    <b-button-group size="sm">
                        <b-button @click="removePostAction(p.id)" variant="danger">Delete</b-button>
                        <b-button variant="info">Edit</b-button>
                    </b-button-group>
                </div>
            </b-list-group-item>
        </b-list-group>
    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'
    export default {
        name: 'Posts',
        computed: mapGetters(["getAllPosts"]),
        methods: mapActions(["getPostsAction", "removePostAction"]),
        created(){
            this.getPostsAction();
        }
    }
</script>

<style scoped>
    h2{
        color: white;
        background: deepskyblue;
        width: 30%;
        padding: 10px;
        font-family: "微軟正黑體";
    }
    
    .list-group-item{
        margin-top: 1rem;
        color: #4e5e6e;
        font-size: 1.33rem;
        text-align: left;
    }
    hr{
        width: 30px;
        border-bottom: dotted 6px;
    }
</style>