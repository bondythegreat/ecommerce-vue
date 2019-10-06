<template>
	<div>
		<div class="query-result-container mb-4">
	    	<div class="container">
	    		<div class="row" v-if="data.metadata">
	    			<div class="col-md-12">
	    				<h2>Showing result for "{{data.metadata.query}}"</h2>
	    				<div class="pagination-description">
	    					page {{data.metadata.page}} of {{data.metadata.pages}} <br>
	    					Showing {{data.metadata.count}} of {{data.metadata.total}}
	    				</div>
	    			</div>
	    		</div>
	    	</div>
	    </div>

	    <div class="product-list-container">
	    	<div class="container">
	    		<div class="row">
	    			<div class="col-md-4 col-sm-6 pb-3" v-for="item in data.results">
	    				<product-item  :item="item" />
	    			</div>
	    		</div>
	    	</div>
		</div>
	</div>
</template>

<script>
import ProductItem from './ProductItem'
export default {
	name: 'ProductList',
	props: ['data'],
	components: {
		ProductItem
	}
}
</script>
