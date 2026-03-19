<template>
  <section class="edit section">
      <div class="field">
        <label class="label">Year</label>
        <p class="control">
          <span class="select">
            <select v-model:value="year">
              <option v-for="year in years">{{year}}</option>
            </select>
          </span>
        </p>
      </div>
      <div class="field">
        <label class="label">Prize</label>
        <p class="control">
          <input class="input is-success" type="text" placeholder="Prize" v-model:value="prize">
        </p>
      </div>
      <div class="field">
        <label class="label">Description</label>
        <p class="control">
          <textarea class="textarea is-success" placeholder="Description" v-model:value="description"></textarea>
        </p>
      </div>
      <div class="field is-horizontal">
        <p class="control">
          <a class="button" :class="{'is-outlined': !done, 'is-primary': done}" @click="done=!done">
            <span class="icon"><i class="fa fa-check"></i></span>
            <span>Done</span>
          </a>
          &nbsp;
          <a class="button" :class="{'is-outlined': !notgood, 'is-danger': notgood}" @click="notgood=!notgood">
            <span class="icon"><i class="fa fa-exclamation"></i></span>
            <span>Not good</span>
          </a>
        </p>
      </div>
      <div class="field">
        <p class="control">
          <a class="button is-success" @click="save">Save entry</a>
          <a class="button is-success is-outlined" @click="cancel">Cancel</a>
        </p>
      </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'edit',
	data () {
		return {
			years: Array,
			year: '',
			prize: '',
			description: '',
			done: false,
			notgood: false,
			key: ''
		}
	},
  computed: 
		mapGetters([
			'winners'
	]),	
  created: function () {
    let years = []
    for (var i=1991; i<=2016; i++) {
      years.push(i)
    }
    this.years = years
		this.openEdit(this.$route.params.key)
  },
	methods: {
		save: function () {
      let winner = {}
      winner.year = this.year
      winner.description = this.description
      winner.prize = this.prize
      winner.notgood = this.notgood
      winner.done = this.done
      this.$store.commit('editWinner', winner)
    },
		cancel: function () { this.$router.go(-1) },
		openEdit: function(key) {
			let winner = this.winners.filter(function(item){
				return item['.key'] == key
			})
      winner = winner[0]
			this.year = winner.year
			this.description = winner.description
      this.prize = winner.prize
      this.notgood = winner.notgood
      this.done = winner.done
		}
	}
}
</script>
