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
          <div id="main-content" action="" style="line-height: 25px;" method="POST">
              <input type='text' name="idPaciente" value='2' readonly="readonly" style="display:none;">

              <fieldset class="module aligned ">
                  <fieldset class="module aligned ">
                      <b>I. ENTREVISTA</b>
                  </fieldset>

                  <label for='internacoes'><b>Internações anteriores:</b> </label>
                  <input type="number" name="internacoes" min="0" v-model="historico.internacoes">

                  <label for='motivoInternacao'>Motivo: </label>
                  <input type="text" name="motivoInternacao" v-model="historico.motivoInternacao"><br>

                  <label for='antecedentes'><b>Antecedentes:</b> </label>

                  <input type="checkbox" name="antecedentes" id="HAS" value="HAS" v-model="historico.antecedentesOpcoes">
                  <label for="HAS">HAS</label>

                  <input type="checkbox" name="antecedentes" id="Diabete Méllitus" value="Diabete Méllitus" v-model="historico.antecedentesOpcoes">
                  <label for="Diabete Méllitus">Diabete Méllitus</label>

                  <input type="checkbox" name="antecedentes" id="Tabagismo" value="Tabagismo" v-model="historico.antecedentesOpcoes">
                  <label for="Tabagismo">Tabagismo</label>

                  <input type="checkbox" name="antecedentes" id="Alcoolismo" value="Alcoolismo" v-model="historico.antecedentesOpcoes">
                  <label for="Alcoolismo">Alcoolismo</label>

                  <input type="checkbox" name="antecedentes" id="Outros" value="Outros" v-model="historico.antecedentesOpcoes">
                  <label for="Outros">Outros</label>

                  <br>

                  <label for='alergias'><b>Alergia:</b> </label>
                  <input type="text" name="alergias" id="alergias" value="" v-model="historico.alergias">

                  <label for='vacinas'><b>Vacinas: </b></label>
                  <input type="text" name="vacinas" v-model="historico.vacinas">

                  <fieldset class="module aligned ">
                      <b>II. EXAME FÍSICO</b>
                  </fieldset>

                  <fieldset class="module aligned ">
                      <b>1. Necessidades Psicobiológicas</b>
                  </fieldset>


                  <fieldset class="module aligned ">
                      <b>1.1. Avaliação Neurológica</b>
                  </fieldset>

                  <label for='consciencia'><b>Consciência:</b> </label>
                  <input type="radio" name='consciencia' id="Alerta" value="Alerta" v-model="historico.consciencia"> <label for="Alerta">Alerta</label>
                  <input type="radio" name='consciencia' id="Letárgico" value="Letárgico" v-model="historico.consciencia"> <label for="Letárgico">Letárgico</label>
                  <input type="radio" name='consciencia' id="Obnubilado" value="Obnubilado" v-model="historico.consciencia"> <label for="Obnubilado">Obnubilado</label>
                  <input type="radio" name='consciencia' id="Torporoso" value="Torporoso" v-model="historico.consciencia"> <label for="Torporoso">Torporoso</label>
                  <input type="radio" name='consciencia' id="Comatoso" value="Comatoso" v-model="historico.consciencia"> <label for="Comatoso">Comatoso</label>

                  <br>

                  <label for="Glasgow">Glasgow</label>
                  <input type="number" name='glasgow' id="Glasgow" value="" v-model="historico.glasgow">

                  <br>

                  <label for='pupilas'><b>Pupilas: </b></label>
                  <input type="radio" name='pupilas' id="Isocóricas" value="Isocóricas" v-model="historico.pupilas"> <label for="Isocóricas">Isocóricas</label>
                  <input type="radio" name='pupilas' id="Anisocóricas" value="Anisocóricas" v-model="historico.pupilas"> <label for="Anisocóricas">Anisocóricas</label>
                  <input type="radio" name='pupilas' id="Miose" value="Miose" v-model="historico.pupilas"> <label for="Miose">Miose</label>
                  <input type="radio" name='pupilas' id="Midríase" value="Midríase" v-model="historico.pupilas"> <label for="Midríase">Midríase</label>
                  <input type="radio" name='pupilas' id="RFM" value="RFM" v-model="historico.pupilas"> <label for="RFM">RFM</label>

                  <br>

                  <label for='mobilidade'><b>Mobilidade física:</b> </label> <br>

                  <label for='superiorDireito'>MMSS - Direito:</label>
                  <input type="radio" name="mmss_direito" id="PreservadaA" value="Preservada" v-model="historico.mmss_direito"> <label for="PreservadaA">Preservada</label>
                  <input type="radio" name="mmss_direito" id="ParesiaA" value="Paresia" v-model="historico.mmss_direito"> <label for="ParesiaA">Paresia</label>
                  <input type="radio" name="mmss_direito" id="PlegiaA" value="Plegia" v-model="historico.mmss_direito"> <label for="PlegiaA">Plegia</label>
                  <input type="radio" name="mmss_direito" id="ParestesiaA" value="Parestesia" v-model="historico.mmss_direito"> <label for="ParestesiaA">Parestesia</label>
                  <br>
                  <label for='superiorEsquerdo'>MMSS - Esquerdo:</label>
                  <input type="radio" name="mmss_esquerdo" id="PreservadaB" value="Preservada" v-model="historico.mmss_esquerdo"> <label for="PreservadaB">Preservada</label>
                  <input type="radio" name="mmss_esquerdo" id="ParesiaB" value="Paresia" v-model="historico.mmss_esquerdo"> <label for="ParesiaB">Paresia</label>
                  <input type="radio" name="mmss_esquerdo" id="PlegiaB" value="Plegia" v-model="historico.mmss_esquerdo"> <label for="PlegiaB">Plegia</label>
                  <input type="radio" name="mmss_esquerdo" id="ParestesiaB" value="Parestesia" v-model="historico.mmss_esquerdo"> <label for="ParestesiaB">Parestesia</label>

                  <br>

                  <label for='inferiorDireito'>MMII - Direito:</label>
                  <input type="radio" name="mmii_direito" id="PreservadaC" value="Preservada" v-model="historico.mmii_direito"> <label for="PreservadaC">Preservada</label>
                  <input type="radio" name="mmii_direito" id="ParesiaC" value="Paresia" v-model="historico.mmii_direito"> <label for="ParesiaC">Paresia</label>
                  <input type="radio" name="mmii_direito" id="PlegiaC" value="Plegia" v-model="historico.mmii_direito"> <label for="PlegiaC">Plegia</label>
                  <input type="radio" name="mmii_direito" id="ParestesiaC" value="Parestesia" v-model="historico.mmii_direito"> <label for="ParestesiaC">Parestesia</label>

                  <br>


                  <label for='inferiorEsquerdo'>MMII - Esquerdo:</label>
                  <input type="radio" name="mmii_esquerdo" id="PreservadaD" value="Preservada" v-model="historico.mmii_esquerdo"> <label for="PreservadaD">Preservada</label>
                  <input type="radio" name="mmii_esquerdo" id="ParesiaD" value="Paresia" v-model="historico.mmii_esquerdo"> <label for="ParesiaD">Paresia</label>
                  <input type="radio" name="mmii_esquerdo" id="PlegiaD" value="Plegia" v-model="historico.mmii_esquerdo"> <label for="PlegiaD">Plegia</label>
                  <input type="radio" name="mmii_esquerdo" id="ParestesiaD" value="Parestesia" v-model="historico.mmii_esquerdo"> <label for="ParestesiaD">Parestesia</label>

                  <br>
                  <label for='fala'><b>Fala:</b></label>
                  <input type="radio" name="falaELinguagem" id="Afonia" value="Afonia" v-model="historico.falaELinguagem"> <label for="Afonia">Afonia</label>
                  <input type="radio" name="falaELinguagem" id="Dislalia" value="Dislalia" v-model="historico.falaELinguagem"> <label for="Dislalia">Dislalia</label>
                  <input type="radio" name="falaELinguagem" id="Disartria" value="Disartria" v-model="historico.falaELinguagem"> <label for="Disartria">Disartria</label>
                  <input type="radio" name="falaELinguagem" id="Disfasia" value="Disfasia" v-model="historico.falaELinguagem"> <label for="Disfasia">Disfasia</label>
                  <input type="radio" name="falaELinguagem" id="Afasia" value="Afasia" v-model="historico.falaELinguagem"> <label for="Afasia">Afasia</label>


                  <fieldset class="module aligned ">
                      <b>1.2. Oxigenação</b>
                  </fieldset>

                  <label for='oxigenacao'><b>Respiração:</b></label>
                  <input type="radio" name="oxigenacao" id="Dispneia" value="Dispneia" v-model="historico.oxigenacao"> <label for="Dispneia">Dispneia</label>
                  <input type="radio" name="oxigenacao" id="Taquipnéia" value="Taquipnéia" v-model="historico.oxigenacao"> <label for="Taquipnéia">Taquipnéia</label>
                  <input type="radio" name="oxigenacao" id="Bradipnéia" value="Bradipnéia" v-model="historico.oxigenacao"> <label for="Bradipnéia">Bradipnéia</label>
                  <input type="radio" name="oxigenacao" id="Hiperventilação neurogênica central" value="Hiperventilação neurogênica central" v-model="historico.oxigenacao"> <label for="Hiperventilação neurogênica central">Hiperventilação neurogênica central</label>

                  <br>
                  <input type="radio" name="oxigenacao" id="Espontânea" value="Espontânea" v-model="historico.oxigenacao"> <label for="Espontânea">Espontânea</label>
                  <input type="radio" name="oxigenacao" id="Catéter" value="Catéter" v-model="historico.oxigenacao"> <label for="Catéter">Catéter</label>
                  <input type="radio" name="oxigenacao" id="Máscara" value="Máscara" v-model="historico.oxigenacao"> <label for="Máscara">Máscara</label>
                  <input type="radio" name="oxigenacao" id="Traqueostomia" value="Traqueostomia" v-model="historico.oxigenacao"> <label for="Traqueostomia">Traqueostomia</label>
                  <input type="radio" id="oxigenacao" value="Ventilação mecânica" v-model="historico.oxigenacao"> <label for="ventilacao">Ventilação mecânica</label>

                  <input type="radio" name="oxigenacao" id="OutrosOXI" value="" v-model="historico.oxigenacao"> <label for="OutrosOXI">Outros</label><input type="text" name="oxigenacao" id="OutrosOXI" v-model="historico.oxigenacaoOutros">

                  <br>

                  <label for='O2'><b>O²:</b></label>
                  <input type="text" name="O2" v-model="historico.O2">

                  <label for='spO2'><b>SpO²:</b></label>
                  <input type="text" name="SpO2" v-model="historico.SpO2">

                  <label for='FR'><b>FR (mrpm):</b></label>
                  <input type="text" name="FR" v-model="historico.FR">

                  <br>

                  <label for='modalidade'><b>Modalidade:</b></label>
                  <input type="text" name="modalidade" v-model="historico.modalidade">

                  <label for='FiO²'><b>FiO²:</b></label>
                  <input type="text" name="FiO2" v-model="historico.FiO2">

                  <label for='PEEP'><b>PEEP:</b></label>
                  <input type="text" name="Peep" v-model="historico.Peep">

                  <br>

                  <label for='asculta'><b>Asculta pulmonar: MV presentes</b></label>
                  <input type="radio" name="auscultaPulmonar_MvPresente" id="Bilateralmente" value="Bilateralmente" v-model="historico.auscultaPulmonar_MvPresente"> <label for="Bilateralmente">Bilateralmente</label>
                  <input type="radio" name="auscultaPulmonar_MvPresente" id="Diminuídos" value="Diminuídos" v-model="historico.auscultaPulmonar_MvPresente"> <label for="Diminuídos">Diminuídos</label>
                  <input type="radio" name="auscultaPulmonar_MvPresente" id="Ausentes" value="Ausentes" v-model="historico.auscultaPulmonar_MvPresente"> <label for="Ausentes">Ausentes</label>

                  <br>

                  <label for='ruidos'><b>Ruídos adventícios: </b></label>
                  <input type="radio" name="auscultaPulmonar_Ruidos" id="Roncos" value="Roncos" v-model="historico.auscultaPulmonar_Ruidos"> <label for="Roncos">Roncos</label>
                  <input type="radio" name="auscultaPulmonar_Ruidos" id="Sibilos" value="Sibilos" v-model="historico.auscultaPulmonar_Ruidos"> <label for="Sibilos">Sibilos</label>
                  <input type="radio" name="auscultaPulmonar_Ruidos" id="Estertores" value="Estertores" v-model="historico.auscultaPulmonar_Ruidos"> <label for="Estertores">Estertores</label>

                  <br>

                  <label for='prevencaoDeTosse'><b>Presenção de tosse: </b></label>
                  <input type="radio" name="prevencaoDeTosse" id="TosseNão" value="Não" v-model="historico.prevencaoDeTosse"> <label for="TosseNão">Não</label>
                  <input type="radio" name="prevencaoDeTosse" id="TosseSeca" value="Seca" v-model="historico.prevencaoDeTosse"> <label for="TosseSeca">Seca</label>
                  <input type="radio" name="prevencaoDeTosse" id="TosseProdutiva" value="Produtiva" v-model="historico.prevencaoDeTosse"> <label for="TosseProdutiva">Produtiva</label>

                  <br>

                  <label><b>Aspiração:</b></label>
                  <label for="expectoracaoCaracteristica">Quantidade:</label>
                  <input name="expectoracaoCaracteristica" type="Text" id="expectoracaoCaracteristica" v-model="historico.expectoracaoCaracteristica">
                  <label for="expectoracaoQuantidade">Característica:</label>
                  <input name="expectoracaoQuantidade" type="Text" id="expectoracaoQuantidade" v-model="historico.expectoracaoQuantidade">

                  <br>

                  <label><b>Drenagem Torácica:</b></label>
                  <label for="drenagemCaracteristica">Quantidade:</label>
                  <input name="drenagemCaracteristica" type="Text" id="drenagemCaracteristica" v-model="historico.drenagemCaracteristica">
                  <label for="drenagemQuantidade">Característica:</label>
                  <input name="drenagemQuantidade" type="Text" id="drenagemQuantidade" v-model="historico.drenagemQuantidade">

                  <input type="checkbox" name="drenagemToracicaDTD" id="DTD" value="DTD" v-model="historico.drenagemToracicaDTD">
                  <label for="DTD">DTD</label>

                  <input type="checkbox" name="drenagemToracicaDTE" id="DTE" value="DTE" v-model="historico.drenagemToracicaDTE">
                  <label for="DTE">DTE</label>

                  <br>

                  <label for='mamas'><b>Mamas: </b></label>
                  <input type="radio" name="mamas" id="sem" value="Sem alterações" v-model="historico.mamas"> <label for="sem">Sem alterações</label>
                  <input type="radio" name="mamas" id="nódulos" value="Nódulos" v-model="historico.mamas"> <label for="nódulos">Nódulos</label>
                  <input type="radio" name="mamas" id="Dor" value="Dor" v-model="historico.mamas"> <label for="Dor">Dor</label>
                  <input type="radio" name="mamas" id="Assimétricas" value="Assimétricas" v-model="historico.mamas"> <label for="Assimétricas">Assimétricas</label>


                  <fieldset class="module aligned ">
                      <b>1.3. Avaliação cardiovascular</b>
                  </fieldset>


                  <label for="avaliacaoCardiovascular_Fc"><b>FC: (bpm)</b></label>
                  <input name="avaliacaoCardiovascular_Fc" type="Text" id="avaliacaoCardiovascular_Fc" v-model="historico.avaliacaoCardiovascular_Fc">

                  <label for="avaliacaoCardiovascular_Pa"><b>PA: (mmHg)</b></label>
                  <input name="avaliacaoCardiovascular_Pa" type="Text" id="avaliacaoCardiovascular_Pa" v-model="historico.avaliacaoCardiovascular_Pa">


                  <label for="avaliacaoCardiovascular_PVC"><b>PVC: (cmH2O)</b></label>
                  <input name="avaliacaoCardiovascular_PVC" type="Text" id="avaliacaoCardiovascular_PVC" v-model="historico.avaliacaoCardiovascular_PVC">

                  <br>

                  <label for="avaliacaoCardiovascular_PAM"><b>PAM: (mmHg)</b></label>
                  <input name="avaliacaoCardiovascular_PAM" type="Text" id="avaliacaoCardiovascular_PAM" v-model="historico.avaliacaoCardiovascular_PAM">

                  <br>

                  <label for='pulso'><b>Pulso: </b></label>
                  <input type="radio" name="pulso" id="regular" value="Regular" v-model="historico.pulso"> <label for="Regular">Regular</label>
                  <input type="radio" name="pulso" id="Irregular" value="Irregular" v-model="historico.pulso"> <label for="Irregular">Irregular</label>
                  <input type="radio" name="pulso" id="Impalpável" value="Impalpável" v-model="historico.pulso"> <label for="Impalpável">Impalpável</label>
                  <input type="radio" name="pulso" id="Palpável" value="Palpável" v-model="historico.pulso"> <label for="Palpável">Palpável</label>
                  <input type="radio" name="pulso" id="Cheio" value="Cheio" v-model="historico.pulso"> <label for="Cheio">Cheio</label>
                  <input type="radio" name="pulso" id="Filiforme" value="Filiforme" v-model="historico.pulso"> <label for="Filiforme">Filiforme</label>

                  <br>

                  <label for='presencaDeEdema'><b>Presença de edema: </b></label>
                  <input type="radio" name="presencaDeEdema" id="Pés" value="Pés" v-model="historico.presencaDeEdema"> <label for="Pés">Pés</label>
                  <input type="radio" name="presencaDeEdema" id="MMII" value="MMII" v-model="historico.presencaDeEdema"> <label for="MMII">MMII</label>
                  <input type="radio" name="presencaDeEdema" id="MMSS" value="MMSS" v-model="historico.presencaDeEdema"> <label for="MMSS">MMSS</label>
                  <input type="radio" name="presencaDeEdema" id="Anasarca" value="Anasarca" v-model="historico.presencaDeEdema"> <label for="Anasarca">Anasarca</label>

                  <br>

                  <fieldset class="module aligned ">
                      <b>1.4. Hidratação e Eliminação Vesical</b>
                  </fieldset>

                  <label for='presencaDeEdema'><b>Turgidez da pele: </b></label>
                  <input type="radio" name="presencaDeEdema" id="turgidezDaPeleP" value="Preservada" v-model="historico.turgidezDaPele"> <label for="turgidezDaPeleP">Preservada</label>
                  <input type="radio" name="turgidezDaPele" id="turgidezDaPeleD" value="Diminuída" v-model="historico.turgidezDaPele"> <label for="turgidezDaPeleD">Diminuída</label>

                  <br>

                  <label for='eliminacao'><b>Eliminação urinária: </b></label>
                  <label for="volume">Volume: (ml;h)</label>
                  <input name="volume" type="Text" id="volume" v-model="historico.eliminacaoUrinaria_Volume">


                  <br>
                  <label for='carac'><b>Características: </b></label>
                  <input type="radio" name="eliminacaoUrinaria" id="Espontânea2" value="Espontânea" v-model="historico.eliminacaoUrinaria"> <label for="Espontânea2">Espontânea</label>
                  <input type="radio" name="eliminacaoUrinaria" id="Retenção" value="Retenção" v-model="historico.eliminacaoUrinaria"> <label for="Retenção">Retenção</label>
                  <input type="radio" name="eliminacaoUrinaria" id="Incontinência" value="Incontinência" v-model="historico.eliminacaoUrinaria"> <label for="Incontinência">Incontinência</label>
                  <input type="radio" name="eliminacaoUrinaria" id="SVD" value="SVD" v-model="historico.eliminacaoUrinaria"> <label for="SVD">SVD</label>
                  <br>
                  <input type="radio" name="eliminacaoUrinaria" id="Dispositivo urinário" value="Dispositivo urinário" v-model="historico.eliminacaoUrinaria"> <label for="Dispositivo urinário">Dispositivo urinário</label>
                  <input type="radio" name="carac" id="Disúria" value="Disúria" v-model="historico.eliminacaoUrinaria"> <label for="Disúria">Disúria</label>
                  <input type="radio" name="carac" id="Oligúria" value="Oligúria" v-model="historico.eliminacaoUrinaria"> <label for="Oligúria">Oligúria</label>
                  <input type="radio" name="carac" id="Anúria" value="Anúria" v-model="historico.eliminacaoUrinaria"> <label for="Anúria">Anúria</label>
                  <input type="radio" name="carac" id="Poliúria" value="Poliúria" v-model="historico.eliminacaoUrinaria"> <label for="Poliúria">Poliúria</label>
                  <input type="radio" name="carac" id="Hematúria" value="Hematúria" v-model="historico.eliminacaoUrinaria"> <label for="Hematúria">Hematúria</label>
                  <input type="radio" name="carac" id="outrosCarac" value="" v-model="historico.eliminacaoUrinaria"> <label for="outrosCarac">Outros</label>
                  <input name="carac" type="Text" id="outrosCarac" v-model="historico.eliminacaoUrinariaOutros"> <br>

                  <fieldset class="module aligned ">
                      <b>1.5. Alimentação e Eliminação Vesical</b>
                  </fieldset>


                  <label for="tipoDeDieta"><b>Tipo de dieta:</b></label>
                  <input name="tipoDeDieta" type="Text" id="tipoDeDieta" v-model="historico.tipoDeDieta">


                  <label for="glicemia"><b>Glicemia:</b></label>
                  <input name="glicemia" type="Text" id="glicemia" v-model="historico.glicemia"> <br>

                  <!-- <label for='apetite'><b>Apetite: </b></label>
                  <input type="radio" name="apetite" id="Normal" value="Normal"> <label for="Normal">Normal</label>
                  <input type="radio" name="apetite" id="Aumentado" value="Aumentado"> <label for="Aumentado">Aumentado</label>
                  <input type="radio" name="apetite" id="Diminuído" value="Diminuído"> <label for="Diminuído">Diminuído</label>
                  <input type="radio" name="apetite" id="Não se aplica" value="Não se aplica"> <label for="Não se aplica">Não se aplica</label> -->

                  <br>
                  <label for='alimentacao_ViasDeAdministracao'><b>Vias de administração: </b></label>
                  <input type="radio" name="alimentacao_ViasDeAdministracao" id="Oral" value="Oral" v-model="historico.alimentacao_ViasDeAdministracao"> <label for="Oral">Oral</label>
                  <input type="radio" name="alimentacao_ViasDeAdministracao" id="SNG" value="SNG" v-model="historico.alimentacao_ViasDeAdministracao"> <label for="SNG">SNG</label>
                  <input type="radio" name="alimentacao_ViasDeAdministracao" id="SNE" value="SNE" v-model="historico.alimentacao_ViasDeAdministracao"> <label for="SNE">SNE</label>
                  <input type="radio" name="alimentacao_ViasDeAdministracao" id="Parenteral" value="Parenteral" v-model="historico.alimentacao_ViasDeAdministracao"> <label for="Parenteral">Parenteral</label>
                  <input type="radio" name="alimentacao_ViasDeAdministracao" id="OutrosVias" value="" v-model="historico.alimentacao_ViasDeAdministracao"> <label for="OutrosVias">Outros</label>
                  <input type="text" name="vias" id="OutrosVias" v-model="historico.viasOutros">

                  <br>

                  <label for='abdome'><b>Abdome: </b></label>
                  <input type="checkbox" name="abdome" id="Plano" value="Plano" v-model="historico.abdomeOpcoes"> <label for="Plano">Plano</label>
                  <input type="checkbox" name="abdome" id="Globoso" value="Globoso" v-model="historico.abdomeOpcoes"> <label for="Globoso">Globoso</label>
                  <input type="checkbox" name="abdome" id="Distendido" value="Distendido" v-model="historico.abdomeOpcoes"> <label for="Distendido">Distendido</label>
                  <input type="checkbox" name="abdome" id="Doloroso à palpação" value="Doloroso à palpação" v-model="historico.abdomeOpcoes"> <label for="Doloroso à palpação">Doloroso à palpação</label>
                  <input type="checkbox" name="abdome" id="OutrosAbdome" value="" v-model="historico.abdomeOpcoes">
                  <label for="OutrosAbdome">Outros </label>
                  <input type="text" name="abdome" id="OutrosAbdome" v-model="historico.abdomeOutros">

                  <br>

                  <label for='presencao'><b>Presenção de: </b></label>
                  <input type="radio" name="presencao" id="Náusea" value="Náusea" v-model="historico.presencaoDe"> <label for="Náusea">Náusea</label>
                  <input type="radio" name="presencao" id="Vômito" value="Vômito" v-model="historico.presencaoDe"> <label for="Vômito">Vômito</label>


                  <br>

                  <label for='RHA'><b>RHA: </b></label>
                  <input type="radio" name="RHA" id="Ausentes" value="Ausentes" v-model="historico.RHA"> <label for="Ausentes">Ausentes</label>
                  <input type="radio" name="RHA" id="DiminuídoRHA" value="Diminuído" v-model="historico.RHA"> <label for="DiminuídoRHA">Diminuído</label>
                  <input type="radio" name="RHA" id="AumentadoRHA" value="Aumentado" v-model="historico.RHA"> <label for="AumentadoRHA">Aumentado</label>

                  <br>

                  <label for='ostomia'><b>Ostomia: </b></label>
                  <input type="radio" name="ostomia" id="NãoOsto" value="Não" v-model="historico.ostomia"> <label for="NãoOsto">Não</label>
                  <input type="radio" name="ostomia" id="SimOsto" value="Sim" v-model="historico.ostomia"> <label for="SimOsto">Sim</label>
                  <div v-if="historico.ostomia == 'Sim'">
                      <label for='ostomiaLocal'>Local: </label>
                      <input type="text" name="ostomiaLocal" v-model="historico.ostomiaLocal">
                      <label for='ostomiaCaracteristica'>Caracteristica: </label>
                      <input type="text" name="ostomiaCaracteristica" v-model="historico.ostomiaCaracteristica">
                  </div>

                  <br>

                  <label for='eliminacaoIntestinal'><b>Eliminação intestinal: </b></label>
                  <br>
                  <label for='eliminacaoIntestinal_frequencia' placeholder="vezes/ semana">Frequência: </label>
                  <input type="text" name="eliminacaoIntestinal_frequencia" id="eliminacaoIntestinal_frequencia" v-model="historico.eliminacaoIntestinal_frequencia">
                  <br>
                  <input type="radio" name="eliminacaoIntestinal" id="ElimiNormal" value="Normal"> <label for="ElimiNormal">Normal</label>
                  <input type="radio" name="eliminacaoIntestinal" id="ElimiConsti" value="Constipação"> <label for="ElimiConsti">Constipação</label>
                  <input type="radio" name="eliminacaoIntestinal" id="Diarréia" value="Diarréia"> <label for="Diarréia">Diarréia</label>
                  <input type="radio" name="eliminacaoIntestinal" id="ElimiIncontinência" value="Incontinência"> <label for="ElimiIncontinência">Incontinência</label>
                  <input type="radio" name="eliminacaoIntestinal" id="OutrosElimi"> <label for="OutrosElimi">Outros </label><input type="text" name="eliminacaoIntestinal" id="OutrosElimi">


                  <fieldset class="module aligned ">
                      <b>1.6. Aspectos cutâneo-mucosa</b>
                  </fieldset>

                  <label for="genitalia_lesoes"><b>Lesões</b></label>
                  <input type="text" name="genitalia_lesoes" id="genitalia_lesoes" v-model="historico.genitalia_lesoes">

                  <br>

                  <label for='pele'><b>Pele: </b></label>
                  <input type="radio" name="pele" id="Cianose" value="Cianose" v-model="historico.pele"> <label for="Cianose">Cianose</label>
                  <input type="radio" name="pele" id="Icterícia" value="Icterícia" v-model="historico.pele"> <label for="Icterícia">Icterícia</label>
                  <input type="radio" name="pele" id="Petéquias" value="Petéquias" v-model="historico.pele"> <label for="Petéquias">Petéquias</label>
                  <input type="radio" name="pele" id="Corado" value="Corado" v-model="historico.pele"> <label for="Corado">Corado</label>
                  <input type="radio" name="pele" id="Hipocorado" value="Hipocorado" v-model="historico.pele"> <label for="Hipocorado">Hipocorado</label>
                  <input type="radio" name="pele" id="Hipercorado" value="Hipercorado" v-model="historico.pele"> <label for="Hipercorado">Hipercorado</label>
                  <input type="radio" name="pele" id="Equimoses" value="Equimoses" v-model="historico.pele"> <label for="Equimoses">Equimoses</label>
                  <input type="radio" name="pele" id="Hematomas" value="Hematomas" v-model="historico.pele"> <label for="Hematomas">Hematomas</label>
                  <input type="radio" name="pele" id="Escoriações" value="Escoriações" v-model="historico.pele"> <label for="Escoriações">Escoriações</label>
                  <input type="radio" name="pele" id="OutrosPele" value="" v-model="historico.pele">
                  <label for="OutrosPele">Outros </label>
                  <input type="text" name="pele" id="OutrosPele" v-model="historico.peleOutros">

                  <br>

                  <label for="pele_temperatura"><b>Temperatura: (ºC) </b></label>
                  <input type="text" name="pele_temperatura" id="pele_temperatura" v-model="historico.pele_temperatura">

                  <br>
                  <label for='olhos'><b>Olhos: </b></label>
                  <input type="checkbox" name="olhos" id="IcteríciaOlhos" value="Icterícia" v-model="historico.olhosOpcoes"> <label for="IcteríciaOlhos">Icterícia</label>
                  <input type="checkbox" name="olhos" id="Endema de conjuntiva" value="Endema de conjuntiva" v-model="historico.olhosOpcoes"> <label for="Endema de conjuntiva">Endema de conjuntiva</label>
                  <input type="checkbox" name="olhos" id="OutrosOlhos" value="" v-model="historico.olhosOpcoes">
                  <label for="OutrosOlhos">Outros </label>
                  <input type="text" name="olhos" id="OutrosOlhos" v-model="historico.olhosOutros">

                  <br>

                  <label for='AVP'><b>AVP: </b></label>
                  <input type="radio" name="AVP" id="NãoAVP" value="Não" v-model="historico.AVP">
                  <label for="NãoAVP">Não</label>
                  <input type="radio" name="AVP" id="OutrosAVP" value="Sim" v-model="historico.AVP">
                  <label for="OutrosAVP">Sim </label>
                  <div v-if="historico.AVP=='Sim'">
                      <label for="AVP">Local: </label>
                      <input type="text" name="AVP" id="AVP" v-model="historico.AVP_local">
                      <label for="tempoAVP"> Tempo de permanência: </label>
                      <input type="text" name="tempoAVP" id="tempoAVP" v-model="historico.AVP_tempo">
                  </div>


                  <br>

                  <label for='CVC'><b>CVC: </b></label>
                  <input type="radio" name="CVC" id="NãoCVC" value="Não" v-model="historico.CVC">
                  <label for="NãoCVC">Não</label>
                  <input type="radio" name="CVC" id="SimCVC" value="Sim" v-model="historico.CVC">
                  <label for="SimCVC">Sim </label>
                  <div v-if="historico.CVC=='Sim'">
                      <label for="CVC">Local: </label>
                      <input type="text" name="CVC" id="CVC" v-model="historico.CVC_local">
                      <label for="tempoCVC"> Tempo de permanência: </label>
                      <input type="text" name="tempoCVC" id="tempoCVC" v-model="historico.CVC_tempo">
                  </div>

                  <br>

                  <label for='DrenoNão'><b>Dreno: </b></label>
                  <input type="radio" name="dreno" id="DrenoNão" value="Não" v-model="historico.dreno">
                  <label for="DrenoNão">Não</label>
                  <input type="radio" name="dreno" id="DrenoSim" value="Sim" v-model="historico.dreno">
                  <label for="DrenoSim">Sim </label>
                  <div v-if="historico.dreno=='Sim'">
                      <label for="DrenoLocal">Local: </label>
                      <input type="text" name="DrenoLocal" id="DrenoLocal" v-model="historico.dreno_local">
                      <label for="DrenoTipo">Tipo de dreno: </label>
                      <input type="text" name="DrenoTipo" id="DrenoTipo" v-model="historico.dreno_tipo">
                  </div>

                  <br>

                  <label for='genitalia'><b>Genitália: </b></label>
                  <input type="radio" name="genitalia" id="Sem anormalidades" value="Sem anormalidades" v-model="historico.genitalia"> <label for="Sem anormalidades">Sem anormalidades</label>
                  <input type="radio" name="genitalia" id="Secreção" value="Secreção" v-model="historico.genitalia"> <label for="Secreção">Secreção</label>
                  <input type="radio" name="genitalia" id="outrosGenitalia" value="" v-model="historico.genitalia">
                  <label for="outrosGenitalia">Outros: </label>
                  <input type="text" name="genitalia" id="outrosGenitalia" v-model="historico.genitaliaOutros">


                  <fieldset class="module aligned ">
                      <b>1.7. Segurança física</b>
                  </fieldset>

                  <label for='contencao'><b>Necessidade de contenção no leito: </b></label>
                  <input type="radio" name="contencao" id="naoContencao" value="Não" v-model="historico.necessidadeDeContencao"> <label for="naoContencao">Não</label>
                  <input type="radio" name="contencao" id="SimContencao" value="Sim" v-model="historico.necessidadeDeContencao"> <label for="SimContencao">Sim</label>


                  <br>
                  <label for='riscoParaQueda'><b>Risco para queda: </b></label>
                  <input type="radio" name="queda" id="naoQueda" value="Não" v-model="historico.riscoParaQueda"> <label for="naoQueda">Não</label>
                  <input type="radio" name="queda" id="simQueda" value="Sim" v-model="historico.riscoParaQueda"> <label for="simQueda">Sim</label>

                  <br>
                  <label for="escala"><b>Escala de Braden: </b> </label><input type="text" name="escala" id="escala" v-model="historico.escore">


                  <br>
                  <label for="obs"><b>Observações: </b> </label><input type="text" name="obs" id="obs" v-model="historico.observacoes">

              </fieldset>

              <br>

              <div>
                  <button value="Salvaras" v-on:click="salvar">Salvar</button>
              </div>

            </div>
          </div>

  </body>
</template>


<script>
import NavBar from '@/components/NavBar'

var $ = require('jquery')

export default {
  name: 'NovoHistorico',
  data () {
    return {
      historico: {
        idPaciente: '',
        internacoes: 0,
        motivoInternacao: '',
        antecedentesOpcoes: [],
        antecedentes: '',
        alergias: '',
        aspiracao: '',
        vacinas: '',
        consciencia: '',
        glasgow: '',
        pupilas: '',
        mmss_direito: '',
        mmss_esquerdo: '',
        mmii_direito: '',
        mmii_esquerdo: '',
        falaELinguagem: '',
        oxigenacao: '',
        oxigenacaoOutros: '',
        O2: 0,
        SpO2: 0,
        SpO: 0,
        FR: 0,
        modalidade: '',
        hidratacao_Caracteristicas: '',
        FiO2: '',
        Peep: '',
        auscultaPulmonar_MvPresente: '',
        auscultaPulmonar_Ruidos: '',
        prevencaoDeTosse: '',
        presencaoDeTosse_xpectoracao: '',
        expectoracaoCaracteristica: '',
        expectoracaoQuantidade: '',
        drenagemCaracteristica: '',
        drenagemQuantidade: '',
        drenagemToracicaDTD: false,
        drenagemToracicaDTE: false,
        drenagemToracica: '',
        mamas: '',
        avaliacaoCardiovascular_Fc: '',
        avaliacaoCardiovascular_Pa: '',
        avaliacaoCardiovascular_PVC: '',
        avaliacaoCardiovascular_PAM: '',
        pulso: '',
        turgidezDaPele: '',
        presencaDeEdema: '',
        eliminacaoUrinaria: '',
        eliminacaoUrinaria_Volume: '',
        eliminacaoCaracteristicaOutros: '',
        tipoDeDieta: '',
        glicemia: '',
        vias: '',
        viasOutros: '',
        abdomeOpcoes: [],
        abdome: '',
        abdomeOutros: '',
        RHA: '',
        ostomia: '',
        ostomiaLocal: '',
        ostomiaCaracteristica: '',
        eliminacaoIntestinal_frequencia: '',
        eliminacaoIntestinal: '',
        genitalia_lesoes: '',
        pele: '',
        peleOutros: '',
        pele_temperatura: '',
        olhosOpcoes: [],
        olhos: '',
        olhosOutros: '',
        AVP: '',
        AVP_local: '',
        AVP_tempo: '',
        CVC: '',
        CVC_local: '',
        CVC_tempo: '',
        dreno: '',
        dreno_local: '',
        dreno_tipo: '',
        genitalia: '',
        genitaliaOutros: '',
        necessidadeDeContencao: '',
        riscoParaQueda: '',
        escore: '',
        presencaoDe: '',
        observacoes: ''
      }
    }
  },
  components: {
    NavBar: NavBar
  },
  methods: {
    salvar () {
      console.log(this.historico)

      this.historico.olhos = this.historico.olhosOpcoes.toString()
      this.historico.antecedentes = this.historico.antecedentesOpcoes.toString()
      this.historico.abdome = this.historico.abdomeOpcoes.toString()

      console.log(this.historico)

      $.post('http://localhost/sae/addHistorico.php', JSON.stringify(this.historico))
        .then(res => {
          console.log(res)
        })
    }
  },
  created: function () {
    let id = this.$route.params.idpaciente
    if (!isNaN(id)) {
      this.historico.idPaciente = id
      console.log(id)
    } else {
      console.log('nao existe esse paciente')
      window.location.replace('#/saeinfo/pacientes')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* DASHBOARD */

.dashboard .module table th {
    width: 100%;
}

.dashboard .module table td {
    white-space: nowrap;
}

.dashboard .module table td a {
    display: block;
    padding-right: .6em;
}

/* RECENT ACTIONS MODULE */

.module ul.actionlist {
    margin-left: 0;
}

ul.actionlist li {
    list-style-type: none;
}

ul.actionlist li {
    overflow: hidden;
    text-overflow: ellipsis;
    -o-text-overflow: ellipsis;
}

</style>
