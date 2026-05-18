const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://navyasowdala_db_user:2004@cluster0.ovyshha.mongodb.net/?appName=Cluster0")
.then(() => {
    console.log("MongoDB Connected");
})
.catch((err) => {
    console.log("Connection Error:");
    console.log(err);
});

console.log("server started");