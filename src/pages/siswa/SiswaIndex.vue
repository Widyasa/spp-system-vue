<template>
  <div class="d-sm-flex align-items-center justify-content-between mb-4">
    <h1 class="h3 mb-0 text-gray-800">Halaman Siswa</h1>
    <RouterLink :to="{name:'createSiswa'}" class="btn btn-primary">Tambah Siswa</RouterLink>
  </div>

  <div class="card shadow mb-4">
    <div class="card-header py-3">
      <h6 class="m-0 font-weight-bold text-primary">Data Siswa Tahun Ini</h6>
    </div>
    <div class="card-body">
      <div class="table-responsive">
        <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
          <thead>
          <tr>
            <th>No.</th>
            <th>NISN</th>
            <th>NIS</th>
            <th>Nama</th>
            <th>Alamat</th>
            <th>Telepon</th>
            <th>Kelas</th>
            <th></th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>1.</td>
            <td>12345678910</td>
            <td>12345</td>
            <td>Aditya Prayatna</td>
            <td>Jl. Ahmad Yani</td>
            <td>08123456789</td>
            <td>XII RPL 1</td>
            <td>
              <RouterLink :to="{path:'/siswa/edit/'}" class="btn btn-warning btn-sm">
                <i class="fa-regular fa-pen-to-square" style="color: #ffffff;"></i>
              </RouterLink>
              <button href="" class="btn btn-danger ml-3 btn-sm">
                <i class="fa-regular fa-trash-can" style="color: #ffffff;"></i>
              </button>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SiswaIndex"
}
</script>

<style scoped>

</style>