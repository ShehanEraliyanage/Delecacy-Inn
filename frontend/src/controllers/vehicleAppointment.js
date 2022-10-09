import axios from 'axios';

// Config
import { baseURL } from '../config';

export const confirmVehicleBooking = async (newItem ) => {

    const { data } = await axios.post(baseURL + '/vehicleAppointment/add/', newItem)
    return data;
}

export const getAllDriving = async () => {
    const { data } = await axios.get(baseURL + '/vehicleAppointment/getAllDriving/');
    return data;
}

export const getAllCompleted = async () => {
    const { data } = await axios.get(baseURL + '/vehicleAppointment/getAllCompleted/');
    return data;
}


export const editVehicleBooking = async (details ) => {

    const { data } = await axios.post(baseURL + '/vehicleAppointment/edit/', details)
    return data;
}
