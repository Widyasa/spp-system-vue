<template>
  <div class="d-sm-flex align-items-center justify-content-between mb-4">
    <h1 class="h3 mb-0 text-gray-800">Halaman Pembayaran</h1>
    <a href="/api/pembayaran/tambah" class="btn btn-primary">Tambah Pembayaran</a>
  </div>

  <div class="card shadow mb-4">
    <div class="card-header py-3">
      <h6 class="m-0 font-weight-bold text-primary">Data Pembayaran Tahun Ini</h6>
    </div>
    <div class="card-body">
      <div class="table-responsive">
        <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
          <thead>
          <tr>
            <th>No.</th>
            <th>Tahun Ajaran</th>
            <th>Nominal</th>
            <th></th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>1.</td>
            <td>2021/2022</td>
            <td>250.000</td>
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
  name: "PembayaranIndex"
}
</script>

<style scoped>

</style>