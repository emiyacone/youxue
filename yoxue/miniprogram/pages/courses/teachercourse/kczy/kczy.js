// pages/courses/teachercourse/kczy/kczy.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    plus: 'cloud://uploadimage-60d0e7.7570-uploadimage-60d0e7/plus.png',
    ziyuans: [{
        id: 0,
        background: 'cloud://uploadimage-60d0e7.7570-uploadimage-60d0e7/PPT文件框.png',
        title: 'Pdf演示',
        name: '大学计算机',
        time: '2019-3-1'
      },
      {
        id: 1,
        background: 'cloud://uploadimage-60d0e7.7570-uploadimage-60d0e7/excel文件框.png',
        title: 'Excel表格',
        name: 'java第一次测试答案',
        time: '2019-3-1'
      },
      {
        id: 2,
        background: 'cloud://uploadimage-60d0e7.7570-uploadimage-60d0e7/Word文档框.png',
        title: 'Word文档',
        name: 'java框架',
        time: '2019-3-1'
      },

    ]
  },
  getword: function(e) {
  
    wx.showToast({
      title: '正在下载中',
      icon:'loading',
      duration: 5000
    })
    var id = e.currentTarget.id;
    console.log(id);
    if(id==0){
      var filePath = 'https://www.xiaoxiaochang.com/PDFs/1.1.2.pdf';
      wx.downloadFile({
        url: 'https://www.xiaoxiaochang.com/PDFs/1.1.2.pdf',
        success: function (res) {
          console.log('1');
          var filePath = res.tempFilePath;
          wx.openDocument({
            filePath: filePath,
            success: function (res) {
              console.log('打开文档成功')
            }
          })
        }
      })

    }
    else if(id==1){
      wx.cloud.downloadFile({
        fileID: 'cloud://uploadimage-60d0e7.7570-uploadimage-60d0e7/Java第一次测试.xls', // 文件 ID
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
    }
    else if (id == 2) {
      wx.cloud.downloadFile({
        fileID: 'cloud://uploadimage-60d0e7.7570-uploadimage-60d0e7/Java框架.docx', // 文件 ID
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
    }

  },
  uploadfile: function() {
    // wx.chooseMessageFile({
    //   count: 10,
    //   type: 'all',
    //   success(res) {
    //     // tempFilePath可以作为img标签的src属性显示图片
    //     console.log(res);
    //     const tempFilePaths = res.tempFilePaths
    //   }
    // })
    wx.chooseImage({
      success: function(res) {
        console.log(res)
      },
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
        studenthide: false
      })
    } else if (type == '学生') {
      that.setData({
        studenthide: true
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