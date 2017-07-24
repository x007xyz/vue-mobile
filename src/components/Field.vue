<template>
  <div class="flex field align-items-center">
    <div class="field-label">
      <slot></slot>
    </div>
    <div class="field-value flex flex-item">
      <input :type="type" :placeholder="placeholder" class="field-core" :value="value" @input="updateValue">
      <div class="field-value-clear" v-show="value !== ''">
        <span class="iconfont icon-error" @click="clearValue"></span>
      </div>
      <div class="field-other flex-item" v-show="type === 'code'">
        <span class="code-label">获取验证码</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {

  name: 'Field',
  props: {
    placeholder: String,
    value: {
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    }
  },
  data () {
    return {

    }
  },
  methods: {
    updateValue (event) {
      let newVal = event.target.value
      this.$emit('input', newVal)
    },
    clearValue () {
      this.$emit('input', '')
    }
  }
}
</script>

<style lang="scss" scoped>
  .field{
    max-height: 54px;
    font-size: 16px;
    padding: 16px 0;
    background-image: linear-gradient(180deg,#cacaca,#cacaca 50%,transparent 0);
    background-size: 120% 1px;
    background-repeat: no-repeat;
    background-position: bottom left;
    background-origin: border-box;
  }
  .field-label{
    margin-right: 8px;
    color: #555555;
  }
  .field-core{
    appearance: none;
    border-radius: 0;
    border: 0;
    flex: 1;
    outline: 0;
    line-height: 1.2;
    font-size: inherit;
    width: 100%;
  }
  .field-other{
    border-left: 1px solid #ccc;
    text-align: right;
  }
  .code-label{
    color: #454545;
    margin-right: 20px;
  }
  .field-value-clear .iconfont{
    color: #ccc;
    font-size: 14px;
  }
  $placeholder: #64717f !default;
  input::-webkit-input-placeholder{
    color: $placeholder;
  }
  input:-moz-placeholder{
    color: $placeholder;
  }
  input:-ms-input-placeholder{
    color: $placeholder;
  }
</style>
