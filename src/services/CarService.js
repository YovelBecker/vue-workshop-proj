import Axios from 'axios'

var axios = Axios.create({
    withCredentials: true,
    headers: {
        'Access-Control-Allow-Origin': '*',
    }
});


const BASE_URL = '//localhost:3000/car'

export default {
    get,
    getById,
    save,
    remove,
}



async function get() {
    const { data } = await axios.get(BASE_URL)
    return data || [];
}

async function getById(carId) {
    const { data } = await axios.get(`${BASE_URL}/${carId}`)
    return data
}

async function save(car) {
    if (car._id) {
        const { data } = await axios.put(`${BASE_URL}/${car._id}`, car)
        return data
    } else {

        car.img = car.img || 'https://loremflickr.com/600/600/' + car.vendor
        const { data } = await axios.post(`${BASE_URL}`, car)
        return data
    }
}

async function remove(carId) {
    await axios.delete(`${BASE_URL}/${carId}`)
}

