import Vue from 'vue';
import Router from 'vue-router';

import GamesRoutes from './routes/GamesRoutes'
import ResultsRoutes from './routes/ResultsRoutes'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      component: () => import('./views/NotFound'),
    },
    {
      path: '/',
      component: () => import('./views/Home'),
    },
    ...GamesRoutes,
    ...ResultsRoutes
  ],
});
