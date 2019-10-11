const fs = require('fs');
const espree = require("espree");
const escodegen = require("escodegen");
let code = fs.readFileSync('./test.js').toString();

const ast = espree.parse(code, {
    tokens: true,
});

ast.body[0].declarations[0].init.value = 2;

console.log(escodegen.generate(ast));
