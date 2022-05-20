type MyReadonly2<T, K = keyof T> = {
  // 非传入字段保持不变
  [P in keyof T as P extends K ? never : P]: T[P];
} & {
  readonly [P in keyof T as P extends K ? P : never]: T[P];
  // 传入字段readonly
};
