//
// this is just a stub for a function you need to implement
//
function getStats(txt){
    let nChars;
    let nWords;
    let nLines;
    let nNonEmptyLines = 0;
    let maxLineLength = 0;
    let averageWordLength = 0;
    let palindromes =[];
    let longestWords = [];
    
    let freqDict = {};
    let mostFrequentWords = [];
    
    let wordsTxt = txt;
    let lines = txt.split("\n");
    let acceptableChar = /^[0-9a-zA-Z]+$/;
    
    // get nChars
    nChars = txt.length;
    
    // Turn non letter and non number characters into spaces
    for(let i = 0; i < wordsTxt.length; i++){
        if(wordsTxt[i].value.match(acceptableChar)){
            continue;
        } else {
            wordsTxt[i] = " ";
        }
    }
    
    // Use converted words to get number of words
    nWords = wordsTxt.split().length;
    
    // Get number of lines 
    if(txt === ""){
        nLines = 0;
    } else{
        nLines = lines.length();
    }
    
    // get number of non empty lines
    let lineCount = 0;
    for (let i = 0; i < lines.length; i++){
        if (lines[i].trim().length > 0){
            lineCount += 1;
        }
    }
    
    nNonEmptyLines = lineCount;
    
    // Get max line length of text
    let maxLine = 0;
    for (let i = 0; i < lines.length; i++){
        if (lines[i].length > maxLine){
            maxLine = lines[i].length;
        }
    }
    
    maxLineLength = maxLine;
    
    // Average Word Length
    let letterCount = 0;
    let listWords = wordsTxt.split();
    for(let i = 0; i < listWords.length; i++){
        letterCount += listWords[i].length;
    }
    
    averageWordLength = letterCount / nWords;
    
    // Frequency of Words
    let lowerListWords = listWords.toLowerCase();
    for(let x in lowerListWords){
        if(x in freqDict){
            freqDict[x] += 1;
        } else {
            freqDict[x] = 1;
        }
    }
    
    // Palindrome Test 
    let listWordsOrig = txt.split();
    for (let x in listWords){
        // Make sure length of word is > 2 letters. 
        if (x.length > 2){
            // Reverse word and check if it's equal to the original word
            let reverseWord = x.split("").reverse().join("");
            if(reverseWord === x){
                palindromes.push(x);
            }
            
        }
    }
    
    // Sort frequency dictionary to get most frequent words
    // 1) Put into array
    // 2) Sort in descending order
    // 3) Print top 10
    let sArrayFreq = [];
    // Put values in freqDict into array (1)
    for (let x in freqDict){
        sArrayFreq.push([x, freqDict[x]]);
    }
    
    // Sort the new array in descending order (2)
    sArrayFreq.sort(function(x,y){
       return y[1]-x[1]; 
    });
    
    // Push the top 10 into mostFrequentWords (3)
    let breakValue = 0;
    for(let x in sArrayFreq){
        breakValue += 1;
        mostFrequentWords.push(sArrayFreq[x][0] + "(" + sArrayFreq[x][1] + ")");
        
        if (breakValue === 10){
            breakValue = 0;
            break;
        }
    }
    
    // Find longest words - Similar to frequency
    // 1) Put length of words in dictionary.
    // 2) Put into array
    // 3) Sort in descending order
    // 4) print top 10 
    let dCharLength = {};
    let sArrayLength = [];
    // 1
    for(let x in listWords){
        if(x in dCharLength){
            continue;
        } else{
            dCharLength[x] = listWords[x].length;
        }
    }
    
    // 2
    for (let x in dCharLength){
        sArrayLength.push([x, dCharLength[x]]);
    }
    
    // 3
    sArrayLength.sort(function(x,y){
        return y[1]-x[1];
    });
    
    // 4
    for(let x in sArrayLength){
        breakValue += 1;
        longestWords.push(sArrayLength[x][0]);
        
        if (breakValue === 10){
            breakValue = 0;
            break;
        }
    }
    
    
    return {
        nChars: nChars,
        nWords: nWords,
        nLines: nLines,
        nNonEmptyLines: nNonEmptyLines,
        averageWordLength: averageWordLength,
        maxLineLength: maxLineLength,
        palindromes: palindromes,
        longestWords: longestWords,
        mostFrequentWords: mostFrequentWords
    };    
    
}

