/**
 * @author Alexlangl
 * @Date 2022-05-12 21:04
 * @overview 计算字符串的长度
 * Compute the length of a string literal, which behaves like String#length.
 * @description
 * 思路：搞一个空数组T，不断地将字符串的第一个字符放进去，最后返回T的长度。
 */
type LengthOfString<
  S extends string,
  T extends any[] = []
> = S extends `${infer L}${infer R}`
  ? LengthOfString<R, [...T, L]>
  : T['length'];
