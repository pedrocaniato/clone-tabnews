import database from "infra/database.js";

async function status(request, response) {
  const updatedAt = new Date().toISOString();

  const databaseVersionResult = await database.query("SHOW server_version;");
  const databaseVersionValue = databaseVersionResult.rows[0].server_version;

  const maxConnectionsResult = await database.query("SHOW max_connections;");
  const maxConnectionsValue = Number(
    maxConnectionsResult.rows[0].max_connections,
  );

  const databaseName = process.env.POSTGRES_DB;

  const usedConnectionsResult = await database.query({
    text: "SELECT count (*) ::int FROM pg_stat_activity WHERE datname = $1;",
    values: [databaseName]
  });
  const usedConnectionsValue = Number(usedConnectionsResult.rows[0].count);

  response.status(200).json({
    updated_at: updatedAt,
    dependencies: {
      database: {
        version: databaseVersionValue,
        max_connections: maxConnectionsValue,
        used_connections: usedConnectionsValue,
      },
    },
  });
}

export default status;
