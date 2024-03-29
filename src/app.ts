import express from "express";
import logger from "morgan";
import * as path from "path";
const cors = require("cors");

import { errorHandler, errorNotFoundHandler } from "./middlewares/errorHandler";

// Routes
import { index } from "./routes/index";
// Create Express server
export const app = express();

// Express configuration
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "pug");

app.use(logger("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "../public")));

const corsOptions = {
  origin: "*", //domain
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use("/", index);
app.use(errorNotFoundHandler);
app.use(errorHandler);
