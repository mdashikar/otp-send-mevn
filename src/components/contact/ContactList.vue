<template>
    <div>
        <nav-bar></nav-bar>
        <router-view></router-view>
        <div class="container">
            <table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
                <thead>
                    <tr>
                        <th><abbr title="Position">Pos</abbr></th>
                        <!--<th></th> -->
                        <th>Name</th>
                        <th><abbr title="Email">Email</abbr></th>
                        <th><abbr title="">Gender</abbr></th>
                        <th><abbr title="">Age</abbr></th>
                        <th><abbr title="">Company</abbr></th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    <!--loop through contactlist and set every rows -->
                    <tr v-for="(item, index) in contactList " v-bind:key="item">
                        <th>{{index+=1}}</th>
                        <!--<td><img :src="item.picture"></td> -->
                        <td>
                            <router-link href="" :to="'/details/'+ item._id" :title="item.name">{{item.name}}</router-link>
                        </td>
                        <td>{{item.email}}</td>
                        <td>{{item.gender}}</td>
                        <td>{{item.age}}</td>
                        <td>{{item.company}}</td>
                        <td>{{item.address}}</td>
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
                contactList : [],
            }
        },
        methods:{
            // get fake user data from back-end
            getContactList(){
                //call API
                axios.get( ('http://otp.mdashikar.com/getdata')).
                    then( (res) => {
                        console.log(res)
                        this.contactList = res.data;
                    })
                    .catch( e => {
                        console.log(e)
                    })

            }
        },
        mounted(){
            // call this function on load 
            this.getContactList()
        }
}
</script>

<style>

</style>
