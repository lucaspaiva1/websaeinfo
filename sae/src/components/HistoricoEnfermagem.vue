<template>
<body class="">

  <!-- Container -->
  <div id="container">

    <!-- Header
    <NavBar></NavBar>
     END Header -->

    <!-- Content -->
    <div id="content" class="colM">

      <h1></h1>

      <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
      <title>Prontuario</title>

      <div id="pagina">

        <div id="cabecalho">
          <font size="1.5">
            <img src="/static/brasao.png" style="width:100px;"> <br>
            <b>GOVERNO DO ESTADO DA BAHIA</b><br>
            <b>Secretaria de Saúde do Estado da Bahia - SESAB</b><br>
            <b>Hospital Clériston Andrade - HGCA</b><br>
            <b>Universidade de Feira de Santana - UEFS</b><br>
            <b>Departamento de Saúde - DSAU</b><br>
            <b>Projeto: Implantação da Sistematização da Assistência de Enfermagem</b>
            <h2> HISTÓRICO DE ENFERMAGEM DA ESTABILIZAÇÃO</h2>
          </font>
        </div>
        <div id="conteudo">

          <table class="tg" style="table-layout: fixed; width: 895px; float: center;">
            <colgroup>
              <col style="width: 895px">
            </colgroup>
            <tbody>
              <tr>
                <th class="tg-uf4s">1. IDENTIFICAÇÃO</th>
              </tr>

              <tr>
                <td class="tg-yw4l" style="line-height: 1.5; text-align: justify;">
                  <b>NOME:</b> {{paciente.Nome}}
                  <span style="padding-left:80px"><b>SEXO: </b> {{paciente.Sexo}} </span>
                  <hr>

                  <b>IDADE:</b> {{paciente.Idade}} anos
                  <span style="padding-left:60px"><b>ESTADO CIVIL:</b>  {{paciente.Estado_Civil}} </span>
                  <span style="padding-left:60px"><b>RELIGIÃO:</b> {{paciente.Religiao}} </span>
                  <hr>

                  <b>PROFISSÃO:</b> {{paciente.Profissao}}
                  <span style="padding-left:60px"> <b>NATURALIDADE:</b> {{paciente.Naturalidade}} </span>
                  <hr>

                  <b>REGISTRO:</b> {{paciente.Registro}}
                  <span style="padding-left:40px"><b>LEITO:</b> {{paciente.Leito}} </span>
                  <span style="padding-left:40px"><b>SETOR DE PROCEDÊNCIA:</b> {{paciente.Setor_de_Procedencia}}  </span>
                  <hr>
                  <b>INTERNADO(A) em:</b> {{paciente.Data_de_internacao}}
                  <hr>
                </td>

              </tr>
              <tr>
                <td class="tg-uf4s">2. ENTREVISTA</td>
              </tr>
              <tr>
                <td class="tg-yw4l" style="line-height: 1.5">
                  <b>INTERNAÇÃO ANTERIOR (nº de vezes):</b> {{paciente.internacoes}}
                  <hr>
                  <b>MOTIVO:</b> {{paciente.motivoInternacao}}
                  <hr>
                  <b>ANTECEDENTES:</b> {{paciente.antecedentes}}
                  <hr>
                  <b>ALERGIAS:</b> {{paciente.alergias}}
                  <hr>
                  <b>VACINAS:</b> {{paciente.vacinas}}
                </td>
              </tr>
              <tr>
                <td class="tg-uf4s">3. EXAME FÍSICO</td>
              </tr>
              <tr>
                <td class="tg-yw4l"><b>1. Necessidades Psicobiológicas</b></td>
              </tr>
              <tr>
                <td class="tg-yw4l"><b>1.1. Avaliação Neurológica</b></td>
              </tr>
              <tr>
                <td class="tg-yw4l">
                  <b>Consciência:</b> {{paciente.consciencia}}
                  <hr>
                  <br>
                  <b>Glasgow:</b> {{paciente.glasgow}}
                  <hr>
                  <br>
                  <b>Pupilas:</b> {{paciente.pupilas}}
                  <hr>
                  <br>
                  <b>Mobilidade Física:</b>
                  <p>MMSS (Direito): {{paciente.mmss_direito}}   </p>
                  <p>MMSS (Esquerdo): {{paciente.mmss_esquerdo}} </p>
                  <p>MMII (Direito): {{paciente.mmii_direito}}   </p>
                  <p>MMII (Esquerdo): {{paciente.mmii_esquerdo}} </p>
                  <hr>
                  <br>
                  <b>Fala e linguagem:</b> {{paciente.falaELinguagem}}
                </td>
              </tr>
              <tr>
                <td class="tg-yw4l"><b>1.2. Oxigenação</b></td>
              </tr>
              <tr>
                <td class="tg-yw4l">
                  <b>Respiração:</b> {{paciente.oxigenacao}}
                  <hr>
                  <table>
                    <tr>
                      <td class="tdata"><b>O²:</b></td>
                      <td class="tdata">{{paciente.O2}}</td>
                      <td class="tdata"><b>SpO²:</b></td>
                      <td class="tdata">{{paciente.SpO2}}</td>
                      <td class="tdata"><b>FR:</b></td>
                      <td class="tdata">{{paciente.FR}}</td>
                    </tr>
                  </table>
                  <hr>
                  <table>
                    <tr>
                      <td class="tdata"><b>Modalidade:</b></td>
                      <td class="tdata">{{paciente.modalidade}}</td>
                      <td class="tdata"><b>FiO²:</b></td>
                      <td class="tdata">{{paciente.FiO2}}</td>
                      <td class="tdata"><b>PEEP:</b></td>
                      <td class="tdata">{{paciente.Peep}}</td>
                    </tr>
                  </table>
                  <hr>
                  <br>
                  <b>Asculta Pulmonar</b>
                  <hr>
                  <br>
                  MV Presentes: {{paciente.auscultaPulmonar_MvPresente}}
                  <hr>
                  <br> Ruídos adventícios: {{paciente.auscultaPulmonar_Ruidos}}
                  <hr>
                  <br> Presenção de tosse: {{paciente.prevencaoDeTosse}}
                  <hr>
                  <table>
                    <tr>
                      <td class="tdata"><b>Aspiração:</b></td>
                      <td class="tdata">Quantidade:</td>
                      <td class="tdata">{{paciente.aspiracaoQuantidade}}</td>
                      <td class="tdata">Característica:</td>
                      <td class="tdata">{{paciente.aspiracaoCaracteristica}}</td>
                    </tr>
                  </table>
                  <hr>
                  <table>
                    <tr>
                      <td class="tdata"><b>Drenagem Torácica:</b></td>
                      <td class="tdata">Quantidade:</td>
                      <td class="tdata">{{paciente.drenagemQuantidade}}</td>
                      <td class="tdata">Característica:</td>
                      <td class="tdata">{{paciente.drenagemCaracteristica}}</td>
                      <td class="tdata"><input type="checkbox" disabled name="check" id="DTD" v-model="paciente.drenagemToracicaDTD">
                        <label for="DTD">DTD</label></td>
                      <td class="tdata"><input type="checkbox" disabled name="check" id="DTE" v-model="paciente.drenagemToracicaDTD">
                        <label for="DTE">DTE</label></td>
                    </tr>
                  </table>
                  <hr>
                  <br>
                  <b>Mamas:</b> {{paciente.mamas}}
                </td>
              </tr>
              <tr>
                <td class="tg-yw4l"><b>1.3. Avaliação Cardiovascular</b></td>
              </tr>
              <tr>
                <td class="tg-yw4l">
                  <table>
                    <tr>
                      <td class="tdata"><b>FC</b>(bpm):</td>
                      <td class="tdata">{{paciente.avaliacaoCardiovascular_Fc}}.</td>
                      <td class="tdata"><b>PA</b>(mmHg):</td>
                      <td class="tdata">{{paciente.avaliacaoCardiovascular_Pa}}.</td>
                      <td class="tdata"><b>PVC</b>(cmH20):</td>
                      <td class="tdata">{{paciente.avaliacaoCardiovascular_PVC}}.</td>
                      <td class="tdata"><b>PAM</b>(mmHg):</td>
                      <td class="tdata">{{paciente.avaliacaoCardiovascular_PAM}}.</td>
                    </tr>
                  </table>
                  <hr>
                  <br>
                  <b>Pulso:</b> {{paciente.pulso}}
                  <br>
                  <br>
                  <hr>
                  <br>
                  <b>Presença de edema:</b> {{paciente.presencaDeEdema}}
                </td>
              </tr>
              <tr>
                <td class="tg-yw4l"><b>1.4. Hidratação e Eliminação Vesical</b></td>
              </tr>
              <tr>
                <td class="tg-yw4l">
                  <b>Turgidez da pele:</b> {{paciente.turgidezDaPele}}
                  <hr>
                  <br>
                  <b>Eliminação urinária Volume </b>(ml;h): {{paciente.eliminacaoUrinaria_Volume}}
                  <hr>
                  <br>
                  <b>Características:</b> {{paciente.eliminacaoUrinaria}}
                </td>
              </tr>
              <tr>
                <td class="tg-yw4l"><b>1.5. Alimentação e Eliminação Intestinal</b></td>
              </tr>
              <tr>
                <td class="tg-yw4l">
                  <table>
                    <tr>
                      <td class="tdata"><b>Tipo de dieta:</b></td>
                      <td class="tdata">{{paciente.tipoDeDieta}}.</td>
                      <td class="tdata"><b>Glicemia:</b></td>
                      <td class="tdata">{{paciente.glicemia}}</td>
                    </tr>
                  </table>
                  <hr>
                  <br>
                  <b>Vias de administração:</b> {{paciente.alimentacao_ViasDeAdministracao}}
                  <hr>
                  <br>
                  <b>Abdome:</b> {{paciente.abdome}}
                  <hr>
                  <br>
                  <b>Presenção de:</b> {{paciente.presencaoDe}}
                  <hr>
                  <br>
                  <b>RHA:</b> {{paciente.RHA}}
                  <hr>
                  <br>
                  <b>Ostomia:</b>
                  <p>Local: {{paciente.ostomiaLocal}}</p>
                  <p>Característica: {{paciente.ostomiaCaracteristica}}</p>
                  <hr>
                  <br>
                  <b>Eliminação intestinal:</b>
                  <br>
                  <p>Frequencia: {{paciente.eliminacaoIntestinal_frequencia}}</p>
                  <p>Característica: {{paciente.eliminacaoIntestinal}}</p>
                </td>
              </tr>
              <tr>
                <td class="tg-yw4l"><b>1.6. Aspectos cutâneo-musoca</b></td>
              </tr>
              <tr>
                <td class="tg-yw4l">
                  <b>Lesões:</b> {{paciente.genitalia_lesoes}}
                  <br>
                  <hr>
                  <br>
                  <b>Pele:</b> {{paciente.pele}}
                  <br>
                  <hr>
                  <br>
                  <b>Temperatura (ºC):</b> {{paciente.pele_temperatura}}
                  <br>
                  <hr>
                  <br>
                  <b>Olhos: </b> {{paciente.olhos}}
                  <br>
                  <hr>
                  <br>
                  <b>AVP:</b>
                      <p>Local: {{paciente.AVP_local}}</p>
                      <p>Tempo de permanência: {{paciente.AVP_tempo}}</p>
                  <b>CVC:</b>
                      <p>Local: {{paciente.CVC_local}}</p>
                      <p>Tempo de permanência: {{paciente.CVC_local}}</p>
                  <b>Dreno: </b>
                      <p>Local: {{paciente.dreno_local}}</p>
                      <p>Tipo de dreno: {{paciente.dreno_tipo}}</p>
                  <hr>
                  <br>
                  <b>Genitália:</b> {{paciente.genitalia}}
                </td>
              </tr>
              <tr>
                <td class="tg-yw4l"><b>1.7. Segurança Física</b></td>
              </tr>
              <tr>
                <td class="tg-yw4l">
                  <b>Necessidade de contenção no leito:</b> {{paciente.necessidadeDeContencao}}
                  <hr>
                  <br>
                  <b>Risco para queda:</b> {{paciente.riscoParaQueda}}
                  <hr>
                  <br>
                  <b>Escala de Braden:</b> {{paciente.escore}}
                  <hr>
                  <br>
                  <b>Observações:</b> {{paciente.observacoes}}
                </td>
              </tr>
            </tbody>
          </table>

          <div id="cabecalho">
            <br>
            <br>
            <br>
            <font size="2.5">
              <b>_________________________________________________<br>
              enfermeiro/COREN - enfermeiro</b>
            </font>
          </div>

        </div>
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
  data () {
    return {
      paciente: {}
    }
  },
  methods: {
    getHistorico () {
      let id = this.$route.params.idpaciente

      $.get('http://localhost/sae/getHistoricoPaciente.php?id=' + id)
        .then(res => {
          this.paciente = res
          console.log(this.paciente)
        })
    }
  },
  created: function () {
    this.getHistorico()
  },
  components: {
    NavBar: NavBar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* LOGIN FORM */

#pagina {
  max-width: 1128px;
  margin: 0 auto;
  width: 900px;
  height: 1000px;
}

#conteudo {
  font-family: 'Bookman Old Style';
  position: relative;
  /* margin-top:60px;
    margin-left:80px;
    margin-right: 80px;  */
  width: 80%;
  height: 900px;
}

#cabecalho {
  float: center;
  text-align: center;
  padding: 5px;
}

p {
  text-align: justify;
  text-indent: 50px;
  white-Space: pre-wrap;
}

.tg {
  border-collapse: collapse;
  border-spacing: 0;
}

.tg td {
  font-family: Arial, sans-serif;
  font-size: 14px;
  padding: 10px 5px;
  border-style: solid;
  border-width: 1px;
  overflow: hidden;
  word-break: normal;
}

.tg th {
  font-family: Arial, sans-serif;
  font-size: 14px;
  font-weight: normal;
  padding: 10px 5px;
  border-style: solid;
  border-width: 1px;
  overflow: hidden;
  word-break: normal;
}

.tg .tg-uf4s {
  font-weight: bold;
  font-size: 16px;
  background-color: #c0c0c0;
  color: #000000;
  vertical-align: top
}

.tg .tg-yw4l {
  vertical-align: top
}

.tg .tg-sbnk {
  font-weight: bold;
  font-size: 16px;
  background-color: #c0c0c0;
  vertical-align: top
}

p{
  margin-bottom: 0px;
}
.tdata{
  padding-left: 0px !important;
  border-style: none !important;
}
</style>
