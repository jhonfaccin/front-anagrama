<template>
  <div id="compare">
    <div class="alert alert-primary" role="alert" v-if="message">
      São anagramas!
    </div>
    <div class="alert alert-danger" role="alert" v-if="message != null && message == false">
      Não são anagramas!
    </div>
    <form>
      <div class="form-group">
        <input class="form-control" type="text" placeholder="digite uma palavra" v-model="readWordA">
      </div>
      <div class="form-group">
        <input class="form-control" type="text" placeholder="digite uma palavra" v-model="readWordB">
      </div>
      <div>
      <button v-if="readWordA != '' && readWordB != ''" class="btn btn-primary btn-lg btn-block" type="button" v-on:click="isAnagrama()">Verifica!</button>
      </div>
    </form>
  </div>
</template>

<script>
// import axios from 'axios';
import wordService from '../service/wordService.js'

export default {
  name: "compare",
  props:{

  },
  data() {
    return {
      message: null,
      readWordA: "",
      readWordB: ""
    };
  },

  methods: {
    isAnagrama: function() {
        wordService.salvar(this.readWordA,this.readWordB).then(resp =>{
            if (resp.data.isAnagrama == true){
                this.message = true;
            }else{
                this.message = false;
            }
        });
        this.readWordA = '';
        this.readWordB = '';
    }
  }
};
</script>
