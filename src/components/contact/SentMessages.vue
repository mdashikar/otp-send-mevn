<template>
    <div>
        <nav-bar></nav-bar>
        <div class="container">
            <table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
                <thead>
                    <tr>
                        <th><abbr title="Position">Pos</abbr></th>
                        <!--<th></th> -->
                        <th>Name</th>
                        <th><abbr title="Time">Date</abbr></th>
                        <th><abbr title="Time">Time</abbr></th>
                        <th><abbr title="One Time Pass">OTP</abbr></th>
                        
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in sentMessages " v-bind:key="item">
                        <th>{{index+=1}}</th>
                        <!--<td><img :src="item.picture"></td> -->
                        <td>
                            {{item.userInfo[0].name}}
                        </td>
                        <td>{{item.updated | formatDate}}</td>
                        <td>{{item.updated | formatTime}}</td>
                        <td>{{item.otpNumber}}</td>
                       
                    </tr>
                </tbody>
            </table>
        </div>
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
            sentMessages : [],
        }
    },
    methods:{
        getSentMessages(){
            //call API
            axios.get( ('http://otp.mdashikar.com/get-otp-users')).
                then( (res) => {
                    console.log(res)
                    this.sentMessages = res.data;
                })

        }
    },
    mounted(){
        this.getSentMessages()
    }
}
</script>

<style>

</style>
