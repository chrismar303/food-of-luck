import axios from 'axios'

export const yelpApi = {
  install: (app, options) => {
    app.config.globalProperties.$yelpApi = axios.create({
      baseURL: options.baseUrl,
      headers: {
        accept: 'application/json',
        Authorization: options.token ? `Bearer ${options.token}` : ''
      }
    })
  }
}
