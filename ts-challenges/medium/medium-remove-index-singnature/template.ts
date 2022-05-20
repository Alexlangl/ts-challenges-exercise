/**
 * @author Alexlangl
 * @Date 2022-05-20 17:24
 * @overview 排除对象中的索引签名
 * Implement RemoveIndexSignature<T> , exclude the index signature from object types.
 * @description infer。。。。
 *
 */
type RemoveIndexSignature<T> = {
  [P in keyof T as P extends `${infer U}` ? U : never]: T[P];
};
