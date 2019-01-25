<template>
<div> 

    <b-card v-if="categoryProduct">
        <h3 >{{categoryProduct.name}}</h3>
            <button disabled class="btn btn-success" style="position:relative;margin-top:0%;margin-right:45%">{{categoryProduct.rating}}<i class="far fa-star"></i></button>
            
        <img class="float-left" width="500" height=""  v-bind:src="categoryProduct.imageUrl"  alt="Fluid image"/>
        <p class="card-text">
           </p>
        

                <div class="float-right" style="width:500px" > 
                <div>
                    <h2>Description</h2>
                    <p class="text-left"><b>{{categoryProduct.description}}</b></p>

                 <div>
                     <h2>Price:</h2>
                     <h1 id="price"><b><i class="fas fa-rupee-sign"></i></b></h1>
                 </div>
                 
                <div>
                    Merchants:
                    <select name="Merchants" @change="onChange" class="form-control" v-model="key">
                            <option v-for="(merchant,i) in merchants" v-bind:key="i" >
                                {{merchant.name}}
                            </option>
                    </select>
  
                </div>
                </div>
                <!-- <div style="margin-top:20%;margin-left:30%">
                    <button>plus</button>
                </div>
                <div style="margin-top:0%;margin-right:30%">
                    <button>plus</button>
                </div> -->
                



                </div>
                <br>
                <div v-if="loginMethod">
                <div style="position:relative;margin-top:40%;margin-right:55%">
                  <router-link :to="{name: 'Cartpage',params:{cid:loginMethod.customerId,
                  pid:categoryProduct.productId,mid:id,qn:1}}">
                    <button style="width:100%" class="btn btn-primary btn-lg">
                        <i class="fas fa-shopping-cart"></i>Add To Cart</button> </router-link>
                </div>
                </div>
                <div v-else>
                    <div style="position:relative;margin-top:40%;margin-right:55%">
                        <router-link to="/login">
                        <button style="width:100%;background-color:#253b80" class="btn btn-primary btn-lg">
                        <i class="fas fa-shopping-cart"></i>Add To Cart</button></router-link>
                    </div>
                </div>
                <h3>Comments</h3>


                <div class="container float-right">
                <b-card class="text-left">
                    <div class="card-text" id="comment">
                        <div v-for=" (review,index ) in reviews" v-bind:key="index"><b>
                            Customername: {{review.name}}<br>
                            comment:{{review.comment}}<br></b>
                            <br>
                        </div>
                    </div>
                </b-card>
            </div>
        </b-card>
        
        </div>


</template>

<script>
import {mapGetters,mapActions} from 'vuex'
export default{
    name:'Productdescription',
    data () {
    return {
        categoryProduct : null,
        merchants : null,
        key: "",
        id:"",
        q:0,
        reviews:[],
        result:null
    }
  },
  methods:{
      onChange() {
          for(var i=0; i< this.merchants.length;i++){
              if(this.merchants[i].name == this.key.toString()){
                  this.id = this.merchants[i].merchantId;
              }
          }
          

var xhr = new XMLHttpRequest();
xhr.addEventListener("load", function() {
 var list =JSON.parse(this.responseText) 
 console.log(JSON.parse(this.responseText))
 document.getElementById("price").innerHTML=list.price
});
xhr.open("GET", "https://product-lelo.herokuapp.com/product/get/"+this.categoryProduct.productId+"/"+this.id);
xhr.send();

        }
  },
  computed :{
      ...mapGetters(['loginMethod'])
  },
mounted () {axios.all([
    
    axios.get('https://product-lelo.herokuapp.com/product/get/'+this.$route.params.id)
    .then(response1 => {
        this.categoryProduct = response1.data;
})],
[
    axios.get('https://product-lelo.herokuapp.com/product/getMerchants/'+this.$route.params.id)
    .then(response2 => {
        this.merchants = response2.data;
        //console.log(this.merchants)
})
],
[
    axios.get('https://product-lelo.herokuapp.com/review/getReview/'+this.$route.params.id)
    .then(response3 => {
        this.reviews = response3.data;
        // var text = document.getElementById("comment");
        // var result = JSON.parse(text.innerText);
        // console.log(result.comment);
        
})
]
)}
}

</script>

