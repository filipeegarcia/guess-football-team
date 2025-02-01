import axios from 'axios';

const API_URL = 'https://guess-football-team-backend.vercel.app';

export const getSquads = async () => {
    const response = await axios.get(`${API_URL}/squads`);
    return response.data;
};
