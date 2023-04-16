import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("GET students");
});

router.post("/login", (req, res) => {
  res.send("POST login students");
});

router.post("/register", (req, res) => {
  res.send("POST register students");
});

export default router;
