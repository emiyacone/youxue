//logs.js
var util = require('../../../utils/util.js')
Page({
  data: {
    navTab: ["教务通知"],
    currentNavtab: "0",
    tongzhis: [
      {
        title: '星期几进行复习',
        message: '星期一'
      }
    ]
  },
  onLoad: function () {

  },
  switchTab: function (e) {
    this.setData({
      currentNavtab: e.currentTarget.dataset.idx
    });
  }
})
