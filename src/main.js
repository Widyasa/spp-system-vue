import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import './assets/vendor/jquery/jquery.min'
import './assets/vendor/bootstrap/js/bootstrap.bundle.min'
import './assets/vendor/jquery-easing/jquery.easing.min'
import './assets/js/sb-admin-2.min'
import './assets/vendor/datatables/jquery.dataTables.min'
import './assets/vendor/datatables/dataTables.bootstrap4.min'
import './assets/js/demo/datatables-demo'
import './assets/main.css'
import 'https://kit.fontawesome.com/e5ccf98c71.js'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
