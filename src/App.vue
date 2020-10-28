<template>
  <div id="app">
    <header class="top-bar">
      <hamburger></hamburger>
      <a href="#"><img src="../public/images/logo.svg" /></a>
      <shopping-cart></shopping-cart>
    </header>
    <main>
    <div class="sheep-collection">
      <h1 class="h1">Sheep Collection</h1>
      <div class="wrapper">
        <products-filter></products-filter>
        <products></products>
      </div>
    </div>
    </main>
    <footer></footer>
  </div>
</template>

<script>
import Products from "./components/Products.vue";
import Hamburger from "./components/Hamburger.vue";
import ShoppingCart from "./components/ShoppingCart.vue";
import ProductsFilter from "./components/ProductsFilter.vue";

export default {
  name: "App",
  props: {},
  components: {
    Hamburger,
    ShoppingCart,
    ProductsFilter,
    Products,
  },
};
</script>

<style lang='scss'>
@import "./scss/style.scss";
</style>
