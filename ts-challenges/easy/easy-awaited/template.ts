/**
 * 返回Promise的值的类型
 * 思路：
 * infer作类型推断
 * 如果推断出的类型依旧是一个promise，则继续使用infer进行推断(case中存在两层嵌套场景)
 */
type MyAwaited<T extends Promise<any>> = T extends Promise<infer U>
  ? U extends Promise<infer V>
    ? V
    : U
  : never;
