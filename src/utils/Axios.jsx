import axios from 'axios'
import { createClient } from 'pexels'
import React from 'react'


const Axios = axios.create({
    baseURL: 'https://api.pexels.com/v1',
    headers: {
        Authorization: 'CejIshlhqvkfmI5RFME6eSJ1BvBzR8NV79ZxvxAHNgx8gL9E4F44Sh3o',
      },

})

export default Axios