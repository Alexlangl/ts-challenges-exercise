/**
 * 思路：
 * 完成从数组到对象的映射转换
 * 首先，T需要是一个任意数组，T extends readonly (keyof any)[]
 * 为什么要加readonly 详情见const断言https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-4.html
 * 取数组的值我们需要： P in T[number]
 */
type TupleToObject<T extends readonly (keyof any)[]> = {
  [P in T[number]]: P;
};
