<template>

<body class=" app-SaeApp model-paciente change-form">

    <!-- Container -->
    <div id="container">
        <!-- Header -->
        <NavBar></NavBar>
        <!-- END Header -->
        <div id="contenta">

            <div class="breadcrumbs">
                <a href="./home.html">Início</a> › <a href="./pacientes.html">Pacientes</a> › {{paciente.Nome}}
            </div>
            <!-- Content -->
            <div id="content" class="colM">
                <h1>Adicionar Paciente</h1>
                <div id="content-main">

                    <form method="post" @submit.prevent v-on:submit="cadastrar" id="paciente_form">
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
                                    <option value="masculino">Masculino</option>
                                    <option value="feminino">Feminino</option>
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
                                    <option value="Casado">Casado</option>
                                    <option value="Divorciado">Divorciado</option>
                                    <option value="Solteiro">Solteiro</option>
                                    <option value="Viúvo">Viúvo</option>
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
                                      <input class="vDateField" id="id_Data_de_internacao" size="10" type="date" v-model="paciente.Data_de_internacao"><span class="datetimeshortcuts">&nbsp;<a class='todaybutton' v-on:click="today">Hoje</a></span>
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
  name: 'NovoPaciente',
  data () {
    return {
      paciente: {
        Antecedentes: '',
        Clinica: '',
        Data_de_internacao: '',
        Diagnostico_Medico: '',
        Estado_Civil: '',
        Idade: '',
        Internacao_Anterior: '',
        Leito: '',
        Naturalidade: '',
        Nome: '',
        Procedencia: '',
        Profissao: '',
        Registro: '',
        Religiao: '',
        Setor_de_Procedencia: '',
        Sexo: ''
      }
    }
  },
  components: {
    NavBar: NavBar
  },
  methods: {
    cadastrar () {
      this.erro = ''

      $.post('http://localhost/sae/addPaciente.php', JSON.stringify(this.paciente))
      .then(res => {
        console.log(res)
        if (res !== false) {
          //  armazena informacoes do novo paciente
          sessionStorage.setItem('novoPaciente', JSON.stringify(res))
          //  redireciona para tela de editar o paciente
          window.location.replace('#/saeinfo/paciente/' + res + '/historico/novo')
        }
      })
    },
    today () {
      let data = new Date()
      let hoje = data.getFullYear() + '-' + (data.getMonth() + 1 > 9 ? (data.getMonth() + 1) : '0' + (data.getMonth() + 1)) + '-' + (data.getDate() > 9 ? (data.getDate()) : '0' + (data.getDate()))
      this.paciente.Data_de_internacao = hoje
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('../../static/css/widgets.css');

/* FORM ROWS */

.form-row {
    overflow: hidden;
    padding: 8px 12px;
    font-size: 11px;
    border-bottom: 1px solid #eee;
}

.form-row img, .form-row input {
    vertical-align: middle;
}

form .form-row p {
    padding-left: 0;
    font-size: 11px;
}

.hidden {
    display: none;
}

/* FORM LABELS */

form h4 {
    margin: 0 !important;
    padding: 0 !important;
    border: none !important;
}

label {
    font-weight: normal !important;
    color: #666;
    font-size: 12px;
}

.required label, label.required {
    font-weight: normal !important;
    color: #333 !important;
}

/* RADIO BUTTONS */

form ul.radiolist li {
    list-style-type: none;
}

form ul.radiolist label {
    float: none;
    display: inline;
}

form ul.inline {
    margin-left: 0;
    padding: 0;
}

form ul.inline li {
    float: left;
    padding-right: 7px;
}

/* ALIGNED FIELDSETS */

.aligned label {
    display: block;
    padding: 3px 10px 0 0;
    float: left;
    width: 8em;
    word-wrap: break-word;
}

.aligned ul label {
    display: inline;
    float: none;
    width: auto;
}

.colMS .aligned .vLargeTextField, .colMS .aligned .vXMLLargeTextField {
    width: 350px;
}

form .aligned p, form .aligned ul {
    margin-left: 7em;
    padding-left: 30px;
}

form .aligned table p {
    margin-left: 0;
    padding-left: 0;
}

form .aligned p.help {
    padding-left: 38px;
}

.aligned .vCheckboxLabel {
    float: none !important;
    display: inline;
    padding-left: 4px;
}

.colM .aligned .vLargeTextField, .colM .aligned .vXMLLargeTextField {
    width: 610px;
}

.checkbox-row p.help {
    margin-left: 0;
    padding-left: 0 !important;
}

fieldset .field-box {
    float: left;
    margin-right: 20px;
}

/* WIDE FIELDSETS */

.wide label {
    width: 15em !important;
}

form .wide p {
    margin-left: 15em;
}

form .wide p.help {
    padding-left: 38px;
}

.colM fieldset.wide .vLargeTextField, .colM fieldset.wide .vXMLLargeTextField {
    width: 450px;
}

/* COLLAPSED FIELDSETS */

fieldset.collapsed * {
    display: none;
}

fieldset.collapsed h2, fieldset.collapsed {
    display: block !important;
}

fieldset.collapsed h2 {
    background-image: url(../../static/img/nav-bg.gif);
    background-position: bottom left;
    color: #999;
}

fieldset.collapsed .collapse-toggle {
    background: transparent;
    display: inline !important;
}

/* MONOSPACE TEXTAREAS */

fieldset.monospace textarea {
    font-family: "Bitstream Vera Sans Mono",Monaco,"Courier New",Courier,monospace;
}

/* SUBMIT ROW */

.submit-row {
    padding: 5px 7px;
    text-align: right;
    background: white url(../../static/img/nav-bg.gif) 0 100% repeat-x;
    border: 1px solid #ccc;
    margin: 5px 0;
    overflow: hidden;
}

body.popup .submit-row {
    overflow: auto;
}

.submit-row input {
    margin: 0 0 0 5px;
}

.submit-row p {
    margin: 0.3em;
}

.submit-row p.deletelink-box {
    float: left;
}

.submit-row .deletelink {
    background: url(../../static/img/icon_deletelink.gif) 0 50% no-repeat;
    padding-left: 14px;
}

/* CUSTOM FORM FIELDS */

.vSelectMultipleField {
    vertical-align: top !important;
}

.vCheckboxField {
    border: none;
}

.vDateField, .vTimeField {
    margin-right: 2px;
}

.vDateField {
    min-width: 6.85em;
}

.vTimeField {
    min-width: 4.7em;
}

.vURLField {
    width: 30em;
}

.vLargeTextField, .vXMLLargeTextField {
    width: 48em;
}

.flatpages-flatpage #id_content {
    height: 40.2em;
}

.module table .vPositiveSmallIntegerField {
    width: 2.2em;
}

.vTextField {
    width: 20em;
}

.vIntegerField {
    width: 5em;
}

.vBigIntegerField {
    width: 10em;
}

.vForeignKeyRawIdAdminField {
    width: 5em;
}

/* INLINES */

.inline-group {
    padding: 0;
    border: 1px solid #ccc;
    margin: 10px 0;
}

.inline-group .aligned label {
    width: 8em;
}

.inline-related {
    position: relative;
}

.inline-related h3 {
    margin: 0;
    color: #666;
    padding: 3px 5px;
    font-size: 11px;
    background: #e1e1e1 url(../../static/img/nav-bg.gif) top left repeat-x;
    border-bottom: 1px solid #ddd;
}

.inline-related h3 span.delete {
    float: right;
}

.inline-related h3 span.delete label {
    margin-left: 2px;
    font-size: 11px;
}

.inline-related fieldset {
    margin: 0;
    background: #fff;
    border: none;
    width: 100%;
}

.inline-related fieldset.module h3 {
    margin: 0;
    padding: 2px 5px 3px 5px;
    font-size: 11px;
    text-align: left;
    font-weight: bold;
    background: #bcd;
    color: #fff;
}

.inline-group .tabular fieldset.module {
    border: none;
    border-bottom: 1px solid #ddd;
}

.inline-related.tabular fieldset.module table {
    width: 100%;
}

.last-related fieldset {
    border: none;
}

.inline-group .tabular tr.has_original td {
    padding-top: 2em;
}

.inline-group .tabular tr td.original {
    padding: 2px 0 0 0;
    width: 0;
    _position: relative;
}

.inline-group .tabular th.original {
    width: 0px;
    padding: 0;
}

.inline-group .tabular td.original p {
    position: absolute;
    left: 0;
    height: 1.1em;
    padding: 2px 7px;
    overflow: hidden;
    font-size: 9px;
    font-weight: bold;
    color: #666;
    _width: 700px;
}

.inline-group ul.tools {
    padding: 0;
    margin: 0;
    list-style: none;
}

.inline-group ul.tools li {
    display: inline;
    padding: 0 5px;
}

.inline-group div.add-row,
.inline-group .tabular tr.add-row td {
    color: #666;
    padding: 3px 5px;
    border-bottom: 1px solid #ddd;
    background: #e1e1e1 url(../../static/img/nav-bg.gif) top left repeat-x;
}

.inline-group .tabular tr.add-row td {
    padding: 4px 5px 3px;
    border-bottom: none;
}

.inline-group ul.tools a.add,
.inline-group div.add-row a,
.inline-group .tabular tr.add-row td a {
    background: url(../../static/img/icon_addlink.gif) 0 50% no-repeat;
    padding-left: 14px;
    font-size: 11px;
    outline: 0; /* Remove dotted border around link */
}

.empty-form {
    display: none;
}

/* RELATED FIELD ADD ONE / LOOKUP */

.add-another, .related-lookup {
    margin-left: 5px;
    display: inline-block;
}

.add-another {
    width: 10px;
    height: 10px;
    background-image: url(../../static/img/icon_addlink.gif);
}

.related-lookup {
    width: 16px;
    height: 16px;
    background-image: url(../../static/img/selector-search.gif);
}

</style>
