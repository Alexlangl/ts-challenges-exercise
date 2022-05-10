/**
 * 思路：
 * 不使用readonly关键字，自己实现一个readonly
 * 通过[P in keyof T]遍历接口T的key
 * 然后加一个readonly修饰符 readonly [P in keyof T]
 * 取值： T[P]
 */

type MyReadonly<T> = {
  readonly [P in keyof T]: T[P];
};
