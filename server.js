require("dotenv").config();
const express = require('express');
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const dbConfig = require("./setup/dbConfig");
const app = express();

const PORT = process.env.PORT || 5000;

dbConfig();

const authRoute = require("./src/api/v1/routes/auth");
const userRoute = require("./src/api/v1/routes/user");
const userInfoRoute = require("./src/api/v1/routes/userInfo");

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(helmet());

app.get("/", (req, res) => {
    res.send("Project by Metfly");
});

app.use("/api/v1", authRoute);
app.use("/api/v1", userRoute);
app.use("/api/v1", userInfoRoute);

app.listen(PORT, () => {console.log(`server runnig on PORT: ${PORT}`)});