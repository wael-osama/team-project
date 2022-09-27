<template>
  <div>
    <div
      class="text-h5 text-center text-bold q-mt-lg"
      style="color:grey">
      All Categories
    </div>
    <product-list />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import productList from 'src/components/productList.vue';

export default defineComponent({
  name: 'IndexPage',
  components: {
    productList,
  },
});
</script>
