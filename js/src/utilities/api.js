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
    get: (args = {}) => {
      let url = '/wp-json/wp/v2/pages?'

      for (let i in args) {
        url += `${i}=${args[i]}&`
      }
      
      return axios.get(url)
    }
  },
  categories: {
    get: (args = {}) => {
      let url = '/wp-json/wp/v2/categories?'

      for (let i in args) {
        url += `${i}=${args[i]}&`
      }
      
      return axios.get(url)
    }
  }
}

export default api