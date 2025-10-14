const calculator = require("../../models/calculator.js")

test("somar dois numeros para testar",()=>{
  const result = calculator.sum(2,2);
  expect(result).toBe(4);
})

test("somar dois numeros grandes",()=>{
  const result = calculator.sum(1098, 2675);
  expect(result).toBe(3773);
})