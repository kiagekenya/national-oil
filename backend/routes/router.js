const express = require('express');
const router = express.Router()
const schemas = require('../models/schemas')

router.post('/employee', async(req, res) => {
    const {staffNumber} = req.body


    const employeesData = {staffNumber:staffNumber}
    const newEmployees = new schemas.Employees(employeesData)
    const saveEmployees = await newEmployees.save()
    if (saveEmployees) {
        res.send(`Hey, checkIn for staff number ${staffNumber} recorded. Good day`)
    }
    res.end()
    
});

router.get('/employee/:staffNumber', async (req, res) => {
    const { staffNumber } = req.params;
  
    try {
      const employees = await schemas.Employees.find({ staffNumber: staffNumber });
      if (employees.length > 0) {
        const employeeData = employees.map((employee) => {
          return {
            ...employee.toObject(),
            startDate: req.query.startDate,
            endDate: req.query.endDate,
          };
        });
        res.json(employeeData);
      } else {
        res.status(404).json('No employees found with the given staff number');
      }
    } catch (error) {
      res.status(500).json('Internal server error');
    }
  });

  //checkout route 

  router.post('/employee/checkout', async (req, res) => {
    const { staffNumberOut } = req.body;
  
    try {
      const checkIn = await schemas.Employees.findOne({ staffNumber: staffNumberOut, checkOutDate: null });
  
      if (checkIn) {
        checkIn.checkOutDate = new Date();
        await checkIn.save();
        res.send(`Hey, checkOut for staff number ${staffNumberOut} recorded. Have a nice day!`);
      } else {
        res.status(404).json('No active check-in found for the given staff number');
      }
    } catch (error) {
      res.status(500).json('Internal server error');
    }
  });
  
  
  





module.exports = router