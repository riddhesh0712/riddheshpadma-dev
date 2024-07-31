const express = require('express')
const connectDB = require('./db')
const cors = require('cors')
const bodyParser = require('body-parser')

const User = require('./models/userData')

const app = express()

const PORT = 5000;

const mongoDBUri = "mongodb://localhost:27017/riddheshpadmadev"
connectDB(mongoDBUri);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/', async (req, res) => {
  const body = req.body;
   try {
    const newUser  = new User({
        name : body.name,
        email : body.email,
        number: body.number,
        company: body.company,
        message: body.message
    })
    await newUser.save();

    res.status(200).json({ message: 'Form submitted successfully' });
  } catch (error) {
    console.error('Error saving form data:', error);
    res.status(500).json({ message: 'Failed to submit form' });
  }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});