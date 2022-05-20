/**
 * @author Alexlangl
 * @Date 2022-05-12 21:58
 * @overview 实现一个absolute,可以接收string/number/bigint类型，输出一个正数的string
 * Implement the Absolute type. A type that take string, number or bigint. The output should be a positive number string
 * @example
 * type Test = -100;
 * type Result = Absolute<Test>; // expected to be "100"
 * @description
 *
 */

type Absolute<T extends number | string | bigint> = (
  T extends any ? `${T}` : never
) extends `-${infer P}`
  ? P
  : `${T}`;
