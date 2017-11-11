<template>
  <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
    <div class="card" style="width: 20rem;">
      <img class="card-img-top" :src="product.image" alt="">
        <div class="card-body">
          <router-link :to="'/details/'+product._id" class="product-link">
          <h4 class="card-title">{{product.name}}</h4>
          <p class="card-text">{{product.description}}</p>
          <p class="card-text">{{product.price}}</p>
          </router-link>
          <product-button :product="product" ></product-button>
        </div>
    </div>
  </div>
</template>

<script>
  import ProductButton from '../products/ProductButton';

  export default {
    name: 'product-item',
    props: ['product'],
    components: {
      'product-button': ProductButton,
    },
  }
</script>