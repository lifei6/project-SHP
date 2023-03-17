import request from './request'
import mockRequest from './mockAjax'

export const reqCategoryList = ()=>request({url:'/product/getBaseCategoryList',method:'GET'})
export const reqGetBannerList  = ()=>mockRequest({url:'/banner',method:'GET'})
export const reqGetFloorList  = ()=>mockRequest({url:'/floor',method:'GET'})
export const reqGetSearchInfo = (params)=>request({url:'/list',method:'post',data:params})
export const reqGetGoodsInfo = (skuid)=>request({url:`/item/${skuid}`,method:'get'})
export const reqAddOrUpdateShopCart=(skuId,skuNum)=>request({url:`/cart/addToCart/${skuId}/${skuNum}`,method:'post'})
export const reqCartList=()=>request({url:'/cart/cartList',method:'get'})
export const reqDeleteCart=(skuId)=>request({url:`/cart/deleteCart/${skuId}`,method:'delete'})
export const reqUpdateCheckedById=(skuId,isChecked)=>request({url:`/cart/checkCart/${skuId}/${isChecked}`,method:'get'})
// /api/user/passport/sendCode/{phone}
export const reqPassport=(phone)=>request({url:`/user/passport/sendCode/${phone}`,method:'get'})
// /api/user/passport/register
export const reqRegister=(data)=>request({
    url:'/user/passport/register',
    method:'post',
    data
})
// /api/user/passport/login
export const reqLogin=(data)=>request({
    url:'/user/passport/login',
    method:'post',
    data
})
// /api/user/passport/auth/getUserInfo
export const reqUserInfo=()=>request({url:'/user/passport/auth/getUserInfo',method:'get'})
// /api/user/passport/logout
export const reqLogout=()=>request({
    url:'/user/passport/logout',
    method:'get'
})
// /api/user/userAddress/auth/findUserAddressList
export const reqUserAddress=()=>request({
    url:'/user/userAddress/auth/findUserAddressList',
    method:'get'
})
// /api/order/auth/trade
export const reqOrderInfo = ()=>request({
    url:'/order/auth/trade',
    method:'get'
})
// /api/order/auth/submitOrder?tradeNo={tradeNo}
export const reqSubmitOrder=(tradeNo,data)=>request({
    url:`/order/auth/submitOrder?tradeNo=${tradeNo}`,
    method:'post',
    data
})
// /api/payment/weixin/createNative/{orderId}
export const reqPaymentInfo=(orderId)=>request({
    url:`/payment/weixin/createNative/${orderId}`,
    method:'get'
})

// /api/payment/weixin/queryPayStatus/{orderId}
export const reqPayStatus= (orderId)=>request({
    url:`/payment/weixin/queryPayStatus/${orderId}`,
    method:'get'
})
// /api/order/auth/{page}/{limit}

export const reqOrderList=(page,limit)=>request({
    url:`/order/auth/${page}/${limit}`,
    method:'get'

})