<template>
  <body class=" app-SaeApp model-intervencao change-form">
    <!-- Container -->
    <div id="container">

      <!-- Header -->
        <NavBar></NavBar>
      <!-- END Header -->

      <div class="breadcrumbs">
        <a href="/#/saeinfo">Início</a>
        › <a href="/#/saeinfo/intervencoes">Intervenções</a>
        › {{intervencao.titulo}}
      </div>

      <!-- Content -->
      <div id="content" class="colM">
        <h1>Modificar intervencao</h1>
        <div id="content-main">
          <ul class="object-tools">
            <li>
              <a href="/SaeApp/intervencao/15/history/" class="historylink">Histórico</a>
            </li>
          </ul>
          <form @submit.prevent v-on:submit="salvar">
            <div>
              <fieldset class="module aligned">
                <div class="form-row field-titulo">
                  <div>
                    <label class="required" for="id_titulo">Titulo:</label>
                    <input class="vTextField" id="id_titulo" maxlength="250" type="text" v-model="intervencao.titulo" required>
                  </div>
                </div>
              </fieldset>
              <div class="submit-row">
                <input type="submit" value="Salvar" class="default" name="_save">
                <p class="deletelink-box">
                  <a href="/SaeApp/intervencao/15/delete/" class="deletelink">Apagar</a>
                </p>
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
  name: 'Intervencao',
  data () {
    return {
      erro: '',
      intervencao: {
      }
    }
  },
  components: {
    NavBar: NavBar
  },
  methods: {
    getIntervencao () {
      let id = this.$route.params.idIntervencao

      $.get('http://localhost/sae/listaIntervencoes.php?id=' + id)
      .then(resposta => {
        console.log(resposta)
        if (resposta !== null) {
          this.intervencao = resposta
        } else {
          window.location.replace('/#/saeinfo/intervencaos')
        }
      },
      function () {
        console.log('deu error')
      })
    },
    salvar () {
      this.erro = ''
      console.log(this.intervencao)
      $.post('http://localhost/sae/editarIntervencao.php', JSON.stringify(this.intervencao))
      .then(res => {
        console.log(res)
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
  created: function () {
    this.getIntervencao()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import url('../../static/css/forms.css');
  .vTextFied {
    width: 50% !important;
  }
</style>
