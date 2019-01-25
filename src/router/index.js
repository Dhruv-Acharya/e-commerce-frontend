import Vue from 'vue'
import Router from 'vue-router'
import signup from '@/pages/signup'
import BootstrapVue from 'bootstrap-vue'
import Homepage from '@/pages/Homepage'
import Cartpage from '@/pages/Cartpage'
import login from '@/pages/login'
import Categories from '@/pages/Categories'
import Productdescription from '@/pages/Productdescription'
import Orderhistory from '@/pages/Orderhistory'
import Checkout from '@/pages/Checkout'
import Cart from '@/pages/Cart'
import Removefromcart from '@/pages/Removefromcart'
import Reviews from '@/pages/Reviews'
import Search from '@/pages/Search'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

Vue.use(BootstrapVue)

Vue.use(Router)

export default new Router({
  mode:'history', 
  routes: [
    // {
    //   path: '',
    //   name: 'App',
    //   component: App
    // },
    {
      path:'/signup',
      name:'signup',
      component: signup
    },
    {
      path:'/Homepage',
      name:'Homepage',
      component: Homepage
    },
    {
      path:'/Cartpage/:cid/:pid/:mid/:qn',
      name:'Cartpage',
      component:Cartpage
    },
    {
      path:'/login',
      name:'login',
      component: login      
    },
    {
      path:'/Electronics/:id',
      name:'Electronics',
      component:Categories      
    },
    {
      path:'/Home&Furniture/:id',
      name:'Home&Furniture',
      component:Categories      
    },
    {
      path:'/Clothes/:id',
      name:'Clothes',
      component:Categories      
    },
    {
      path:'/Watches/:id',
      name:'Watches',
      component:Categories      
    },
    {
      path:'/Mobile/:id',
      name:'Mobile',
      component:Categories      
    },
    {
      path:'/Shoes/:id',
      name:'Shoes',
      component:Categories      
    },
    {
      path:'/Productdescription/:id',
      name:'Productdescription',
      component:Productdescription      
    },
    {
      path:'/Orderhistory/:custoId',
      name:'Orderhistory',
      component:Orderhistory     
    },
    {
      path:'/Checkout/:custId',
      name:'Checkout',
      component:Checkout
    },
    {
      path:'/Cart/:customId',
      name:'Cart',
      component:Cart
    },
    {
      path:'/Removefromcart/:cId/:pId/:mId',
      name:'Removefromcart',
      component:Removefromcart
    },
    {
      path:'/Reviews/:CID/:PID',
      name:'Reviews',
      component:Reviews
    },
    {
      path:'/Search/:qname',
      name:'Search',
      component:Search
    }
  ]
})
