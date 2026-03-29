<script>
  import Chart from 'chart.js/auto';

  // 1. $state 대신 $state.raw를 사용합니다.
  // 이렇게 하면 Svelte가 객체 내부를 Proxy로 보호하지 않아 Chart.js와 충돌하지 않습니다.
  let chartConfig = $state.raw({
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green'],
      datasets: [{
        label: 'Svelte 5 + Chart.js',
        data: [12, 19, 3, 5],
      }]
    }
  });


  function chartAction(node, config) {
    let chart = new Chart(node, config);


    return {
      update(newConfig) {
        // 데이터 업데이트 시 차트를 파괴하고 새로 그리거나,
        // chart.update()를 사용하세요.
        chart.destroy();
        chart = new Chart(node, newConfig);
      },
      destroy() {
        chart.destroy();
      }
    };
  }


  // 데이터를 변경할 때는 객체 전체를 새로 할당해야 합니다 (raw의 특징)
  function updateData() {
    chartConfig = {
      ...chartConfig,
      data: {
        ...chartConfig.data,
        datasets: [{
          ...chartConfig.data.datasets[0],
          data: [20, 10, 30, 15]
        }]
      }
    };
  }
</script>


<div style="width: 400px;">
  <canvas use:chartAction={chartConfig}></canvas>
</div>


<button onclick={updateData}>데이터 변경</button>

