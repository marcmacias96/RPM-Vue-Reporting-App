import Vue from 'vue'
import Router from 'vue-router'
// eslint-disable-next-line
import auth from '../auth0/authService'
Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: 'Dashboard', icon: 'dashboard' }
    }]
  },
  {
    path: '/reportes',
    component: Layout,
    redirect: '/reports/',
    name: 'Reportes',
    meta: { title: 'Reportes', icon: 'reports' },
    children: [
      {
        path: 'servicios',
        name: 'servicios',
        component: () => import('@/views/reports/services/index'),
        meta: { title: 'Recaudación x Servicio', icon: 'table' },
        children: [
          {
            path: 'servicesAndStatus',
            name: 'servicesAndStatus',
            component: () => import('@/views/reports/services/servicesAndStatus'),
            meta: { title: 'Recaudación x Servicio', icon: 'table' }
          }
        ]
      },
      {
        path: 'tramites',
        name: 'tramites',
        component: () => import('@/views/reports/procedures/index'),
        meta: { title: 'Recaudación por Trámites Generales', icon: 'table' },
        children: [
          {
            path: 'procedureAmount',
            name: 'procedureAmount',
            component: () => import('@/views/reports/procedures/procedureAmount'),
            meta: { title: 'Recaudación x tramite', icon: 'table' }
          },
          {
            path: 'proceduresAndStatus',
            name: 'proceduresAndStatus',
            component: () => import('@/views/reports/procedures/proceduresAndStatus'),
            meta: { title: 'Tramites x Estado', icon: 'table' }
          }
        ]
      },
      {
        path: 'orders',
        name: 'orders',
        component: () => import('@/views/reports/orders/index'),
        meta: { title: 'Órdenes de Trabajo', icon: 'table' },
        children: [
          {
            path: 'taskAssignamentRealTime',
            name: 'taskAssignamentRealTime',
            component: () => import('@/views/reports/orders/taskAssignamentRT'),
            meta: { title: 'Asignación de Tareas ', icon: 'table' }
          },
          {
            path: 'ordersAssignamentRealTime',
            name: 'ordersAssignamentRealTime',
            component: () => import('@/views/reports/orders/ordersAssignamentRT'),
            meta: { title: 'Estado de Ordenes Asignación', icon: 'table' }
          }
        ]
      },
      {
        path: 'tasks',
        name: 'tasks',
        component: () => import('@/views/reports/tasks/index'),
        meta: { title: 'Lista de Tareas', icon: 'table' },
        children: [
          {
            path: 'orderDetailsByDateStart',
            name: 'orderDetailsByDateStart',
            component: () => import('@/views/reports/tasks/orderDetailsByDateStart'),
            meta: { title: 'x Fecha Inicio', icon: 'table' }
          },
          {
            path: 'orderDetailsByDateEnd',
            name: 'orderDetailsByDateEnd',
            component: () => import('@/views/reports/tasks/orderDetailsByDateEnd'),
            meta: { title: 'x Fecha Finalización', icon: 'table' }
          }
        ]
      },
      {
        path: 'invoice',
        name: 'invoice',
        component: () => import('@/views/reports/invoice/index'),
        meta: { title: 'Recaudación x Comprobante', icon: 'table' },
        children: [
          {
            path: 'invoiceBalnce',
            name: 'invoiceBalnce',
            component: () => import('@/views/reports/invoice/invoiceBalance'),
            meta: { title: 'Recaudación por tipo Comprobante', icon: 'table' }
          }
        ]
      },
      {
        path: 'visualReports',
        name: 'VisualReports',
        component: () => import('@/views/reports/invoice/index'),
        meta: { title: 'Reportes Visuales', icon: 'Charts' },
        children: [
          {
            path: 'rankingCer',
            name: 'rankingCer',
            component: () => import('@/views/reports/VisualReport/taskCompletedCer'),
            meta: { title: 'Ranking Certificado', icon: 'rankings' }
          },
          {
            path: 'rankingIns',
            name: 'rankingIns',
            component: () => import('@/views/reports/VisualReport/taskCompletedIns'),
            meta: { title: 'Ranking Inscripciones', icon: 'rankings' }
          }
        ]
      } /* ,
      {
        path: 'Reportes_luis',
        name: 'Reportes_luis',
        component: () => import('@/views/reports/alcabalas/index'),
        meta: { title: 'Reportes Municipio', icon: 'table' },
        children: [
          {
            path: 'alcabalas',
            name: 'alcabalas',
            component: () => import('@/views/reports/alcabalas/alcabalas'),
            meta: { title: 'Reporte Alcabalas', icon: 'table' }
          }
        ]
      } */
    ]
  },
  {
    path: 'external-link',
    component: Layout,
    children: [
      {
        path: 'http://appsigre5.registropmanta.gob.ec/',
        meta: { title: 'Sigre', icon: 'link' }
      }
    ]
  },
  { path: '*', redirect: '/404', hidden: true },
  {
    path: '/callback',
    component: () => import('@/components/auth/Callback.vue'),
    hidden: true
  }
]

const createRouter = () => new Router({
  mode: 'history',
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

router.beforeEach((to, from, next) => {
  console.log(to.path)
  if (to.path === '/login' || to.path === '/callback' || auth.isAuthenticated()) {
    return next()
  }
  auth.login({ target: to.path })
})
// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
