/**
 * 从联合类型T中排除U的类型成员，来构造一个新的类型。
 * 思路：
 * 如果T存在于U中，则返回never，否则返回T
 */
type MyExclude<T, U> = T extends U ? never : T;
