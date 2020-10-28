<template>
  <div class="products-filter">
    <div @click="active = !active" class="products-filter__heading">
      <p class="h3">Filter by</p>
        <div :class="isActive('plus-toggle--opened')" class="plus-toggle plus-toggle--closed">
          <div class="horizontal"></div>
          <div class="vertical"></div>
        </div>
    </div>
    <div
      class="products-filter__list"
      :class="isActive('products-filter__list--rolldown')"
    >
      <p class="h5">Color</p>
      <ul>
        <li v-for="color in colorVariants" :key="color.name">
          <input
            v-model="color.checked"
            @change="inputChecked(color.checked, color.value)"
            type="checkbox"
            :value="color.value"
            :id="color.name"
            :name="color.name"
          />
          <label class="label-for-check" :for="color.name"
            ><p :style="{ background: color.sample }" class="sample"></p>
            {{ color.name }}</label
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { bus } from "../main";

export default {
  name: "ProductFilter",
  data() {
    return {
      colorVariants: [
        { sample: "#32add6", value: "blue", name: "blue", checked: false },
        {
          sample: "#c9bd89",
          value: "yellow",
          name: "pastel yellow",
          checked: false,
        },
        {
          sample: "#a2ce79",
          value: "lime",
          name: "lime green",
          checked: false,
        },
        { sample: "#97bfb8", value: "mint", name: "mint", checked: false },
      ],
      active: false,
    };
  },
  methods: {
    inputChecked(checkboxStatus, colorValue) {
      if (checkboxStatus) {
        bus.$emit("filterChecked", colorValue);
      } else {
        bus.$emit("filterUnchecked", colorValue);
      }
    },

    isActive(cName) {
      if (this.active == true) {
        return cName;
      } else return "";
    },
  },
};
</script>

<style lang='scss'>
@import "../scss/reset.scss";
@import "../scss/variables.scss";
@import "../scss/font-face.scss";
@import "../scss/mixins.scss";
@import "../scss/common.scss";
@import "../scss/products-filter.scss";
@import "../scss/media-queries.scss";
</style>