<template>

<audio controls class="overflow">
    <source class="overflow" src="../../../server/output.mp3" type="audio/mp3">
    Your browser does not support the audio element.
</audio>

</template>

<script>
import SearchService from '@/services/SearchService'
export default {
    
}
</script>
  
<style>
.overflow { overflow: hidden;}
</style>
