import { createApp } from 'vue'
// import { VueI18n } from 'vue-i18n';
import App from './App.vue'
import components from '@lob/ui-components';

import '@lob/ui-components/dist/ui-components.css';

// const messages = {
//     en: {
//       message: {
//         hello: 'hello world'
//       }
//     },
//     es: {
//       message: {
//         hello: 'hola mundo'
//       }
//     }
//   }
  
//   const i18n = VueI18n.createI18n({
//     locale: 'es', // set locale, we recommend creating a function to get the user's default local
//     fallbackLocale: 'en', // set fallback locale, we recommend putting this in your env vars
//     messages, // set locale messages
//     // If you need to specify other options, you can set other options
//     // ...
//   })
  

createApp(App)
// .use(i18n)
.use(components)
.mount('#app')
