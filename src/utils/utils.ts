export const averageFunc = (data: any, a: any) => {
  return data.reduce((total: number, data: any) => {
    // const b = total + data[a] / data.length;
    console.log('total + this', total + data[a])
    return total;
  }, 0)
}
