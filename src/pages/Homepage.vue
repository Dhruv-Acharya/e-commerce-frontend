<template>

<div>
    
     <b-navbar toggleable="md" type="dark" variant="" style="background-color:#253b80" text-variant="white">

  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

  

  <b-collapse is-nav id="nav_collapse">

    <b-navbar-nav>
      <!-- <b-nav-item href="#">Link</b-nav-item>
      <b-nav-item href="#" disabled>Disabled</b-nav-item> -->
    </b-navbar-nav>

    <!-- Right aligned nav items -->
    <b-navbar-nav class="mr-auto">
      
       <b-nav-item v-for="(category,i) in categories" v-bind:key="i">
         
         <router-link :to="{name: category.name,params:{id:category.categoryId}}"><b>{{category.name}}</b></router-link>
         

       </b-nav-item>
      

     <!-- <router-link to="/Homepage"><b-navbar-brand >Lelo</b-navbar-brand></router-link> -->

      <!-- <b-nav-item  href="" ><b>Electronics</b></b-nav-item>
      <b-nav-item href="" ><b>TV & Appliances</b></b-nav-item>
      <b-nav-item href="" ><b>Fashion</b></b-nav-item>
      <b-nav-item href="" ><b>Home & Furniture</b></b-nav-item>
      <b-nav-item href="" ><b>Mobile & Tablets</b></b-nav-item>
      <b-nav-item href="" ><b>Books & Sports</b></b-nav-item> -->

  


      <!-- <b-nav-item-dropdown right> -->
        <!-- Using button-content slot -->
        <!-- <template slot="button-content">
          <em>User</em>
        </template>
        <b-dropdown-item href="#">Profile</b-dropdown-item>
        <b-dropdown-item href="#">Signout</b-dropdown-item>
      </b-nav-item-dropdown> -->
    </b-navbar-nav>

  </b-collapse>
</b-navbar>

 <div class="">
        <!-- <h3>Electronics</h3> -->
    <b-carousel id="carousel1"
                style="text-shadow: 1px 1px 2px #333;"
                controls
                indicators
                background="#ababab"
                :interval="1000"
                img-width="1024"
                img-height="480"
                v-model="slide"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
    >
      
      <b-carousel-slide caption="First slide"
                        text=""
                        img-src="http://www.gadgetdetail.com/wp-content/uploads/2017/01/hp_CES_2017_Elitebook_x360-1024x480.jpg"
      ></b-carousel-slide>
      
      <b-carousel-slide img-src="https://chromeunboxed.com/wp-content/uploads/2016/10/lenovo-yoga-book-android-8-1024x480.jpg">
        <h1></h1>
      </b-carousel-slide>
      
      <b-carousel-slide img-src="https://digitark.ee/wp-content/uploads/20180409_telia_banner_digitark_s9plus_1024x480_v2-1024x480.jpg">
      </b-carousel-slide>
      
      <b-carousel-slide>
        <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
             src="https://www.besuchensiecostarica.com/wp-content/uploads/2018/11/couch-designs-schon-bilder-elegant-gray-modern-style-schillig-sofa-bright-interior-von-couch-designs-1024x480.jpg" alt="image slot">
      </b-carousel-slide>
      <b-carousel-slide>
        <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
             src="http://downloadsmust.com/wp-content/uploads/2018/10/more-5-fancy-master-bedroom-furniture-1024x480.jpg" alt="image slot">
      </b-carousel-slide>
      <b-carousel-slide>
        <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
             src="https://benefitcompany.com/wp-content/uploads/2019/01/resolution-for-benefits-1024x480.jpg" alt="image slot">
      </b-carousel-slide>
      
    </b-carousel>
    <p class="mt-4">
      Slide #: {{ slide }}<br>
      Sliding: {{ sliding }}
    </p>
     </div>
     
  
  
</div>

</template>

<script>
import {mapGetters,mapActions} from 'vuex'
export default {
    name:'Homepage',
    data () {
    return {
      slide: 0,
      sliding: null,
      categories: null 
    }
  },

  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
    
  },
  mounted () {
    //call action to store
    axios
      .get('https://product-lelo.herokuapp.com/category/getAll')
      .then(response => {
          this.categories = response.data;
      });      
    },

  computed:{
    ...mapGetters(['loginMethod'])
  }
}
</script>
<style scoped>
a{
  color: white;
  hover:none
}
</style>




