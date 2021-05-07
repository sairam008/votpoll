const bodyParser = require("body-parser");
const cors = require("cors");

module.exports = (app, ENV_PRODUCTION) => {
  let host = "localhost";
  let proxyPort = "8080";
  let urlPort = "3000";


  app.set("host", host);
  app.set("port", proxyPort);
  const url = "https://localhost:8080";

  app.options("*", cors());
  app.use(cors({ credentials: false, origin: "*" }));

  // Prevent errors from Cross Origin Resource Sharing, by setting headers to allow CORS with middleware:
  app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader("Access-Control-Allow-Origin", url);
    // Request headers you wish to allow
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    // Request methods you wish to allow
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET,HEAD,OPTIONS,POST,PATCH,PUT,DELETE"
    );
    res.setHeader(
      "Access-Control-Expose-Headers",
      "Access-Control-Allow-Origin"
    );
    res.setHeader("Access-Control-Max-Age", "1800");
    // Pass to next layer of middleware
    next();
  });

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  if (ENV_PRODUCTION) {
    console.log(
      "------------------------------------------------------------------"
    );
    console.log("");
    console.log(
      "    🚦  Note: In order for authentication to work in production"
    );
    console.log("              you will need a secure HTTPS connection");
    console.log("");
    console.log(
      "------------------------------------------------------------------"
    );
  } else if (process.env.NODE_ENV === "development") {
    app.use(require("morgan")("dev"));
  }
};
