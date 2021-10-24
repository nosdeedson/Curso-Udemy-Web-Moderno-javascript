<template>
    <div class="auth-content">
        <div class="auth-modal">
            <img src="@/assets/logo.png" alt="logo" width="200">
            <hr>
            <div class="auth-title">{{showSignup ? 'Cadastro' : 'Login'}}</div>
            <input type="text" v-if="showSignup" v-model="user.name" placeholder="Nome" class="my-2">
            <input type="text" v-model="user.email" placeholder="E-mail" name="email" class="my-2">
            <input type="password" v-model="user.password" placeholder="Senha" name="password" class="my-2">
            <input type="password" v-model="user.confirmPassword" v-if="showSignup" class="my-2"
                 placeholder="Confirme Senha">

            <button v-if="showSignup" @click="signup" class="my-2 btn btn-primary">Registrar</button>
            <button v-else @click="signin" class="my-2 btn btn-info">Entrar</button>
         
            <a href @click.prevent="showSignup = !showSignup" >
                <span v-if="showSignup">Já tem cadastro? Acesse o Login.</span>
                <span v-else>Não tem cadastro? Registre-se aqui.</span>
            </a>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import {baseUrl, showError, userKey} from '@/global'
export default {
    name :  'Auth',
    data: function(){
        return{
            showSignup: false,
            user: {}
        }
    },
    methods:{
        signin(){
            axios.post(`${baseUrl}/signin`, this.user)
                .then(resp => {
                    this.$store.commit('setUser', resp.data)
                    localStorage.setItem(userKey, JSON.stringify(resp.data))
                    this.$router.push({path: '/'})
                }).catch(showError)
        },
        signup(){
            axios.post(`${baseUrl}/signup`, this.user)
            .then(() =>{
                this.$toasted.global.defaultSuccess()
                this.user = {}
                this.showSignup = false
            }).catch(error => showError(error))
        }
    }
}
</script>

<style>
    .auth-content{
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .auth-modal{
        background-color: #fff;
        width: 350px;
        padding: 35px;
        box-shadow: 0 1px 5px rgba(0, 0, 0, 0.3);
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .auth-modal > a{
        text-decoration: none;
        color: blue;
        margin-top: 8px;
    }

    .auth-modal > a:hover{
        text-decoration: none;
        color: green;
        transform: scale(1.2);
    }

    .auth-modal button{
        align-self: flex-end;
        padding: 5px 15px;
    }

    .auth-modal hr{
        border: 0;
        width: 100%;
        height: 1px;
        background-image: linear-gradient(to right,
            rgba(120, 120, 120, 0),
            rgba(120, 120, 120, 0.75),
            rgba(120, 120, 120, 0));
    }

    .auth-modal input{
        width: 100%;
        outline: none;
    }

    .auth-title{
        font-size: 1.3rem;
    }

    .auth-modal span{
        font-size: 1.1rem;
    }
</style>