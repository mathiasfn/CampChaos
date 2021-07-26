<template>
  <div class='flex'>
    <div class='flex-grow mr-8'>
      <div v-if='pigs.length' class='grid grid-cols-3 gap-4'>
        <PigCard v-for='pig in pigs' :pig='pig' :key='pig.id'></PigCard>
      </div>

      <div v-else>
        Ingen resultater
      </div>
    </div>

    <div v-if='breeds.length' style='min-width: 200px'>
      <BreedSidebarList :breeds='breeds'></BreedSidebarList>
    </div>
  </div>
</template>

<script>

import PigCard from '@/components/PigCard'

export default {
  name: 'PigList',
  components: {
    PigCard
  },
  props: {
    pigs: {
      type: Array,
      default: () => []
    },
    breeds: {
      type: Array,
      default: () => []
    },
  }
}
</script>

<style scoped>

</style>
