const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database()
const _ = db.command
exports.main = async (event, context) => {
  try {
    const {
      students,
      cid
    } = event
    return await db.collection('courses').where({
      cid: event.cid
    })
      .update({
        data: {
          students: students
        },
      })
  } catch (e) {
    console.error(e)
  }
}