//// [/src/first/bin/first-output.js]
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
var s = "Hello, world";
console.log(s);
function forfirstfirst_PART1Rest() {
    var _a = { a: 10, b: 30, yy: 30 }, b = _a.b, rest = __rest(_a, ["b"]);
}
console.log(s);
console.log(f());
function f() {
    return "JS does hoists";
}
//# sourceMappingURL=first-output.js.map

//// [/src/first/bin/first-output.js.map]
{"version":3,"file":"first-output.js","sourceRoot":"","sources":["../first_PART1.ts","../first_part2.ts","../first_part3.ts"],"names":[],"mappings":";;;;;;;;;AAIA,IAAM,CAAC,GAAG,cAAc,CAAC;AAMzB,OAAO,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC;AACf,SAAS,uBAAuB;IAChC,IAAM,6BAAyC,EAAvC,QAAC,EAAE,wBAAoC,CAAC;AAChD,CAAC;AAAA,OAAO,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC;ACbhB,OAAO,CAAC,GAAG,CAAC,CAAC,EAAE,CAAC,CAAC;ACAjB,SAAS,CAAC;IACN,OAAO,gBAAgB,CAAC;AAC5B,CAAC"}

//// [/src/first/bin/first-output.js.map.baseline.txt]
===================================================================
JsFile: first-output.js
mapUrl: first-output.js.map
sourceRoot: 
sources: ../first_PART1.ts,../first_part2.ts,../first_part3.ts
===================================================================
-------------------------------------------------------------------
emittedFile:/src/first/bin/first-output.js
sourceFile:../first_PART1.ts
-------------------------------------------------------------------
>>>var __rest = (this && this.__rest) || function (s, e) {
>>>    var t = {};
>>>    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
>>>        t[p] = s[p];
>>>    if (s != null && typeof Object.getOwnPropertySymbols === "function")
>>>        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
>>>            t[p[i]] = s[p[i]];
>>>    return t;
>>>};
>>>var s = "Hello, world";
1 >
2 >^^^^
3 >    ^
4 >     ^^^
5 >        ^^^^^^^^^^^^^^
6 >                      ^
1 >interface TheFirst {
  >    none: any;
  >}
  >
  >
2 >const 
3 >    s
4 >      = 
5 >        "Hello, world"
6 >                      ;
1 >Emitted(10, 1) Source(5, 1) + SourceIndex(0)
2 >Emitted(10, 5) Source(5, 7) + SourceIndex(0)
3 >Emitted(10, 6) Source(5, 8) + SourceIndex(0)
4 >Emitted(10, 9) Source(5, 11) + SourceIndex(0)
5 >Emitted(10, 23) Source(5, 25) + SourceIndex(0)
6 >Emitted(10, 24) Source(5, 26) + SourceIndex(0)
---
>>>console.log(s);
1 >
2 >^^^^^^^
3 >       ^
4 >        ^^^
5 >           ^
6 >            ^
7 >             ^
8 >              ^
9 >               ^^^^^^^^^^^^^^^^^^^^^^->
1 >
  >
  >interface NoJsForHereEither {
  >    none: any;
  >}
  >
  >
2 >console
3 >       .
4 >        log
5 >           (
6 >            s
7 >             )
8 >              ;
1 >Emitted(11, 1) Source(11, 1) + SourceIndex(0)
2 >Emitted(11, 8) Source(11, 8) + SourceIndex(0)
3 >Emitted(11, 9) Source(11, 9) + SourceIndex(0)
4 >Emitted(11, 12) Source(11, 12) + SourceIndex(0)
5 >Emitted(11, 13) Source(11, 13) + SourceIndex(0)
6 >Emitted(11, 14) Source(11, 14) + SourceIndex(0)
7 >Emitted(11, 15) Source(11, 15) + SourceIndex(0)
8 >Emitted(11, 16) Source(11, 16) + SourceIndex(0)
---
>>>function forfirstfirst_PART1Rest() {
1->
2 >^^^^^^^^^
3 >         ^^^^^^^^^^^^^^^^^^^^^^^
4 >                                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1->
  >
2 >function 
3 >         forfirstfirst_PART1Rest
1->Emitted(12, 1) Source(12, 1) + SourceIndex(0)
2 >Emitted(12, 10) Source(12, 10) + SourceIndex(0)
3 >Emitted(12, 33) Source(12, 33) + SourceIndex(0)
---
>>>    var _a = { a: 10, b: 30, yy: 30 }, b = _a.b, rest = __rest(_a, ["b"]);
1->^^^^
2 >    ^^^^
3 >        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
4 >                                     ^^
5 >                                       ^^^^^^^^
6 >                                               ^^
7 >                                                 ^^^^^^^^^^^^^^^^^^^^^^^^
8 >                                                                         ^
1->() {
  >
2 >    const 
3 >        { b, ...rest } = { a: 10, b: 30, yy: 30 }
4 >                                     
5 >                                       b
6 >                                               , 
7 >                                                 ...rest } = { a: 10, b: 30, yy: 30 }
8 >                                                                         ;
1->Emitted(13, 5) Source(13, 1) + SourceIndex(0)
2 >Emitted(13, 9) Source(13, 7) + SourceIndex(0)
3 >Emitted(13, 38) Source(13, 48) + SourceIndex(0)
4 >Emitted(13, 40) Source(13, 9) + SourceIndex(0)
5 >Emitted(13, 48) Source(13, 10) + SourceIndex(0)
6 >Emitted(13, 50) Source(13, 12) + SourceIndex(0)
7 >Emitted(13, 74) Source(13, 48) + SourceIndex(0)
8 >Emitted(13, 75) Source(13, 49) + SourceIndex(0)
---
>>>}
1 >
2 >^
3 > ^^^^^^^^^^^^^^^->
1 >
  >
2 >}
1 >Emitted(14, 1) Source(14, 1) + SourceIndex(0)
2 >Emitted(14, 2) Source(14, 2) + SourceIndex(0)
---
>>>console.log(s);
1->
2 >^^^^^^^
3 >       ^
4 >        ^^^
5 >           ^
6 >            ^
7 >             ^
8 >              ^
9 >               ^^^->
1->
2 >console
3 >       .
4 >        log
5 >           (
6 >            s
7 >             )
8 >              ;
1->Emitted(15, 1) Source(14, 2) + SourceIndex(0)
2 >Emitted(15, 8) Source(14, 9) + SourceIndex(0)
3 >Emitted(15, 9) Source(14, 10) + SourceIndex(0)
4 >Emitted(15, 12) Source(14, 13) + SourceIndex(0)
5 >Emitted(15, 13) Source(14, 14) + SourceIndex(0)
6 >Emitted(15, 14) Source(14, 15) + SourceIndex(0)
7 >Emitted(15, 15) Source(14, 16) + SourceIndex(0)
8 >Emitted(15, 16) Source(14, 17) + SourceIndex(0)
---
-------------------------------------------------------------------
emittedFile:/src/first/bin/first-output.js
sourceFile:../first_part2.ts
-------------------------------------------------------------------
>>>console.log(f());
1->
2 >^^^^^^^
3 >       ^
4 >        ^^^
5 >           ^
6 >            ^
7 >             ^^
8 >               ^
9 >                ^
1->
2 >console
3 >       .
4 >        log
5 >           (
6 >            f
7 >             ()
8 >               )
9 >                ;
1->Emitted(16, 1) Source(1, 1) + SourceIndex(1)
2 >Emitted(16, 8) Source(1, 8) + SourceIndex(1)
3 >Emitted(16, 9) Source(1, 9) + SourceIndex(1)
4 >Emitted(16, 12) Source(1, 12) + SourceIndex(1)
5 >Emitted(16, 13) Source(1, 13) + SourceIndex(1)
6 >Emitted(16, 14) Source(1, 14) + SourceIndex(1)
7 >Emitted(16, 16) Source(1, 16) + SourceIndex(1)
8 >Emitted(16, 17) Source(1, 17) + SourceIndex(1)
9 >Emitted(16, 18) Source(1, 18) + SourceIndex(1)
---
-------------------------------------------------------------------
emittedFile:/src/first/bin/first-output.js
sourceFile:../first_part3.ts
-------------------------------------------------------------------
>>>function f() {
1 >
2 >^^^^^^^^^
3 >         ^
4 >          ^^^^^^^^^^^^^^^^^^^->
1 >
2 >function 
3 >         f
1 >Emitted(17, 1) Source(1, 1) + SourceIndex(2)
2 >Emitted(17, 10) Source(1, 10) + SourceIndex(2)
3 >Emitted(17, 11) Source(1, 11) + SourceIndex(2)
---
>>>    return "JS does hoists";
1->^^^^
2 >    ^^^^^^^
3 >           ^^^^^^^^^^^^^^^^
4 >                           ^
1->() {
  >    
2 >    return 
3 >           "JS does hoists"
4 >                           ;
1->Emitted(18, 5) Source(2, 5) + SourceIndex(2)
2 >Emitted(18, 12) Source(2, 12) + SourceIndex(2)
3 >Emitted(18, 28) Source(2, 28) + SourceIndex(2)
4 >Emitted(18, 29) Source(2, 29) + SourceIndex(2)
---
>>>}
1 >
2 >^
3 > ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
  >
2 >}
1 >Emitted(19, 1) Source(3, 1) + SourceIndex(2)
2 >Emitted(19, 2) Source(3, 2) + SourceIndex(2)
---
>>>//# sourceMappingURL=first-output.js.map

//// [/src/first/first_PART1.ts]
interface TheFirst {
    none: any;
}

const s = "Hello, world";

interface NoJsForHereEither {
    none: any;
}

console.log(s);
function forfirstfirst_PART1Rest() {
const { b, ...rest } = { a: 10, b: 30, yy: 30 };
}console.log(s);

//// [/src/third/thirdjs/output/third-output.js]
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
var s = "Hello, world";
console.log(s);
function forfirstfirst_PART1Rest() {
    var _a = { a: 10, b: 30, yy: 30 }, b = _a.b, rest = __rest(_a, ["b"]);
}
console.log(s);
console.log(f());
function f() {
    return "JS does hoists";
}
//# sourceMappingURL=first-output.js.map
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
var N;
(function (N) {
    function f() {
        console.log('testing');
    }
    f();
})(N || (N = {}));
function secondsecond_part1Spread() {
    var b = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        b[_i] = arguments[_i];
    }
}
secondsecond_part1Spread.apply(void 0, __spread([10, 20, 30]));
var C = (function () {
    function C() {
    }
    C.prototype.doSomething = function () {
        console.log("something got done");
    };
    return C;
}());
//# sourceMappingURL=second-output.js.map
var c = new C();
c.doSomething();
function forthirdthird_part1Rest() {
    var _a = { a: 10, b: 30, yy: 30 }, b = _a.b, rest = __rest(_a, ["b"]);
}
//# sourceMappingURL=third-output.js.map

//// [/src/third/thirdjs/output/third-output.js.map]
{"version":3,"file":"third-output.js","sourceRoot":"","sources":["../../../first/first_PART1.ts","../../../first/first_part2.ts","../../../first/first_part3.ts","../../../second/second_part1.ts","../../../second/second_part2.ts","../../third_part1.ts"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;AAIA,IAAM,CAAC,GAAG,cAAc,CAAC;AAMzB,OAAO,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC;AACf,SAAS,uBAAuB;IAChC,IAAM,6BAAyC,EAAvC,QAAC,EAAE,wBAAoC,CAAC;AAChD,CAAC;AAAA,OAAO,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC;ACbhB,OAAO,CAAC,GAAG,CAAC,CAAC,EAAE,CAAC,CAAC;ACAjB,SAAS,CAAC;IACN,OAAO,gBAAgB,CAAC;AAC5B,CAAC;;;;;;;;;;;;;;;;;;;;;;ACED,IAAU,CAAC,CAMV;AAND,WAAU,CAAC;IACP,SAAS,CAAC;QACN,OAAO,CAAC,GAAG,CAAC,SAAS,CAAC,CAAC;IAC3B,CAAC;IAED,CAAC,EAAE,CAAC;AACR,CAAC,EANS,CAAC,KAAD,CAAC,QAMV;AAED,SAAS,wBAAwB;IAAC,WAAc;SAAd,UAAc,EAAd,qBAAc,EAAd,IAAc;QAAd,sBAAc;;AAAI,CAAC;AACrD,wBAAwB,wBAAI,CAAC,EAAE,EAAE,EAAE,EAAE,EAAE,CAAC,GAAE;ACb1C;IAAA;IAIA,CAAC;IAHG,uBAAW,GAAX;QACI,OAAO,CAAC,GAAG,CAAC,oBAAoB,CAAC,CAAC;IACtC,CAAC;IACL,QAAC;AAAD,CAAC,AAJD,IAIC;;ACJD,IAAI,CAAC,GAAG,IAAI,CAAC,EAAE,CAAC;AAChB,CAAC,CAAC,WAAW,EAAE,CAAC;AAChB,SAAS,uBAAuB;IAChC,IAAM,6BAAyC,EAAvC,QAAC,EAAE,wBAAoC,CAAC;AAChD,CAAC"}

//// [/src/third/thirdjs/output/third-output.js.map.baseline.txt]
===================================================================
JsFile: third-output.js
mapUrl: third-output.js.map
sourceRoot: 
sources: ../../../first/first_PART1.ts,../../../first/first_part2.ts,../../../first/first_part3.ts,../../../second/second_part1.ts,../../../second/second_part2.ts,../../third_part1.ts
===================================================================
-------------------------------------------------------------------
emittedFile:/src/third/thirdjs/output/third-output.js
sourceFile:../../../first/first_PART1.ts
-------------------------------------------------------------------
>>>var __rest = (this && this.__rest) || function (s, e) {
>>>    var t = {};
>>>    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
>>>        t[p] = s[p];
>>>    if (s != null && typeof Object.getOwnPropertySymbols === "function")
>>>        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
>>>            t[p[i]] = s[p[i]];
>>>    return t;
>>>};
>>>var __rest = (this && this.__rest) || function (s, e) {
>>>    var t = {};
>>>    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
>>>        t[p] = s[p];
>>>    if (s != null && typeof Object.getOwnPropertySymbols === "function")
>>>        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
>>>            t[p[i]] = s[p[i]];
>>>    return t;
>>>};
>>>var s = "Hello, world";
1 >
2 >^^^^
3 >    ^
4 >     ^^^
5 >        ^^^^^^^^^^^^^^
6 >                      ^
1 >interface TheFirst {
  >    none: any;
  >}
  >
  >
2 >const 
3 >    s
4 >      = 
5 >        "Hello, world"
6 >                      ;
1 >Emitted(19, 1) Source(5, 1) + SourceIndex(0)
2 >Emitted(19, 5) Source(5, 7) + SourceIndex(0)
3 >Emitted(19, 6) Source(5, 8) + SourceIndex(0)
4 >Emitted(19, 9) Source(5, 11) + SourceIndex(0)
5 >Emitted(19, 23) Source(5, 25) + SourceIndex(0)
6 >Emitted(19, 24) Source(5, 26) + SourceIndex(0)
---
>>>console.log(s);
1 >
2 >^^^^^^^
3 >       ^
4 >        ^^^
5 >           ^
6 >            ^
7 >             ^
8 >              ^
9 >               ^^^^^^^^^^^^^^^^^^^^^^->
1 >
  >
  >interface NoJsForHereEither {
  >    none: any;
  >}
  >
  >
2 >console
3 >       .
4 >        log
5 >           (
6 >            s
7 >             )
8 >              ;
1 >Emitted(20, 1) Source(11, 1) + SourceIndex(0)
2 >Emitted(20, 8) Source(11, 8) + SourceIndex(0)
3 >Emitted(20, 9) Source(11, 9) + SourceIndex(0)
4 >Emitted(20, 12) Source(11, 12) + SourceIndex(0)
5 >Emitted(20, 13) Source(11, 13) + SourceIndex(0)
6 >Emitted(20, 14) Source(11, 14) + SourceIndex(0)
7 >Emitted(20, 15) Source(11, 15) + SourceIndex(0)
8 >Emitted(20, 16) Source(11, 16) + SourceIndex(0)
---
>>>function forfirstfirst_PART1Rest() {
1->
2 >^^^^^^^^^
3 >         ^^^^^^^^^^^^^^^^^^^^^^^
4 >                                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1->
  >
2 >function 
3 >         forfirstfirst_PART1Rest
1->Emitted(21, 1) Source(12, 1) + SourceIndex(0)
2 >Emitted(21, 10) Source(12, 10) + SourceIndex(0)
3 >Emitted(21, 33) Source(12, 33) + SourceIndex(0)
---
>>>    var _a = { a: 10, b: 30, yy: 30 }, b = _a.b, rest = __rest(_a, ["b"]);
1->^^^^
2 >    ^^^^
3 >        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
4 >                                     ^^
5 >                                       ^^^^^^^^
6 >                                               ^^
7 >                                                 ^^^^^^^^^^^^^^^^^^^^^^^^
8 >                                                                         ^
1->() {
  >
2 >    const 
3 >        { b, ...rest } = { a: 10, b: 30, yy: 30 }
4 >                                     
5 >                                       b
6 >                                               , 
7 >                                                 ...rest } = { a: 10, b: 30, yy: 30 }
8 >                                                                         ;
1->Emitted(22, 5) Source(13, 1) + SourceIndex(0)
2 >Emitted(22, 9) Source(13, 7) + SourceIndex(0)
3 >Emitted(22, 38) Source(13, 48) + SourceIndex(0)
4 >Emitted(22, 40) Source(13, 9) + SourceIndex(0)
5 >Emitted(22, 48) Source(13, 10) + SourceIndex(0)
6 >Emitted(22, 50) Source(13, 12) + SourceIndex(0)
7 >Emitted(22, 74) Source(13, 48) + SourceIndex(0)
8 >Emitted(22, 75) Source(13, 49) + SourceIndex(0)
---
>>>}
1 >
2 >^
3 > ^^^^^^^^^^^^^^^->
1 >
  >
2 >}
1 >Emitted(23, 1) Source(14, 1) + SourceIndex(0)
2 >Emitted(23, 2) Source(14, 2) + SourceIndex(0)
---
>>>console.log(s);
1->
2 >^^^^^^^
3 >       ^
4 >        ^^^
5 >           ^
6 >            ^
7 >             ^
8 >              ^
9 >               ^^^->
1->
2 >console
3 >       .
4 >        log
5 >           (
6 >            s
7 >             )
8 >              ;
1->Emitted(24, 1) Source(14, 2) + SourceIndex(0)
2 >Emitted(24, 8) Source(14, 9) + SourceIndex(0)
3 >Emitted(24, 9) Source(14, 10) + SourceIndex(0)
4 >Emitted(24, 12) Source(14, 13) + SourceIndex(0)
5 >Emitted(24, 13) Source(14, 14) + SourceIndex(0)
6 >Emitted(24, 14) Source(14, 15) + SourceIndex(0)
7 >Emitted(24, 15) Source(14, 16) + SourceIndex(0)
8 >Emitted(24, 16) Source(14, 17) + SourceIndex(0)
---
-------------------------------------------------------------------
emittedFile:/src/third/thirdjs/output/third-output.js
sourceFile:../../../first/first_part2.ts
-------------------------------------------------------------------
>>>console.log(f());
1->
2 >^^^^^^^
3 >       ^
4 >        ^^^
5 >           ^
6 >            ^
7 >             ^^
8 >               ^
9 >                ^
1->
2 >console
3 >       .
4 >        log
5 >           (
6 >            f
7 >             ()
8 >               )
9 >                ;
1->Emitted(25, 1) Source(1, 1) + SourceIndex(1)
2 >Emitted(25, 8) Source(1, 8) + SourceIndex(1)
3 >Emitted(25, 9) Source(1, 9) + SourceIndex(1)
4 >Emitted(25, 12) Source(1, 12) + SourceIndex(1)
5 >Emitted(25, 13) Source(1, 13) + SourceIndex(1)
6 >Emitted(25, 14) Source(1, 14) + SourceIndex(1)
7 >Emitted(25, 16) Source(1, 16) + SourceIndex(1)
8 >Emitted(25, 17) Source(1, 17) + SourceIndex(1)
9 >Emitted(25, 18) Source(1, 18) + SourceIndex(1)
---
-------------------------------------------------------------------
emittedFile:/src/third/thirdjs/output/third-output.js
sourceFile:../../../first/first_part3.ts
-------------------------------------------------------------------
>>>function f() {
1 >
2 >^^^^^^^^^
3 >         ^
4 >          ^^^^^^^^^^^^^^^^^^^->
1 >
2 >function 
3 >         f
1 >Emitted(26, 1) Source(1, 1) + SourceIndex(2)
2 >Emitted(26, 10) Source(1, 10) + SourceIndex(2)
3 >Emitted(26, 11) Source(1, 11) + SourceIndex(2)
---
>>>    return "JS does hoists";
1->^^^^
2 >    ^^^^^^^
3 >           ^^^^^^^^^^^^^^^^
4 >                           ^
1->() {
  >    
2 >    return 
3 >           "JS does hoists"
4 >                           ;
1->Emitted(27, 5) Source(2, 5) + SourceIndex(2)
2 >Emitted(27, 12) Source(2, 12) + SourceIndex(2)
3 >Emitted(27, 28) Source(2, 28) + SourceIndex(2)
4 >Emitted(27, 29) Source(2, 29) + SourceIndex(2)
---
>>>}
1 >
2 >^
3 > ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
  >
2 >}
1 >Emitted(28, 1) Source(3, 1) + SourceIndex(2)
2 >Emitted(28, 2) Source(3, 2) + SourceIndex(2)
---
-------------------------------------------------------------------
emittedFile:/src/third/thirdjs/output/third-output.js
sourceFile:../../../second/second_part1.ts
-------------------------------------------------------------------
>>>//# sourceMappingURL=first-output.js.map
>>>var __read = (this && this.__read) || function (o, n) {
>>>    var m = typeof Symbol === "function" && o[Symbol.iterator];
>>>    if (!m) return o;
>>>    var i = m.call(o), r, ar = [], e;
>>>    try {
>>>        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
>>>    }
>>>    catch (error) { e = { error: error }; }
>>>    finally {
>>>        try {
>>>            if (r && !r.done && (m = i["return"])) m.call(i);
>>>        }
>>>        finally { if (e) throw e.error; }
>>>    }
>>>    return ar;
>>>};
>>>var __spread = (this && this.__spread) || function () {
>>>    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
>>>    return ar;
>>>};
>>>var N;
1->
2 >^^^^
3 >    ^
4 >     ^
5 >      ^^^^^^^^^^->
1->namespace N {
  >    // Comment text
  >}
  >
  >
2 >namespace 
3 >    N
4 >      {
  >         function f() {
  >             console.log('testing');
  >         }
  >     
  >         f();
  >     }
1->Emitted(50, 1) Source(5, 1) + SourceIndex(3)
2 >Emitted(50, 5) Source(5, 11) + SourceIndex(3)
3 >Emitted(50, 6) Source(5, 12) + SourceIndex(3)
4 >Emitted(50, 7) Source(11, 2) + SourceIndex(3)
---
>>>(function (N) {
1->
2 >^^^^^^^^^^^
3 >           ^
4 >            ^^^^^^^->
1->
2 >namespace 
3 >           N
1->Emitted(51, 1) Source(5, 1) + SourceIndex(3)
2 >Emitted(51, 12) Source(5, 11) + SourceIndex(3)
3 >Emitted(51, 13) Source(5, 12) + SourceIndex(3)
---
>>>    function f() {
1->^^^^
2 >    ^^^^^^^^^
3 >             ^
4 >              ^^^^^^^^^^^^^^^^^^->
1-> {
  >    
2 >    function 
3 >             f
1->Emitted(52, 5) Source(6, 5) + SourceIndex(3)
2 >Emitted(52, 14) Source(6, 14) + SourceIndex(3)
3 >Emitted(52, 15) Source(6, 15) + SourceIndex(3)
---
>>>        console.log('testing');
1->^^^^^^^^
2 >        ^^^^^^^
3 >               ^
4 >                ^^^
5 >                   ^
6 >                    ^^^^^^^^^
7 >                             ^
8 >                              ^
1->() {
  >        
2 >        console
3 >               .
4 >                log
5 >                   (
6 >                    'testing'
7 >                             )
8 >                              ;
1->Emitted(53, 9) Source(7, 9) + SourceIndex(3)
2 >Emitted(53, 16) Source(7, 16) + SourceIndex(3)
3 >Emitted(53, 17) Source(7, 17) + SourceIndex(3)
4 >Emitted(53, 20) Source(7, 20) + SourceIndex(3)
5 >Emitted(53, 21) Source(7, 21) + SourceIndex(3)
6 >Emitted(53, 30) Source(7, 30) + SourceIndex(3)
7 >Emitted(53, 31) Source(7, 31) + SourceIndex(3)
8 >Emitted(53, 32) Source(7, 32) + SourceIndex(3)
---
>>>    }
1 >^^^^
2 >    ^
3 >     ^^^^->
1 >
  >    
2 >    }
1 >Emitted(54, 5) Source(8, 5) + SourceIndex(3)
2 >Emitted(54, 6) Source(8, 6) + SourceIndex(3)
---
>>>    f();
1->^^^^
2 >    ^
3 >     ^^
4 >       ^
5 >        ^^^^^^^^^^^->
1->
  >
  >    
2 >    f
3 >     ()
4 >       ;
1->Emitted(55, 5) Source(10, 5) + SourceIndex(3)
2 >Emitted(55, 6) Source(10, 6) + SourceIndex(3)
3 >Emitted(55, 8) Source(10, 8) + SourceIndex(3)
4 >Emitted(55, 9) Source(10, 9) + SourceIndex(3)
---
>>>})(N || (N = {}));
1->
2 >^
3 > ^^
4 >   ^
5 >    ^^^^^
6 >         ^
7 >          ^^^^^^^^
8 >                  ^^^^^^^^^^^^^^^^^^^^->
1->
  >
2 >}
3 > 
4 >   N
5 >    
6 >         N
7 >           {
  >              function f() {
  >                  console.log('testing');
  >              }
  >          
  >              f();
  >          }
1->Emitted(56, 1) Source(11, 1) + SourceIndex(3)
2 >Emitted(56, 2) Source(11, 2) + SourceIndex(3)
3 >Emitted(56, 4) Source(5, 11) + SourceIndex(3)
4 >Emitted(56, 5) Source(5, 12) + SourceIndex(3)
5 >Emitted(56, 10) Source(5, 11) + SourceIndex(3)
6 >Emitted(56, 11) Source(5, 12) + SourceIndex(3)
7 >Emitted(56, 19) Source(11, 2) + SourceIndex(3)
---
>>>function secondsecond_part1Spread() {
1->
2 >^^^^^^^^^
3 >         ^^^^^^^^^^^^^^^^^^^^^^^^
1->
  >
  >
2 >function 
3 >         secondsecond_part1Spread
1->Emitted(57, 1) Source(13, 1) + SourceIndex(3)
2 >Emitted(57, 10) Source(13, 10) + SourceIndex(3)
3 >Emitted(57, 34) Source(13, 34) + SourceIndex(3)
---
>>>    var b = [];
1 >^^^^
2 >    ^^^^^^^^^^^
3 >               ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >(
2 >    ...b: number[]
1 >Emitted(58, 5) Source(13, 35) + SourceIndex(3)
2 >Emitted(58, 16) Source(13, 49) + SourceIndex(3)
---
>>>    for (var _i = 0; _i < arguments.length; _i++) {
1->^^^^^^^^^
2 >         ^^^^^^^^^^
3 >                   ^^
4 >                     ^^^^^^^^^^^^^^^^^^^^^
5 >                                          ^^
6 >                                            ^^^^
1->
2 >         ...b: number[]
3 >                   
4 >                     ...b: number[]
5 >                                          
6 >                                            ...b: number[]
1->Emitted(59, 10) Source(13, 35) + SourceIndex(3)
2 >Emitted(59, 20) Source(13, 49) + SourceIndex(3)
3 >Emitted(59, 22) Source(13, 35) + SourceIndex(3)
4 >Emitted(59, 43) Source(13, 49) + SourceIndex(3)
5 >Emitted(59, 45) Source(13, 35) + SourceIndex(3)
6 >Emitted(59, 49) Source(13, 49) + SourceIndex(3)
---
>>>        b[_i] = arguments[_i];
1 >^^^^^^^^
2 >        ^^^^^^^^^^^^^^^^^^^^^^
1 >
2 >        ...b: number[]
1 >Emitted(60, 9) Source(13, 35) + SourceIndex(3)
2 >Emitted(60, 31) Source(13, 49) + SourceIndex(3)
---
>>>    }
>>>}
1 >
2 >^
3 > ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >) { 
2 >}
1 >Emitted(62, 1) Source(13, 53) + SourceIndex(3)
2 >Emitted(62, 2) Source(13, 54) + SourceIndex(3)
---
>>>secondsecond_part1Spread.apply(void 0, __spread([10, 20, 30]));
1->
2 >^^^^^^^^^^^^^^^^^^^^^^^^
3 >                        ^^^^^^^^^^^^^^^^^^^^^^^^
4 >                                                ^
5 >                                                 ^^
6 >                                                   ^^
7 >                                                     ^^
8 >                                                       ^^
9 >                                                         ^^
10>                                                           ^
11>                                                            ^^^
1->
  >
2 >secondsecond_part1Spread
3 >                        (...
4 >                                                [
5 >                                                 10
6 >                                                   , 
7 >                                                     20
8 >                                                       , 
9 >                                                         30
10>                                                           ]
11>                                                            );
1->Emitted(63, 1) Source(14, 1) + SourceIndex(3)
2 >Emitted(63, 25) Source(14, 25) + SourceIndex(3)
3 >Emitted(63, 49) Source(14, 29) + SourceIndex(3)
4 >Emitted(63, 50) Source(14, 30) + SourceIndex(3)
5 >Emitted(63, 52) Source(14, 32) + SourceIndex(3)
6 >Emitted(63, 54) Source(14, 34) + SourceIndex(3)
7 >Emitted(63, 56) Source(14, 36) + SourceIndex(3)
8 >Emitted(63, 58) Source(14, 38) + SourceIndex(3)
9 >Emitted(63, 60) Source(14, 40) + SourceIndex(3)
10>Emitted(63, 61) Source(14, 41) + SourceIndex(3)
11>Emitted(63, 64) Source(14, 43) + SourceIndex(3)
---
-------------------------------------------------------------------
emittedFile:/src/third/thirdjs/output/third-output.js
sourceFile:../../../second/second_part2.ts
-------------------------------------------------------------------
>>>var C = (function () {
1 >
2 >^^^^^^^^^^^^^^^^^^^->
1 >
1 >Emitted(64, 1) Source(1, 1) + SourceIndex(4)
---
>>>    function C() {
1->^^^^
2 >    ^^->
1->
1->Emitted(65, 5) Source(1, 1) + SourceIndex(4)
---
>>>    }
1->^^^^
2 >    ^
3 >     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1->class C {
  >    doSomething() {
  >        console.log("something got done");
  >    }
  >
2 >    }
1->Emitted(66, 5) Source(5, 1) + SourceIndex(4)
2 >Emitted(66, 6) Source(5, 2) + SourceIndex(4)
---
>>>    C.prototype.doSomething = function () {
1->^^^^
2 >    ^^^^^^^^^^^^^^^^^^^^^^^
3 >                           ^^^
4 >                              ^^^^^^^^^^^^^->
1->
2 >    doSomething
3 >                           
1->Emitted(67, 5) Source(2, 5) + SourceIndex(4)
2 >Emitted(67, 28) Source(2, 16) + SourceIndex(4)
3 >Emitted(67, 31) Source(2, 5) + SourceIndex(4)
---
>>>        console.log("something got done");
1->^^^^^^^^
2 >        ^^^^^^^
3 >               ^
4 >                ^^^
5 >                   ^
6 >                    ^^^^^^^^^^^^^^^^^^^^
7 >                                        ^
8 >                                         ^
1->doSomething() {
  >        
2 >        console
3 >               .
4 >                log
5 >                   (
6 >                    "something got done"
7 >                                        )
8 >                                         ;
1->Emitted(68, 9) Source(3, 9) + SourceIndex(4)
2 >Emitted(68, 16) Source(3, 16) + SourceIndex(4)
3 >Emitted(68, 17) Source(3, 17) + SourceIndex(4)
4 >Emitted(68, 20) Source(3, 20) + SourceIndex(4)
5 >Emitted(68, 21) Source(3, 21) + SourceIndex(4)
6 >Emitted(68, 41) Source(3, 41) + SourceIndex(4)
7 >Emitted(68, 42) Source(3, 42) + SourceIndex(4)
8 >Emitted(68, 43) Source(3, 43) + SourceIndex(4)
---
>>>    };
1 >^^^^
2 >    ^
3 >     ^^^^^^^^^->
1 >
  >    
2 >    }
1 >Emitted(69, 5) Source(4, 5) + SourceIndex(4)
2 >Emitted(69, 6) Source(4, 6) + SourceIndex(4)
---
>>>    return C;
1->^^^^
2 >    ^^^^^^^^
1->
  >
2 >    }
1->Emitted(70, 5) Source(5, 1) + SourceIndex(4)
2 >Emitted(70, 13) Source(5, 2) + SourceIndex(4)
---
>>>}());
1 >
2 >^
3 > 
4 > ^^^^
5 >     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
2 >}
3 > 
4 > class C {
  >     doSomething() {
  >         console.log("something got done");
  >     }
  > }
1 >Emitted(71, 1) Source(5, 1) + SourceIndex(4)
2 >Emitted(71, 2) Source(5, 2) + SourceIndex(4)
3 >Emitted(71, 2) Source(1, 1) + SourceIndex(4)
4 >Emitted(71, 6) Source(5, 2) + SourceIndex(4)
---
-------------------------------------------------------------------
emittedFile:/src/third/thirdjs/output/third-output.js
sourceFile:../../third_part1.ts
-------------------------------------------------------------------
>>>//# sourceMappingURL=second-output.js.map
>>>var c = new C();
1->
2 >^^^^
3 >    ^
4 >     ^^^
5 >        ^^^^
6 >            ^
7 >             ^^
8 >               ^
9 >                ^->
1->
2 >var 
3 >    c
4 >      = 
5 >        new 
6 >            C
7 >             ()
8 >               ;
1->Emitted(73, 1) Source(1, 1) + SourceIndex(5)
2 >Emitted(73, 5) Source(1, 5) + SourceIndex(5)
3 >Emitted(73, 6) Source(1, 6) + SourceIndex(5)
4 >Emitted(73, 9) Source(1, 9) + SourceIndex(5)
5 >Emitted(73, 13) Source(1, 13) + SourceIndex(5)
6 >Emitted(73, 14) Source(1, 14) + SourceIndex(5)
7 >Emitted(73, 16) Source(1, 16) + SourceIndex(5)
8 >Emitted(73, 17) Source(1, 17) + SourceIndex(5)
---
>>>c.doSomething();
1->
2 >^
3 > ^
4 >  ^^^^^^^^^^^
5 >             ^^
6 >               ^
7 >                ^^^^^^^^^^^^^^^^^^^^^->
1->
  >
2 >c
3 > .
4 >  doSomething
5 >             ()
6 >               ;
1->Emitted(74, 1) Source(2, 1) + SourceIndex(5)
2 >Emitted(74, 2) Source(2, 2) + SourceIndex(5)
3 >Emitted(74, 3) Source(2, 3) + SourceIndex(5)
4 >Emitted(74, 14) Source(2, 14) + SourceIndex(5)
5 >Emitted(74, 16) Source(2, 16) + SourceIndex(5)
6 >Emitted(74, 17) Source(2, 17) + SourceIndex(5)
---
>>>function forthirdthird_part1Rest() {
1->
2 >^^^^^^^^^
3 >         ^^^^^^^^^^^^^^^^^^^^^^^
4 >                                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1->
  >
2 >function 
3 >         forthirdthird_part1Rest
1->Emitted(75, 1) Source(3, 1) + SourceIndex(5)
2 >Emitted(75, 10) Source(3, 10) + SourceIndex(5)
3 >Emitted(75, 33) Source(3, 33) + SourceIndex(5)
---
>>>    var _a = { a: 10, b: 30, yy: 30 }, b = _a.b, rest = __rest(_a, ["b"]);
1->^^^^
2 >    ^^^^
3 >        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
4 >                                     ^^
5 >                                       ^^^^^^^^
6 >                                               ^^
7 >                                                 ^^^^^^^^^^^^^^^^^^^^^^^^
8 >                                                                         ^
1->() {
  >
2 >    const 
3 >        { b, ...rest } = { a: 10, b: 30, yy: 30 }
4 >                                     
5 >                                       b
6 >                                               , 
7 >                                                 ...rest } = { a: 10, b: 30, yy: 30 }
8 >                                                                         ;
1->Emitted(76, 5) Source(4, 1) + SourceIndex(5)
2 >Emitted(76, 9) Source(4, 7) + SourceIndex(5)
3 >Emitted(76, 38) Source(4, 48) + SourceIndex(5)
4 >Emitted(76, 40) Source(4, 9) + SourceIndex(5)
5 >Emitted(76, 48) Source(4, 10) + SourceIndex(5)
6 >Emitted(76, 50) Source(4, 12) + SourceIndex(5)
7 >Emitted(76, 74) Source(4, 48) + SourceIndex(5)
8 >Emitted(76, 75) Source(4, 49) + SourceIndex(5)
---
>>>}
1 >
2 >^
3 > ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
  >
2 >}
1 >Emitted(77, 1) Source(5, 1) + SourceIndex(5)
2 >Emitted(77, 2) Source(5, 2) + SourceIndex(5)
---
>>>//# sourceMappingURL=third-output.js.map

