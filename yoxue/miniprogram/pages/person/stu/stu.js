const db = wx.cloud.database(
)
Page({
  data: {
    courses:[]
  },
  onLoad: function () {
    var that=this;
    var openid=wx.getStorageSync('openid');
    console.log(openid);
    db.collection('courses').where({
      tea_openid: openid
    }).get(
      {
        success(res) {
         console.log(res);
          that.setData({
            courses:res.data
          })
        }})
  },

  coursedetail:function(e){
    console.log(e);
    var cid=parseInt(e.currentTarget.id);
    wx.navigateTo({
      url: '../../courses/teachercourse/students/students?cid='+cid,
    })
  }

})
