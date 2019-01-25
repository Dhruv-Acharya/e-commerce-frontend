<template>
<div>
    
    <div v-if="orders">
    <p>Thankyou your order has been placed...</p>
    <br>
    <router-link to="/Homepage"><button class="btn btn-primary">Continue Shopping</button></router-link>
        
    </div>

    <div v-if="isLoading">
        <h2>Loading......</h2>
            <img src="https://cdn.dribbble.com/users/563824/screenshots/3907093/escalade.gif"/>
    </div>
</div>
</template>

<script>
export default{
    data(){
        return{
            orders:null,
            isLoading:false
        }
    },
    mounted () {
        this.isLoading = true
    axios
      .post('https://order-lelo.herokuapp.com/order/addOrder/'+this.$route.params.custId+'/'+"8e6ff132-d2bc-4c3e-b3f4-486d299f291d")
      .then(response => {
          this.orders = response.data;
          this.isLoading = false
      });      
    }
}
</script>