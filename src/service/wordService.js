import { http } from './config'

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
        wordA = wordA.toLowerCase().split("").sort();
        wordB = wordB.toLowerCase().split("").sort();


        if (wordA.toString() === wordB.toString()){
            param.isAnagrama = true;
        }else{
            param.isAnagrama = false;
        }

        if (wordA.length != wordB.length) {
            param.isAnagrama = false;
        }
        return http.post('/anagramas/', param).then(resp => {
            return resp;
        })
    },

}