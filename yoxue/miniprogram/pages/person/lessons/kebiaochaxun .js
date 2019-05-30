// pages/person/lessons/kebiaochaxun .js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    xueyuan:'点击选择学院',
    banji:'点击选择班级',
    array1:[],
    index1:0,
    index2:0,
    array2:[]
  },
  getkcb:function(e)
{
    var banji = this.data.banji;
  console.log(e);
    wx.request({
      url: 'https://www.xiaoxiaochang.com/courses/servlet/ClassServlet?action=QueryTimeTable&bj='+banji,
      success(res) {
        console.log(res);
      }
    })
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    wx.request({
      url: 'https://www.xiaoxiaochang.com/courses/servlet/ClassServlet?action=QueryAll',
      success(res){
        console.log(res);
        that.setData({
          array1:res.data.academys
        })
      }
    })

  },
  bindPickerChange1(e) {
    var that=this;
    console.log('picker发送选择改变，携带值为', e.detail.value)
    var array = this.data.array1
    var index = parseInt(e.detail.value)
    var xueyuan = array[index];
    this.setData({
      index1: e.detail.value,
      xueyuan: xueyuan
    })
    wx.request({
      url: 'https://www.xiaoxiaochang.com/courses/servlet/ClassServlet?action=QueryClass&academy=' + xueyuan,
      success(res) {
        console.log(res);
        that.setData({
          array2:res.data.classes
        })
      }
    })
  },

  bindPickerChange2(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    var array = this.data.array2
    var index = parseInt(e.detail.value)
    var banji = array[index].cname;
    this.setData({
      index2: e.detail.value,
      banji: banji
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