// seed.js
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Employee = require('./model/employee'); // adjust path if different

// Sample data
const seedEmployees = [
  {
    employeeId: 'EMP001',
    department: 'IT',
    lastname: 'Doe',
    firstname: 'John',
    role: 'admin',
    email: 'john.doe@example.com',
    password: 'password123'
  },
  {
    employeeId: 'EMP002',
    department: 'HR',
    lastname: 'Smith',
    firstname: 'Jane',
    role: 'employee',
    email: 'jane.smith@example.com',
    password: 'password123'
  },
  {
    employeeId: 'SUPP ADD',
    department: 'IT',
    lastname: 'Doe',
    firstname: 'John',
    role: 'super_admin',
    email: 'admin@example.com',
    password: 'password123'
  }
];

async function seedDB() {
  try {
    await mongoose.connect('mongodb+srv://Daniel:Jxkd937QVovHJsld@test.al3h5.mongodb.net/copusDB?retryWrites=true&w=majority&appName=copusDB', {
        useNewUrlParser: true,
        useUnifiedTopology: true
      });      
    console.log('✅ Connected to DB');

    await Employee.deleteMany({});
    console.log('🧹 Old employees removed');

    for (let emp of seedEmployees) {
      emp.password = await bcrypt.hash(emp.password, 10); // Hash password
      await Employee.create(emp);
    }

    console.log('🌱 Seed data inserted');
    process.exit();
  } catch (err) {
    console.error('❌ Seeding failed:', err);
    process.exit(1);
  }
}

seedDB();
