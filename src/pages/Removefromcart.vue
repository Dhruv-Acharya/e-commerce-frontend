<template>

</template>

<script>
export default{
    mounted(){
        axios.delete('https://order-lelo.herokuapp.com/cart/removeItem/'+this.$route.params.cId+'/'+
        this.$route.params.pId+'/'+this.$route.params.mId)
            .then(response => {
                if(response.data){
                    console.log("hiii");
                    this.$router.push({name:'Cart',params:{customId:this.$route.params.cId}})
            }
        })
    }
}
</script>