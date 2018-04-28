<template>
  <div class="main" v-bind:class="{ active: checked }" @click="change(label)" :disabled="disabled">
    <span class="item">{{name}}</span>
  </div>
</template>

<script>
const prefixCls = this.appName + 'checkbox';
// console.log(this._, 909);
import { findComponentUpward } from '../utils/index';
export default {
  props: {
    value: {
      type: [String, Number],
      required: true
    },
    label: {
      // 唯一标识
      type: [String, Number],
      default: ''
    },
    name: {
      type: [String, Number],
      default: ''
    },
    checked: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      curData: {
        value: this.value,
        checked: this.checked
      },
      // parent: findComponentUpward(this, 'CheckboxGroup'),
      parent: null,
      isGroup: false
    };
  },
  mounted() {
    // this.parent = findComponentUpward(this, 'CheckboxGroup');
    // if (this.parent) this.isGroup = true;
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
    change(key) {
      this.checked = !this.checked;
      // var date = this._.formatTime(new Date());
      this.curData.checked = this.checked;
      this.$emit('input', this.curData);
      // this.$parent.change(this.curData);
      console.log(
        this.$parent.$options.name,
        9090,
        findComponentUpward(this, 'CheckboxGroup')
      );
    }
  }
};
</script>

<style scoped>
.main {
  display: inline-block;
  color: #999;
  width: 25%;
  font-size: 12px;
  padding: 5px;
  /* margin: 0 5px; */
  text-align: center;
  box-sizing: border-box;
}
.item {
  display: block;
  background: #f5f5f5;
  line-height: 24px;
  border-radius: 3px;
}
.active .item {
  color: #00ae66;
  background: #d9f3e8;
}
.checkbox-disabled {
  cursor: not-allowed;
}
</style>
