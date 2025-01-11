const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const swaggerUi = require("swagger-ui-express");
const { connectDB } = require("./config/db");
const userRoutes = require("./routes/userRouter");
const swaggerDocument = require("./swagger.json");

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
connectDB();

app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.json());

app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.get("/", (req, res) => {
  res.send("API Server Test PT Rimba Ananta Vikasa");
});
app.use("/api/v1", userRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

module.exports = app;
