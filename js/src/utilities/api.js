import axios from 'axios'

return {
  siteInfo: {
    get: () => {
      return axios.get('/wp-json/')
    }
  }
}