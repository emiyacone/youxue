const db = wx.cloud.database(
  console.log('登陆初始化数据库成功')
)
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab:0,
    dates:['全部','今天','明天','3.23','3.24'],
    students: [{
      avatarurl:'https://www.xiaoxiaochang.com/src/6619235921072317805.png',
        time:'20:30',
        coursetitle:'JAVA基础',
        nickName:'唐大仕',
        statecolor:'#ddd',
        state:'已结束',
        type:'default'
      },
      {
        avatarurl: 'http://edu-image.nosdn.127.net/4262883788D369C4B9952BFBE7C0A008.jpeg?imageView&thumbnail=120y120&quality=100',
        time: '20:30',
        coursetitle: '高级程序设计',
        nickName: '车万翔',
        statecolor: '#ddd',
        state: '已结束',
        type: 'default'
      }
    ]
  },
  getindex:function(e){
 console.log(e);
    let index = e.currentTarget.dataset.id;
    this.setData({
      currentTab: index
    })
 console.log(index);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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