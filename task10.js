function checkBrackets(JsCode){ 
    const jsCode = Array.from(JsCode);
    const brackets = jsCode.reduce((result, symbol) => {
        if(result.hasOwnProperty(symbol))        
            result[symbol] += 1;
        return result;
    },{"{":0, "}":0, "[":0, "]":0, "(":0, ")":0});
    return (brackets["{"] == brackets["}"]) && (brackets["["] == brackets["]"]) && (brackets["("] == brackets[")"]);
}

let someRightJSCode = `for(const concert of Object.entries(concerts)){
    if(concert[1]>today)
        futureConcerts.push(concert);
}`;
let someWrongJSCode = `for(const concert of Object.entries(concerts)   {
    if(concert[1  >today)
        futureConcerts.push(concert);
}`;

console.log("Some right JS code");
console.log(someRightJSCode);
console.log("Some wrong JS code");
console.log(someWrongJSCode);

console.log("Checking some right JS code");
console.log(checkBrackets(someRightJSCode));
console.log("Checking some wrong JS code");
console.log(checkBrackets(someWrongJSCode));
