
import { VehicleModel } from '../models/vehicle.js';


export const addVehicle = async (req, res) => {
    const vehicle = new VehicleModel({
        type: req.body.type,
        identification: req.body.identification,
        vehicleNumber: req.body.vehicleNumber,
        driver: req.body.driver,
        vehicleCapacity: req.body.vehicleCapacity,
        state: req.body.state
    });
    const details = await vehicle.save();
    if (details) {
        res.send({
            status: true,
            details: details
        });
    } else {
        res.send({
            status: false,
        });
    }
}

export const getAllVehicles = async (req, res) => {
    const vehicles = await VehicleModel.find({});
    res.send(vehicles);
}

export const getAllVehicleCount = async (req, res) => {
    const vehicles = await VehicleModel.find().count();
    res.send(String(vehicles));
}


export const deleteVehicle = async (req, res) => {
    const vehicle = await VehicleModel.findOneAndDelete({ _id: req.body.id });
    res.send(vehicle);
}

export const editVehicle = async (req, res) => {
    try {
        
        const vehicle = await VehicleModel.findOneAndUpdate(
            {
                _id: req.body._id
            },
            {
                _id: req.body._id,
                type: req.body.type,
                identification: req.body.identification,
                vehicleNumber: req.body.vehicleNumber,
                driver: req.body.driver,
                vehicleCapacity: req.body.vehicleCapacity,
                state: req.body.state
            },
            {
                new:true
            }
            );

        if (vehicle) {
            res.send({
                status: true,
                details: vehicle  
            });
        } else {
            res.send({
                status: false,
            });
        }

    } catch (error) {
        console.log(error.messaga)
    }
}



export const getSelectedVehicle = async (req, res) => {
    const vehicle = await VehicleModel.findOne({ _id: req.body.id });
    res.send(vehicle);
}