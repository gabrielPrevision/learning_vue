const routes = [
  {
    path: '/results',
    component: () => import('@/views/results/ResultOptions'),
    children: [
      { 
        path: "ranking",
        component: () => import('@/views/results/Ranking')
      },
      {
        path: 'history',
        component: () => import('@/views/results/History')
      }
    ]
  },
];

export default routes;
