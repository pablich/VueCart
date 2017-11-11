<template>
  <div class="container" v-if="cart.length > 0">
    <div class="title">
      <h1><i class="fa fa-superpowers"></i> Your Cart</h1>
    </div>
    <template v-for="product in cart">
      <div class="col-md-12">
        <product-details :product="product" :key="product.id" ></product-details>
      </div>
    </template>
  </div>
  <div v-else class="title"><h1><i class="fa fa-superpowers"></i> Your Cart is Empty</h1></div>
</template>

<script>
  import ProductDetails from '../components/products/ProductDetails.vue';

  export default {
    data() {
      return {
        cart: this.$store.state.cart,
      }
    },
    components: {
      ProductDetails: ProductDetails,
    }
  }
</script>