import { createApp } from 'vue'
// import { VueI18n } from 'vue-i18n';
import App from './App.vue'
import components from '@lob/ui-components';

import '@lob/ui-components/dist/ui-components.css';

createApp(App)
// .use(i18n)
.use(components)
.mount('#app')
