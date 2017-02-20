import Form from './core/Form'
import vue from 'vue'
import axios from 'axios'
import VueResource from 'vue-resource';

window.Vue = vue
Vue.use(VueResource);

window.Form = Form

window.axios = axios