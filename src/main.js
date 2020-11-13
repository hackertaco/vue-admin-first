import { createApp } from 'vue'
// import { sync } from 'vuex-router-sync'
// import './components'
// import './plugins'
import App from './App.vue'
import router from '@/router'
// import store from '@/store'
// import theme from './plugins/theme'
import '@mdi/font/css/materialdesignicons.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
// sync(router,store)

// app.config.productionTip = false
createApp(App).use(router).mount('#app')
