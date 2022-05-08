type First<T extends any[]> = T extends [infer U, ...any[]] ? U : never;
