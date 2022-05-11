/**
 * @author Alexlangl
 * @Date 2022-05-11 20:51
 * @overview 实现replace
 * mplement Replace<S, From, To> which replace the string From with To once in the given string S
 * @description 一个模板字符串的问题，考虑到From有''的情况，如果From是''，那么就直接返回S
 *
 */
type Replace<
  S extends string,
  From extends string,
  To extends string
> = From extends ''
  ? S
  : S extends `${infer L}${From}${infer R}`
  ? `${L}${To}${R}`
  : S;
