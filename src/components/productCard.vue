<template>
  <div
  class="q-pa-md col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3"
  >
    <q-card
      class="my-card q-pa-md fit"
      dark
      bordered
      >
      <q-img
        style=" max-width: 100%; height:400px"
        :src="product.image"
      />

      <q-card-section>
        <div class="text-h5 q-mt-sm q-mb-xs">{{product.title}}</div>
        <q-rating v-model="star" :max="5" size="28px" />
      </q-card-section>
      <q-separator color="grey-9"/>

      <q-card-section>
        <div class="text-subtitle2 text-grey">
          Category: {{product.category}}
        </div>
        <div class="text-subtitle1 text-orange-9">Price: ${{product.price}}</div>
      </q-card-section>
        <q-space />

      <q-card-actions>
        <q-btn color="blue" label="ADD To Cart" icon="favorite"/>
      </q-card-actions>

    </q-card>
  </div>

</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'productCard',
  props: ['product'],
  setup(props) {
    const star = ref(props.product.rating.rate);

    return {
      star,
    };
  },
});
</script>
