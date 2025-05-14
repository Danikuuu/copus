const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  employeeId: { type: String, required: true, unique: true },
  department: String,
  lastname: String,
  firstname: String,
  role: String,
  email: { type: String, required: true, unique: true },
  password: String,
  status: {type: String, default: 'active'},
  isFirstLogin: {
    type: Boolean,
    default: true
  }
});

module.exports = mongoose.model('employee', employeeSchema);
