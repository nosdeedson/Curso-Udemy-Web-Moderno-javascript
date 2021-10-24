<template>
<div class="articles-by-category">
  <PageTitle icon="fa fa-folder-o" :main="category.name"
  sub="Categoria"></PageTitle>
  <ul>
      <li v-for="article in articles" :key="article.id">
          <ArticleItem :article="article"/>
      </li>
  </ul>
  <hr>
  <div class="load-more" >
      <button v-if="loadMore" class="btn btn-outline-primary" @click="getArticles">
          Carregar + Artigos
      </button>
  </div>
</div>
</template>

<script>
import {baseUrl, showError} from '@/global';
import axios from 'axios'
import PageTitle from '../templates/PageTitle.vue'
import ArticleItem from '../article/ArticleItem.vue'
export default {
    name: 'articlesByCategory',
    components:{PageTitle, ArticleItem},
    data: function(){
        return {
            category: {},
            articles: [],
            page: 1,
            loadMore: true
        }
    },
    methods:{
        getCategory(){
            const url = `${baseUrl}/categories/${this.category.id}`
            axios.get(url).then(resp => {
                this.category = resp.data || {};
                if( this.category.name){
                    this.getArticles()
                }
            }).catch(error => {
                showError(error)
            })
        },
        getArticles(){
            const categoryId = this.category.id;
            const url = `${baseUrl}/categories/${categoryId}/articles?page=${this.page}`
            axios.get(url).then(resp => {
                this.articles = this.articles.concat(resp.data)
                this.page++
                if ( resp.data.length === 0) this.loadMore = false
            }).catch(error => {
                showError(error)
            })
        }
    },
    watch:{
        $route(to){
            this.category.id = to.params.id
            this.articles = []
            this.page = 1
            this.loadMore= true

            // this.getCategory()
            this.getArticles()
        }
    },
    mounted(){
       this.category.id = this.$route.params.id;
       this.getCategory();
    }

}
</script>

<style>
.articles-by-category ul {
    list-style-type: none;
    padding: 0%;
}

.load-more{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5%;
}
</style>