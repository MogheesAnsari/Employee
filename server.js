const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const EmployeeModel = require('./models/Employee');

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb://127.0.0.1:27017/Employee', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:', err));

// API Endpoint
app.post('/Employee-Data', async (req, res) => {
  try {
    // Map frontend field names to backend schema
    const employeeData = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      dob: req.body.dob,
      gender: req.body.gender,
      contact: req.body.contactNo,          // Map contactNo -> contact
      emergencyContact: req.body.emergencyContactNo, // Map emergencyContactNo -> emergencyContact
      address: req.body.address,
      email: req.body.email,
      password: req.body.password,
      motherName: req.body.motherName,
      motherDOB: req.body.motherDob,        // Map motherDob -> motherDOB
      fatherName: req.body.fatherName,
      fatherDOB: req.body.fatherDob,        // Map fatherDob -> fatherDOB
      spouseName: req.body.spouseName,
      spouseDOB: req.body.spouseDob,        // Map spouseDob -> spouseDOB
      dateOfJoining: req.body.dateOfJoining,
      designation: req.body.designation,
      department: req.body.department,
      bankName: req.body.bankName,
      accountNo: req.body.accountNo,
      ifscCode: req.body.ifscCode,
      branch: req.body.branch
    };

    const newEmployee = await EmployeeModel.create(employeeData);
    res.status(201).json(newEmployee);
  } catch (error) {
    console.error('Error saving employee:', error);
    res.status(500).json({ error: 'Failed to save employee data' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});