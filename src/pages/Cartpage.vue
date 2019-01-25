<template>
    <div>
        <div class="container">
            <div v-for=" (cartData ,index ) in cartProducts" v-bind:key="index">
                <b-card class="">
    
                    <img class="float-left" width="200" height="" v-bind:src="cartData.imageUrl" fluid alt="Fluid image" />
                    <p class="card-text">
                        {{cartData.name}}<br> {{cartData.description}} <br> {{cartData.price}}
                        <br> {{cartData.merchantName}}
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
                        pId:cartData.product_id,mId:cartData.merchant_id}}">
                            <button class="btn btn-primary">Remove</button>
                        </router-link>
                    </div>
    
    
                </b-card>
                <br>
            </div>
            <template v-if="cartProducts">
                <div v-if="cartProducts.length">
                <div style="margin-top:0%;margin-right:20%">
                    <router-link :to="{name: 'Checkout',params:{custId:loginMethod.customerId}}">  
                            <button class="btn btn-primary" >Checkout</button>
                    </router-link>
                    </div>
                </div>
</template>

        <div id="status"></div>
        <div v-if="isLoading">
            <h2>Loading......</h2>
            <img src="https://cdn.dribbble.com/users/563824/screenshots/3907093/escalade.gif"/>
        </div>
        </div>

</div>

</template>

<script>
    import {
        mapGetters,
        mapActions
    } from 'vuex'
    
    var URI = 'https://order-lelo.herokuapp.com/cart/';
    
    export default {
        name: 'Cartpage',
        data() {
            return {
                cartId: '',
                cartProducts: null,
                allCart: null,
                custId: this.$route.params.cid,
                isLoading: false
            }
        },
        mounted() {
            let self = this
            this.isLoading = true
            axios.post(URI + self.$route.params.cid + '/' + self.$route.params.pid + '/' + self.$route.params.mid, {
                    quantity: self.$route.params.qn
                })
                .then(response1 => {
    
                    self.cartId = response1.data;
                    this.isLoading = false
                    //make api call
                    if (self.cartId == '') {} else {
                        axios.get('https://order-lelo.herokuapp.com/cart/' + self.$route.params.cid)
                            .then(response2 => {
                                self.cartProducts = response2.data;
                                if (this.cartProducts.length == 0) {
                                    document.getElementById("status").innerHTML = "There are no products in cart";
                                }
                                console.log(self.cartProducts);
                            })
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

