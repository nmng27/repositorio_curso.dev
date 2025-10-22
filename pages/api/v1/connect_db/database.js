import pkg from "pg";
const { Client } = pkg;

async function connectDb() {
  const client = new Client({
    host: process.env.POSTGRES_HOST,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    port: process.env.POSTGRES_PORT, // porta padrão do PostgreSQL
  });

  try {
    await client.connect();
    const res = await client.query("SELECT NOW()");
    console.log("Conexão bem-sucedida:", res.rows[0]);
  } catch (error) {
    console.error("Erro ao conectar ao banco:", error);
  } finally {
    await client.end();
  }
}


