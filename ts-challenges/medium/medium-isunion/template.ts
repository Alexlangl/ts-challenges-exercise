/**
 * @author Alexlangl
 * @Date 2022-05-16 20:08
 * @overview 判断是否是联合类型
 * mplement a type IsUnion, which takes an input type T and returns whether T resolves to a union type.
 * @description 思路：如果T是联合类型，则会发生分配式，此时的T为联合类型的一个子类型，U为T
 *
 */
// type IsUnion<T, U = T> = T extends U ? ([U] extends [T] ? false : true) : false;
type IsUnion<T> = Permutation<T>['length'] extends 1 ? false : true;
