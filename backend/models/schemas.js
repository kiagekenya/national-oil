const mongoose = require('mongoose')
const Schema = mongoose.Schema


const employeeSchema = new Schema({
    staffNumber: {type:Number},
    checkInDate: {type:Date, default:Date.now},
    staffNumberOut: { type: Number },
  checkOutDate: { type: Date },
    
})

const Employees = mongoose.model('Employees', employeeSchema, 'employees' )

const mySchemas = {'Employees':Employees}

module.exports = mySchemas