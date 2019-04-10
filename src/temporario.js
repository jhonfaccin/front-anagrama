//  <template>
//   <div id="compare">
//     <div class="page-header">
//       <h1 class="title">Anagramas</h1>
//     </div>
//     <div class="alert alert-primary" role="alert" v-if="message">
//       São anagramas!
//     </div>
//     <div class="alert alert-danger" role="alert" v-if="message != null && message == false">
//       Não são anagramas!
//     </div>
//     <form>
//       <div class="form-group">
//         <input class="form-control" type="text" placeholder="digite uma palavra" v-model="readWordA">
//       </div>
//       <div class="form-group">
//         <input class="form-control" type="text" placeholder="digite uma palavra" v-model="readWordB">
//       </div>
		
//       <div>
//       <button class="btn btn-primary btn-lg btn-block" type="button" v-on:click="isAnagrama()">Verifica!</button>
//       </div>
//     </form>
//   </div>
// </template>

// <script>
// import axios from 'axios';
// import wordService from '../service/wordService.js'

// export default {
//   name: "compare",
//   data() {
//     return {
//       readWordA: "",
//       readWordB: "",
//       message: null,
//       words: {'readWordA':"aaaa",'readWordB':"bbbb"}
//     };
//   },
//   mounted(){
//     axios.get('https://jsonplaceholder.typicode.com/posts').then(resp =>{
//         console.log(resp)
//       });
//     this.salvar;
//   },
//   methods: {
//     isAnagrama: function() {
//         wordService.salvar(this.words).then(resp =>{
//         console.log(resp)
//     });

//     isAnagrama: function() {
//         wordService.salvar(this.words);
//     }

//       wordService.listar().then(resp =>{
//         console.log(resp.data[0].name)
//       });
//       var wordA = this.readWordA;
//       var wordB = this.readWordB;
//       wordA = wordA.split("").sort();
//       wordB = wordB.split("").sort();

//       if(wordA.length != wordB.length){
//         this.message = false;
//         return;
//       }

//       for (var i = 0; i < wordA.length; i++) {
//         if (wordA[i] === wordB[i]) {
//           this.message = true;
//         } else {
//           this.message = false;
//           return;
//         }
//       }
//     }
// };
// </script> 
