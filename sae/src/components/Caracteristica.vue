<template>
<body class=" app-SaeApp model-caracteristica change-form">
  <!-- Container -->
  <div id="container">

    <!-- Header -->
    <NavBar></NavBar>
    <!-- END Header -->

    <div class="breadcrumbs">
      <a href="/#/saeinfo">Início</a>
      › <a href="/#/saeinfo/caracteristicas">Caracteristicas</a>
      › {{caracteristica.titulo}}
    </div>

    <!-- Content -->
    <div id="content" class="colM">
      <h1>Modificar caracteristica</h1>

      <div id="content-main">
        <ul class="object-tools">
          <li>
            <a href="/SaeApp/caracteristica/26/history/" class="historylink">Histórico</a>
          </li>
        </ul>
        <form  method="post" @submit.prevent v-on:submit="salvar" id="caracteristica_form">

          <p v-if="erro!== ''" class="errornote">
            {{erro}}
          </p>

          <div>
            <fieldset class="module aligned ">
              <div class="form-row field-titulo">
                <div>
                  <label class="required" for="id_titulo">Titulo:</label>
                  <input class="vTextFied" id="id_titulo" maxlength="250" name="titulo" type="text" v-model="caracteristica.titulo" required>
                </div>
              </div>
              <div class="form-row field-ocorrencias">
                <div>
                  <label class="required" for="id_ocorrencias">Ocorrencias:</label>
                  <input class="vIntegerField" id="id_ocorrencias" name="ocorrencias" type="number" v-model="caracteristica.ocorrencias" required>
                </div>
              </div>
            </fieldset>
            <div class="submit-row">
              <input type="submit" value="Salvar" class="default" name="_save">
              <p class="deletelink-box"><a href="/SaeApp/caracteristica/26/delete/" class="deletelink">Apagar</a></p>
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
  name: 'Caracteristica',
  data () {
    return {
      erro: '',
      caracteristica: {
      }
    }
  },
  components: {
    NavBar: NavBar
  },
  methods: {
    getCaracteristica () {
      let id = this.$route.params.idCaracteristica

      $.get('http://localhost/sae/listaCaracteristicas.php?id=' + id)
      .then(resposta => {
        console.log(resposta)
        if (resposta !== null) {
          this.caracteristica = resposta
        } else {
          window.location.replace('/#/saeinfo/caracteristicas')
        }
      },
      function () {
        console.log('deu error')
      })
    },
    salvar () {
      this.erro = ''
      console.log(this.caracteristica)
      $.post('http://localhost/sae/editarCaracteristica.php', JSON.stringify(this.caracteristica))
      .then(res => {
        console.log(res)
        if (res === true) {
          window.location.replace('/#/saeinfo/caracteristicas')
        } else if (res === 'existe') {

        } else {

        }
      })
    }
  },
  created: function () {
    this.getCaracteristica()
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
