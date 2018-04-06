import axios from 'axios'

const api = {
  siteInfo: {
    get: () => {
      return axios.get('/wp-json/')
    }
  }
}

export default api