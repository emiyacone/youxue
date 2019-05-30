const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database()
exports.main = async (event, context) => {

  try {
    const {
      table, cid,
      name,
      classcode, 
      imageurl,
      tea_openid,
      students,
      coursedetail
    } = event
    return await db.collection(event.table).add({
      // data 字段表示需新增的 JSON 数据
      data: {
        cid: event.cid,
        name: event.name,
        classcode: event.classcode,
        imageurl: event.imageurl,
        coursedetail:event.coursedetail,
        students:event.students,
        tea_openid:event.tea_openid
      }
    })
  } catch (e) {
    console.error(e)
  }
}