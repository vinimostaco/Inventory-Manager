import app from "./app.js";
import config from "./config/environment.js";
console.log(config.db.user);

app.listen(config.port, () => {
  console.log(`escutando na ${config.port}`);
});
