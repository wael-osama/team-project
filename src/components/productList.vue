<template>
  <div
  class="row justify-center q-pa-md">
    <product-card
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<script>
import { defineComponent, computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import productCard from './productCard.vue';

export default defineComponent({
  components: {
    productCard,
  },
  setup() {
    const $store = useStore();

    const products = computed(() => $store.state.post.products);
    // console.log(products);
    onMounted(() => $store.dispatch('post/getProducts'));
    return {
      products,
    };
  },
});
</script>
