<template>
    <div class="article-by-id">
        <PageTitle  icon="fa fa-folder-o"
         :main="article.name" :sub="article.description"></PageTitle>
        <div class="article-content" v-html="article.content"></div>
    </div>
</template>

<script>
import {baseUrl} from '@/global';
import axios from 'axios';
import PageTitle from '../templates/PageTitle.vue'
import 'highlightjs/styles/dracula.css'
import hljs from 'highlightjs/highlight.pack' 


export default {

    name: 'articleId',
    components:{PageTitle},
    data: function(){
        return{
            article: {}
        }
    },
    mounted(){
        const url = `${baseUrl}/articles/${this.$route.params.id}`
        axios.get(url).then(resp =>{
            this.article = resp.data
        })
    },
    updated(){
        document.querySelectorAll('article-content pre').forEach(e =>{
            hljs.highlightBlock(e)
        })
    }

}
</script>

<style>
    .content{
        background-color: white;
        border-radius: 8px;
        padding: 25px;
    }

    .content pre{
        padding: 20px;
        border-radius: 8px;
        font-size: 1.2rem;
        background-color: #1e1e1e;
        color: #fff;
    }

    .content img{
        max-width: 90%;
    }
</style>