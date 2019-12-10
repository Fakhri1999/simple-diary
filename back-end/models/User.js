const db = require('../database')

const read = async () => {
  return db('user').then(result => result).catch(error => false)
}

const insert = async (data) => {
  return db("user").insert(data).then(result => data).catch(error => error)
}

module.exports = { read, insert }