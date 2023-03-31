<template>
  <div class="d-sm-flex align-items-center justify-content-between mb-4">
    <h1 class="h3 mb-0 text-gray-800">Halaman Tambah Kelas</h1>
  </div>

  <div class="card shadow mb-4">
    <div class="card-header py-3">
      <h6 class="m-0 font-weight-bold text-primary">Form Kelas</h6>
    </div>
    <div class="card-body">
      <ul class="alert alert-warning" v-if="Object.keys(this.errorlist).length >0">
        <li class="mb-0 ml-3" v-for="(error,index) in this.errorlist" :key="index">
          {{error[0]}}
        </li>
      </ul>
      <form action="">
        <div class="row">
          <div class="col-6 mb-3">
            <label for="nama">Nama:</label>
            <input type="text" v-model="model.kelas.nama" class="form-control"
                   placeholder="Masukkan Nama">
          </div>
          <div class="col-6 mb-3">
            <label for="kompetensi_keahlian">Kompetensi Keahlian:</label>
            <input type="text" v-model="model.kelas.kompetensi_keahlian" class="form-control" id="kompetensi_keahlian" name="kompetensi_keahlian"
                   placeholder="Masukkan Kompetensi Keahlian">
          </div>
          <div class="col-12">
            <button type="button" @click="saveKelas" class="btn btn-primary">Tambah Kelas</button>
            <RouterLink :to="{name:'kelas'}" class="btn btn-secondary">Halaman Kelas</RouterLink>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "KelasCreate",
  data() {
    return {
      errorlist:'',
      model: {
        kelas: {
            nama:'',
            kompetensi_keahlian:''
        }
      }
    }
  },
  methods: {
    saveKelas() {
      let myThis = this;
      axios.post('http://127.0.0.1:8000/api/kelas/tambah', this.model.kelas)
          .then(({data}) => {
            console.log(data.data)
            this.model.kelas = {
              nama:'',
              kompetensi_keahlian: ''
            }
            this.$router.push({name:'kelas'})
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