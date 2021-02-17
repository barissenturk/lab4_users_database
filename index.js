const express = require('express');
const mongoose = require('mongoose');
const usersRouter = require('./routes/UsersRoutes.js');

const app = express();
app.use(express.json()); // Make sure it comes back as json

//TODO - Replace you Connection String here
mongoose.connect('mongodb+srv://barissenturk:Baris1234@cluster0.zda4s.mongodb.net/UserData?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(usersRouter);

app.listen(8081, () => { console.log('Server is running...') });