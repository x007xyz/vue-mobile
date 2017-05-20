<template>
	<div class="header-bar">
		<div class="header-left" v-on:click="goBack" v-if="showBack">
			<span class="iconfont icon-arrowleft"></span>
		</div>
		<div class="header-title" :style="{marginLeft: showBack ? '50px' : '0'}">
      <div class="header-table">
        <div class="header-cell" :style="{textAlign: align}">
          <slot></slot>
        </div>
      </div>
    </div>
		<!-- <div class="header-right">
			<slot name="right"></slot>
		</div> -->
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
	$header-height:  56px !default;
  .header-bar{
		width: 100%;
		height: $header-height;
    background-color: #3d444d;
    color: #fff;
		// border-bottom: 1px solid #bfbfbf; 
    // box-shadow: 0 1px 6px #ccc;
		position: absolute;
	}
	.header-left,.header-right{
		position: absolute;
		width: 40px;
		height: $header-height;
    line-height: $header-height;
    text-align: center;
    .icon{
      line-height: $header-height;
    }
	}
	.header-right{
		top: 0;
		right: 0;
	}
	.header-title{
    text-align: center;
    height: $header-height;
    font-size: 16px;
    position: relative;
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