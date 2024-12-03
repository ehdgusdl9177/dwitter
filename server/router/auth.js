import express from "express";
import {} from "express-async-errors";
import { body } from "express-validator";
import { validate } from "../middleware/validator";
import * as authController from "../controller/auth.js";

const router = express.Router();

const validateCredential = [
  body("username")
    .trim()
    .notEmpty()
    .withMessage("username should be at least 5 chracterts"),
  body("password")
    .trim()
    .isLength({ min: 5 })
    .withMessage("password should be at least 5 characters"),
  validate,
];

router.post("/signup", authController.signup);
router.post("/login", authController.login);

export default router;
