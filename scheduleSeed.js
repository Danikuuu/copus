const mongoose = require('mongoose');
const Schedule = require('./model/schedule');

const MONGO_URI = 'mongodb+srv://Daniel:Jxkd937QVovHJsld@test.al3h5.mongodb.net/copusDB?retryWrites=true&w=majority&appName=copusDB';

const departments = ['CIT', 'COE', 'CAS'];
const subjects = [
  { code: 'ITE101', name: 'Intro to IT' },
  { code: 'ITE206', name: 'Memory Mgt' },
  { code: 'ITE301', name: 'Networks' },
  { code: 'ITE304', name: 'System Analysis' },
  { code: 'ITE310', name: 'Mobile Dev' }
];
const observers = ['Baylon - Bullena', 'Garcia - Cruz', 'Santos - Reyes'];
const modalities = ['RAD', 'FLEX'];
const statuses = ['completed', 'pending', 'cancelled'];

function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateRandomDateInMarch() {
  const day = Math.floor(Math.random() * 31) + 1;
  return new Date(`2025-03-${day.toString().padStart(2, '0')}T10:00:00Z`);
}

async function seedSchedules() {
  try {
    await Schedule.deleteMany({});
    const data = [];

    for (let i = 1; i <= 20; i++) {
      const subj = getRandomElement(subjects);
      const date = generateRandomDateInMarch();
      const startTime = '10:00 AM';
      const endTime = '11:00 AM';

      data.push({
        firstname: `Faculty${i}`,
        lastname: `Last${i}`,
        department: getRandomElement(departments),
        date: date,
        start_time: startTime,
        end_time: endTime,
        year_level: `Year ${Math.ceil(Math.random() * 4)}`,
        semester: getRandomElement(['Semester 1', 'Semester 2']),
        subject: subj.name,
        subject_code: subj.code,
        observer: getRandomElement(observers),
        modality: getRandomElement(modalities),
        status: getRandomElement(statuses),
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }

    await Schedule.insertMany(data);
    console.log('✅ Seeded 20 schedule records.');
  } catch (err) {
    console.error('❌ Error seeding schedules:', err);
  } finally {
    mongoose.disconnect();
  }
}

// Establish DB connection first
mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('✅ Connected to MongoDB');
    return mongoose.connection.once('open', seedSchedules);
  })
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err);
  });
