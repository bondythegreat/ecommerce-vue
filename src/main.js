import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import VueCurrencyFilter from 'vue-currency-filter'
import VueScrollTo from 'vue-scrollto'

import { store } from './store'

import './styles/app.scss';

Vue.config.productionTip = false

Vue.use(VueCurrencyFilter,
{
  symbol : '$',
  thousandsSeparator: '.',
  fractionCount: 0,
  fractionSeparator: ',',
  symbolPosition: 'front',
  symbolSpacing: true
})
Vue.use(VueScrollTo)

new Vue({
  render: h => h(App),
  store,
}).$mount('#app')
