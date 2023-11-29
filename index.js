require("dotenv").config();
const http = require("http");
const app = require("./src/app");
const connectDB = require("./src/db/connectDB");

const server = http.createServer(app);
const port = process.env.PORT || 5000;

const main = async () => {
  await connectDB();
  server.listen(port, () => {
    console.log("listening to port ", port);
  });
};

main();

// const express = require("express");
// const app = express();

// require("dotenv").config();
// const cors = require("cors");
// const jwt = require("jsonwebtoken");
// const cookieParser = require("cookie-parser");
// const stripe = require("stripe")(process.env.STRIPE_SECRET);

// const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

// app.use(
//   cors({
//     origin: [
//       "http://localhost:5173",
//       // "https://librarycatalog-cb000.firebaseapp.com",
//       // "https://librarycatalog-cb000.web.app",
//     ],
//     credentials: true,
//   })
// );
// app.use(express.json());
// app.use(cookieParser());

// const port = process.env.PORT || 5000;

// const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.fnhhh3d.mongodb.net/?retryWrites=true&w=majority`;
// // const uri = "mongodb+srv://ornonornob:<password>@cluster0.dyz1500.mongodb.net/?retryWrites=true&w=majority";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// });

// // Inserting all the data to the database complete

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     // await client.connect();

//     // const adminCollection = client.db("LibraryCatalog").collection("admin");

//     const paymentCollection = client.db("TestDb").collection("payment");

//     app.post("/create-payment-intent", async (req, res) => {
//       const { price } = req.body;

//       const amount = parseInt(price * 100);

//       const paymentIntent = await stripe.paymentIntents.create({
//         amount,
//         currency: "usd",
//         payment_method_types: ["card"],
//       });

//       res.send({
//         clientSecret: paymentIntent.client_secret,
//       });
//     });

//     // Send a ping to confirm a successful connection
//     // await client.db("users").command({ ping: 1 });
//     console.log(
//       "Pinged your deployment. You successfully connected to MongoDB!!"
//     );
//   } finally {
//     // Ensures that the client will close when you finish/error
//     // await client.close();
//   }
// }
// run().catch(console.dir);

// app.get("/", (req, res) => {
//   res.send("Server Running...");
// });

// app.listen(port, () => {
//   console.log("Server Running");
// });
