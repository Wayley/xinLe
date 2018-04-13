<template>
  <div class="group">
    <Checkbox v-for="(item,index) in list" :key="index" :checked="checkItem(item.value)" :val="item.name"></Checkbox>
  </div>
</template>

<script>
import Checkbox from '@/components/checkbox'
export default {
  components: {
    Checkbox
  },
  props: {
    list: {
      type: Array,
      default() {
        return []
      }
    },
    value: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    checkItem(key) {
      var index = _.findIndex(this.value, o => {
        return o == key
      })
      return this.value.indexOf(key) > -1
    }
  }
}
</script>

<style>
.group {
}
ul {
  width: 100%;
}
ul li {
  display: inline-block;
  color: #999;
  width: 25%;
  font-size: 12px;
  padding: 5px;
  text-align: center;
  box-sizing: border-box;
}
ul li span {
  display: block;
  background: #f5f5f5;
  line-height: 24px;
  border-radius: 3px;
}
ul li.active span {
  color: aqua;
  background: aquamarine;
}
</style>
