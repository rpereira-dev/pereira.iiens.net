// vue et vue router
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

// les pages
import CV from '@/pages/CV/Page';
import Index from '@/pages/Index/Page';
import Projects from '@/pages/Projects/Page';

// le router
export default new VueRouter({
    routes: [
        {
            path: '/',
            component: Index,
            name: 'Index'
        },

        {
            path: '/cv',
            component: CV,
            name: 'CV'
        },

        {
            path: '/projects',
            component: Projects,
            name: 'Projects'
        },

        {
            path: '/about',
            component: Index,
            name: 'About'
        }
    ]
});