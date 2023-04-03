<template>
  <div class="d-sm-flex align-items-center justify-content-between mb-4">
    <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
  </div>

  <div class="row">
    <div class="col-12">
      <div class="card shadow mb-4">
        <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
        </div>
        <div class="card-body">
          <h1>Selamat Datang</h1>
        </div>
      </div>
    </div>
  </div>

  <div class="row">
    <div class="col-6">
      <div class="row">
        <div class="col-6 mb-4">
          <div class="card border-left-primary shadow h-100 py-2">
            <div class="card-body">
              <div class="row no-gutters align-items-center">
                <div class="col mr-2">
                  <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                    Total Siswa</div>
                  <div class="h5 mb-0 font-weight-bold text-gray-800">{{this.model.dashboard.countSiswa}}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-6 mb-4">
          <div class="card border-left-success shadow h-100 py-2">
            <div class="card-body">
              <div class="row no-gutters align-items-center">
                <div class="col mr-2">
                  <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
                    Total Kelas</div>
                  <div class="h5 mb-0 font-weight-bold text-gray-800">{{this.model.dashboard.countKelas}}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-6 mb-4">
          <div class="card border-left-info shadow h-100 py-2">
            <div class="card-body">
              <div class="row no-gutters align-items-center">
                <div class="col mr-2">
                  <div class="text-xs font-weight-bold text-info text-uppercase mb-1">Total Petugas
                  </div>
                  <div class="row no-gutters align-items-center">
                    <div class="col-auto">
                      <div class="h5 mb-0 mr-3 font-weight-bold text-gray-800">{{this.model.dashboard.countPetugas}}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-6 mb-4">
          <div class="card border-left-warning shadow h-100 py-2">
            <div class="card-body">
              <div class="row no-gutters align-items-center">
                <div class="col mr-2">
                  <div class="text-xs font-weight-bold text-warning text-uppercase mb-1">
                    Total Transaksi</div>
                  <div class="h5 mb-0 font-weight-bold text-gray-800">{{this.model.dashboard.countTransaksi}}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-6">
      <div class="card shadow mb-4">
        <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
          <h6 class="m-0 font-weight-bold text-primary">Video Preview</h6>
        </div>
        <div class="card-body">
          <video src="{{ asset('assets/video/tutorial_laravel_intro.mp4') }}" autoplay muted loop
                 style="width: 100%;" class="rounded"></video>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";
import Topbar from "@/components/Topbar.vue";
import axios from "axios";

export default {
  name: "DashboardPage",
  components: {Topbar, Sidebar},
  data() {
    return {
      countSiswa:'',
      countKelas:'',
      countPetugas:'',
      countTransaksi:'',
      loggedIn:localStorage.getItem('loggedIn'),
      token:localStorage.getItem('token'),
      model: {
        dashboard: {
          user:[],
          countSiswa:'',
          countKelas:'',
          countPetugas:'',
          countTransaksi:''
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
            this.model.dashboard = data.data
            this.model.dashboard.countTransaksi = data.data.countTransaksi[0].countTransaksi
            this.model.dashboard.countSiswa = data.data.countSiswa[0].countSiswa
            this.model.dashboard.countKelas = data.data.countKelas[0].countKelas
            this.model.dashboard.countPetugas = data.data.countPetugas[0].countPetugas
          })
    }
  }
}
</script>

<style scoped>

</style>