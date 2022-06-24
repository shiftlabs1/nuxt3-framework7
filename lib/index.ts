import LeftPanel from '@/pages/left-panel.vue'

export const routes = [
  {
    path: '/',
    asyncComponent: () => import('~~/pages/index.vue'),
  },
  {
    path: '/left-panel',
    component: LeftPanel,
  },
  {
    path: '/about',
    asyncComponent: () => import('@/pages/about.vue'),
  },
  {
    path: '/blog/:postId',
    asyncComponent: () => import('@/pages/blog/[postId].vue'),
  },
]
