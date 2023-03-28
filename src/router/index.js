import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../pages/HomeView.vue'
import DashboardPage from "@/pages/DashboardPage.vue";
import KelasIndex from "@/pages/kelas/KelasIndex.vue";
import KelasCreate from "@/pages/kelas/KelasCreate.vue";
import kelasEdit from "@/pages/kelas/KelasEdit.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect:'/admin/dashboard',
      // name: 'home',
      component: ()=>import('../layouts/AdminLayout.vue'),
      children:[
        {path: '/admin/dashboard', name:'dashboard', component: DashboardPage},
        {path: '/admin/kelas', name:'kelas', component: KelasIndex},
        {path: '/admin/kelas/create', name:'createKelas', component: KelasCreate},
        {path: '/admin/kelas/edit/:id', name:'EditKelas', component: kelasEdit},
      ]
    },

  ]
})

export default router
