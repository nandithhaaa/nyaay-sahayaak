require('dotenv').config()
const { log } = require('console');
const express=require('express');
const mongoose =require('mongoose');
const userRouter =require('./routes/user')

const app=express();
app.use(express.json())



mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then((result) => {
    console.log(`Connected to MongoDB. Starting server on port ${process.env.PORT}`);
    app.listen(process.env.PORT);
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
    process.exit(1); // Exit the process if unable to connect to MongoDB
  });
  

app.use('/api/user',userRouter);
