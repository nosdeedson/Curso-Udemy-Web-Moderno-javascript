import axios from 'axios'
import { showError } from '../global'

const success = res => res
const error = err =>{
    if ( 401 === err.response.status){
        showError({login : true})
        window.location = '/'
    }else{
        return Promise.reject(err)
    }
}

axios.interceptors.response.use(success, error)