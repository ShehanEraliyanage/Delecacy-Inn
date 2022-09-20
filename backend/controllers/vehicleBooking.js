import { VehicleBookingModel } from '../models/vehicleBooking.js';


export const addVehicleBooking = async (req, res) => {
    console.log(req.body);
    const vehicleBooking = new VehicleBookingModel({
        appointmentID: req.body.appointmentID,
        type: req.body.type,
        guests: req.body.guests,
        places: req.body.places,
        date: req.body.date,
        time: req.body.time,
        bookDate: req.body.bookDate,
        state: req.body.state
    });
    const details = await vehicleBooking.save();
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

export const getAllVehicleBooking = async (req, res) => {
    const vehicleBooking = await VehicleBookingModel.find({});
    res.send(vehicleBooking);
}

export const getAllVehicleBookingCount = async (req, res) => {
    const vehicleBooking = await VehicleBookingModel.find().count();
    res.send(String(vehicleBooking));
}


export const deleteVehicleBooking = async (req, res) => {
    const vehicleBooking = await VehicleBookingModel.findOneAndDelete({ _id: req.body.id });
    res.send(vehicleBooking);
}

export const editVehicleBooking = async (req, res) => {
    try {
        console.log(req);
        const vehicleBooking = await VehicleBookingModel.findOneAndUpdate(
            {
                _id: req.body._id
            },
            {
                appointmentID: req.body.appointmentID,
                type: req.body.type,
                guests: req.body.guests,
                places: req.body.places,
                date: req.body.date,
                time: req.body.time,
            },
            {
                new:true
            }
            );

        if (vehicleBooking) {
            res.send({
                status: true,
                details: customer  
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



export const getSelectedVehicleBooking = async (req, res) => {
    const vehicleBooking = await VehicleBookingModel.findOne({ _id: req.body.id });
    res.send(vehicleBooking);
}