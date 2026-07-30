import express from "express";
import upload from "../middleware/multer.js";
import {
    registerEmployer,
    getAllEmployers,
    loginEmployer
} from "../controllers/employerController.js";

const employerRouter = express.Router();

employerRouter.post("/register", upload.single("image"), registerEmployer);
employerRouter.get("/all", getAllEmployers);
employerRouter.post("/login", loginEmployer)
export default employerRouter;