import app from "./routes.js";

const port = 80;
app.listen(port, () => {
  console.log(`app is listening on port: ${port}`)
});
