
Page({
  data: {
  },
  kaoqin:function(){
wx.navigateTo({
  url: '../teacher/kaoqin/kaoqin',
})
  },
  getopenid: function () {
    var that = this;
    console.log('suucess')
    // var getInfo = function (thisObj) {
    // var that = thisObj;
    wx.login({
      success: function (res) {
        if (res.code) {
          //获取openId
          wx.cloud.callFunction({
            name: 'login',
            data: {},
            complete: res => {
              console.log('callFunction test result: ', res)
              var openid = res.result.openid;
              wx.setStorageSync('openid', res.result.openid)

            },
          })
        }
      }
    });
    // } 
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              console.log('授权成功success')
              // // 可以将 res 发送给后台解码出 unionId
              // this.globalData.userInfo = res.userInfo

              // // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // // 所以此处加入 callback 以防止这种情况
              // if (this.userInfoReadyCallback) {
              //   this.userInfoReadyCallback(res)
              // }
            }
          })
        } else {
          // 未授权，跳转到授权页面
          wx.reLaunch({
            url: '/pages/sq/sq',
          })
        }
      }
    })
    this.getopenid();
  },

 
})