<template>
  <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

    <!-- Sidebar Toggle (Topbar) -->
    <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
      <i class="fa fa-bars"></i>
    </button>

    <!-- Topbar Search -->

    <!-- Topbar Navbar -->
    <ul class="navbar-nav ml-auto">

      <div class="topbar-divider d-none d-sm-block"></div>

      <!-- Nav Item - User Information -->
      <li class="nav-item dropdown no-arrow">
        <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown"
           aria-haspopup="true" aria-expanded="false">
          <span class="mr-2 d-none d-lg-inline text-gray-600 small">{{this.model.dashboard.user.nama}}</span>
          <img class="img-profile rounded-circle" src="../assets/img/undraw_profile.svg">
        </a>
        <!-- Dropdown - User Information -->
        <div class="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
          <a class="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
            <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
            Logout
          </a>
        </div>
      </li>
    </ul>

  </nav>
</template>

<script>
import axios from "axios";

export default {
  name: "Topbar",
  data() {
    return {
      token:localStorage.getItem('token'),
      model: {
        dashboard: {
          user:{
            nama:'',
            role:''
          }
        }
      }
    }
  },
  created() {
    axios.defaults.headers.common['Authorization'] = `Bearer ${this.token}`
    this.getDataDashboard()
  },
  mounted() {
    if(!this.token) {
      return this.$router.push({ name: 'login' })
    }
  },
  methods: {
    getDataDashboard() {
      axios.get('http://127.0.0.1:8000/api/dashboard')
          .then(({data})=>{
            let nama = data.data.user.nama
            console.log(nama)
            this.model.dashboard.user.nama = nama
            // this.model.dashboard.countTransaksi = data.data.countTransaksi[0].countTransaksi
            // this.model.dashboard.countSiswa = data.data.countSiswa[0].countSiswa
            // this.model.dashboard.countKelas = data.data.countKelas[0].countKelas
            // this.model.dashboard.countPetugas = data.data.countPetugas[0].countPetugas
          })
    }
  }
}
</script>

<style scoped>

</style>