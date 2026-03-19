import Vue from 'vue'
import Vuex from 'vuex'
import { firebaseAction, firebaseMutations } from 'vuexfire'
Vue.use(Vuex)

const moduleFb = {
  state: { winners: [] },
  mutations: firebaseMutations,
  getters: { winners: state => state.winners },
  actions: {
    setWinnersRef: firebaseAction(({ bindFirebaseRef }, ref) => {
      bindFirebaseRef('winners', ref)
    }),
		editWinner: function (state, payload) {
			console.log(payload)
      // winnersRef.child(this.key).child('description').set(this.description)
      // winnersRef.child(this.key).child('prize').set(this.prize)
      // winnersRef.child(this.key).child('year').set(this.year)
      // winnersRef.child(this.key).child('done').set(this.done)
      // winnersRef.child(this.key).child('notgood').set(this.notgood)			
		}
  }
}

const moduleIg = {
  state: {
    filterPrize: '',
    filterYear: '',
    filterDone: true,
    filterNotgood: true,
    filterExcluded: false
  },
  getters: {
    filteredWinners: (state, commit) => {
      return commit.winners.filter(function(item) {
        if (state.filterExcluded) {
          return item.notgood == true || item.done == true
        } else {
          return ( item.prize.indexOf(state.filterPrize) !== -1 
              && item.year.indexOf(state.filterYear) !== -1
              && (!item.done || item.done == state.filterDone)
              && (!item.notgood || item.notgood == state.filterNotgood) )
        }
      })
    }
  },
  mutations: {
    setFilter (state, payload) {
      state.filterPrize = payload.filterPrize
      state.filterYear = payload.filterYear
      state.filterDone = payload.filterDone
      state.filterNotgood = payload.filterNotgood
      state.filterExcluded = payload.filterExcluded
    }
  }
}

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    fb: moduleFb,
    ig: moduleIg
  }
})