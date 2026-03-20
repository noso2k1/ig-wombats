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
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  projectId: 'ig-wombat',
  storageBucket: '',
  messagingSenderId: ''
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
