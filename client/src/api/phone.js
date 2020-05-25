import axios from 'axios'

const endpoint_local = 'http://localhost:3001/phones'

const api = {
    phones: {
        async read() {
            try {
                const response = await axios.get(endpoint_local)
                return Promise.resolve(response)
            } catch (error) {
                return Promise.reject(error)
            }
        }
    },
}

export default api


