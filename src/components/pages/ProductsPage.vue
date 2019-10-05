<template>
  <div>
    <header-section />
    <product-list />
    <footer-section />
  </div>
</template>

<script>
import HeaderSection from '../HeaderSection.vue'
import ProductList from '../ProductList.vue'
import FooterSection from '../FooterSection.vue'

export default {
  name: 'ProductPage',
  components: {
    HeaderSection,
    ProductList,
	FooterSection
  }
}
</script>

