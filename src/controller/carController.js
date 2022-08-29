const { model } = require('mongoose');
const app = require('../app');
const Car = require('../model/carModel');
const {carValidate} = require('./validate');

const carController = {

    getCar: async function (req, res) {
        try {
            const carList = await Car.find();
            res.status(200).json({
                msg: "Listed all cars !!!",
                result: carList
            })
        } catch (error) {
            res.status(400).json({ error })
        }
    },



    getCarById: async function (req, res) {
        try {
            const car = await Car.findById(req.params.id)
            res.status(200).json({
                msg: "Succesfully search by id",
                result: car
            })
        } catch (error) {
            res.status(400).json({ error });
        };
    },


    createCar: async function (req, res) {
        const {error} = carValidate(req.body);
        if(error){return res.status(400).send(error.message)}

        const selectedCar = await Car.findOne({model: req.body.model});
        console.log(selectedCar)
        if (selectedCar) return res.status(400).json({ msg: "Car already exists" });

        const car = new Car({
            model: req.body.model,
            brand: req.body.brand,
            type: req.body.type,
            available: req.body.available,
        });

        try {
            const savedCar = await car.save()
            res.status(200).send(savedCar);
        } catch (error) {
            res.status(400).json({ error });
        };
    },


    updateCar: async function (req, res) {
        const {error} = carValidate(req.body);
        if(error){return res.status(400).send(error.message)}
        
        try {
            const car = await Car.findByIdAndUpdate(req.params.id, req.body)
            res.status(200).json({
                msg: "Successfully updated Data !!"
            })

        } catch (error) {
            res.status(400).json({
                msg: "Failed to update data"
            })
        }
    },


    removeCar: async function (req, res) {
        const car = await Car.findById(req.params.id)
        if (!car) {
            res.status(404).json({
                msg: "Car not Found !!!"
            })
        }
        await car.remove()
        res.status(200).json({
            msg: "Successfully removed user !!"
        })
    }

}


module.exports = carController;