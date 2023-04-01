<template>
  <div class="d-sm-flex align-items-center justify-content-between mb-4">
    <h1 class="h3 mb-0 text-gray-800">Halaman Siswa</h1>
    <RouterLink :to="{name:'createSiswa'}" class="btn btn-primary">Tambah Siswa</RouterLink>
  </div>

  <div class="card shadow mb-4">
    <div class="card-header py-3">
      <h6 class="m-0 font-weight-bold text-primary">Data Siswa Tahun Ini</h6>
    </div>
    <div class="card-body">
      <div class="table-responsive">
        <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
          <thead>
          <tr>
            <th>No.</th>
            <th>NISN</th>
            <th>NIS</th>
            <th>Nama</th>
            <th>Alamat</th>
            <th>Telepon</th>
            <th>Kelas</th>
            <th>Aksi</th>
          </tr>
          </thead>
          <tbody v-if="this.siswa.length > 0">
          <tr v-for="(siswa, index) in this.siswa" :key="index">
            <td>{{index+1}}</td>
            <td>{{siswa.nisn}}</td>
            <td>{{ siswa.nis }}</td>
            <td>{{siswa.nama}}</td>
            <td>{{siswa.alamat}}</td>
            <td>{{siswa.telepon}}</td>
            <td>{{siswa.nama_kelas}}</td>
            <td>
              <RouterLink :to="{path:'/siswa/edit/'+siswa.pengguna_id}" class="btn btn-warning btn-sm">
                <i class="fa-regular fa-pen-to-square" style="color: #ffffff;"></i>
              </RouterLink>
              <button type="button" @click="deleteSiswa(siswa.pengguna_id)" class="btn btn-danger ml-3 btn-sm">
                <i class="fa-regular fa-trash-can" style="color: #ffffff;"></i>
              </button>
            </td>
          </tr>
          </tbody>
          <tbody v-else>
          <tr aria-colspan="8">Loading...</tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "SiswaIndex",
  data() {
    return{
      siswa:[]
    }
  },
  mounted() {
    this.getSiswa()
  },
  methods : {
    getSiswa() {
      axios.get('http://127.0.0.1:8000/api/siswa')
          .then(({data})=>{
            this.siswa=data.data
            this.siswa.sort((a,b)=>a.nama.localeCompare(b.nama))
          })
    },
    deleteSiswa(siswaId) {
      if (confirm('Yakin Mau Hapus?')){
        axios.post(`http://127.0.0.1:8000/api/siswa/hapus/${siswaId}`)
            .then(({data}) =>{
              this.getSiswa()
            })
      }
    }
  }
}
</script>

<style scoped>

</style>