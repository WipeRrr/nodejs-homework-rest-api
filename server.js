const mongoose = require("mongoose");

const app = require("./app");

const DB_HOST =
  "mongodb+srv://WipeR:y0Ru5rRE2Cizo9Ck@cluster1.vhtitc7.mongodb.net/db_contacts?retryWrites=true&w=majority";

mongoose.set("strictQuery", true);

mongoose
  .connect(DB_HOST)
  .then(() => {
    console.log("Database connection successful");
    app.listen(3000);
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });

// app.listen(3000, () => {
//   console.log("Server running. Use our API on port: 3000");
// });
