<template>
<body class=" app-SaeApp model-caracteristica change-list">
<!-- Container -->
  <div id="container">

    <!-- Header -->
    <NavBar></NavBar>
    <!-- END Header -->

    <div class="breadcrumbs">
      <a href="/#/saeinfo/">Início</a>
      › <a href="/#/saeinfo/caracteristicas">Caracteristicas</a>
    </div>

    <!-- Content -->
    <div id="content" class="flex">

      <h1>Selecione caracteristica para modificar</h1>

      <div id="content-main">

        <ul class="object-tools">
          <li>
            <a href="/#/saeinfo/caracteristica/nova" class="addlink">
            Adicionar caracteristica
            </a>
          </li>
        </ul>

        <div class="module" id="changelist">
          <form id="changelist-form" action="" method="post" novalidate=""><input type="hidden" name="csrfmiddlewaretoken" value="bvLieasE4W3dwdvZCUyRoraEZhVVMERX">
            <div class="actions">
              <label>Ação:
                <select name="action">
                  <option value="" selected="selected">---------</option>
                  <option value="delete_selected">Remover caracteristicas selecionados</option>
                </select>
              </label>

              <input class="select-across" name="select_across" type="hidden" value="0">
              <button type="submit" class="button" title="Executar ação selecionada" name="index" value="0">Fazer</button>
              <span class="action-counter" style="display: inline;">0 de 16 selecionados</span>
            </div>

            <div class="results">
              <table id="result_list">
                <thead>
                  <tr>
                    <th scope="col" class="action-checkbox-column">
                      <div class="text">
                        <span>
                          <input type="checkbox" id="action-toggle" style="display: inline-block;">
                        </span>
                      </div>
                      <div class="clear"></div>
                    </th>

                    <th scope="col" class="column-__str__">
                      <div class="text">
                        <span>Caracteristica</span>
                      </div>

                      <div class="clear"></div>
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr v-for="(caracteristica, index) in caracteristicas" :class="index % 2 == 0 ? 'row1' : 'row2'">
                      <td class="action-checkbox">
                        <input class="action-select" name="_selected_action" type="checkbox" value="70">
                      </td>
                      <th class="field-Nome">
                        <a :href="'#/saeinfo/caracteristica/'+caracteristica.id">{{caracteristica.titulo}}</a>
                      </th>
                  </tr>
                </tbody>
              </table>
            </div>

            <p v-if='caracteristicas' class="paginator">
                {{caracteristicas.length}} caracteristicas
            </p>

          </form>
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
  name: 'Caracteristicas',
  data () {
    return {
      caracteristicas: this.caracteristicas
    }
  },
  methods: {
    getCaracteristicas () {
      $.get('http://localhost/sae/listaCaracteristicas.php')
      .then(resposta => {
        this.caracteristicas = resposta
      },
      function () {
        console.log('deu error')
      })
    }
  },
  components: {
    NavBar: NavBar
  },
  created: function () {
    this.getCaracteristicas()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* CHANGELISTS */

#changelist {
    position: relative;
    width: 100%;
}

#changelist table {
    width: 100%;
}

.change-list .hiddenfields { display:none; }

.change-list .filtered table {
    border-right: 1px solid #ddd;
}

.change-list .filtered {
    min-height: 400px;
}

.change-list .filtered {
    background: white url(../../static/img/changelist-bg.gif) top right repeat-y !important;
}

.change-list .filtered .results, .change-list .filtered .paginator, .filtered #toolbar, .filtered div.xfull {
    margin-right: 160px !important;
    width: auto !important;
}

.change-list .filtered table tbody th {
    padding-right: 1em;
}

#changelist-form .results {
  overflow-x: auto;
}

#changelist .toplinks {
    border-bottom: 1px solid #ccc !important;
}

#changelist .paginator {
    color: #666;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    background: white url(../../static/img/nav-bg.gif) 0 180% repeat-x;
    overflow: hidden;
}

.change-list .filtered .paginator {
    border-right: 1px solid #ddd;
}

/* CHANGELIST TABLES */

#changelist table thead th {
    padding: 0;
    white-space: nowrap;
    vertical-align: middle;
}

#changelist table thead th.action-checkbox-column {
    width: 1.5em;
    text-align: center;
}

#changelist table tbody td, #changelist table tbody th {
    border-left: 1px solid #ddd;
}

#changelist table tbody td:first-child, #changelist table tbody th:first-child {
    border-left: 0;
    border-right: 1px solid #ddd;
}

#changelist table tbody td.action-checkbox {
    text-align:center;
}

#changelist table tfoot {
    color: #666;
}

/* TOOLBAR */

#changelist #toolbar {
    padding: 3px;
    border-bottom: 1px solid #ddd;
    background: #e1e1e1 url(../../static/img/nav-bg.gif) top left repeat-x;
    color: #666;
}

#changelist #toolbar form input {
    font-size: 11px;
    padding: 1px 2px;
}

#changelist #toolbar form #searchbar {
    padding: 2px;
}

#changelist #changelist-search img {
    vertical-align: middle;
}

/* FILTER COLUMN */

#changelist-filter {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1000;
    width: 160px;
    border-left: 1px solid #ddd;
    background: #efefef;
    margin: 0;
}

#changelist-filter h2 {
    font-size: 11px;
    padding: 2px 5px;
    border-bottom: 1px solid #ddd;
}

#changelist-filter h3 {
    font-size: 12px;
    margin-bottom: 0;
}

#changelist-filter ul {
    padding-left: 0;
    margin-left: 10px;
}

#changelist-filter li {
    list-style-type: none;
    margin-left: 0;
    padding-left: 0;
}

#changelist-filter a {
    color: #999;
}

#changelist-filter a:hover {
    color: #036;
}

#changelist-filter li.selected {
    border-left: 5px solid #ccc;
    padding-left: 5px;
    margin-left: -10px;
}

#changelist-filter li.selected a {
    color: #5b80b2 !important;
}

/* DATE DRILLDOWN */

.change-list ul.toplinks {
    display: block;
    background: white url(../../static/img/nav-bg-reverse.gif) 0 -10px repeat-x;
    border-top: 1px solid white;
    float: left;
    padding: 0 !important;
    margin: 0 !important;
    width: 100%;
}

.change-list ul.toplinks li {
    padding: 3px 6px;
    font-weight: bold;
    list-style-type: none;
    display: inline-block;
}

.change-list ul.toplinks .date-back a {
    color: #999;
}

.change-list ul.toplinks .date-back a:hover {
    color: #036;
}

/* PAGINATOR */

.paginator {
    font-size: 11px;
    padding-top: 10px;
    padding-bottom: 10px;
    line-height: 22px;
    margin: 0;
    border-top: 1px solid #ddd;
}

.paginator a:link, .paginator a:visited {
    padding: 2px 6px;
    border: solid 1px #ccc;
    background: white;
    text-decoration: none;
}

.paginator a.showall {
    padding: 0 !important;
    border: none !important;
}

.paginator a.showall:hover {
    color: #036 !important;
    background: transparent !important;
}

.paginator .end {
    border-width: 2px !important;
    margin-right: 6px;
}

.paginator .this-page {
    padding: 2px 6px;
    font-weight: bold;
    font-size: 13px;
    vertical-align: top;
}

.paginator a:hover {
    color: white;
    background: #5b80b2;
    border-color: #036;
}

/* ACTIONS */

.filtered .actions {
    margin-right: 160px !important;
    border-right: 1px solid #ddd;
}

#changelist table input {
    margin: 0;
}

#changelist table tbody tr.selected {
    background-color: #FFFFCC;
}

#changelist .actions {
    color: #999;
    padding: 3px;
    border-top: 1px solid #fff;
    border-bottom: 1px solid #ddd;
    background: white url(../../static/img/nav-bg-reverse.gif) 0 -10px repeat-x;
}

#changelist .actions.selected {
    background: #fffccf;
    border-top: 1px solid #fffee8;
    border-bottom: 1px solid #edecd6;
}

#changelist .actions span.all,
#changelist .actions span.action-counter,
#changelist .actions span.clear,
#changelist .actions span.question {
    font-size: 11px;
    margin: 0 0.5em;
    display: none;
}

#changelist .actions:last-child {
    border-bottom: none;
}

#changelist .actions select {
    border: 1px solid #aaa;
    margin-left: 0.5em;
    padding: 1px 2px;
}

#changelist .actions label {
    font-size: 11px;
    margin-left: 0.5em;
}

#changelist #action-toggle {
    display: none;
}

#changelist .actions .button {
    font-size: 11px;
    padding: 1px 2px;
}

</style>
