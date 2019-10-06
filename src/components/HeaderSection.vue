<template>
	<header>
		<div class="ribbon blue">
			<div class="container">
				<div class="row">
					<div class="col-sm-4">
						<i class="fas fa-phone"></i> +62 856 1617479
					</div>
					<div class="col-sm-4">
						<i class="fas fa-mail"></i><a href="mailto:hello@boncommerce.com">hello@boncommerce.com</a>
					</div>
					<div class="col-sm-4">
						3-5 BUSINESS DAYS DELIVERY & FREE RETURNS
					</div>
				</div>
			</div>
		</div>

		<div class="navigation-bar">
			<div class="container">
				<div class="row">
					<div class="col-sm-10">
						<a href="" class="header-logo">Boncommerce</a>
					</div>
					<div class="col-sm-2">
						<shopping-cart />
					</div>
				</div>
			</div>
		</div>
	</header>
</template>

<script>
import ShoppingCart from './ShoppingCart'
export default {
  components: {
  	ShoppingCart
  }
}
</script>
