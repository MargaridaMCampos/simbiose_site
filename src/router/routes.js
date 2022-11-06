
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/', component: () => import('pages/Landing.vue') },
    ]
  },
  {
    path: '*',
    component: () => import('layouts/MainLayout.vue')
  }
]

export default routes
