import { reqUserAddress,reqOrderInfo } from "@/api"
const state={
    userAddress:[],
    orderInfo:{}
}
const mutations={
    USERADDRESS(state,userAddress){
        state.userAddress = userAddress
    },
    ORDERINFO(state,orderInfo){
        state.orderInfo = orderInfo
    }

}
const actions={
    async getUserAddress({commit}){
        let result = await reqUserAddress()
        // console.log(result)
        if(result.code==200){
            commit('USERADDRESS',result.data)
            return 'ok'
        }
    },
    async getOrderInfo({commit}){
        let result = await reqOrderInfo()
        // console.log(result)
        if(result.code==200){
            commit('ORDERINFO',result.data)
            return 'ok'
        }
    }
}
const getters={
    detailArrayList(state){
        return state.orderInfo.detailArrayList || []
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}
