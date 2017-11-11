<template>
  <div class="product-details">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <img
            class="img-responsive" :src="product.image" alt="">
        </div>
        <div class="col-md-8">
          <div class="product-details__description">
            <small>{{product.manufacturer && product.manufacturer.name}}</small>
            <h3>{{product.name}}</h3>
            <p>
              {{product.description}}
            </p>
          </div>
          <div class="product-details__price-cart">
            <p>${{product.price}}</p>
            <product-button :product="product" ></product-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import ProductButton from '../products/ProductButton'
  export default {
    props: ['product'],
    components: {
      'product-button': ProductButton
    }
  }
</script>