/**
 * @author Alexlangl
 * @Date 2022-06-21 19:34
 * @overview From T, pick a set of properties whose type are not assignable to U.
 * @description 根据类型做omit
 * @example
 * type OmitBoolean = OmitByType<{
    name: string
    count: number
    isReadonly: boolean
    isEnable: boolean
  }, boolean> // { name: string; count: number }
 */

type OmitByType<T extends object, U> = {
  [P in keyof T as T[P] extends U ? never : P]: T[P];
};
