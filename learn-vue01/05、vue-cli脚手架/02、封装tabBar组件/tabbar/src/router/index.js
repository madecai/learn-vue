import Vue from 'vue'
import Router from 'vue-router'

import Cart from '../view/cart/Cart'
import Category from '../view/category/Category'
import Home from '../view/home/Home'
import Profile from '../view/profile/Profile'

// const Cart = () => import('../view/cart/Cart')
// const Category = () => import('../view/category/Category')
// const Home = () => import('../view/home/Home')
// const Profile = () => import('../view/profile/Profile')

Vue.use(Router)

const routes = [
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/profile',
    component: Profile
  },
]

export default new Router({
  routes,
  mode: 'history'
})
