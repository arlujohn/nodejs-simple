import express from "express";

const app = express(); // create an express app


app.use(express.json());

// Routes needs to be imported here
import userRouter from './routes/user.route.js';

// Declare routes
app.use("/api/v1/users",userRouter);

// example route: 

export default app;