/**
 * @author Alexlangl
 * @Date 2022-05-11 20:39
 * @overview 去除字符串左右两边的空格
 * @description 同trimleft，模板字符串,先去右，再去左
 */
type WhiteSpace = ' ' | '\n' | '\t';
type TrimRight<S extends string> = S extends `${infer R}${WhiteSpace}`
  ? TrimRight<R>
  : S;
type Trim<S extends string> = TrimRight<TrimLeft<S>>;
