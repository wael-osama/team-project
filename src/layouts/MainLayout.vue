<template>
  <q-layout view="lHh Lpr lFf" class="shadow-2 rounded-borders">
    <q-header elevated class="q-pa-md glossy">
        <q-toolbar>
          <q-btn
            class="absolute-left"
            round
            dense
            size="1.5em"
            icon="local_mall"
          />

          <div class="absolute-center">
            <q-toolbar-title>
                <q-icon
                  name="account_circle"
                  size="2em"
                >
                </q-icon>
                {{ name }}
            </q-toolbar-title>
          </div>

          <mini-cart
            class="absolute-right"
          />
        </q-toolbar>
        <div class="flex justify-center q-mt-md">
          <q-tabs
            v-for="category in categories"
            :key="category.id">
            <q-btn
              :to="category.path"
              flat
              no-caps
              :label="category.name"
              :icon="category.icon"
              :categoryPath="category.path"
              />
          </q-tabs>
        </div>
    </q-header>
    <q-footer elevated>
      <q-toolbar class="glossy">
        <div
          class="text-overline absolute-center q-pa-md"
          style="color:grey">© 2022 OMDA All Rights Reserved</div>
      </q-toolbar>
    </q-footer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue';
import MiniCart from '../components/MiniCart.vue';

export default defineComponent({
  name: 'MainLayout',

  components: {
    MiniCart,
  },

  setup() {
    const name = ref('OMDA');

    const categories = ref([
      {
        name: 'Electronics',
        icon: 'cable',
        path: 'electronics',

      },
      {
        name: 'Jewelery',
        icon: 'diamond',
        path: 'jewelery',
      },
      {
        name: "Men's Clothing",
        icon: 'hail',
        path: "men's clothing",
      },
      {
        name: "Women's Clothing",
        icon: 'girl',
        path: "women's clothing",
      },
    ]);

    return {
      name,
      categories,
    };
  },
});
</script>
<style lang="scss">

</style>
