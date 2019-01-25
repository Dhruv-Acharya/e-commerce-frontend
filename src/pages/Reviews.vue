<template>
    <div>
        <div>
                <b-card title="Comments/Reviews">
                </b-card>
        </div>
        
        <div class="float-left">
            <div>
                
        <b-card title="What makes a good review"
          
          style="max-width: 25rem;"
          class="mb-2">
            
            <div>
                <b-card title="Have you used this product?"
                        
                       
                        style="max-width: 22rem;"
                        class="mb-2">
                     <p class="card-text text-left">
                    Your review should be about your experience with the product.
                    </p>
                    
                </b-card>
            </div>
            <div>
                    <b-card title="Why review a product?"
                            
                            
                            style="max-width: 22rem;"
                            class="mb-2">
                        <p class="card-text text-left">
                        Your valuable feedback will help fellow shoppers decide!
                        </p>
                        
                    </b-card>
            </div>
            <div>
                    <b-card title="How to review a product?"
                            
                            style="max-width: 22rem;"
                            class="mb-2">
                        <p class="card-text text-left">
                        Your review should include facts. An honest opinion is always appreciated. If you have an issue with the product or service please contact us from the help centre.
                        </p>
                       
                    </b-card>
            </div>
        </b-card>
            </div>
        </div>
        <div class="container">
                <input type="textarea" class="form-control" style="width:68%;height:234px" v-model="comments"/>
                <button style="position:relative;margin-top:15%;background-color:#253b80" class="btn" @click="productReview">comment</button>
                
        </div>
        
    </div>
</template>

<script>
export default{
    data(){
        return{
            comments : ''
        }
    },
    methods:{
        productReview(){
            axios.post('https://product-lelo.herokuapp.com/review/add/'+this.$route.params.CID+'/'+this.$route.params.PID,
            {comment:this.comments})
        .then(response => {
            this.reviewResponse = response.data;
            if(this.reviewResponse){
                alert("review has been successfully added");
            }
        })
        }
    }
}
</script>