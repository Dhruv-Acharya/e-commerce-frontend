import commonApi from '@/api'
import router from '../../router';  

const state={
    loginDetails : null,
    signupMessage:null,
    unauthorised:null
}

const mutations={
    SIGNUP_MESSAGE:(state,value)=>{
        state.signupMessage = value
        if(state.signupMessage == null){
            router.push({name:'signup'})
        }
        else{
            router.push({name:'login'})
        }
    },
    LOGIN_DETAILS : (state,value) => {
        state.loginDetails = value
        let userDetails = {
            customerId:value.customerId,
            name:value.name
        }
        state.userDetails = userDetails
        localStorage.setItem('loginDetails',JSON.stringify(userDetails))
        if(state.loginDetails == null){
            router.push({name:'login'})
        }
        else{
            router.push({name:'Homepage'})
        }
    },
    LOGOUT : (state) => {
        state.loginDetails = null
        localStorage.removeItem('loginDetails')
        router.push({name:'Homepage'})
        window.location.reload()
    },
    UNAUTHORISED: (state) => {
        state.unauthorised = true
    }
}

const actions={
    signupMethod({commit},data){
        commonApi.postDataViaApi('/customer/add',data,
            (response)=>{
                commit('SIGNUP_MESSAGE',response.body)
            },
            (error)=>{
                console.log(error)
                commit('SIGNUP_MESSAGE','Failed')
            }
            
        )

    },
    loginMethod({commit},data){
        commonApi.postDataViaApi('/customer/login',data,
        (response) => {
            commit('LOGIN_DETAILS',response.body)
        },
        (error) => {
            console.log(error)
            commit('UNAUTHORISED')
        }
        )
    },
    logoutMethod({commit}){
        commit('LOGOUT')
    }
}

const getters={
    signupMethod:(state)=>{
        return state.signupMessage
    },
    loginMethod : (state) => {
        return state.loginDetails
    },
    logoutMethod : (state) => {
        return state.loginDetails
    },
    isUnauthorised: (state) => {
        return state.unauthorised
    },
    isUserLoggedIn :(state) => {
        if(state.loginDetails || JSON.parse(localStorage.getItem('loginDetails'))){
            return state.loginDetails || JSON.parse(localStorage.getItem('loginDetails'))
        }
        else{
            return false
        }
    }
}



export default{
    state,
    mutations,
    actions,
    getters
}