import express from "express";
import {} from "express-async-errors";
import { body } from "express-validator";
import { validate } from "../middleware/validator";
import * as authController from "../controller/auth.js";

const router = express.Router();

export default router;
