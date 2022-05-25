/**
 * @author Alexlangl
 * @Date 2022-05-25 11:59
 * @overview 返回正整数类型数字-1
 * Given a number (always positive) as a type. Your type should return the number decreased by one.
 * @example type Zero = MinusOne<1> // 0
 * @description 我是fw。。。。过不去了
 *
 */
type ArrayTuple<T extends number, P extends any[] = []> = P['length'] extends T
  ? P
  : ArrayTuple<T, [1, ...P]>;

type MinusOne<
  T extends number,
  P extends number[] = ArrayTuple<T>
> = P extends [infer L, ...infer R] ? R['length'] : 0;
