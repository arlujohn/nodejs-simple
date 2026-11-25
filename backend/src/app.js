import express from "express";

const app = express(); // create an express app


app.use(express.json());

// Routes needs to be imported here
import userRouter from './routes/user.route.js';
import postRouter from './routes/post.route.js';


// Declare routes
app.use("/api/v1/users",userRouter);
app.use("/api/v1/posts",postRouter);
// example route: 

export default app;