<template>
<body class="">

  <!-- Container -->
  <div id="container">

    <!-- Header -->
      <NavBar></NavBar>
    <!-- END Header -->

    <div class="breadcrumbs">
      <a href="/">Início</a>

    </div>

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
                  <b>NOME:</b> Rafael da Silva
                  <span style="padding-left:80px"><b>SEXO: </b> Masculino </span>
                  <hr>

                  <b>IDADE:</b> 23 anos
                  <span style="padding-left:60px"><b>ESTADO CIVIL:</b>  Solteiro </span>
                  <span style="padding-left:60px"><b>RELIGIÃO:</b> Católico </span>
                  <hr>

                  <b>PROFISSÃO:</b> Estudante
                  <span style="padding-left:60px"> <b>NATURALIDADE:</b>   </span>
                  <hr>

                  <b>REGISTRO:</b>
                  <span style="padding-left:40px"><b>LEITO:</b>   </span>
                  <span style="padding-left:40px"><b>SETOR DE PROCEDÊNCIA:</b>   </span>
                  <hr>
                  <b>INTERNADO(A) em:</b> 25 de Abril de 2017
                  <hr>
                </td>

              </tr>
              <tr>
                <td class="tg-uf4s">2. ENTREVISTA</td>
              </tr>
              <tr>
                <td class="tg-yw4l" style="line-height: 1.5">
                  <b>INTERNAÇÃO ANTERIOR (nº de vezes):</b>
                  <hr>
                  <b>MOTIVO:</b>
                  <hr>
                  <b>ANTECEDENTES:</b>
                  <hr>
                  <b>ALERGIAS:</b>
                  <hr>
                  <b>VACINAS:</b>
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
                Consciência:
                  <input type="checkbox" name="check" id="Alerta">
                  <label for="Alerta">Alerta</label>
                  <input type="checkbox" name="check" id="Letárgico">
                  <label for="Letárgico">Letárgico</label>
                  <input type="checkbox" name="check" id="Obnubilado">
                  <label for="Obnubilado">Obnubilado</label>
                  <input type="checkbox" name="check" id="Torporoso">
                  <label for="Torporoso">Torporoso</label>
                  <input type="checkbox" name="check" id="Comatoso">
                  <label for="Comatoso">Comatoso</label>
                  <label for="Glasgow">
                    Glasgow:
                  </label>
                  <hr>
                  <br>
                  Pupilas:
                  <input type="checkbox" name="check" id="Isocóricas">
                  <label for="Isocóricas">Isocóricas</label>
                  <input type="checkbox" name="check" id="Anisocóricas">
                  <label for="Anisocóricas">Anisocóricas</label>
                  <input type="checkbox" name="check" id="Miose">
                  <label for="Miose">Miose</label>
                  <input type="checkbox" name="check" id="Midríase">
                  <label for="Midríase">Midríase</label>
                  <input type="checkbox" name="check" id="RFM">
                  <label for="RFM">RFM</label>
                  <hr> <br> Mobilidade Física: <br><br>
                              MMSS (Direito):
                              <input type="checkbox" name="check" id="Preservada">
                              <label for="Preservada">Preservada</label>
                              <input type="checkbox" name="check" id="Paresia">
                              <label for="Paresia">Paresia</label>
                              <input type="checkbox" name="check" id="Plegia">
                              <label for="Plegia">Plegia</label>
                              <input type="checkbox" name="check" id="Parestesia">
                              <label for="Parestesia">Parestesia</label> <br>
                              MMSS (Esquerdo):
                              <input type="checkbox" name="check" id="Preservada2">
                              <label for="Preservada2">Preservada</label>
                              <input type="checkbox" name="check" id="Paresia2">
                              <label for="Paresia2">Paresia</label>
                              <input type="checkbox" name="check" id="Plegia2">
                              <label for="Plegia2">Plegia</label>
                              <input type="checkbox" name="check" id="Parestesia2">
                              <label for="Parestesia2">Parestesia</label>
                              <br>
                              MMII (Direito):
                              <input type="checkbox" name="check" id="Preservada3">
                              <label for="Preservada3">Preservada</label>
                              <input type="checkbox" name="check" id="Paresia3">
                              <label for="Paresia3">Paresia</label>
                              <input type="checkbox" name="check" id="Plegia3">
                              <label for="Plegia3">Plegia</label>
                              <input type="checkbox" name="check" id="Parestesia3">
                              <label for="Parestesia3">Parestesia</label> <br>
                              MMII (Esquerdo):
                              <input type="checkbox" name="check" id="Preservada4">
                              <label for="Preservada4">Preservada</label>
                              <input type="checkbox" name="check" id="Paresia4">
                              <label for="Paresia4">Paresia</label>
                              <input type="checkbox" name="check" id="Plegia4">
                              <label for="Plegia4">Plegia</label>
                              <input type="checkbox" name="check" id="Parestesia4">
                              <label for="Parestesia4">Parestesia</label>
                              <hr>
                              <br>
                              Fala e linguagem:
                              <input type="checkbox" name="check" id="Afonia">
                              <label for="Afonia">Afonia</label>
                              <input type="checkbox" name="check" id="Dislalia">
                              <label for="Dislalia">Dislalia</label>
                              <input type="checkbox" name="check" id="Disartria">
                              <label for="Disartria">Disartria</label>
                              <input type="checkbox" name="check" id="Disfasia">
                              <label for="Disfasia">Disfasia</label>
                              <input type="checkbox" name="check" id="Afasia">
                              <label for="Afasia">Afasia</label>
                  </span>
                </td>
              </tr>
              <tr>
                <td class="tg-yw4l"><b>1.2. Oxigenação</b></td>
              </tr>
              <tr>
                <td class="tg-yw4l">
                  Respiração:
                  <input type="checkbox" name="check" id="Dispineia">
                  <label for="Dispineia">Dispineia</label>
                  <input type="checkbox" name="check" id="Taquipnéia">
                  <label for="Taquipnéia">Taquipnéia</label>
                  <input type="checkbox" name="check" id="Bradipnéia">
                  <label for="Bradipnéia">Bradipnéia</label>
                  <input type="checkbox" name="check" id="HiperventilaçãoNeurogênicaCentral">
                  <label for="HiperventilaçãoNeurogênicaCentral">Hiperventilação Neurogênica Central</label>
                  <input type="checkbox" name="check" id="Espontânea">
                  <label for="Espontânea">Espontânea</label>
                  <input type="checkbox" name="check" id="Catéter">
                  <label for="Catéter">Catéter</label>
                  <input type="checkbox" name="check" id="Máscara">
                  <label for="Máscara">Máscara</label>

                  <br>

                  <input type="checkbox" name="check" id="Traqueostomia">
                  <label for="Traqueostomia">Traqueostomia</label>
                  <input type="checkbox" name="check" id="Ventilaçãomecânica">
                  <label for="Ventilaçãomecânica">Ventilação mecânica</label>
                  <input type="checkbox" name="check" id="RespiracaoOutros">
                  <label for="RespiracaoOutros">Outros</label>

                  <br>

                  <hr>

                  <table>
                    <tr>
                      <td style="border-style: none !important;">O²:</td>
                      <td style="border-style: none !important;"></td>
                      <td style="border-style: none !important;">SpO²:</td>
                      <td style="border-style: none !important;"></td>
                      <td style="border-style: none !important;">FR:</td>
                    </tr>
                  </table>
                  <hr>
                  <table>
                    <tr>
                      <td style="border-style: none !important;">Modalidade:</td>
                      <td style="border-style: none !important;"></td>
                      <td style="border-style: none !important;">FiO²:</td>
                      <td style="border-style: none !important;"></td>
                      <td style="border-style: none !important;">PEEP:</td>
                    </tr>
                  </table>
                  <hr>
                  <br>
                  Asculta Pulmonar: MV Presentes
                  <input type="checkbox" name="check" id="Bilateralmente">
                  <label for="Bilateralmente">Bilateralmente</label>
                  <input type="checkbox" name="check" id="Diminuídos">
                  <label for="Diminuídos">Diminuídos</label>
                  <input type="checkbox" name="check" id="Ausentes">
                  <label for="Ausentes">Ausentes</label>
                  <hr>
                  <br>
                  Ruídos adventícios:
                  <input type="checkbox" name="check" id="Roncos">
                  <label for="Roncos">Roncos</label>
                  <input type="checkbox" name="check" id="Sibilos">
                  <label for="Sibilos">Sibilos</label>
                  <input type="checkbox" name="check" id="Estertores">
                  <label for="Estertores">Estertores</label>
                  <hr>
                  <br>
                  Presenção de tosse:
                  <input type="checkbox" name="check" id="Não">
                  <label for="Não">Não</label>
                  <input type="checkbox" name="check" id="Seca">
                  <label for="Seca">Seca</label>
                  <input type="checkbox" name="check" id="Produtiva">
                  <label for="Produtiva">Produtiva</label>
                  <hr>
                  <table>
                    <tr>
                      <td style="border-style: none !important;">Aspiração:</td>
                      <td style="border-style: none !important;">Quantidade:</td>
                      <td style="border-style: none !important;"></td>
                      <td style="border-style: none !important;">Característica:</td>
                      <td style="border-style: none !important;"></td>
                    </tr>
                  </table>
                  <hr>
                  <table>
                    <tr>
                      <td style="border-style: none !important;">Drenagem Torácica:</td>
                      <td style="border-style: none !important;">Quantidade:</td>
                      <td style="border-style: none !important;"></td>
                      <td style="border-style: none !important;">Característica:</td>
                      <td style="border-style: none !important;"></td>
                      <td style="border-style: none !important;"><input type="checkbox" name="check" id="DTD">
                      <label for="DTD">DTD</label></td>
                      <td style="border-style: none !important;"><input type="checkbox" name="check" id="DTE">
                      <label for="DTE">DTE</label></td>
                    </tr>
                  </table>
                  <hr>
                  <br>
                  Mamas:
                  <input type="checkbox" name="check" id="Semalterações">
                  <label for="Semalterações">Sem alterações</label>
                  <input type="checkbox" name="check" id="Nódulos">
                  <label for="Nódulos">Nódulos</label>
                  <input type="checkbox" name="check" id="Dor">
                  <label for="Dor">Dor</label>
                  <input type="checkbox" name="check" id="Assimétricas">
                  <label for="Assimétricas">Assimétricas</label>
                </td>
              </tr>
              <tr>
                <td class="tg-yw4l"><b>1.3. Avaliação Cardiovascular</b></td>
              </tr>
              <tr>
                <td class="tg-yw4l">
                  <table>
                    <tr>
                      <td style="border-style: none !important;">FC: (bpm)</td>
                      <td style="border-style: none !important;"></td>
                      <td style="border-style: none !important;">PA: (mmHg)</td>
                      <td style="border-style: none !important;"></td>
                      <td style="border-style: none !important;">PVC: (cmH20)</td>
                      <td style="border-style: none !important;"></td>
                      <td style="border-style: none !important;">PAM: (mmHg)</td>
                      <td style="border-style: none !important;"></td>
                    </tr>
                  </table>
                  <hr>
                  <br>
                  Pulso:
                  <input type="checkbox" name="check" id="Regular">
                  <label for="Regular">Regular</label>
                  <input type="checkbox" name="check" id="Irregular">
                  <label for="Irregular">Irregular</label>
                  <input type="checkbox" name="check" id="Impalpável">
                  <label for="Impalpável">Impalpável</label>
                  <input type="checkbox" name="check" id="Palpável">
                  <label for="Palpável">Palpável</label>
                  <input type="checkbox" name="check" id="Cheio">
                  <label for="Cheio">Cheio</label>
                  <input type="checkbox" name="check" id="Filiforme">
                  <label for="Filiforme">Filiforme</label>
                  <hr>
                  <br>
                  Presença de edema:
                  <input type="checkbox" name="check" id="Pés">
                  <label for="Pés">Pés</label>
                  <input type="checkbox" name="check" id="MMII">
                  <label for="MMII">MMII</label>
                  <input type="checkbox" name="check" id="MMSS">
                  <label for="MMSS">MMSS</label>
                  <input type="checkbox" name="check" id="Anasarca">
                  <label for="Anasarca">Anasarca</label>

                </td>
              </tr>
              <tr>
                <td class="tg-yw4l"><b>1.4. Hidratação e Eliminação Vesical</b></td>
              </tr>
              <tr>
                <td class="tg-yw4l">
                  Turgidez da pele:
                  <input type="checkbox" name="check" id="Preservada">
                  <label for="Preservada">Preservada</label>
                  <input type="checkbox" name="check" id="Diminuída">
                  <label for="Diminuída">Diminuída</label>
                  <hr>
                  <br>
                  Eliminação urinária Volume: (ml;h)
                  <hr>
                  <br>
                  Características:
                  <input type="checkbox" name="check" id="Espontânea">
                  <label for="Espontânea">Espontânea</label>
                  <input type="checkbox" name="check" id="Retenção">
                  <label for="Retenção">Retenção</label>
                  <input type="checkbox" name="check" id="Incontinência">
                  <label for="Incontinência">Incontinência</label>
                  <input type="checkbox" name="check" id="SVD">
                  <label for="SVD">SVD</label>
                  <input type="checkbox" name="check" id="Dispositivourinário">
                  <label for="Dispositivourinário">Dispositivo urinário</label>
                  <input type="checkbox" name="check" id="Disúria">
                  <label for="Disúria">Disúria</label>
                  <input type="checkbox" name="check" id="Oligúria">
                  <label for="Oligúria">Oligúria</label>
                  <input type="checkbox" name="check" id="Oligúria">
                  <label for="SVD">Anúria</label>
                  <br>
                  <input type="checkbox" name="check" id="Poliúria">
                  <label for="Poliúria">Poliúria</label>
                  <input type="checkbox" name="check" id="Hematúria">
                  <label for="Hematúria">Hematúria</label>
                  , Outros:
                </td>
              </tr>
              <tr>
                <td class="tg-yw4l"><b>1.5. Alimentação e Eliminação Intestinal</b></td>
              </tr>
              <tr>
                <td class="tg-yw4l">
                  <table>
                    <tr>
                      <td style="border-style: none !important;">Tipo de dieta:</td>
                      <td style="border-style: none !important;"></td>
                      <td style="border-style: none !important;">Glicemia:</td>
                      <td style="border-style: none !important;"></td>
                    </tr>
                  </table>
                  <hr>
                  <br>
                  Vias de administração:
                  <input type="checkbox" name="check" id="Oral">
                  <label for="Oral">Oral</label>
                  <input type="checkbox" name="check" id="SNG">
                  <label for="SNG">SNG</label>
                  <input type="checkbox" name="check" id="SNE">
                  <label for="SNE">SNE</label>
                  <input type="checkbox" name="check" id="Parenteral">
                  <label for="Parenteral">Parenteral</label>
                  , Outros:
                  <hr>
                  <br>
                  Abdome:
                  <input type="checkbox" name="check" id="Plano">
                  <label for="Plano">Plano</label>
                  <input type="checkbox" name="check" id="Globoso">
                  <label for="Globoso">Globoso</label>
                  <input type="checkbox" name="check" id="Distendido">
                  <label for="Distendido">Distendido</label>
                  <input type="checkbox" name="check" id="Dolorosoàpalpação">
                  <label for="Dolorosoàpalpação">Doloroso à palpação</label>
                  , Outros:
                  <hr>
                  <br>
                  Presenção de:
                  <input type="checkbox" name="check" id="Náusea">
                  <label for="Náusea">Náusea</label>
                  <input type="checkbox" name="check" id="Vômito">
                  <label for="Vômito">Vômito</label>
                  <hr>
                  <br>
                  RHA:
                  <input type="checkbox" name="check" id="Ausentes">
                  <label for="Ausentes">Ausentes</label>
                  <input type="checkbox" name="check" id="Diminuído">
                  <label for="Diminuído">Diminuído</label>
                  <input type="checkbox" name="check" id="Aumentado">
                  <label for="Aumentado">Aumentado</label>
                  <hr>
                  <br>
                  Ostomia:
                  <input type="checkbox" name="check" id="OstomiaNão">
                  <label for="OstomiaNão">Não</label>
                  <input type="checkbox" name="check" id="OstomiaSim">
                  <label for="OstomiaSim">Sim</label>
                  <hr>
                  <br>
                  Eliminação intestinal:
                  <br>
                  <br>
                  Frequencia:
                  <br>
                  <br>
                  Característica:
                  <input type="checkbox" name="check" id="Normal">
                  <label for="Normal">Normal</label>
                  <input type="checkbox" name="check" id="Constipação">
                  <label for="Constipação">Constipação</label>
                  <input type="checkbox" name="check" id="Diarréia">
                  <label for="Diarréia">Diarréia</label>
                  <input type="checkbox" name="check" id="Incontinência">
                  <label for="Incontinência">Incontinência</label>
                  , Outros:

                </td>
              </tr>
              <tr>
                <td class="tg-yw4l"><b>1.6. Aspectos cutâneo-musoca</b></td>
              </tr>
              <tr>
                <td class="tg-yw4l">
                  Lesões:
                  <hr>
                  <br>
                  Pele:
                  <input type="checkbox" name="check" id="Cianose">
                  <label for="Cianose">Cianose</label>
                  <input type="checkbox" name="check" id="Icterícia">
                  <label for="Icterícia">Icterícia</label>
                  <input type="checkbox" name="check" id="Palidez">
                  <label for="Palidez">Palidez</label>
                  <input type="checkbox" name="check" id="Prurido">
                  <label for="Prurido">Prurido</label>
                  <input type="checkbox" name="check" id="Petéquias">
                  <label for="Petéquias">Petéquias</label>
                  <input type="checkbox" name="check" id="Corado">
                  <label for="Corado">Corado</label>
                  <input type="checkbox" name="check" id="Hipocorado">
                  <label for="Hipocorado">Hipocorado</label>
                  <input type="checkbox" name="check" id="Hipercorado">
                  <label for="Hipercorado">Hipercorado</label>
                  <input type="checkbox" name="check" id="Equimoses">
                  <label for="Equimoses">Equimoses</label>
                  <br>
                  <input type="checkbox" name="check" id="Hematomas">
                  <label for="Hematomas">Hematomas</label>
                  <input type="checkbox" name="check" id="Escoriações">
                  <label for="Escoriações">Escoriações</label>
                  , Outros:
                </td>
              </tr>
              <tr>
                <td class="tg-yw4l"><b>1.7. Segurança Física</b></td>
              </tr>
              <tr>
                <td class="tg-yw4l">
                  Necessidade de contenção no leito:
                  <input type="checkbox" name="check" id="contencaoNao">
                  <label for="contencaoNao">Não</label>
                  <input type="checkbox" name="check" id="contencaoSim">
                  <label for="contencaoSim">Sim</label>
                  <hr>
                  <br>
                  Risco para queda:
                  <input type="checkbox" name="check" id="quedaNao">
                  <label for="quedaNao">Não</label>
                  <input type="checkbox" name="check" id="quedaSim">
                  <label for="quedaSim">Sim</label>
                  <hr>
                  <br>
                  Escala de Braden:
                  <hr>
                  <br>
                  Observações:
                  <br>
                  <br>
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

// var $ = require('jquery')

export default {
  data () {
    return {
    }
  },
  methods: {

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
</style>
