const { Pool } = require("pg")

// Configuração da conexão
const pool = new Pool({
  user: "postgres",
  host: "localhost", // ou o nome do serviço no Docker (ex: 'db')
  database: "postgres",
  password: "nmng27",
  port: 5432,
})

// Função que testa e retorna a conexão
async function connect() {
  try {
    const client = await pool.connect()
    console.log("✅ Conectado ao PostgreSQL com sucesso!")
    client.release() // libera a conexão de volta ao pool
    return pool       // retorna o pool pra poder usar queries depois
  } catch (error) {
    console.error("❌ Erro ao conectar ao banco:", error)
    throw error
  }
}

module.exports = { connect }
