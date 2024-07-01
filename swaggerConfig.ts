import swaggerJSDoc from "swagger-jsdoc";
import { Options } from "swagger-jsdoc";

const options: Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "My API",
      version: "1.0.0",
      description: "A simple API documentation",
    },
    servers: [
      {
        url: "http://localhost:3000", // change this to your server URL
      },
    ],
  },
  apis: ["./src/app/api/**/*.ts", "./src/app/**/*.ts"], // path to the API docs
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
