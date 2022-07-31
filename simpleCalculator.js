function simpleCalculator(a,b){
    const ops = {
        "+": (a,b) => a + b,
        "-": (a,b) => a - b,
        "*": (a,b) => a * b,
        "/": (a,b) => a / b,
        "%": (a,b) => a / b
    }
    if(!(arguments[2] in ops) &&  arguments.length > 2){
        return "Error Operator not supported, use [+,-,*, /]";
    }
    return ops[
        arguments.length === 2 ? "+" : arguments[arguments.length - 1]
    ](parseInt(a),parseInt(b))
}

module.exports = simpleCalculator;