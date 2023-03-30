<template>
  <div class="d-sm-flex align-items-center justify-content-between mb-4">
    <h1 class="h3 mb-0 text-gray-800">Halaman Edit Kelas</h1>
  </div>

  <div class="card shadow mb-4">
    <div class="card-header py-3">
      <h6 class="m-0 font-weight-bold text-primary">Form Kelas</h6>
    </div>
    <div class="card-body">
      <form action="">
        <div class="row">
          <div class="col-6 mb-3">
            <label for="nama">Nama:</label>
            <input type="text" maxlength="10" v-model="model.kelas.nama" class="form-control" id="nama" name="nama">
          </div>
          <div class="col-6 mb-3">
            <label for="kompetensi_keahlian">Kompetensi Keahlian:</label>
            <input type="text" maxlength="30" v-model="model.kelas.kompetensi_keahlian" class="form-control" id="kompetensi_keahlian" name="kompetensi_keahlian">
          </div>
          <div class="col-12">
            <button type="button" @click="editKelas"  class="btn btn-primary">Edit Kelas</button>
            <RouterLink :to="{name:'kelas'}" class="btn btn-secondary ml-3">Halaman Kelas</RouterLink>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "KelasEdit",
  data () {
    return{
      errorlist:'',
      kelasId:'',
      model: {
        kelas:{
          nama:'',
          kompetensi_keahlian:''
        }
      }
    }
  },
  mounted() {
    this.kelasId = this.$route.params.id
    this.getKelasData(this.$route.params.id)
  },
  methods: {
    getKelasData(){
      axios.get(`http://127.0.0.1:8000/api/kelas/update/${this.kelasId}`)
          .then(({data}) => {
            this.model.kelas = data.data[0]
          });
    },
    editKelas() {
      axios.post(`http://127.0.0.1:8000/api/kelas/update/${this.kelasId}`, this.model.kelas)
          .then(({data})=> {
            this.model.kelas = data.data
            this.$router.push({name:"kelas"})
          })
      }
    }
}
</script>

<style scoped>

</style>