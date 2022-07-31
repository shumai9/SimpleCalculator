const simpleCalculator = require("./simpleCalculator");
//test ("", ()=>{})
test(
    "It adds numbers 5 with 3 = 8 given + ",
    () => {expect(simpleCalculator(5,3,"+")).toBe(8);
});
test(
    "It subtracts numbers 4 - 8 = -4 ",
    () => {expect(simpleCalculator(4,8,'-')).toBe(-4);}
    );
test(
    "It multiplys numbers 4 * 8 = 32 ",
    () => {expect(simpleCalculator(4,8,'*')).toBe(32);}
);
test(
    "It divides numbers 8 / 4 = 2 ",
    () => {expect(simpleCalculator(8,4,'/')).toBe(2);
});
test(
    "It handles string numbers and excutes operation",
    () => {expect(simpleCalculator("2", "4","+")).toBe(6);}
);
test(
    "It handles missing operator with default operation  +",
    () => {expect(simpleCalculator("2", "4")).toBe(6);}
);
test(
    "It handles unaccepted operand with error message ",
    () => {expect(simpleCalculator("30", "4", "&"))
    .toBe("Error Operator not supported, use [+,-,*, /]");}
);
test(
    "It handles the medulo operator to give reminder",
    () => {expect(simpleCalculator(8,2,"%")).toBe(4)}
)