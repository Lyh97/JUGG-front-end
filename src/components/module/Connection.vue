<template>
  <div>
    <Count></Count>
    <CountTable></CountTable>
    <MoreTasksCountTable></MoreTasksCountTable>
    <CountLarge></CountLarge>
    <ChartLarge></ChartLarge>
    <div style="height: 50px;"></div>
    <!-- <Picboard></Picboard> -->
  </div>
</template>
<script>
import Picboard from './Picboard.vue'
import Count from './Count.vue'
import CountLarge from './CountLarge.vue'
import CountTable from './CountTable.vue'
import MoreTasksCountTable from './MoreTasksCountTable.vue'
import ChartLarge from './ChartLarge.vue'

export default {
  components: {
    Count, CountLarge, CountTable, Picboard, MoreTasksCountTable, ChartLarge
  }
}
</script>