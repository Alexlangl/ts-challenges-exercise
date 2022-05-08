type Intersection<T, U> = (<P>() => P extends T ? true : false) extends <
  P
>() => P extends U ? true : false
  ? true
  : false;

type Includes<T extends readonly any[], U> = T extends [infer P, ...infer K]
  ? Intersection<P, U> extends true
    ? true
    : Includes<K, U>
  : false;
