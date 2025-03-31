import express from 'express';
import bodyParser from 'body-parser';
import userRouter from './routes/user.js';

const app = express();

const PORT = process.env.PORT || 3020;

app.use(bodyParser.json());
app.use('/users', userRouter);

app.get('/',(req, res) => {res.send("Hello home page")});


app.listen(PORT, () => {console.log(`server running on PORT: http://localhost:${PORT}`)});