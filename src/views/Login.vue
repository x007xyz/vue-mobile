<template>
  <div class="content">
    <header-bar align="left">
      登录
    </header-bar>
    <div class="main-content">
      <div class="padded">
        <field placeholder="输入用户名" v-model="info.username">
          <span class="iconfont icon-account"></span>
        </field>
        <!-- <field placeholder="验证码" v-model="info.code" type="code">
          <span class="iconfont icon-verify"></span>
          <div slot="other" class="flex-item">获取验证码</div>
        </field> -->
        <field placeholder="输入6-18密码" v-model="info.password" type="password">
          <span class="iconfont icon-lock"></span>
        </field>
        <button class="btn-primary btn-block" @click="clickLoginBtn">登录</button>
      </div>
    </div>
  </div>
</template>

<script>
import {login} from '../api.js'
export default {
  components: {
    HeaderBar: require('components/HeaderBar'),
    Field: require('components/Field')
  },
  name: 'Login',
  data () {
    return {
      info: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    clickLoginBtn () {
      login(this.info).then(result => {
        this.$router.push({path: '/index'})
      })
    }
  }
}
</script>

<style lang="css" scoped>
  button{
    margin-top: 35px;
  }
</style>