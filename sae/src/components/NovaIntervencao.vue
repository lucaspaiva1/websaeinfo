<template>
<body class=" app-SaeApp model-intervencao change-form">

  <!-- Container -->
  <div id="container">
    <!-- Header -->
    <NavBar></NavBar>
    <!-- END Header -->

    <div class="breadcrumbs">
      <a href="/#/saeinfo/">Início</a>
      › <a href="/#/saeinfo/intervencoes/">Intervenções</a>
      › Adicionar intervencao
    </div>

    <!-- Content -->
    <div id="content" class="colM">
      <h1>Adicionar intervencao</h1>
      <div id="content-main">
        <form @submit.prevent v-on:submit="cadastrar">

          <p v-if="erro!== ''" class="errornote">
            {{erro}}
          </p>

          <div>
            <fieldset class="module aligned ">
              <div class="form-row field-titulo">
                <div>
                  <label class="required" for="id_titulo">Titulo:</label>
                  <input class="vTextField" id="id_titulo" maxlength="250" type="text" required v-model="intervencao.titulo">
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
  name: 'NovaIntervencao',
  data () {
    return {
      intervencao: {
        titulo: ''
      },
      erro: ''
    }
  },
  methods: {
    cadastrar () {
      console.log(this.intervencao)
      this.erro = ''
      // post para cadastrar usuario
      $.post('http://localhost/sae/addIntervencao.php', JSON.stringify(this.intervencao))
      .then(res => {
        // verificar resposta
        if (res === true) {
          window.location.replace('/#/saeinfo/intervencoes')
        } else if (res === 'existe') {
          this.erro = 'intervenção já existe no sistema'
        } else {
          this.erro = 'erro ao cadastrar'
        }
      })
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
