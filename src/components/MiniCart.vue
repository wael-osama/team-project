<template>
  <div>
    <q-btn-dropdown
      class="glossy"
      label="Cart"
      icon="local_grocery_store"
    >
      <div class="row no-wrap q-pa-md">
        <div class="column">
          <div class="text-h6 q-mb-md">Product title</div>
        </div>

        <q-separator vertical inset class="q-mx-lg" />

        <div class="column items-center">

          <div class="text-subtitle1 q-mt-md q-mb-xs">Total: $852</div>

          <q-btn
            color="primary"
            label="remove"
            push
            size="sm"
            v-close-popup
          />
        </div>
      </div>
    </q-btn-dropdown>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({

});
</script>
