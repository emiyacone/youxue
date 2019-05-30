const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database()
exports.main = async (event, context) => {

  try {
    const {
      table, course_id,
      att_code
    } = event
    return await db.collection(event.table).add({
      // data 字段表示需新增的 JSON 数据
      data: {
        course_id: event.course_id,
        att_code: event.att_code,
      }
    })
  } catch (e) {
    console.error(e)
  }
}