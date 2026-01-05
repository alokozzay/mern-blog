const express = require("express");
const cors = require("cors");
const { connect } = require("mongoose");
const usersRoutes = require("./routes/users.routes.js");
const postsRoutes = require("./routes/posts.routes.js");
const { notFound, errorHandler } = require("./middleware/errorMiddleware.js");
require("dotenv").config();

const app = express();

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

app.use("/api/users", usersRoutes);
app.use("/api/posts", postsRoutes);

app.use(notFound);
app.use(errorHandler);

const start = async () => {
    try {
        connect(process.env.MONGO_URI);
        app.listen(process.env.PORT, () => {
            console.log("Server started on port", process.env.PORT);
        });
    } catch (error) {}
};

start();
