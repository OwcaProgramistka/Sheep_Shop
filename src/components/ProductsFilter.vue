<template>
  <div class="products-filter-wrapper">
    <div class="products-filter">
      <div class="underline">
        <h3>Filter by</h3>
        <div
          @click="active = !active"
          :class="isActive('opened')"
          class="circle-plus closed"
        >
          <div class="circle">
            <div class="horizontal"></div>
            <div class="vertical"></div>
          </div>
        </div>
      </div>
      <div class="filter-list-wrapper" :class="isActive('rolldown')">
        <h5>Color</h5>
        <ul>
          <li v-for="color in colorVariants" :key="color.name">
            <input
              class="checkbox"
              v-model="color.checked"
              @change="inputChecked(color.checked, color.value)"
              type="checkbox"
              :value="color.value"
              :id="color.name"
              :name="color.name"
            />
            <label class="label-for-check" :for="color.name"
              ><div :style="{ background: color.sample }" class="sample"></div>
              {{ color.name }}</label
            >
          </li>
        </ul>
      </div>
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
</style>