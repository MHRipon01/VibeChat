import path from "path";
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.Routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";
import messageRequestRoutes from "./routes/messageRequestRoute.js";

import connectToMongoDB from "./db/connectToMongoDB.js";
import { app, server } from "./socket/socket.js";

// const app = express();

const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();

dotenv.config();

app.use(express.json()); //to parse the incoming requests with json payloads(req.body)
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/", messageRequestRoutes);
app.use("/api/users", userRoutes);

app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req,res) =>{
  res.sendFile(path.join(__dirname, "/frontend/dist/index.html"));
})



// app.get("/", (req, res) => {
//   //root route http://localhost:5000/
//   res.send("Hello chat!");
// });

server.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Backend server is running on ${PORT}. Best of luck 👍✊`);
});
