import { reqGetGoodsInfo, reqAddOrUpdateShopCart } from "@/api"
import {getUUID} from '@/utils/uuid_token'
const state = {
    goodInfo:{},
    uuid_token:getUUID()
}
const mutations = {
    GOODINFO(state,goodInfo){
        state.goodInfo=goodInfo
    }
}
const actions = {
    async getGoodInfo({commit},skuid){
        let result = await reqGetGoodsInfo(skuid)
        if(result.code==200){
            commit('GOODINFO',result.data)
        }
    },
    async addOrUpdateShopCart({commit},{skuId,skuNum}){
        // console.log(skuId,skuNum)
        let result = await reqAddOrUpdateShopCart(skuId,skuNum)
        if(result.code==200){
            return result.code
        }else{
            return Promise.reject(result.code)
        }

    }
}
const getters = {
    categoryView(state){
        return state.goodInfo.categoryView ||{}
    },
    skuInfo(state){
        return state.goodInfo.skuInfo ||{}
    },
    spuSaleAttrList(state){
        return state.goodInfo.spuSaleAttrList || []
    }
}
export default {
    state,
    mutations,
    actions,
    getters
}