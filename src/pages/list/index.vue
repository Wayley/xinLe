<template>

  <div class="container">
    <!-- 列表 -->
    <div class="search">
      <i class="icon"></i>
      <input type="text" placeholder="请输入小区名或者商圈名">
    </div>
    <ul class="queryList">
      <li>售价
        <i class=""></i>
      </li>
      <li>售价</li>
      <li>售价</li>
      <li>售价</li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  }
}
</script>
<style scoped>
.search {
  width: 100%;
  background: #eee;
  padding: 10px 0px;
  border-radius: 5px;
}
.search .icon {
  font-size: 12px;
}
.search input {
  margin-left: 20px;
  font-size: 16px;
}
.queryList {
  display: flex;
  width: 100%;
}
.queryList li {
  width: 25%;
  text-align: center;
}
</style>

