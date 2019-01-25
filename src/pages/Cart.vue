<template>
    <div>
        <div class="container">
            <div v-for=" (cartPageData ,index ) in cartPageProducts" v-bind:key="index">
                <b-card class="">
    
                    <img class="float-left" width="200" height="" v-bind:src="cartPageData.imageUrl" fluid alt="Fluid image" />
                    <p class="card-text">
                        {{cartPageData.name}}<br> {{cartPageData.description}} <br> {{cartPageData.price}}
                        <br> {{cartPageData.merchantName}}
                    </p>
    
                    <br>
                    <div class="container float-right">
                        quantity:
                        <button class="btn btn-primary" style="margin-top:0%" @click="onDecrement">
                        <i class="fas fa-minus"></i></button>
                        <button class="btn" disabled style="margin-top:0%">
                        <p id="quant"><b>1</b></p>
                    </button>
                        <button class="btn btn-primary" style="margin-top:0%;" @click="onIncrement">
                        <i class="fas fa-plus"></i></button>
                    </div>
    
                    <div style="margin-top:0%;margin-right:20%">
                        <router-link :to="{name: 'Removefromcart',params:{cId:loginMethod.customerId,
                        pId:cartPageData.productId,mId:cartPageData.merchantId}}">
                            <button class="btn btn-primary">Remove</button></router-link>
                    </div>
                </b-card>
                <br>
            </div>
            <template v-if="cartPageProducts">
                <div v-if="cartPageProducts.length">
                <div style="margin-top:0%;margin-right:20%">
                    <router-link :to="{name: 'Checkout',params:{custId:loginMethod.customerId}}">  
                            <button class="btn btn-primary" >Checkout</button>
                    </router-link>
                    </div>
                </div>
</template>
        </div>
         <div id="status"></div>

         <div v-if="isLoading">
            <h2>Loading......</h2>
            <img src="https://cdn.dribbble.com/users/563824/screenshots/3907093/escalade.gif"/>
        </div>
    
</div>
</template>

<script>
    import {
        mapGetters,
        mapActions
    } from 'vuex'
    export default {
        data() {
            return {
                cartPageProducts: null,
                isLoading: false
            }
        },
        mounted() {
            this.isLoading = true
            axios.get('https://order-lelo.herokuapp.com/cart/' + this.$route.params.customId)
                .then(response => {
                    this.cartPageProducts = response.data;
                    this.isLoading = false
                    if (this.cartPageProducts.length == 0) {
                        document.getElementById("status").innerHTML = "There are no products in cart";
                    }
                })
        },
        computed: {
            ...mapGetters(['loginMethod'])
        },
        methods: {
            onIncrement() {
                this.q = parseInt(document.getElementById("quant").innerText);
                this.q = this.q + 1;
                // var p = parseInt(document.getElementById("price").innerText);
                // p = p * q;
                document.getElementById("quant").innerText = this.q;
                // document.getElementById("price").innerText = p;
            },
            onDecrement() {
                this.q = parseInt(document.getElementById("quant").innerText);
                if (this.q <= 1) {
                    document.getElementById("quant").innerText = 1;
                } else {
                    this.q = this.q - 1;
                    document.getElementById("quant").innerText = this.q;
                    // var p = parseInt(document.getElementById("price").innerText);
                    //var q = parseInt(document.getElementById("quant").innerText);
                    // var pr = p - p/q;
                    // document.getElementById("price").innerText = pr;
                }
    
            }
        }
    }
</script>