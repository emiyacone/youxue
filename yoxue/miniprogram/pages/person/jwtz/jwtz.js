//logs.js
var util = require('../../../utils/util.js')
Page({
  data: {
    navTab: ["教务通知"],
    currentNavtab: "0",
    tongzhis:[
      {
      title:'通知',
      message:'请今天下午13：30的jsj105教室学生暂时先到jsj204上课.'
    },
      {
        title: '通知',
        message: '请同学们抓紧时间去固定地点进行四六级缴费,过期补办比较麻烦。'
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
