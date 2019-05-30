// pages/person/person.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    today1:'今日学习',
    today2:'连续学习',
    today3:'累计学习',
    tip:'',
    fun:'',
    hours:'1.5',
    action:'加入',
    nickName:'',
    choosehide:'',
    type:'学生',
    userInfo:[],
    backurl:'/pages/images/backimage.png',
    coursenum:'5',
    tickets:'10',
    headurl: '../images/head.png',
    funs: [{
      url: 'cloud://uploadimage-60d0e7.7570-uploadimage-60d0e7/VIP.png',
      name: '更多',
      tend:'myvip',
      buttontype:''
    }, {
        url: 'cloud://uploadimage-60d0e7.7570-uploadimage-60d0e7/invest.png',
      name: '调研反馈',
        tend: 'dyfk',
          buttontype:''
    }, {
        url: 'cloud://uploadimage-60d0e7.7570-uploadimage-60d0e7/twocode.png',
      name: '二维码',
        tend: 'twocode',
        buttontype: ''
    }, {
        url: 'cloud://uploadimage-60d0e7.7570-uploadimage-60d0e7/share.png',
      name: '分享程序',
        tend: 'share',
          buttontype: 'share'
    }, {
        url: 'cloud://uploadimage-60d0e7.7570-uploadimage-60d0e7/aboutus.png',
      name: '关于我们',
        tend: 'aboutus',
          buttontype: ''
    }, {
        url: 'cloud://uploadimage-60d0e7.7570-uploadimage-60d0e7/service.png',
      name: '客服服务',
        tend: 'service',
          buttontype: 'contact',
    }
    ],
    funs2: [{
      url: 'cloud://uploadimage-60d0e7.7570-uploadimage-60d0e7/ticket.png',
      name: '投票记录',
      tend: 'toupiaojilu',
      buttontype: ''
    }, {
      url: 'cloud://uploadimage-60d0e7.7570-uploadimage-60d0e7/invest.png',
      name: '调研反馈',
      tend: 'dyfk',
      buttontype: ''
    }, {
      url: 'cloud://uploadimage-60d0e7.7570-uploadimage-60d0e7/twocode.png',
      name: '二维码',
      tend: 'twocode',
      buttontype: ''
    }, {
      url: 'cloud://uploadimage-60d0e7.7570-uploadimage-60d0e7/share.png',
      name: '分享程序',
      tend: 'share',
      buttontype: 'share'
    }, {
      url: 'cloud://uploadimage-60d0e7.7570-uploadimage-60d0e7/aboutus.png',
      name: '关于我们',
      tend: 'aboutus',
      buttontype: ''
    }, {
      url: 'cloud://uploadimage-60d0e7.7570-uploadimage-60d0e7/service.png',
      name: '客服服务',
      tend: 'service',
      buttontype: 'contact',
    }
    ],
    tips:[{
      url:'cloud://uploadimage-60d0e7.7570-uploadimage-60d0e7/buy.png',
      name:'看过的课程',
      tend: 'gkecheng',
      buttontype: ''
    }, {
        url: 'cloud://uploadimage-60d0e7.7570-uploadimage-60d0e7/collect.png',
        name: '收藏的课程',
         tend: 'skecheng',
        buttontype: ''
      }, {
        url: 'cloud://uploadimage-60d0e7.7570-uploadimage-60d0e7/searchcourse.png',
        name: '课表查询',
        tend: 'lessons',
        buttontype: ''
      }, {
        url: 'cloud://uploadimage-60d0e7.7570-uploadimage-60d0e7/education.png',
        name: '教务通知',
        tend: 'jwtz',
        buttontype: ''
      }, {
        url: 'cloud://uploadimage-60d0e7.7570-uploadimage-60d0e7/ksap.png',
        name: '考试安排',
        tend: 'ksap',
        buttontype: ''
      }, {
        url: 'cloud://uploadimage-60d0e7.7570-uploadimage-60d0e7/kscj.png',
        name: '成绩分析',
        tend: 'cjfx',
        buttontype: ''
      }
    ],
    tips2: [{
      url: 'cloud://uploadimage-60d0e7.7570-uploadimage-60d0e7/students.png',
      name: '学生名单',
      tend: 'xuesheng',
      buttontype: ''
    }, {
        url: 'cloud://uploadimage-60d0e7.7570-uploadimage-60d0e7/attend.png',
      name: '考勤记录',
      tend: 'kaoqinjilu',
      buttontype: ''
    }, {
      url: 'cloud://uploadimage-60d0e7.7570-uploadimage-60d0e7/searchcourse.png',
      name: '课表查询',
      tend: 'lessons',
      buttontype: ''
    }, {
      url: 'cloud://uploadimage-60d0e7.7570-uploadimage-60d0e7/education.png',
      name: '教务通知',
      tend: 'jwtz',
      buttontype: ''
    }, {
      url: 'cloud://uploadimage-60d0e7.7570-uploadimage-60d0e7/ksap.png',
      name: '练习分析',
      tend: 'tozai',
      buttontype: ''
    }, {
      url: 'cloud://uploadimage-60d0e7.7570-uploadimage-60d0e7/kscj.png',
      name: '成绩分析',
      tend: 'teacjfx',
      buttontype: ''
    }
    ],
  
  },
  tozai:function(){
    wx.navigateTo({
      url: '../person/zxlxfenxi/zxlx/zxlx',
    })
  },
  teacjfx:function(){
    wx.navigateTo({
      url: '../person/cjfx/students/students',
    })
  },
  xuesheng:function(){
    wx.navigateTo({
      url: '../person/stu/stu',
    })
  },
  kaoqinjilu:function(){
    wx.navigateTo({
      url: '../person/kjjl/kjjl',
    })
  },
  toupiaojilu: function () {
    wx.navigateTo({
      url: '../person/tpjl/tpjl',
    })
  },
  gkecheng:function(){
    wx.navigateTo({
      url: '../person/collect/collect',
    })
  },
  skecheng: function () {
    wx.navigateTo({
      url: '../person/collect/collect',
    })
  },
  changebackground: function () {
    this.setData({
      choosehide: 'none'
    })
  },
  editm:function(){
     var nickname=this.data.nickName;
    var userInfo = this.data.userInfo;
    userInfo.nickName = nickname;
this.setData({
  userInfo:userInfo,
  choosehide: 'none'
})
  },
  getusname:function(e){
    this.setData({
      nickName: e.detail.value
    })
  },
  edit:function(){
this.setData({
  choosehide:'block'
})
  },

myvip:function(){
// wx.navigateTo({
//   url: '../VIP/VIP',
// })
},
  twocode: function () {
    wx.navigateTo({
      url: '../twocode/twocode',
    })
  },
  dyfk: function () {
    wx.navigateTo({
      url: '../person/questionnaire/questionnaire',
    })
  },
  cjfx: function () {
    wx.navigateTo({
      url: '../person/cjfx/cjfx',
    })
  },
  
  ksap: function () {
    wx.navigateTo({
      url: '../person/ksap/ksap',
    })
  },

  jwtz: function () {
    wx.navigateTo({
      url: '../person/jwtz/jwtz',
    })
  },
  lessons: function () {
    wx.navigateTo({
      url: '../person/lessons/lessons',
    })
  },
  share: function () {
    wx.showShareMenu();
  },
  aboutus: function () {
    wx.navigateTo({
      url: 'aboutus/aboutus',
    })
  },
  service: function () {

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var type=wx.getStorageSync("type");
    var that=this;
    var tips = this.data.tips;
    var tips2=this.data.tips2;
    var funs = this.data.funs;
    var funs2 = this.data.funs2;
    if(type)
    {
    this.setData({
      type:type
    })
    }
    if(type=='学生')
    {
      that.setData({
        tips:tips,
        funs:funs,
        today1: '今日学习',
        today2: '连续学习',
        today3: '累计学习',
      })
    }
    else if(type=='老师')
    {
      that.setData({
        tips:tips2,
        funs:funs2,
        today1: '今日开课',
        today2: '连续开课',
        today3: '累计开课',
      })
    }
    var that = this;
    let base64 = wx.getFileSystemManager().readFileSync(that.data.backurl, 'base64');
    that.setData({
      backurl: 'data:image/jpg;base64,' + base64
    });
    wx.getUserInfo({
      success(res){
        console.log(res);
        that.setData({
          userInfo:res.userInfo,
          nickName: res.userInfo.nickName
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
    let that = this;
    wx.showShareMenu({
      withShareTicket: true
    })
    wx.getShareInfo({
      shareTicket: '',
    })
    return {
      title: '游学', // 转发后 所显示的title
      path: '/pages/index/index', // 相对的路径
      success: (res) => {    // 成功后要做的事情
      },
      fail: function (res) {
        // 分享失败
        console.log(res)
      }
    }
  }
})