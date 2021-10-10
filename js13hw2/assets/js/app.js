function deCoder() {
    let vocab = {
        symBol: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
                 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
                 'q', 'r', 's', 't', 'y', 'v', 'w', 'x',
                 'y', 'z', '0', '1', '2', '3', '4', '5',
                 '6', '7', '8', '9'],
        meaNing: ['Alpha', 'Bravo', 'Charlie', 'Delta', 
                  'Echo', 'Foxtrot', 'Golf', 'Hotel',
                  'India', 'Juliett', 'Kilo', 'Lima',
                  'Mike', 'November', 'Oscar', 'Papa',
                  'Quebec', 'Romeo', 'Sierra', 'Tango',
                  'Uniform', 'Victor', 'Whiskey', 'X-Ray',
                  'Yankee', 'Zulu', 'Zero', 'One', 'Two',
                  'Three', 'Four', 'Five', 'Six', 'Seven',
                  'Eight', 'Nine']
    }
        
    let codedPhrase = inputCode.value;
    let finalPhrase = [];
    let codeCheck = codedPhrase.split('');
    
    
    for(i=0; i<codeCheck.length; i++){
        if (codeCheck[i] == codeCheck[i].toUpperCase()) {
            codeCheck[i] = codeCheck[i].toLowerCase();
            console.log(codeCheck);       
        }
    }
    
    for(i=0; i<codeCheck.length; i++){
        for(k=0; k<vocab.meaNing.length; k++) {
            if(codeCheck[i] === vocab.symBol[k]) {
                finalPhrase.push(vocab.meaNing[k])
            }
        }
    }

    outputCode.innerHTML = `The frase is ${finalPhrase}`;

}




