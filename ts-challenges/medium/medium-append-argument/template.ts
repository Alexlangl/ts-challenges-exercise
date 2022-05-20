/**
 * @author Alexlangl
 * @Date 2022-05-11 21:04
 * @overview 函数追加参数
 * For given function type Fn, and any type A (any in this context means we don't restrict the type,
 * and I don't have in mind any type 😉) create a generic type which will take Fn as the first argument,
 * A as the second, and will produce function type G which will be the same as Fn but with appended argument A as a last one.
 * @expamle type Fn = (a: number, b: string) => number
 * type Result = AppendArgument<Fn, boolean>
 *  期望是 (a: number, b: string, x: boolean) => number
 * @description 这是一个infer的使用的问题
 * 函数的参数推断类型T，结果推断类型R
 * 追加时使用spread运算符[...T, A]
 *
 */
type AppendArgument<Fn extends (...args: any[]) => any, A> = Fn extends (
  ...args: infer T
) => infer R
  ? (...args: [...T, A]) => R
  : never;
