/**
 * 取数组的长度
 * 思路：
 * 取数组的长度arr.length
 * readonly问题不讲述，见easy-tuple-to-object中关于as const的说明
 */
type Length<T extends readonly any[]> = T['length'];
