import axios from "axios"

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'c94cd790a57b4c33933f2a2102d35da6'
    }
})