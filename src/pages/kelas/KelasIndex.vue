<template>
  <div class="d-sm-flex align-items-center justify-content-between mb-4">
    <h1 class="h3 mb-0 text-gray-800">Halaman Kelas</h1>
    <RouterLink :to="{name:'createKelas'}" class="btn btn-primary">Tambah Kelas</RouterLink>
  </div>

  <div class="card shadow mb-4">
    <div class="card-header py-3">
      <h6 class="m-0 font-weight-bold text-primary">Data Kelas Tahun Ini</h6>
    </div>
    <div class="card-body">
      <div class="table-responsive">
        <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
          <thead>
          <tr>
            <th>No.</th>
            <th>Nama</th>
            <th>Kompetensi Keahlian</th>
            <th>Total Siswa</th>
            <th></th>
          </tr>
          </thead>
          <tbody v-if="this.kelas.length>0">
          <tr v-for="(kelas,index) in this.kelas" :key="index">
            <td>{{index+1}}</td>
            <td>{{kelas.nama}}</td>
            <td>{{kelas.kompetensi_keahlian}}</td>
            <td>{{kelas.siswas_count}}</td>
            <td>
              <RouterLink :to="{path:'/kelas/edit/'+kelas.id}" class="btn btn-warning btn-sm">
                <i class="fa-regular fa-pen-to-square" style="color: #ffffff;"></i>
              </RouterLink>
              <button type="button" @click="deleteKelas(kelas.id)" class="btn btn-danger btn-sm ml-3">
                <i class="fa-regular fa-trash-can" style="color: #ffffff;"></i>
              </button>
            </td>
          </tr>
          </tbody>
          <tbody v-else>
          <tr aria-colspan="5">
            Loading...
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
name: "KelasIndex",
  data () {
  return{
    kelas:[],
  }
  },
  mounted() {
    this.getKelas()
  },
  methods: {
    getKelas() {
      axios.get('http://127.0.0.1:8000/api/kelas').then(({data}) => {
        this.kelas = data.data;
        this.kelas.sort((a,b)=>a.kompetensi_keahlian.localeCompare(b.kompetensi_keahlian))
      });
    },
    deleteKelas(kelasId) {
      if (confirm('Yakin Mau Hapus?')) {
        axios.post(`http://127.0.0.1:8000/api/kelas/hapus/${kelasId}`)
            .then(({data}) => {
              this.getKelas()
            })
      }
    }
  }
}
</script>

<style scoped>

</style>