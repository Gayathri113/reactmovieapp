import axios from 'axios'

const instance=axios.create({
    baseURL:'https://react-own.firebaseio.com/'
})

export default instance