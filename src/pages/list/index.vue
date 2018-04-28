<template>

  <div class="container">
    <div class="mask" v-show="showMask"></div>
    <!-- 列表 -->
    <div class="search" v-show="!showMask">
      <i class="icon"></i>
      <input type="text" placeholder="请输入小区名或者商圈名">
    </div>
    <ul class="queryList">
      <li @click="showList(item.key)" v-for="(item,index) in queryList" :key="item.key">
        {{item.name}}
        <i class="icon"></i>
      </li>
    </ul>
    <!-- 地区选择 -->
    <!-- <div class="area" v-show="listDisplay['area']">
      <ul class="area-first">
        <li>区域</li>
        <li>地铁</li>
      </ul>
      <ul class="area-second">
        <li v-for="(item,index) in listSecond" :key="index" @click="secondChange(index)">
          {{item.name}}
        </li>
      </ul>
      <ul class="area-third" v-show="showThird">
        <li v-for="(item,index) in listSecond" :key="index">
          {{item.name}}
        </li>
      </ul>
    </div> -->
    <!-- 售价选择 -->
    <div class="price" v-show="listDisplay['price']">
      <p class="title">价格区间(万)</p>
      <div class="price-search">
        <input type="text" placeholder="最小">
        <div style="margin:0 10px">-</div><input type="text" placeholder="最大">
      </div>
      <ul class="dot">
        <li v-for="(item,index) in priceList" @click="priceChexk(index)" :key="index">
          <span>{{item.name}}</span>
        </li>
      </ul>
      {{group}}
      <CheckboxGroup v-model="group" :list="list"></CheckboxGroup>
      <!-- <Checkbox :checked="mychecked" :val="myval"></Checkbox> -->
    </div>
  </div>
</template>
<script>
import CheckboxGroup from '@/components/checkbox-group';

export default {
  components: {
    CheckboxGroup
  },
  data() {
    return {
      group: [1, 2, 3, 7],
      list: [
        { value: 1, name: '100万以下' },
        { value: 2, name: '100-200万' },
        { value: 3, name: '200-300万' },
        { value: 4, name: '300-400万' },
        { value: 5, name: '400-700万' },
        { value: 6, name: '700-1000万' },
        { value: 7, name: '1000万以上' }
      ],
      showMask: false,
      queryList: [
        {
          name: '地区',
          key: 'area'
        },
        {
          name: '售价',
          key: 'price'
        },
        {
          name: '房型',
          key: 'roomType'
        },
        {
          name: '更多',
          key: 'more'
        }
      ],
      listDisplay: {
        area: false,
        price: true
      },
      listSecond: [], // 二级地区列表
      listThird: [], //三级地区列表
      showThird: false,
      areaList: [
        {
          name: '南山区',
          key: 'nanshan',
          children: [
            {
              name: '科技园',
              key: 'kejiyuan'
            },
            {
              name: '后海',
              key: '后海'
            },
            {
              name: '深大',
              key: 'shenda'
            }
          ]
        },
        {
          name: '宝安区',
          key: 'baoan',
          children: [
            {
              name: '宝安',
              key: 'baoan'
            },
            {
              name: '福永',
              key: 'fuyong'
            },
            {
              name: '固戍',
              key: 'gushu'
            }
          ]
        },
        {
          name: '福田区',
          key: 'futian',
          children: [
            {
              name: '福田口岸',
              key: 'kejiyuankouan'
            },
            {
              name: '香蜜湖',
              key: 'xiangmihu'
            },
            {
              name: '车公庙',
              key: 'chegongmiao'
            }
          ]
        }
      ],
      subwayList: [
        {
          name: '1号线',
          key: 1,
          children: [
            {
              name: '福田口岸',
              key: 'kejiyuankouan'
            },
            {
              name: '香蜜湖',
              key: 'xiangmihu'
            },
            {
              name: '车公庙',
              key: 'chegongmiao'
            }
          ]
        },
        {
          name: '2号线',
          key: 2,
          children: [
            {
              name: '2号线-1',
              key: 'kejiyuankouan'
            },
            {
              name: '2号线-2',
              key: 'xiangmihu'
            },
            {
              name: '2号线-3',
              key: 'chegongmiao'
            }
          ]
        },
        {
          name: '3号线',
          key: 3,
          children: [
            {
              name: '3号线-1',
              key: 'kejiyuankouan'
            },
            {
              name: '3号线-2',
              key: 'xiangmihu'
            },
            {
              name: '3号线-3',
              key: 'chegongmiao'
            }
          ]
        }
      ],
      isThree: false,
      lastName: '',
      priceList: [
        { key: 1, name: '100万以下' },
        { key: 2, name: '100-200万' },
        { key: 3, name: '200-300万' },
        { key: 4, name: '300-400万' },
        { key: 5, name: '400-700万' },
        { key: 6, name: '700-1000万' },
        { key: 7, name: '1000万以上' }
      ],
      priceCheckedList: []
    };
  },
  created() {
    this.listSecond = this.areaList;
  },
  methods: {
    showList(type) {
      if (this.lastName) {
        this.listDisplay[this.lastName] = false;
      }
      this.listDisplay[type] = true;
      this.lastName = type;

      console.log(type);
      // this.showMask = !this.showMask
      this.showMask = true;
    },
    secondChange(index) {
      this.listThird = this.listSecond[index]['children'];
      this.showThird = true;
    },
    priceChexk(index) {
      console.log(index);
      const item = this.priceList[index];
      this.priceCheckedList.push(item);
    }
  }
};
</script>
<style scoped>
/* 房源列表 */
.mask {
  /* height: 100%; */
  width: 100%;
  background: #808080;
  position: absolute;
  top: 300px;
  left: 0;
  right: 0;
}
.search {
  width: 100%;
  background: #eee;
  padding: 7px 0px;
  border-radius: 5px;
}
.search .icon {
  font-size: 12px;
}
.search input {
  margin-left: 20px;
  margin-right: 20px;
  font-size: 16px;
}
.queryList {
  display: flex;
  width: 100%;
  margin-top: 10px;
  font-size: 16px;
}
.queryList li {
  width: 25%;
  text-align: center;
  position: relative;
}
.queryList li i.icon {
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 6px solid #5f5f5f;
  position: absolute;
  right: 10px;
  top: 50%;
  margin-left: 25px;
}
/* 地区选择 */
.area {
  display: none;
  width: 100%;
  display: flex;
  font-size: 14px;
  margin-top: 10px;
}
.area-first,
.area-second,
.area-third {
  flex: 1;
}
.area li {
  border-bottom: 1px solid #e5e5e5;
  padding: 10px 20px;
  margin: 0 10px;
}
.area-first {
  background: #f0f0f0;
}
.area-first li {
  margin: 0px;
}
.area-second {
  flex: 1;
}
.area-third {
  flex: 1;
}
/* 售价选择 */
.price {
  width: 100%;
}
.price .title {
  font-size: 14px;
  margin: 10px 0;
}
.price-search {
  display: flex;
  margin-bottom: 10px;
}
.price-search input {
  text-align: center;
  border: 1px solid #ccc;
  font-size: 13px;
  border-radius: 3px;
  flex: 1;
}
.dot {
  /* display: flex; */
  /* width: 100%; */
}
.dot li {
  display: inline-block;
  color: #999;
  width: 25%;
  font-size: 12px;
  padding: 5px;
  text-align: center;
  box-sizing: border-box;
}
.dot li span {
  display: block;
  background: #f5f5f5;
  line-height: 24px;
  border-radius: 3px;
}
.dot li.active span {
  color: aqua;
  background: aquamarine;
}
</style>

