const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const { connectDB } = require("./config/db");
const knex = require("knex")(require("./knexfile").development);

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
connectDB();

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Documentation Test PT Rimba",
      version: "1.0.0",
      description: "API documentation for your application",
    },
  },
  apis: ["./routes/*.js"],
};
const swaggerSpec = swaggerJsdoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(morgan("dev")); // Log setiap request
app.use(cors()); // Izinkan CORS
app.use(bodyParser.json()); // Parsing JSON di request body

// Contoh route
app.get("/", (req, res) => {
  res.send("Test PT Rimba");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
