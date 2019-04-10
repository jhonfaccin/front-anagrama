<template>
  <div id="list">
    <div id="list-container" v-if="Object.keys(list).length">
      <h4>Lista de Palavras</h4>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Primeira palavra</th>
            <th scope="col">Segunda palavra</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(iten,i) in list" v-bind:key="i" style="border-bottom: 1px solid black">
            <td class="anagram-false" v-if="iten.isAnagrama == false">{{iten.wordA}}</td>
            <td class="anagram-true" v-if="iten.isAnagrama == true">{{iten.wordA}}</td>
            <td class="anagram-false" v-if="iten.isAnagrama == false">{{iten.wordB}}</td>
            <td class="anagram-true" v-if="iten.isAnagrama == true">{{iten.wordB}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import wordService from "../service/wordService.js";
import axios from "axios";

export default {
  name: "list",
  data() {
    return {
      list: {}
    };
  },

  mounted() {
    this.$root.$on("", data => {
      this.list = wordService.list().then(resp => {
        this.list = resp.data;
      });
    });
  },

  created: function() {
    this.list = wordService.list().then(resp => {
      this.list = resp.data;
    });
  }
};
</script>

<style scoped>
#list-container {
  padding-top: 20px;
}
.anagram-true {
  background: #d6e7f2;
  border-bottom: 1px solid black;
}

.anagram-false {
  background: #efdbdb;
  border-bottom: 1px solid black;
}
</style>


