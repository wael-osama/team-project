<template>
  <div
      class="text-h5 text-center text-bold q-mt-lg"
      style="color:grey">
      Women's Clothing
  </div>
  <div
    class="row justify-center q-pa-md">
    <product-card
      v-for="category in categories"
      :key="category.id"
      :product="category"
    />
  </div>
</template>

<script>
import {
  defineComponent,
  computed,
  onMounted,
  // ref,
} from 'vue';

import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
import productCard from 'src/components/productCard.vue';

export default defineComponent({
  name: 'WomenClothingPage',
  components: {
    productCard,
  },
  setup() {
    const $store = useStore();
    const $route = useRoute();

    onMounted(() => $store.dispatch('post/updateCategory', $route.path));
    const categories = computed(() => $store.state.post.category);
    // console.log($route.path);

    return {
      categories,
    };
  },
});
</script>
