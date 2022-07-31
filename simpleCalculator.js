function simpleCalculator(a,b){
    if (arguments.length === 2) return "Missing operator";
    const ops = {
        "+": (a,b) => a + b,
        "-": (a,b) => a - b,
        "*": (a,b) => a * b,
        "/": (a,b) => a / b
    }
    return ops[
        arguments[arguments.length - 1]
    ](parseInt(a),parseInt(b))
}

module.exports = simpleCalculator;