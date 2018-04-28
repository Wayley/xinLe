<template>
  <div class="group">
    {{datas}}
    <Checkbox v-for="(item,index) in list" :key="item.value" :checked="checkItem(item.value)" :name="item.name" :label="item.value"></Checkbox>
  </div>
</template>

<script>
import Checkbox from '@/components/checkbox';
export default {
  name: 'CheckboxGroup',
  components: {
    Checkbox
  },
  props: {
    list: {
      type: Array,
      default() {
        return [];
      }
    },
    value: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      modelList: this.value,
      datas: true
    };
  },
  methods: {
    checkItem(key) {
      // console.log(this.value, 'groupModel');
      var index = _.findIndex(this.value, o => {
        return o == key;
      });
      return this.value.indexOf(key) > -1;
    },
    chnage(data) {
      console.log(9099990, data);
      // this.modelList = data;
    }
  }
};
</script>

<style scope>

</style>
