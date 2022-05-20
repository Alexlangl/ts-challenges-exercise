/**
 * @author Alexlangl
 * @Date 2022-05-10 21:29
 * @overview Implement a generic Last<T> that takes an Array T and returns its last element.
 * 取数组最后一个T并返回类型
 * @description infer推荐最后一个元素的类型，如无法推断则是never
 */

type Last<T extends any[]> = T extends [...any[], infer U] ? U : never;
