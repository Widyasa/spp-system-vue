<template>
  <div class="d-sm-flex align-items-center justify-content-between mb-4">
    <h1 class="h3 mb-0 text-gray-800">Halaman Edit Pembayaran</h1>
  </div>

  <div class="card shadow mb-4">
    <div class="card-header py-3">
      <h6 class="m-0 font-weight-bold text-primary">Form Pembayaran</h6>
    </div>
    <div class="card-body">
      <form action="">
        <div class="row">
          <div class="col-6 mb-3">
            <label for="tahun_ajaran">Tahun Ajaran:</label>
            <input type="text" class="form-control" id="tahun_ajaran" name="tahun_ajaran"
                   placeholder="Masukkan Tahun Ajaran">
          </div>
          <div class="col-6 mb-3">
            <label for="nominal">Nominal:</label>
            <input type="text" class="form-control" id="nominal" name="nominal"
                   placeholder="Masukkan Nominal">
          </div>
          <div class="col-12">
            <button type="submit" class="btn btn-primary">Edit Pembayaran</button>
            <a href="/api/pembayaran" class="btn btn-secondary">Halaman Pembayaran</a>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "PembayaranEdit"
}
</script>

<style scoped>

</style>