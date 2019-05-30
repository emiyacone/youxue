// pages/courses/teachercourse/zxlx/zxlx.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    plus: 'cloud://uploadimage-60d0e7.7570-uploadimage-60d0e7/plus.png',
    lianxis: [{
      number: 23,
      title: 'java第一次测试',
      time: '2018/9/1 18:24',
      btap:'gettest'
    }],
    ziyuans: [{
        background: 'cloud://uploadimage-60d0e7.7570-uploadimage-60d0e7/Word文档框.png',
        title: 'Word文档',
        name: '试卷模板',
        time: '2019-3-1',
        tips: 'Tips:点击下载试卷模板，填写试卷内容',
      },
      {
        background: 'cloud://uploadimage-60d0e7.7570-uploadimage-60d0e7/Word文档框.png',
        title: 'Word文档',
        name: 'java第一次测试',
        time: '2019-3-1',
      },
      {
        background: 'cloud://uploadimage-60d0e7.7570-uploadimage-60d0e7/Word文档框.png',
        title: 'Word文档',
        name: 'java第二次测试',
        time: '2019-3-20',
      },
    ]
  },

  gettest:function(){
     wx.navigateTo({
       url: '../zxlx/test/test',
     })
  },
  getmoban: function() {
    console.log("打开模板")
    wx.cloud.downloadFile({
      fileID: 'cloud://uploadimage-60d0e7.7570-uploadimage-60d0e7/试卷模板.docx', // 文件 ID
      success: res => {
        // 返回临时文件路径
        console.log(res.tempFilePath)
        var filePath = res.tempFilePath;   
        wx.openDocument({
          filePath: filePath,
          success: function (res) {
            console.log('打开文档成功')
          }
        })
      },
      fail: console.error
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var type = wx.getStorageSync('type');
    var that = this;
    if (type == '老师') {
      that.setData({
        studenthide: false,
        teacherhide: true
      })
    } else if (type == '学生') {
      that.setData({
        studenthide: true,
        teacherhide: false
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})