<template>
<!--  <p>{{this.model.dataSPP.siswa_id}}</p>-->
<!--  <input type="text" v-model="model.dataSPP.siswa_id">-->
  <div class="d-sm-flex align-items-center justify-content-between mb-4">
    <h1 class="h3 mb-0 text-gray-800">Halaman Pembayaran SPP</h1>
  </div>

  <div class="card shadow mb-4">
    <div class="card-header py-3">
      <h6 class="m-0 font-weight-bold text-primary">Form Tambah Transaksi</h6>
    </div>
    <div class="card-body">
      <div class="card shadow mb-4">
        <div class="card-header py-3">
        </div>
        <div class="card-body">
          <div class="alert alert-warning" v-if="Object.keys(this.errorlist).length >0">
            <p class="mb-0 ms-3" >
              {{errorlist}}
            </p>
          </div>
          <form action="">
            <div class="row">
              <div class="col-6 mb-3">
                <label for="telepon">Nama Siswa:</label>
                <input type="text" v-model="model.dataSiswa.nama" disabled class="form-control" id="telepon" name="telepon">
              </div>
              <div class="col-6 mb-3">
                <label for="telepon">NISN | NIS:</label>
                <input type="text" v-model="nis" disabled class="form-control" id="telepon" name="telepon">
              </div>
              <div class="col-6 mb-3">
                <label for="telepon">Tahun Ajaran:</label>
                <input type="text" v-model="model.dataSiswa.tahun_ajaran" disabled class="form-control" id="telepon" name="telepon">
              </div>
              <div class="col-6 mb-3">
                <label for="telepon">Nominal:</label>
                <input type="text" v-model="model.dataSiswa.nominal" disabled class="form-control" id="telepon" name="telepon">
              </div>
              <div class="col-6 mb-3">
                <label for="kelas">Bulan Bayar:</label>
                <select class="form-control" v-model="model.dataSPP.bulan_dibayar" id="kelas" name="kelas_id" >
                                    <option value="" selected>Pilih Bulan</option>
                  <option v-for="(bulanBayar) in this.bulanBayar" :value="bulanBayar.id">
                    {{bulanBayar.nama}}
                  </option>
                </select>
              </div>
              <div class="col-6 mb-3">
                <label for="kelas">Tahun Bayar:</label>
                <select class="form-control" v-model="model.dataSPP.tahun_dibayar" id="kelas" name="kelas_id" >
                                    <option value="" disabled selected>Pilih Tahun</option>
                  <option v-for="(tahunBayar) in this.tahunBayar" :value="tahunBayar">
                    {{tahunBayar}}
                  </option>
                </select>
              </div>
              <div class="col-12">
                <button type="button" @click="saveTransaksi" class="btn btn-primary">Bayar SPP</button>
                <RouterLink :to="{name:'spp'}" class="btn btn-secondary ml-3">Halaman SPP</RouterLink>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "SppCreate",
  data() {
    return{
      errorlist:'',
      message:'',
      bulanBayar:'',
      tahunBayar:'',
      dataPetugas:'',
      siswaId:'',
      nis:'',
      model:{
        dataSiswa:[],
        dataSPP:{
          bulan_dibayar:'',
          tahun_dibayar:'',
          siswa_id:'',
          petugas_id:'',
          pembayaran_id:'',
          // tanggal_bayar:''
        },
      }
    }
  },
  mounted() {
    this.siswaId = this.$route.params.id
    this.getDataForSpp(this.$route.params.id)
    // console.log(this.siswaId)
  },
  methods: {
    getDataForSpp() {
      axios.get(`http://127.0.0.1:8000/api/transaksi/tambah/${this.siswaId}`)
          .then(({data})=>{
            this.model.dataSPP.siswa_id = data.data.dataSiswa[0].siswa_id
            this.model.dataSPP.petugas_id = data.data.dataPetugas[0].petugas_id
            this.bulanBayar = data.data.dataBulan
            console.log(data.data.dataBulan)
            this.tahunBayar = data.data.tahunDibayar
            this.model.dataSiswa = data.data.dataSiswa[0]
            this.nis = data.data.dataSiswa[0].nisn + ' | ' + data.data.dataSiswa[0].nis
            this.model.dataSPP.pembayaran_id = data.data.dataSiswa[0].pembayaran_id
            console.log(this.model.dataSPP.pembayaran_id)
          })
    },
    saveTransaksi(){
      let myThis = this
      axios.post(`http://127.0.0.1:8000/api/transaksi/tambah/${this.siswaId}`,this.model.dataSPP)
          .then(({data})=>{
            // console.log(data.data)
            this.model.dataSPP = {
              bulan_dibayar: '',
              tahun_dibayar:'',
              siswa_id:'',
              petugas_id:'',
              pembayaran_id:'',
              // tanggal_bayar:''
            }
            this.$router.push({name:'spp'})
            // this.message = data.message
          })
          .catch( function (error) {
            console.log(error)
            if (error.response) {
              if (error.response.status == 400) {
                myThis.errorlist = error.response.data.message;
              }
            } else if (error.request) {
              console.log(error.request);
            } else {
              console.log('Error', error.message);
            }
            console.log(error.config);
          }
          )
    }
  }
}
</script>

<style scoped>

</style>