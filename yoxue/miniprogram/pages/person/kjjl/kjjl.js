//logs.js
var util = require('../../../utils/util.js')
Page({
  data: {
    navTab: ["教务通知"],
    currentNavtab: "0",
    tongzhis: [
      {
        title: '2019-3-21',
      numbers:10,
      numbery:10,
      time:'20:30'
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
