
const swaggerJSDoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Social App API",
      version: "1.0.0",
      description: "Backend API documentation",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["./routers/*.js"], // routes path
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
