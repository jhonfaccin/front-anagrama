import { http } from './config'

const isAnagram = function (readWordA,readWordB) {
    const wordA = readWordA.toLowerCase().split("").sort();
    const wordB = readWordB.toLowerCase().split("").sort();

    if (wordA.toString() === wordB.toString() && wordA.length == wordB.length) {
        return true;
    } else {
        return false;
    }
};


export default {
    list: () => {
        return http.get('/anagramas/').then(resp => {
            return resp
        });
    },

    save: (readWordA, readWordB) => {
        var param = {}
        param.wordA = readWordA;
        param.wordB = readWordB;
        param.isAnagrama = isAnagram(readWordA,readWordB);

        return http.post('/anagramas/', param).then(resp => {
            return resp;
        })
    },

}