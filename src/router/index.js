import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../pages/HomeView.vue'
import DashboardPage from "@/pages/DashboardPage.vue";
import KelasIndex from "@/pages/kelas/KelasIndex.vue";
import KelasCreate from "@/pages/kelas/KelasCreate.vue";
import kelasEdit from "@/pages/kelas/KelasEdit.vue";
import petugasCreate from "@/pages/petugas/PetugasCreate.vue";
import petugasEdit from "@/pages/petugas/PetugasEdit.vue";
import siswaIndex from "@/pages/siswa/SiswaIndex.vue";
import siswaCreate from "@/pages/siswa/SiswaCreate.vue";
import siswaEdit from "@/pages/siswa/SiswaEdit.vue";
import pembayaranIndex from "@/pages/pembayaran/PembayaranIndex.vue";
import pembayaranCreate from "@/pages/pembayaran/PembayaranCreate.vue";
import sppIndex from "@/pages/spp/SppIndex.vue";
import laporanIndex from "@/pages/laporan/LaporanIndex.vue";
import loginPage from "@/pages/LoginPage.vue";
import laporanGenerate from "@/pages/laporan/LaporanGenerate.vue";
import petugasIndex from "@/pages/petugas/PetugasIndex.vue";
import pembayaranEdit from "@/pages/pembayaran/PembayaranEdit.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect:'/dashboard',
      // name: 'home',
      component: ()=>import('../layouts/AdminLayout.vue'),
      children:[
        {path: '/dashboard', name:'dashboard', component: DashboardPage},
        {path: '/kelas', name:'kelas', component: KelasIndex},
        {path: '/kelas/create', name:'createKelas', component: KelasCreate},
        {path: '/kelas/edit/:id', name:'EditKelas', component: kelasEdit},
        {path: '/petugas', name:'petugas', component: petugasIndex},
        {path: '/petugas/create', name:'createPetugas', component: petugasCreate},
        {path: '/petugas/edit/:id', name:'EditPetugas', component: petugasEdit},
        {path: '/siswa', name:'siswa', component: siswaIndex},
        {path: '/siswa/create', name:'createSiswa', component: siswaCreate},
        {path: '/siswa/edit/:id', name:'EditSiswa', component: siswaEdit},
        {path: '/pembayaran', name:'pembayaran', component: pembayaranIndex},
        {path: '/pembayaran/create', name:'createPembayaran', component: pembayaranCreate},
        {path: '/pembayaran/edit/:id', name:'EditPembayaran', component: pembayaranEdit},
        {path: '/spp', name:'spp', component: sppIndex},
        {path: '/laporan', name:'laporan', component: laporanIndex},
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: loginPage,
    },
    {
      path: '/laporan/generatelaporan',
      name: 'generateLaporan',
      component: laporanGenerate,
    }

  ]
})

export default router
