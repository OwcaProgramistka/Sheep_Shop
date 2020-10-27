<template>
  <div class="hamburger-wrapper">
    <button
      @click="active = !active"
      class="hamburger hamburger--squeeze"
      :class="isActive('is-active')"
      type="button"
    >
      <span class="hamburger-box">
        <span class="hamburger-inner"></span>
      </span>
    </button>
    <div :class="isActive('slide')" class="menu">
      <ul>
        <li v-for="menuItem in menuList" :key="menuItem.position">
          <a :href="menuItem.link"
            ><h2>{{ menuItem.position }}</h2></a
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hamburger",
  data() {
    return {
      active: false,
      menuList: [
        { position: "Home", link: "#" },
        { position: "Products", link: "#" },
        { position: "My Account", link: "#" },
        { position: "Customer Service", link: "#" },
      ],
    };
  },
  methods: {
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