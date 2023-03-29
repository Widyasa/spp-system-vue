<template>
  <!-- Sidebar -->
  <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

    <!-- Sidebar - Brand -->
    <a class="sidebar-brand d-flex align-items-center justify-content-center" href="/">
      <div class="sidebar-brand-icon rotate-n-15">
        <i class="fas fa-laugh-wink"></i>
      </div>
      <div class="sidebar-brand-text mx-3">System SPP</div>
    </a>

    <!-- Divider -->
    <hr class="sidebar-divider my-0">

    <RouterLink class="nav-item text-decoration-none" :to="{name:'dashboard'}" active-class="active" >
      <div class="nav-link" href="#">
        <i class="fas fa-fw fa-tachometer-alt"></i>
        <span>Dashboard</span>
      </div>
    </RouterLink>

    <RouterLink class="nav-item text-decoration-none" :to="{name:'siswa'}" active-class="active">
      <a class="nav-link">
        <i class="fa-solid fa-user-graduate"></i>
        <span>Data Siswa</span></a>
    </RouterLink>

    <RouterLink class="nav-item text-decoration-none" :to="{name:'petugas'}" active-class="active">
      <a class="nav-link">
        <i class="fa-solid fa-user-tie"></i>
        <span>Data Petugas</span></a>
    </RouterLink>

    <RouterLink class="nav-item text-decoration-none" :to="{name:'kelas'}" active-class="active">
      <a class="nav-link">
        <i class="fa-solid fa-school"></i>
        <span>Data Kelas</span></a>
    </RouterLink>

    <RouterLink class="nav-item text-decoration-none" :to="{name:'pembayaran'}" active-class="active">
      <a class="nav-link">
        <i class="fa-solid fa-cash-register"></i>
        <span>Data Pembayaran</span></a>
    </RouterLink>

    <RouterLink class="nav-item text-decoration-none" :to="{name:'spp'}" active-class="active">
      <a class="nav-link">
        <i class="fa-solid fa-money-bill-wave"></i>
        <span>Transaksi SPP</span></a>
    </RouterLink>

    <RouterLink class="nav-item text-decoration-none" :to="{name:'laporan'}" active-class="active">
      <a class="nav-link">
        <i class="fa-solid fa-file-pdf"></i>
        <span>Laporan</span></a>
    </RouterLink>
  </ul>
  <!-- End of Sidebar -->

</template>

<script>
export default {
  name: "Sidebar"
}
</script>

<style scoped>

</style>