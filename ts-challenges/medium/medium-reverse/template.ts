/**
 * @author Alexlangl
 * @Date 2022-06-24 07:56
 * @overview Implement the type version of Array.reverse
 * @example type a = Reverse<['a', 'b']> // ['b', 'a']
 * @description infer的简单使用
 *
 */
type Reverse<T extends any[]> = T extends [infer P, ...infer U]
  ? [...Reverse<U>, P]
  : [];
