<template>
  <section class="list section">
    <igfilter></igfilter>
    <div class="container">
      <table class="table">
        <thead>
          <tr>
            <th>Year</th>
            <th>Prize</th>
            <th>Description</th>
            <th><abbr title="Not good">NG</abbr></th>
            <th><abbr title="Already done">Done</abbr></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="winner in filteredWinners" :id="winner['.key']">
            <td>{{winner.year}}</td>
            <td>{{winner.prize}}</td>
            <td>
              <p>{{optimizeDescr(winner.description)[0]}}</p>
              <p class="content is-small"><i>{{optimizeDescr(winner.description)[1]}}</i></p>
            </td>
            <td><span class="icon" v-if="winner.notgood"><i class="fa fa-exclamation"></i></span></td>
            <td><span class="icon" v-if="winner.done"><i class="fa fa-check"></i></span></td>
            <td>
              <a class="icon" v-on:click="editWinner(winner)"><i class="fa fa-edit"></i></a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import Igfilter from './Igfilter'

export default {
  name: 'list',
  components: {
    Igfilter
  },
  computed: mapGetters([
    'filteredWinners'
  ]),
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