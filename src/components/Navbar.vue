<template>
  <div class="navbar">
    <nav class="nav noPrint has-shadow">
      <div class="container">
        <div class="nav-left">
          <div class="nav-item">
            <img src="./../assets/favicon.png" alt="WOW logo">
            <b>IG-Wombat</b>
          </div>
        </div>
        <div class="nav-center">
          <div class="nav-item">
            <p class="control">
              <a class="button is-primary" @click="random">
                <span class="icon"><i class="fa fa-refresh"></i></span>
                <span>&nbsp;Random</span>
              </a>
            </p>
          </div>
        </div>
        <!-- Hamburger menu -->
        <span class="nav-toggle" @click="toggleMenu">
          <span></span>
          <span></span>
          <span></span>
        </span>
        <div class="nav-right nav-menu" :class="{'is-active': menuActive}">
          <a class="nav-item is-hidden-mobile" @click="list">
            <span class="icon"><i class="fa fa-list-alt"></i></span>
            <span>&nbsp;List</span>
          </a>
          <a class="nav-item" @click="grid">
            <span class="icon"><i class="fa fa-th"></i></span>
            <span>&nbsp;Grid</span>
          </a>
          <a class="nav-item" @click="print">
            <span class="icon"><i class="fa fa-print"></i></span>
            <span>&nbsp;Print cards</span>
          </a>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'navbar',
  computed: mapGetters([
    'winners'
  ]),
  data () {
    return {
      menuActive: false
    }
  },
  methods: {
    list: function() { this.$router.push('/list') },
    grid: function() { this.$router.push('/') },
    random: function() { 
			let notgood = true
			let done = true
			let randomIgnobel = ''
			let i = 0
			do {
				randomIgnobel = Math.floor(Math.random() * this.winners.length)
				notgood = this.winners[randomIgnobel].notgood
				done = this.winners[randomIgnobel].done
				i = i++
				if (i == 50) { 
					console.log('che casso fet?!')
					break
				}
			} while (notgood == true || done == true)
      this.$router.push('/random/' + randomIgnobel) 
    },
    print: function() { this.$emit('print') },
    toggleMenu: function() { this.menuActive = !this.menuActive }
  }
}
</script>


<style scoped>

</style>
