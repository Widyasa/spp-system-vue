<template>

  <div class="d-sm-flex align-items-center justify-content-between mb-4">
    <h1 class="h3 mb-0 text-gray-800">Halaman Laporan</h1>
<!--    <button @click="generateLaporan(laporan)" class="btn btn-primary">Cetak Laporan</button>-->
    <RouterLink :to="{name:'generateLaporan'}" class="btn btn-primary">Cetak Laporan</RouterLink>
  </div>

  <div class="card shadow mb-4" id="laporan">
    <div class="card-header py-3">
      <h6 class="m-0 font-weight-bold text-primary">Data Laporan Tahun Ini</h6>
    </div>
    <div class="card-body">
      <div class="table-responsive" >
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
          <tbody v-if="this.laporan.length > 0">
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

import axios from "axios"

export default {
  name: "LaporanIndex",
  data() {
    return {
      laporan: []
    }
  },
  mounted() {
    this.getLaporan()
  },
  methods: {
    getLaporan() {
      axios.get('http://127.0.0.1:8000/api/generate')
          .then(({data}) => {
            this.laporan = data.data
            this.laporan.sort((a, b) => b.tanggal_bayar.localeCompare(a.tanggal_bayar))
          })
    },
    generateLaporan() {
      var printPage = document.getElementById('laporan').innerHTML;
      var oriPage = document.body.innerHTML;
      document.body.innerHTML = printPage;
      window.print();
      document.body.innerHTML = oriPage;
      window.location.reload();
    }
  }
}

</script>

<style scoped>

</style>