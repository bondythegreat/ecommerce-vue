import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    items:[],

  },

  mutations: {
   	deleteAll() {
   		state.items = [];
   	},
   	deleteItem(id) {
   		if (state.items.length) {
   			state.items.splice(state.items.indexOf(state.items.find(item=>item.id == id)),1);
   		}
   	},
   	incrementQty(id) {
   		let item = state.items.find(item => item.id == id);
   		item.qty++;
   	},
   	decrementQty(id) {
   		let item = state.items.find(item => item.id == id);
   		item.qty = item.qty > 0 ? item.qty-- : 0;
   	},
   	addItem(obj) {
   		//check first
   		const filtered = state.items.filter(item => item.id == obj.id);

   		if (filtered.length) {
   			const newItems = state.items.map(item => {
   				if (item.id == obj.id) {
   					item.qty++;
   				}
   			})
   		} else {
   			const newItem = {
   				id: obj.id,
   				qty: 1,
   				price: obj.price
   			}

   			state.items.push(newItem);
   		}
   	}
  },

  getters: {
    total(state) {
    	let total = 0;
    	state.items.forEach(item=> {
    		total += parseInt(item.qty) * parseInt(item.price)
    	});
    	return total;
    }
  }
});