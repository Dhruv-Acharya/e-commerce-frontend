<template>
<div class="container">
        <h1>{{categoryName}}</h1>
    <div class="row" v-if="products">

<div v-for=" product in products" :key="product.name">
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
                <b>Price:</b>{{product.lowestPrice}}<br><br>
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
import {mapGetters,mapActions} from 'vuex'
export default{
    name:'Categories',
    data () {
    return {
      products : null,
      categoryName:''
    }
  },
mounted () {
    axios
      .get('https://product-lelo.herokuapp.com/product/getByCategory/'+this.$route.params.id)
      .then(response => {
          this.products = response.data;
          if(this.products.length == 0){
              document.getElementById("status").innerHTML = "There are no products available";
          }
          console.log(this.products);
          for(var i=0;i<this.products.length;i++){
              this.categoryName = this.products[i].category.name;
          }
      });      
    }
}
</script>