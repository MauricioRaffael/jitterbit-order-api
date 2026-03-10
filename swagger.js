const swaggerJsDoc = require("swagger-jsdoc");

const swaggerOptions = {

  definition: {

    openapi: "3.0.0",

    info: {

      title: "Order API",
      version: "1.0.0"

    }

  },

  apis: ["./routes/*.js"]

};

module.exports = swaggerJsDoc(swaggerOptions);
