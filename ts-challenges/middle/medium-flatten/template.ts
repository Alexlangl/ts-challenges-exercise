/**
 * @author Alexlangl
 * @Date 2022-05-12 21:24
 * @overview 实现一个flatten方法展平数组
 * In this challenge, you would need to write a type that takes an array and emitted the flatten array type.
 * @example type flatten = Flatten<[1, 2, [3, 4], [[[5]]]]> // [1, 2, 3, 4, 5]
 * @description
 * 思路：不断地判断数组的第一个元素是否是数组，如果是数组，就不断地将这个元素进行展平，直到不是数组。
 * 可以提供一种相对好理解写的写法，考虑再创造一个空的泛型数组作为接收结果的数组，本质上和上面的方法差不多。
 */

// type Flatten<T extends any[]> = T extends [infer U, ...infer V]
//   ? [...(U extends any[] ? Flatten<U> : [U]), ...Flatten<V>]
//   : T;
type Flatten<T extends any[], P extends any[] = []> = T extends [
  infer U,
  ...infer V
]
  ? U extends any[]
    ? [...P, ...Flatten<U>, ...Flatten<V>]
    : [...P, U, ...Flatten<V>]
  : [];
