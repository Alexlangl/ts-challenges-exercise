/**
 * @author Alexlangl
 * @Date 2022-05-16 20:00
 * @overview 判断T是不是never
 * @description 思路：never即是最小的集合,且只有never能赋给never
 * unknown and never are like inverses of each other. Everything is assignable to unknown, never is assignable to everything. Nothing is assignable to never, unknown is not assignable to anything (except any).
 */
type IsNever<T> = [T] extends [never] ? true : false;
