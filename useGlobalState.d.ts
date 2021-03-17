import type { StatefulEvt } from "evt";
import type { UseNamedStateReturnType } from "./useNamedState";
export declare const globalStates: Readonly<Record<string, unknown>>;
declare const injectGlobalStatesInSearchParams: (url: string) => string;
export { injectGlobalStatesInSearchParams };
/**
 *
 * Assert: If localStorageKey is not disabled, T must be
 * serializable with JSON.stringify.
 *
 * const { useFoo } = createUseGlobalState2({
 *     "getDefaultState": ()=> 33,
 *     "name": "foo"
 * });
 *
 * const { foo, setFoo  } = useFoo();
 *
 * By default persistance is enabled using localStorage.
 *
 */
export declare function createUseGlobalState<T, Name extends string>(name: Name, 
/** If function called only if not in local storage */
initialState: T | (() => T), params?: {
    persistance?: false | "localStorage" | "cookie";
}): Record<`use${Capitalize<Name>}`, () => UseNamedStateReturnType<T, Name>> & Record<`evt${Capitalize<Name>}`, StatefulEvt<T>>;
