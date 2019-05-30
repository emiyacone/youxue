const db = wx.cloud.database(
  console.log('登陆初始化数据库成功')
)
Page({

  /**
   * 页面的初始数据
   */
  data: {
    students:[
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var cid=parseInt(options.cid);
    var that=this;
    db.collection('courses').where({
      cid:cid
    }).get().then(res => {
        console.log(res);
        if(res.data.length==0)
        {
          wx.showToast({
            title: '暂无学生',
            icon:'none'
          })
        }
        else{
          that.setData({
            students: res.data[0].students
          })
        }
      
    })
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