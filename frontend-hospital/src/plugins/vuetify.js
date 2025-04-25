// src/plugins/vuetify.js
import 'vuetify/styles'
import { createVuetify } from 'vuetify'

// (Opcional) Tema personalizado
const vuetify = createVuetify({
  theme: {
    defaultTheme: 'light',
  },
  icons: {
    iconfont: 'mdi', // 'mdi' || 'mdiSvg'
  },
})

export default vuetify
