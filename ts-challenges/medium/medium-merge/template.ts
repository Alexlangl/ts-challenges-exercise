/**
 * @author Alexlangl
 * @Date 2022-05-14 18:45
 * @overview 将两个类型合并成一个类型，第二个类型的键会覆盖第一个类型的键。
 * @description 先将两个对象&，然后再遍历就可以了，需要用到omit作一个剔除操作
 */

type MyIntersectionObject<T> = {
  [P in keyof T]: T[P];
};

type Merge<F, S> = MyIntersectionObject<Omit<F, keyof S> & S>;
