<template>
	<div id="app" :class="{'hide-menu' : !isMenuVisible || !user}">
		<Header title="Curso Web Moderno Projeto Final" :hideToggle="!user"
			:hideUserDropDown="!user"></Header>
		<Loading v-if="validatingToken"></Loading>
		<Content v-else></Content>
		<Menu v-if="user"></Menu>
		<Footer></Footer>
	</div>
</template>

<script>
import Content from '@/components/templates/Content.vue' //o '@' substitui a pasta src no caminho dos arquivos
import Header from '@/components/templates/Header.vue'
import Menu from '@/components/templates/Menu.vue'
import Footer from '@/components/templates/Footer.vue'
import {mapState} from 'vuex'
import axios from 'axios';
import {baseUrl, userKey } from '@/global';
import Loading from "@/components/templates/Loading.vue"

export default {
	name: "App",
	components : {Header, Content, Footer, Menu, Loading},
	computed: mapState(['isMenuVisible', 'user']),
	data: function(){
		return {
			validatingToken: false
		}
	},
	methods:{
		async validateToken(){
			this.validatingToken = true;
			const json = localStorage.getItem(userKey);
			const userData = JSON.parse(json);
			this.$store.commit('setUser', null)

			if(!userData){
				this.validatingToken = false;
				this.$router.push({name : '/auth'})
				return;
			}

			let resposta;

			await axios.post(`${baseUrl}/validateToken`, userData)
						.then(resp => resposta = resp.data)
			
			if( resposta){
				this.$sotre.commit('setUser', userData)
			}else{
				localStorage.removeItem(userKey)
				this.$router.push({name:  '/auth'})
			}
			this.validatingToken = false;
		}
	},
	created(){
		this.validatingToken()
	}
}
</script>

<style>
	*{
		font-family: 'Lato', sans-serif;
	}

	body{
		margin: 0%;
	}

	#app {
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		height: 100vh;
		display: grid;
		grid-template-rows: 60px 1fr 40px;
		grid-template-columns: 300px 1fr;
		grid-template-areas:
			"header header"
			"menu content"
			"menu footer";
	}

	#app.hide-menu{
		grid-template-areas: 
			"header header"
			"content content"
			"footer footer";
	}
</style>