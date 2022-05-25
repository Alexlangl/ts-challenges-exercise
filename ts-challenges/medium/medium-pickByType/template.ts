/**
 * @author Alexlangl
 * @Date 2022-05-25 12:57
 * @overview 根据type过滤对象
 * From T, pick a set of properties whose type are assignable to U.
 * @example 
 * type OnlyBoolean = PickByType<{
      name: string
      count: number
      isReadonly: boolean
      isEnable: boolean
    }, boolean> // { isReadonly: boolean; isEnable: boolean; }
 * @description 
 *
 */
type PickByType<T, U> = {
  [P in keyof T as T[P] extends U ? P : never]: T[P];
};
