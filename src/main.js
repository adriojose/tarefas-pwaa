<<<<<<< HEAD
import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
=======
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/css/global.css';

const app = createApp(App);
app.use(router);
app.mount('#app');
>>>>>>> 66e309c (falta o icon so)
