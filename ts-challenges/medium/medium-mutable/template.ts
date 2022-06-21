/**
 * @author Alexlangl
 * @Date 2022-06-21 19:29
 * @overview Implement the generic Mutable<T> which makes all properties in T mutable (not readonly).
 * @description 实现一个通用的类型 Mutable<T>，使类型 T 的全部属性可变（非只读）。
 * @example
 * interface Todo {
    readonly title: string
    readonly description: string
    readonly completed: boolean
  }

  type MutableTodo = Mutable<Todo> // { title: string; description: string; completed: boolean; }
 */
type Mutable<T extends object> = {
  -readonly [P in keyof T]: T[P];
};
