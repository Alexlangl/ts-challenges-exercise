/**
 * @author Alexlangl
 * @Date 2022-06-21 19:09
 * @overview medium-requiredByKeys
 * @description 实现一个通用的RequiredByKeys<T, K>，它接收两个类型参数T和K。
 * K指定应设为必选的T的属性集。当没有提供K时，它就和普通的Required<T>一样使所有的属性成为必选的
 * @example 
 * interface User {
    name?: string
    age?: number
    address?: string
  }
  type UserRequiredName = RequiredByKeys<User, 'name'> // { name: string; age?: number; address?: string }
 */

type RequiredKeys<T, K extends keyof T = keyof T> = T & { [P in K]-?: T[P] };
type RequiredByKeys<T, K = keyof T> = MyIntersectionObject<
  RequiredKeys<T, K & keyof T>
>;
