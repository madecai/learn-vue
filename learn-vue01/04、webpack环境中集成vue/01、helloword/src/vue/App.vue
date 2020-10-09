<template>
    <div>
        <div class="title">{{message}}</div>
        <AppChild></AppChild>
        <h2>一、webpack集成vue</h2>
        <h3>1、安装：npm install vue --save，这里不要加-dev，因为vue需要运行时候依赖</h3>
        <h3>2、导入vue：import Vue from 'vue';</h3>
        <h3>3、打包：npm run build</h3>
        <p>### 此时打开浏览器报错，提示此时使用的runtime-only，不能编译template</p>
        <p>### runtime-only：不能有任何的 template（模板语法，这个div就是）</p>
        <p>### runtime-compiler：用于编译template</p>
        <p>### 所以导入vue时需要在webpack.config.js中配置个别名，导入vue时使用vue/dist/vue.esm.js，而不是默认的</p>
        <h2>二、vue的template属性</h2>
        <h3>1、会将div里面的内容都替换掉，以后不需要再改index.html</h3>
        <h3>2、可以封装子组件cpn，然后在父组件的template中引用子组件标签</h3>
        <h2>三、封装.vue文件</h2>
        <h3>1、新建App.vue文件</h3>
        <h3>2、导入并注册子组件，使用</h3>
        <h3>3、配置webpack.config.js解析.vue文件</h3>
        <h3>4、安装vue的loader：cnpm install --save-dev vue-loader vue-template-compiler</h3>
        <p>#### vue-loader加载.vue文件</p>
        <p>#### vue-template-compiler解析vue模板语法</p>
        <h3>5、安装webpack：cnpm install webpack webpack-cli --save-dev</h3>
        <h3>6、运行：npm run build</h3>
        <p>### 这里报错，提示需要安装插件：vue-loader was used without the corresponding plugin</p>
        <p>### vue-loader从14版本以后需要这个插件，可以在package.json中改版本号改成13.0.0，再次安装，</p>
        <p>#### 1、^表示第一位版本号不变，后面两位取最新</p>
        <p>#### 2、~表示前两位不变，后面一位取最新</p>
        <p>#### 3、*表示全部取最新</p>
        <p>### 又出现新的问题，降低webpack版本为3.6.0，并安装css-loader style-loader 解决</p>
        <h2>四、引入子组件</h2>
        <h3>1、新建 AppChild.vue文件</h3>
        <h3>2、导入并注册子组件，使用</h3>
        <h3>3、可以在webpack.config.js中指定扩展名，导入时就不用加.vue了</h3>
    </div>
</template>

<script>
    import AppChild from './AppChild.vue'
    export default {
        name: 'App',
        data() {
            return {
                message: '我是App.vue中的组件'
            }
        },
        components: {
            AppChild
        }
    }
</script>
<style scoped>
    .title {
        color: red;
    }
</style>