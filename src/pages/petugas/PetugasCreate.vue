<template>
  <div class="d-sm-flex align-items-center justify-content-between mb-4">
    <h1 class="h3 mb-0 text-gray-800">Halaman Tambah Petugas</h1>
  </div>

  <div class="card shadow mb-4">
    <div class="card-header py-3">
      <h6 class="m-0 font-weight-bold text-primary">Form Petugas</h6>
    </div>
    <div class="card-body">
      <form action="">
<!--        <input type="text" v-model="model.petugas.id" class="form-control" name="pengguna_id">-->
<!--        <input type="hidden" v-model="model.petugas.role" class="form-control" name="role">-->
        <div class="row">
          <div class="col-6 mb-3">
            <label for="nama">Nama:</label>
            <input type="text" v-model="model.petugas.username" class="form-control" id="nama" name="nama"
                   placeholder="Masukkan Nama">
          </div>
          <div class="col-6 mb-3">
            <label for="password">Password:</label>
            <input type="password" v-model="model.petugas.password" class="form-control" id="password" name="password"
                   placeholder="Masukkan Password">
          </div>
          <div class="col-12">
            <button type="button" @click="savePetugas" class="btn btn-primary">Tambah Petugas</button>
            <RouterLink :to="{name:'petugas'}" class="btn btn-secondary ml-3">Halaman Petugas</RouterLink>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "PetugasCreate",
  data() {
    return {
      errorlist:'',
      lastId:'',
      model: {
        petugas: {
          id:'',
          username:'',
          password:'',
          role:2,
          // pengguna_id: ''
        },

      }
    }
  },
  mounted() {
    // this.penggunaId = this.$route.params.id
    this.getPetugas()
  },
  methods: {
    getPetugas() {
      let myThis = this;
      axios.get('http://127.0.0.1:8000/api/petugas/tambah')
          .then(({data})=>{
            this.lastId = data.data
            this.model.petugas.id = this.lastId+1
          })
          .catch((error) => {
            console.log(error);
          });
    },
    savePetugas(){
      axios.post('http://127.0.0.1:8000/api/petugas/tambah', this.model.petugas)
          .then(({data})=>{
            console.log(data.data)
            this.model.petugas = {
              id:'',
              username:'',
              password: '',
              role: '',
            }
            this.$router.push({name:'petugas'})
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
    }
  }
}
</script>

<style scoped>

</style>