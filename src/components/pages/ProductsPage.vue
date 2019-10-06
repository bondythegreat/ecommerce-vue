<template>
  <div>
    <header-section />
    <product-list :data="data" />

    <div class="container">
    	<div class="row">
    		<div class="col-md-12">
    			<paginate
				  :pageCount=totalPage
				  :clickHandler="requestToApi"
				  :prev-text="'<'"
		  		  :next-text="'>'"
				  :containerClass="'pagination mt-4 mb-4'">
				</paginate>
    		</div>
    	</div>
    </div>

    <footer-section />
  </div>
</template>

<script>
import axios from 'axios'
import HeaderSection from '../HeaderSection.vue'
import ProductList from '../ProductList.vue'
import FooterSection from '../FooterSection.vue'
import Paginate from 'vuejs-paginate'

export default {
	name: 'ProductPage',
	data() {
		return {
			data: []
		}
	},
	mounted() {
		this.getProducts();
	},
	methods: {
	  	getProducts() {
			// make the master feature data in 1 big array
			const self = this,
				api_url = 'http://catch-code-challenge.s3-website-ap-southeast-2.amazonaws.com/challenge-3/response.json', // CORS
				api_url_local = '/data/products.json'

			axios.get(api_url_local).then(response => {
				self.data = response.data;
      		}).catch(function(error) {
	      		console.log(error)
	      	});
		},
		requestToApi(page) {
			console.log('request to server page: '+page);
		}
	},
	computed: {
		totalPage() {
			let total = 0
			if (this.data.metadata) {
				total = this.data.metadata.pages;
			}
			return total;
		}
	},
	components: {
		HeaderSection,
		ProductList,
		FooterSection,
		Paginate
	}
}
</script>

