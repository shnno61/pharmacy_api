import express from "express";
import { Request, Response } from "express";
import config from "./config";
import bodyParser from "body-parser";
import routes from "./routes";
const port = config.port as unknown as number;

const app: express.Application = express();
app.use(bodyParser.json());
app.use("/pharmacy", routes);
app.use((req: Request, res: Response) => {
  res.status(500).json({ status: "failed", info: "unvalid route" });
});

app.listen(port, function () {
  console.log(`the server is running at port: ${port}`);
});

export default app;
