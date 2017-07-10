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

                  <div class="app-SaeApp module">
                      <table>
                          <caption>
                              <a href="/saeinfo" class="section" title="Modelos na aplicação Saeapp">Saeapp</a>
                          </caption>

                          <tbody>
                              <tr class="model-caracteristica">

                                  <th scope="row"><a href="/SaeApp/caracteristica/">Caracteristicas</a></th>

                                  <td><a href="/SaeApp/caracteristica/add/" class="addlink">Adicionar</a></td>

                                  <td><a href="/SaeApp/caracteristica/" class="changelink">Listar</a></td>

                              </tr>

                              <tr class="model-caracteristicasdefinidora">

                                  <th scope="row"><a href="/SaeApp/caracteristicasdefinidora/">Caracteristicas definidoras</a></th>

                                  <td><a href="/SaeApp/caracteristicasdefinidora/add/" class="addlink">Adicionar</a></td>

                                  <td><a href="/SaeApp/caracteristicasdefinidora/" class="changelink">Listar</a></td>

                              </tr>

                              <tr class="model-intervencao">

                                  <th scope="row"><a href="/SaeApp/intervencao/">Intervencaos</a></th>

                                  <td><a href="/SaeApp/intervencao/add/" class="addlink">Adicionar</a></td>

                                  <td><a href="/SaeApp/intervencao/" class="changelink">Listar</a></td>

                              </tr>

                              <tr class="model-paciente">

                                  <th scope="row"><a href="/#/saeinfo/pacientes">Pacientes</a></th>

                                  <td><a href="/#/saeinfo/novoPaciente" class="addlink">Adicionar</a></td>

                                  <td><a href="/#/saeinfo/pacientes" class="changelink">Listar</a></td>

                              </tr>

                              <tr class="model-planodecuidados">

                                  <th scope="row"><a href="/SaeApp/planodecuidados/">Plano de cuidados</a></th>

                                  <td><a href="/SaeApp/planodecuidados/add/" class="addlink">Adicionar</a></td>

                                  <td><a href="/SaeApp/planodecuidados/" class="changelink">Listar</a></td>

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
