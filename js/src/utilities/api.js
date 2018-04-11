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
  },
  categories: {
    get: () => {
      return axios.get('/wp-json/wp/v2/categories')
    }
  }
}

export default api