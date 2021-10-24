<template>
  <div class="user-admin">
    <b-form class="my-3">
      <input id="user-id" type="hidden" v-model="user.id" />
      <!-- Nome e email -->
      <b-row>
        <b-col md="6" sm="12">
          <b-form-group label="Nome" label-for="user-name">
            <b-form-input
              id="user-name"
              type="text"
              v-model="user.name"
              required :readonly="mode === 'remove'"
              placeholder="Digite o nome do usuáiro..."
            />
          </b-form-group>
        </b-col>
        <b-col md="6" sm="12">
          <b-form-group label="E-mail" label-for="user-email">
            <b-form-input
              id="user-email"
              type="text"
              v-model="user.email"
              required :readonly="mode === 'remove'"
              placeholder="Digite o E-mail do usuáiro..."
            />
          </b-form-group>
        </b-col>
      </b-row>

      <!-- Senha -->
      <b-row  v-show="!updateUser">
        <b-col md="6" sm="12">
          <b-form-group label="Senha" label-for="user-password">
            <b-form-input
              id="user-password"
              type="password"
              v-model="user.password"
              required
              placeholder="Digite a senha"
            />
          </b-form-group>
        </b-col>
        <b-col md="6" sm="12">
          <b-form-group
            label="Confirmação de Senha"
            label-for="user-confirmPassword"
          >
            <b-form-input
              id="user-confirmPassword"
              type="password"
              v-model="user.confirmPassword"
              required
              placeholder="Confirma a senha"
            />
          </b-form-group>
        </b-col>
      </b-row>

      <!-- Administrador -->
      <div class="d-flex justify-content-end">
        <b-form-checkbox 
          variant="warning"
          id="user-admin"
          v-model="user.admin" :disabled="mode === 'remove'"
          label="Administrador"
          class="my-3">
          Administrador?
        </b-form-checkbox>
      </div>
      <div class="d-flex justify-content-end">
        <b-button variant="primary" v-if="mode === 'save'" @click="save"
          >Salvar</b-button
        >
        <b-button variant="danger" v-if="mode === 'remove'" @click="remove"
          >Excluir</b-button
        >
        <b-button class="ml-2" @click="reset">Cancelar</b-button>
      </div>
    </b-form>
    <hr />
    <b-table hover striped :items="users" :fields="fields">
      <template slot="actions" slot-scope="data">
        <b-button class="mr-2" variant="warning" @click="loadUser(data.item)">
          <i class="fa fa-pencil"></i>
        </b-button>
        <b-button variant="danger" @click="loadUser(data.item, 'remove')">
          <i class="fa fa-trash"></i>
        </b-button>
      </template>
    </b-table>
  </div>
</template>

<script>
import { baseUrl, showError } from "@/global";
import axios from "axios";

export default {
  name: "UserAdmin",
  data: function () {
    return {
      mode: "save",
      updateUser: false,
      user: {},
      users: [],
      fields: [
        { key: "id", label: "Código", sortable: true },
        { key: "name", label: "Nome", sortable: true },
        { key: "email", label: "E-mail", sortable: true },
        {
          key: "admin",
          label: "Administrador",
          sortable: true,
          formatter: (value) => (value ? "Sim" : "Não"),
        },
        { key: "actions", label: "Ações" },
      ],
    };
  },
  methods: {
    loadUsers() {
      const url = `${baseUrl}/users`;
      axios.get(url).then((res) => {
        this.users = res.data;
      });
    },
    loadUser(user, mode = 'save'){
        this.user = {...user}
        this.updateUser = true
        this.mode = mode
    },
    save: async function () {
      const method = this.user.id ? "put" : "post";
      const id = this.user.id ? `${this.user.id}` : "";
      const url = `${baseUrl}/users/${id}`;
      await axios[method](url, this.user)
        .then(() => {
          this.$toasted.global.defaultSuccess();
          this.reset();
        })
        .catch((error) => {
          showError(error);
          this.reset();
        });
    },
    reset() {
      (this.user = {}), (this.mode = "save"), this.loadUsers();
      this.updateUser = false
    },
    remove(){
        const id = this.user.id
        const url = `${baseUrl}/users/${id}`
        axios.delete(url)
            .then(() =>{
                this.$toasted.global.defaultSuccess();
                this.loadUsers();
            }).catch(showError)
        this.reset();
    }
  },
  mounted() {
    this.loadUsers();
  },
};
</script>

<style>
</style>