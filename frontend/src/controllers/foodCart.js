import axios from 'axios';

// Config
import { baseURL } from '../config';

export const addAllCartItems = async (itemsArr, id) => {
    // console.log(baseURL )
    var month = new Date().getUTCMonth() + 1; //months from 1-12
    var day = new Date().getUTCDate();
    var year = new Date().getUTCFullYear();
    let date = year + "-" + month + "-" + day;
    let time = new Date().toLocaleTimeString('en-US');
    let orderId = new Date().toISOString();

    for (let item of itemsArr) {
        // console.log(item)
        let newItem = {
            reservationId: id, 
            date: date,
            time: time,
            itemId: item.item.id,
            itemName: item.item.name,
            price: item.price, 
            orderId: orderId
        }
        // console.log(newItem)
        const { data } = await axios.post(baseURL + '/foodCart/add', newItem);
    }
    return true;
}