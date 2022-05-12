/**
 * @author Alexlangl
 * @Date 2022-05-12 21:38
 * @overview 实现一个可以为接口添加新字段的类型
 * Implement a type that adds a new field to the interface. The type takes the three arguments. The output should be an object with the new field.
 * @example
 * type Test = { id: '1' }
 * type Result = AppendToObject<Test, 'value', 4> // expected to be { id: '1', value: 4 }
 * @description
 * 思路：题目要求为接口添加新的字段类型，已知传入的会是一个新的对象，正常在业务上来讲，使用交叉类型就可以解决这个问题，于是似乎可以得到如注释一所示的代码
 * 但是，会发现这样会过不了测试，原因是因为这样我们所得到的只是一个交叉类型,它只是拥有了两个成员，而我们的最终目的要得到一个成员
 * 所以，我们需要将得到的这个交叉类型再merge为一个成员
 */
type AppendToObject<
  T,
  U extends string,
  V,
  K extends T = T & {
    [key in U]: V;
  }
> = {
  [P in keyof K]: K[P];
};

// 注释一
// type AppendToObject<T, U extends string, V> = {
//   [P in keyof T]: T[P];
// } & {
//   [key in U]: V;
// };
