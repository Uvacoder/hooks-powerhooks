"use strict";
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
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCallbackFactory = void 0;
var react_1 = require("react");
var memoizee_1 = __importDefault(require("memoizee"));
var id_1 = require("evt/tools/typeSafety/id");
/**
 *  const callbackFactory= useCallbackFactory(
 *      ([key]: [string], [params]: [{ foo: number; }]) => {
 *          ...
 *      },
 *      []
 *  );
 *
 * WARNING: Factory args should not be of variable length.
 *
 */
function useCallbackFactory(callback) {
    var callbackRef = react_1.useRef(callback);
    callbackRef.current = callback;
    var memoizedRef = react_1.useRef(undefined);
    return react_1.useState(function () { return id_1.id(function () {
        var factoryArgs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            factoryArgs[_i] = arguments[_i];
        }
        if (memoizedRef.current === undefined) {
            memoizedRef.current = memoizee_1.default(function () {
                var factoryArgs = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    factoryArgs[_i] = arguments[_i];
                }
                return function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    return callbackRef.current(factoryArgs, args);
                };
            }, { "length": factoryArgs.length });
        }
        return memoizedRef.current.apply(memoizedRef, __spreadArray([], __read(factoryArgs)));
    }); })[0];
}
exports.useCallbackFactory = useCallbackFactory;
//# sourceMappingURL=useCallbackFactory.js.map