<template>
  <div>
    <Count :timeStatus="true" :changeStatus="true"></Count>
    <CountLarge :chartStatue="true" :tabStatus="true" :countStatus="true"></CountLarge>
    <CountTable></CountTable>
    <div style="height: 50px;"></div>
    <!-- <Picboard></Picboard> -->
  </div>
</template>
<script>
import Picboard from './Picboard.vue'
import Count from './Count.vue'
import CountLarge from './CountLarge.vue'
import CountTable from './CountTable.vue'
export default {
  components: {
    Count, CountLarge, CountTable, Picboard
  }
}
</script>