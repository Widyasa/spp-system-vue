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
            <th></th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>1.</td>
            <td>Petugas123</td>
            <td>petugas</td>
            <td>
              <RouterLink :to="{path:'/petugas/edit/'}" class="btn btn-warning btn-sm">
                <i class="fa-regular fa-pen-to-square" style="color: #ffffff;"></i>
              </RouterLink>
              <button href="" class="btn btn-danger btn-sm ml-3">
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
  name: "PetugasIndex"
}
</script>

<style scoped>

</style>