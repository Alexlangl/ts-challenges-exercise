/**
 * @author Alexlangl
 * @Date 2022-05-25 13:13
 * @overview 现StartsWith<T, U>,接收两个string类型参数,然后判断T是否以U开头,根据结果返回true或false
 * mplement StartsWith<T, U> which takes two exact string types and returns whether T starts with U
 * @example
 * type a = StartsWith<'abc', 'ac'> // expected to be false
 * @description
 *
 */
type StartsWith<T extends string, U extends string> = T extends `${U}${infer P}`
  ? true
  : false;
