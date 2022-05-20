/**
 * @author Alexlangl
 * @Date 2022-05-11 19:33
 * @overview 去除字符串左边的空格
 * @description 这题。。也很迷，为啥是medium，模板字符
 */
// type TrimLeft<S extends string> = S extends `${' ' | '\n' | '\t'}${infer R}`
//   ? TrimLeft<R>
//   : S;

type TrimLeft<S extends string> = S extends `${' ' | '\n' | '\t'}${infer R}`
  ? TrimLeft<R>
  : S;
