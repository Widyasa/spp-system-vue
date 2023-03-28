<template>
  <div class="d-sm-flex align-items-center justify-content-between mb-4">
    <h1 class="h3 mb-0 text-gray-800">Halaman Kelas</h1>
    <a href="/api/kelas/tambah" class="btn btn-primary">Tambah Kelas</a>
  </div>

  <div class="card shadow mb-4">
    <div class="card-header py-3">
      <h6 class="m-0 font-weight-bold text-primary">Data Kelas Tahun Ini</h6>
    </div>
    <div class="card-body">
      <div class="table-responsive">
        <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
          <thead>
          <tr>
            <th>No.</th>
            <th>Nama</th>
            <th>Kompetensi Keahlian</th>
            <th>Total Siswa</th>
            <th></th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>1.</td>
            <td>XII RPL 1</td>
            <td>Rekayasa Perangkat Lunak</td>
            <td>3 siswa</td>
            <td>
              <a href="" class="btn btn-warning btn-sm">
                <i class="fa-regular fa-pen-to-square" style="color: #ffffff;"></i>
              </a>
              <a href="" class="btn btn-danger btn-sm">
                <i class="fa-regular fa-trash-can" style="color: #ffffff;"></i>
              </a>
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
name: "KelasIndex"
}
</script>

<style scoped>

</style>