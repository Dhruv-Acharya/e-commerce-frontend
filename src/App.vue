<template>
  <div id="app" style="margin-top:0;padding-top:0">
  
    <div>
      <b-navbar toggleable="md" type="dark" variant="" style="background-color:#253b80">
  
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
  
        <router-link to="/Homepage">
          <b-navbar-brand>LELO.COM</b-navbar-brand>
        </router-link>
  
        <b-collapse is-nav id="nav_collapse">
  
          <b-navbar-nav>
            <!-- <b-nav-item href="#">Link</b-nav-item>
        <b-nav-item href="#" disabled>Disabled</b-nav-item>
         -->
            <b-nav-form>
              <b-form-input size="md" class="mr-sm-2 st-default-search-input" style="width: 550px" type="text" placeholder="Search" v-model="query" />
              <button class="btn bg-warning" @click="searchQuery"><i class="fas fa-search"></i></button>
            </b-nav-form>
  
          </b-navbar-nav>
  
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
  
  
            
              <div v-if="isUserLoggedIn"> hii {{isUserLoggedIn.name}}
                <div>
                  <b-nav-item-dropdown text="My Account" right>
  
                    <b-dropdown-item>
                      <router-link :to="{name: 'Orderhistory',params:{custoId:isUserLoggedIn.customerId}}"> Orders</router-link>
                    </b-dropdown-item>
                    <b-dropdown-item><button class="btn btn-primary" @click="logout">Logout</button></b-dropdown-item>
                  </b-nav-item-dropdown>
                </div>
                <div>
                  <router-link :to="{name: 'Cart',params:{customId:isUserLoggedIn.customerId}}">
                    <button class="btn bg-warning" type="submit" right><i class="fas fa-shopping-cart"></i>Cart</button>
                  </router-link>
                </div>
              </div>
            
            <div v-else>
              <b-nav-item-dropdown right text="Login/SignUp" class="text-dark">
  
                <b-dropdown-item>
                  <router-link to="/login">Login</router-link>
                </b-dropdown-item>
                <b-dropdown-item>
                  <router-link to="/signup">Signup</router-link>
                </b-dropdown-item>
              </b-nav-item-dropdown>
            </div>
  
  
  
  
            <!-- <b-nav-item-dropdown right>
           <template slot="button-content">
            <em>Cart</em>
</template>
        <b-dropdown-item href="#">Profile</b-dropdown-item>
        <b-dropdown-item href="#">Signout</b-dropdown-item>
      </b-nav-item-dropdown> -->
    </b-navbar-nav>

  </b-collapse>
</b-navbar>
    </div>

 <router-view/>
  
  </div>
</template>

<script>
  import {
    mapGetters,
    mapActions
  } from 'vuex'
  export default {
    name: 'App',
    data() {
      return {
        query: ''
      }
    },
    computed: {
      ...mapGetters(['loginMethod', 'isUserLoggedIn', 'logoutMethod'])
    },
    methods: {
      logout() {
        this.$store.dispatch('logoutMethod')
      },
      searchQuery() {
        this.$router.push({
          name: 'Search',
          params: {
            qname: this.query
          }
        })
      }
    }
  
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  
  .textdark {
    color: black
  }
</style>

