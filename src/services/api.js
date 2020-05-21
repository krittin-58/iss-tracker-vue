import axios from 'axios';

const API_URL = 'http://api.open-notify.org/';

class ApiService {
  // eslint-disable-next-line class-methods-use-this
  getCurrentLocationISS() {
    const url = `${API_URL}/iss-now.json`;
    return axios.get(url);
  }
}

export default ApiService;
