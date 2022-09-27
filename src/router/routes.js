const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/', component: () => import('src/pages/Home.vue') },
      { path: '/electronics', component: () => import('src/pages/Electronics.vue') },
      { path: '/jewelery', component: () => import('src/pages/Jewelery.vue') },
      { path: "/men's clothing", component: () => import('src/pages/MenClothing.vue') },
      { path: "/women's clothing", component: () => import('src/pages/WomenClothing.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
