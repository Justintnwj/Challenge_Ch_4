import express from "express";
import path from "path";

const app = express();
const __dirname = path.resolve();

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  console.log(__dirname);
  res.sendFile(path.join(__dirname, "public/HTML_Challenge2.html"));
});

app.listen("3000", () => {
  console.log("listening");
});
