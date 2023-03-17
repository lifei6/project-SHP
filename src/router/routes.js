// import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Detail from '@/pages/Detail'
import AddCartSuccess from '@/pages/AddCartSuccess'
import ShopCart from '@/pages/ShopCart'
import Trade from "@/pages/Trade"
import Pay from "@/pages/Pay"
import PaySuccess from '@/pages/PaySuccess'
import Center from '@/pages/Center'
import MyCenter from "@/pages/Center/myCenter"
import GroupCenter from "@/pages/Center/groupCenter"

export default [
    {
        path:'/center',
        component:Center,
        // meta:{show:true},
        children:[
            {
                path:'mycenter',
                component:MyCenter,
            },
            {
                path:'groupcenter',
                component:GroupCenter,
            },
            {
                path:'/center',
                redirect:'/center/mycenter',
            },
        ]
    },
    {
        path:'/home',
        component:()=>import('@/pages/Home'),
        meta:{show:true},
    },
    {
        path:'/search/:keyword?',
        component:Search,
        meta:{show:true},
        name:'search'

    },
    {
        path:'/login',
        name:'login',
        component:Login,
        meta:{show:false},

    },
    {
        path:'/register',
        name:'register',
        component:Register,
        meta:{show:false},
    },
    {
        path:'*',
        redirect:'/home'
    },
    {
        path:'/detail/:skuid',
        component:Detail,
        meta:{show:true},
    },
    {
        path:'/addcartsuccess',
        name:'addcartsuccess',
        component:AddCartSuccess,
        meta:{show:true}
    },
    {
        path:'/shopcart',
        name:'shopcart',
        component:ShopCart,
        meta:{show:true}
    },    
    {
        path:'/trade',
        name:'trade',
        component:Trade,
        meta:{show:true},
        beforeEnter: (to, from, next) => {
            if(from.path.indexOf('/shopcart')!=-1){
                next()
            }else{
                next(false)
            }
        }
    },
    {
        path:'/pay',
        name:'pay',
        component:Pay,
        meta:{show:true},
        beforeEnter: (to, from, next) => {
            if(from.path.indexOf('/trade')!=-1){
                next()
            }else{
                next(false)
            }
        }
    },
    {
        path:'/paysuccess',
        name:'paysuccess',
        component:PaySuccess,
        meta:{show:true},
        beforeEnter: (to, from, next) => {
            if(from.path.indexOf('/pay')!=-1){
                next()
            }else{
                next(false)
            }
        }
    },
    
]