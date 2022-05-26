const Student = require('..model/student.modul.js');
const req = require('express/lib/request');
const res = require('express/lib/response');
module.exports.studentController = {
    getStudent:  (req,res) => {
        Student.find().then((data) => {
        res.json(data)
        })
    },
    postStudent: (req, res) => {
        Student.create({
          name: req.body.name,
          phone: req.body.phone,
          age: req.body.age // возраст
        }).then((data) => {
          res.json(data)
        })
      },
       
    
    deleteStudent: (req,res) => {
        Student.findByIdAndRemove(req.params.id).then(() => {
            res.json("Cтудент удален")
          })
        },
        patchStudent: (req,res) => {
            Student.findByIdAndUpdate(req.params.id,{ 
                name: req.body.name,
                phone: req.body.phone,
                age: req.body.age
              }).then(() => {
                res.json("Cтудент изменен")
              })

            }
        }
    

