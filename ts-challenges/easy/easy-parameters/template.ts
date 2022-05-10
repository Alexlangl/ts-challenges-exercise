/**
 * infer直接推断参数类型，不作解释
 */
type MyParameters<T extends (...args: any[]) => any> = T extends (
  ...args: infer U
) => any
  ? U
  : never;
