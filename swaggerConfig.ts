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
        url: "https://libraryware.onrender.com/",
      },
    ],
  },
  apis: ["./src/app/api/**/*.ts", "./src/app/**/*.ts"],
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
