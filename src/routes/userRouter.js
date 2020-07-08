const express = require("express");
const Router = express.Router();
const userController = require("../controllers/userController");
const validationMiddleware = require("../middlewares/validationMiddleware");

Router.post("/", validationMiddleware, (req, res, next) => (
    userController.postUser(req, res, next)
));