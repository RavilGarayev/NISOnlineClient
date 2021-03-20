import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Task from '../views/Task.vue'
import Auth from '../views/Auth.vue'
import Registration from '../views/Registration.vue'
import Main from '../views/Main.vue'
import TestСonstructor from '../views/TestСonstructor.vue'
import InfoConstructor from '../views/InfoConstructor.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/task',
    name: 'task',
    component: Task
  },
  {
    path: '/auth',
    name: 'auth',
    component: Auth
  },
  {
    path: '/registration',
    name: 'registration',
    component: Registration
  },
  {
    path: '/main',
    name: 'main',
    component: Main
  },
  {
    path: '/testconstructor',
    name: 'testconstructor',
    component: TestСonstructor
  },
  {
    path: '/infoconstructor',
    name: 'infoconstructor',
    component: InfoConstructor
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
