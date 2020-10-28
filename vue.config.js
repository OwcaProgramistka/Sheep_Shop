module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "@/scss/_reset.scss";@import "@/scss/_font-face.scss";@import "@/scss/_variables.scss";@import "@/scss/_mixins.scss";@import "@/scss/_media-queries.scss";`,
      },
    },
  },
};
