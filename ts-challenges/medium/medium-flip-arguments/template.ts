/**
 * @author Alexlangl
 * @Date 2022-06-24 08:05
 * @overview Implement the type version of lodash's _.flip.
 * Type FlipArguments<T> requires function type T and returns a new function type which has the same return type of T but reversed parameters.
 * @example
 * type Flipped = FlipArguments<(arg0: string, arg1: number, arg2: boolean) => void>
 * (arg0: boolean, arg1: number, arg2: string) => void
 * @description
 *
 */
type FlipArguments<T extends Function> = T extends (...args: infer P) => infer U
  ? (...args: Reverse<P>) => U
  : never;
