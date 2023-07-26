import axios from 'axios';

export const getServices = async () => {
    try {
        const resp = await axios.get('http://barber.tvangelov.com/api/barber/services');

        return resp.data;
        
    } catch (error) {
        throw new Error(error);
    }
};

export const sendReservation = async (data) => {
    const headers = {
        'Content-Type': 'application/vnd.api+json',
        'Accept': 'application/vnd.api+json'
    };

    try {
        const resp = await axios.post('http://barber.tvangelov.com/api/barber/create', data, headers);
        return resp.status;
    } catch (error) {
        throw new Error(error);
    }
};

export const getReservations = async () => {
    try {
        const resp = await axios.get('http://barber.tvangelov.com/api/barber/reservations');
        const reservations =  resp.data.reduce((acc, curr) => {
            $splits = curr.split(' ');
            if ( acc[$splits[0]] ) {
                acc[$splits[0]].push($splits[1]);
            } else {
                acc[$splits[0]] = [];
                acc[$splits[0]].push($splits[1]);
            }
            return acc
        }, {});

        return reservations; 

    } catch (error) {
        throw new Error(error);
    }
};
