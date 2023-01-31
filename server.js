import express from "express";
const app = express();

app.get("/api", (req, res) => {
  res.status(200).json({ success: true, name: "aman" });
});

app.listen(5000, () => console.log(`Server started`));
