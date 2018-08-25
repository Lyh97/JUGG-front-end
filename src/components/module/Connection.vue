<template>
  <div>
    <Count :timeStatus="true" :changeStatus="true"></Count>
    <div style="height: 50px;"></div>
    <!-- <Picboard></Picboard> -->
  </div>
</template>
<script>
import Picboard from './Picboard.vue'
import Count from './Count.vue'
export default {
  components: {
    Count, Picboard
  }
}
</script>