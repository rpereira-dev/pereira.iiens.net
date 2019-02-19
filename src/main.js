// import
import Vue from 'vue';
import App from './App';
import router from './router';
import VS2 from 'vue-script2';
 
//Notice that you need to specify the lang folder, in this case './lang'
const Lang = require('vuejs-localization');
Lang.requireAll(require.context('./lang', true, /\.js$/));
Vue.use(Lang);

// pour charger les scripts dynamiquement
Vue.use(VS2);

//création de l'application
new Vue({
    router,
    template: '<app></app>',
    components: {
        App
    }
}).$mount('#app');