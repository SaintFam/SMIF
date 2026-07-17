import express from "express";
import connectDB from "./config/mongodb.js";
import employerRouter from "./routes/employerRoute.js";


const app = express();
const PORT = process.env.PORT || 3000;

//Middleware
app.use(express.json());

//Connecting to MongoDB
connectDB();

app.get("/", (req, res) => {
    res.send("Hello, World!");
});

app.use("/api/employers", employerRouter);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});