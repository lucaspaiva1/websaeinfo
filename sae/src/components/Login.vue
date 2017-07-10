<template>
  <body class="login">
      <!-- Container -->
      <div id="container">
          <!-- Header -->
          <div id="header">
              <div id="branding">
                  <a class="navbar-brand" href="/">
                      <h1 style="color: black;"> <img src="../../static/logoFinal1.png" style="width:70px;"></h1>
                  </a>
              </div>
          </div>
          <!-- END Header -->

          <!-- Content -->
          <div id="content" class="colM">
              <p v-if="error != ''" class="errornote">
                  {{error}}
              </p>
              <div id="content-main">
                  <form method="post" @submit.prevent v-on:submit="logar">
                      <div class="form-row">
                          <label for="id_username">Usuário:</label> <input id="id_username" maxlength="254" type="text" required>
                      </div>
                      <div class="form-row">
                          <label for="id_password">Senha:</label> <input id="id_password" type="password" required>
                          <input type="hidden" name="next" value="/">
                      </div>
                      <div class="submit-row">
                          <button type="submit" name="button">Acessar</button>
                          <a href="">Esqueceu a senha?</a>
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

var $ = require('jquery')

export default {
  data () {
    return {
      error: ''
    }
  },
  methods: {
    logar () {
      this.error = ''

      let login = $('#id_username').val()
      let senha = $('#id_password').val()

      $.post('http://localhost/sae/login.php', JSON.stringify({
        login: login,
        senha: senha
      }))
        .then(resposta => {
          if (resposta === 'login') {
            this.error = 'Login inválido!'
          } else if (resposta === 'senha') {
            this.error = 'Senha inválida!'
          } else {
            sessionStorage.setItem('user', JSON.stringify(resposta))
            // let user = JSON.parse(sessionStorage.getItem("user"))
            // window.location.replace('./home.html')
            this.$router.push('/saeinfo')
            // console.log(resposta)
          }
        }).fail(() => {
          //  caso falhe
          this.error = 'Erro de comunicação! Favor checar a conexão com a internet'
          console.log('error')
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* LOGIN FORM */

body.login {
    background: #eee;
}

.login #container {
    background: white;
    border: 1px solid #ccc;
    width: 28em;
    min-width: 300px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 100px;
}

.login #content-main {
    width: 100%;
}

.login form {
    margin-top: 1em;
}

.login .form-row {
    padding: 4px 0;
    float: left;
    width: 100%;
    text-align: left !important;

}

label {
  text-align: left !important;
}

.login .form-row label {
    padding-right: 0.5em;
    line-height: 2em;
    font-size: 1em;
    clear: both;
    color: #333;
}

.login .form-row #id_username, .login .form-row #id_password {
    clear: both;
    padding: 6px;
    width: 100%;
    -webkit-box-sizing: border-box;
       -moz-box-sizing: border-box;
            box-sizing: border-box;
}

.login span.help {
    font-size: 10px;
    display: block;
}

.login .submit-row {
    clear: both;
    padding: 1em 0 0 9.4em;
}

.login .password-reset-link {
    text-align: center;
}

</style>
