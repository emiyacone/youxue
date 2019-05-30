const app = getApp();
var inputVal = '';
var msgList = [];
var windowWidth = wx.getSystemInfoSync().windowWidth;
var windowHeight = wx.getSystemInfoSync().windowHeight;
var keyHeight = 0;

/**
 * 初始化数据
 */
function initData(that) {
  inputVal = '';
  msgList = [{
    speaker: 'server',
    contentType: 'text',
    content: '欢迎来到JAVA基础课程',
    imageurl:'cloud://uploadimage-60d0e7.7570-uploadimage-60d0e7/logo.png'
  }
  ]
  that.setData({
    msgList,
    inputVal
  })
}

/**
 * 计算msg总高度
 */
// function calScrollHeight(that, keyHeight) {
//   var query = wx.createSelectorQuery();
//   query.select('.scrollMsg').boundingClientRect(function(rect) {
//   }).exec();
// }

Page({

  /**
   * 页面的初始数据
   */
  data: {
    cid:0,
    time:0,
    time2: 0,
    scrollHeight: '100vh',
    inputBottom: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    initData(this);
    var that=this;
    var userdata=wx.getStorageSync('userdata');
    console.log(userdata);
    this.setData({
      cusHeadIcon: userdata.avatarUrl,
    });
    var cid=parseInt(options.cid);
    this.setData({
      cid: cid
    })
    this.countdown();
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },
  tostudents:function(){
    var cid=this.data.cid;
    wx.navigateTo({
      url: '../students/students?cid=' + cid,
    })
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
   * 获取聚焦
   */
  focus: function (e) {
    keyHeight = e.detail.height;
    this.setData({
      scrollHeight: (windowHeight - keyHeight) + 'px'
    });
    this.setData({
      toView: 'msg-' + (msgList.length - 1),
      inputBottom: keyHeight + 'px'
    })
    //计算msg高度
    // calScrollHeight(this, keyHeight);

  },

  //失去聚焦(软键盘消失)
  blur: function (e) {
    this.setData({
      scrollHeight: '100vh',
      inputBottom: 0
    })
    this.setData({
      toView: 'msg-' + (msgList.length - 1)
    })

  },

  /**
   * 发送点击监听
   */
  sendClick: function (e) {
    msgList.push({
      speaker: 'customer',
      contentType: 'text',
      content: e.detail.value
    })
    inputVal = '';
    this.setData({
      msgList,
      inputVal
    });
    this.countdown2();
  },
  countdown2: function () {
    var that = this;
    var second = this.data.time2;
    console.log(second);
    if (second == 1) {
      msgList.push({
        speaker: 'server',
        contentType: 'text',
        content:'欢迎欢迎',
        imageurl: 'https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLFAw3j2M457FibTDibrGoL2r0cJByuz4hts0RvS6b6QNnApZvXBZ0Hn9q9GJW7Tp7vbAgOeyGVmxUA/132'
      })
    }
    else if (second == 2) {
      msgList.push({
        speaker: 'server',
        contentType: 'text',
        content: '欢迎欢迎',
        imageurl: 'https://wx.qlogo.cn/mmopen/vi_32/vHvGVjRQ5MUKvBpy8SwUOtILcJ4bmYCmhLFicgjhnLEZDHlNRtbON4qSx7D7zZldDJ8BJu06W7L5MARaTZ0NcYQ/132'
      })
    }
    inputVal = '';
    this.setData({
      msgList,
      inputVal
    });
    if (second == 3) {
      clearTimeout(timecount);
      return;
    }
    var timecount = setTimeout(function () {
      that.setData({
        time2: second + 1
      });
      that.countdown2();
    }, 2000)
  },
  countdown:function(){
    var that=this;
    var second=this.data.time;
    console.log(second);
    if (second==0)
    {
    msgList.push({
      speaker: 'server',
      contentType: 'text',
      content:'有道题不会，可以发吗?',
      imageurl:'https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83epIWhxTfzX2bFJ0HFg01pxk9y64vnrVpiazSiaibaIseto14tvQpebiaa6yIr3KgicuaMcTMsAKQt7LdtQ/132'
    })
    }
    else if (second == 1)
    {
      msgList.push({
        speaker: 'server',
        contentType: 'text',
        content: '可以的',
        imageurl: 'https://wx.qlogo.cn/mmopen/vi_32/vHvGVjRQ5MUKvBpy8SwUOtILcJ4bmYCmhLFicgjhnLEZDHlNRtbON4qSx7D7zZldDJ8BJu06W7L5MARaTZ0NcYQ/132'
      })
    }
  
    inputVal = '';
    this.setData({
      msgList,
      inputVal
    });
    if(second==2){
      clearTimeout(timecount);
     return;
    }
    var timecount = setTimeout(function () {
      that.setData({
        time: second + 1
      });
      that.countdown();
    }, 2000)
  },

  /**
   * 退回上一页
   */
  toBackClick: function () {
    wx.navigateBack({})
  }

})