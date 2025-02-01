import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const getSquads = async () => {
    const response = await axios.get(`${API_URL}/squads`);
    return response.data;
};
