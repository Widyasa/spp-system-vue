<template>
  <div class="d-sm-flex align-items-center justify-content-between mb-4">
  <h1 class="h3 mb-0 text-gray-800">Halaman Petugas</h1>
  <RouterLink :to="{name:'createPetugas'}" class="btn btn-primary">Tambah Petugas</RouterLink>
</div>

  <div class="card shadow mb-4">
    <div class="card-header py-3">
      <h6 class="m-0 font-weight-bold text-primary">Data Petugas Tahun Ini</h6>
    </div>
    <div class="card-body">
      <div class="table-responsive">
        <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
          <thead>
          <tr>
            <th>No.</th>
            <th>Nama</th>
            <th>Role</th>
            <th>Aksi</th>
          </tr>
          </thead>
          <tbody v-if="this.petugas.length > 0">
          <tr v-for="(petugas, index) in this.petugas" :key="index">
            <td>{{index+1}}</td>
            <td>{{petugas.nama}}</td>
            <td>{{petugas.role==2 ? 'petugas' : petugas.role==1 ? 'admin' : ''}}</td>
            <td>
              <RouterLink :to="{path:'/petugas/edit/'+petugas.pengguna_id}" class="btn btn-warning btn-sm">
                <i class="fa-regular fa-pen-to-square" style="color: #ffffff;"></i>
              </RouterLink>
              <button type="button" @click="deletePetugas(petugas.pengguna_id)" class="btn btn-danger btn-sm ml-3">
                <i class="fa-regular fa-trash-can" style="color: #ffffff;"></i>
              </button>
            </td>
          </tr>
          </tbody>
          <tbody v-else>
            <tr aria-colspan="4">Loading...</tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "PetugasIndex",
  data (){
    return{
      petugas:[]
    }
  },
  mounted() {
    this.getPetugas()
  },
  methods: {
    getPetugas() {
      axios.get('http://127.0.0.1:8000/api/petugas')
          .then(({data}) => {
            this.petugas = data.data.petugases;
            this.petugas.sort((a,b)=>a.nama.localeCompare(b.nama))
          });
    },
    deletePetugas(petugasId) {
      if (confirm('Yakin Mau Hapus?')) {
        // console.log(pembayaranId)
        axios.post(`http://127.0.0.1:8000/api/petugas/hapus/${petugasId}`)
            .then(({data})=>{
              console.log(data.data)
              this.getPetugas();
            })
      }
    }
  }
}
</script>

<style scoped>

</style>