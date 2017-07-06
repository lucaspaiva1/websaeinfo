<template>
  <body class="login">
    <!-- Header -->
    <div id="header">
        <div id="branding">
            <a class="navbar-brand" href="./home.html">

                <h1> <img src="../../static/logoFinal1.png" style="width:70px;"> </h1>
            </a>
        </div>

        <div id="user-tools">

            Bem-vindo(a),
            <strong>{{nome}}</strong>.
            <a href="/password_change/">Alterar senha</a> /
            <a href="/%2FSaeApp/relatorios"> Visualizar relatórios</a> /
            <a href="/logout/">Encerrar sessão</a>

        </div>

        <br> <br> <b></b>
    </div>
    <!-- END Header -->

  </body>

</template>


<script>

export default {
  name: 'NavBar',
  data () {
    return {
      nome: this.nome
    }
  },
  created: function () {
    let user = JSON.parse(sessionStorage.getItem('user'))
    this.nome = user.first_name
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
