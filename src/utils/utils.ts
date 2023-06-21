export const averageFunc = (arr: any, property: any) => {
  return arr.reduce((total: number, a: any) => {
    total += a[property] / arr.length
    return total;
  }, 0)
}
