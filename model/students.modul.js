const mongoose = require('mongoose');
const studentSchema = mongoose.Schema({
    name:'Deni',
    phone:'Iphone',
    age: 24
});

const Student = mongoose.model('Student',studentSchema);

module.exports = Student