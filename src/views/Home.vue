<template>
  <div class="home">
    <div class="page-header">
      <h1 class="title">Anagramas</h1>
    </div>
    <WordCompare/>
    <WordList/>
  </div>
</template>

<script>
// @ is an alias to /src
import WordCompare from '@/components/WordCompare.vue'
import WordList from '@/components/WordList.vue'

export default {
  name: 'home',
  components: {
    WordCompare,
    WordList
  }
}
</script>


