<template>
  <div id="login-wrapper" class="wrapper">
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
                    id="email"
                    placeholder="请输入您的邮箱地址"
                    v-model="login.email"
                    class="form-control"
                    type="text">
                </div>

                <div class="form-group">
                  <label for="password">密码</label>
                  <input
                    id="password"
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
  import {loginUrl, getHeader, userUrl} from './../config'
  import {clientId, clientSecret} from './../env'
  import {mapState} from 'vuex'

  export default {
    name: 'app',
    computed: {
      ...mapState({
        userStore: state => state.userStore
      })
    },
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
        const authUser = {}
        axios.post(loginUrl, postData)
          .then(response => {
            console.log('Auth Token', response)
            if (response.status == 200) {
              authUser.access_token = response.data.access_token
              authUser.refresh_token = response.data.access_token
              window.localStorage.setItem('authUser', JSON.stringify(authUser))
              axios.get(userUrl, {headers: getHeader()})
                .then(response => {
                  console.log('User Object', response)
                  authUser.email = response.data.email
                  authUser.name = response.data.name
                  window.localStorage.setItem('authUser', JSON.stringify(authUser))
                  this.$store.dispatch('setUserObject', authUser)
                  this.$router.push({name: 'dashboard'})
                })
            }

          })
        ;
      }
    },

  }
</script>

<style lang="scss">
  @import "./../assets/sass/app.scss";

  #login-wrapper {
    margin-top: 50px;
  }
</style>
