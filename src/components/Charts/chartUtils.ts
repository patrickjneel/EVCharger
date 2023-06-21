export const barOptions = (chargingNames: string[], chartData: [{name: string, data: [number]}]) => ({
    chart: {
      type: 'column',
    },
    title: {
      text: 'Max Capacity',
    },
    xAxis: {
      categories: chargingNames,
    },
    yAxis: {
      title: {
        text: 'Max Capacity',
      },
    },
    series: chartData,
});

export const pieOptions = (chargerLocations: any) => ({
  chart: {
      type: 'pie',
    },
    title: {
      text: 'Locations By State',
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
      },
    },
    series: [
      {
        name: 'Number in States',
        colorByPoint: true,
        data: chargerLocations,
      },
    ],
})
