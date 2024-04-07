//
//
//
//

//--------------------------------------
// let word1 = ['голова', 'нога', 'ухо', 'нос'];
// let word2 = ['сильнее', 'vkusnee', 'bistree'];
// let word3 = ['roga', 'xvost', 'noga', 'sheia'];
// let word4 = ['sovi', 'lisi', 'belki', 'kozi'];
//
//
// function prase(array) {
//     let randomNum = Math.floor(Math.random() * array.length);
//     return array[randomNum];
//
// }
//
// let makePrases = 'у тебя ' + prase(word1) +' '+ prase(word2) + ' чем ' + prase(word3) + ' у ' + prase(word4);
//
// alert(makePrases)


//----------------------------------------


function prase() {
    let word1 = ['голова', 'нога', 'ухо', 'нос'];
    let word2 = ['сильнее', 'vkusnee', 'bistree'];
    let word3 = ['roga', 'xvost', 'noga', 'sheia'];
    let word4 = ['sovi', 'lisi', 'belki', 'kozi'];


    function prase(array) {
        let randomNum = Math.floor(Math.random() * array.length);
        return array[randomNum];
    }

    let makePrases = ['у тебя ' + prase(word1), prase(word2) + ' чем ' + prase(word3) + ' у ' + prase(word4)];

    let result = makePrases.join(' - ');
    alert(result);

}

prase()
