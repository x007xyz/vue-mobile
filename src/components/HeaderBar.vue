<template>
	<div class="header-bar is-fixed">
		<div class="header-left">
			<span class="iconfont icon-arrowleft" v-on:click="goBack" v-if="showBack"></span>
		</div>
		<div class="header-title">
      <slot></slot>
    </div>
		<div class="header-right">
			<slot name="right"></slot>
		</div> 
	</div>
</template>

<script>
export default {
  name: 'HeaderBar',
  props: {
    showBack: {
      type: Boolean,
      default: true
    },
    align: {
      type: String,
      default: 'center'
    },
    customBack: {
      type: Function
    }
  },
  data () {
    return {
    }
  },
  methods: {
    goBack () {
      if (this.customBack) {
        this.customBack()
      } else {
        window.history.go(-1)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../../educ-common/scss/_flex.scss';
  @import '../../../educ-common/scss/variables.scss';
	$header-height:  56px !default;
  .header-bar.is-fixed{
    right: 0;
    top: 0;
    left: 0;
    position: fixed;
    z-index: 1;
  }
  .header-bar{
    @include flexbox;
    @include align-items(center);
		width: 100%;
		height: $header-height;
    background-color: #3d444d;
    color: #fff;
    box-sizing: border-box;
    line-height: 1;
    padding: 0 10px;
    text-align: center;
    // @extend .z-depth-1;
		// border-bottom: 1px solid #bfbfbf; 
    // box-shadow: 0 1px 6px #ccc;
	}
	.header-left,.header-right{
		@include flex(.5);
	}
	.header-right{
		text-align: right;
	}
  .header-left{
    text-align: left;
  }
	.header-title{
    @include flex(1);
    text-align: center;
    font-size: 16px;
    vertical-align: middle;
	}
  .header-table{
    height: 100%;
    width: 100%;
    display: table;
  }
  .header-cell{
    display: table-cell;
    vertical-align: middle;
  }
	.icon-back span{
		width: 20px;
		height: 20px;
		margin: 12px 0 0 10px;
		background-position: -20px 0;
	}
</style>
