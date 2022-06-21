/**
 * @author Alexlangl
 * @Date 2022-06-21 19:44
 * @overview Implement the type version of Object.entries
 * @description 
 * @example
 * interface Model {
    name: string;
    age: number;
    locations: string[] | null;
  }
  type modelEntries = ObjectEntries<Model> // ['name', string] | ['age', number] | ['locations', string[] | null];
*/
type ObjectEntries<T, K extends keyof T = keyof T> = K extends keyof T
  ? [K, T[K] extends undefined ? undefined : Exclude<T[K], undefined>]
  : never;
