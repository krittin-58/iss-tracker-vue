import axios from 'axios';

const API_URL = 'http://api.open-notify.org';

const CORS_URL = 'https://cors-anywhere.herokuapp.com';

const ApiService = {
  // eslint-disable-next-line class-methods-use-this
  getCurrentLocationISS() {
    const url = `${CORS_URL}/${API_URL}/iss-now.json`;
    return axios.get(url);
  },

  getPassTimeISS(LAT, LON) {
    const url = `${CORS_URL}/${API_URL}/iss-pass.json?lat=${LAT}&lon=${LON}`;
    return axios.get(url);
  },

  getHumanOnISS() {
    const url = `${CORS_URL}/${API_URL}/astros.json`;
    return axios.get(url);
  },
};

export default ApiService;
