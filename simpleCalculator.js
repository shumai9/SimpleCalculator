function  simpleCalculator(a,b){
    const ops = {
        "+": (a,b) => a + b,
        "-": (a,b) => a - b,
        "*": (a,b) => a * b,
        "/": (a,b) => a / b,
        "%": (a,b) => a / b
    };
    // Handle un supported operators
    if(!(arguments[2] in ops) &&  arguments.length > 2){
        return "Error Operator not supported, use [+,-,*, /]";
    }
    // Defaults to + operator if 3rd argument is missing
    return ops[
        arguments.length === 2 ? "+" : arguments[arguments.length - 1]
    ](parseInt(a),parseInt(b));
}

module.exports = simpleCalculator;