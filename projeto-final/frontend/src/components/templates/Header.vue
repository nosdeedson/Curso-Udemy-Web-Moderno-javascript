<template>
  <header class="header">
    <a class="toggle" @click="toggleMenu" v-if="!hideToggle">
      <i class="fa fa-lg" :class="icon"></i>
    </a>
    <h1 class="titulo">
      <router-link to="/">{{title}}</router-link>
    </h1>
    <UserDropDown v-if="!hideUserDropDown"></UserDropDown>
    <a class="entrar" v-if="hideUserDropDown" 
      @click="setCaminhoTitulo">{{caminho}}</a>
  </header>
</template>

<script>
import UserDropDown from "./UserDropDown.vue";
export default {
  name: "header",
  props: {
    title: String,
    hideToggle: Boolean,
    hideUserDropDown: Boolean,
  },
  computed: {
    icon() {
      return this.$store.state.isMenuVisible
        ? "fa-angle-left"
        : "fa-angle-down";
    },
  },
  methods: {
    toggleMenu() {
      this.$store.commit("toggleMenu");
    },
    setCaminhoTitulo(){
      if ( this.$route.name === 'home'){
        this.caminho = 'Home'
        this.$router.push({path: '/auth'})
      }else{
        this.caminho = 'Login'
        this.$router.push({path: '/'})
      }
    }
  },
  data: function(){
    return {
      caminho : 'Login'
    }
  },
  components: {
    UserDropDown,
  }
};
</script>

<style>
.header {
  grid-area: header;
  background-image: linear-gradient(to right, #1e469a, #49a7c1);
  display: flex;
  justify-content: center;
  align-items: center;
}

.titulo {
  font-size: 1.2rem;
  color: #fff;
  font-weight: 100;
  flex-grow: 1;
  text-align: center;
}

.titulo a {
  color: #fff;
  text-decoration: none;
}

.titulo a:hover {
  color: #fff;
  text-decoration: none;
}

.header.header > a.toggle {
  width: 60px;
  height: 100%;
  color: #fff;
  justify-self: flex-start;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
}

.header.header > a.toggle:hover {
  background-color: rgba(0, 0, 0, 0.5);
}

.entrar{
  margin-right: 15px;
  padding: 5px;
  text-decoration: none;
  font-size: 1.2rem;
}

.entrar:hover{
  text-decoration: none;
  transform: scale(1.2);
}
</style>