import Vue from 'vue'
// 1、导入vue路由插件
import Router from 'vue-router'
// import Home from '../components/Home'
// import About from '../components/About'
// import User from '../components/User'
// 路由懒加载
const Home = () => import('../components/Home')
const HomeNews = () => import('../components/HomeNews')
const HomeMessage = () => import('../components/HomeMessage')
const About = () => import('../components/About')
const User = () => import('../components/User')
const Profile = () => import('../components/Profile')

// 2、安装插件
Vue.use(Router)

const routes = [
  {
    path: '/', // 不写/也行，访问首页定位到home
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    children: [
      {
        path: '',
        component: HomeNews
      },
      {
        path: 'news', // 注意这里不能加斜杠
        component: HomeNews
      },
      {
        path: 'message', // 注意这里不能加斜杠
        component: HomeMessage
      }
    ],
    meta: {
      title: '首页'
    },
    beforeEnter(to, from, next) {
      console.log('路由独享守卫')
      next();
    }
  },
  {
    path: '/about',
    component: About,
    meta: {
      title: '关于'
    }
  },
  {
    path: '/user/:userId',
    component: User,
    meta: {
      title: '用户'
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      title: '档案'
    }
  }
];

const router = new Router({
  routes,
  mode: 'history', // 默认hash模式，地址栏会出现#号，使用html5的history模式没有#
  linkActiveClass: 'active'
})

// 全局导航首位/前置钩子（hook）/前置守卫（gurad）
router.beforeEach((to, from, next) => {
  console.log('前置钩子/前置守卫')
  // 从from跳转到to
  // document.title = to.meta.title; // 这样对于HomeNews这种二级路由是获取不到title的
  document.title = to.matched[0].meta.title;
  // next执行了才会跳转，可以指定参数next(false)不跳转，next('/login')跳转到登录页
  next();
})

// 后置钩子/后置守卫
router.afterEach((to, from) => console.log('后置钩子/后置守卫')) 

// 3、导出，在main.js中使用
export default router
