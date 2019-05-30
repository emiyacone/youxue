
Page({

  data: {
    userInfo: [],
    backurl: '/pages/images/fenl.png',
  },
  tendtostu:function(){
    wx.setStorageSync("type", "学生")
    console.log("stu")
    wx.reLaunch({
      url: '../index/index',
    })
  },
  tendtotea: function () {
    wx.setStorageSync("type", "老师")
    wx.reLaunch({
      url: '../index/index',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    let base64 = wx.getFileSystemManager().readFileSync(that.data.backurl, 'base64');
    that.setData({
      backurl: 'data:image/jpg;base64,' + base64
    });
    wx.getUserInfo({
      success(res) {
        console.log(res);
        that.setData({
          userInfo: res.userInfo
        })
      }
    })
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              console.log('授权成功success')
              console.log(res);
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
   var openid=wx.getStorageSync('openid');
   console.log(openid);
    // wx.request({
    //   url: 'http://47.100.208.107/user/data/',
    //   data:{
    //     // nickname:'emiya',
    //      type:'weixin',
    //     identifier:openid,
    //     credential: 'weixin'
    //   },
    //   method:'GET',
    //   header: {
    //     'content-type': 'application/x-www-form-urlencoded'
    //   },
    //   success(res){
    //       console.log(res);
    //       if(res.data.status=='SUCCESS')
    //       {
    //         console.log(res.data.status)
    //       //  wx.reLaunch({
    //       //    url: '../index/index',
    //       //  })
    //       }
    //   }
    // })
  },

})