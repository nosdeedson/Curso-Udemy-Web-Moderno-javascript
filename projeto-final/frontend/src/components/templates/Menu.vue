<template>
  <aside class="menu" v-show="isMenuVisible">
      <div class="menu-filter mt-2">
          <i class="fa fa-search mx-2"></i>
          <input type="text" v-model="treeFilter" class="filter-field" placeholder="Digite para filtrar...">
      </div>
      <Tree :data="treeData" :options="treeOptions"
            :filter="treeFilter" ref="tree" />
  </aside>
</template>

<script>
import {mapState} from 'vuex';
import Tree from 'liquor-tree'
import {baseUrl} from '@/global';
import axios from 'axios'
export default {
    name: 'menu',
    computed: mapState(['isMenuVisible']),
    components: {Tree},
    methods:{
        getTreeData(){
            const url = `${baseUrl}/categories/tree`;
            return axios.get(url).then(res => res.data)
        },
        onNodeSelected(node){
            this.$router.push({
                name : 'articles',
                params: {id : node.id}
            })
        }
    },
    data: function(){
        return {
            treeFilter: '',
            treeData : this.getTreeData(),
            treeOptions:{
                propertyNames: {'text' : 'name'},
                filter:{
                    emptyText: 'Categoria não encontrada'
                }
            }
        }
    },
    mounted(){
        this.$refs.tree.$on('node:selected', this.onNodeSelected)
    }
}
</script>

<style>
    
    .menu{
        grid-area: menu;
        background-image: linear-gradient(to right, #232526, #414345);
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
    }

    .menu a,
    .menu a:hover{
        color: #fff;
        text-decoration: none;
    }

    .menu .tree-node.selected > .tree-content,
    .menu .tree-node .tree-content:hover{
        background-color: rgba(255, 255, 255, 0.2);
    }

    .tree-arrow.has-child{
        filter: brightness(2);
    }

    .menu .menu-filter{
        display: flex;
        justify-content: center;
        align-items: center;
        padding-bottom: 8px;
        border-bottom: 1px solid #AAA;
    }

    .menu .menu-filter i{
         color: #AAA;
    }

    .menu input{
        color: #CCC;
        font-size: 1.3rem;
        border: 0;
        outline: 0;
        width: 100%;
        background: transparent;
    }

    .tree-filter-empty{
        color: rgb(233, 230, 230);
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.3rem;
    }

</style>