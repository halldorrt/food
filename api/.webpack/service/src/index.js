(function(e, a) { for(var i in a) e[i] = a[i]; if(a.__esModule) Object.defineProperty(e, "__esModule", { value: true }); }(exports,
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/graphql/mutation/schema.graphql":
/*!*********************************************!*\
  !*** ./src/graphql/mutation/schema.graphql ***!
  \*********************************************/
/***/ ((module) => {


    var doc = {"kind":"Document","definitions":[{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"Mutation"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"test"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]}]}],"loc":{"start":0,"end":34}};
    doc.loc.source = {"body":"type Mutation {\n  test: String!\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

    var names = {};
    function unique(defs) {
      return defs.filter(
        function(def) {
          if (def.kind !== 'FragmentDefinition') return true;
          var name = def.name.value
          if (names[name]) {
            return false;
          } else {
            names[name] = true;
            return true;
          }
        }
      )
    }
  

      module.exports = doc;
    


/***/ }),

/***/ "./src/graphql/query/schema.graphql":
/*!******************************************!*\
  !*** ./src/graphql/query/schema.graphql ***!
  \******************************************/
/***/ ((module) => {


    var doc = {"kind":"Document","definitions":[{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"Query"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"test"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]}]}],"loc":{"start":0,"end":31}};
    doc.loc.source = {"body":"type Query {\n  test: String!\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

    var names = {};
    function unique(defs) {
      return defs.filter(
        function(def) {
          if (def.kind !== 'FragmentDefinition') return true;
          var name = def.name.value
          if (names[name]) {
            return false;
          } else {
            names[name] = true;
            return true;
          }
        }
      )
    }
  

      module.exports = doc;
    


/***/ }),

/***/ "./src/graphql/mutation/resolvers.ts":
/*!*******************************************!*\
  !*** ./src/graphql/mutation/resolvers.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// import { Resolvers } from '../schema.types';
Object.defineProperty(exports, "__esModule", ({ value: true }));
var resolvers /*: Resolvers */ = {
    Mutation: {
        test: function () {
            return "Salutations from your GQL DataManager query endpoint, date: " + new Date().toISOString();
        },
    },
};
exports.default = resolvers;


/***/ }),

/***/ "./src/graphql/query/resolvers.ts":
/*!****************************************!*\
  !*** ./src/graphql/query/resolvers.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// import { Resolvers } from '../schema.types';
Object.defineProperty(exports, "__esModule", ({ value: true }));
var resolvers /*: Resolvers */ = {
    Query: {
        test: function () {
            return "Salutations from your GQL DataManager query endpoint, date: " + new Date().toISOString();
        },
    },
};
exports.default = resolvers;


/***/ }),

/***/ "./src/graphql/resolvers.ts":
/*!**********************************!*\
  !*** ./src/graphql/resolvers.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var resolvers_1 = __importDefault(__webpack_require__(/*! ./query/resolvers */ "./src/graphql/query/resolvers.ts"));
var resolvers_2 = __importDefault(__webpack_require__(/*! ./mutation/resolvers */ "./src/graphql/mutation/resolvers.ts"));
exports.default = [resolvers_1.default, resolvers_2.default];


/***/ }),

/***/ "./src/graphql/typeDefs.ts":
/*!*********************************!*\
  !*** ./src/graphql/typeDefs.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var schema_graphql_1 = __importDefault(__webpack_require__(/*! ./query/schema.graphql */ "./src/graphql/query/schema.graphql"));
var schema_graphql_2 = __importDefault(__webpack_require__(/*! ./mutation/schema.graphql */ "./src/graphql/mutation/schema.graphql"));
exports.default = [schema_graphql_1.default, schema_graphql_2.default];


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.handler = void 0;
var apollo_server_lambda_1 = __webpack_require__(/*! apollo-server-lambda */ "apollo-server-lambda");
var typeDefs_1 = __importDefault(__webpack_require__(/*! ./graphql/typeDefs */ "./src/graphql/typeDefs.ts"));
var resolvers_1 = __importDefault(__webpack_require__(/*! ./graphql/resolvers */ "./src/graphql/resolvers.ts"));
var server = new apollo_server_lambda_1.ApolloServer({
    typeDefs: typeDefs_1.default,
    resolvers: resolvers_1.default,
    context: function (_a) {
        var event = _a.event, context = _a.context;
        return ({
            headers: event.headers,
            functionName: context.functionName,
            event: event,
            context: context,
        });
    },
});
exports.handler = server.createHandler({
    cors: {
        origin: '*',
        credentials: true,
    },
});


/***/ }),

/***/ "apollo-server-lambda":
/*!***************************************!*\
  !*** external "apollo-server-lambda" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("apollo-server-lambda");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__("./src/index.ts");
/******/ })()

));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjL2luZGV4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVjaXBlLXZhdWx0LWFwaS8uL3NyYy9ncmFwaHFsL211dGF0aW9uL3NjaGVtYS5ncmFwaHFsIiwid2VicGFjazovL3JlY2lwZS12YXVsdC1hcGkvLi9zcmMvZ3JhcGhxbC9xdWVyeS9zY2hlbWEuZ3JhcGhxbCIsIndlYnBhY2s6Ly9yZWNpcGUtdmF1bHQtYXBpLy4vc3JjL2dyYXBocWwvbXV0YXRpb24vcmVzb2x2ZXJzLnRzIiwid2VicGFjazovL3JlY2lwZS12YXVsdC1hcGkvLi9zcmMvZ3JhcGhxbC9xdWVyeS9yZXNvbHZlcnMudHMiLCJ3ZWJwYWNrOi8vcmVjaXBlLXZhdWx0LWFwaS8uL3NyYy9ncmFwaHFsL3Jlc29sdmVycy50cyIsIndlYnBhY2s6Ly9yZWNpcGUtdmF1bHQtYXBpLy4vc3JjL2dyYXBocWwvdHlwZURlZnMudHMiLCJ3ZWJwYWNrOi8vcmVjaXBlLXZhdWx0LWFwaS8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9yZWNpcGUtdmF1bHQtYXBpL2V4dGVybmFsIFwiYXBvbGxvLXNlcnZlci1sYW1iZGFcIiIsIndlYnBhY2s6Ly9yZWNpcGUtdmF1bHQtYXBpL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3JlY2lwZS12YXVsdC1hcGkvd2VicGFjay9zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIlxuICAgIHZhciBkb2MgPSB7XCJraW5kXCI6XCJEb2N1bWVudFwiLFwiZGVmaW5pdGlvbnNcIjpbe1wia2luZFwiOlwiT2JqZWN0VHlwZURlZmluaXRpb25cIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiTXV0YXRpb25cIn0sXCJpbnRlcmZhY2VzXCI6W10sXCJkaXJlY3RpdmVzXCI6W10sXCJmaWVsZHNcIjpbe1wia2luZFwiOlwiRmllbGREZWZpbml0aW9uXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcInRlc3RcIn0sXCJhcmd1bWVudHNcIjpbXSxcInR5cGVcIjp7XCJraW5kXCI6XCJOb25OdWxsVHlwZVwiLFwidHlwZVwiOntcImtpbmRcIjpcIk5hbWVkVHlwZVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJTdHJpbmdcIn19fSxcImRpcmVjdGl2ZXNcIjpbXX1dfV0sXCJsb2NcIjp7XCJzdGFydFwiOjAsXCJlbmRcIjozNH19O1xuICAgIGRvYy5sb2Muc291cmNlID0ge1wiYm9keVwiOlwidHlwZSBNdXRhdGlvbiB7XFxuICB0ZXN0OiBTdHJpbmchXFxufVxcblwiLFwibmFtZVwiOlwiR3JhcGhRTCByZXF1ZXN0XCIsXCJsb2NhdGlvbk9mZnNldFwiOntcImxpbmVcIjoxLFwiY29sdW1uXCI6MX19O1xuICBcblxuICAgIHZhciBuYW1lcyA9IHt9O1xuICAgIGZ1bmN0aW9uIHVuaXF1ZShkZWZzKSB7XG4gICAgICByZXR1cm4gZGVmcy5maWx0ZXIoXG4gICAgICAgIGZ1bmN0aW9uKGRlZikge1xuICAgICAgICAgIGlmIChkZWYua2luZCAhPT0gJ0ZyYWdtZW50RGVmaW5pdGlvbicpIHJldHVybiB0cnVlO1xuICAgICAgICAgIHZhciBuYW1lID0gZGVmLm5hbWUudmFsdWVcbiAgICAgICAgICBpZiAobmFtZXNbbmFtZV0pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmFtZXNbbmFtZV0gPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICApXG4gICAgfVxuICBcblxuICAgICAgbW9kdWxlLmV4cG9ydHMgPSBkb2M7XG4gICAgXG4iLCJcbiAgICB2YXIgZG9jID0ge1wia2luZFwiOlwiRG9jdW1lbnRcIixcImRlZmluaXRpb25zXCI6W3tcImtpbmRcIjpcIk9iamVjdFR5cGVEZWZpbml0aW9uXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIlF1ZXJ5XCJ9LFwiaW50ZXJmYWNlc1wiOltdLFwiZGlyZWN0aXZlc1wiOltdLFwiZmllbGRzXCI6W3tcImtpbmRcIjpcIkZpZWxkRGVmaW5pdGlvblwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJ0ZXN0XCJ9LFwiYXJndW1lbnRzXCI6W10sXCJ0eXBlXCI6e1wia2luZFwiOlwiTm9uTnVsbFR5cGVcIixcInR5cGVcIjp7XCJraW5kXCI6XCJOYW1lZFR5cGVcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiU3RyaW5nXCJ9fX0sXCJkaXJlY3RpdmVzXCI6W119XX1dLFwibG9jXCI6e1wic3RhcnRcIjowLFwiZW5kXCI6MzF9fTtcbiAgICBkb2MubG9jLnNvdXJjZSA9IHtcImJvZHlcIjpcInR5cGUgUXVlcnkge1xcbiAgdGVzdDogU3RyaW5nIVxcbn1cXG5cIixcIm5hbWVcIjpcIkdyYXBoUUwgcmVxdWVzdFwiLFwibG9jYXRpb25PZmZzZXRcIjp7XCJsaW5lXCI6MSxcImNvbHVtblwiOjF9fTtcbiAgXG5cbiAgICB2YXIgbmFtZXMgPSB7fTtcbiAgICBmdW5jdGlvbiB1bmlxdWUoZGVmcykge1xuICAgICAgcmV0dXJuIGRlZnMuZmlsdGVyKFxuICAgICAgICBmdW5jdGlvbihkZWYpIHtcbiAgICAgICAgICBpZiAoZGVmLmtpbmQgIT09ICdGcmFnbWVudERlZmluaXRpb24nKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB2YXIgbmFtZSA9IGRlZi5uYW1lLnZhbHVlXG4gICAgICAgICAgaWYgKG5hbWVzW25hbWVdKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5hbWVzW25hbWVdID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgKVxuICAgIH1cbiAgXG5cbiAgICAgIG1vZHVsZS5leHBvcnRzID0gZG9jO1xuICAgIFxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vLyBpbXBvcnQgeyBSZXNvbHZlcnMgfSBmcm9tICcuLi9zY2hlbWEudHlwZXMnO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHJlc29sdmVycyAvKjogUmVzb2x2ZXJzICovID0ge1xuICAgIE11dGF0aW9uOiB7XG4gICAgICAgIHRlc3Q6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBcIlNhbHV0YXRpb25zIGZyb20geW91ciBHUUwgRGF0YU1hbmFnZXIgcXVlcnkgZW5kcG9pbnQsIGRhdGU6IFwiICsgbmV3IERhdGUoKS50b0lTT1N0cmluZygpO1xuICAgICAgICB9LFxuICAgIH0sXG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gcmVzb2x2ZXJzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vLyBpbXBvcnQgeyBSZXNvbHZlcnMgfSBmcm9tICcuLi9zY2hlbWEudHlwZXMnO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHJlc29sdmVycyAvKjogUmVzb2x2ZXJzICovID0ge1xuICAgIFF1ZXJ5OiB7XG4gICAgICAgIHRlc3Q6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBcIlNhbHV0YXRpb25zIGZyb20geW91ciBHUUwgRGF0YU1hbmFnZXIgcXVlcnkgZW5kcG9pbnQsIGRhdGU6IFwiICsgbmV3IERhdGUoKS50b0lTT1N0cmluZygpO1xuICAgICAgICB9LFxuICAgIH0sXG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gcmVzb2x2ZXJzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgcmVzb2x2ZXJzXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vcXVlcnkvcmVzb2x2ZXJzXCIpKTtcbnZhciByZXNvbHZlcnNfMiA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9tdXRhdGlvbi9yZXNvbHZlcnNcIikpO1xuZXhwb3J0cy5kZWZhdWx0ID0gW3Jlc29sdmVyc18xLmRlZmF1bHQsIHJlc29sdmVyc18yLmRlZmF1bHRdO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgc2NoZW1hX2dyYXBocWxfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9xdWVyeS9zY2hlbWEuZ3JhcGhxbFwiKSk7XG52YXIgc2NoZW1hX2dyYXBocWxfMiA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9tdXRhdGlvbi9zY2hlbWEuZ3JhcGhxbFwiKSk7XG5leHBvcnRzLmRlZmF1bHQgPSBbc2NoZW1hX2dyYXBocWxfMS5kZWZhdWx0LCBzY2hlbWFfZ3JhcGhxbF8yLmRlZmF1bHRdO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmhhbmRsZXIgPSB2b2lkIDA7XG52YXIgYXBvbGxvX3NlcnZlcl9sYW1iZGFfMSA9IHJlcXVpcmUoXCJhcG9sbG8tc2VydmVyLWxhbWJkYVwiKTtcbnZhciB0eXBlRGVmc18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2dyYXBocWwvdHlwZURlZnNcIikpO1xudmFyIHJlc29sdmVyc18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2dyYXBocWwvcmVzb2x2ZXJzXCIpKTtcbnZhciBzZXJ2ZXIgPSBuZXcgYXBvbGxvX3NlcnZlcl9sYW1iZGFfMS5BcG9sbG9TZXJ2ZXIoe1xuICAgIHR5cGVEZWZzOiB0eXBlRGVmc18xLmRlZmF1bHQsXG4gICAgcmVzb2x2ZXJzOiByZXNvbHZlcnNfMS5kZWZhdWx0LFxuICAgIGNvbnRleHQ6IGZ1bmN0aW9uIChfYSkge1xuICAgICAgICB2YXIgZXZlbnQgPSBfYS5ldmVudCwgY29udGV4dCA9IF9hLmNvbnRleHQ7XG4gICAgICAgIHJldHVybiAoe1xuICAgICAgICAgICAgaGVhZGVyczogZXZlbnQuaGVhZGVycyxcbiAgICAgICAgICAgIGZ1bmN0aW9uTmFtZTogY29udGV4dC5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICBldmVudDogZXZlbnQsXG4gICAgICAgICAgICBjb250ZXh0OiBjb250ZXh0LFxuICAgICAgICB9KTtcbiAgICB9LFxufSk7XG5leHBvcnRzLmhhbmRsZXIgPSBzZXJ2ZXIuY3JlYXRlSGFuZGxlcih7XG4gICAgY29yczoge1xuICAgICAgICBvcmlnaW46ICcqJyxcbiAgICAgICAgY3JlZGVudGlhbHM6IHRydWUsXG4gICAgfSxcbn0pO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXBvbGxvLXNlcnZlci1sYW1iZGFcIik7OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gbW9kdWxlIGV4cG9ydHMgbXVzdCBiZSByZXR1cm5lZCBmcm9tIHJ1bnRpbWUgc28gZW50cnkgaW5saW5pbmcgaXMgZGlzYWJsZWRcbi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xucmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC50c1wiKTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBOzs7Ozs7Ozs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0E7Ozs7Ozs7OztBQzdCQTtBQUNBO0E7Ozs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTs7O0EiLCJzb3VyY2VSb290IjoiIn0=