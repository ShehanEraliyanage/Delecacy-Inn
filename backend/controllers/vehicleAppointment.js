
import { VehicleAppointmentModel } from '../models/vehicleAppointment.js';


export const addAppoinmentVehicle = async (req, res) => {
    const vehicle = new VehicleAppointmentModel({
        appointmentID: req.body.appointmentID,
        vehicleID: req.body.vehicleID,
        nic: req.body.nic,
        pickupPlace: req.body.pickupPlace,
        pickupDate: req.body.pickupDate,
        pickupTime: req.body.pickupTime,
        endDate: req.body.endDate,
        endTime: req.body.endTime,
        VehicleSelected: req.body.VehicleSelected,
        amount: req.body.amount,
        status: req.body.status
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

export const getAllVehicleAppointments = async (req, res) => {
    const vehicles = await VehicleAppointmentModel.find({});
    res.send(vehicles);
}

export const getAllVehicleAppointmentCount = async (req, res) => {
    const vehicles = await VehicleAppointmentModel.find().count();
    res.send(String(vehicles));
}


export const deleteVehicleAppointment = async (req, res) => {
    const vehicle = await VehicleAppointmentModel.findOneAndDelete({ _id: req.body.id });
    res.send(vehicle);
}

export const editVehicleAppointment = async (req, res) => {
    try {
        
        const vehicle = await VehicleAppointmentModel.findOneAndUpdate(
            {
                _id: req.body._id
            },
            {
                _id: req.body._id,
                appointmentID: req.body.appointmentID,
                vehicleID: req.body.vehicleID,
                nic: req.body.nic,
                pickupPlace: req.body.pickupPlace,
                pickupDate: req.body.pickupDate,
                pickupTime: req.body.pickupTime,
                endDate: req.body.endDate,
                endTime: req.body.endTime,
                VehicleSelected: req.body.VehicleSelected,
                amount: req.body.amount,
                status: req.body.status
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



export const getSelectedVehicleAppointment = async (req, res) => {
    const vehicle = await VehicleAppointmentModel.findOne({ _id: req.body.id });
    res.send(vehicle);
}

export const getAllDriving = async (req, res, next) => {
    const vehicles = await VehicleAppointmentModel.find({state:"driving"});
    res.send(vehicles);
}
