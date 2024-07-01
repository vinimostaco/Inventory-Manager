import express, { Request, Response } from "express";

const app = express();
app.use(express.json());

app.post("/", (req: Request, res: Response) => {
  console.log(req.body);
});
export default app;
