import app from "./app.js";
import config from "./config/environment.js";

app.listen(config.port, () => {
  console.log(`escutando na ${config.port}`);
});
