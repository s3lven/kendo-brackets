import express from "express";

// Routes
import usersRouter from "./routes/users";

// Utilities
import cors from "cors";
import cookieParser from "cookie-parser";

// Middlewares
import morgan from "morgan";
import logger from "./middleware/logger";
import { errorHandler } from "./middleware/exception-handler";
import { pageNotFoundExceptionHandler } from "./middleware/page-not-found-exception-handler";
import { clerkMiddleware } from "@clerk/express";

const app = express();

// app.use(clerkMiddleware())
app.use(express.json());
app.use(
	cors({
		credentials: true,
	})
);
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
app.use('*', pageNotFoundExceptionHandler)
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log(`Running on Port ${PORT}`);
});
