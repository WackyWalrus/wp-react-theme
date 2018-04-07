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
  },
  pages: {
    get: () => {
      return axios.get('/wp-json/wp/v2/pages')
    }
  }
}

export default api