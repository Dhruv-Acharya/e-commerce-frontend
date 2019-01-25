<template>
    <div class="container">
    <div class="row" v-if="searchResult">

<div v-for=" product in searchResult" :key="product.name">
<div class="card">
    <div class="image-container">
        <div class="col-md-4  align-items-stretch ">
            <router-link :to="{name: 'Productdescription',params:{id:product.productId}}">
                <img style="width:320px" v-bind:src="product.imageUrl" 
            alt="some product"></router-link>
        </div>

        <div class="card-block">
            <h4 style="margin-left" class="card-title">{{product.name}}</h4>
            <div class="card-text">
                <!-- <b>Description: </b> {{product.description}}<br><br> -->
                <!-- <b>Category: </b>  {{product.category.name}}<br> <br> -->
                <b>Usp: </b>{{product.usp}} <br> <br>
                <b>Price:</b>{{product.priceLowest}}<br><br>
            </div>
        </div>
    </div>
    

    </div>
    <br>
    <br>
    
</div>
    </div>
    <div v-else>
        <h2>Loading......</h2>
        <img src="https://cdn.dribbble.com/users/563824/screenshots/3907093/escalade.gif"/>
        </div>
        <h2 id="status"></h2>
</div>
</template>

<script>
    export default{
        data(){
            return{
                searchResult : null
            }
        },
        mounted(){
            axios.get('http://26f79b42.ngrok.io/product/query?queryText='+this.$route.params.qname)
            .then(response => {
                this.searchResult = response.data;
                if(this.searchResult.length == 0){
                    document.getElementById("status").innerHTML = "There are no matching products"
                }
            })
        }
    }
</script>