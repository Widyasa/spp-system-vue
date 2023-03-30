<template>
  <div class="d-sm-flex align-items-center justify-content-between mb-4">
    <h1 class="h3 mb-0 text-gray-800">Halaman Tambah Pembayaran</h1>
  </div>

  <div class="card shadow mb-4">
    <div class="card-header py-3">
      <h6 class="m-0 font-weight-bold text-primary">Form Pembayaran</h6>
    </div>
    <div class="card-body">
      <ul class="alert alert-warning" v-if="Object.keys(this.errorlist).length >0">
        <li class="mb-0 ms-3" v-for="(error,index) in this.errorlist" :key="index">
          {{error[0]}}
        </li>
      </ul>
      <form action="">
        <div class="row">
          <div class="col-6 mb-3">
            <label for="tahun_ajaran">Tahun Ajaran:</label>
            <input type="text" v-model="model.pembayaran.tahun_ajaran" class="form-control" id="tahun_ajaran" name="tahun_ajaran"
                   placeholder="Masukkan Tahun Ajaran">
          </div>
          <div class="col-6 mb-3">
            <label for="nominal">Nominal:</label>
            <input type="text" v-model="model.pembayaran.nominal" class="form-control" id="nominal" name="nominal"
                   placeholder="Masukkan Nominal">
          </div>
          <div class="col-12">
            <button type="button" @click="savePembayaran" class="btn btn-primary">Tambah Pembayaran</button>
            <RouterLink :to="{name:'pembayaran'}" class="btn btn-secondary ml-3">Halaman Pembayaran</RouterLink>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "PembayaranCreate",
  data() {
    return {
      errorlist:'',
      model: {
        pembayaran: {
          tahun_ajaran:'',
          nominal:''
        }
      }
    }
  },
  methods: {
    savePembayaran() {
      let myThis = this;
      axios.post('http://127.0.0.1:8000/api/pembayaran/store', this.model.pembayaran)
          .then(({data}) => {
            console.log(data.data)
            this.model.pembayaran = {
              tahun_ajaran:'',
              nominal: ''
            }
            this.$router.push({name:'pembayaran'})
          })
          .catch( function (error) {
                console.log(error)
                if (error.response) {
                  if (error.response.status == 422) {
                    myThis.errorlist = error.response.data.errors;
                  }
                } else if (error.request) {
                  console.log(error.request);
                } else {
                  console.log('Error', error.message);
                }
                console.log(error.config);
              }
          )
    },
  }
}
</script>

<style scoped>

</style>