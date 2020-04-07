const { Pool } = require('pg')

const pool = new Pool({
  user: 'postgres',
  password: 'postgres',
  host: 'localhost',
  database: 'oxydata',
  port: 5432,
})

const runQuery = async (query, params) => {
  const client = await pool.connect()
  try {
    const { rows } = await client.query(query, params)
    return rows
  } finally {
    client.release()
  }
}

const insertConcentration = async (ppm) => {

  const query = `INSERT INTO ppmconcentrations (id, date, concentration)
                  VALUES (uuid_generate_v4(), CURRENT_TIMESTAMP, $1)
                  RETURNING ppmconcentrations.*`

  const rows = runQuery(query, [ppm])

  return rows
}

const getConcentrations = async (from, to) => {
  const query = `SELECT     id, 
                            date, 
                            concentration 
                FROM        ppmconcentrations
                WHERE       date >= $1 
                AND         date < $2`
  
  const rows = runQuery(query, [from, to])

  return rows
}

const getLastConcentrations = async () => {
  const query = `SELECT    id, 
                           date, 
                           concentration 
                 FROM      ppmconcentrations 
                 ORDER BY  date desc
                 LIMIT 1`
  
  const rows = runQuery(query)

  return rows
}

module.exports = { insertConcentration, getConcentrations, getLastConcentrations }