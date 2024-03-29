'use strict';

var List = require("rescript/lib/js/list.js");
var $$Array = require("rescript/lib/js/array.js");
var Curry = require("rescript/lib/js/curry.js");
var Js_promise = require("rescript/lib/js/js_promise.js");
var Js_undefined = require("rescript/lib/js/js_undefined.js");

function mapMod(f, param) {
  if (param.NAME === "Just") {
    return {
            NAME: "Just",
            VAL: Curry._1(f, param.VAL)
          };
  } else {
    return {
            NAME: "Not",
            VAL: Curry._1(f, param.VAL)
          };
  }
}

var objectContaining = (function (properties) {
      var spec = {};
      properties.forEach(function (property) {
        spec[property] = expect.anything();
      });
      return spec;
    });

function affirm(message) {
  if (typeof message === "number") {
    return ;
  }
  switch (message.TAG | 0) {
    case /* Fail */0 :
        fail(message._0);
        return ;
    case /* ArrayContains */1 :
        var match = message._0;
        if (match.NAME === "Just") {
          var match$1 = match.VAL;
          return expect(match$1[0]).toContain(match$1[1]);
        }
        var match$2 = match.VAL;
        return expect(match$2[0]).not.toContain(match$2[1]);
    case /* ArrayLength */2 :
        var match$3 = message._0;
        if (match$3.NAME === "Just") {
          var match$4 = match$3.VAL;
          return expect(match$4[0]).toHaveLength(match$4[1]);
        }
        var match$5 = match$3.VAL;
        return expect(match$5[0]).not.toHaveLength(match$5[1]);
    case /* ArraySuperset */3 :
        var match$6 = message._0;
        if (match$6.NAME === "Just") {
          var match$7 = match$6.VAL;
          return expect(match$7[0]).toEqual(expect.arrayContaining(match$7[1]));
        }
        var match$8 = match$6.VAL;
        return expect(match$8[0]).not.toEqual(expect.arrayContaining(match$8[1]));
    case /* Be */4 :
        var match$9 = message._0;
        if (match$9.NAME === "Just") {
          var match$10 = match$9.VAL;
          return expect(match$10[0]).toBe(match$10[1]);
        }
        var match$11 = match$9.VAL;
        return expect(match$11[0]).not.toBe(match$11[1]);
    case /* Equal */5 :
        var match$12 = message._0;
        if (match$12.NAME === "Just") {
          var match$13 = match$12.VAL;
          return expect(match$13[0]).toEqual(match$13[1]);
        }
        var match$14 = match$12.VAL;
        return expect(match$14[0]).not.toEqual(match$14[1]);
    case /* FloatCloseTo */6 :
        var match$15 = message._0;
        if (match$15.NAME === "Just") {
          var match$16 = match$15.VAL;
          return expect(match$16[0]).toBeCloseTo(match$16[1], Js_undefined.fromOption(match$16[2]));
        }
        var match$17 = match$15.VAL;
        return expect(match$17[0]).not.toBeCloseTo(match$17[1], Js_undefined.fromOption(match$17[2]));
    case /* GreaterThan */7 :
        var match$18 = message._0;
        if (match$18.NAME === "Just") {
          var match$19 = match$18.VAL;
          return expect(match$19[0]).toBeGreaterThan(match$19[1]);
        }
        var match$20 = match$18.VAL;
        return expect(match$20[0]).not.toBeGreaterThan(match$20[1]);
    case /* GreaterThanOrEqual */8 :
        var match$21 = message._0;
        if (match$21.NAME === "Just") {
          var match$22 = match$21.VAL;
          return expect(match$22[0]).toBeGreaterThanOrEqual(match$22[1]);
        }
        var match$23 = match$21.VAL;
        return expect(match$23[0]).not.toBeGreaterThanOrEqual(match$23[1]);
    case /* LessThan */9 :
        var match$24 = message._0;
        if (match$24.NAME === "Just") {
          var match$25 = match$24.VAL;
          return expect(match$25[0]).toBeLessThan(match$25[1]);
        }
        var match$26 = match$24.VAL;
        return expect(match$26[0]).not.toBeLessThan(match$26[1]);
    case /* LessThanOrEqual */10 :
        var match$27 = message._0;
        if (match$27.NAME === "Just") {
          var match$28 = match$27.VAL;
          return expect(match$28[0]).toBeLessThanOrEqual(match$28[1]);
        }
        var match$29 = match$27.VAL;
        return expect(match$29[0]).not.toBeLessThanOrEqual(match$29[1]);
    case /* StringContains */11 :
        var match$30 = message._0;
        if (match$30.NAME === "Just") {
          var match$31 = match$30.VAL;
          return expect(match$31[0]).toEqual(expect.stringContaining(match$31[1]));
        }
        var match$32 = match$30.VAL;
        return expect(match$32[0]).not.toEqual(expect.stringContaining(match$32[1]));
    case /* StringMatch */12 :
        var match$33 = message._0;
        if (match$33.NAME === "Just") {
          var match$34 = match$33.VAL;
          return expect(match$34[0]).toMatch(match$34[1]);
        }
        var match$35 = match$33.VAL;
        return expect(match$35[0]).not.toMatch(match$35[1]);
    case /* Throws */13 :
        var match$36 = message._0;
        if (match$36.NAME === "Just") {
          return expect(match$36.VAL).toThrow();
        } else {
          return expect(match$36.VAL).not.toThrow();
        }
    case /* ThrowsException */14 :
        var match$37 = message._0;
        if (match$37.NAME === "Just") {
          var match$38 = match$37.VAL;
          return expect(match$38[0]).toThrow(String(match$38[1]));
        }
        var match$39 = match$37.VAL;
        return expect(match$39[0]).not.toThrow(String(match$39[1]));
    case /* ThrowsMessage */15 :
        var match$40 = message._0;
        if (match$40.NAME === "Just") {
          var match$41 = match$40.VAL;
          return expect(match$41[0]).toThrow(match$41[1]);
        }
        var match$42 = match$40.VAL;
        return expect(match$42[0]).not.toThrow(match$42[1]);
    case /* ThrowsMessageRe */16 :
        var match$43 = message._0;
        if (match$43.NAME === "Just") {
          var match$44 = match$43.VAL;
          return expect(match$44[0]).toThrow(match$44[1]);
        }
        var match$45 = match$43.VAL;
        return expect(match$45[0]).not.toThrow(match$45[1]);
    case /* MatchSnapshot */17 :
        return expect(message._0).toMatchSnapshot();
    case /* MatchSnapshotName */18 :
        return expect(message._0).toMatchSnapshot(message._1);
    case /* ThrowsMatchSnapshot */19 :
        return expect(message._0).toThrowErrorMatchingSnapshot();
    case /* Defined */20 :
        var match$46 = message._0;
        if (match$46.NAME === "Just") {
          return expect(match$46.VAL).toBeDefined();
        } else {
          return expect(match$46.VAL).not.toBeDefined();
        }
    case /* Falsy */21 :
        var match$47 = message._0;
        if (match$47.NAME === "Just") {
          return expect(match$47.VAL).toBeFalsy();
        } else {
          return expect(match$47.VAL).not.toBeFalsy();
        }
    case /* Null */22 :
        var match$48 = message._0;
        if (match$48.NAME === "Just") {
          return expect(match$48.VAL).toBeNull();
        } else {
          return expect(match$48.VAL).not.toBeNull();
        }
    case /* Truthy */23 :
        var match$49 = message._0;
        if (match$49.NAME === "Just") {
          return expect(match$49.VAL).toBeTruthy();
        } else {
          return expect(match$49.VAL).not.toBeTruthy();
        }
    case /* Undefined */24 :
        var match$50 = message._0;
        if (match$50.NAME === "Just") {
          return expect(match$50.VAL).toBeUndefined();
        } else {
          return expect(match$50.VAL).not.toBeUndefined();
        }
    case /* ObjectContains */25 :
        var match$51 = message._0;
        if (match$51.NAME === "Just") {
          var match$52 = match$51.VAL;
          return expect(match$52[0]).toEqual(objectContaining(match$52[1]));
        }
        var match$53 = match$51.VAL;
        return expect(match$53[0]).not.toEqual(objectContaining(match$53[1]));
    case /* ObjectMatch */26 :
        var match$54 = message._0;
        if (match$54.NAME === "Just") {
          var match$55 = match$54.VAL;
          return expect(match$55[0]).toMatchObject(match$55[1]);
        }
        var match$56 = match$54.VAL;
        return expect(match$56[0]).not.toMatchObject(match$56[1]);
    
  }
}

function test$1(name, callback) {
  test(name, (function () {
          affirm(Curry._1(callback, undefined));
        }));
}

function testAsync(name, timeout, callback) {
  test(name, (function (finish) {
          Curry._1(callback, (function ($$case) {
                  affirm($$case);
                  finish();
                }));
        }), Js_undefined.fromOption(timeout));
}

function testPromise(name, timeout, callback) {
  test(name, (function () {
          return Js_promise.then_((function (a) {
                        return Promise.resolve(affirm(a));
                      }), Curry._1(callback, undefined));
        }), Js_undefined.fromOption(timeout));
}

function testAll(name, inputs, callback) {
  List.iter((function (input) {
          var name$1 = "" + name + " - " + input;
          test(name$1, (function () {
                  affirm(Curry._1(callback, input));
                }));
        }), inputs);
}

function describe$1(label, f) {
  describe(label, (function () {
          Curry._1(f, undefined);
        }));
}

function beforeAllAsync(timeout, callback) {
  beforeAll((function (finish) {
          Curry._1(callback, (function (param) {
                  finish();
                }));
        }), Js_undefined.fromOption(timeout));
}

function beforeAllPromise(timeout, callback) {
  beforeAll((function () {
          return Promise.resolve(Curry._1(callback, undefined));
        }), Js_undefined.fromOption(timeout));
}

function beforeEachAsync(timeout, callback) {
  beforeEach((function (finish) {
          Curry._1(callback, (function (param) {
                  finish();
                }));
        }), Js_undefined.fromOption(timeout));
}

function beforeEachPromise(timeout, callback) {
  beforeEach((function () {
          return Promise.resolve(Curry._1(callback, undefined));
        }), Js_undefined.fromOption(timeout));
}

function afterAllAsync(timeout, callback) {
  afterAll((function (finish) {
          Curry._1(callback, (function (param) {
                  finish();
                }));
        }), Js_undefined.fromOption(timeout));
}

function afterAllPromise(timeout, callback) {
  afterAll((function () {
          return Promise.resolve(Curry._1(callback, undefined));
        }), Js_undefined.fromOption(timeout));
}

function afterEachAsync(timeout, callback) {
  afterEach((function (finish) {
          Curry._1(callback, (function (param) {
                  finish();
                }));
        }), Js_undefined.fromOption(timeout));
}

function afterEachPromise(timeout, callback) {
  afterEach((function () {
          return Promise.resolve(Curry._1(callback, undefined));
        }), Js_undefined.fromOption(timeout));
}

function test$2(name, callback) {
  it.only(name, (function () {
          affirm(Curry._1(callback, undefined));
        }));
}

function testAsync$1(name, timeout, callback) {
  it.only(name, (function (finish) {
          Curry._1(callback, (function (assertion) {
                  affirm(assertion);
                  finish();
                }));
        }), Js_undefined.fromOption(timeout));
}

function testPromise$1(name, timeout, callback) {
  it.only(name, (function () {
          return Js_promise.then_((function (a) {
                        return Promise.resolve(affirm(a));
                      }), Curry._1(callback, undefined));
        }), Js_undefined.fromOption(timeout));
}

function testAll$1(name, inputs, callback) {
  List.iter((function (input) {
          var name$1 = "" + name + " - " + input;
          it.only(name$1, (function () {
                  affirm(Curry._1(callback, input));
                }));
        }), inputs);
}

function describe$2(label, f) {
  describe.only(label, (function () {
          Curry._1(f, undefined);
        }));
}

var Only = {
  test: test$2,
  testAsync: testAsync$1,
  testPromise: testPromise$1,
  testAll: testAll$1,
  describe: describe$2
};

function testAsync$2(name, param, callback) {
  it.skip(name, callback);
}

function testPromise$2(name, param, callback) {
  it.skip(name, (function () {
          return Curry._1(callback, undefined);
        }));
}

function testAll$2(name, inputs, callback) {
  List.iter((function (input) {
          var name$1 = "" + name + " - " + input;
          it.skip(name$1, (function () {
                  return Curry._1(callback, input);
                }));
        }), inputs);
}

function describe$3(label, f) {
  describe.skip(label, (function () {
          Curry._1(f, undefined);
        }));
}

function fail$1(message) {
  return {
          TAG: /* Fail */0,
          _0: message
        };
}

function expect$1(a) {
  return {
          NAME: "Just",
          VAL: a
        };
}

function expectFn(f, a) {
  return {
          NAME: "Just",
          VAL: (function (param) {
              return Curry._1(f, a);
            })
        };
}

function toBe(b, p) {
  return {
          TAG: /* Be */4,
          _0: mapMod((function (a) {
                  return [
                          a,
                          b
                        ];
                }), p)
        };
}

function toBeCloseTo(b, p) {
  return {
          TAG: /* FloatCloseTo */6,
          _0: mapMod((function (a) {
                  return [
                          a,
                          b,
                          undefined
                        ];
                }), p)
        };
}

function toBeSoCloseTo(b, digits, p) {
  return {
          TAG: /* FloatCloseTo */6,
          _0: mapMod((function (a) {
                  return [
                          a,
                          b,
                          digits
                        ];
                }), p)
        };
}

function toBeGreaterThan(b, p) {
  return {
          TAG: /* GreaterThan */7,
          _0: mapMod((function (a) {
                  return [
                          a,
                          b
                        ];
                }), p)
        };
}

function toBeGreaterThanOrEqual(b, p) {
  return {
          TAG: /* GreaterThanOrEqual */8,
          _0: mapMod((function (a) {
                  return [
                          a,
                          b
                        ];
                }), p)
        };
}

function toBeLessThan(b, p) {
  return {
          TAG: /* LessThan */9,
          _0: mapMod((function (a) {
                  return [
                          a,
                          b
                        ];
                }), p)
        };
}

function toBeLessThanOrEqual(b, p) {
  return {
          TAG: /* LessThanOrEqual */10,
          _0: mapMod((function (a) {
                  return [
                          a,
                          b
                        ];
                }), p)
        };
}

function toBeSupersetOf(b, p) {
  return {
          TAG: /* ArraySuperset */3,
          _0: mapMod((function (a) {
                  return [
                          a,
                          b
                        ];
                }), p)
        };
}

function toContain(b, p) {
  return {
          TAG: /* ArrayContains */1,
          _0: mapMod((function (a) {
                  return [
                          a,
                          b
                        ];
                }), p)
        };
}

function toContainString(b, p) {
  return {
          TAG: /* StringContains */11,
          _0: mapMod((function (a) {
                  return [
                          a,
                          b
                        ];
                }), p)
        };
}

function toEqual(b, p) {
  return {
          TAG: /* Equal */5,
          _0: mapMod((function (a) {
                  return [
                          a,
                          b
                        ];
                }), p)
        };
}

function toHaveLength(l, p) {
  return {
          TAG: /* ArrayLength */2,
          _0: mapMod((function (a) {
                  return [
                          a,
                          l
                        ];
                }), p)
        };
}

function toMatch(s, p) {
  return {
          TAG: /* StringMatch */12,
          _0: mapMod((function (a) {
                  return [
                          a,
                          new RegExp(s)
                        ];
                }), p)
        };
}

function toMatchRe(re, p) {
  return {
          TAG: /* StringMatch */12,
          _0: mapMod((function (a) {
                  return [
                          a,
                          re
                        ];
                }), p)
        };
}

function toMatchSnapshot(param) {
  return {
          TAG: /* MatchSnapshot */17,
          _0: param.VAL
        };
}

function toMatchSnapshotWithName(name, param) {
  return {
          TAG: /* MatchSnapshotName */18,
          _0: param.VAL,
          _1: name
        };
}

function toThrow(f) {
  return {
          TAG: /* Throws */13,
          _0: f
        };
}

function toThrowErrorMatchingSnapshot(param) {
  return {
          TAG: /* ThrowsMatchSnapshot */19,
          _0: param.VAL
        };
}

function toThrowException(e, p) {
  return {
          TAG: /* ThrowsException */14,
          _0: mapMod((function (f) {
                  return [
                          f,
                          e
                        ];
                }), p)
        };
}

function toThrowMessage(message, p) {
  return {
          TAG: /* ThrowsMessage */15,
          _0: mapMod((function (f) {
                  return [
                          f,
                          message
                        ];
                }), p)
        };
}

function toThrowMessageRe(re, p) {
  return {
          TAG: /* ThrowsMessageRe */16,
          _0: mapMod((function (f) {
                  return [
                          f,
                          re
                        ];
                }), p)
        };
}

function not_(param) {
  return {
          NAME: "Not",
          VAL: param.VAL
        };
}

function $eq$eq(a, b) {
  return toBe(b, a);
}

function $great(a, b) {
  return toBeGreaterThan(b, a);
}

function $great$eq(a, b) {
  return toBeGreaterThanOrEqual(b, a);
}

function $less(a, b) {
  return toBeLessThan(b, a);
}

function $less$eq(a, b) {
  return toBeLessThanOrEqual(b, a);
}

function $eq(a, b) {
  return toEqual(b, a);
}

function $less$great(a, b) {
  return toEqual(b, not_(a));
}

function $bang$eq(a, b) {
  return toBe(b, not_(a));
}

var Operators = {
  $eq$eq: $eq$eq,
  $great: $great,
  $great$eq: $great$eq,
  $less: $less,
  $less$eq: $less$eq,
  $eq: $eq,
  $less$great: $less$great,
  $bang$eq: $bang$eq
};

var Expect = {
  expect: expect$1,
  expectFn: expectFn,
  toBe: toBe,
  toBeCloseTo: toBeCloseTo,
  toBeSoCloseTo: toBeSoCloseTo,
  toBeGreaterThan: toBeGreaterThan,
  toBeGreaterThanOrEqual: toBeGreaterThanOrEqual,
  toBeLessThan: toBeLessThan,
  toBeLessThanOrEqual: toBeLessThanOrEqual,
  toBeSupersetOf: toBeSupersetOf,
  toContain: toContain,
  toContainString: toContainString,
  toEqual: toEqual,
  toHaveLength: toHaveLength,
  toMatch: toMatch,
  toMatchRe: toMatchRe,
  toMatchSnapshot: toMatchSnapshot,
  toMatchSnapshotWithName: toMatchSnapshotWithName,
  toThrow: toThrow,
  toThrowErrorMatchingSnapshot: toThrowErrorMatchingSnapshot,
  toThrowException: toThrowException,
  toThrowMessage: toThrowMessage,
  toThrowMessageRe: toThrowMessageRe,
  not_: not_,
  not__: not_,
  Operators: Operators
};

function toBeDefined(a) {
  return {
          TAG: /* Defined */20,
          _0: a
        };
}

function toBeFalsy(a) {
  return {
          TAG: /* Falsy */21,
          _0: a
        };
}

function toBeNull(a) {
  return {
          TAG: /* Null */22,
          _0: a
        };
}

function toBeTruthy(a) {
  return {
          TAG: /* Truthy */23,
          _0: a
        };
}

function toBeUndefined(a) {
  return {
          TAG: /* Undefined */24,
          _0: a
        };
}

function toContainProperties(props, p) {
  return {
          TAG: /* ObjectContains */25,
          _0: mapMod((function (a) {
                  return [
                          a,
                          props
                        ];
                }), p)
        };
}

function toMatchObject(b, p) {
  return {
          TAG: /* ObjectMatch */26,
          _0: mapMod((function (a) {
                  return [
                          a,
                          b
                        ];
                }), p)
        };
}

var ExpectJs = {
  expect: expect$1,
  expectFn: expectFn,
  toBe: toBe,
  toBeCloseTo: toBeCloseTo,
  toBeSoCloseTo: toBeSoCloseTo,
  toBeGreaterThan: toBeGreaterThan,
  toBeGreaterThanOrEqual: toBeGreaterThanOrEqual,
  toBeLessThan: toBeLessThan,
  toBeLessThanOrEqual: toBeLessThanOrEqual,
  toBeSupersetOf: toBeSupersetOf,
  toContain: toContain,
  toContainString: toContainString,
  toEqual: toEqual,
  toHaveLength: toHaveLength,
  toMatch: toMatch,
  toMatchRe: toMatchRe,
  toMatchSnapshot: toMatchSnapshot,
  toMatchSnapshotWithName: toMatchSnapshotWithName,
  toThrow: toThrow,
  toThrowErrorMatchingSnapshot: toThrowErrorMatchingSnapshot,
  toThrowException: toThrowException,
  toThrowMessage: toThrowMessage,
  toThrowMessageRe: toThrowMessageRe,
  not_: not_,
  not__: not_,
  Operators: Operators,
  toBeDefined: toBeDefined,
  toBeFalsy: toBeFalsy,
  toBeNull: toBeNull,
  toBeTruthy: toBeTruthy,
  toBeUndefined: toBeUndefined,
  toContainProperties: toContainProperties,
  toMatchObject: toMatchObject
};

function makeNewMock(self) {
      return new (Function.prototype.bind.apply(self, arguments));
    }
;

function new0(prim) {
  return makeNewMock(prim);
}

function new1(a, self) {
  return makeNewMock(self, a);
}

function new2(a, b, self) {
  return makeNewMock(self, a, b);
}

function calls(self) {
  return $$Array.map((function (args) { return args.length === 1 ? args[0] : args }), self.mock.calls.slice());
}

function instances(self) {
  return self.mock.instances.slice();
}

function mockImplementation(arg1, obj) {
  return obj.mockImplementation(arg1);
}

function mockImplementationOnce(arg1, obj) {
  return obj.mockImplementationOnce(arg1);
}

function mockReturnValue(arg1, obj) {
  return obj.mockReturnValue(arg1);
}

function mockReturnValueOnce(arg1, obj) {
  return obj.mockReturnValueOnce(arg1);
}

var Jest = {};

var JestJs = {};

function Runner(funarg) {
  var affirm = funarg.affirm;
  var test$3 = function (name, callback) {
    test(name, (function () {
            Curry._1(affirm, Curry._1(callback, undefined));
          }));
  };
  var testAsync = function (name, timeout, callback) {
    test(name, (function (finish) {
            Curry._1(callback, (function ($$case) {
                    Curry._1(affirm, $$case);
                    finish();
                  }));
          }), Js_undefined.fromOption(timeout));
  };
  var testPromise = function (name, timeout, callback) {
    test(name, (function () {
            return Js_promise.then_((function (a) {
                          return Promise.resolve(Curry._1(funarg.affirm, a));
                        }), Curry._1(callback, undefined));
          }), Js_undefined.fromOption(timeout));
  };
  var testAll = function (name, inputs, callback) {
    List.iter((function (input) {
            var name$1 = "" + name + " - " + input;
            test(name$1, (function () {
                    Curry._1(affirm, Curry._1(callback, input));
                  }));
          }), inputs);
  };
  var describe$4 = function (label, f) {
    describe(label, (function () {
            Curry._1(f, undefined);
          }));
  };
  var beforeAllAsync = function (timeout, callback) {
    beforeAll((function (finish) {
            Curry._1(callback, (function (param) {
                    finish();
                  }));
          }), Js_undefined.fromOption(timeout));
  };
  var beforeAllPromise = function (timeout, callback) {
    beforeAll((function () {
            return Promise.resolve(Curry._1(callback, undefined));
          }), Js_undefined.fromOption(timeout));
  };
  var beforeEachAsync = function (timeout, callback) {
    beforeEach((function (finish) {
            Curry._1(callback, (function (param) {
                    finish();
                  }));
          }), Js_undefined.fromOption(timeout));
  };
  var beforeEachPromise = function (timeout, callback) {
    beforeEach((function () {
            return Promise.resolve(Curry._1(callback, undefined));
          }), Js_undefined.fromOption(timeout));
  };
  var afterAllAsync = function (timeout, callback) {
    afterAll((function (finish) {
            Curry._1(callback, (function (param) {
                    finish();
                  }));
          }), Js_undefined.fromOption(timeout));
  };
  var afterAllPromise = function (timeout, callback) {
    afterAll((function () {
            return Promise.resolve(Curry._1(callback, undefined));
          }), Js_undefined.fromOption(timeout));
  };
  var afterEachAsync = function (timeout, callback) {
    afterEach((function (finish) {
            Curry._1(callback, (function (param) {
                    finish();
                  }));
          }), Js_undefined.fromOption(timeout));
  };
  var afterEachPromise = function (timeout, callback) {
    afterEach((function () {
            return Promise.resolve(Curry._1(callback, undefined));
          }), Js_undefined.fromOption(timeout));
  };
  var test$4 = function (name, callback) {
    it.only(name, (function () {
            Curry._1(affirm, Curry._1(callback, undefined));
          }));
  };
  var testAsync$1 = function (name, timeout, callback) {
    it.only(name, (function (finish) {
            Curry._1(callback, (function (assertion) {
                    Curry._1(affirm, assertion);
                    finish();
                  }));
          }), Js_undefined.fromOption(timeout));
  };
  var testPromise$1 = function (name, timeout, callback) {
    it.only(name, (function () {
            return Js_promise.then_((function (a) {
                          return Promise.resolve(Curry._1(affirm, a));
                        }), Curry._1(callback, undefined));
          }), Js_undefined.fromOption(timeout));
  };
  var testAll$1 = function (name, inputs, callback) {
    List.iter((function (input) {
            var name$1 = "" + name + " - " + input;
            it.only(name$1, (function () {
                    Curry._1(affirm, Curry._1(callback, input));
                  }));
          }), inputs);
  };
  var describe$5 = function (label, f) {
    describe.only(label, (function () {
            Curry._1(f, undefined);
          }));
  };
  var Only = {
    test: test$4,
    testAsync: testAsync$1,
    testPromise: testPromise$1,
    testAll: testAll$1,
    describe: describe$5
  };
  var testAsync$2 = function (name, param, callback) {
    it.skip(name, callback);
  };
  var testPromise$2 = function (name, param, callback) {
    it.skip(name, (function () {
            return Curry._1(callback, undefined);
          }));
  };
  var testAll$2 = function (name, inputs, callback) {
    List.iter((function (input) {
            var name$1 = "" + name + " - " + input;
            it.skip(name$1, (function () {
                    return Curry._1(callback, input);
                  }));
          }), inputs);
  };
  var describe$6 = function (label, f) {
    describe.skip(label, (function () {
            Curry._1(f, undefined);
          }));
  };
  return {
          test: test$3,
          testAsync: testAsync,
          testPromise: testPromise,
          testAll: testAll,
          describe: describe$4,
          beforeAllAsync: beforeAllAsync,
          beforeAllPromise: beforeAllPromise,
          beforeEachAsync: beforeEachAsync,
          beforeEachPromise: beforeEachPromise,
          afterAllAsync: afterAllAsync,
          afterAllPromise: afterAllPromise,
          afterEachAsync: afterEachAsync,
          afterEachPromise: afterEachPromise,
          Only: Only,
          Skip: {
            test: (function (prim0, prim1) {
                it.skip(prim0, (function () {
                        return Curry._1(prim1, undefined);
                      }));
              }),
            testAsync: testAsync$2,
            testPromise: testPromise$2,
            testAll: testAll$2,
            describe: describe$6
          }
        };
}

function Skip_test(prim0, prim1) {
  it.skip(prim0, (function () {
          return Curry._1(prim1, undefined);
        }));
}

var Skip = {
  test: Skip_test,
  testAsync: testAsync$2,
  testPromise: testPromise$2,
  testAll: testAll$2,
  describe: describe$3
};

var Todo = {
  test: (function (prim) {
      it.todo(prim);
    })
};

var pass = /* Ok */0;

function MockJs_mockClear(prim) {
  prim.mockClear();
}

function MockJs_mockReset(prim) {
  prim.mockReset();
}

function MockJs_mockReturnThis(prim) {
  prim.mockReturnThis();
}

var MockJs = {
  new0: new0,
  new1: new1,
  new2: new2,
  calls: calls,
  instances: instances,
  mockClear: MockJs_mockClear,
  mockReset: MockJs_mockReset,
  mockImplementation: mockImplementation,
  mockImplementationOnce: mockImplementationOnce,
  mockReturnThis: MockJs_mockReturnThis,
  mockReturnValue: mockReturnValue,
  mockReturnValueOnce: mockReturnValueOnce
};

exports.Runner = Runner;
exports.test = test$1;
exports.testAsync = testAsync;
exports.testPromise = testPromise;
exports.testAll = testAll;
exports.describe = describe$1;
exports.beforeAllAsync = beforeAllAsync;
exports.beforeAllPromise = beforeAllPromise;
exports.beforeEachAsync = beforeEachAsync;
exports.beforeEachPromise = beforeEachPromise;
exports.afterAllAsync = afterAllAsync;
exports.afterAllPromise = afterAllPromise;
exports.afterEachAsync = afterEachAsync;
exports.afterEachPromise = afterEachPromise;
exports.Only = Only;
exports.Skip = Skip;
exports.Todo = Todo;
exports.pass = pass;
exports.fail = fail$1;
exports.Expect = Expect;
exports.ExpectJs = ExpectJs;
exports.MockJs = MockJs;
exports.Jest = Jest;
exports.JestJs = JestJs;
/*  Not a pure module */
