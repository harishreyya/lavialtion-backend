const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

// mongodb+srv://hari:hari@cluster0.hsmpfuf.mongodb.net/multiStepForm?retryWrites=true&w=majority
mongoose.connect('mongodb+srv://hari:hari@cluster0.hsmpfuf.mongodb.net/multiStepForm?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const FormSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    phone: String,
    address: String,
    files: [String],
    selectedOptions: [String],
  });
  
  const Form = mongoose.model('Form', FormSchema);

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const User = mongoose.model('User', UserSchema);

app.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const user = new User({ name, email, password });
    await user.save();
    res.status(200).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to register user' });
  }
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email, password });
    if (user) {
      res.status(200).json({ message: 'Login successful' });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Login failed' });
  }
});

app.post('/submit', async (req, res) => {
  const { name, email, phone, address, files, selectedOptions } = req.body;
  try {
    const user = new Form({ name, email, phone, address, files, selectedOptions });
    await user.save();
    res.status(200).json({ message: 'Form data saved successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to save form data' });
  }
});

app.get('/submissions', async (req, res) => {
  try {
    const submissions = await Form.find();
    res.status(200).json(submissions);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch submissions' });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
