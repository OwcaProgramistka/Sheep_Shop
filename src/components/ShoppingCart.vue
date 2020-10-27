<template>
  <div class="shopping-cart">
    <div
      :style="{ visibility: productsQuantityVisibility() }"
      class="products-quantity"
    >
      <div>{{ shoppingList.length }}</div>
    </div>
    <img src="../../public/images/shopping-cart.svg" />
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
</style>