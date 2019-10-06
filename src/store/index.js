import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    items:[],
    cartOpenStatus: false
  },
  mutations: {
   	deleteAll() {
   		state.items = [];
   	},
   	deleteItem(state, id) {
   		if (state.items.length) {
   			state.items.splice(state.items.indexOf(state.items.find(item=>item.id == id)),1);
   		}
   	},
   	incrementQty(state, id) {
   		let item = state.items.find(item => item.id == id);
   		item.qty++;
   	},
   	decrementQty(state, id) {
   		let item = state.items.find(item => item.id == id);
   		if (item.qty > 0) {
   			item.qty--
   		} else {
   			item.qty = 0;
   		}
   	},
   	addItem(state, obj) {
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
   				name: obj.name,
   				qty: 1,
   				price: obj.salePrice
   			}

   			state.items.push(newItem);
   		}
   	},
   	openCart(state) {
   		state.cartOpenStatus = true;
   	},
   	closeCart(state) {
   		state.cartOpenStatus = false;
   	}
  },

  getters: {
    total(state) {
    	let total = 0;
    	state.items.forEach(item=> {
    		total += parseInt(item.qty) * parseInt(item.price)
    	});
    	return total;
    },
    isEmpty(state) {
    	return state.items.length == 0;
    },
    isCartOpen(state) {
    	return state.cartOpenStatus;
    }
  }
});