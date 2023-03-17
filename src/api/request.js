import axios from "axios";
import nProgress from "nprogress";
import 'nprogress/nprogress.css'
import store from "@/store";
import { getToken } from "@/utils/token";

const request = axios.create({
    baseURL:'/api',
    timeout:5000

})

request.interceptors.request.use((config)=>{
    if(store.state.detail.uuid_token){
        config.headers.userTempId = store.state.detail.uuid_token
    }
    if(getToken()){
        config.headers.token = getToken()
    }
    // console.log(store)
    nProgress.start()
    
    return config
})

request.interceptors.response.use((res)=>{
    nProgress.done()
    return res.data
},(error)=>{
    return Promise.reject(new Error('faile'))
})


export default request