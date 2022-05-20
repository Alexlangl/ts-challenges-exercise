/**
 * @author Alexlangl
 * @Date 2022-05-20 18:06
 * @overview 根据正则/^(\+|\-)?(\d*)?(\%)?$/匹配类型 结果： [正负号, 数字, 单位]，无匹配返空字符串
 * @description infer+递归
 *
 */
type PercentageParser<
  T extends string,
  R extends string[] = ['', '', '']
> = T extends `${infer First}${infer Rest}`
  ? First extends '+' | '-'
    ? PercentageParser<Rest, [First, R[1], R[2]]>
    : First extends '%'
    ? [R[0], R[1], First]
    : PercentageParser<Rest, [R[0], `${R[1]}${First}`, R[2]]>
  : R;
