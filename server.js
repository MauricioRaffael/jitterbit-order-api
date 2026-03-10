const express = require("express");
const cors = require("cors");

const connectDB = require("./config/database");
const orderRoutes = require("./routes/orderRoutes");

const swaggerUi = require("swagger-ui-express");
const swaggerDocs = require("./swagger");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use("/", orderRoutes);

const PORT = 3000;

app.listen(PORT, () => {

  console.log(`Servidor rodando em http://localhost:${PORT}`);

});
