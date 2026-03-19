<template>
  <div id="app">
    <navbar></navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import { mapState, mapGetters } from 'vuex'
import Firebase from 'firebase'

let db = Firebase.initializeApp({
  apiKey: 'AIzaSyASKXkoroHifKZoOBPr85TPOIRZaqOcdJo',
  authDomain: 'ig-wombat.firebaseapp.com',
  databaseURL: 'https://ig-wombat.firebaseio.com',
  projectId: 'ig-wombat',
  storageBucket: 'ig-wombat.appspot.com',
  messagingSenderId: '189612520088'
}).database()

var winnersRef = db.ref('winners')

export default {
  name: 'app',
  components: {
    Navbar
  },
  // computed: mapGetters([ 'winners' ]),
  created: function () {
    this.$store.dispatch('setWinnersRef', winnersRef.orderByChild('year'))
  }
}
</script>

<style>

</style>
