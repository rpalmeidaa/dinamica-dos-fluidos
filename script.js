// Define as constantes e parâmetros iniciais do problema
const H = 2459;
const m = 83;
const k = 15;
const g = 9.8;
const delta_t = 0.1;
let X = H;
let X_dot = 0;
let t = 0;

// Cria as listas para armazenar os valores de tempo e posição
let time_list = [0];
let position_list = [H];

// Realiza o cálculo da posição do objeto em cada intervalo de tempo
while (X > 0) {
  X_dot += (-k/m * X_dot - g) * delta_t;
  X += X_dot * delta_t;
  t += delta_t;
  time_list.push(t);
  position_list.push(X);
}

// Encontra o tempo necessário para o objeto atingir o solo
let time_ground = time_list[time_list.length - 1];

// Verifica se a variável "time_ground" é uma matriz e se tem pelo menos um elemento
if (Array.isArray(time_ground) && time_ground.length > 0) {
  time_ground = time_ground[0];
}

// Cria a tabela com os valores de tempo e posição
const table = '<table><thead><tr><th>Tempo (s)</th><th>Posição (m)</th></tr></thead><tbody></tbody></table>';
$(document.body).append(table);
for (let i = 0; i < time_list.length; i++) {
  $('table tbody').append('<tr><td>' + time_list[i] + '</td><td>' + position_list[i] + '</td></tr>');
}

// Cria o gráfico de posição em função do tempo
const chart = new Chart(document.getElementById('myChart'), {
  type: 'line',
  data: {
    labels: time_list,
    datasets: [{
      label: 'Posição (m)',
      data: position_list,
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      xAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Tempo (s)'
        }
      }],
      yAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Posição (m)'
        }
      }]
    }
  }
});

// Exibe o tempo necessário para o objeto atingir o solo
$(document.body).append('<p>Tempo necessário para o objeto atingir o solo: ' + time_ground + ' s</p>');

console.log(chart)

const arrayTable = [time_list, position_list]
console.log(arrayTable)
console.table(arrayTable)
