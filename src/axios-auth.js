import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://vue-stock-trader-58144-default-rtdb.firebaseio.com'
})

instance.defaults.headers.common['SOMETHING'] = 'something'

export default instance