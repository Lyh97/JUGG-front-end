<template>
  <div>
    <Count :timeStatus="true" :changeStatus="true"></Count>
  </div>
</template>
<script>
import Count from './Count.vue'
export default {
  components: {
    Count
  }
}
</script>