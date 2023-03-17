import { reqCartList,reqDeleteCart,reqUpdateCheckedById } from "@/api"
const state={
    cartList:[],
}
const mutations={
    CARTLIST(state,cartList){
        state.cartList=cartList
    }
}
const actions={
    async getCartList({commit}){
        let result = await reqCartList()
        // console.log(result)
        if(result.code==200){
            commit('CARTLIST',result.data)
        }
    },
    async getDeleteCart({commit},skuId){
        let result = await reqDeleteCart(skuId)
        // console.log(result)
        if(result.code==200){
            return result.code
        }else{
            return Promise.reject('失败了！')
        }
    },
    async getUpdateCheckedById({commit},{skuId,isChecked}){
        let result = await reqUpdateCheckedById(skuId,isChecked)
        if(result.code==200){
            return result.code
        }else{
            return Promise.reject('失败了！')
        }
    },
    updateAllCartIsChecked({dispatch,state},isChecked){
        let promiseAll=[]
        state.cartList[0].cartInfoList.forEach(cart=>{
            let promise = dispatch('getUpdateCheckedById',{skuId:cart.skuId,isChecked})
            promiseAll.push(promise)
        })
        // console.log(promiseAll,Promise.all(promiseAll))
        return Promise.all(promiseAll)
    },
    deleteAllCheckedCart({dispatch,state}){
        let promiseAll=[];
        state.cartList[0].cartInfoList.forEach(cart=>{
            if(cart.isChecked==1){
                let promise = dispatch('getDeleteCart',cart.skuId)
                promiseAll.push(promise)
            }
        })
        return Promise.all(promiseAll)
    }
    
}
const getters={
    cartList(state){
        return state.cartList[0]||{}
    },
}
export default {
    state,
    mutations,
    actions,
    getters
}