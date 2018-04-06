import axios from 'axios'

const api = {
  siteInfo: {
    get: () => {
      return axios.get('/wp-json/')
    }
  },
  posts: {
    get: () => {
      return axios.get('/wp-json/wp/v2/posts')
    }
  }
}

export default api