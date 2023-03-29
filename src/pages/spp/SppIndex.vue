<template>
  <div class="d-sm-flex align-items-center justify-content-between mb-4">
    <h1 class="h3 mb-0 text-gray-800">Transaksi SPP Siswa</h1>
  </div>

  <div class="card shadow mb-4">
    <div class="card-header py-3">
      <h6 class="m-0 font-weight-bold text-primary">Entry Transaksi Siswa</h6>
    </div>
    <div class="card-body">
      <div class="table-responsive">
        <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
          <thead>
          <tr>
            <th>No.</th>
            <th>NISN | NIS</th>
            <th>Nama</th>
            <th>Tahun Ajaran</th>
            <th>Nominal</th>
            <th></th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>1.</td>
            <td>123456789 | 12345</td>
            <td>Aditya Prayatna</td>
            <td>2021/2022</td>
            <td>250.000</td>
            <td>
              <button type="button" class="btn btn-primary btn-sm" data-toggle="modal"
                      data-target="#tambahTransaksiModal">Bayar SPP</button>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

  <div class="modal fade" id="tambahTransaksiModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
       aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Tambah Transaksi Siswa</h5>
          <button class="close" type="button" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <form action="">
          <div class="modal-body">
            <label for="bulan">Bulan Dibayar:</label>
            <select class="form-control" id="bulan">
              <option selected>Pilih bulan</option>
            </select>
          </div>
          <div class="modal-footer">
            <button class="btn btn-secondary" type="button" data-dismiss="modal">Batal Tambah</button>
            <button type="submit" class="btn btn-primary">Tambah Transaksi</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SppIndex"
}
</script>

<style scoped>

</style>