<template>
	<div class="card igcard">
		<a :id="winner['.key']"></a>
		<header class="card-header">
			<p class="card-header-title">{{winner.prize}}</p>
			<div class="card-header-icon noPrint">
				<a class="button" :class="{'is-outlined': !winner.done, 'is-primary': winner.done}" @click="toggleDone(winner)">
					<span class="icon"><i class="fa fa-check"></i></span>
				</a>
				&nbsp;
				<a class="button" :class="{'is-outlined': !winner.notgood, 'is-danger': winner.notgood}" @click="toggleNotgood(winner)">
					<span class="icon"><i class="fa fa-exclamation"></i></span>
				</a>                
			</div>
		</header>
		<div class="card-content fixed-height">
			<span class="content">
				<p class="content">
					{{optimizeDescr(winner.description)[0]}}
				</p>
				<p class="content is-small"><i>{{optimizeDescr(winner.description)[1]}}</i></p>
			</span>
		</div>
		<footer class="card-footer">
			<p class="card-footer-item">Year {{winner.year}}</p>
			<a class="card-footer-item noPrint" @click="editWinner(winner)">
				<span class="icon"><i class="fa fa-edit"></i></span>
				<span>Edit</span>
			</a>
		</footer>
	</div>
</template>

<script>
export default {
	name: 'igcard',
	props: ['winner'],
	data () {
		return {

		}
	},
  methods: {
    optimizeDescr: function(description) {
      let arrayDescr = []
      let regexp = /\[?\breferences?.*|\bwho attended\b|\[?\bpublished in\b|\[?\bnote\b|\[?\battending the/ig
      let pos = description.search(regexp)
      if (pos == -1) {
        regexp = /\[.*?\]/ig
        pos = description.search(regexp)
      }
      if (pos !== -1) {
        arrayDescr.push(description.substr(0, pos))
        arrayDescr.push(description.substr(pos, description.length))
      } else {
        arrayDescr.push(description)
      }
      return arrayDescr
    },
		editWinner: function (winner) {
			this.$router.push('/edit/' + winner['.key'])
		}
  }
}

</script>

<style>

.card-header-title {
  text-transform: capitalize;
}

</style>
