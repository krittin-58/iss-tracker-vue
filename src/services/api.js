import axios from 'axios';

const API_URL = 'http://api.open-notify.org';

const CORS_URL = 'https://cors-anywhere.herokuapp.com';

const GOOGLE_MAP_API_URL = 'https://maps.googleapis.com/maps/api/js';
const GOOGLE_MAP_API_KEY = 'AIzaSyDzCJNxwqR9vqUfFONJKUMtjn8nlTqw';

const ApiService = {
  // eslint-disable-next-line class-methods-use-this
  getCurrentLocationISS() {
    const url = `${API_URL}/iss-now.json`;
    return axios.get(url);
  },

  getPassTimeISS(LAT, LON) {
    const url = `${CORS_URL}/${API_URL}/iss-pass.json?lat=${LAT}&lon=${LON}`;
    return axios.get(url);
  },

  getHumanOnISS() {
    const url = `${API_URL}/astros.json`;
    return axios.get(url);
  },

  getGoogleMap() {
    const url = `${GOOGLE_MAP_API_URL}/?key=${GOOGLE_MAP_API_KEY}`;
    return axios.get(url);
  },
};

export default ApiService;
