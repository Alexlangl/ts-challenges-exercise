/**
 * @author Alexlangl
 * @Date 2022-06-21 19:51
 * @overview Implement the type version of Array.shift
 * @description
 * @example type Result = Shift<[3, 2, 1]> // [2, 1]
 */
type Shift<T> = T extends [infer P, ...infer K] ? K : never;
