const routes = [
  {
    path: '/games',
    component: () => import('@/views/games/GameList'),
    children: [
      { 
        path: "moving-balls",
        component: () => import('@/views/games/MovingBalls')
      },
      {
        path: 'jumping-balls',
        component: () => import('@/views/games/CommingSoon')

      },
      {
        path: 'nested-balls',
        component: () => import('@/views/games/CommingSoon')
      },
    ]
  },
];

export default routes;
