<template>
  <div class="d-sm-flex align-items-center justify-content-between mb-4">
    <h1 class="h3 mb-0 text-gray-800">Halaman Laporan</h1>
    <a href="/api/generate" class="btn btn-primary">Cetak Laporan</a>
  </div>

  <div class="card shadow mb-4">
    <div class="card-header py-3">
      <h6 class="m-0 font-weight-bold text-primary">Data Laporan Tahun Ini</h6>
    </div>
    <div class="card-body">
      <div class="table-responsive">
        <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
          <thead>
          <tr>
            <th>No.</th>
            <th>Nama</th>
            <th>NISN & NIS</th>
            <th>Tanggal Bayar</th>
            <th>Bulan Dibayar</th>
            <th>Tahun Dibayar</th>
            <th>Tahun Ajaran</th>
            <th>Nominal</th>
          </tr>
          </thead>
          <tbody>
          <td>1.</td>
          <td>Aditya Prayatna</td>
          <td>123456789 | 12345</td>
          <td>2022-02-23 08:43:54</td>
          <td>Februari</td>
          <td>2022</td>
          <td>2021/2022</td>
          <td>250.000</td>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LaporanIndex"
}
</script>

<style scoped>

</style>