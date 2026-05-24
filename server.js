const express = require("express");

const cors = require("cors");
const dns = require("dns");

dns.setServers(["8.8.8.8", "1.1.1.1"]);

require("dotenv").config();

const connectDb = require("./config/db");

const productRouter = require("./routes/productRouter");
const app = express();
app.use(
    cors({
        origin: "*",

    })
);



app.use(express.json());

// Database Connection
connectDb();

// Routes
app.use("/", productRouter);

// Home Route
app.get("/checking", (req, res) => {
    res.send("<h1>Backend Server Running</h1>");
});

// Server
app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});