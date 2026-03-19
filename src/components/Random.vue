<template>
	<section class="random section">
		<div class="columns">
			<div class="column"></div>
			<div class="column">
				<igcard :winner="winner"></igcard>
			</div>
			<div class="column"></div>
		</div>
	</section>
</template>

<script>
import Igcard from './Igcard'
import { mapGetters } from 'vuex'

export default {
	name: 'random',
	data() {
		return {
			winner: {}
		}
	},
	components: { Igcard },
	computed: mapGetters([ 'winners' ]),
	created: function () { this.getWinner(this.$route.params.id) },
	beforeUpdate: function () {	this.getWinner(this.$route.params.id) },
	watch: {
		'$route': function (id) { this.getWinner(id) }
	},
	methods: {
		getWinner(id) {	this.winner = this.winners[id] }
	}
}
</script>