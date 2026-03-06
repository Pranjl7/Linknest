import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import cookieParser from "cookie-parser";
import connectdb from "./config/dbconnection.js";
// routes import
import UserRoutes from "./routes/UserRoutes.js";
import ContentRoutes from "./routes/ContentRoutes.js";
const app = express();
const port = process.env.PORT;

// middlewares
app.use(express.json());
app.use(
  cors({
    origin: process.env.WEB_URI,
  }),
);
app.use(cookieParser());

// routes
app.use("/api/v1/user", UserRoutes);
app.use("/api/v1/content", ContentRoutes);

app.get("/", (req, res) => {
  res.send("hello world");
});

(async () => {
  await connectdb();
  app.listen(port, () => {
    console.log(`Server Running at http://localhost:${port}`);
  });
})();
