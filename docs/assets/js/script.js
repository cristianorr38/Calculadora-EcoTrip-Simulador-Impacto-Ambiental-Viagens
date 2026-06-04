/* ========================================
   CALCULADORA DE EMISSÃO DE CO²
   Script Principal - Lógica da Aplicação v2.0
   ======================================== */

// ===== FATORES DE EMISSÃO (kg CO² / km) =====
const EMISSION_FACTORS = {
  bicicleta: 0,
  onibus: 0.089,
  moto: 0.128,
  carro: 0.192,
  caminhao: 0.378
};

// ===== CUSTO DE COMPENSAÇÃO (R$ por tonelada CO²) =====
const COMPENSATION_COST_PER_TON = 25; // R$ por tonelada
const MIN_COMPENSATION_TONS = 0.05; // Mínimo de toneladas para compensação

// ===== ELEMENTOS DO DOM =====
const form = document.getElementById('co2Form');
const originInput = document.getElementById('origin');
const destinationInput = document.getElementById('destination');
const distanceInput = document.getElementById('distance');
const manualDistanceCheckbox = document.getElementById('manualDistance');
const distanceHelper = document.getElementById('distanceHelper');
const resultsSection = document.getElementById('resultsSection');
const transportRadios = document.querySelectorAll('input[name="transport"]');
const distanceSuggestionsDiv = document.getElementById('distanceSuggestions');
const distanceList = document.getElementById('distanceList');
const citiesList = document.getElementById('citiesList');

// ===== VARIÁVEIS GLOBAIS =====
let currentDistance = null;
let currentEmission = null;
let currentTransport = null;

// ===== EVENT LISTENERS =====
document.addEventListener('DOMContentLoaded', () => {
  // Inicializar autocomplete
  initializeAutocomplete();

  // Busca distância ao sair do campo origem
  originInput.addEventListener('blur', () => {
    if (!manualDistanceCheckbox.checked) {
      searchDistance();
    }
  });

  // Busca distância ao sair do campo destino
  destinationInput.addEventListener('blur', () => {
    if (!manualDistanceCheckbox.checked) {
      showDistanceSuggestions();
    }
  });

  // Mostra sugestões enquanto digita o destino
  destinationInput.addEventListener('input', () => {
    if (!manualDistanceCheckbox.checked && originInput.value.trim()) {
      showDistanceSuggestions();
    }
  });

  // Toggle para distância manual
  manualDistanceCheckbox.addEventListener('change', handleManualDistanceToggle);

  // Submit do formulário
  form.addEventListener('submit', handleFormSubmit);

  // Reset do formulário
  form.addEventListener('reset', handleFormReset);

  // Botão de compensação
  const compensateButton = document.getElementById('compensateButton');
  if (compensateButton) {
    compensateButton.addEventListener('click', handleCompensation);
  }
});

// ===== FUNÇÃO: Inicializar Autocomplete =====
function initializeAutocomplete() {
  const cities = RoutersDB.getAllCities();
  citiesList.innerHTML = '';

  cities.forEach(city => {
    const option = document.createElement('option');
    option.value = city;
    citiesList.appendChild(option);
  });
}

// ===== FUNÇÃO: Mostrar Sugestões de Distância =====
function showDistanceSuggestions() {
  const origin = originInput.value.trim();
  const destination = destinationInput.value.trim();

  if (!origin || !destination) {
    distanceSuggestionsDiv.classList.add('hidden');
    return;
  }

  if (origin.toLowerCase() === destination.toLowerCase()) {
    distanceSuggestionsDiv.classList.add('hidden');
    return;
  }

  // Buscar todas as rotas que saem da origem
  const originRoutes = RoutersDB.routers.filter(route => 
    removeAccents(route.origem.toLowerCase()) === removeAccents(origin.toLowerCase())
  );

  if (originRoutes.length > 0) {
    distanceList.innerHTML = '';
    distanceSuggestionsDiv.classList.remove('hidden');

    originRoutes.forEach(route => {
      const li = document.createElement('li');
      li.textContent = `${route.origem} → ${route.destino}: ${route.distancia} km`;
      li.addEventListener('click', () => selectRoute(route));
      distanceList.appendChild(li);
    });
  } else {
    distanceSuggestionsDiv.classList.add('hidden');
  }
}

// ===== FUNÇÃO: Selecionar Rota =====
function selectRoute(route) {
  originInput.value = route.origem;
  destinationInput.value = route.destino;
  distanceInput.value = route.distancia;
  distanceHelper.textContent = `✓ Rota encontrada: ${route.distancia} km`;
  distanceHelper.style.color = 'var(--color-primary)';
  distanceSuggestionsDiv.classList.add('hidden');
}

// ===== FUNÇÃO: Remover Acentos =====
function removeAccents(str) {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

// ===== FUNÇÃO: Buscar Distância no RoutersDB =====
function searchDistance() {
  const origin = originInput.value.trim();
  const destination = destinationInput.value.trim();

  // Validação básica
  if (!origin || !destination) {
    distanceHelper.textContent = '';
    distanceInput.value = '';
    distanceSuggestionsDiv.classList.add('hidden');
    return;
  }

  if (origin.toLowerCase() === destination.toLowerCase()) {
    distanceHelper.textContent = '❌ Origem e destino não podem ser iguais';
    distanceHelper.style.color = 'var(--color-danger)';
    distanceInput.value = '';
    distanceSuggestionsDiv.classList.add('hidden');
    return;
  }

  // Busca a distância no RoutersDB
  const distance = RoutersDB.findDistance(origin, destination);

  if (distance !== null) {
    distanceInput.value = distance;
    distanceHelper.textContent = `✓ Rota encontrada: ${distance} km`;
    distanceHelper.style.color = 'var(--color-primary)';
    distanceSuggestionsDiv.classList.add('hidden');
  } else {
    distanceInput.value = '';
    distanceHelper.textContent = `❌ Rota não encontrada. Marque "Inserir distância manualmente" para continuar.`;
    distanceHelper.style.color = 'var(--color-danger)';
    showDistanceSuggestions();
  }
}

// ===== FUNÇÃO: Toggle Distância Manual =====
function handleManualDistanceToggle() {
  if (manualDistanceCheckbox.checked) {
    // Habilitar input manual
    distanceInput.removeAttribute('readonly');
    distanceInput.disabled = false;
    distanceInput.focus();
    distanceHelper.textContent = '📝 Digite a distância manualmente (aceita qualquer valor)';
    distanceHelper.style.color = 'var(--color-text-secondary)';
    distanceInput.value = '';
    distanceSuggestionsDiv.classList.add('hidden');
  } else {
    // Desabilitar e buscar automaticamente
    distanceInput.setAttribute('readonly', 'readonly');
    distanceInput.value = '';
    distanceHelper.textContent = '';
    distanceSuggestionsDiv.classList.add('hidden');
    searchDistance();
  }
}

// ===== FUNÇÃO: Submit do Formulário =====
function handleFormSubmit(e) {
  e.preventDefault();

  // Validações
  const origin = originInput.value.trim();
  const destination = destinationInput.value.trim();
  const distance = parseFloat(distanceInput.value);
  const transportSelected = document.querySelector('input[name="transport"]:checked');

  // Validar origem
  if (!origin) {
    showAlert('❌ Por favor, insira a cidade de origem', 'error');
    originInput.focus();
    return;
  }

  // Validar destino
  if (!destination) {
    showAlert('❌ Por favor, insira a cidade de destino', 'error');
    destinationInput.focus();
    return;
  }

  // Validar igualdade
  if (origin.toLowerCase() === destination.toLowerCase()) {
    showAlert('❌ Origem e destino devem ser diferentes', 'error');
    return;
  }

  // Validar distância
  if (!distance || distance <= 0 || isNaN(distance)) {
    showAlert('❌ Por favor, insira uma distância válida', 'error');
    distanceInput.focus();
    return;
  }

  // Validar transporte
  if (!transportSelected) {
    showAlert('❌ Por favor, selecione um meio de transporte', 'error');
    return;
  }

  // Tudo validado - calcular emissões
  const transportType = transportSelected.value;
  currentTransport = transportType;
  currentDistance = distance;
  calculateAndDisplayResults(origin, destination, distance, transportType);
}

// ===== FUNÇÃO: Calcular e Exibir Resultados =====
function calculateAndDisplayResults(origin, destination, distance, selectedTransport) {
  // Calcular emissões para todos os transportes
  const emissions = {};
  Object.keys(EMISSION_FACTORS).forEach(transport => {
    emissions[transport] = distance * EMISSION_FACTORS[transport];
  });

  // Emissão selecionada
  const selectedEmission = emissions[selectedTransport];
  currentEmission = selectedEmission;

  // Preencher resultado principal
  document.getElementById('resultOrigin').textContent = origin;
  document.getElementById('resultDestination').textContent = destination;
  document.getElementById('resultDistance').textContent = `Distância: ${distance} km`;
  document.getElementById('resultEmission').textContent = selectedEmission.toFixed(3);
  
  const transportLabels = {
    bicicleta: '🚴 Bicicleta',
    onibus: '🚌 Ônibus',
    carro: '🚗 Carro',
    moto: '🏍️ Moto',
    caminhao: '🚚 Caminhão'
  };
  document.getElementById('resultTransport').textContent = `Transporte escolhido: ${transportLabels[selectedTransport]}`;

  // Preencher tabela de comparação
  displayComparisonTable(emissions, selectedTransport);

  // Exibir dica de melhor transporte
  displayBestTransportTip(emissions, selectedTransport, selectedEmission);

  // Preencher sugestões de créditos de carbono
  displayCarbonCredits(selectedTransport, selectedEmission);

  // Mostrar seção de resultados
  resultsSection.classList.remove('hidden');
  
  // Rolar para resultados
  setTimeout(() => {
    resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 100);
}

// ===== FUNÇÃO: Exibir Dica de Melhor Transporte =====
function displayBestTransportTip(emissions, selectedTransport, selectedEmission) {
  const suggestionContent = document.getElementById('suggestionContent');
  
  // Encontrar o transporte com menor emissão (excluindo bicicleta)
  let bestTransport = Object.entries(emissions)
    .filter(([transport, emission]) => transport !== 'bicicleta')
    .sort((a, b) => a[1] - b[1])[0];

  const transportLabels = {
    bicicleta: '🚴 Bicicleta',
    onibus: '🚌 Ônibus',
    carro: '🚗 Carro',
    moto: '🏍️ Moto',
    caminhao: '🚚 Caminhão'
  };

  const transportEmojis = {
    bicicleta: '🚴',
    onibus: '🚌',
    carro: '🚗',
    moto: '🏍️',
    caminhao: '🚚'
  };

  let tip = '';

  if (selectedTransport === 'bicicleta') {
    tip = `<strong>Excelente escolha!</strong> Ao usar bicicleta, você <strong>não emite CO²</strong> nesta viagem. 
           Continue promovendo sustentabilidade! 🌍`;
  } else if (selectedTransport === 'onibus') {
    tip = `<strong>Boa escolha!</strong> O ônibus é um dos transportes mais eficientes. 
           Se possível, considere <strong>${transportLabels.bicicleta}</strong> para reduzir ainda mais as emissões.`;
  } else {
    const savings = selectedEmission - emissions[bestTransport[0]];
    const savingsPercent = ((savings / selectedEmission) * 100).toFixed(1);
    
    tip = `<strong>Oportunidade de melhoria!</strong> Ao trocar para <strong>${transportLabels[bestTransport[0]]}</strong>, 
           você economizaria <strong>${savings.toFixed(3)} kg CO² (${savingsPercent}%)</strong> nesta viagem. 
           ${transportEmojis[bestTransport[0]]}`;
  }

  suggestionContent.innerHTML = tip;
}

// ===== FUNÇÃO: Exibir Tabela de Comparação =====
function displayComparisonTable(emissions, selectedTransport) {
  const tableBody = document.getElementById('comparisonTableBody');
  tableBody.innerHTML = '';

  const transportLabels = {
    bicicleta: '🚴 Bicicleta',
    onibus: '🚌 Ônibus',
    carro: '🚗 Carro',
    moto: '🏍️ Moto',
    caminhao: '🚚 Caminhão'
  };

  const selectedEmission = emissions[selectedTransport];

  Object.entries(emissions).forEach(([transport, emission]) => {
    const row = document.createElement('tr');
    const difference = emission - selectedEmission;
    
    let differenceText;
    if (difference > 0) {
      differenceText = `+${difference.toFixed(3)} kg`;
    } else if (difference < 0) {
      differenceText = `${difference.toFixed(3)} kg`;
    } else {
      differenceText = 'Igual';
    }

    row.innerHTML = `
      <td>${transportLabels[transport]}</td>
      <td>${emission.toFixed(3)} kg</td>
      <td>${differenceText}</td>
    `;

    // Destaque da linha selecionada
    if (transport === selectedTransport) {
      row.style.backgroundColor = 'rgba(16, 185, 129, 0.15)';
      row.style.fontWeight = 'bold';
    }

    tableBody.appendChild(row);
  });
}

// ===== FUNÇÃO: Exibir Créditos de Carbono e Compensação =====
function displayCarbonCredits(transport, emission) {
  const creditsList = document.getElementById('carbonCreditsList');
  const compensationSection = document.getElementById('compensationSection');
  const compensationText = document.querySelector('#compensationSection p');
  const compensateButton = document.getElementById('compensateButton');
  const compensationCost = document.getElementById('compensationCost');

  creditsList.innerHTML = '';

  const suggestions = {
    bicicleta: [
      '✓ Parabéns! Você escolheu o transporte mais sustentável',
      '✓ Continue promovendo o ciclismo na sua comunidade',
      '✓ Compartilhe dicas de rotas seguras com seus amigos'
    ],
    onibus: [
      `✓ Você emitiu ${emission.toFixed(3)} kg CO². Impacto reduzido`,
      '✓ Reflorestamento certificado: R$ 15,00 por tonelada CO²',
      '✓ Energia renovável: R$ 20,00 por tonelada CO²',
      '✓ Use aplicativos de caronas para viagens longas'
    ],
    carro: [
      `✓ Você emitiu ${emission.toFixed(3)} kg CO². Compensação disponível`,
      '✓ Plantação de árvores (compensa ~20kg CO² por árvore)',
      '✓ Investir em energia solar: R$ 25,00 por tonelada CO²',
      '✓ Considere usar transporte público ou híbrido nas próximas viagens',
      `✓ Crédito de carbono: ${(emission / 1000).toFixed(3)} toneladas`
    ],
    moto: [
      `✓ Você emitiu ${emission.toFixed(3)} kg CO². Impacto moderado`,
      '✓ Compense plantando uma árvore',
      '✓ Considere usar transporte público para trajetos longos',
      '✓ Mantenha sua moto bem regulada para reduzir emissões'
    ],
    caminhao: [
      `✓ Você emitiu ${emission.toFixed(3)} kg CO². Impacto significativo`,
      '✓ Compense com projetos de reflorestamento certificados',
      '✓ Considere consolidar cargas para reduzir viagens',
      '✓ Invista em combustíveis mais limpos',
      `✓ Crédito de carbono a compensar: ${(emission / 1000).toFixed(3)} toneladas`
    ]
  };

  const credits = suggestions[transport] || [];
  credits.forEach(suggestion => {
    const li = document.createElement('li');
    li.textContent = suggestion;
    creditsList.appendChild(li);
  });

  // Calcular compensação
  const emissionInTons = emission / 1000;
  const compensationNeeded = emissionInTons >= MIN_COMPENSATION_TONS;

  if (compensationNeeded) {
    const cost = (emissionInTons * COMPENSATION_COST_PER_TON).toFixed(2);
    compensationCost.textContent = cost;
    compensationText.innerHTML = `💰 <strong>Compensação disponível:</strong> ${emissionInTons.toFixed(3)} toneladas de CO² = <strong>R$ ${cost}</strong>`;
    compensateButton.classList.remove('hidden');
  } else {
    compensationText.innerHTML = `✓ <strong>Impacto mínimo:</strong> Menos de ${MIN_COMPENSATION_TONS} toneladas. Sem necessidade de compensação.`;
    compensateButton.classList.add('hidden');
  }
}

// ===== FUNÇÃO: Compensar Emissões =====
function handleCompensation() {
  if (!currentEmission) return;

  const emissionInTons = currentEmission / 1000;
  const cost = (emissionInTons * COMPENSATION_COST_PER_TON).toFixed(2);

  showAlert(
    `🌿 Compensação iniciada! Você está plantando ${(emissionInTons / 0.02).toFixed(0)} árvores (R$ ${cost})`,
    'success'
  );

  // Desabilitar botão temporariamente
  const compensateButton = document.getElementById('compensateButton');
  compensateButton.disabled = true;
  const originalText = compensateButton.textContent;
  compensateButton.textContent = '✓ Compensação Realizada!';

  setTimeout(() => {
    compensateButton.disabled = false;
    compensateButton.textContent = originalText;
  }, 3000);
}

// ===== FUNÇÃO: Reset do Formulário =====
function handleFormReset() {
  // Limpar inputs
  originInput.value = '';
  destinationInput.value = '';
  distanceInput.value = '';
  manualDistanceCheckbox.checked = false;
  
  // Desabilitar input de distância
  distanceInput.setAttribute('readonly', 'readonly');
  
  // Limpar mensagens
  distanceHelper.textContent = '';
  distanceSuggestionsDiv.classList.add('hidden');
  
  // Ocultar resultados
  resultsSection.classList.add('hidden');

  // Resetar variáveis globais
  currentDistance = null;
  currentEmission = null;
  currentTransport = null;
  
  // Rolar para o topo e focar no primeiro campo
  setTimeout(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    originInput.focus();
  }, 100);
}

// ===== FUNÇÃO: Mostrar Alerta =====
function showAlert(message, type = 'info') {
  // Criar elemento de alerta
  const alert = document.createElement('div');
  const bgColor = type === 'error' ? 'var(--color-danger)' : 
                  type === 'success' ? 'var(--color-primary)' : 'var(--color-primary)';
  
  alert.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background-color: ${bgColor};
    color: white;
    padding: 16px 24px;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    z-index: 1000;
    animation: slideInRight 0.3s ease-out;
    font-size: 14px;
    font-weight: 500;
  `;
  alert.textContent = message;
  
  // Adicionar estilo de animação se não existir
  if (!document.querySelector('style[data-alert-animation]')) {
    const style = document.createElement('style');
    style.setAttribute('data-alert-animation', '');
    style.textContent = `
      @keyframes slideInRight {
        from {
          transform: translateX(400px);
          opacity: 0;
        }
        to {
          transform: translateX(0);
          opacity: 1;
        }
      }
    `;
    document.head.appendChild(style);
  }
  
  // Adicionar ao body
  document.body.appendChild(alert);
  
  // Remover após 4 segundos
  setTimeout(() => {
    alert.style.animation = 'slideInRight 0.3s ease-out reverse';
    setTimeout(() => alert.remove(), 300);
  }, 4000);
}

console.log('✓ Script v2.0 carregado com sucesso');
console.log('✓ RoutersDB disponível:', typeof RoutersDB !== 'undefined');
console.log('✓ Total de rotas:', RoutersDB.routers.length);
