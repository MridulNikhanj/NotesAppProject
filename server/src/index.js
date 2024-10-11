require('dotenv').config();
require('./db');

const cors = require('cors');
const PORT = process.env.PORT || 3001;
const express = require('express');
const app = express();

app.use(cors());
app.use(express.json());

const userRouter = require('./routers/users.router');
app.use('/api/users', userRouter);

app.get('/', (req, res)=>{
    res.send('Hello cipherschools');
})

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})