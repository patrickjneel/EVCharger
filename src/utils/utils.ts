export const averageFunc = (data: any[], property: string) => {
  return data.reduce((accu: number, prop: any) => (accu + prop.property) / data.length, 0)
}
