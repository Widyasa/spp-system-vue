<template>
  <head>
  <title>System SPP | Login Page</title>
  </head>

  <body class="bg-gradient-primary h-100 min-vh-100">

  <div class="container">
    <div class="row justify-content-center">
      <div class="col-xl-10 col-lg-12 col-md-9">
        <div class="card o-hidden border-0 shadow-lg my-5">
          <div class="card-body p-0">
            <div class="row">
              <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>
              <div class="col-lg-6">
                <div class="p-5">
                  <div class="text-center">
                    <h1 class="text-gray-900 mb-4">Selamat Datang di Aplikasi SPP SMKN 1
                      Denpasar!</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, cumque.
                    </p>
                  </div>
                  <hr>
                  <form class="user" action="http://127.0.0.1:8000/api/login" method="post">
                    <div class="form-group">
                      <input type="text" class="form-control form-control-user"
                             placeholder="Enter Username" name="username">
                    </div>
                    <div class="form-group">
                      <input type="password" class="form-control form-control-user"
                             placeholder="Password" name="password">
                    </div>
                    <button type="submit" class="btn btn-primary btn-user btn-block">Login</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </body>
</template>

<script>
export default {
name: "LoginPage"
}
</script>

<style scoped>

</style>