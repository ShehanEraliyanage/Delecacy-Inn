import axios from 'axios';

// Config
import { baseURL } from '../config';

export const addVehicle = async (details) => {
    const { data } = await axios.post(baseURL + '/vehicle/addVehicle/', details);
    return data;
}

export const getAllVehicles = async () => {
    const { data } = await axios.get(baseURL + '/vehicle/getAllVehicles/');
    return data;
}

export const deleteVehicle = async (id) => {
    const { data } = await axios.post(baseURL + '/vehicle/delete/', {id: id});
    return data;
}

export const editVehicle = async (details) => {
    const { data } = await axios.post(baseURL + '/vehicle/edit/', details);
    return data;
}

export const getSelectedVehicle = async (id) => {
    const { data } = await axios.post(baseURL + '/vehicle/getSelectedVehicle/', {id: id});
    return data;
}

export const getAllVehicleCount = async () => {
    const { data } = await axios.get(baseURL + '/vehicle/getAllVehicleCount/');
    return data;
}
