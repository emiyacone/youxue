
Page({
  data: {
    price: '免费',
    coursehide: false,
    typehide: true,
    sstar: '../../images/sstar.png',
    fstar: '../../images/fstar.png',
    sstar1: '../../images/fstar.png',
    sstar2: '../../images/fstar.png',
    sstar3: '../../images/fstar.png',
    sstar4: '../../images/fstar.png',
    sstar5: '../../images/fstar.png',
    searchurl: '../../images/searchglass.png',
    searchbackurl: '/pages/images/searchbackimage.png',
   
    courses: [

    ],
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
      url: '../coursedetail/coursedetail?title=' + title + '&introduce=' + introduce + '&teacher=' + teacher + '&headneck=' + headneck,
    })
  },
  todetail: function () {
    var that = this;
    var coursehide = this.data.coursehide;
    var typehide = this.data.typehide;
    if (coursehide == false) {
      this.setData({
        coursehide: true,
        typehide: false,
      })
    }
    else if (coursehide == true) {
      this.setData({
        coursehide: false,
        typehide: true,
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
          var price2 = 300 - ge * 10 - shi;
          if (courselist[i].title.length > 9) {
            var title = courselist[i].title.substring(0, 7) + '...'
          }
          else {
            var title = courselist[i].title
          }
          var coursejson = {
            id: i,
            imageurl: courselist[i].cover,
            title: title,
            personnum: price,
            star: '5.0',
            price: price2,
            coursedetail: 'coursedetail',
            introduce: courselist[i].introduction,
            teacher: courselist[i].teacher,
            headneck: courselist[i].headneck
          }
          courses.push(coursejson);
        }
        console.log(courses);
        that.setData({
          courses: courses
        })
      }
    })
  },


})