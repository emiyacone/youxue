// pages/test/test.js
//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    question: [{
      "question": "下列说法正确的是（ ）",
      "option": {
        "A": "JAVA程序的main方法必须写在类里面",
        "B": "JAVA程序中可以有多个main方法",
        "C": "JAVA程序中类名必须与文件名一样"
      }
    }, {
        "question": "变量命名规范说法正确的是（  ）",
      "option": {
        "A": " 变量不能以数字作为开头；",
        "B": "A和a在java中是同一个变量；",
        "C": "变量由字母、下划线、数字、符号随意组成；"
      }
    }, 
      {
        "question": "以下( )不是合法的标识符",
        "option": {
          "A": "STRING",
          "B": "x3x",
          "C": "void"
        }
      },
      {
        "question": "下列（ ）属于引用数据类型",
        "option": {
          "A": " 变量不能以数字作为开头；",
          "B": "A和a在java中是同一个变量；",
          "C": "变量由字母、下划线、数字、符号随意组成；"
        }
      },
      {
        "question": "对象的特征在类中表示为变量，成为类的（）",
        "option": {
          "A": "对象",
          "B": "属性 ",
          "C": "方法"
        }
      },
    ],
    index: 0,
    realIndex: 0,
    A: 0,
    B: 0,
    C: 0,
    a: 0,
    b: 0,
    c: 0,
    optionA: "A",
    optionB: "B",
    optionC: "C",
    questionDetail: "下列说法正确的是（ ）",
    answerA: "JAVA程序的main方法必须写在类里面",
    answerB: "JAVA程序中可以有多个main方法",
    answerC: "JAVA程序中类名必须与文件名一样",
    list: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
    listABC: ['A', 'B', 'C']
  },

  randSort: function() {
    return Math.random() > 0.5 ? 1 : -1;
  },

  setList: function() {
    var newList = this.data.list.sort(this.randSort);
    this.setData({
      list: newList,
    });
  },

  setABC: function() {
    var abc = this.data.listABC.sort(this.randSort);
    var that=this;
    this.setData({
      listABC: abc,
    });
  },

  setOption: function() {

  },



  answerClickA: function(){
    var that=this;
    var questions=this.data.question;
    if (this.data.listABC[0] == 'A') {
      this.setData({
        A: this.data.A + 1
      })
    } else if (this.data.listABC[0] == 'B') {
      this.setData({
        B: this.data.B + 1
      })
    }
    if (this.data.listABC[0] == 'C') {
      this.setData({
        C: this.data.C + 1
      })
    }
    this.setData({
      index: this.data.index + 1,
      realIndex: this.data.list[this.data.index],
    })
    var index = this.data.index;
    if (this.data.index == 5) {
      wx.showToast({
        title: '全部完成',
      })
      wx.navigateBack({
        delta: 2
      })
    }
    this.setData({
      questionDetail: questions[index].question,
      answerA: questions[index].option[this.data.listABC[0]],
      answerB: questions[index].option[this.data.listABC[1]],
      answerC: questions[index].option[this.data.listABC[2]],
    })
   
  },

  answerClickB: function() {
    var that = this;
    var questions = this.data.question;
    if (this.data.listABC[1] == 'A') {
      this.setData({
        A: this.data.A + 1
      })
    } else if (this.data.listABC[1] == 'B') {
      this.setData({
        B: this.data.B + 1
      })
    }
    if (this.data.listABC[1] == 'C') {
      this.setData({
        C: this.data.C + 1
      })
    }
    this.setData({
      index: this.data.index + 1,
      realIndex: this.data.list[this.data.index]
    })
    var index = this.data.index;
    if (this.data.index == 5) {
      wx.showToast({
        title: '全部完成',
      })
      wx.navigateBack({

      })
    }
    this.setData({
      questionDetail: questions[index].question,
      answerA: questions[index].option[this.data.listABC[0]],
      answerB: questions[index].option[this.data.listABC[1]],
      answerC: questions[index].option[this.data.listABC[2]],
    })
   
  },

  answerClickC: function() {
    var that = this;
    var questions = this.data.question;
    if (this.data.listABC[2] == 'A') {
      this.setData({
        A: this.data.A + 1
      })
    } else if (this.data.listABC[2] == 'B') {
      this.setData({
        B: this.data.B + 1
      })
    }
    if (this.data.listABC[2] == 'C') {
      this.setData({
        C: this.data.C + 1
      })
    }
    this.setData({
      index: this.data.index + 1,
      realIndex: this.data.list[this.data.index],

    })
    var index = this.data.index;
    if (this.data.index == 5) {
      wx.showToast({
        title: '全部完成',
      })
      wx.navigateBack({

      })
    }
    this.setData({
      questionDetail: questions[index].question,
      answerA: questions[index].option[this.data.listABC[0]],
      answerB: questions[index].option[this.data.listABC[1]],
      answerC: questions[index].option[this.data.listABC[2]],
    })
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setList();
    this.setABC();

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})