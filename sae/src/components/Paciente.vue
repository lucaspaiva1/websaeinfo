<template>

  <body class=" app-SaeApp model-paciente change-form">

      <!-- Container -->
      <div id="container">
          <!-- Header -->
          <NavBar></NavBar>
          <!-- END Header -->
          <div id="contenta">

              <div class="breadcrumbs">
                  <a href="/#/saeinfo">Início</a> › <a href="/#/saeinfo/pacientes">Pacientes</a> › {{paciente.Nome}}
              </div>
              <!-- Content -->
              <div id="content" class="colM">
                  <h1>Modificar paciente</h1>
                  <div id="content-main">
                      <ul class="object-tools">
                          <li>
                              <a :href="'#/saeinfo/paciente/'+paciente.id+'/historico'" class="historylink">Histórico de Enfermagem</a>
                          </li>
                      </ul>

                      <form method="post" @submit.prevent v-on:submit="salvar" id="paciente_form">
                          <div>
                              <fieldset class="module aligned ">

                                  <div class="form-row field-Nome field-Idade field-Sexo">
                                      <div class="field-box field-Nome">
                                          <label class="required" for="id_Nome">Nome:</label>

                                          <input class="vTextField" id="id_Nome" maxlength="60" type="text" v-model="paciente.Nome">
                                      </div>
                                      <div class="field-box field-Idade">
                                          <label class="inline" for="id_Idade">Idade:</label>
                                          <input class="vTextField" id="id_Idade" maxlength="3" type="text" v-model="paciente.Idade">

                                      </div>
                                      <div class="field-box field-Sexo">
                                          <label class="inline" for="id_Sexo">Sexo:</label>

                                          <select id="id_Sexo" name="Sexo" v-model="paciente.Sexo">
                                        <option value="">---------</option>
                                        <option value="Masculino">Masculino</option>
                                        <option value="Feminino">Feminino</option>
                                      </select>
                                      </div>
                                  </div>

                                  <div class="form-row field-Religiao field-Profissao field-Estado_Civil">
                                      <div class="field-box field-Religiao">
                                          <label for="id_Religiao">Religião:</label>
                                          <input class="vTextField" id="id_Religiao" maxlength="50" type="text" v-model="paciente.Religiao">
                                      </div>
                                      <div class="field-box field-Profissao">
                                          <label class="inline" for="id_Profissao">Profissão:</label>
                                          <input class="vTextField" id="id_Profissao" maxlength="50" type="text" v-model="paciente.Profissao">
                                      </div>
                                      <div class="field-box field-Estado_Civil">
                                          <label class="inline" for="id_Estado_Civil">Estado Civil:</label>
                                          <select id="id_Estado_Civil" v-model="paciente.Estado_Civil">
                                        <option value="">---------</option>
                                        <option value="Solteiro">Solteiro</option>
                                        <option value="Casado">Casado</option>
                                        <option value="Viuvo">Viuvo</option>
                                        <option value="Outros">Outros</option>
                                      </select>
                                      </div>
                                  </div>
                                  <div class="form-row field-Naturalidade field-Procedencia field-Data_de_internacao">

                                      <div class="field-box field-Naturalidade">
                                          <label for="id_Naturalidade">Naturalidade:</label>
                                          <input class="vTextField" id="id_Naturalidade" maxlength="50" type="text" v-model="paciente.Naturalidade">
                                      </div>
                                      <div class="field-box field-Procedencia">
                                          <label class="inline" for="id_Procedencia">Procedência:</label>
                                          <input class="vTextField" id="id_Procedencia" maxlength="50" type="text" v-model="paciente.Procedencia">
                                      </div>
                                      <div class="field-box field-Data_de_internacao">
                                          <label class="required inline" for="id_Data_de_internacao">Data de internação:</label>
                                          <input class="vDateField" id="id_Data_de_internacao" size="10" type="date" v-model="paciente.Data_de_internacao"><span class="datetimeshortcuts">&nbsp<a class='todaybutton' v-on:click="today">Hoje</a></span>
                                      </div>
                                  </div>
                                  <div class="form-row field-Registro field-Internacao_Anterior">
                                      <div class="field-box field-Registro">
                                          <label for="id_Registro">Registro:</label>
                                          <input class="vTextField" id="id_Registro" maxlength="40" type="text" v-model="paciente.Registro">
                                      </div>
                                  </div>
                                  <div class="form-row field-Setor_de_Procedencia field-Leito">
                                      <div class="field-box field-Setor_de_Procedencia">
                                          <label for="id_Setor_de_Procedencia">Setor de Procedência:</label>
                                          <input class="vTextField" id="id_Setor_de_Procedencia" maxlength="50" type="text" v-model="paciente.Setor_de_Procedencia">
                                      </div>
                                      <div class="field-box field-Setor_de_Procedencia">
                                          <label for="id_Clinica">Clinica:</label>
                                          <input class="vTextField" id="id_Clinica" maxlength="50" type="text" v-model="paciente.Clinica">
                                      </div>
                                      <div class="field-box field-Leito">
                                          <label class="inline" for="id_Leito">Leito:</label>
                                          <input class="vTextField" id="id_Leito" maxlength="50" type="text" v-model="paciente.Leito">
                                      </div>
                                  </div>
                                  <div class="form-row field-Diagnostico_Medico">
                                      <div>
                                          <label for="id_Diagnostico_Medico">Diagnóstico Médico:</label>
                                          <textarea class="vLargeTextField" cols="40" id="id_Diagnostico_Medico" rows="10" v-model="paciente.Diagnostico_Medico"></textarea>
                                      </div>
                                  </div>
                              </fieldset>
                              <div class="submit-row">
                                  <button type="submit">Salvar</button>
                                  <!-- <input type="submit" value="Salvar" class="default"> -->
                                  <p class="deletelink-box"><a href="/SaeApp/paciente/70/delete/" class="deletelink">Apagar</a></p>
                              </div>
                          </div>
                      </form>
                  </div>
                  <br class="clear">
              </div>
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
  name: 'Paciente',
  data () {
    return {
      paciente: {
      }
    }
  },
  components: {
    NavBar: NavBar
  },
  methods: {
    getPacientes () {
      let id = this.$route.params.idPaciente

      $.get('http://localhost/sae/listaPacientes.php?id=' + id)
      .then(resposta => {
        this.paciente = resposta
      },
      function () {
        console.log('deu error')
      })
    },
    salvar () {
      this.mensagem = ''
      console.log(this.paciente)

      $.post('http://localhost/sae/editarPaciente.php', JSON.stringify(this.paciente))
      .then(res => {
        console.log(res)
      })
    },
    today () {
      let data = new Date()
      let hoje = data.getFullYear() + '-' + (data.getMonth() + 1 > 9 ? (data.getMonth() + 1) : '0' + (data.getMonth() + 1)) + '-' + (data.getDate() > 9 ? (data.getDate()) : '0' + (data.getDate()))
      this.paciente.Data_de_internacao = hoje
    }
  },
  created: function () {
    this.getPacientes()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import url('../../static/css/forms.css');
</style>
