/**
 * 思路：
 * 实现一个Pick，从类型T中选择出属性K，构成一个新的类型
 * 如此，K应该是归属于T的key => K extends keyof T
 * 冒号左边，我们的key，肯定是K中的一个，所以左边是[P in K](Ts中遍历一个Key需要用In)
 * 右边则是我们需要取出的值T[P]
 */
type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};
