<template>
  <div class="container" @click="clickHandle('test click', $event)">
    <!-- 搜索 -->
    <div class="top-search">
      <img src="http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg" alt="">
      <div class="search">
        <span class="city" @click="getCity">{{city}}
          <i></i>
        </span>
        <input type="text" placeholder="你想住哪里？">
      </div>
    </div>
    <!-- 二级菜单入口 -->
    <div class="menu">
      <ul>
        <li v-for="(item,index) in menu" @click="goTo(item.url)" :key="index">
          <div class="icon-menu">
            <img :src="item.iocnUrl">
          </div>
          <p>{{item.name}}</p>
        </li>
      </ul>
    </div>

    <div class="h-recommend">
      <h2>推荐</h2>
      <ul class="h-list">
        <li v-for="(item,index) in recommendList" :key="index" v-bind:class="{noborder: index==recommendList.length-1}">
          <div class="h-cover">
            <img :src="item.img" :alt="item.tittle">
          </div>
          <div class="h-info">
            <div class="h-tittle">{{item.tittle}}</div>
            <div class="h-cut">{{item.cut}}</div>
            <div class="h-minor">
              <span class="price-total">{{item.totalPrice}}</span>
              <span class="unit-price">{{item.unitPrice}}</span>
            </div>
            <div class="tag-box">
              <span class="tag" v-bind:class="{tagblue:tag.type==1,tagyellow:tag.type==2,taggreen:tag.type==3,tagbabyblue:tag.type==4}" v-for="(tag,i) in item.tags" :key="i">{{tag.tag}}</span>
            </div>
          </div>
        </li>
      </ul>
      <button class="btn-more" @click="goTo('../list/list')">查看更多</button>
    </div>

    <div class="userinfo" @click="bindViewTap">
      <img class="userinfo-avatar" v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" background-size="cover" />
      <div class="userinfo-nickname">
        <card :text="userInfo.nickName"></card>
      </div>
    </div>
    <div class="usermotto">
      <div class="user-motto">
        <p>34</p>
        <card :text="motto"></card>
      </div>
    </div>

    <form class="form-container">
      <input type="text" class="form-control" v-model="motto" placeholder="v-model" />
      <input type="text" class="form-control" v-model.lazy="motto" placeholder="v-model.lazy" />
    </form>

  </div>
</template>

<script>
import card from '@/components/card'
import '../../assets/css/base.css'
export default {
  data() {
    return {
      city: '深圳',
      motto: 'Hello World',
      userInfo: {},
      menu: [
        {
          name: '二手房',
          iocnUrl:
            'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
          url: ''
        },
        {
          name: '新房',
          iocnUrl:
            'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
          url: ''
        },
        {
          name: '租房',
          iocnUrl:
            'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
          url: ''
        },
        {
          name: '估价',
          iocnUrl:
            'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
          url: ''
        }
      ],
      recommendList: [
        {
          img:
            'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
          tittle: '国展经典两房 满二税少 居家安静，双地铁口物业',
          cut: '2室1厅/50m²/东北/布吉关',
          totalPrice: '300万',
          unitPrice: '60000元/平',
          tags: [
            { type: 1, tag: '地铁' },
            { type: 2, tag: '满两年' },
            { type: 4, tag: '随时看房' },
            { type: 3, tag: '有电梯' }
          ]
        },
        {
          img:
            'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
          tittle: '国展经典两房 满二税少 居家安静，双地铁口物业',
          cut: '2室1厅/150m²/东北/布吉关',
          totalPrice: '2300万',
          unitPrice: '5400元/平',
          tags: [
            { type: 1, tag: '地铁' },
            { type: 2, tag: '满两年' },
            { type: 4, tag: '随时看房' }
          ]
        },
        {
          img:
            'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
          tittle: '国展经典两房 满二税少 居家安静，双地铁口物业',
          cut: '2室1厅/100m²/东北/布吉关',
          totalPrice: '540万',
          unitPrice: '23000元/平',
          tags: [
            { type: 1, tag: '地铁' },
            { type: 4, tag: '随时看房' },
            { type: 2, tag: '满两年' }
          ]
        }
      ]
    }
  },

  components: {
    card
  },

  methods: {
    goTo(path) {
      const url = path || '../index/index'
      wx.navigateTo({ url })
    },
    bindViewTap() {
      const url = '../logs/logs'
      wx.navigateTo({ url })
    },
    getCity() {
      const url = '../city/city'
      // wx.navigateTo({ url })
      wx.getLocation({
        success: function(res) {
          wx.request({
            url:
              'http://api.map.baidu.com/geocoder/v2/?ak=btsVVWf0TM1zUBEbzFz6QqWF&location=' +
              res.latitude +
              ',' +
              res.longitude +
              '&output=json&pois=1',
            data: {},
            header: { 'Content-Type': 'application/xml' },
            dataType: 'json',
            success: function(ops) {
              console.log(ops.data)
            }
          })
        },
        fail: function() {
          console.log('fail')
        }
      })
    },
    getUserInfo() {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: res => {
              this.userInfo = res.userInfo
            }
          })
        }
      })
    },
    clickHandle(msg, ev) {
      console.log('clickHandle:', msg, ev)
    }
  },

  created() {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo()
  }
}
</script>

<style scoped>
/* 顶部搜索 */
.top-search {
  position: relative;
  width: 100%;
}
.top-search img {
  width: 100%;
  height: 200px;
}
.search {
  background: #fff;
  position: absolute;
  top: 10px;
  left: 20px;
  right: 20px;
  display: flex;
  padding: 10px;
}
.search .city {
  padding-right: 25px;
  position: relative;
}
.search i {
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
.menu {
  width: 100%;
}
.menu ul {
  padding: 20px 0;
  width: 100%;
  display: flex;
}
.menu li {
  width: 25%;
  text-align: center;
}
.menu li .icon-menu {
  text-align: center;
}
.menu li .icon-menu img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
/* 推荐 */
.h-recommend {
  width: 100%;
}
.h-recommend .h-list li {
  display: flex;
  padding: 20px 0;
  border-bottom: 1px solid #ccc;
}
.h-recommend .h-list li.noborder {
  border-bottom: none;
}
.h-list li .h-cover {
  width: 40%;
}
.h-list .h-cover img {
  width: 100%;
  height: 75%;
}
.h-list .h-info {
  padding-left: 20px;
}
.h-list .h-info .h-tittle {
  font-size: 18px;
  line-height: 24px;
  color: #000;
}

.h-list .h-info .h-cut {
  font-size: 14px;
  margin: 4px 0;
  color: #8c8c8c;
}
.h-list .h-info .h-minor {
  font-size: 15px;
  margin: 4px 0;
}
.h-list .h-info .h-minor .price-total {
  font-size: 18px;
  color: red;
  margin-right: 5px;
}
.h-list .h-info .h-minor .unit-price {
  color: #666;
}
.h-list .h-info .tag-box {
  font-size: 14px;
}
.h-recommend .btn-more {
  border: none;
  background: #ccc;
}

.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #aaa;
}

.usermotto {
  margin-top: 150px;
}

.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
}
</style>
