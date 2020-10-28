<template>
  <div class="products">
    <ul class="products__list">
      <li
        class="product"
        v-show="filter(product.attributes.colors)"
        v-for="product in products"
        :key="product.id"
      >
        <div class="product-inner">
            <figure class="product-picture">
              <img
                :alt="product.title"
                style="height: 290px"
                :src="productImgURL(product.images.thumbnail)"
              />
              <img class="sale-badge" v-if="product.prices.after_discount" src="../../public/images/sale.svg" />
            </figure>
            <button @click="addToCart(product.id)" class="add-to-cart">
              <p class="h4">Add to cart</p>
            </button>
            <div class="product-info">
              <p class="product-title">{{ product.title }}</p>
              <p class="product-price">
                <span :class="oldPrice(product.prices.after_discount)">
                  {{ product.currency }}{{ product.prices.base }}</span>
                <span v-if="product.prices.after_discount">
                  {{ product.currency }}{{ product.prices.after_discount }}</span>
              </p>
            </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import { bus } from "../main";

export default {
  name: "Products",
  data() {
    return {
      products: [],
      productsBaseURL: "http://localhost:3000/api/products",
      activeFilters: [],
    };
  },
  methods: {
    oldPrice(newPrice) {
      if (newPrice) return "old-price";
    },

    filter(productColor) {
      if (!this.activeFilters.length) return true;

      return this.activeFilters.includes(productColor);
    },

    productImgURL(thumbnail) {
      return require("../../public/images/products" + thumbnail);
    },

    addToCart(id) {
      bus.$emit("productAdded", id);
    },
  },
  computed: {},

  created() {
    bus.$on("filterChecked", (data) => {
      this.activeFilters.push(data);
    });

    bus.$on("filterUnchecked", (data) => {
      var index = this.activeFilters.indexOf(data);
      this.activeFilters.splice(index, 1);
    });

    axios
      .get(this.productsBaseURL)
      .then((response) => {
        this.products = response.data;
      })
      .catch((e) => {
        this.errors.push(e);
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
@import '../scss/products.scss';
// @import '../scss/media-queries.scss';
</style>