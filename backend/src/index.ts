import express from "express";
import usersRouter from "./routes/users";
import authRouter from "./routes/auth"
import errorHandler from './routes/error'
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import logger from "./middleware/logger";

const app = express();

app.use(express.json());
app.use(cors({
  credentials: true
}));
app.use(cookieParser());

const morganFormat = ":method :url :status :response-time ms";

app.use(
  morgan(morganFormat, {
    stream: {
      write: (message) => {
        const logObject = {
          method: message.split(" ")[0],
          url: message.split(" ")[1],
          status: message.split(" ")[2],
          responseTime: message.split(" ")[3],
        };
        logger.info(JSON.stringify(logObject));
      },
    },
  })
);

app.use("/api/v1/users", usersRouter);
app.use("/api/v1/", authRouter)
app.use(errorHandler)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Running on Port ${PORT}`);
});
