<template>
  <div class="d-sm-flex align-items-center justify-content-between mb-4">
    <h1 class="h3 mb-0 text-gray-800">Halaman Edit Pembayaran</h1>
  </div>

  <div class="card shadow mb-4">
    <div class="card-header py-3">
      <h6 class="m-0 font-weight-bold text-primary">Form Pembayaran</h6>
    </div>
    <div class="card-body">
      <form action="">
        <div class="row">
          <div class="col-6 mb-3">
            <label for="tahun_ajaran">Tahun Ajaran:</label>
            <input type="text" v-model="model.pembayaran.tahun_ajaran" class="form-control" id="tahun_ajaran" name="tahun_ajaran">
          </div>
          <div class="col-6 mb-3">
            <label for="nominal">Nominal:</label>
            <input type="text" v-model="model.pembayaran.nominal" class="form-control" id="nominal" name="nominal">
          </div>
          <div class="col-12">
            <button type="button" @click="editPembayaran" class="btn btn-primary">Edit Pembayaran</button>
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
  name: "PembayaranEdit",
  data() {
    return{
      errorlist:'',
      pembayaranId:'',
      model: {
        pembayaran:{
          tahun_ajaran:'',
          nominal:''
        }
      }
    }
  },
  mounted() {
    this.pembayaranId = this.$route.params.id
    this.getPembayaranData(this.$route.params.id)
  },
  methods: {
    getPembayaranData(){
      axios.get(`http://127.0.0.1:8000/api/pembayaran/edit/${this.pembayaranId}`)
          .then(({data})=>{
            this.model.pembayaran = data.data[0];
          });
    },
    editPembayaran() {
      axios.post(`http://127.0.0.1:8000/api/pembayaran/edit/${this.pembayaranId}`, this.model.pembayaran)
          .then(({data})=>{
            console.log(data.data)
            this.model.pembayaran = data.data
            this.$router.push({name:"pembayaran"})
          })
    }
  }
}
</script>

<style scoped>

</style>