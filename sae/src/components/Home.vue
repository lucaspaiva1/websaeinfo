<template>
  <body class=" dashboard">
      <!-- Container -->
      <div id="container">
          <!-- Header -->
          <NavBar></NavBar>
          <!-- END Header -->
          <!-- Content -->
          <div id="content" class="colMS">
              <h1>Sistematização da Assistência de Enfermagem</h1>

              <div id="content-main">
                <div class="app-auth module">
                  <table>
                    <caption>
                        <a class="section" title="Modelos na aplicação Autenticação e Autorização">Autenticação e Autorização</a>
                    </caption>
                    <tbody>
                      <tr class="model-user">
                        <th scope="row"><a href="#/saeinfo/usuarios">Usuários</a></th>
                          <td><a href="#/saeinfo/paciente/novo" class="addlink">Adicionar</a></td>
                          <td><a href="#/saeinfo/usuarios" class="changelink">Listar</a></td>
                      </tr>
                    </tbody>
                  </table>
                  </div>

                  <div class="app-SaeApp module">
                      <table>
                          <caption>
                              <a href="#/saeinfo" class="section" title="Modelos na aplicação Saeapp">Saeapp</a>
                          </caption>

                          <tbody>
                              <tr class="model-caracteristica">

                                  <th scope="row"><a href="#/saeinfo/caracteristicas/">Caracteristicas</a></th>

                                  <td><a href="#/saeinfo/caracteristica/nova/" class="addlink">Adicionar</a></td>

                                  <td><a href="#/saeinfo/caracteristicas/" class="changelink">Listar</a></td>

                              </tr>

                              <tr class="model-caracteristicasdefinidora">

                                  <th scope="row"><a href="#/saeinfo/caracteristicasdefinidoras/">Caracteristicas definidoras</a></th>

                                  <td><a href="#/saeinfo/caracteristicasdefinidora/nova/" class="addlink">Adicionar</a></td>

                                  <td><a href="#/saeinfo/caracteristicasdefinidoras/" class="changelink">Listar</a></td>

                              </tr>

                              <tr class="model-intervencao">

                                  <th scope="row"><a href="#/saeinfo/intervencoes/">Intervenções</a></th>

                                  <td><a href="#/saeinfo/intervencao/nova/" class="addlink">Adicionar</a></td>

                                  <td><a href="#/saeinfo/intervencoes/" class="changelink">Listar</a></td>

                              </tr>

                              <tr class="model-paciente">

                                  <th scope="row"><a href="/#/saeinfo/pacientes">Pacientes</a></th>

                                  <td><a href="/#/saeinfo/paciente/novo" class="addlink">Adicionar</a></td>

                                  <td><a href="/#/saeinfo/pacientes" class="changelink">Listar</a></td>

                              </tr>

                              <tr class="model-planodecuidados">

                                  <th scope="row"><a href="/SaeApp/planodecuidados/">Plano de cuidados</a></th>

                                  <td><a href="#/saeinfo/planodecuidados/novo/" class="addlink">Adicionar</a></td>

                                  <td><a href="#/saeinfo/planodecuidados/" class="changelink">Listar</a></td>

                              </tr>

                          </tbody>
                      </table>
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
      teste: 'teste'
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
