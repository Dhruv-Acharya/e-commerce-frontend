<template>
    <div class="container">
        <template v-if="orders">
            <div v-if="orders.length"> 
       <div v-for=" (eachOrder,index ) in everyOrder" v-bind:key="index">
            <br>
        <b-card-header class="text-left"><b>#ORDERNUMBER</b></b-card-header>
        
    <b-card class="text-left">
        <h3>{{eachOrder.productName}}</h3>
        
            
            <img class="float-left" style="width:10%"  v-bind:src="eachOrder.productImageUrl">

            <h4 class="text-center">{{eachOrder.productPrice}}</h4> <br>
                <p class="text-center">{{eachOrder.productDescription}} <br>
            
            Merchant:{{eachOrder.merchantName}} </p>

            <!-- <button class="btn btn-info float-right">Reviews/Comments</button> -->
            <div class="">
                <router-link :to="{name: 'Reviews',params:{CID:loginMethod.customerId,
                    PID:eachOrder.productId}}">
                <b-btn v-b-modal.modal-center>Reviews/Comments</b-btn> </router-link>

                <!-- Modal Component -->
                <!--<b-modal id="modal-center" centered title="Add Comments">
                    <textarea></textarea>
                </b-modal>-->
            </div>
        
    </b-card>
        </div>
            </div>
        </template>
        <h2 id="orderstatus"></h2>
        <div v-if="isLoading">
            <h2>Loading......</h2>
            <img src="https://cdn.dribbble.com/users/563824/screenshots/3907093/escalade.gif"/>
        </div>
        
</div>

</template>

<script>
import {mapGetters,mapActions} from 'vuex'
    export default{
        data(){
            return{
                orders: null,
                everyOrder: null,
                comment:'',
                isLoading:false
            }
        },
        computed:{
            ...mapGetters(['loginMethod'])
        },
        mounted(){
            this.isLoading = true
            axios.get('https://order-lelo.herokuapp.com/order/getAll/'+this.$route.params.custoId)
        .then(response => {
           this.orders = response.data;
           this.isLoading = false
           if(this.orders.length == 0){
               document.getElementById("orderstatus").innerHTML = "you haven't ordered any products";
           }
           for(var i=0;i<this.orders.length;i++){
               axios.get('https://order-lelo.herokuapp.com/order/getOrderAll/'+this.orders[i].orderId)
        .then(response1 => {
                    this.everyOrder = response1.data;
                    console.log(this.everyOrder)
                })
           }
})
        }
    }
</script>