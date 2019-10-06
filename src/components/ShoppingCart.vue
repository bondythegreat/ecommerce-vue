<template>
	<div class="shopping-cart text-right pt-2" id="cart">
		<button class="btn btn-outline-primary" @click="toggleButton"><i class="fas fa-shopping-cart"></i></button>

		<div class="shopping-cart-detail" v-if="isOpen">
			<div v-if="isEmptyCart">You have no items in your cart.</div>
			<div v-else>
				<VuePerfectScrollbar class="scrollarea">
					<ul class="list-items list-unstyled mb-0">
						<li v-for="item in items">
							{{item.name}} <br>
							<button  @click="deductQty(item.id)">-</button><input type="text" readonly :value="item.qty"><button @click="addQty(item.id)">+</button> <button @click="remove(item.id)">remove</button>
							<span class="float-right">{{ subtotal(item) | currency }}</span>
						</li>
					</ul>
				</VuePerfectScrollbar>
				<div class="total text-right">{{grandtotal | currency }}</div>
			</div>
		</div>
	</div>
</template>

<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
export default {
	computed: {
	    isEmptyCart() {
	      return this.$store.getters.isEmpty
	    },
	    items() {
	    	return this.$store.state.items
	    },
	    isOpen() {
	    	return this.$store.getters.isCartOpen
	    },
	    grandtotal() {
	    	return this.$store.getters.total
	    }
	},
	methods: {
		toggleButton() {
			if (this.isOpen) {
				this.$store.commit('closeCart');
			} else {
				this.$store.commit('openCart');
			}
		},
		addQty(id) {
	    	this.$store.commit('incrementQty',id);
	    },
	    deductQty(id) {
	    	this.$store.commit('decrementQty', id);
	    },
	    remove(id) {
	    	this.$store.commit('deleteItem', id);
	    },
	    subtotal(item) {
	    	return parseInt(item.qty) * parseInt(item.price);
	    }
	},
	components: {
		VuePerfectScrollbar
	}
}
</script>
