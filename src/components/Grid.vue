<template>
  <section class="grid section">
		<igfilter></igfilter>
		<div class="columns is-multiline">
			<div class="column is-one-third" v-for="winner in filteredWinners">
				<igcard :winner="winner"></igcard>
			</div>
		</div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import Igcard from './Igcard'
import Igfilter from './Igfilter'
export default {
  name: 'grid',
  computed: 
		mapGetters([
			'filteredWinners'
		]),
  components: { 
		Igcard,
		Igfilter
	}
}
</script>
