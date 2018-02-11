import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: () => import('./views/Dashboard.vue'),
    },
    {
      path: '/new',
      name: 'NewEmployee',
      component: () => import('./components/NewEmployee.vue'),
    },
    {
      path: '/edit/:employee_id',
      name: 'EditEmployee',
      component: () => import('./components/EditEmployee.vue'),
    },
    {
      path: '/:id',
      name: 'ViewEmployee',
      component: () => import('./components/ViewEmployee.vue'),
    },
  ],
});
