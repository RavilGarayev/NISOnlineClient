import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Task from '../views/Task.vue'
import Auth from '../views/Auth.vue'
import Registration from '../views/Registration.vue'

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
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
