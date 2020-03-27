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

module.exports = { insertConcentration }