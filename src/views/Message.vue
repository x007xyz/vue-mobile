<template>
  <div class="content">
    <header-bar>
      信息提示
    </header-bar>
    <div class="main-content">
      <div class="item">
        <div class="btn" @click="openToast">点击弹出toast</div>
      </div>
    </div>
  </div>
</template>
<script>
import {Toast} from 'mint-ui'
// import toast from 'components/toast/toast'
export default {
  name: 'Message',
  components: {
    HeaderBar: require('components/HeaderBar')
  },
  data () {
    return {
    }
  },
  methods: {
    openToast () {
      Toast('提示信息')
      // 设置图标
      // toast({
      //   message: '操作成功',
      //   iconClass: 'mintui mintui-success'
      // })
      // 设置位置
      // toast({
      //   message: '提示信息',
      //   position: 'bottom'
      // })
    }
  },
  mounted () {
  }
}
</script>
<style lang="css" scoped>
.item{
  text-align: center;
  margin-top: 8px;
}
.btn{
  width: 80%;
}
</style>
