const db = wx.cloud.database(
)
Page({
  data: {
    tendto:'',
    cjkecheng:'请输入课程名称',
    action:'加入',
    choosehide:'',
    way:'加入课程',
    classhide:false,
    onlinehide:true,
    classback: '#D97B3D',
    classcolor: '#D97B3D',
    onlineback: 'white',
    onlinecolor: '#000000',
    backurl: '/pages/images/backimage.png',
    courses: [
    ],

    onlinecourses: [
    

    ],
  },
  changebackground:function(){
    this.setData({
      choosehide:'none'
    })
  },
  coursedetail:function(e){
    var id = parseInt(e.currentTarget.id);
    var courses = this.data.courses;
    console.log(courses);
    var name = courses[id].name;
    var classcode = courses[id].classcode;
    var cid = courses[id].cid;
    wx.navigateTo({
      url: '../teachercourse/teachercourse?name='+name+'&classcode='+classcode+'&cid='+cid,
    })
  },
  jiarukecheng:function(){
    var way=this.data.way;
    this.setData({
      choosehide: 'block',
    })

  },

  createNonceStr: function () {
    return Math.random().toString(24).substr(2, 6)
  },
  getkcname:function(e){
    this.setData({
      kcname:e.detail.value
    })
  },
  editm: function () {
    var courses = this.data.courses;
    var code=this.createNonceStr();
    console.log(code);
    var kcname=this.data.kcname;
    var openid=wx.getStorageSync('openid');
    var course={
      id: courses.length,
      imageurl:'cloud://uploadimage-60d0e7.7570-uploadimage-60d0e7/Python.png',
      name:kcname,
      classcode:code,
      coursedetail: 'coursedetail'
    }
    courses.push(course);
    if (kcname)
    {
      wx.cloud.callFunction({
        name: 'addcourse',
        data: {
          table: 'courses',
          cid: courses.length,
          name: kcname,
          classcode: code,
          imageurl: 'cloud://uploadimage-60d0e7.7570-uploadimage-60d0e7/Python.png',
          coursedetail:'coursedetail',
          students: [],
          tea_openid: openid
        },
        complete: res => {
          console.log('callFunction test result: ', res)
        },
      })
      this.setData({
        choosehide: 'none',
        courses: courses
      })
    }
    else{
      wx.showToast({
        title: '请输入名称!',
        icon:'none'
      })
    }
  },
  join:function(){
    var that=this;
    var kcname = this.data.kcname;
    var userdata=wx.getStorageSync('userdata');
    var openid=wx.getStorageSync('openid');
    var students = [];
    var student={
      stu_openid: openid,
      nickName: userdata.nickName,
      avatarurl: userdata.avatarUrl
    }
    db.collection('courses').where({
      classcode: kcname
    }).get(
      {
        success(res){
          console.log(res);
          var length=res.data.length;
          console.log(length);
          if (length==0) {
            wx.showToast({
              title: '课程不存在!',
              icon: 'none'
            })
          }
          else {
            var keyname = res.data[0]._id;
            var cid = res.data[0].cid;
            console.log(res.data[0]._id)
            var courses = that.data.courses;
            var course = res.data[0];
            students = res.data[0].students;
            courses.push(course);
            // students.push(student);
            students.push(student);
            console.log(students)
            db.collection('courses').where({
              'students.stu_openid': openid,
              classcode: kcname
            }).get().then(res => {
              console.log(res);
              if(res.data.length==0)
              {
                that.updatacourse(students, cid, courses);
              }
              else{
                wx.showToast({
                  title: '您已加入课程',
                  icon:'none'
                })
                that.setData({
                  choosehide: true
                })
              }
           
            })
       
          }
        },
        fail(res){
          
        }
      }
    )
  
    console.log("跳过")
  },
  updatacourse:function(students,cid,courses){
    var that=this;
    wx.cloud.callFunction({
      name: 'updatecourse',
      data: {
        cid: cid,
        students: students
      },
      complete: res => {
        console.log('callFunction test result: ', res)
        that.setData({
          courses: courses,
          choosehide:true
        })
      },
    })
  },
  changeclass:function(){
    var classhide=this.data.classhide;
    var that=this;
    if(classhide=true)
    {
      that.setData({
        classhide: false,
        onlinehide: true,
       classback: '#D97B3D',
    classcolor: '#D97B3D',
    onlineback: 'white',
    onlinecolor: '#000000',
      })
    }
  },
  changeonline: function () {
    var onlinehide = this.data.onlinehide;
    var that = this;
    if (onlinehide = true) {
      that.setData({
        classhide: true,
        onlinehide: false,
        classback: 'white',
        classcolor: '#000000',
        onlineback: '#D97B3D',
        onlinecolor: '#D97B3D',
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var openid=wx.getStorageSync('openid');
    var type=wx.getStorageSync('type');
    var courses=[];
    db.collection('courses').where({
      'students.stu_openid': openid
    }).get().then(res=>{
      console.log(res);
       courses=res.data;
       that.setData({
         courses:courses
       })
    })
    if(type=='老师')
    {
      that.setData({
        way:'创建课程',
        action:'创建',
        cjkecheng: '请输入课程名称',
        tendto:'editm'
      })
    }
    else if(type=='学生')
    {
      that.setData({
        way: '加入课程',
        action: '加入',
        cjkecheng: '请输入课程码',
        tendto: 'join'
      })
    }
    let base64 = wx.getFileSystemManager().readFileSync(that.data.backurl, 'base64');
    that.setData({
      backurl: 'data:image/jpg;base64,' + base64
    });
    var onlinecourses = [];
    wx.request({
      url: 'https://www.xiaoxiaochang.com/courses/servlet/CourseServlet?action=QueryAll',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        var courses = [];
        console.log(res.data);
        var courselist = res.data.courses;
        var length = courselist.length;
        console.log(length);
        for (var i = 0; i < 6; i++) {
          var random = Math.floor(Math.random() * 10);
          var shi = Math.floor(Math.random() * 10);
          var ge = Math.floor(Math.random() * 10);
          var price = random * 100 + shi * 10 + ge;
          var price2 = 300 - ge * 10 - shi;
          var coursejson = {
            id: i,
            imageurl: courselist[i].cover,
            title: courselist[i].title,
            personnum: price,
            star: '5.0',
            price: price2,
            coursedetail: 'coursedetail2',
            introduce: courselist[i].introduction,
            teacher: courselist[i].teacher,
            headneck: courselist[i].headneck
          }
          courses.push(coursejson);
        }
        console.log(courses);
        that.setData({
          onlinecourses: courses
        })
      }
    })
   
  },
  coursedetail2: function (e) {
    console.log(e);
    var courses = this.data.onlinecourses;
    var id = e.currentTarget.id;
    var title = courses[id].title;
    console.log(title)
    var introduce = courses[id].introduce;
    var teacher = courses[id].teacher;
    var headneck = courses[id].headneck;
    wx.navigateTo({
      url: '../../courses/coursedetail/coursedetail?title=' + title + '&introduce=' + introduce + '&teacher=' + teacher + '&headneck=' + headneck,
    })
  },
})