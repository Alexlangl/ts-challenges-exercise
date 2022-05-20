/**
 * @author Alexlangl
 * @Date 2022-05-10 21:31
 * @overview Implement a generic Pop<T> that takes an Array T and returns an Array without it's last element.
 * @description infer R代表除最后一个元素外的其它元素类型，与last相反
 *
 */
type Pop<T extends any[]> = T extends [...infer R, infer K] ? R : never;
