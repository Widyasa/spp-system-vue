<template>
  <div class="d-sm-flex align-items-center justify-content-between mb-4">
    <h1 class="h3 mb-0 text-gray-800">Halaman Edit Siswa</h1>
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
            <input type="text" class="form-control" name="pengguna_id">
            <input type="text" class="form-control" name="pembayaran_id">
            <input type="text" class="form-control" name="role">
            <div class="row">
              <div class="col-6 mb-3">
                <label for="nisn">NISN:</label>
                <input type="text" class="form-control" id="nisn" name="nisn"
                       placeholder="Masukkan NISN">
              </div>
              <div class="col-6 mb-3">
                <label for="nis">NIS:</label>
                <input type="text" class="form-control" id="nis" name="nis"
                       placeholder="Masukkan NIS">
              </div>
              <div class="col-6 mb-3">
                <label for="nama">Nama:</label>
                <input type="text" class="form-control" id="nama" name="nama"
                       placeholder="Masukkan Nama">
              </div>
              <div class="col-6 mb-3">
                <label for="alamat">Alamat:</label>
                <input type="text" class="form-control" id="alamat" name="alamat"
                       placeholder="Masukkan Alamat">
              </div>
              <div class="col-6 mb-3">
                <label for="telepon">Telepon:</label>
                <input type="text" class="form-control" id="telepon" name="telepon"
                       placeholder="Masukkan Telepon">
              </div>
              <div class="col-6 mb-3">
                <label for="kelas">Kelas:</label>
                <select class="form-control" id="kelas" name="kelas_id">
                  <option selected>Pilih kelas</option>
                </select>
              </div>
              <div class="col-12">
                <button type="submit" class="btn btn-primary">Tambah Siswa</button>
                <a href="/api/siswa" class="btn btn-secondary">Halaman Sebelumnya</a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SiswaEdit"
}
</script>

<style scoped>

</style>