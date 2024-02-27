import database from "infra/database.js";

async function status(request, response) {

  const updatedAt = new Date().toISOString();
  const result = await database.query('SELECT VERSION();'); 
  
  const version = result.rows[0].version

  const connections = await database.pool();
  
  response.status(200).json({
    updated_at : updatedAt,
    database_version : version,
    max_connections: connections.options.max,
    connections: connections.totalCount
  });
}

export default status;
