<template>
    <div class="container">
    
    
        <div style="margin-top:60px;">
            <p id="cEmail"></p>
            <p id="mLength"></p>
            <p id="mCharacters"></p>
            <b-card class="text-center bg-warning">
                <h2 class="text-primary">Create Account</h2>
                <center>
                    <i class="far fa-user"></i>
    
                    <input placeholder="Name" class="w-25 text-line" type="text" required v-model="fullName">
                </center>
                <br>
                <center><i class="far fa-envelope"></i>
    
    
                    <input class="w-25 text-line" placeholder="Email" type="email" required v-model="emailId">
    
                </center>
                <br>
                <center><i class="fas fa-mobile-alt"></i>
    
    
                    <input type="tel" placeholder="Mobile Number" class="w-25 text-line" required v-model="mobileNo">
                </center>
                <br>
                <center>
                    <i class="fas fa-unlock"></i>
    
    
                    <input type="password" placeholder="Password" class="w-25 text-line" required v-model="password">
                </center>
                <br>
                <center>
                    <i class="fas fa-unlock"></i>
    
    
                    <input type="password" placeholder="Confirm Password" class="w-25 text-line" required v-model="confirmPassword">
                </center>
    
    
                <br>
                <button @click="signup" class="btn btn-primary" style="background-color:#253b80">SignUp</button>
    
                <p>{{signupMethod}}</p>
    
    
                <br>
    
            </b-card>
        </div>
    </div>
</template>

<style>
    .text-line {
        background-color: transparent;
        width: 25%;
        color: black;
        outline: none;
        outline-style: none;
        border-top: none;
        border-left: none;
        border-right: none;
        border-bottom: solid black 1px;
        padding: 3px 10px;
    }
</style>

<script>
    import {
        mapGetters,
        mapActions
    } from 'vuex'
    
    export default {
        name: 'signup',
        data() {
            return {
                fullName: '',
                emailId: '',
                mobileNo: '',
                password: '',
                confirmPassword: '',
            }
        },
        methods: {
            signup() {
                if (this.password !== this.confirmPassword) {
                    alert("Password & Confirm Password should be same")
    
                }
                if (/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(this.emailId) == false) {
                    alert("Give a valid EmailId");
                }
    
                if (/[0-9 ]+/.test(this.mobileNo) == false) {
                    alert("MobileNumber should contain numbers");
                }
                if (/^\d{10}$/.test(this.mobileNo) == false) {
                    alert("MobileNumber length should be 10");
                }
                if (this.fullName == '' || this.emailId == '' || this.mobileNo == '' || this.password == '') {
                    alert("All fields are required");
                } else {
                    this.$store.dispatch('signupMethod', {
                        name: this.fullName,
                        phone: this.mobileNo,
                        email: this.emailId,
                        password: this.password,
    
                    })
                }
            }
        },
        computed: {
            ...mapGetters(['signupMethod'])
    
        }
    }
</script>

