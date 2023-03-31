<template>
  <div class="d-sm-flex align-items-center justify-content-between mb-4">
    <h1 class="h3 mb-0 text-gray-800">Halaman Pembayaran</h1>
    <RouterLink :to="{name:'createPembayaran'}" class="btn btn-primary">Tambah Pembayaran</RouterLink>
  </div>

  <div class="card shadow mb-4">
    <div class="card-header py-3">
      <h6 class="m-0 font-weight-bold text-primary">Data Pembayaran Tahun Ini</h6>
    </div>
    <div class="card-body">
      <div class="table-responsive">
        <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
          <thead>
          <tr>
            <th>No.</th>
            <th>Tahun Ajaran</th>
            <th>Nominal</th>
            <th>Aksi</th>
          </tr>
          </thead>
          <tbody v-if="this.pembayaran.length > 0">
          <tr v-for="(pembayaran, index) in this.pembayaran" :key="index">
            <td>{{index+1}}</td>
            <td>{{pembayaran.tahun_ajaran}}</td>
            <td>{{pembayaran.nominal}}</td>
            <td>
              <RouterLink :to="{path:'/pembayaran/edit/'+pembayaran.id}" class="btn btn-warning btn-sm">
                <i class="fa-regular fa-pen-to-square" style="color: #ffffff;"></i>
              </RouterLink>
              <button @click="deletePembayaran(pembayaran.id)" class="btn btn-danger btn-sm ml-3">
                <i class="fa-regular fa-trash-can" style="color: #ffffff;"></i>
              </button>
            </td>
          </tr>
          </tbody>
          <tbody v-else>
          <tr aria-colspan="4">
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
  name: "PembayaranIndex",
  data (){
    return{
      pembayaran:[]
    }
  },
  mounted() {
    this.getPembayaran()
  },
  methods: {
    getPembayaran() {
      axios.get('http://127.0.0.1:8000/api/pembayaran')
          .then(({data}) => {
            this.pembayaran = data.data;
            this.pembayaran.sort((a,b)=>a.tahun_ajaran.localeCompare(b.tahun_ajaran))
          });
    },
    deletePembayaran(pembayaranId) {
      if (confirm('Yakin Mau Hapus?')) {
        // console.log(pembayaranId)
        axios.post(`http://127.0.0.1:8000/api/pembayaran/hapus/${pembayaranId}`)
            .then(({data})=>{
              // console.log(data.data)
              this.getPembayaran();
            })
      }
    }
  }
}
</script>

<style scoped>

</style>