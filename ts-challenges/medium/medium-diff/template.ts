/**
 * @author Alexlangl
 * @Date 2022-05-16 19:40
 * @overview 获取两个接口的差值属性
 * Get an Object that is the difference between O & O1
 * @description 将两个对象的属性进行比较，返回两个对象的差异属性，然后遍历返回
 *
 */

// type Diff<O, O1> = MyIntersectionObject<
//   {
//     [P in Exclude<keyof O, keyof O1>]: O[P];
//   } & {
//     [P in Exclude<keyof O1, keyof O>]: O1[P];
//   }
// >;

// 提供另一种思路,本质上是一样的 ：
type Diff<
  O,
  O1,
  R = {
    [P in Exclude<keyof O, keyof O1>]: O[P];
  } & {
    [P in Exclude<keyof O1, keyof O>]: O1[P];
  }
> = {
  [P in keyof R]: R[P];
};
