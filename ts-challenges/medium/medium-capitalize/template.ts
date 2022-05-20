/**
 * @author Alexlangl
 * @Date 2022-05-11 20:43
 * @overview 中等难度，首字母大写
 * Implement Capitalize<T> which converts the first letter of a string to uppercase and leave the rest as-is.
 * @description 还是一个模板字符串的使用的问题
 */
type MyCapitalize<S extends string> = S extends `${infer L}${infer R}`
  ? `${Uppercase<L>}${R}`
  : S;
