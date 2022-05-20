/**
 * @author Alexlangl
 * @Date 2022-05-20 17:08
 * @overview 替换联合类型中的键，无则跳过替换
 * Implement a type ReplaceKs, that replace keys in union types, if some type has not this key, just skip replacing, A type takes three arguments.
 * @description
 *
 */
type ReplaceKeys<U, T, Y> = {
  [K in keyof U]: K extends T ? (K extends keyof Y ? Y[K] : never) : U[K];
};
