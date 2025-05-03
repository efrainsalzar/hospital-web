import '@mdi/font/css/materialdesignicons.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
/*import VueGoogleMaps from '@fawmi/vue-google-maps';*/


const app = createApp(App)

app.use(router)
app.use(vuetify)
/*app.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyD-4v0x1X2g3b5j7k8f6g5h6g5h6g5h6g',
  },
})*/

app.mount('#app')
