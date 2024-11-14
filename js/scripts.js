// ---------- CHARTS ----------





// AREA CHART
const areaChartOptions = {
  series: [
    {
      name: 'Purchase Orders',
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: 'Sales Orders',
      data: [11, 32, 45, 32, 34, 52, 41],
    },
  ],
  chart: {
    type: 'area',
    background: 'transparent',
    height: 350,
    stacked: false,
    toolbar: {
      show: false,
    },
  },
  colors: ['#00ab57', '#d50000'],
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  dataLabels: {
    enabled: false,
  },
  fill: {
    gradient: {
      opacityFrom: 0.4,
      opacityTo: 0.1,
      shadeIntensity: 1,
      stops: [0, 100],
      type: 'vertical',
    },
    type: 'gradient',
  },
  grid: {
    borderColor: '#55596e',
    yaxis: {
      lines: {
        show: true,
      },
    },
    xaxis: {
      lines: {
        show: true,
      },
    },
  },
  legend: {
    labels: {
      colors: '#f5f7ff',
    },
    show: true,
    position: 'top',
  },
  markers: {
    size: 6,
    strokeColors: '#1b2635',
    strokeWidth: 3,
  },
  stroke: {
    curve: 'smooth',
  },
  xaxis: {
    axisBorder: {
      color: '#55596e',
      show: true,
    },
    axisTicks: {
      color: '#55596e',
      show: true,
    },
    labels: {
      offsetY: 5,
      style: {
        colors: '#f5f7ff',
      },
    },
  },
  yaxis: [
    {
      title: {
        text: 'Purchase Orders',
        style: {
          color: '#f5f7ff',
        },
      },
      labels: {
        style: {
          colors: ['#f5f7ff'],
        },
      },
    },
    {
      opposite: true,
      title: {
        text: 'Sales Orders',
        style: {
          color: '#f5f7ff',
        },
      },
      labels: {
        style: {
          colors: ['#f5f7ff'],
        },
      },
    },
  ],
  tooltip: {
    shared: true,
    intersect: false,
    theme: 'dark',
  },
};

const areaChart = new ApexCharts(
  document.querySelector('#area-chart'),
  areaChartOptions
);
areaChart.render();

// ADOPTION CHART
const adoptionChartOptions = {
  series: [64, 36],
  chart: {
    type: 'pie',
    height: 350,
  },
  labels: ['Cães', 'Gatos'],
  colors: ['#FF6B00', '#000000'],
};

const adoptionChart = new ApexCharts(
  document.querySelector('#adoption-chart'),
  adoptionChartOptions
);
adoptionChart.render();

// AVAILABLE ANIMALS CHART
const availableAnimalsChartOptions = {
  series: [102],
  chart: {
    type: 'radialBar',
    height: 350,
  },
  plotOptions: {
    radialBar: {
      hollow: {
        size: '70%',
      },
      dataLabels: {
        show: true,
        name: {
          offsetY: -10,
          show: true,
          color: '#888',
          fontSize: '13px'
        },
        value: {
          color: '#111',
          fontSize: '30px',
          show: true,
        }
      }
    }
  },
  labels: ['Animais disponíveis'],
  colors: ['#FF6B00'],
};



const availableAnimalsChart = new ApexCharts(
  document.querySelector('#available-animals-chart'),
  availableAnimalsChartOptions
);
availableAnimalsChart.render();

// BREEDS CHART (atualizado para gráfico de barras verticais)
const breedsChartOptions = {
  series: [{
    name: 'Quantidade',
    data: [25, 15, 10, 8, 2]
  }],
  chart: {
    type: 'bar',
    height: 350,

  },
  plotOptions: {
    bar: {
      borderRadius: 4,
      horizontal: false,
    }
  },
  dataLabels: {
    enabled: false
  },
  xaxis: {
    categories: ['Golden Retriever', 'Rottweilers', 'Husky', 'Pit Bull', 'Pastor Alemão'],
  },
  yaxis: {
    title: {
      text: 'Quantidade'
    }
  },
  colors: ['#FF6B00', '#FF8C00', '#FFA500', '#FFD700', '#FFFF00'],
};

const GraphicRaça = new ApexCharts(
  document.querySelector('#raça-chart'),
  breedsChartOptions
);
GraphicRaça.render();


// DONATIONS CHART
const donationsChartOptions = {
  series: [{
    name: 'Doações',
    data: [11, 26, 17, 30, 37]
  }],
  chart: {
    height: 350,
    type: 'line',
  },
  xaxis: {
    categories: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'],
  },
  colors: ['#FF6B00'],
};

const donationsChart = new ApexCharts(
  document.querySelector('#donations-chart'),
  donationsChartOptions
);
donationsChart.render();
