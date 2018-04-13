

// lodash方法
import lodash from 'lodash';

// 公共方法
let methods = {
  /**
   * [swap 交换数组位置]
   * @param  {[Array]} list [原始数组]
   * @param  {[Number]} from [开始位置]
   * @param  {[Number]} to   [目标位置]
   * @return {[Array]}      [原数组]
   */
  swap(list, from, to) {
    const temp = list[to];
    list[to] = list[from];
    list[from] = temp;
    return list;
  },

  /**
   * [filterValue 获取keyArray包含属性的对象]
   * @param  {[Object]} orginData [原对象]
   * @param  {[Array]} keyArray  [所需属性]
   * @return {[Object]}          [新对象]
   */
  filterValue(orginData, keyArray) {
    let nobj = {};
    lodash.forEach(orginData, (value, key) => {
      var isNeed = lodash.indexOf(keyArray, key) > -1;
      if (isNeed) {
        nobj[key] = value;
      }
    });
    return nobj;
  },

  // 计算2日期之间相差的周数或天数
  getDateDiff(date, date2, day) {
    // 参数不能为空
    if (!date || !date2) return "";

    // 格式化传入日期获得毫秒数
    var start = new Date(date.replace(new RegExp("-", "gm"), "/"));
    var end = new Date(date2.replace(new RegExp("-", "gm"), "/"));
    var diff = end > start ? Math.ceil((end - start) / (1000 * 60 * 60 * 24)) : 0;

    // 取正数
    if (diff < 0) {
      diff *= -1;
    };

    if (day == 'day') {
      // 存在第三个参数 'day' 则返回当前的天数
      return diff;
    } else {
      // 否则返回当前周数
      var w = Math.ceil(diff / 7);
      return w;
    };
  },

  isPhone(str) {
    var reg = /^1(3|4|5|7|8)\d{9}$/;
    return reg.test(lodash.trim(str));
  },

  // 格式化手机号
  phoneFormat(str, symbol) {
    let tel = lodash.trim(str);
    let gap = symbol || ' ';
    if (this.isPhone(tel)) {
      tel = tel.substring(0, 3) + gap + tel.substring(3, 7) + gap + tel.substring(7, 11);
    }
    return tel;
  },
  /**
   *
   * @param {*} n
   */
  formatNumber(n) {
    const str = n.toString()
    return str[1] ? str : `0${str}`
  },
  /**
   * [ formatTime 格式化时间 ]
   * @param {[Date]} date
   * @return {[String]} [eg:'2018/04/12 17:02:48']
   */
  formatTime(date) {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()

    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()

    const t1 = [year, month, day].map(methods.formatNumber).join('/')
    const t2 = [hour, minute, second].map(methods.formatNumber).join(':')

    return `${t1} ${t2}`
  }
};


lodash.assignIn(methods, lodash);
export default methods;
