import { http } from './config'
import { create } from 'domain';



export default {

    listar : () => {
        return http.get('/anagramas/').then(resp => {
            return resp
        });
    },

    salvar : (readWordA,readWordB) => {
        var param = {}
        param.wordA = readWordA;
        param.wordB = readWordB;
        param.isAnagrama = false;

        var wordA = readWordA;
        var wordB = readWordB;
        wordA = wordA.split("").sort();
        wordB = wordB.split("").sort();


        if (wordA.toString() === wordB.toString()){
            console.log("if ");
            param.isAnagrama = true;
        }else{
            console.log("else")
            param.isAnagrama = false;
        }

        if (wordA.length != wordB.length) {
            console.log("tamanho")
            param.isAnagrama = false;
        }
        console.log(param)
        return http.post('/anagramas/', param).then(resp => {
            return resp;
        })
    },

}