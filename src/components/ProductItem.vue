<template>
	<div class="product-item">
    	<div class="image-container" :style="{ backgroundImage: 'url(' + item.imageUrl + ')' }">

    		<button class="btn btn-primary add-to-cart">Add to cart</button>
    	</div>
    	<div class="product-text">
    		<h2>{{item.name}}</h2>
    		<div class="retail-price" v-if="item.retailPrice > 0">{{ item.retailPrice | currency }}</div>
    		<div class="sale-price">{{ item.salePrice | currency }}</div>
    	</div>
	</div>
</template>

<script>
export default {
  name: 'ProductItem',
  props: ['item']
}
</script>
