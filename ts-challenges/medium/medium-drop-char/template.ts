/**
 * @author Alexlangl
 * @Date 2022-05-22 20:06
 * @overview 从字符串中删除指定字符
 * @example
 * type Butterfly = DropChar<' b u t t e r f l y ! ', ' '> // 'butterfly!'
 * @description
 *
 */
type DropChar<
  S extends string,
  C extends string
> = S extends `${infer F}${infer R}`
  ? F extends C
    ? `${DropChar<R, C>}`
    : `${F}${DropChar<R, C>}`
  : S;
