/**
 * @author Alexlangl
 * @Date 2022-05-11 21:13
 * @overview 联合类型全排列为数组的联合类型
 * Implement permutation type that transforms union types into the array that includes permutations of unions.
 * @example type perm = Permutation<'A' | 'B' | 'C'>; // ['A', 'B', 'C'] | ['A', 'C', 'B'] | ['B', 'A', 'C'] | ['B', 'C', 'A'] | ['C', 'A', 'B'] | ['C', 'B', 'A']
 * @description
 *
 */
type Permutation<T, P = T> = [T] extends [never]
  ? []
  : T extends P
  ? [T, ...Permutation<MyExclude<P, T>>]
  : [];
