const { Pool } = require('pg')
console.log(Pool);

// const pool = new Pool({
//   user: 'me',
//   host: 'localhost',
//   database: 'api',
//   password: 'password',
//   port: 5432,
// })

const runQuery = async (qry, params) => {
    const client = await pool.connect()
    try {
      const { rows } = await client.query(qry, params)
      return rows
    } finally {
      client.release()
    }
  }

module.exports = {runQuery}