function checkBrackets(JsCode) {
    const stack = [];
    const openingBrackets = ['{', '[', '('];
    const closingBrackets = ['}', ']', ')'];
    const matchingBrackets = {
        '}': '{',
        ']': '[',
        ')': '('
    };

    for (let i = 0; i < JsCode.length; i++) {
        const char = JsCode[i];
        if (openingBrackets.includes(char)) {
            stack.push(char);
        } else if (closingBrackets.includes(char)) {
            const lastOpened = stack.pop();
            if (matchingBrackets[char] !== lastOpened) {
                return false;
            }
        }
    }
    return stack.length === 0;
}
console.log("Checking some right JS code:");
console.log(checkBrackets("function example() { return true; }"));
console.log("Checking some wrong JS code:");
console.log(checkBrackets("function example() { return true; ")); 
