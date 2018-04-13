import axios from 'axios'

const api = {
  siteInfo: {
    get: () => {
      return axios.get('/wp-json/')
    }
  },
  posts: {
    get: (args = {}) => {
      let url = '/wp-json/wp/v2/posts?'

      for (let i in args) {
        url += `${i}=${args[i]}&`
      }

      return axios.get(url)
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