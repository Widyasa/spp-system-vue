<template>
  <div class="d-sm-flex align-items-center justify-content-between mb-4">
    <h1 class="h3 mb-0 text-gray-800">Halaman Tambah Siswa</h1>
  </div>

  <div class="card shadow mb-4">
    <div class="card-header py-3">
      <h6 class="m-0 font-weight-bold text-primary">Form Siswa</h6>
    </div>
    <div class="card-body">
      <div class="card shadow mb-4">
        <div class="card-header py-3">
        </div>
        <div class="card-body">
          <form action="">
<!--            <input type="hidden" v-model="model.siswa.pengguna_id"  class="form-control" name="pengguna_id">-->
<!--            <input type="hidden" v-model="model.siswa.pembayaran_id"  class="form-control" name="pembayaran_id">-->
<!--            <input type="hidden" v-model="model.siswa.role"  class="form-control" name="role">-->
            <div class="row">
              <div class="col-6 mb-3">
                <label for="nisn">NISN:</label>
                <input type="text" v-model="model.siswa.nisn" class="form-control" id="nisn" name="nisn"
                       placeholder="Masukkan NISN">
              </div>
              <div class="col-6 mb-3">
                <label for="nis">NIS:</label>
                <input type="text" v-model="model.siswa.nis" class="form-control" id="nis" name="nis"
                       placeholder="Masukkan NIS">
              </div>
              <div class="col-6 mb-3">
                <label for="nama">Nama:</label>
                <input type="text" v-model="model.siswa.nama" class="form-control" id="nama" name="nama"
                       placeholder="Masukkan Nama">
              </div>
              <div class="col-6 mb-3">
                <label for="alamat">Alamat:</label>
                <input type="text" v-model="model.siswa.alamat" class="form-control" id="alamat" name="alamat"
                       placeholder="Masukkan Alamat">
              </div>
              <div class="col-6 mb-3">
                <label for="telepon">Telepon:</label>
                <input type="text" v-model="model.siswa.telepon" class="form-control" id="telepon" name="telepon"
                       placeholder="Masukkan Telepon">
              </div>
              <div class="col-6 mb-3">
                <label for="kelas">Kelas:</label>
                <select class="form-control" v-model="model.siswa.kelas_id" id="kelas" name="kelas_id" >
<!--                  <option value="" selected>{{siswa.nama_kelas}}</option>-->
                  <option v-for="(kelasId) in this.kelasId" :value="kelasId.id">
                    {{kelasId.nama}}
                  </option>
                </select>
              </div>
              <div class="col-12">
                <button type="button" @click="editSiswa" class="btn btn-primary">Edit Siswa</button>
                <RouterLink :to="{name:'siswa'}" class="btn btn-secondary ml-3">Halaman Siswa</RouterLink>
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
  name: "SiswaCreate",
  data() {
    return {
      kelasId:'',
      penggunaId:'',
      selectedValue:'',
      model: {
        siswa: {
          nisn:'',
          nis:'',
          nama:'',
          alamat:'',
          telepon:'',
          kelas_id:'',
          pengguna_id:'',
          pembayaran_id:'',
          role:3
        },

      }
    }
  },
  mounted() {
    this.penggunaId = this.$route.params.id
    this.getSiswa(this.$route.params.id)
    console.log(this.penggunaId)
  },
  methods: {
    getSiswa() {
      // let myThis = this;
      axios.get(`http://127.0.0.1:8000/api/siswa/edit/${this.penggunaId}`)
          .then(({data})=>{
            this.model.siswa = data.data.dataSiswa[0]
            console.log(data.data[1])

            // document.getElementById('array').innerHTML=this.model.siswa
            this.kelasId = data.data.dataKelas
            this.model.siswa.kelas_id = this.kelasId
          })

    },
    editSiswa(){
      // let myThis = this
      axios.post(`http://127.0.0.1:8000/api/siswa/edit/${this.penggunaId}`, this.model.siswa)
          .then(({data})=>{
            console.log(data.data)
            this.model.siswa = data.data[1][0]
            this.$router.push({name:'siswa'})
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