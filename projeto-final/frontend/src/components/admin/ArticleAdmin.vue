<template>
  <div class="article-admin ">
    <div class="formulario border border-gray-400">
      <b-form class="my-3 mx-2">
        <input id="article-id" type="hidden" v-model="article.id">
        <b-form-group label="Nome" label-for="article-name" >
        <b-form-input id="article-name" type="text" v-model="article.name"
                required :readonly="mode === 'remove'" 
                placeholder="Digite o nome do artigo..."/>
        </b-form-group>

        <b-form-group label="Descrição" label-for="article-description" >
          <b-form-input id="article-description" type="text" v-model="article.description"
                required :readonly="mode === 'remove'" 
                placeholder="Digite a descrição do artigo..."/>
        </b-form-group>

        <b-form-group label="URL da imagem" label-for="article-image-url" >
          <b-form-input id="article-image-url" type="text" v-model="article.imageUrl"
                required :readonly="mode === 'remove'" 
                placeholder="Digite a imagem (URL) do artigo..."/>
        </b-form-group>


        <b-form-group v-if="mode === 'save'" label="Autor" label-for="article-userId">
          <b-form-select id="article-userId" :options="users"
            v-model="article.userId"/>
        </b-form-group>

        <b-form-group v-if="mode === 'save'" label="Categoria" label-for="article-categoryId">
            <b-form-select id="article-categoryId" :options="categories"
              v-model="article.categoryId"/>
        </b-form-group>


        <b-form-group v-if="mode === 'save'" label="Conteúdo" label-for="article-content" >
            <VueEditor v-model="article.content" placeholder="Digite o conteúdo..."></VueEditor>
        </b-form-group>

        <div class="d-flex justify-content-end">
            <b-button @click="save" v-if="mode === 'save'" variant="primary">Salvar</b-button>
            <b-button @click="remove" v-if="mode === 'remove'" variant="danger">Excluir</b-button>
            <b-button @click="reset" class="ml-2" >Cancelar</b-button>
        </div>
      </b-form>
    </div>
    
    <b-table hover striped :items="articles" :fields="fields">
      <template slot="actions" slot-scope="data">
      <b-button @click="loadArticle(data.item)" variant="warning" class="mr-2">
        <i class="fa fa-pencil"></i>
      </b-button>
      <b-button @click="loadArticle(data.item, 'remove')" variant="danger">
        <i class="fa fa-trash"></i>
      </b-button>
      </template>
    </b-table>
    <div class="d-flex justify-content-center mt-5">
      <b-pagination size="md" v-model="page" :total-rows="count" 
      :per-page="limit" />
    </div>
  </div>
</template>

<script>
import {VueEditor} from 'vue2-editor'; 
import axios from 'axios';
import {baseUrl, showError} from '@/global'
export default {
    name: 'ArticleAdmin',
    components: {VueEditor},
    data: function(){
      return {
        mode : 'save',
        article : {},
        articles : [],
        categories : [],
        users: [],
        page: 1,
        limit: 0,
        count: 0,
        fields: [
          { key : "id", label: 'Código', sorttable: true},
          { key : 'name', label: 'Nome', sorttable: true},
          { key : 'description', label: 'Descrição', sorttable: true},
          { key : 'userName', label: 'Autor', sorttable: true},
          { key : "actions" , label: 'Ações'}
      ]
      }
    },
    methods:{
      loadArticles(){
        const url = `${baseUrl}/articles?page=${this.page}`;
        axios.get(url).then(resp =>{
          this.articles = resp.data.data
          this.count = resp.data.totalElements
          this.limit = resp.data.itensPerPage
        })
      },
      loadUsers(){
        const url = `${baseUrl}/users`
        axios.get(url).then(resp =>{
          this.users = resp.data.map(user => {
            return{...user, value: user.id, text: user.name}
          })
        })
      },
      loadCategories(){
        const url = `${baseUrl}/categories`;
        axios.get(url).then(resp => {
          this.categories = resp.data.map(category =>{
            return {...category, value: category.id, text: category.name}
          })
        })
      },
      loadArticle(article, mode = 'save'){
        const url = `${baseUrl}/articles/${article.id}`
        axios.get(url).then(resp =>{
          this.article = resp.data
        })
        this.mode = mode
      },
      reset(){
        this.article = {}
        this.mode = 'save'
        this.loadArticles()
      },
      save(){
        const method = this.article.id ? 'put' : 'post';
        const id = this.article.id ? `${this.article.id}` : ''
        const url = `${baseUrl}/articles/${id}`
        axios[method](url, this.article).then( () =>{
          this.$toasted.global.defaultSuccess()
          this.reset()
        }).catch(error =>{
          showError(error);
          this.reset()
        })
      }
    },
    watch:{
      page(){
        this.loadArticles();
      }
    },
    mounted(){
        this.loadArticles()
        this.loadUsers()
        this.loadCategories()
    }
}
</script>

<style>

</style>