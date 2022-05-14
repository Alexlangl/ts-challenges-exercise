/**
 * @author Alexlangl
 * @Date 2022-05-14 18:34
 * @overview 将接收到的string类型转换为一个union类型
 * @example
 * type Test = '123';
 * type Result = StringToUnion<Test>; // expected to be "1" | "2" | "3"
 * @description 运用infer 和模板字符串，从第一个字符起，一个一个地放到联合类型里
 *
 */

// type StringToUnion<T extends string> = T extends `${infer First}${infer Rest}`
//   ? First | StringToUnion<Rest>
//   : never;

// 考虑一个思路，用keyof object来实现？同样需要使用infer来推断,
// 并且，也同样需要使用递归来实现，相比于上面的方法，这个方法心智负担好象要更重一些
type StringToUnion<
  T extends string,
  P extends object = {}
> = T extends `${infer First}${infer Reset}`
  ? First extends ''
    ? keyof P
    : StringToUnion<Reset, P & { [key in First]: '占位' }>
  : keyof P;
