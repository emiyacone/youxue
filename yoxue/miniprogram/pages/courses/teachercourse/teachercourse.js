var util=require('../../../utils/util.js');
const db = wx.cloud.database(
  console.log('登陆初始化数据库成功')
)
Page({
  data: {
    votetitle:'',
    votetimeout:'',
    tztitle:'',
    tzmess:'',
    cid:0,
    attcode:'',
    tzbackurl:'/pages/images/tanchuang.png',
    tgisread:false,
    xuanze:null,
    nameticket:'投票名称',
    timejiezhi:'截止时间',
    number: 1,
    classnumber: 10,
    datinumber: 10,
    kttwhide: '',
    ktswhide: '',
    tiwenhide: '',
    tzgghide: '',
    ktpjhide:'',
    choosehide: '',
    toupiaohide: '', 
    stuhide:'',
    tzhide: false,
    tzkk: false,
    tzbt: '请输入标题',
    tznr: '请输入通知正文',
    action: '确认',
    kqm: '请输入签到码',
    stuhide: true,
    stars: [0, 1, 2, 3, 4],
    normalSrc: '../../images/normal.png',
    selectedSrc: '../../images/selected.png',
    halfSrc: '../../images/half.png',
    key: 0,//评分
    apprises:'',
    imageurl: 'cloud://uploadimage-60d0e7.7570-uploadimage-60d0e7/a1.png',
    image1url: 'cloud://uploadimage-60d0e7.7570-uploadimage-60d0e7/a2.png',
    image2url: 'cloud://uploadimage-60d0e7.7570-uploadimage-60d0e7/a3.png',
    image3url: 'cloud://uploadimage-60d0e7.7570-uploadimage-60d0e7/a4.png',
    image4url: 'cloud://uploadimage-60d0e7.7570-uploadimage-60d0e7/a5.png',
    image5url: 'cloud://uploadimage-60d0e7.7570-uploadimage-60d0e7/a6.png',
    image6url: 'cloud://uploadimage-60d0e7.7570-uploadimage-60d0e7/a7.png',
    image7url: 'cloud://uploadimage-60d0e7.7570-uploadimage-60d0e7/a8.png',
    image8url: 'cloud://uploadimage-60d0e7.7570-uploadimage-60d0e7/a9.png',
    image9url: 'cloud://uploadimage-60d0e7.7570-uploadimage-60d0e7/a10.png',
    labaurl: 'cloud://uploadimage-60d0e7.7570-uploadimage-60d0e7/喇叭.png',
    coursename: '软件工程',
    coursecode: '23643',
    backurl: '/pages/images/a0.png',
    options:[
      {
        id:0,
        x: 1,
        option:'选项'
      }
    ]
  },
  //投票的名称
  getvotetitle:function(e){
   this.setData({
     votetitle:e.detail.value
   })
  },
  //投票的截止时间
  votetimeout: function (e) {
    this.setData({
      votetimeout: e.detail.value
    })
  },
  getoption:function(e){
   console.log(e);
    var that = this;
    var up = "options[" + e.currentTarget.id + "].option";//先用一个变量，把(info[0].gMoney)用字符串拼接起来
    that.setData({
     [up]: e.detail.value
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
  taolunqun:function(){
    var cid=this.data.cid;
wx.navigateTo({
  url: '../teachercourse/ketangtaolun/ketangtaolun?cid='+cid,
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
        var apprise = {
          headurl: url,
          name: name,
          message: pingjia,
          number: 10,
          pingfen: key.toFixed(1),
          time: time
        }
        apprises.push(apprise);
        that.setData({
          apprises: apprises,
          ktpjhide: 'none'
        })
      }
    })
  },
getcode:function(e){
  this.setData({
    attcode:e.detail.value
  })
},
    qoption:function(){
    var that=this;
    var options=this.data.options;
    var length = parseInt(options.length);
      // var time = util.formatTime(new Date());
      var votetimeout=this.data.votetimeout;
      var votetitle=this.data.votetitle;
    var cid=this.data.cid;
      wx.cloud.callFunction({
        name: 'addvote',
        data: {
          table: 'vote',
          course_id: cid,
          _timeout: votetimeout,
          votetitle: votetitle,
          _options: options
        },
        complete: res => {
          console.log('callFunction test result: ', res)
          that.setData({
            toupiaohide: 'none',
            votetitle: '',
            votetimeout: '',
            options: [
              {
                id: 0,
                x: 1,
                option: '选项'
              }
            ]
          })
          wx.showToast({
            title: '投票发布成功',
          })
        },
      })
  },

  bindchange:function(e){
    console.log(e)
    var id=parseInt(e.currentTarget.id);
    console.log("选择了选项"+id)
    this.setData({
      xuanze:id
    })
  },
  //删除选项
  removeoption:function(){
    var options = this.data.options;
    var length = parseInt(options.length);
   if(length>1){
     options.pop();
   }
    this.setData({
      options: options
    })
  },
  //添加选项
  addoption:function(){
    var options=this.data.options;
    var length =parseInt(options.length);
    var x = length+1
    var option={
      option:'选项',
      x:x,
      id:length
    }
    options.push(option);
    this.setData({
      options: options
    })
  },
  quxiao: function () {
    this.setData({
      ktpjhide: 'none'
    })
  },
  tzok: function() {
    var that=this;
  var cid=this.data.cid;
  var tztitle=this.data.tztitle;
  var tzmess=this.data.tzmess;
    wx.cloud.callFunction({
      name: 'addinform',
      data: {
        table: 'inform',
        course_id: cid,
        inform_title: tztitle,
        inform_message: tzmess,
      },
      complete: res => {
        console.log('callFunction test result: ', res)
        that.setData({
          tzgghide: 'none'
        })
        wx.showToast({
          title: '通知发布成功',
        })
      },
    })
  },
  stutou:function(){
     var xuanze=this.data.xuanze;
     if(xuanze==null){
       wx.showToa
     }
  },
  toupiao:function(){
    var that=this;
    var type = wx.getStorageSync('type');
    if (type == '老师') {
      this.setData({
        toupiaohide: 'block'
      })
    }
    else if (type == '学生') {
      var cid=this.data.cid;
      db.collection('vote').where({
        course_id:cid
      }).get({
        success(res){
          console.log(res);
          var length=res.data.length-1;
          that.setData({
            nameticket: res.data[length].votetitle,
            options: res.data[length]._options,
            stuhide: 'block',
          })
        }
      })
      
    }
  },
  tiwen: function() {
    var number=Math.floor(Math.random() * 10);
    this.setData({
      tiwenhide: 'block',
      kttwhide: 'none',
      number
    })
  },

  zxlx:function(){
    wx.navigateTo({
      url: '../teachercourse/zxlx/zxlx',
    })
  },
  kczy:function(){
    wx.navigateTo({
      url: '../teachercourse/kczy/kczy',
    })
  },
  //班级学生
  bjxs:function(){
    var cid=this.data.cid;
    wx.navigateTo({
      url: '../teachercourse/students/students?cid='+cid,
    })
  },
  //课堂提问
  kttw: function() {
    var type = wx.getStorageSync('type');
    if(type=='老师')
    {
      this.setData({
        kttwhide: 'block'
      })
    }
    else if (type == '学生')
    {
      this.setData({
        ktswhide: 'block'
      })
    }
   
  },
  //课堂评价
  showpingjia:function(){
    this.setData({
      ktpjhide: 'block'
    })
  },
    //通知公告
  tzgg: function() {
    var tgisread=this.data.tgisread;
    var type=wx.getStorageSync('type');
    var that=this;
    var cid=this.data.cid
    if(tgisread==false)
    {
      that.setData({
        tgisread:true
      })
    }
    if(type=='老师')
    {
      this.setData({
        tzgghide: 'block'
      })
      }
      else if(type=='学生')
      {
        db.collection('inform').where({
              course_id:cid
        }).get({
          success(res){
            if (res.data.length==0)
            {
              wx.showToast({
                title: '暂无通知',
                icon:'none'
              })
            }
            else{
              var id = res.data.length - 1;
              console.log(res)
              that.setData({
                tzgghide: 'block',
                tzbt: res.data[id].inform_title,
                tznr: res.data[id].inform_message
              })
            }
           
          }
        })
      }
   
  },
  //考勤打卡
  kqdk: function() {
    this.setData({
      choosehide: 'block'
    })
  },
  changebackground: function() {
    this.setData({
      kttwhide: 'none',
      tiwenhide: 'none',
      tzgghide: 'none',
      choosehide: 'none',
      ktswhide: 'none',
      ktpjhide:'none',
      toupiaohide:'none',
      stuhide:'none'
    })
  },
  takeinput:function(e){
    console.log(e);
    var id=parseInt(e.currentTarget.id);
    var up = "options[" + id + "].option"
    this.setData({
      up:e.detail.value
    })
  },
  editm: function() {
    this.setData({
      choosehide: 'none'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
//获取签到码
   //教师创建签到码
  cqiandao:function(){
    var that=this;
     var cid=this.data.cid;
    var attcode = this.data.attcode;
    wx.cloud.callFunction({
      name: 'addsheet',
      data: {
        table:'attendence',
        course_id: cid ,
        att_code: attcode,
      },
      complete: res => {
        console.log('callFunction test result: ', res)
        that.setData({
          choosehide:true
        })
        wx.showToast({
          title: '签到码设置成功',
        })
      },
    })
  },
//验证签到码
  sqiandao:function(){
    var that = this;
    var cid = parseInt(this.data.cid);
    var attcode = this.data.attcode;
    console.log("cid:"+cid+",attcode:"+attcode)
    db.collection('attendence').where({
      att_code: attcode,
      course_id: cid
    }).get({
      success(res) {
        // res.data 是包含以上定义的两条记录的数组
        if (res.data.length>0)
        {
          that.setData({
            choosehide:true
          })
          wx.showToast({
            title: '签到成功!',
          })

        }
        else{
          wx.showToast({
            title: '签到码错误!',
            icon:'none'
          })
        }
        console.log(res.data.length)
      }
    })
  },
  kczb:function(){
    var cid=this.data.cid;
    wx.navigateTo({
      url: '../../livecomera/liveperson/liveperson?cid='+cid,
    })
  },
//获取通知标题
  tztitle:function(e){
     this.setData({
       tztitle:e.detail.value
     })
  },
  //获取通知内容
  tzmess: function (e) {
    this.setData({
      tzmess:e.detail.value
    }
    )
  },
  onLoad: function(options) {
    var type = wx.getStorageSync('type');
    var that=this
    var kqm = '请输入签到码';
    if (type == '老师') {
      kqm = '请设置签到码';
      that.setData({
        tzkk: false,
        tzhide: false,
        studentway:false,
        qiandao:'cqiandao'
      })
    }
    else if(type=='学生')
    {
      that.setData({
        tzkk: true,
        tzhide: true,
        studentway: true,
        qiandao: 'sqiandao'
      })
    }
    var name = options.name;
    var classcode = options.classcode;
    var cid=parseInt(options.cid);
    console.log("cid"+cid)
    this.setData({
      cid:cid
    })
    var that = this;
    let base64 = wx.getFileSystemManager().readFileSync(that.data.backurl, 'base64');
    let base642 = wx.getFileSystemManager().readFileSync(that.data.tzbackurl, 'base64');
    that.setData({
      tzbackurl: 'data:image/jpg;base64,' + base642,
      backurl: 'data:image/jpg;base64,' + base64,
      coursename: name,
      coursecode: classcode,
      kqm: kqm
    });
  },

})