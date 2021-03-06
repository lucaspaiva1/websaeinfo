import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'
import Pacientes from '@/components/Pacientes'
import NovoPaciente from '@/components/NovoPaciente'
import Paciente from '@/components/Paciente'
import NovoHistorico from '@/components/NovoHistorico'
import Historico from '@/components/Historico'
import HistoricoEnfermagem from '@/components/HistoricoEnfermagem'
import Usuarios from '@/components/Usuarios'
import NovoUsuario from '@/components/NovoUsuario'
import Caracteristicas from '@/components/Caracteristicas'
import Caracteristica from '@/components/Caracteristica'
import NovaCaracteristica from '@/components/NovaCaracteristica'
import Intervencoes from '@/components/Intervencoes'
import NovaIntervencao from '@/components/NovaIntervencao'
import Intervencao from '@/components/Intervencao'
import Diagnosticos from '@/components/Diagnosticos'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/saeinfo',
      name: 'Home',
      component: Home
    },
    {
      path: '/saeinfo/pacientes',
      name: 'Pacientes',
      component: Pacientes
    },
    {
      path: '/saeinfo/paciente/novo',
      name: 'NovoPaciente',
      component: NovoPaciente
    },
    {
      path: '/saeinfo/paciente/:idPaciente',
      name: 'Paciente',
      component: Paciente
    },
    {
      path: '/saeinfo/paciente/:idpaciente/historico/novo',
      name: 'NovoHistorico',
      component: NovoHistorico
    },
    {
      path: '/saeinfo/paciente/:idpaciente/historico',
      name: 'Historico',
      component: Historico
    },
    {
      path: '/saeinfo/paciente/:idpaciente/HistoricoEnfermagem',
      name: 'HistoricoEnfermagem',
      component: HistoricoEnfermagem
    },
    {
      path: '/saeinfo/usuarios',
      name: 'Usuarios',
      component: Usuarios
    },
    {
      path: '/saeinfo/usuario/novo',
      name: 'NovoUsuario',
      component: NovoUsuario
    },
    {
      path: '/saeinfo/caracteristicas',
      name: 'Caracteristicas',
      component: Caracteristicas
    },
    {
      path: '/saeinfo/caracteristica/nova',
      name: 'NovaCaracteristica',
      component: NovaCaracteristica
    },
    {
      path: '/saeinfo/caracteristica/:idCaracteristica',
      name: 'Caracteristica',
      component: Caracteristica
    },
    {
      path: '/saeinfo/intervencoes',
      name: 'Intervencoes',
      component: Intervencoes
    },
    {
      path: '/saeinfo/intervencao/nova',
      name: 'NovaIntervencao',
      component: NovaIntervencao
    },
    {
      path: '/saeinfo/intervencao/:idIntervencao',
      name: 'Intervencao',
      component: Intervencao
    },
    {
      path: '/saeinfo/diagnosticos',
      name: 'Diagnosticos',
      component: Diagnosticos
    }
  ]
})
