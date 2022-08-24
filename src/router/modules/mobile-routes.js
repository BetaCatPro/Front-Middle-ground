export default [
    {
        path: '/',
        name: 'home',
        component: () => import('@/views/main/index.vue')
    },
    {
        path: '/404',
        name: '404',
        component: () => import('@/views/error/404/index.vue')
    },
    // 404 页面处理
    {
        path: '/:catchAll(.*)',
        name: 'error',
        redirect: '/404'
    }
]
