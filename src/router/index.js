import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import About from '../views/About'
import CarPage from '../views/CarPage'
import CarDetails from '../views/CarDetails'
import CarEdit from '../views/CarEdit'
import MessingWithStuff from '../views/MessingWithStuff'
import MessingHome from '../views/MessingWithStuff/MessingHome'
import MessingPostPage from '../views/MessingWithStuff/MessingPostPage'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/car',
    name: 'Car Page',
    component: CarPage
  },
  {
    path: '/car/edit/:id?',
    name: 'Car Edit',
    component: CarEdit
  },
  {
    path: '/car/:id',
    name: 'Car Details',
    component: CarDetails
  },
  {
    path: '/messing',
    name: 'Messing With Stuff',
    component: MessingWithStuff,
    children: [
      { path: '', component: MessingHome },
      { path: 'post', component: MessingPostPage },
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
