/**
 * @author Alexlangl
 * @Date 2022-05-25 13:18
 * @overview 实现EndsWith<T, U>,接收两个string类型参数,然后判断T是否以U结尾,根据结果返回true或false
 * Implement EndsWith<T, U> which takes two exact string types and returns whether T ends with U
 * @example type a = EndsWith<'abc', 'bc'> // expected to be false
 * @description
 *
 */
type EndsWith<T extends string, U extends string> = T extends `${infer P}${U}`
  ? true
  : false;
