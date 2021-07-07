<template>
  <div class='border rounded overflow-hidden'>
    <div style='height: 250px'>
      <img :src='image' alt='' class='min-h-full min-w-full object-center object-cover max-h-full'>
    </div>
    <div class='grid gap-y-2 p-4'>
      <h2>{{ animal.name }}</h2>
      <div class='flex-grow'>{{ description }}</div>
      <NuxtLink to='/' class='bg-primary hover:bg-green-500 p-3 rounded text-center text-white transition-colors'>Se marsvin</NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AnimalCard',
  props: {
    animal: {
      type: Object,
      default: null
    },
  },
  computed: {
    image() {
      if (!this.animal.images.length) {
        return 'https://via.placeholder.com/250x250?text=Billede+er+på+vej'
      }

      return this.animal.images[0].filename
    },
    description() {
      if (this.animal.description.length > 100) {
        return this.animal.description.slice(0, 100) + '...';
      }

      return this.animal.description;
    }
  }
}
</script>

<style scoped>

</style>
