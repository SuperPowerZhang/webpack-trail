import {parse}  from '@babel/parser';
import traverse from '@babel/traverse';
import generate from '@babel/generator';

const code = `const dd=()=>{
    return true;
}`;
const ast = parse(code, {sourceType:'module'});
traverse(ast,{
    enter:item=>{
    if(item.node.type === "VariableDeclaration"){
      if(item.node.kind === "const"){
        item.node.kind = "var";
           item.node.declarations = item.node.declarations.map(declare=>{
                    if(declare?.init?.type === "ArrowFunctionExpression"){
            // @ts-ignore
                        declare.init.type = "FunctionExpression"
                    }
                    return declare;
                })
      }
    }
    }
})
const result = generate(ast,{},code);
console.log(result.code);

// const code = `let a = 'let'; let b = 2`
// const ast = parse(code, { sourceType: 'module' })
// traverse(ast, {
//   enter: item => {
//     if(item.node.type === 'VariableDeclaration'){
//       if(item.node.kind === 'let'){
//         item.node.kind = 'var'
//       }
//     }
//   }
// })
// const result = generate(ast, {}, code)
// console.log(result.code)