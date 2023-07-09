const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv');
const userRouter = require('./routes/userRoutes');
const app = express()
const port = 3000

dotenv.config({ path: './config.env' });

app.use(express.json());
app.use('/api/v1/users', userRouter);

app.get('/', (req, res) => {
  res.send('Hello World!')
})



mongoose

  .connect(process.env.DB, {
  })
  .then(() => console.log('DB connection successful!'));

  app.all('*', (req, res, next) => {
    next(new Error(`Can't find ${req.originalUrl} on this server!`, 404));
  });

app.use((err, req, res, next) => {
  console.log(err);
  return res.status(400).json( {
    title: 'Something went wrong!',
    msg: err.message
  });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})