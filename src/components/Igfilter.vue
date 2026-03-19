<template>
	<section class="section igfilter">
		<div class="container">
		<div class="field is-horizontal">
			<div class="field-label is-normal">
				<label class="label">Filter</label>
			</div>
			<div class="field-body">
				<div class="field is-grouped">
					<p class="control is-expanded">
						<input class="input" type="text" placeholder="Filter by prize" v-model:value="filterPrize">
					</p>
				</div>
				<div class="field">
					<p class="control is-expanded">
						<input class="input" type="text" placeholder="Filter by year" v-model:value="filterYear">
					</p>          
				</div>
			</div>
		</div>

		<div class="field is-horizontal">
			<div class="field-label is-normal">
				<label class="label">View</label>
			</div>
			<div class="field-body">
				<div class="field is-grouped">
					<p class="control">
						<a class="button" :class="{'is-outlined': !filterDone, 'is-primary': filterDone}" @click="filterDone=!filterDone">
							<span class="icon"><i class="fa fa-check"></i></span>
							<span>Done</span>
						</a>
					</p>
					<p class="control">
						<a class="button" :class="{'is-outlined': !filterNotgood, 'is-danger': filterNotgood}" @click="filterNotgood=!filterNotgood">
							<span class="icon"><i class="fa fa-exclamation"></i></span>
							<span>Not good</span>
						</a>
					</p>
				</div>
				<div class="field is-grouped">
					<p class="control">
						<a class="button is-warning is-small" :class="{'is-outlined': !filterExcluded}" @click="filterExcluded=!filterExcluded">Only Done/Not good</a>
					</p>              
					<p class="control">
						<a class="button is-outlined is-primary is-small" @click="clearFilters">
							<span class="icon"><i class="fa fa-times"></i></span>
							<span>Clear filters</span>
						</a>
					</p>
				</div>
			</div>
		</div>
		</div>
	</section>
</template>

<script>
import { mapState } from 'vuex'
export default {
	name: 'igfilter',
	watch: {
		filterDone: function () { this.submitFilters() },
		filterNotgood: function () { this.submitFilters() },
		filterPrize: function () { this.submitFilters() },
		filterYear: function () { this.submitFilters() },
		filterExcluded: function () { this.submitFilters() }
	},
  computed: mapState(['winners']),
	data () {
		return {
			filterPrize: '',
			filterYear: '',
			filterDone: true,
			filterNotgood: true,
			filterExcluded: false
		}
	},
	methods: {
		clearFilters: function () {
      this.filterPrize = ''
      this.filterYear = ''
      this.filterDone = true
      this.filterNotgood = true
      this.filterExcluded = false			
		},
		submitFilters: function () {
			let tmpFilter = {}
			tmpFilter.filterPrize = this.filterPrize
			tmpFilter.filterYear = this.filterYear
			tmpFilter.filterDone = this.filterDone
			tmpFilter.filterNotgood = this.filterNotgood
			tmpFilter.filterExcluded = this.filterExcluded
			this.$store.commit('setFilter', tmpFilter)
		}
	}
}
</script>
