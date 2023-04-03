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
<!--        <input type="text" class="form-control" name="role">-->
        <div class="row">
          <div class="col-6 mb-3">
            <label for="nama">Nama:</label>
            <input type="text" class="form-control" id="nama" name="username"
                   v-model="model.petugas.username">
          </div>
          <div class="col-6 mb-3">
            <label for="password">Password:</label>
            <input type="password" class="form-control" id="password" name="password"
                   >
          </div>
          <p id="array"></p>
          <div class="col-12">
            <button type="button" @click="editPetugas" class="btn btn-primary">Edit Petugas</button>
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
  name: "PetugasEdit",
  data() {
    return{
      petugasId:'',
      model: {
        petugas:{
          // id:'',
          username:'',
          password:''
        }
      }
    }
  },
  mounted() {
    this.petugasId = this.$route.params.id
    this.getPetugasData(this.$route.params.id)
    console.log(this.petugasId)
  },
  methods: {
    getPetugasData() {
      axios.get(`http://127.0.0.1:8000/api/petugas/edit/${this.petugasId}`)
          .then(({data})=> {
            this.model.petugas = data.data[0]
            // document.getElementById('array').innerHTML= this.model.petugas
          })
    },
    editPetugas () {
      axios.post(`http://127.0.0.1:8000/api/petugas/edit/${this.petugasId}`, this.model.petugas)
          .then(({data})=>{
            console.log(data.data)
            this.model.petugas = data.data
            this.$router.push({name:'petugas'})
          })

    }
  }
}
</script>

<style scoped>

</style>