import Vue from 'vue'
import Storage from 'vue-ls'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import App from './App.vue'
import axios from './config/axios.config'


Vue.config.productionTip = false;
Vue.prototype.$ajax = axios;
Vue.use(ElementUI);
Vue.use(Storage, {
    namespace: 'sv__',
    name: 'ls',
    storage: 'local'
});

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');
