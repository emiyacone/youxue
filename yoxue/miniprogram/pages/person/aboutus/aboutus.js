// pages/person/aboutus/aboutus.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    backurl: '/pages/images/backimage.png',
    linebackurl:'/pages/images/lineback.png',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    let base64 = wx.getFileSystemManager().readFileSync(that.data.backurl, 'base64');
    let base642 = wx.getFileSystemManager().readFileSync(that.data.linebackurl, 'base64');
    that.setData({
      backurl: 'data:image/jpg;base64,' + base64,
      linebackurl: 'data:image/jpg;base64,' + base642
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