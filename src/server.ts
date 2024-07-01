import app from "./app.js";

const PORT: number = 3200;

app.listen(PORT, () => {
  console.log(`escutando na ${PORT}`);
});
