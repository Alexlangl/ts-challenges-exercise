/**
 * @author Alexlangl
 * @Date 2022-05-25 13:55
 * @overview 将对应的key设为可选项
 * 实现一个通用的PartialByKeys<T, K>，它接收两个类型参数T和K。
 * K指定应设置为可选的T的属性集。当没有提供K时，它就和普通的Partial<T>一样使所有属性都是可选的。
 * @example 
 * interface User {
      name: string
      age: number
      address: string
    }
    type UserPartialName = PartialByKeys<User, 'name'> // { name?:string; age:number; address:string }
 * @description Extract、Pick、Exclude
 */
type MyExtract<T, K> = T extends K ? T : never;
type MyPartial<T> = { [P in keyof T]?: T[P] };
type PartialByKeys<T, K = keyof T> = Merge<
  MyPick<MyPartial<T>, MyExtract<keyof T, K>>,
  MyPick<T, MyExclude<keyof T, K>>
>;
