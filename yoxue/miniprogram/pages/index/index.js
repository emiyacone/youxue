//index.js
//获取应用实例
const app = getApp()
const db = wx.cloud.database(
  console.log('登陆初始化数据库成功')
)
Page({
  data: {
    sstar: '../images/sstar.png',
    fstar: '../images/fstar.png',
    sstar1: '../images/fstar.png',
    sstar2: '../images/fstar.png',
    sstar3: '../images/fstar.png',
    sstar4: '../images/fstar.png',
    sstar5: '../images/fstar.png',
    liveimageurl: 'cloud://uploadimage-60d0e7.7570-uploadimage-60d0e7/livetv.jpg',
    searchurl: '../images/glass.png',
    courses: [
    ],
    tips: [{
      url: '../images/nicecourses.png',
      text: '精品课程',
      tend:'tocourse'
    },
    {
      url: '../images/freecourses.png',
      text: '免费好课',
      tend: 'tofreecourse'
    },
    {
      url: '../images/vipcourses.png',
      text: '更多课程',
      tend: 'tovipcourse'
    },
    {
      url: '../images/allcourses.png',
      text: '全部课程',
      tend: 'tocourse'
    }
    ],
    imgUrls: [
      {
        link: '/pages/index/index',
        url: '../images/banner1.png'
      }, {
        link: '/pages/index/index',
        url: '../images/banner1.png'
      }, {
        link: '/pages/index/index',
        url: '../images/banner1.png'
      }
    ],
    indicatorDots: true,  //小点
    autoplay: true,  //是否自动轮播
    interval: 5000,  //间隔时间
    duration: 1000,  //滑动时间
  },

  tofreecourse:function(){
wx.navigateTo({
  url:'../courses/freecourses/freecourses',
})
  },
  tovipcourse: function () {
    wx.navigateTo({
      url: '../courses/vipcourses/vipcourses',
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
             var type= wx.getStorageSync('type');
             var user_data=wx.getStorageSync('userdata');
              var openid = res.result.openid;
              wx.setStorageSync('openid', openid)
              console.log(openid);
              db.collection('user_info').where({
                _openid: openid 
              }).get().then(res => {
                  console.log(res);
                console.log(openid);
                  if(res.data.length==0)
                  {
                    console.log("表中没有这个用户")
                    wx.cloud.callFunction({
                      name: 'adduser',
                      data: {
                        table: 'user_info',
                        userdata: user_data,
                        _openid: openid,
                        courses:[]
                      },
                      complete: res => {
                        console.log('callFunction test result: ', res)
                      },
                    })
                  }
                  else{
                    console.log("表中存在");
                  }
                  
                
              })
             
             if(type=='老师')
             {
               wx.getUserInfo({
                 success(res) {
                   console.log(res);
                 }
               })
             }
             else if(type=='学生')
             {
              wx.getUserInfo({
                success(res) {
                  console.log(res);
                  // wx.request({
                  //   url: 'http://47.100.208.107/user/data/',
                  //   data: {
                  //     nickname: res.userInfo.nickName,
                  //     type: 'weixin',
                  //     identifier: openid,
                  //     credential: 'weixin'
                  //   },
                  //   method: 'GET',
                  //   header: {
                  //     'content-type': 'application/x-www-form-urlencoded'
                  //   },
                  //   success(res) {
                  //     console.log(res);
                  //   }
                  // })
                }
              })
             
           
             

            }
            }
          })
        }
      }
    });
    // } 
  },
  tolive:function(){
   wx.navigateTo({
     url: '../livecomera/livecomera',
   })
  },
  onLoad: function (options) {
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              wx.setStorageSync('userdata', res.userInfo)
              console.log(res);
              console.log('授权成功success')
              console.log('success');
              var courses = [];
              var that = this;
              wx.request({
                url: 'https://www.xiaoxiaochang.com/courses/servlet/CourseServlet?action=QueryAll',
                header: {
                  'content-type': 'application/json' // 默认值
                },
                success(res) {
                  console.log(res.data);
                  var courselist = res.data.courses;
                  var length = courselist.length;
                  console.log(length);
                  for (var i = 0; i < 8; i++) {
                    var random = Math.floor(Math.random() * 10);
                    var shi = Math.floor(Math.random() * 10);
                    var ge = Math.floor(Math.random() * 10);
                    var price = random * 100 + shi * 10 + ge;
                    var price2 = 300 - ge * 10 - shi;
                    if (courselist[i].title.length>10)
                    {
                      var title = courselist[i].title.substring(0,7)+'...'
                    }
                    else{
                      var title = courselist[i].title
                    }
                    var imageurl=courselist[i].cover;
                    var headneck = courselist[i].headneck;
                    if (courselist[i].title =='C语言程序设计CAP')
                    {
                      headneck ='cloud://uploadimage-60d0e7.7570-uploadimage-60d0e7/8244f68f-3364-4512-8d7c-e50ea81eab88.jpg';
                    }
                    var coursejson = {
                      id: i,
                      imageurl: imageurl,
                      title: title,
                      personnum: price,
                      star: '5.0',
                      price: price2,
                      coursedetail: 'coursedetail',
                      introduce: courselist[i].introduction,
                      teacher: courselist[i].teacher,
                      headneck: headneck ,
                      t_introduction: courselist[i].t_introduction
                    }
                    courses.push(coursejson);
                  }
                  console.log(courses);
                  that.setData({
                    courses: courses
                  })
                }
              })
              this.getopenid();
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
  
  },

  
  //事件处理函数
tocourse:function()
{
  console.log('yes');
  wx.navigateTo({
    url: '../courses/courses',
  })
},
  coursedetail: function (e) {
    console.log(e);
    var id=e.currentTarget.id;
    var courses = this.data.courses;
    var course = JSON.stringify(courses[id]);
    var title = courses[id].title;
    var introduce=courses[id].introduce;
    var teacher = courses[id].teacher;
    var headneck = courses[id].headneck;
    wx.setStorageSync("t_introduction", courses[id].t_introduction)
    wx.navigateTo({
      url: '../courses/coursedetail/coursedetail?title=' + title + '&introduce=' + introduce + '&teacher=' + teacher + '&headneck=' + headneck ,
      // url: '../courses/coursedetail/coursedetail?course=' + course
    })
  }
})
