import Axios from 'axios';

const axios = Axios.create({
  baseURL: 'http://webapi-bobcurrymagic.azurewebsites.net/api'
});

export default axios;
