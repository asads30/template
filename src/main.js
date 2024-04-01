import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import vco from "v-click-outside"

import App from './App.vue'
import router from './router'
import VueFeather from 'vue-feather'
import VueApexCharts from 'vue-apexcharts'
import Vuelidate from 'vuelidate'
import VueEasyLightbox from 'vue-easy-lightbox'
import VueAlertify from "vue-alertify"
import VueMask from 'v-mask'
import VueQuillEditor from 'vue-quill-editor'
import * as VueGoogleMaps from 'vue2-google-maps'
import VueVectorMap from 'vuevectormap'
import i18n from './i18n'

import store from '@/state/store'

import { initFirebaseBackend } from './authUtils'

import { configureFakeBackend } from './helpers/fake-backend';

if (process.env.VUE_APP_DEFAULT_AUTH === "firebase") {
  initFirebaseBackend(firebaseConfig);
} else {
  configureFakeBackend();
}

const firebaseConfig = {
  apiKey: process.env.VUE_APP_APIKEY,
  authDomain: process.env.VUE_APP_AUTHDOMAIN,
  databaseURL: process.env.VUE_APP_VUE_APP_DATABASEURL,
  projectId: process.env.VUE_APP_PROJECTId,
  storageBucket: process.env.VUE_APP_STORAGEBUCKET,
  messagingSenderId: process.env.VUE_APP_MESSAGINGSENDERID,
  appId: process.env.VUE_APP_APPId,
  measurementId: process.env.VUE_APP_MEASUREMENTID
};

Vue.config.productionTip = false

import '@/assets/scss/app.scss';

Vue.use(VueFeather);
Vue.use(BootstrapVue)
Vue.use(vco)
Vue.component('apexchart', VueApexCharts)
Vue.use(Vuelidate)
Vue.use(VueEasyLightbox)
Vue.use(VueAlertify)
Vue.use(VueMask)
Vue.use(VueQuillEditor)
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAbvyBxmMbFhrzP9Z8moyYr6dCr-pzjhBE',
    libraries: 'places',
  },
  installComponents: true
})
Vue.use(VueVectorMap)

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app')
