//用于去缩进的 ES6 模板字符串助手
const deindent = require('deindent') 

//  deindent 作为一个函数使用
// const result = deindent(`
//                 this
//                 is
//                 the ${"end"}
//                 my only
//                 friend
//                 the end
// `);
// console.log(result)

// 作为一个模板标签
const result2=deindent`
    this
  is
      the ${ "end" }
  my only
  friend
the end
`;
console.log(result2)