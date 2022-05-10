/**
 * 思路：
 * 实现一个可串联的构造器
 * 根据用例，我们需要实现一个option,一个get
 * 首先，看get，get的功能比较简单，即是返回我们所构造的那个对象
 * 那我们可以直接get():T
 * 然后比较难的是option
 * 我们需要实现一个option的功能，即是接收一个key，然后把value存到我们的对象中，key值需不重复
 * 首先，我们知道option会接收两个参数，一个是key extends string，一个是value:any;
 * 此时，我们可以假想冒号左边为：option<K extends string,V>(key:K,value:V)
 * 不过需要注意的是，我们的key不能重复，所以需要对key进行一定限制：K extends keyof T ? never : K,如果此Key在T中已经存在，则赋never
 * 我们的option需要将执行的内容进行递归叠加，返回一个新的option
 * 如此，我们的右边大概可以写这样：Chainable<T & {[key in K]: V}>,扩展原有的字段进行返回返回一个新的Chainable
 */
type Chainable<T extends object = {}> = {
  option<K extends string, V>(
    key: K extends keyof T ? never : K,
    value: V
  ): Chainable<T & { [key in K]: V }>;
  get(): T;
};
