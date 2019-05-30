//logs.js
var util = require('../../../utils/util.js')
Page({
  data: {
    navTab: ["考试安排"],
    currentNavtab: "0",
    tongzhis: [
      {
        title: '考试安排通知',
        message: '请今天下午13：30的jsj105教室学生暂时先到jsj204考试'
      },
     
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
