export function SalesAccountChartData() {
  return {
    height: 350,
    type: 'line',
    options: {
      chart: {
        background: 'transparent'
      },
      stroke: {
        width: [0, 3],
        curve: 'smooth'
      },
      plotOptions: {
        bar: {
          columnWidth: '50%'
        }
      },
      colors: ['#7267EF', '#c7d9ff'],
      fill: {
        opacity: [0.85, 1]
      },
      labels: ['Productive', 'NonProductive', 'Others', 'Idle'],
      markers: {
        size: 0
      },
      yaxis: {
        min: 0
      },
      grid: {
        strokeDashArray: 0,
        borderColor: '#f5f5f5'
      },
      tooltip: {
        shared: true,
        intersect: false,
        y: {
          formatter(y) {
            if (typeof y !== 'undefined') {
              return `$ ${y.toFixed(0)}`;
            }
            return y;
          }
        }
      },
      legend: {
        labels: {
          useSeriesColors: true
        },
        markers: {
          customHTML() {
            return '';
          }
        }
      },
      theme: {
        mode: 'light'
      }
    },
    series: [
      {
        name: 'Total Sales',
        type: 'column',
        data: [23, 11, 22, 27,]
      },
      {
        name: 'Average',
        type: 'line',
        data: [30, 25, 36, 30,]
      }
    ]
  };
}
