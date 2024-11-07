import Hapi from "@hapi/hapi";
import dotenv from "dotenv";
import routes from "./routes.js";

dotenv.config();

const init = async () => {
  const server = Hapi.server({
    port: process.env.PORT || 9000,
    host: process.env.HOST || "localhost",
    routes: {
      cors: {
        origin: ["*"],
      },
    },
  });

  server.route(routes);

  await server.start();
  console.log(`Server running on ${server.info.uri}`);
};

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

init();
