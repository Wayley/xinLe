<template>
  <div class="main" v-bind:class="{ active: checked ,}" @click="change()" :disabled="disabled">
    <div class="item">{{val}}</div>
  </div>
</template>

<script>
const prefixCls = this.appName + 'checkbox';
console.log(this._, 909);
export default {
  props: {
    checked: {
      type: Boolean,
      default: false
    },
    val: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    // checkboxClasses() {
    //   return [
    //     `${prefixCls}`,
    //     {
    //       [`${prefixCls}-checked`]: this.currentValue,
    //       [`${prefixCls}-disabled`]: this.disabled,
    //       [`${prefixCls}-indeterminate`]: this.indeterminate
    //     }
    //   ];
    // }
  },
  watch: {
    disabled(disabled) {
      if (disabled) {
        this.checked = false;
      }
    }
  },
  methods: {
    change() {
      this.checked = !this.checked;
      var date = this._.formatTime(new Date());
      console.log(date);
    }
  }
};
</script>

<style scoped>
.main {
  padding: 5px;
  display: inline-block;
}
.item {
  text-align: center;
  background: #f5f5f5;
  color: #999;
  line-height: 24px;
  font-size: 12px;
}
.active .item {
  color: #00ae66;
  background: #d9f3e8;
}
.checkbox-disabled {
  cursor: not-allowed;
}
</style>
