import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'
import Pacientes from '@/components/Pacientes'
import NovoPaciente from '@/components/NovoPaciente'
import Paciente from '@/components/Paciente'

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
      path: '/saeinfo/novopaciente',
      name: 'NovoPaciente',
      component: NovoPaciente
    },
    {
      path: '/saeinfo/paciente/:idPaciente',
      name: 'Paciente',
      component: Paciente
    }
  ]
})
