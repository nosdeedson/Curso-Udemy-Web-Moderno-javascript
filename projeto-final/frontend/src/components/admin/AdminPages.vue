<template>
  <div>
    <PageTitle
      icon="fa fa-cogs"
      main="Administração do Sistema"
      sub="Cadastro & Cia"
    ></PageTitle>
    <div class="admin-pages-tabs">
        <b-card no-body>
            <b-tabs card>
                <b-tab title="Artigos">
                    <ArticleAdmin/>
                </b-tab>
                <b-tab title="Categorias">
                    <CategoryAdmin/>
                </b-tab>
                <b-tab title="Usuarios" >
                    <UserAdmin/>
                </b-tab>
            </b-tabs>
        </b-card>
    </div>
  </div>
</template>

<script>
import PageTitle from "../templates/PageTitle.vue";
import ArticleAdmin from "./ArticleAdmin.vue";
import CategoryAdmin from "./CategoryAdmin.vue";
import UserAdmin from "./UserAdmin.vue";

export default {
  name: "adimPages",
  components: { PageTitle, ArticleAdmin, CategoryAdmin, UserAdmin },
};
</script>

<style>
</style>