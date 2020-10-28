<template>
  <div class="shopping-cart">
    <div class="shopping-cart__products-quantity"
      :style="{ visibility: productsQuantityVisibility() }" >
      <p>{{ shoppingList.length }}</p>
    </div>
    <img class="shopping-cart__img" src="../../public/images/shopping-cart.svg" />
  </div>
</template>

<script>
import { bus } from "../main";

export default {
  name: "ShoppingCart",
  data() {
    return {
      shoppingList: [],
    };
  },
  methods: {
    productsQuantityVisibility() {
      return this.shoppingList.length > 0 ? "visible" : "hidden";
    },
  },
  created() {
    bus.$on("productAdded", (data) => {
      this.shoppingList.push(data);
    });
  },
};
</script>

<style lang='scss'>
// @import '../scss/reset.scss';
// @import '../scss/variables.scss';
// @import '../scss/font-face.scss';
// @import '../scss/mixins.scss';
// @import '../scss/common.scss';
@import '../scss/shopping-cart.scss';
// @import '../scss/media-queries.scss';
</style>