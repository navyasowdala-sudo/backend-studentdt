const express = require("express");

const cors = require("cors");

const dns = require("dns");

const jwt = require("jsonwebtoken");

dns.setServers(["8.8.8.8", "1.1.1.1"]);

require("dotenv").config();

const connectDb = require("./config/db");

const productRouter = require("./routes/productRouter");

const app = express();


// CORS
app.use(
  cors({
    origin: "*",
  })
);


// MIDDLEWARE
app.use(express.json());


// DATABASE CONNECTION
connectDb();


// ROUTES
app.use("/", productRouter);


// CHECKING ROUTE
app.get("/checking", (req, res) => {

  res.send("<h1>Backend Server Running</h1>");

});


// LOGIN ROUTE
app.post("/login", async (req, res) => {

  try {

    const { email, password } = req.body;

    // SIMPLE LOGIN
    if (
      email === "admin@gmail.com" &&
      password === "12345"
    ) {

      const token = jwt.sign(
        { email },
        process.env.JWT_SECRET
      );

      return res.status(200).json({
        message: "Login Successful",
        token,
      });

    }

    res.json({
      message: "Invalid Credentials",
    });

  } catch (error) {

    console.log(error);

    res.json({
      message: "Server Error",
    });

  }

});


// SERVER
app.listen(process.env.PORT, () => {

  console.log(
    `Server running on port ${process.env.PORT}`
  );

});