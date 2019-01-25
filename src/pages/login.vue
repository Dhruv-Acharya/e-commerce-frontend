<template>
    <div class="container">
        
        <div style="margin-top:90px;">
        <b-card class="text-center bg-warning">
  <h2 class="text-primary">Login</h2>
  <center>
           
        

    <!-- <h1 v-if="loginMethod"><b-alert show variant="danger">your email or password is incorrect</b-alert></h1>
    <h1 v-else></h1> -->

                <center>
                    
                    <i class="far fa-envelope"></i>
                    
        <input type="email" 
                        style="height:40px;" 
                      id="emailId"
                      class="text-line"
                      v-model="email"
                      required
                      placeholder="Email"> 
                </center>
                <br>
                <center>
                     <i class="fas fa-unlock"></i>
        <input type="password"
                      style="height:40px;" 
                      id="password"
                      class="text-line"
                      v-model="password"
                      required
                      placeholder="Password">

                </center>
                <br>
  </center>
        <button class="btn btn-primary" style="background-color:#253b80" @click="login">Login</button>
        <div v-if="isUnauthorised">
            <p>username or password is incorrect</p>
        </div>

        </b-card>
</div>

        
    </div> 
</template> 

<style>
.text-line {
     background-color: transparent;
     width:25%;
     color: black;
     outline: none;
     outline-style: none;
     border-top: none;
     border-left: none;
     border-right: none;
     border-bottom: solid #eeeeee 1px;
     padding: 3px 10px;
 }
 </style>

 <script>
import {mapGetters,mapActions} from 'vuex'
export default{
    name:'login',
    data(){
        return{
                email :'',
                password :''
        }
    },
    methods:{
        login(){
            if(this.email === '' && this.password === ''){
                alert("email and password is required")
            }
            if (/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(this.email) == false) 
            {
                alert("Give a valid EmailId")
            }
            else if(this.email === ''){
                alert("email is required")
            }
            else if(this.password === ''){
                alert("password is required")
            }
            else{
            this.$store.dispatch('loginMethod',{
            email:this.email,
            password:this.password
                })
            }
        }
    },
    computed:{
        ...mapGetters(['loginMethod','isUserLoggedIn','isUnauthorised']),
    }
}
</script>

