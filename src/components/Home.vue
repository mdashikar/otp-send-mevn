<template>
        <div class="container-fuild">
            <nav class="navbar is-light">
                    <div class="navbar-brand">
                    <router-link class="navbar-item" href="" to="/">
                        OPT-SMS
                    </router-link>
                    <div class="navbar-burger burger" :class="{'is-active': isActive}" @click="isActive = !isActive">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>

                <div class="navbar-menu" :class="{'is-active': isActive}">
                    <div class="navbar-start">
            
                        <router-link to="/list" class="navbar-item" >Contact List</router-link>
                        <router-link to="/sent" class="navbar-item">Sent Messages</router-link>
                    
                    </div>

                    <div class="navbar-end">
                    <div class="navbar-item">
                        <div class="field is-grouped">
                        <p class="control">
                           <a href="https://github.com/mdashikar/otp-send-mevn/blob/master/README.md" target="_blank" class="bd-gt-button button">
                                <span class="icon">
                                    <i class="fab fa-github"></i>
                                </span>
                                <span>
                                    See Docs
                                </span>
                            </a>
                            
                        </p>
                        <p class="control">
                            <a class="button is-primary" href="https://github.com/mdashikar/otp-send-mevn/archive/master.zip">
                            <span class="icon">
                                <i class="fas fa-download"></i>
                            </span>
                            <span>Download Source Code</span>
                            </a>
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
            </nav>
            <section class="section" v-if="isHome">
                <div class="bd-example container">
                    <div class="content is-medium">
                        <h1>Welcome to OTP SMS with vuejs and nodejs</h1>
                        <p>Please navigate through menu bar to see Contact list and click user to send OTP then go to Sent messages you will find the details.</p>
                        
                    </div>
                </div>
             </section>
        </div>
</template>

<script>

    export default {
        data(){
            return{
                isHome: false,
                isActive: false
            }
        },
        methods:{
            checkHome(){
                if(this.$route.path == "/"){
                    this.isHome = true;
                   
                }
            }
        },
        created(){
            this.checkHome();
        }
       
    }
</script>

<style>

</style>
