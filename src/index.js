require('dotenv').config();
const express = require('express');
const app = express();
const config = require("./config");
const userRouter = require("./routes/userRouter");
const errorMiddleware = require("./middlewares/errorMiddleware");

app.use(express.json());

app.use('/user', userRouter);

app.use(errorMiddleware);

app.listen(config.port, config.host, () => {
    try {
        console.log(`Up and running: ${config.host}:${config.port}`);
    } catch(error) {
        console.log(error);
    }
});