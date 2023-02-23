import express from "express";
import postRoutes from "./routes/posts.routes.js";

const app = express();
// middleware
app.use(express.json());

//route
app.use(postRoutes);

export default app;
