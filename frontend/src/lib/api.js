import axios from 'axios'
const baseUrl = '/api'

export const getAllBreads = () => {
  return axios.get(`${baseUrl}/breads`)
}

export const showSingleBread = (id) => {
  return axios.get(`${baseUrl}/breads/${id}`)
}
