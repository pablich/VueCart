<template>
    <product-form @save-product="addProduct" :model="model" :manufacturers="manufacturers">
    </product-form>
</template>

<script>
  import ProductFrom from '../../products/ProductForm';
  export default {
    data () {
      return {
        model: {}
      }
    },
    created () {
      if (this.manufacturers.length === 0) {
        this.$store.dispatch('allManufacturers')
      }
    },
    computed: {
      manufacturers () {
        return this.$store.getters.allManufacturers
      },
    },
    methods: {
      addProduct (model) {
        console.log('model', model)
        this.$store.dispatch('addProduct', model)
      }
    },
    components: {
      'product-form': ProductFrom
    }
  }
</script>