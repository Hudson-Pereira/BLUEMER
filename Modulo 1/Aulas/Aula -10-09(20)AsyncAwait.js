const prompt = require('prompt-sync')();

async function joinStrings(string1, string2) {

    return string1 + '' + string2;

};

async function init() {
    await joinStrings ('Corinthians','Melhor').then(function(result){
        console.log(result);
    });
};

init();