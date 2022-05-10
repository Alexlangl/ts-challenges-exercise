/**
 * 取数组首值类型
 * 思路：
 * 提供了两种方法，第二种方法不讲述
 * 第一种方法使用了infer进行类型推断
 * 如果这个infer U存在的话，则数组第一个元素的类型就是U，否则never
 */
type First<T extends any[]> = T extends [infer U, ...any[]] ? U : never;
// type First<T extends any[]> = T extends [] ? never : T[0];
