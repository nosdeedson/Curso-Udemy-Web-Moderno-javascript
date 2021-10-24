<template>
  <div class="article-admin">
      <b-form class="my-3">
        <input id="category-id" type="hidden" v-model="category.id">
        <b-row>
          <b-col xs="12">
            <b-form-group label="Nome" label-for="category-name">
              <b-form-input id="category-name" type="text" v-model="category.name"
              required :readonly="mode === 'remove'" placeholder="Digite o nome da categoria..."/>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col xs="12" v-if="mode === 'save'">
            <b-form-group label="Categoria Pai" label-for="category-parentId">
              <b-form-select  id="category-parentId" :options="categories"
               v-model="category.parentId"/>
            </b-form-group>
          </b-col>
        </b-row>
        <div class="d-flex justify-content-end">
          <b-button @click="save" v-if="mode === 'save'" variant="primary">Salvar</b-button>
          <b-button @click="remove" v-if="mode === 'remove'" variant="danger">Excluir</b-button>
          <b-button @click="reset" class="ml-2" >Cancelar</b-button>
        </div>
      </b-form>
      <hr>
      <b-table hover striped :items="categories" :fields="fields">
        <template slot="actions" slot-scope="data">
          <b-button variant="warning" class="mr-2" @click="loadCategory(data.item)" >
            <i class="fa fa-pencil"></i>
          </b-button>
          <b-button variant="danger" @click="loadCategory(data.item, 'remove')">
            <i class="fa fa-trash"></i>
          </b-button>
        </template>
      </b-table>
  </div>
</template>

<script>
import {baseUrl, showError} from '@/global';
import axios from 'axios'
export default {

  name: 'CategoryAdmin',
  data: function(){
    return {
      mode : 'save',
      category : {},
      categories : [],
      fields: [
        { key : "id", label: 'Código', sorttable: true},
        { key : 'name', label: 'Nome', sorttable: true},
        { key : 'path', label: 'Caminho',},
        { key : "actions" , label: 'Ações'}
      ]
    }
  },
  methods:{
    loadCategories(){
      const url = `${baseUrl}/categories`;
      axios.get(url).then(resp =>{
        // this.categories = ress.data
        this.categories = resp.data.map(category =>{
          return {...category, value: category.id, text: category.path}
        })
      })
    },
    loadCategory(cat, mode = 'save'){
      this.category= {
        id : cat.id,
        name : cat.name,
        parentId : cat.parentId
      }
      
      this.mode = mode
    },
    reset(){
      this.category = {};
      this.mode = 'save';
      this.loadCategories()
    },
    save(){
      const method = this.category.id ? 'put' : 'post';
      const id = this.category.id ? `${this.category.id}` : '';
      const url = `${baseUrl}/categories/${id}`;
      axios[method](url, this.category)
        .then(() =>{
          this.$toasted.global.defaultSuccess();
          this.reset();
        }).catch(error => {
          showError(error);
          this.reset()
        })
    },
    remove(){
      const id = this.category.id
      const url = `${baseUrl}/categories/${id}`
      axios.delete(url).then(() =>{
        this.$toasted.global.defaultSuccess();
        this.reset()
      }).catch(error => {
        showError(error);
        this.reset()
      })
    }
  },
  mounted(){
    this.loadCategories()
  }
}
</script>

<style>

</style>