/**
 * 思路：
 * 深度遍历，将所有的值都设置为 readonly
 * 但是，此时的value的值是一个对象，则是需要将这个值进行递归再进行设置为 readonly
 * 所以，在值是对象的时候，需要根据它是不是对象而进行判断是否需要进行递归
 * 判断是否是对象的方法是，使用keyof T来判断, 如果keyof T extends never的话，则说明这明显不是一个对象
 */

type IsObject<T> = keyof T extends never ? false : true;
type DeepReadonly<T> = {
  readonly [P in keyof T]: IsObject<T[P]> extends true
    ? DeepReadonly<T[P]>
    : T[P];
};
