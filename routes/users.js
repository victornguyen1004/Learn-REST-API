import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
    res.send('GET users')
})

router.post('/login', (req, res) => {
    res.send('POST login users') 
})

router.post("/register", (req, res) => {
  res.send("POST register users");
});

export default router;