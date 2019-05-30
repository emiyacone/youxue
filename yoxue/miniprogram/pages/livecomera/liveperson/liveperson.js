var util = require('../../../utils/util.js');

function getRandomColor() {
  const rgb = []
  for (let i = 0; i < 3; ++i) {
    let color = Math.floor(Math.random() * 256).toString(16)
    color = color.length == 1 ? '0' + color : color
    rgb.push(color)
  }
  return '#' + rgb.join('')
}
var app = getApp()
Page({
  onReady(res) {
    console.log('ready');
    var videourl = this.data.video;
    console.log(videourl)
    this.setData({
      videourl: videourl
    })
  },
  inputValue: '',
  data: {
    studenthide:true,
    teacherhide:false,
    t_introduction: '',
    tishi: '请尽可能描述您的学习经历，例如学习成果，课程内容，讲师风格，教学服务等',
    stars: [0, 1, 2, 3, 4],
    normalSrc: '../../images/normal.png',
    selectedSrc: '../../images/selected.png',
    halfSrc: '../../images/half.png',
    key: 0, //评分
    introduce: '游学教育是一套将传统学习与移动设备相结合的在线学习互动系 统，满足了用户随时随地获取学习 源以及在学习过程中获得高品质服务的迫切希望。',
    videourl: '',
    video: '',
    // videourl:'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400',
    jiehide: '',
    dahide: 'none',
    pinghide: 'none',
    shihide: 'none',
    jiecolor: '#de9354',
    dacolor: '#000000',
    pingcolor: '#000000',
    shicolor: '#000000',
    teachername: '吴京',
    currentTab: 0,
    apprise: 0,
    headurl: '../../images/head.png',
    title: 'java基础',
    nowprice: '25.55',
    lastprice: '34.00',
    src: '',
    danmuList: [],
    lessons: [

    ],
    choosehide: '',
    apprises: [{
      headurl: "https://wx.qlogo.cn/mmopen/vi_32/jI2t1zBBxs0PYJFWKjaJ5CHZPPuiaL8VxiaKic4JJocTia2nZ4aAEz6HThvfLtmNUA3uAufsGgia5sZCSWm8PQWopug/132",
      message: "能学到东西",
      name: "emiya",
      number: 10,
      pingfen: "4.5",
      time: "2019-03-20"
    }, {
      headurl: "https://wx.qlogo.cn/mmopen/vi_32/jI2t1zBBxs0PYJFWKjaJ5CHZPPuiaL8VxiaKic4JJocTia2nZ4aAEz6HThvfLtmNUA3uAufsGgia5sZCSWm8PQWopug/132",
      message: "很棒",
      name: "emiya",
      number: 10,
      pingfen: "4.5",
      time: "2019-03-20"
    },

    ],
    pingjiame: ''
  },
  statechange(e) {
    console.log('live-pusher code:', e.detail.code)
  },
  jiangshi: function () {
    var currentTab = this.data.currentTab;
    var that = this;
    if (currentTab != 3) {
      that.setData({
        currentTab: 3,
        jiecolor: '#000000',
        dacolor: '#000000',
        pingcolor: '#000000',
        shicolor: '#de9354',
        jiehide: 'none',
        dahide: 'none',
        pinghide: 'none',
        shihide: '',
      })
    }
  },
  tijiao: function () {
    var that = this;
    var key = this.data.key;
    var pingjia = this.data.pingjiame;
    var apprises = this.data.apprises;
    var time = util.formatTime(new Date());
    wx.getUserInfo({
      success(res) {
        console.log(res);
        var url = res.userInfo.avatarUrl;
        var name = res.userInfo.nickName;
        var apprise = [{
          headurl: url,
          name: name,
          message: pingjia,
          number: 10,
          pingfen: key.toFixed(1),
          time: time
        }]
        apprise = apprise.concat(apprises);
        console.log(apprise);
        that.setData({
          apprises: apprise,
          choosehide: 'none'
        })
        wx.showToast({
          title: '评价成功',
        })
      }
    })
  },
  getpingjia: function (e) {
    var message = e.detail.value;
    this.setData({
      pingjiame: e.detail.value
    })
  },
  quxiao: function () {
    this.setData({
      choosehide: 'none'
    })
  },
  getmodel: function () {
    this.setData({
      choosehide: 'block'
    })
  },
  //点击右边,半颗星
  selectLeft: function (e) {
    console.log('left')
    var key = e.currentTarget.dataset.key
    if (this.data.key == 0.5 && e.currentTarget.dataset.key == 0.5) {
      //只有一颗星的时候,再次点击,变为0颗
      key = 0;
    }
    console.log("得" + key + "分")
    this.setData({
      key: key
    })

  },
  //点击左边,整颗星
  selectRight: function (e) {
    var key = e.currentTarget.dataset.key
    console.log("得" + key + "分")
    this.setData({
      key: key
    })
  },
  videoErrorCallback: function (e) {
    console.log('视频错误信息:' + e.detail.errMsg);
  },
  jieshao: function () {
    var currentTab = this.data.currentTab;
    var that = this;
    if (currentTab != 0) {
      that.setData({
        currentTab: 0,
        jiecolor: '#de9354',
        dacolor: '#000000',
        pingcolor: '#000000',
        shicolor: '#000000',
        jiehide: '',
        dahide: 'none',
        pinghide: 'none',
        shihide: 'none',
      })
    }
  },

  dagang: function () {
    var currentTab = this.data.currentTab;
    var that = this;
    if (currentTab != 1) {
      that.setData({
        currentTab: 1,
        jiecolor: '#000000',
        dacolor: '#de9354',
        pingcolor: '#000000',
        shicolor: '#000000',
        jiehide: 'none',
        dahide: '',
        pinghide: 'none',
        shihide: 'none',
      })
    }
  },
  pingjia: function () {
    var currentTab = this.data.currentTab;
    var that = this;
    if (currentTab != 2) {
      that.setData({
        currentTab: 2,
        jiecolor: '#000000',
        dacolor: '#000000',
        pingcolor: '#de9354',
        shicolor: '#000000',
        jiehide: 'none',
        dahide: 'none',
        pinghide: '',
        shihide: 'none',
      })
    }
  },
  bindInputBlur(e) {
    this.inputValue = e.detail.value
  },
  bindButtonTap() {
    const that = this
    wx.chooseVideo({
      sourceType: ['album', 'camera'],
      maxDuration: 60,
      camera: ['front', 'back'],
      success(res) {
        that.setData({
          src: res.tempFilePath
        })
      }
    })
  },
  bindSendDanmu() {
    this.videoContext.sendDanmu({
      text: this.inputValue,
      color: getRandomColor()
    })
  },
  lessondetail: function (e) {
    console.log(e);
    var id = parseInt(e.currentTarget.id);
    var lessons = this.data.lessons;
    var newlessons = [];
    var length = lessons.length;
    var index = 0;
    for (var i = 0; i < length; i++) {
      var chacolor = 'black';
      if (i == id) {
        index = id;
        chacolor = '#de9354'
      }
      var lesson = {
        id: i,
        chapter: lessons[i].chapter,
        url: lessons[i].url,
        chacolor: chacolor
      };
      newlessons.push(lesson);
    }
    console.log(newlessons);
    this.setData({
      videourl: newlessons[index].url,
      lessons: newlessons
    })


  },
  onLoad: function (options) {
    var type=wx.getStorageSync('type');
    var cid=parseInt(options.cid);
    if(cid>=0&&type=='老师')
    {
       this.setData({
         teacherhide:true,
         studenthide: false,
       })
    }
    console.log(options);
    var that = this;
    var title = options.title;
    var introduce = options.introduce;
    var teacher = options.teacher;
    var headneck = options.headneck;
    var t_introduction = wx.getStorageSync("t_introduction");
    that.setData({
      title: title,
      introduce: introduce,
      teachername: teacher,
      headurl: headneck,
      t_introduction: t_introduction
    })
    console.log('load');

    wx.request({
      url: 'https://www.xiaoxiaochang.com/courses/servlet/CourseServlet?action=searchLesson&name=' + title,
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data);
        var lessons = [];
        var getlessons = res.data.lessons;
        console.log(res.data.lessons[1].url);
        var video = res.data.lessons[1].url;
        var length = res.data.lessons.length;
        for (var i = 0; i < length; i++) {
          var chacolor = 'black';
          var chapter = res.data.lessons[i].chapter.replace('[视频]', ' ');
          if (i == 0) {
            chacolor = '#de9354'
          }
          var lesson = {
            id: i,
            chapter: chapter,
            url: res.data.lessons[i].url,
            chacolor: chacolor
          };
          lessons.push(lesson);
        }
        that.setData({
          lessons: lessons,
          videourl: video,
        })
        that.videoContext = wx.createVideoContext('myVideo');
      }
    })
  }
})