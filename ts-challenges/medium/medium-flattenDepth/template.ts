/**
 * @author Alexlangl
 * @Date 2022-06-24 20:46
 * @overview Recursively flatten array up to depth times.
 * @example type a = FlattenDepth<[1, 2, [3, 4], [[[5]]]], 2> // [1, 2, 3, 4, [5]]. flattern 2 times
 * @exaple type b = FlattenDepth<[1, 2, [3, 4], [[[5]]]]> // [1, 2, 3, 4, [[5]]]. Depth defaults to be 1
 * @description
 *  1. 使用数据的长度 length 来进行计数
 *  2. 参数递归过程中的叠加计数通过参数进行记录
 *
 */
type FlattenDepth<
  T extends any[],
  P = 1,
  U extends any[] = []
> = U['length'] extends P
  ? T
  : T extends [infer First, ...infer Rest]
  ? First extends any[]
    ? [...FlattenDepth<First, P, ['rest', ...U]>, ...FlattenDepth<Rest, P, U>]
    : [First, ...FlattenDepth<Rest, P, U>]
  : [];
