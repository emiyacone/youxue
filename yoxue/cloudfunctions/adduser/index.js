const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database()
exports.main = async (event, context) => {

  try {
    const {
      table,
      userdata,_openid,courses
    } = event
    return await db.collection(event.table).add({
      // data 字段表示需新增的 JSON 数据
      data: {
        userdata:event.userdata,
        _openid: event._openid,
        courses: event.courses
      }
    })
  } catch (e) {
    console.error(e)
  }
}