<template>
  <div class="hamburger">
    <button
      @click="active = !active"
      class="hamburger__button"
      :class="isActive('hamburger__button--is-active')"
      type="button">
      <span class="hamburger__button-box">
        <span class="hamburger__button-inner"></span>
      </span>
    </button>
    <div :class="isActive('menu--slide')" class="menu">
      <ul>
        <li v-for="menuItem in menuList" :key="menuItem.position">
          <a :href="menuItem.link"
            ><p class="h2">{{ menuItem.position }}</p></a>
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