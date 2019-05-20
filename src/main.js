// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import Vant from 'vant'
import 'vant/lib/index.css'
import store from './store/index.js'
import YDUI from 'vue-ydui'; /* 相当于import YDUI from 'vue-ydui/ydui.rem.js' */
import 'vue-ydui/dist/ydui.px.css';
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
import Histogram from 'v-charts/lib/histogram.common'

Vue.component(Histogram.name, Histogram)
Vue.use(Vuetify)
Vue.use(YDUI)
Vue.use(Mint)
Vue.use(Vant)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
