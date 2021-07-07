<template>
  <div class="container">
    <div v-html='text'></div>
  </div>
</template>

<script>

export default {
  async asyncData({ params, $http, $storyblok }) {
    const response = await $storyblok.get('cdn/stories/pages/')
    return {
      story: response.data.story,
    }
  },
  computed: {
    text() {
      return this.$storyblok.richTextResolver.render(this.story.content.content)
    }
  },
  created() {
    if (process.client) {
      window.index = this;
    }
  },
  mounted() {
  }
}
</script>

<style>
</style>
