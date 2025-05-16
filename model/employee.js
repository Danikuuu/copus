const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  employeeId: { type: String, required: true, unique: true },
  department: String,
  lastname: String,
  firstname: String,
  role: { type: String, enum: ['admin', 'Obserser', 'CIT Teacher']},
  email: { type: String, required: true, unique: true },
  password: String,
  resetToken: String,
  status: {type: String, default: 'active'},
  isFirstLogin: {
    type: Boolean,
    default: true
  }
});

module.exports = mongoose.model('employee', employeeSchema);
