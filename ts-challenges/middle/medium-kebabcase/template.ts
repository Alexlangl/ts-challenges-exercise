/**
 * @author Alexlangl
 * @Date 2022-05-14 18:59
 * @overview  FooBarBaz -> foo-bar-baz
 * @description
 *
 */
// 大写字母联合类弄
type UpCases = StringToUnion<'ABCDEFGHIJKLMNOPQRSTUVWXYZ'>;
// 大写字母转小写并在前面加一个-
type SplitCase<T extends string> = T extends `${infer Frist}${infer Reset}`
  ? Frist extends UpCases
    ? `-${Lowercase<Frist>}${SplitCase<Reset>}`
    : `${Frist}${SplitCase<Reset>}`
  : T;
// 考虑第一个字母为大写的情况，将第一个-去除，同时考虑字符串本身就是-的情况，如果字符串本身就是-，则不对SplitCase返回的结果作任何处理
type FirstDel<T extends string, P extends string> = T extends `-${string}`
  ? P
  : P extends `-${infer R}`
  ? R
  : P;

type KebabCase<T extends string> = FirstDel<T, SplitCase<T>>;
