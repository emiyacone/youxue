Page({
  data:{
    array:[{
      name:'<    Python    >',
      beny:'92',
      paiming:'11',
      shans:'3',
      zuigao:'92',
      zuidi:'76',
      gaole:'16',
      cjfenxi:'近几次成绩都考得不错，在稳中进步。希望继续保持，在未来的学习生活中更上一层楼'
    },
    
      {
        name: '<    java    >',
        beny: '90',
        paiming: '11',
        shans: '3',
        zuigao: '92',
        zuidi: '76',
        gaole: '16',
 cjfenxi: '发挥比较稳定，基础夯得很牢。可以在此基础上多做一些拓展。'
      },
      {
        name: '<    c++    >',
        beny: '99',
        paiming: '11',
        shans: '3',
        zuigao: '92',
        zuidi: '76',
        gaole: '16',
        cjfenxi: '虽然近几次成绩都考得不错，但是有时不够稳定，需要控股基础，再做突破。'
      },
    ],
    index:0,
    backurl:'/pages/images/chengjifenxi.png',
    fenxi:'需要侧重数学和英语，化学继续保持'
  },

  bindPickerChange1(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    var array = this.data.array
    var index = parseInt(e.detail.value)
    let base64 = wx.getFileSystemManager().readFileSync('/pages/images/chengjifenxi3.2.png', 'base64');
    this.setData({
      index: e.detail.value,
      backurl: 'data:image/jpg;base64,' + base64
    })
  },
  canvasIdErrorCallback: function (e) {
    console.error(e.detail.errMsg)
  },
  onLoad:function(options){
    var that = this;
    let base64 = wx.getFileSystemManager().readFileSync(that.data.backurl, 'base64');
    that.setData({
      backurl: 'data:image/jpg;base64,' + base64
    });
  },
  onReady: function (e) {
    //引入文件
    var chartUtilFile = require("../../../utils/wxChart/chartUtil.js");
    //实例化
    var chartUtilObj = chartUtilFile.chartUtil.createObj();
    //配置参数
    var canvas_id = "first_canvas";
    var color = ["#DC143C", "#00008B", "#1E90FF", "#8B4513", "#006400"];
    var data = [10, 20, 20, 40, 10];
    var data_name = ["数学", "英语", "语文", "化学", "计算机"];
    var options = {
      "page_obj": this,
      "chart_type": chartUtilFile.chartType.pie,
      "back_color": "#77D1F6",
      "color": color,
      "data": data,
      "centerX": 150,
      "centerY": 150,
      "radius": 100,
      "data_name": data_name,
      "name": "成绩分析图"
    };
    //初始化
    chartUtilObj.init(canvas_id, options);
    //开始画图
    chartUtilObj.draw();
  }
})