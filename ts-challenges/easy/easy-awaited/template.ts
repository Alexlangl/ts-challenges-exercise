type MyAwaited<T extends Promise<any>> = T extends Promise<infer U>
  ? U extends Promise<infer V>
    ? V
    : U
  : never;
