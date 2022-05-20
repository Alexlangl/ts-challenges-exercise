/**
 * @author Alexlangl
 * @Date 2022-05-11 19:28
 * @overview n this challenge, we would like to get the corresponding type by searching for the common type field in the union Cat | Dog.
 * In other words, we will expect to get Dog for LookUp<Dog | Cat, 'dog'> and Cat for LookUp<Dog | Cat, 'cat'> in the following example.
 * @description 有点没搞明白。。为啥这题是medium难度
 *
 */
type LookUp<U, T> = U extends { type: T } ? U : never;
