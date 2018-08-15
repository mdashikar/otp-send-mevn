<template>
    <div>
        <nav-bar></nav-bar>
        <div class="notification is-link" v-if="sentSuccess">
            <button class="delete" aria-label="close" @click="sentSuccess = false"></button>
            A text has been sent to your number please check.
        </div>
        <section class="hero is-medium is-info is-bold">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title">
                       Full name:  {{details[0].name}}
                    </h1>
                    <h2 class="subtitle">
                        Phone: {{details[0].phone}}
                    </h2>
                </div>
                <br>
                <a class="button is-hovered" @click="isActive = true && generateNumber()">Send Message</a>

                <div class="modal" :class="{ 'is-active': isActive }" >
                    <div class="modal-background"></div>
                    <div class="modal-content">
                        <article class="message is-link">
                            <div class="message-header">
                             <p>Send Message</p>
                            </div>
                            <div class="message-body">
                                Hi. Your OTP is <strong>{{otpNumber}}</strong>.
                            </div>
                             <a class="button is-success is-hovered" :class="{ 'is-loading' : loading }" @click="sendOptNumber">Send</a>
                             <br>
                             <br>
                        </article>
                    </div>
                    <button class="modal-close is-large" aria-label="close" @click="isActive = false"></button>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import axios from 'axios'
import Home from '../Home.vue'

export default {
    components: {
        navBar: Home 
    },
    data(){
        return{
            contactDetails : [],
            details: {},
            userId: this.$route.params.id,
            otpNumber: '',
            isActive : false,
            loading: false,
            sentSuccess: false
            
        }
    },
    methods:{
        getContactDetails(){
            //call API
            // get user data from back-end 
            axios.get( ('http://otp.mdashikar.com/getdata')).
                then( (res) => {
                    this.contactDetails = res.data;

                    var toFind = this.userId;
                    // stored single user info in details 
                    this.details = this.contactDetails.filter(function(el) {
                        return el._id === toFind;
                    });
   
                })
        },
        //generate random 6 digit OTP numbers
        generateNumber(){
            return this.otpNumber = Math.floor(100000 + Math.random() * 900000)
        },
        // post user details and otp number to backend
        sendOptNumber(){
            this.loading = true;
            axios.post('http://otp.mdashikar.com/send-opt', {
                otpNumber :this.otpNumber,
                userInfo : this.details[0],
                phoneNumber: this.details[0].phone
            }).then( res => {
                this.loading = false;
                this.isActive = false;
                this.sentSuccess = true;
                console.log(res);
            }).catch( e => {
                console.log(e);
            });
        }
        
    },
    mounted(){
        //called onload 
        this.getContactDetails()
    }
}
</script>

<style>

</style>
