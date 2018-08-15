import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import ContactList from '@/components/contact/ContactList'
import ContactDetails from '@/components/contact/ContactDetails'
import SentMessages from '@/components/contact/SentMessages'


Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/list',
      name: 'ContactList',
      component: ContactList,

    },
    {
      path: '/details/:id',
      component: ContactDetails,
      children: [
        // when /user/:id is matched
        { path: '', component: ContactDetails },

        // ...other sub routes
      ]
    },
    {
      path: '/sent',
      name: 'SentMessages',
      component: SentMessages
    },
  ]
})
