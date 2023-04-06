<template>


  <div class=" mb-4">
    <div class=" py-3">
    </div>
    <div class="card-body">
      <div class="table-responsive">
        <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
          <thead>
          <tr>
            <th>No.</th>
            <th>Nama</th>
            <th>NISN & NIS</th>
            <th>Tanggal Bayar</th>
            <th>Bulan Dibayar</th>
            <th>Tahun Dibayar</th>
            <th>Tahun Ajaran</th>
            <th>Nominal</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(laporan,index) in this.laporan" :key="index">
            <td>{{index+1}}</td>
            <td>{{laporan.nama}}</td>
            <td>{{laporan.nisn}} & {{laporan.nis}}</td>
            <td>{{laporan.tanggal_bayar}}</td>
            <td>{{laporan.bulan_dibayar}}</td>
            <td>{{laporan.tahun_dibayar}}</td>
            <td>{{laporan.tahun_ajaran}}</td>
            <td>{{laporan.nominal}}</td>
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
  name: "LaporanGenerate",
  data(){
    return{
      laporan:[]
    }
  },
  mounted() {
    this.getLaporan()
  },
  methods:{
    getLaporan() {
      axios.get('http://127.0.0.1:8000/api/generate')
          .then(({data})=>{
            this.laporan = data.data
            this.laporan.sort((a,b)=>a.tanggal_bayar.localeCompare(b.tanggal_bayar))
          })
    }
  }
}

</script>

<style scoped>

</style>