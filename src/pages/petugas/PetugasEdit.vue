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
        <input type="text" class="form-control" name="pengguna_id">
        <input type="text" class="form-control" name="role">
        <div class="row">
          <div class="col-6 mb-3">
            <label for="nama">Nama:</label>
            <input type="text" class="form-control" id="nama" name="nama"
                   placeholder="Masukkan Nama">
          </div>
          <div class="col-6 mb-3">
            <label for="password">Password:</label>
            <input type="text" class="form-control" id="password" name="password"
                   placeholder="Masukkan Password">
          </div>
          <div class="col-12">
            <button type="submit" class="btn btn-primary">Tambah Petugas</button>
            <a href="/api/petugas" class="btn btn-secondary">Halaman Petugas</a>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "PetugasEdit"
}
</script>

<style scoped>

</style>