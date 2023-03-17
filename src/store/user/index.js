import {reqPassport} from '@/api'
import { reqRegister,reqLogin,reqUserInfo,reqLogout } from '@/api'
import { setToken,removeToken } from '@/utils/token'
const state={
    code:'',
    token:'',
    username:'',
}
const mutations = {
    GETCODE(state,code){
        state.code = code
    },
    GETTOKEN(state,token){
        state.token =token
    },
    USERNAME(state,username){
        state.username = username
    },
    CLEAR(state){
        state.username = ''
        state.token='',
        removeToken()
    }
}
const actions ={
    async getCode({commit},phone){
        let result = await reqPassport(phone)
        // console.log(result)
        if(result.code==200){
            commit('GETCODE',result.data)
            return 'ok'
        }else{
            return Promise.reject('失败了')
        }
    },
    async getRegister({commit},data){
         let result = await reqRegister(data)
        //  console.log(result)
         if(result.code==200){
            return result.code
         }else{
            return Promise.reject(result.message)
         }
    },
    async getLogin({commit},data){
        let result = await reqLogin(data)
        // console.log(result)
        if(result.code==200){
            setToken(result.data.token)
            commit('GETTOKEN',result.data.token)
           return result.code
        }else{
           return Promise.reject(result.message)
        }
   },
   async getUserInfo({commit}){
    let result = await reqUserInfo()
    console.log(result)
    if(result.code==200){
        commit("USERNAME",result.data.name)
        return 'ok'
    }
   },
   async getLogout({commit}){
    let result = await reqLogout()
    console.log(result)
    if(result.code==200){
        commit('CLEAR')
        return 'ok'
    }else{
        return Promise.reject('退出失败')
    }
   }
}
const getters = {}
export default {
    state,
    mutations,
    actions,
    getters
}