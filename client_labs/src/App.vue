<template>
  <div id="home-wrapper" class="wrapper">
    <section class="login">
      <div class="row">
        <div class="col-md-6 col-md-push-3">
          <div class="panel panel-default">
            <div class="panel-heading"><strong>登录</strong></div>
            <div class="panel-body">
              <form @submit.prevent="handleLoginFormSubmit()">
                <div class="form-group">
                  <label for="email">Email地址</label>
                  <input
                  placeholder="请输入您的邮箱地址"
                  v-model="login.email"
                  class="form-control"
                  type="text" >
              </div>

              <div class="form-group">
                <label for="password">密码</label>
                <input
                placeholder="请输入您的密码"
                v-model="login.password"
                class="form-control"
                type="password">
              </div>

              <button class="btn btn-primary">登录</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import {loginUrl} from './config'
import {clientId, clientSecret} from './env'

export default {
  name: 'app',
  data() {
    return {
      login: {
        email: 'test@admin.com',
        password: 'password'
      }
    }
  },
  methods: {
    handleLoginFormSubmit() {
      const postData = {
        grant_type: 'password',
        client_id: clientId,
        client_secret: clientSecret,
        scope: '',
        username: this.login.email,
        password: this.login.password,
      }
      axios.post(loginUrl, postData)
        .then(response => {
          console.log(response)
        })
        ;
    }
  },

}
</script>

<style lang="scss">
@import "./assets/sass/app.scss"
</style>
