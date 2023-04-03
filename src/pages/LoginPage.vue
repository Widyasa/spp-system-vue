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
                  <form class="user"  method="post">
                    <div class="form-group">
                      <input type="text" v-model="model.user.username" class="form-control form-control-user"
                             placeholder="Enter Username" name="username">
                    </div>
                    <div v-if="validation.username" class="mt-2 alert alert-danger">
                      Masukkan Username
                    </div>
                    <div class="form-group">
                      <input type="password" v-model="model.user.password" class="form-control form-control-user"
                             placeholder="Password" name="password">
                    </div>
                    <div v-if="validation.password" class="mt-2 alert alert-danger">
                      Masukkan Password
                    </div>
                    <button type="button" @click="login" class="btn btn-primary btn-user btn-block">Login</button>
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
import {ref} from "vue";
import axios from "axios";

  export default {
    name: "LoginPage",
    data () {
      return {
        loggedIn: localStorage.getItem('loggenIn'),
        token:localStorage.getItem("token"),
        model: {
          user:{
            username:'',
            password: ''
          },
        },
        validation:[],
        loginFailed:null
      }
    },
    methods: {
      login () {
        if (this.model.user.username && this.model.user.password) {
          axios.get('http://127.0.0.1:8000/sanctum/csrf-cookie')
              .then(response => {
                console.log(response)
              })
          axios.post('http://127.0.0.1:8000/api/login', this.model.user)
              .then(({data})=>{
                this.model.user = {
                  username: '',
                  password: ''
                }
                console.log(data.data.token)
                if (data.message=="success") {
                  localStorage.setItem("LoggedIn", "true")
                  localStorage.setItem("token",data.data.token)
                  this.loggedIn = true
                  return this.$router.push({name:'dashboard'})
                } else {
                  this.loginFailed = true
                }
              }) .catch(error => {
                console.log(error)
          })
        }
        this.validation = []
        if (!this.user.username){
          this.validation.username = true
        }
        if (!this.user.password){
          this.validation.password = true
        }

      }
    },
    mounted() {
      if (this.token) {
        return this.$router.push({name:'dashboard'})
      }
    }
  }

</script>

<style scoped>

</style>