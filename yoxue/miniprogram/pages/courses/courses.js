
Page({
  data: {
    title:'分类>',
    goodcourses:[],
    alcourses:[],
    coursehide:false,
    typehide:true,
    sstar: '../images/sstar.png',
    fstar: '../images/fstar.png',
    sstar1: '../images/fstar.png',
    sstar2: '../images/fstar.png',
    sstar3: '../images/fstar.png',
    sstar4: '../images/fstar.png',
    sstar5: '../images/fstar.png',
    searchurl: '../images/searchglass.png',
    searchbackurl:'/pages/images/searchbackimage.png',
    types:[{
      url:'cloud://uploadimage-60d0e7.7570-uploadimage-60d0e7/computer.png',
      name:'计算机',
    }, {
        url: 'cloud://uploadimage-60d0e7.7570-uploadimage-60d0e7/jjgl.png',
        name: '经济管理',
      }, {
        url: 'cloud://uploadimage-60d0e7.7570-uploadimage-60d0e7/xlx.png',
        name: '心理学',
      }, {
        url: 'cloud://uploadimage-60d0e7.7570-uploadimage-60d0e7/waiyu.png',
        name: '外语',
      }, {
        url: 'cloud://uploadimage-60d0e7.7570-uploadimage-60d0e7/wxls.png',
        name: '文学历史',
      }, {
        url: 'cloud://uploadimage-60d0e7.7570-uploadimage-60d0e7/yssj.png',
        name: '艺术设计',
      }, {
        url: 'cloud://uploadimage-60d0e7.7570-uploadimage-60d0e7/gongxue.png',
        name: '工学',
      }, {
        url: 'cloud://uploadimage-60d0e7.7570-uploadimage-60d0e7/llixue.png',
        name: '理学',
      }, {
        url: 'cloud://uploadimage-60d0e7.7570-uploadimage-60d0e7/yyws.png',
        name: '医药卫生',
      }, {
        url: 'cloud://uploadimage-60d0e7.7570-uploadimage-60d0e7/nlyy.png',
        name: '农林园艺',
      }, {
        url: 'cloud://uploadimage-60d0e7.7570-uploadimage-60d0e7/zhexue.png',
        name: '哲学',
      }, {
        url: 'cloud://uploadimage-60d0e7.7570-uploadimage-60d0e7/faxue.png',
        name: '法学',
      }, {
        url: 'cloud://uploadimage-60d0e7.7570-uploadimage-60d0e7/jyjx.png',
        name: '教育教学',
      },

    ],
    coursestall:[],
    courses: [
   
    ],
  },
  getfresh:function(){
      var courses=this.data.allcourses;
      var courses2=[];
     this.setData({
       typehide:true,
       coursehide:false,
       courses: courses
     })
  },
  coursedetail: function (e) {
    console.log(e);
    var courses = this.data.courses;
    console.log(courses)
    var id = e.currentTarget.id;
    var title = courses[id].title;
    var introduce = courses[id].introduce;
    var teacher = courses[id].teacher;
    var headneck = courses[id].headneck;
    wx.navigateTo({
      url: '../courses/coursedetail/coursedetail?title=' + title + '&introduce=' + introduce + '&teacher=' + teacher + '&headneck=' + headneck,
    })
  },
todetail:function(){
  var that=this;
  var coursehide=this.data.coursehide;
  var typehide=this.data.typehide;
  if(coursehide==false)
  {
    this.setData({
      coursehide: true,
      typehide: false,
      title:'分类v'
    })
  }
  else if (coursehide == true)
  {
    this.setData({
      coursehide: false,
      typehide: true,
      title: '分类>'
    })
  }

},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    let base64 = wx.getFileSystemManager().readFileSync(that.data.searchbackurl, 'base64');
    that.setData({
      searchbackurl: 'data:image/jpg;base64,' + base64
    });
    var courses = [];
    var goodcourses=[];
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
        for (var i = 0; i < length; i++) {
          var random = Math.floor(Math.random() * 10);
          var shi = Math.floor(Math.random() * 10);
          var ge = Math.floor(Math.random() * 10);
          var price = random * 100 + shi * 10 + ge;
          var price2=300-ge*10-shi;
          var headneck = courselist[i].headneck;
          if (courselist[i].title == 'C语言程序设计CAP') {
            headneck = 'cloud://uploadimage-60d0e7.7570-uploadimage-60d0e7/8244f68f-3364-4512-8d7c-e50ea81eab88.jpg';
          }
          var coursejson = {
            id: i,
            imageurl: courselist[i].cover,
            title: courselist[i].title,
            personnum: price,
            star: '5.0',
            price: price2,
            coursedetail: 'coursedetail',
            introduce: courselist[i].introduction,
            teacher: courselist[i].teacher,
            headneck: headneck
          }
          if(i>=4){
            goodcourses.push(coursejson);
          }
          courses.push(coursejson);
        }
        console.log(courses);
        that.setData({
          courses: goodcourses,
          coursestall: courses,
          goodcourses: goodcourses,
          allcourses: courses
        })
      }
    })
  },

})