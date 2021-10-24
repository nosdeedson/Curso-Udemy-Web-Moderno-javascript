<template>
  <div>
    <PageTitle icon="fa fa-home" main="Dasboard" sub="Base de conhecimento" />
    <div class="stat-home">
        <Stat
          title="Categorias"
          icon="fa fa-folder"
          :value="stat.categories"
          color="#d54d50"
        />
        <Stat
          title="Artigos"
          :value="stat.articles"
          icon="fa fa-file"
          color="#3bc480"
        />
        <Stat
          title="Usuários"
          :value="stat.users"
          icon="fa fa-user"
          color="#3282cd"
        />
    </div>
  </div>
</template>

<script>
import PageTitle from "../templates/PageTitle.vue";
import Stat from "./Stat.vue";
import axios from "axios";
import { baseUrl } from "@/global";

export default {
  name: "Home",
  components: { PageTitle, Stat },
  data: function () {
    return {
      stat: {},
    };
  },
  methods: {
    getStats() {
      axios
        .get(`${baseUrl}/stats`)
        .then((result) => (this.stat = result.data))
    },
  },
  mounted() {
    this.getStats();
  },
};
</script>

<style>
.stat-home {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>