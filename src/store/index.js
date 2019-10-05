import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    items:[],
    selectedBudget: null,
    sort: null,
    isMap: false
  },

  mutations: {
    clearAllFilter() {
    	state.selectedAreas = []
    	state.selectedBudget = null
    	state.sort = null
    },
    addAreas(state, data) {
    	state.selectedAreas = data
    },
    addBudget(state, data) {
    	state.selectedBudget = data
    },
    addSort(state, data) {
    	state.sort = data
    },
    clearAreas(state) {
    	state.selectedAreas = []
    },
    clearBudget(state) {
    	state.selectedAreas = null
    },
    clearSort(state) {
    	state.sort = null
    },
    mapOn(state) {
    	state.isMap = true
    },
    mapOff(state) {
    	state.isMap = false
    },
    toggleMap(state) {
    	state.isMap = state.isMap ? false : true
    }
  },

  getters: {
    getAreas (state) {
      return state.selectedAreas
    },
    getBudget (state) {
    	return state.selectedBudget
    },
    getSort (state) {
    	return state.sort
    },
    isMapView (state) {
    	return state.isMap
    }
  }
});