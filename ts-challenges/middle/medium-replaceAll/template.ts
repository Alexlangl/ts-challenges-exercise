/**
 * @author Alexlangl
 * @Date 2022-05-11 20:56
 * @overview 实现一个replaceAll
 * Implement ReplaceAll<S, From, To> which replace the all the substring From with To in the given string S
 * @exapmle type replaced = ReplaceAll<'t y p e s', ' ', ''> // expected to be 'types'
 * @description 相比Replace 多了一个递归的过程
 *
 */
type ReplaceAll<
  S extends string,
  From extends string,
  To extends string
> = From extends ''
  ? S
  : S extends `${infer L}${From}${infer R}`
  ? `${L}${To}${ReplaceAll<R, From, To>}`
  : S;
