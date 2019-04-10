import axios from 'axios'
import { create } from 'domain';    

export const http = axios.create({
    baseURL: 'http://localhost:3000/api'
})