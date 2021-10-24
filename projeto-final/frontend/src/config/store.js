import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({ 
    state:{
        isMenuVisible : false,
        user:null,
        caminho: '/auth',
        titulo : 'Login'
    },
    mutations:{
        toggleMenu(state, isVisible){
            if (!state.user){
                state.isMenuVisible = false
                state.hideToggle = false
                return;
            }
            if( isVisible === undefined){
                state.isMenuVisible = !state.isMenuVisible
            }else{
                state.isMenuVisible = isVisible
            }
        },        
        setUser(state, user){
            state.user = user
            if(user){
                axios.defaults.headers.common['Authorization']  = 'bearer ' + user.token
                state.isMenuVisible = true
                state.hideToggle = true
            }else{
                delete axios.defaults.headers.common
                state.isMenuVisible= false
            }
        },
        setCaminhoTituloUsuarioNaoLogado(state, titulo, caminho){
            state.titulo = titulo
            state.caminho = caminho
        }
    }
})
