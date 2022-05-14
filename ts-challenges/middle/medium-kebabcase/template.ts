/**
 * @author Alexlangl
 * @Date 2022-05-14 18:59
 * @overview  FooBarBaz -> foo-bar-baz
 * @description
 *
 */
// // 大写字母联合类弄
// type UpCases = StringToUnion<'ABCDEFGHIJKLMNOPQRSTUVWXYZ'>;
// // 大写字母转小写并在前面加一个-
// type SplitCase<T extends string> = T extends `${infer Frist}${infer Reset}`
//   ? Frist extends UpCases
//     ? `-${Lowercase<Frist>}${SplitCase<Reset>}`
//     : `${Frist}${SplitCase<Reset>}`
//   : T;
// // 考虑第一个字母为大写的情况，将第一个-去除，同时考虑字符串本身就是-的情况，如果字符串本身就是-，则不对SplitCase返回的结果作任何处理
// type FirstDel<T extends string, P extends string> = T extends `-${string}`
//   ? P
//   : P extends `-${infer R}`
//   ? R
//   : P;

// type KebabCase<T extends string> = FirstDel<T, SplitCase<T>>;

// issues问答里找到的新鲜的答案，比上面的那个方法更合理更简单，使用了Uncapitalize
// 通过判断 R 是否与 R 的第一个字母转小后相同，来处理大小字母变小后前面加一个-的情况
// 成功避免了需要处理开头的第一个字母是大写的情况
// 同时，如果字符串只是-的时候，infer R不存在，直接返回了S
type KebabCase<S extends string> = S extends `${infer F}${infer R}`
  ? `${Lowercase<F>}${R extends Uncapitalize<R>
      ? KebabCase<R>
      : `-${KebabCase<R>}`}`
  : S;
