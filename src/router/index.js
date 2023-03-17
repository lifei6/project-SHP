import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'
import { getToken } from '@/utils/token'

Vue.use(VueRouter)

import routes from './routes'

let originPush = VueRouter.prototype.push
VueRouter.prototype.push = function(location,resolve,reject){
    if(resolve&&reject){
        originPush.call(this,location,resolve,reject)
    }else{
        originPush.call(this,location,()=>{},()=>{})
    }
}
let originReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function(location,resolve,reject){
    if(resolve&&reject){
        originReplace.call(this,location,resolve,reject)
    }else{
        originReplace.call(this,location,()=>{},()=>{})
    }
}

let routers = new VueRouter({
    routes,
    scrollBehavior(to, from, savedPosition) {
        // 始终滚动到顶部
        return { y:0 }
      },
})

routers.beforeEach(async (to,from,next)=>{
    let token = getToken()
    let name = store.state.user.username
    if(token){
        if(to.path=='/login'){
            next('/home')
        }else{
            if(!name){
                try {
                    await store.dispatch('getUserInfo')
                    next()
                } catch (error) {
                    // token失效
                    await store.dispatch('getLogout')
                    next('/login')
                }
            }else{
                next()
            }
        }
    }else{
        let toPath = to.path
        if(to.path.indexOf('/pay')!=-1||to.path.indexOf('/trade')!=-1||to.path.indexOf('/center')!=-1){
            next('/login?redirect='+toPath)
        }else{
            next()
        }
    }
})
export default routers