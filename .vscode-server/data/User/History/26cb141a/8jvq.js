Uncaught runtime errors:
ERROR
Module build failed (from ./node_modules/babel-loader/lib/index.js):
SyntaxError: /app/src/pages/User/User.js: 'return' outside of function. (35:2)

  33 |   };
  34 |
> 35 |   return (
     |   ^
  36 |     <div className="container">
  37 |       <p className="header">Mon Compte</p>
  38 |       <p className="userInfo">Nom: {user ? user.name : ''}</p>
    at constructor (/app/node_modules/@babel/parser/lib/index.js:356:19)
    at FlowParserMixin.raise (/app/node_modules/@babel/parser/lib/index.js:3223:19)
    at FlowParserMixin.parseReturnStatement (/app/node_modules/@babel/parser/lib/index.js:12995:12)
    at FlowParserMixin.parseStatementContent (/app/node_modules/@babel/parser/lib/index.js:12621:21)
    at FlowParserMixin.parseStatementLike (/app/node_modules/@babel/parser/lib/index.js:12588:17)
    at FlowParserMixin.parseStatementLike (/app/node_modules/@babel/parser/lib/index.js:5088:24)
    at FlowParserMixin.parseModuleItem (/app/node_modules/@babel/parser/lib/index.js:12565:17)
    at FlowParserMixin.parseBlockOrModuleBlockBody (/app/node_modules/@babel/parser/lib/index.js:13189:36)
    at FlowParserMixin.parseBlockBody (/app/node_modules/@babel/parser/lib/index.js:13182:10)
    at FlowParserMixin.parseProgram (/app/node_modules/@babel/parser/lib/index.js:12464:10)
    at FlowParserMixin.parseTopLevel (/app/node_modules/@babel/parser/lib/index.js:12454:25)
    at FlowParserMixin.parseTopLevel (/app/node_modules/@babel/parser/lib/index.js:5893:28)
    at FlowParserMixin.parse (/app/node_modules/@babel/parser/lib/index.js:14376:10)
    at parse (/app/node_modules/@babel/parser/lib/index.js:14417:38)
    at parser (/app/node_modules/@babel/core/lib/parser/index.js:41:34)
    at parser.next (<anonymous>)
    at normalizeFile (/app/node_modules/@babel/core/lib/transformation/normalize-file.js:64:37)
    at normalizeFile.next (<anonymous>)
    at run (/app/node_modules/@babel/core/lib/transformation/index.js:21:50)
    at run.next (<anonymous>)
    at transform (/app/node_modules/@babel/core/lib/transform.js:22:33)
    at transform.next (<anonymous>)
    at step (/app/node_modules/gensync/index.js:261:32)
    at /app/node_modules/gensync/index.js:273:13
    at async.call.result.err.err (/app/node_modules/gensync/index.js:223:11)
./src/pages/User/User.js@https://www.ligue1.live/static/js/bundle.js:4330:7
options.factory@https://www.ligue1.live/static/js/bundle.js:76953:31
__webpack_require__@https://www.ligue1.live/static/js/bundle.js:76368:33
fn@https://www.ligue1.live/static/js/bundle.js:76610:21
./src/app/App.js@https://www.ligue1.live/static/js/bundle.js:141:94
options.factory@https://www.ligue1.live/static/js/bundle.js:76953:31
__webpack_require__@https://www.ligue1.live/static/js/bundle.js:76368:33
fn@https://www.ligue1.live/static/js/bundle.js:76610:21
./src/index.js@https://www.ligue1.live/static/js/bundle.js:1149:85
options.factory@https://www.ligue1.live/static/js/bundle.js:76953:31
__webpack_require__@https://www.ligue1.live/static/js/bundle.js:76368:33
@https://www.ligue1.live/static/js/bundle.js:77535:56
@https://www.ligue1.live/static/js/bundle.js:77537:12
