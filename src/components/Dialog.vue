<template>
  <div class="modal" v-show="show">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          {{title}}
        </div>
        <div class="modal-body">
          {{content}}
        </div>
        <div class="modal-footer">
          <span @click="confirm">确认</span><span @click="hideDialog">取消</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dialog',
  props: {
    title: {
      type: String,
      default: '标题'
    },
    content: {
      type: String,
      default: '内容'
    },
    callback: Function
  },
  data () {
    return {
      show: false
    }
  },
  methods: {
    confirm () {
      if (this.callback) {
        this.callback()
      }
      this.hideDialog()
    },
    hideDialog () {
      this.show = false
    }
  }
}
</script>

<style lang="css" scoped>
  .modal{
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    background-color: rgba(0,0,0,0.5);
  }
  .modal-dialog{
    width: 90%;
    padding: 5%;
    margin: 50% auto;
    border-radius: 5px;
    background-color: #fff;
  }
  .modal-header{
    font-size: 16px;
    line-height: 20px;
  }
  .modal-body{
    color: #666;
    margin: 5% 0;
  }
  .modal-footer{
    height: 20px;
    line-height: 20px;
    color: #00bb99;
    text-align: right;
  }
  .modal-footer span{
    float: right;
    margin-left: 10px;
  }
</style>