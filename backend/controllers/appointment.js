
import { AppointmentModel } from '../models/appointment.js';


export const addAppointment = async (req, res) => {

    let date_ob = new Date();

    let date = ("0" + date_ob.getDate()).slice(-2);
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    let year = date_ob.getFullYear();
    
    let sysDate = year + "-" + month + "-" + date;


    console.log(req.body);
    const appointment = new AppointmentModel({
        nic: req.body.nic,
        guest: req.body.guest,
        nigth: req.body.nigth,
        room: req.body.room,
        date: sysDate,
        appointmentDate: req.body.appointmentDate,
        state: req.body.state
    });
    const details = await appointment.save();
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

export const getAllAppointments = async (req, res) => {
    const appointment = await AppointmentModel.find({});
    res.send(appointment);
}

export const getAllAppointmentsCount = async (req, res) => {
    const appointment = await AppointmentModel.find().count();
    res.send(String(appointment));
}


export const deleteAppointment = async (req, res) => {
    const appointment = await AppointmentModel.findOneAndDelete({ _id: req.body.id });
    res.send(appointment);
}

export const editAppointment = async (req, res) => {
    try {
        console.log(req);
        const appointment = await AppointmentModel.findOneAndUpdate(
            {
                _id: req.body._id
            },
            {
                _id: req.body._id,
                nic: req.body.nic,
                guest: req.body.guest,
                nigth: req.body.nigth,
                room: req.body.room,
                appointmentDate: req.body.appointmentDate,
            },
            {
                new:true
            }
            );

        if (appointment) {
            res.send({
                status: true,
                details: appointment  
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



export const getSelectedAppointment = async (req, res) => {
    const appointment = await AppointmentModel.findOne({ _id: req.body.id });
    res.send(appointment);
}