import React, { useState } from 'react';
import axios from 'axios';
import {
  Box,
  TextField,
  Button,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  FormControl,
  Typography,
  Divider
} from '@mui/material';

const EmployeeForm = () => {
  // Initialize all form fields with empty strings
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    gender: '',
    contactNo: '',
    emergencyContactNo: '',
    address: '',
    email: '',
    password: '',
    motherName: '',
    motherDob: '',
    fatherName: '',
    fatherDob: '',
    spouseName: '',
    spouseDob: '',
    child: '',
    dateOfJoining: '',
    designation: '',
    department: '',
    bankName: '',
    accountNo: '',
    ifscCode: '',
    branch: ''
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send form data to the backend
      const response = await axios.post('http://localhost:5000/Employee-Data', formData);
      console.log('Data saved:', response.data);
      alert('Employee registered successfully!');

      // Reset form after successful submission
      setFormData({
        firstName: '',
        lastName: '',
        dob: '',
        gender: '',
        contactNo: '',
        emergencyContactNo: '',
        address: '',
        email: '',
        password: '',
        motherName: '',
        motherDob: '',
        fatherName: '',
        fatherDob: '',
        spouseName: '',
        spouseDob: '',
        child: '',
        dateOfJoining: '',
        designation: '',
        department: '',
        bankName: '',
        accountNo: '',
        ifscCode: '',
        branch: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to register employee. Please try again.');
    }
  };

  return (
    <Box sx={{ p: 3, maxWidth: 800, margin: 'auto' }}>
      <Typography variant="h4" gutterBottom align="center">
        Employee Registration
      </Typography>
      <Divider sx={{ mb: 3 }} />
      <form onSubmit={handleSubmit}>
        {/* Basic Details */}
        <Typography variant="h6" gutterBottom>Basic Details</Typography>
        <Grid container spacing={3} sx={{ mb: 3 }}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              label="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              label="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              label="Date of Birth"
              type="date"
              InputLabelProps={{ shrink: true }}
              name="dob"
              value={formData.dob}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth required>
              <InputLabel>Gender</InputLabel>
              <Select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                label="Gender"
              >
                <MenuItem value="" disabled>Select Gender</MenuItem>
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              label="Email ID"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              label="Password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              label="Contact Number"
              name="contactNo"
              value={formData.contactNo}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              label="Emergency Contact Number"
              name="emergencyContactNo"
              value={formData.emergencyContactNo}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              label="Address"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
          </Grid>
        </Grid>

        {/* Family Details */}
        <Typography variant="h6" gutterBottom>Family Details</Typography>
        <Grid container spacing={3} sx={{ mb: 3 }}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Mother's Name"
              name="motherName"
              value={formData.motherName}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Mother's DOB"
              type="date"
              InputLabelProps={{ shrink: true }}
              name="motherDob"
              value={formData.motherDob}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Father's Name"
              name="fatherName"
              value={formData.fatherName}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Father's DOB"
              type="date"
              InputLabelProps={{ shrink: true }}
              name="fatherDob"
              value={formData.fatherDob}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Spouse Name"
              name="spouseName"
              value={formData.spouseName}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Spouse DOB"
              type="date"
              InputLabelProps={{ shrink: true }}
              name="spouseDob"
              value={formData.spouseDob}
              onChange={handleChange}
            />
          </Grid>
        </Grid>

        {/* Payslip Details */}
        <Typography variant="h6" gutterBottom>Payslip Details</Typography>
        <Grid container spacing={3} sx={{ mb: 3 }}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              label="Date of Joining"
              type="date"
              InputLabelProps={{ shrink: true }}
              name="dateOfJoining"
              value={formData.dateOfJoining}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              label="Designation"
              name="designation"
              value={formData.designation}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              label="Department"
              name="department"
              value={formData.department}
              onChange={handleChange}
            />
          </Grid>
        </Grid>

        {/* Bank Details */}
        <Typography variant="h6" gutterBottom>Bank Details</Typography>
        <Grid container spacing={3} sx={{ mb: 3 }}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              label="Bank Name"
              name="bankName"
              value={formData.bankName}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              label="Account Number"
              name="accountNo"
              value={formData.accountNo}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              label="IFSC Code"
              name="ifscCode"
              value={formData.ifscCode}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              label="Branch"
              name="branch"
              value={formData.branch}
              onChange={handleChange}
            />
          </Grid>
        </Grid>

        {/* Submit Button */}
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Submit
          </Button>
        </Grid>
      </form>
    </Box>
  );
};

export default EmployeeForm;