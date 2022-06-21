/**
 * @author Alexlangl
 * @Date 2022-06-21 19:54
 * @overview Given a tuple type T that only contains string type, and a type U, build an object recursively.
 * @description
 *
 */
type TupleToNestedObject<T, U> = T extends [infer First extends string ,...infer Rest]  
  ? ({[P in First] : TupleToNestedObject<Rest,U>}) 
  : U;
