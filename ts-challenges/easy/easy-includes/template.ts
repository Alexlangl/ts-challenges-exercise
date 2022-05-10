/**
 * 在类型系统里实现 JavaScript 的 Array.includes 方法，这个类型接受两个参数，返回的类型要么是 true 要么是 false。
 * 这题放在简单题里有稍显复杂
 * 思路：
 * 首先，根据题意，我们大概可以写出这样的一个答案：
 * type Includes<T extends readonly any[], U> = {
      [K in T[number]]: true
    }[U] extends true
      ? true
      : false
  这个思路是，将数组转成对象，然后取key如果key值为true，则返回true，否则返回false。
  但是走不通，因为我们的数组内有元素为fase的情况
  改变一下思路：
  我们的T会是一个数组，我们可以通过T extends [infer P,...infer k] 先来进行推断，如果这个extends是true，那么我们就可以知道P是数组的第一个元素，k是数组的其他元素。
  如果是fase，则直接返回false
  现在我们大概可以写出这样的一个答案：
  type Includes<T extends readonly any[], U> = T extends [infer P, ...infer K]
  ? [P 和 K的判断]
  : false;
  既然知道了P是数组的第一个元素，我们此时就需要判断P和U是否相等，如果相等，那么返回true，否则返回false。
  为此，我们需要写一个相等的推荐，按理来说应该写个Equal来判断这两个值是否相等，即是：
  type MyEqual<T, U> = (<P>() => P extends T ? true : false) extends <P>() => P extends U ? true : false
    ? true
    : false;
  如果此时的P和U是相等的，那么返回true，否则将剩余的元素和U进行比较，这里使用了ts的递归调用的方式
 */
type MyEqual<T, U> = (<P>() => P extends T ? true : false) extends <
  P
>() => P extends U ? true : false
  ? true
  : false;

type Includes<T extends readonly any[], U> = T extends [infer P, ...infer K]
  ? MyEqual<P, U> extends true
    ? true
    : Includes<K, U>
  : false;
