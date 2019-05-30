// pages/person/zxlxfenxi/zxlxfenxi.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:'java第一次测试',
    question: [{
      "question": "1.下列说法正确的是（ A）",
      "options": [{
        "mess": "A.JAVA程序的main方法必须写在类里面",
        "percent":10,
      },{
          "mess": "B.JAVA程序中可以有多个main方法",
          "percent": 50,
        },
        {
          "mess": "C.JAVA程序中类名必须与文件名一样",
          "percent": 40,
        }
      ]
    }, 
    {
      "question": "2.变量命名规范说法正确的是（ B ）",
      "options": [{
        "mess": "A.变量不能以数字作为开头；",
        "percent": 40,
      }, {
          "mess": "B.A和a在java中是同一个变量；",
        "percent": 20,
      },
      {
        "mess": "C.变量由字母、下划线、数字、符号随意组成；",
        "percent": 40,
      }
      ] 
    },
      {
        "question": "3.以下(C )不是合法的标识符 ",
        "options": [{
          "mess": "A.STRING",
          "percent": 12,
        }, {
            "mess": "B.x3x",
          "percent": 34,
        },
        {
          "mess": "C.void",
          "percent": 54,
        }
        ]
      },
      {
        "question": "4.下列（ A）属于引用数据类型",
        "options": [{
          "mess": "A.String",
          "percent": 51,
        }, {
            "mess": "B.char",
          "percent": 15,
        },
        {
          "mess": "C.int",
          "percent": 34,
        }
        ]
      },
      {
        "question": "5.对象的特征在类中表示为变量，成为类的（B）",
        "options": [{
          "mess": "A.对象",
          "percent": 5,
        }, {
            "mess": "B.属性",
          "percent": 70,
        },
        {
          "mess": "C.方法",
          "percent": 25,
        }
        ]
      },
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  }
})