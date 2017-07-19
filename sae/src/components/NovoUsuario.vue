<template>
  <body class=" app-auth model-user change-form">
    <!-- Container -->
    <div id="container">

      <!-- Header -->
      <NavBar></NavBar>
      <!-- END Header -->

      <div class="breadcrumbs">
        <a href="/#/saeinfo/">Início</a> ›
        <a href="/#/saeinfo/usuarios">Usuários</a> ›
        Adicionar Usuário
      </div>

      <!-- Content -->
      <div id="content" class="colM">
        <h1>Adicionar usuário</h1>

        <div id="content-main">
          <form method="post" @submit.prevent v-on:submit="cadastrar" id="user_form">
            <p>Primeiro, informe um nome de usuário e senha. Depois você será capaz de editar mais opções do usuário.</p>
            <div>

              <p v-if="erro!== ''" class="errornote">
                Por favor, corrija os erros abaixo:
                <br>
                {{erro}}
              </p>

              <fieldset class="module aligned wide">
                <div class="form-row field-username">
                  <div>
                    <label class="required" for="id_username">Usuário:</label>
                      <input id="id_username" maxlength="30" name="username" type="text" required v-model="usuario.username">
                        <p class="help">Obrigatório. 30 caracteres ou menos. Somente letras, dígitos e @/./+/-/_.</p>
                  </div>
                </div>

                <div class="form-row field-password1">
                  <div>
                    <label class="required" for="id_password1">Senha:</label>
                      <input id="id_password1" name="password1" type="password" minlength="4" required v-model="usuario.password">
                  </div>
                </div>

                <div class="form-row field-password2">
                  <div>
                    <label class="required" for="id_password2">Confirmação de senha:</label>
                    <input id="id_password2" name="password2" type="password" required v-model="usuario.confirm">
                    <p class="help">Informe a mesma senha digitada acima, para verificação.</p>
                  </div>
                </div>

                <div class="form-row field-username">
                  <div>
                    <label class="required" for="first_name">Primeiro Nome:</label>
                      <input id="first_name" name="first_name" type="text" required v-model="usuario.first_name">
                  </div>
                </div>

                <div class="form-row field-username">
                  <div>
                    <label class="required" for="last_name">Último Nome:</label>
                      <input id="last_name" name="last_name" type="text" required v-model="usuario.last_name">
                  </div>
                </div>

                <div class="form-row field-username">
                  <div>
                    <label class="required" for="email">Email:</label>
                      <input id="email" name="email" type="text" required v-model="usuario.email">
                        <p class="help">Obrigatório. Utilizado para recuperação de senha.</p>
                  </div>
                </div>

                <div class="form-row field-is_staff">
                  <div class="checkbox-row">
                    <input id="id_is_staff" name="is_staff" type="checkbox" v-model="usuario.is_staff">
                    <label class="vCheckboxLabel" for="id_is_staff">Membro da equipe</label>
                    <p class="help">Indica que usuário consegue acessar este site de administração.</p>
                  </div>
                </div>

                <div class="form-row field-is_superuser">
                  <div class="checkbox-row">
                    <input id="id_is_superuser" name="is_superuser" type="checkbox" v-model="usuario.is_superuser">
                    <label class="vCheckboxLabel" for="id_is_superuser">Status de superusuário</label>
                    <p class="help">Indica que este usuário tem todas as permissões sem atribuí-las explicitamente.</p>
                  </div>
                </div>
              </fieldset>

              <div class="submit-row">
                <input type="submit" value="Salvar" class="default" name="_save">
              </div>
            </div>
          </form>
        </div>

          <br class="clear">
      </div>
      <!-- END Content -->
      <div id="footer"></div>
    </div>
  <!-- END Container -->
  </body>
</template>


<script>
import NavBar from '@/components/NavBar'

var $ = require('jquery')

export default {
  name: 'NovoUsuario',
  data () {
    return {
      usuario: {
        username: '',
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        confirm: '',
        is_staff: '',
        is_superuser: ''
      },
      erro: ''
    }
  },
  methods: {
    cadastrar () {
      this.erro = ''

      // verificar a senha
      if (this.password === this.confirm) {
        // post para cadastrar usuario
        $.post('http://localhost/sae/addUsuario.php', JSON.stringify(this.usuario))
        .then(res => {
          console.log(res)
        })
        // verificar resposta
        console.log(this.erro)

        console.log(this.usuario)
      } else {
        this.erro = 'senhas não coincidentes'
      }
    }
  },
  components: {
    NavBar: NavBar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import url('../../static/css/forms.css');
</style>
