const db = wx.cloud.database(
)
Page({
  /**
   * 页面的初始数据
   */
  data: {
    backurl:'cloud://uploadimage-60d0e7.7570-uploadimage-60d0e7/right1.png',
    lists: [
    ],
    indexId: 0,
  },
  // 左侧点击事件
  jumpIndex(e) {
    let index = e.currentTarget.dataset.menuindex
    let that = this
    that.setData({
      indexId: index,
      backurl: 'cloud://uploadimage-60d0e7.7570-uploadimage-60d0e7/right2.png',
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var cid=parseInt(options.cid);
    db.collection('courses').where({
      cid: cid
    }).get().then(res => {
      console.log(res);
      if (res.data.length == 0) {
        wx.showToast({
          title: '暂无学生',
          icon: 'none'
        })
      }
      else {
        that.setData({
          lists: res.data[0].students
        })
      }

    })
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          winHeight: res.windowHeight
        });
      }
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
