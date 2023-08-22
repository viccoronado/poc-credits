import loadConnectionDB from "./Contexts/Credits/infrastructure/adapters/db/mongo/loadConnectionDB";
import ServerExpress from "./Contexts/Credits/infrastructure/adapters/express/server";

function main() {
  const server = new ServerExpress(8080);
  const db = loadConnectionDB('mongodb://mongo:27017/mongodb');

  server.setup();
  server.start();
  db.start();

  function gracefulShutdown() {
    console.log(`- Shutting down gracefully...`);
    server.close();
    db.close();

    setTimeout(() => {
      console.log(`- Could not close connections in time, forcefully shutting down.`);
      process.exit(1);
    }, 5000);
  }

  process.on('SIGTERM', gracefulShutdown);
  process.on('SIGINT', gracefulShutdown);

}

main();