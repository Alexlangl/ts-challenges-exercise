/**
 * @author Alexlangl
 * @Date 2022-05-16 19:49
 * @overview 接收一个数组，如果其中有一个元素为真返回true，则返回true，否则返回false，如果为空数组返回false
 * mplement Python liked any function in the type system. A type takes the Array and returns true if any element of the Array is true. If the Array is empty, return false.
 * @description 思路： 使用infer，作递归，写个union罗列为假的情况 / 直接判断T[number]
 *
 */
type FalseUnion = false | 0 | '' | [] | null | Record<any, never>;
// type AnyOf<T extends readonly any[]> = T extends [infer U, ...infer V]
//   ? U extends FalseUnion
//     ? AnyOf<V>
//     : true
//   : false;

type AnyOf<T extends readonly any[]> = T[number] extends FalseUnion
  ? false
  : true;
