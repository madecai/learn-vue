<template>
  <div>
    <div>{{message}}</div>
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>
    <router-view></router-view>
    <h2>一、改变浏览器url却不跳转的方法</h2>
    <h3>1、利用js的hash：location.hash = 'aaa'</h3>
    <h3>2、利用html5的history：history.pushState(data, title, url);</h3>
    <p>### history.pushState({}, '', 'home'); // 压栈</p>
    <p>### history.pushState({}, '', 'about'); // 压栈</p>
    <p>### history.back(); // 出栈</p>
    <p>### history.go(1); // 压栈</p>
    <p>### history.go(-1); // 出栈</p>
    <p>### history.replaceState({}, '', '/foo'); // 替换</p>
    <h3>二、vue-router的基本使用</h3>
    <h3>1、导入vue路由插件：import Router from 'vue-router'</h3>
    <h3>2、安装插件：Vue.use(Router)</h3>
    <h3>3、导出，在main.js中导入并注册</h3>
    <h3>4、在App.vue中使用router-link跳转</h3>
    <h3>5、使用router-view占位要渲染组件的位置</h3>
    <h3>6、可以配置一个路由重定向，访问根路径时跳转到home页</h3>
    <h3>7、改变vue-router的模式（默认hash，地址栏会有#），改为html5的history模式不会有#</h3>
    <h2>三、router-link标签的属性</h2>
    <h3>1、默认会渲染成a标签，使用tag属性改变：tag="button"</h3>
    <h3>2、标记replace属性，让浏览器不能点击返回按钮</h3>
    <p>### vue-router的mode改为history模式后，默认使用的是pushState方法，所以浏览器可以点击返回按钮</p>
    <p>### 标记replace属性后使用的replaceState方法</p>
    <h3>3、改变选中时的class</h3>
    <p>### router-link被选中时，会增加class="router-link-exact-active router-link-active"</p>
    <p>### 使用属性active-class="xxx"改变默认的router-link-active的class</p>
    <p>### 可以配置一个全局的默认class，使所有router-link标签生效</p>
    <p>#### 在index.js中Router增加linkActiveClass属性，配置全局的选中时的class</p>
    <h2>四、通过代码跳转路由</h2>
    <h3>1、可以在组件中使用 this.$router.push('/home')跳转到home页，html5 history pushState的方式</h3>
    <h3>2、this.$router.replace('/home')跳转到home页，html5 history replaceState的方式</h3>
    <h2>五、动态路由</h2>
    <h3>1、在index中配置动态路由：path: '/user/:userId'</h3>
    <h3>2、在App.vue中使用，只有使用user/123这种路径才能映射</h3>
    <h3>3、在User.vue中，可以使用在vue组件中使用this.$route.params.userId获取到userId</h3>
    <h3 v-pre>4、或者在标签中直接使用{{$route.params.userId}}，注意这里没有this</h3>
    <h2>六、路由的懒加载</h2>
    <h3>1、打包文件解析</h3>
    <p>### dist/static/js目录下，app.xxx.js：当前应用程序所有业务代码</p>
    <p>### manifest.xxx.js：框架底层支撑（整合其他js文件）</p>
    <p>### vendor.xxx.js：第三方框架：vue/vue-router/axios/bs</p>
    <h3>2、业务过多时app.xxx.js会很大，所以需要使用路由懒加载</h3>
    <p>### 实现路由懒加载的三种方式</p>
    <p>### 推荐使用es6的方式：const Home = () => import('../components/Home')</p>
    <p>### 此时打包出来会多出来3个js文件，而且需要时浏览器才会请求</p>
    <h2>七、路由的嵌套</h2>
    <h3>1、在index.js中配置home的子路由，注意path不能加斜杠</h3>
    <h3>2、在Home.vue中增加router-link和router-view</h3>
    <h3>3、可以配置一个默认路由重定向，切换时默认在news页</h3>
    <h2>八、路由参数传递</h2>
    <h3>1、动态路由的方式params的方式</h3>
    <h3>2、query的方式</h3>
    <p>### router-link中使用:to="{path: '/profile', query: {id:213, name:'zhangsan'}}"</p>
    <p>### Profile.vue中使用$route.query.xxx取值</p>
    <h2>九、route和router的区别</h2>
    <h3>1、this.$router就是index.js中export的对象，和main.js中import的是一个对象</h3>
    <h3>2、this.$route就是index.js中配置的routes数组里的对象</h3>
    <h3>3、$router和$route是怎么来的</h3>
    <p>### 所有vue的插件入口都是install方法</p>
    <p>### 查看vue-router的源码可知，vue-router注册了两个全局组件：RouterLink、RouterView</p>
    <p>### 所有Vue组件都是继承了Vue对象的原型，在main.js中为Vue添加原型，在此处调用：{{$test001}}</p>
    <p>### 所以vue-router就是往Vue原型中增加了这两个属性：$route、$router</p>
    <h2>十、全局导航守卫，监听路由切换，实现切换后改变浏览器标题</h2>
    <h3>1、可以利用 created 回调的方式，但是这样每个组件都要写，麻烦</h3>
    <h3>2、利用导航守卫的方式</h3>
    <p>### 在路由映射对象中配置标题meta: {title: '首页'}</p>
    <p>### 在index.js中配置router.beforeEach导航守卫，使用to.meta.title获取到跳转目标的标题</p>
    <p>### 但是这样获取title二级路由拿不到属性，使用to.matched[0].meta.title获取，这里都写0即可</p>
    <h3>3、其他守卫</h3>
    <p>### beforeEach是前置守卫，还有后置守卫afterEach</p>
    <P>### 还可以为某一个路由单独配置路由独享守卫：beforeEnter</P>
    <p>### 组件内的守卫，可以在组件内定义beforeRouteEnter、beforeRouteUpdate、beforeRouteLeave，详见vue-router官网</p>
    <h2>十一、keep-alive的使用</h2>
    <h3>1、路由切换时会销毁当前组件，将router-view用keep-alive标签包裹就不会销毁</h3>
    <h3>2、每次切换到Home页都是显示二级路由news（配置的默认），如果想切换回来不改变二级路由状态？</h3>
    <p>### 可以定义组件内守卫beforeRouteLeave，每次离开记录当前path：this.$route.path</p>
    <P>### 切换回来再在activated回调中代码跳转this.$router.replace(this.path);</P>
    <P>### activated和deactivated这两个回调只有在keep-alive包裹时才有效</P>
    <h3>3、keep-alive标签属性</h3>
    <p>### exclude="User,Profile" 排除某项，可以写正则</p>
    <p>### include="User,Profile" 包含某项，可以写正则</p>
    <p>### 注意：多项逗号分隔（中间不能加空格），内容为组件的名称</p>
    <h2>十二、目录起别名</h2>
    <h3>1、修改build/webpack.base.config.js文件</h3>
    <p>### '@': resolve('src'),</p>
    <p>### 'assets': resolve('src/assets'),   貌似cli3中可以这样写'assets': resolve('@/assets'),</p>
    <h3>如果在js中直接使用别名即可，如果在Dom(html)中，需要在前面加~，例如src="~asserts/xxx"，这里貌似必须重新rpm run dev</h3>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      message: '我是vue router home',
      path: '/home/news'
    }
  },
  created() {
    // document.title = '首页';
    console.log('Home.vue 创建时回调')
  },
  mounted() {
    console.log('Home.vue 组件挂载Dom时回调')
  },
  updated() {
    console.log('Home.vue 组件更新时回调')
  },
  destroyed() {
    console.log('Home.vue 组件销毁时回调')
  },
  activated() {
    console.log('Home.vue 选中时回调')
    this.$router.replace(this.path);
  },
  deactivated() {
    console.log('Home.vue 取消选中时回调')
  },
  beforeRouteEnter(to, from, next) {
    console.log('组件内的守卫');
    next();
  },
  beforeRouteLeave(to, from, next) {
    this.path = this.$route.path;
    next();
  }
}
</script>

<style scoped>

</style>
