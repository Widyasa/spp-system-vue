<template>
  <div class="d-sm-flex align-items-center justify-content-between mb-4">
    <h1 class="h3 mb-0 text-gray-800">Transaksi SPP Siswa</h1>
  </div>

  <div class="card shadow mb-4">
    <div class="card-header py-3">
      <h6 class="m-0 font-weight-bold text-primary">Entry Transaksi Siswa</h6>
    </div>
    <div class="card-body">
      <div class="table-responsive">
        <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
          <thead>
          <tr>
            <th>No.</th>
            <th>NISN | NIS</th>
            <th>Nama</th>
            <th>Tahun Ajaran</th>
            <th>Nominal</th>
            <th></th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(transaksi,index) in this.model.transaksi" :key="index">
            <td>{{index+1}}</td>
            <td>{{transaksi.nisn}} | {{transaksi.nis}}</td>
            <td>{{transaksi.nama}}</td>
            <td>{{transaksi.tahun_ajaran}}</td>
            <td>{{transaksi.nominal}}</td>
            <td>
              <RouterLink :to="{path:'/spp/create/'+transaksi.siswa_id}" class="btn btn-primary btn-sm">Bayar SPP</RouterLink>
            </td>
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
  name: "SppIndex",
  data() {
    return {
      siswa_id:'',
      model:{
        transaksi:[],
        user:{
          nama:'',
          role:''
        },
        dataSiswa:[],
        dataPetugas:{
          petugas_id:''
        },
        dataBulan:[]
      },
      show:false,
    }
  },
  mounted() {
    this.getDataSiswa()
  },
  methods: {
    getDataSiswa() {
      axios.get('http://127.0.0.1:8000/api/transaksi')
          .then(({data})=>{
            const transaksi = data.data.transaksis
            this.model.transaksi = transaksi
          })
    },
  }
}
</script>

<style scoped>

</style>