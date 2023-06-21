export const averageFunc = (arr: any, property: string): number => {
  if (!arr || !property) return 0;
  return arr.reduce((total: number, a: any) => {
    total += a[property] / arr.length
    return total;
  }, 0)
}
