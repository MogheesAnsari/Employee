const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  dob: Date,
  gender: String,
  contact: String,           // Changed to String
  address: String,
  email: String,
  password: String,
  emergencyContact: String,  // Changed to String
  motherName: String,
  motherDOB: Date,
  fatherName: String,
  fatherDOB: Date,
  spouseName: String,
  spouseDOB: Date,
  dateOfJoining: Date,       // Changed to Date
  designation: String,
  department: String,
  bankName: String,
  accountNo: String,         // Changed to String
  ifscCode: String,          // Changed to String
  branch: String
});

module.exports = mongoose.model('Employee', EmployeeSchema);