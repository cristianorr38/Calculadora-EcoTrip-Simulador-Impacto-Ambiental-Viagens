# **🌍 Calculadora EcoTrip: Simulador de Impacto Ambiental para Viagens**

Uma aplicação web interativa para calcular a emissão de CO² de diferentes meios de transporte, desenvolvida como projeto do GitHub Copilot DIO.

![VS Code](https://img.shields.io/badge/VS%20Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![GitHub Copilot](https://img.shields.io/badge/GitHub%20Copilot-000000?style=for-the-badge&logo=githubcopilot&logoColor=white)

![Build](https://img.shields.io/badge/build-success-success)
![Status](https://img.shields.io/badge/status-concluído-brightgreen)
![Versão](https://img.shields.io/badge/release-v1.0.0-green)
![GitHub last commit](https://img.shields.io/github/last-commit/cristianorr38/Calculadora-Ecotrip-Simulador-Impacto-Ambiental-Viagens)
![License](https://img.shields.io/badge/License-MIT-green)
![GitHub Repo Size](https://img.shields.io/github/repo-size/cristianorr38/Calculadora-EcoTrip-Simulador-Impacto-Ambiental-Viagens)
![GitHub Stars](https://img.shields.io/github/stars/cristianorr38/Calculadora-EcoTrip-Simulador-Impacto-Ambiental-Viagens)
![GitHub forks](https://img.shields.io/github/forks/cristianorr38/Calculadora-EcoTrip-Simulador-Impacto-Ambiental-Viagens?style=social)

---

## 📋 Índice

1. [Características](#características)
2. [Como Começar](#como-começar)
3. [Funcionalidades](#funcionalidades)
4. [Guia de Uso](#guia-de-uso)
5. [Estrutura do Projeto](#estrutura-do-projeto)
6. [Documentação Técnica](#documentação-técnica)
7. [Tecnologias](#tecnologias)
8. [Acessibilidade](#acessibilidade)
9. [Próximas Melhorias](#próximas-melhorias)
10. [Autor](#autor)

---

## ✨ Características

- ✨ **Interface intuitiva e responsiva** - Design moderno que funciona em qualquer dispositivo
- 📍 **Autocomplete de cidades** - Sugestões automáticas de origem e destino
- 📋 **Rotas sugeridas** - Lista clicável de rotas com distâncias pré-calculadas
- 📏 **Cálculo de distâncias** - Busca automática ou entrada manual
- 🚗 **Múltiplos meios de transporte** - Bicicleta, Ônibus, Carro, Moto e Caminhão
- 📊 **Comparação visual** - Compare a emissão de CO² entre diferentes transportes
- 💡 **Dica de melhor transporte** - Recomendação personalizada de economia de CO²
- 🌱 **Créditos de carbono** - Explicação e sugestões de compensação
- 💰 **Botão de compensação** - Calcule o custo de compensação (R$ 25/ton CO²)
- ♿ **Acessibilidade** - Semântica HTML5 e ARIA labels completos
- 🎨 **Design System CSS** - Variáveis CSS e convenção BEM para fácil manutenção

---

## 🚀 Como Começar

### 🌐 Abrir no Navegador

#### Opção 1: Clicar Direto (Mais Fácil)
1. Localize o arquivo **`index.html`** na pasta do projeto
2. **Clique duas vezes** no arquivo
3. Seu navegador abrirá automaticamente

#### Opção 2: Arrastar para o Navegador
1. Abra seu navegador web (Chrome, Firefox, Edge, Safari, etc.)
2. **Arraste o arquivo `index.html`** para a janela do navegador
3. A página carregará automaticamente

#### Opção 3: Digitar o Caminho
1. Abra seu navegador
2. Pressione **Ctrl+L** (ou **Cmd+L** no Mac)
3. Digite:
   ```
   file:///C:/Users/cristiano/Documents/CalculadoraCO2_GitHubCopilot/index.html
   ```
4. Pressione **Enter**

<img width="1289" height="1064" alt="image" src="https://github.com/user-attachments/assets/42f539be-3d28-47c5-9f53-850349ec8732" />

### 📂 Estrutura de Arquivos

```
Calculadora-EcoTrip-Simulador-Impacto-Ambiental-Viagens/
├── 📄 index.html              ← ABRA ESTE ARQUIVO!
├── 📄 README.md               (Este arquivo - Documentação)
├── 📁 assets/
│   ├── 📁 css/
│   │   └── 📄 style.css       (Estilos CSS)
│   └── 📁 js/
│       ├── 📄 routers-data.js (Banco de dados de rotas)
│       └── 📄 script.js       (Código JavaScript)
└── 📄 .gitignore             (Configuração Git)
```

### ✅ Checklist de Funcionamento

Após abrir a aplicação, verifique:

- [ ] Página carrega com estilo (não aparece em preto e branco)
- [ ] Botões funcionam quando clicados
- [ ] Caixas de texto aceitam entrada de texto
- [ ] Rádio buttons funcionam (seleciona uma opção)
- [ ] Checkbox funciona (marca/desmarca)
- [ ] Campo de distância habilita/desabilita corretamente
- [ ] Botão de cálculo calcula a emissão
- [ ] Resultados aparecem com animação

---

## ✨ Funcionalidades

### 1. 📍 Geolocalização com Autocomplete
- [x] Input para **Origem** com sugestões
- [x] Input para **Destino** com sugestões
- [x] Integração com banco de dados de cidades
- [x] Validação de campos preenchidos

### 2. 📋 Rotas Sugeridas
- [x] Lista clicável de rotas filtradas
- [x] Exibe distância de cada rota
- [x] Clique em rota auto-preenche: origem, destino e distância
- [x] Mensagem visual: "✓ Rota encontrada: XXX km"

### 3. 📏 Cálculo de Distância
- [x] Modo **Manual** - Digite a distância
- [x] Modo **Automático** - Clique para buscar
- [x] Toggle entre os dois modos
- [x] Validação de distância válida (>0)
- [x] Campo readonly/habilitado conforme modo

### 4. 🚗 Seleção de Transporte
- [x] Radio buttons para única seleção
- [x] 5 opções de transporte:
  - 🚴 **Bicicleta** (0 kg CO²/km)
  - 🚌 **Ônibus** (0.089 kg CO²/km)
  - 🏍️ **Moto** (0.128 kg CO²/km)
  - 🚗 **Carro** (0.192 kg CO²/km)
  - 🚚 **Caminhão** (0.378 kg CO²/km)
- [x] Feedback visual para seleção

### 5. ⚡ Cálculo de Emissão
- [x] Fórmula: Distância × Fator de Emissão
- [x] Resultado em kg CO²
- [x] Formatação com 3 casas decimais
- [x] Validação completa antes do cálculo

### 6. 📊 Comparação entre Transportes
- [x] Tabela comparativa automática
- [x] Mostra emissão de cada transporte
- [x] Calcula diferença em relação ao selecionado
- [x] Destaca linha da seleção atual

### 7. 💡 Dica de Melhor Transporte
- [x] Card "Dica: Escolha Sustentável"
- [x] Mostra qual transporte economiza mais CO²
- [x] Calcula porcentagem de economia
- [x] Exibe economia em kg CO²

### 8. 🌱 Créditos de Carbono
- [x] Seção "Créditos de Carbono Sugeridos"
- [x] Explicação detalhada do conceito
- [x] Lista de sugestões de compensação
- [x] Exibe emissão em toneladas

### 9. 💰 Botão de Compensação
- [x] Cálculo: (emissão_tons × R$ 25,00)
- [x] Botão aparece **APENAS se** emissão ≥ 0.05 toneladas
- [x] Exibe custo formatado: "🌿 Compensar Emissões (R$ X.XX)"
- [x] Clique mostra alerta e quantidade de árvores plantadas
- [x] Desabilita após compensação realizada

### 10. 🎨 Interface e Design
- [x] Header semântico com título
- [x] Design System CSS completo
- [x] Variáveis CSS para cores e espaçamento
- [x] Convenção BEM para classes
- [x] Animações suaves
- [x] Gradientes e sombras
- [x] Ícones de emoji integrados

### 11. ♿ Acessibilidade
- [x] Labels associados aos inputs
- [x] Atributos `aria-label`
- [x] Semântica HTML5
- [x] Navegação por teclado
- [x] Contraste WCAG AA

### 12. 📱 Responsividade
- [x] Mobile First
- [x] Breakpoint 480px
- [x] Breakpoint 768px
- [x] Desktop (acima de 768px)

---

## 📖 Guia de Uso Passo a Passo

### Passo 1: Preencher Localização
- Digite a **Origem** (ex: São Paulo)
- Digite o **Destino** (ex: Rio de Janeiro)
- Verá sugestões de cidades e rotas disponíveis

### Passo 2: Informar Distância

**Opção A: Cálculo Automático (Recomendado)**
- Deixe a caixa "Inserir distância manualmente" **DESMARCADA**
- Clique na rota sugerida ou no botão "🔄 Calcular"
- A distância será preenchida automaticamente

**Opção B: Digite Manualmente**
- Marque a caixa **"Inserir distância manualmente"**
- Digite a distância em km
- Ex: 430 km

### Passo 3: Selecionar Transporte
Escolha um único meio de transporte:
- 🚴 **Bicicleta** - Zero emissão!
- 🚌 **Ônibus** - Baixa emissão
- 🏍️ **Moto** - Emissão moderada
- 🚗 **Carro** - Emissão moderada
- 🚚 **Caminhão** - Alta emissão

### Passo 4: Calcular Emissão
Clique no botão **"⚡ Calcular Emissão"**

### Passo 5: Ver Resultados
A página rolará automaticamente para mostrar:
- **📊 Emissão de CO²** - Sua emissão total
- **🔄 Comparação** - Emissão de cada transporte
- **💡 Dica de Melhor Transporte** - Recomendação personalizada
- **🌱 Créditos de Carbono** - Sugestões e botão de compensação

### Passo 6: Compensar Emissões (Opcional)
Se a emissão for ≥ 0.05 toneladas:
- Clique no botão **"🌿 Compensar Emissões (R$ X.XX)"**
- Verá a mensagem: "🌿 Compensação iniciada! Você está plantando X árvores"
- O botão desabilita-se após a ação
- Se não for houver a necesidade de compensar emisssões de CO² o botão **"🌿 Compensar Emissões (R$ X.XX)"** não é exibido

<img width="1271" height="1068" alt="image" src="https://github.com/user-attachments/assets/863af10e-c6a7-4a59-a2a6-bb477ad27520" />

<img width="1349" height="951" alt="image" src="https://github.com/user-attachments/assets/21253769-6397-486e-a06b-db13846b2943" />

<img width="1256" height="625" alt="image" src="https://github.com/user-attachments/assets/9916c100-8666-46ef-872d-29ce4b88ae4e" />

---

## 🏗️ Estrutura do Projeto

### Arquivos Principais

#### `index.html` - Estrutura HTML5 Semântica
```html
<header>          <!-- Cabeçalho -->
<main>            <!-- Conteúdo principal -->
  <section>       <!-- Formulário -->
  <section>       <!-- Resultados -->
</main>
<footer>          <!-- Rodapé -->
```

#### `assets/css/style.css` - Design System CSS

**Variáveis Principais:**
```css
/* Cores */
--color-primary: #10b981;        /* Verde principal */
--color-primary-dark: #059669;   /* Verde escuro */

/* Espaçamento */
--space-xs: 0.25rem;  (4px)
--space-sm: 0.5rem;   (8px)
--space-md: 1rem;     (16px)
--space-lg: 1.5rem;   (24px)
--space-xl: 2rem;     (32px)

/* Tipografia */
--font-size-sm: 0.875rem;
--font-size-base: 1rem;
--font-size-lg: 1.125rem;

/* Efeitos */
--shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
--radius-md: 0.5rem;
--transition: 200ms ease-in-out;
```

**Convenção BEM:**
```css
.form { }              /* Block */
.form__input { }       /* Element */
.form__input--error { } /* Modifier */
```

#### `assets/js/script.js` - Lógica JavaScript

**Constantes de Emissão:**
```javascript
const EMISSION_FACTORS = {
    bicicleta: 0,      // kg CO²/km
    onibus: 0.089,
    moto: 0.128,
    carro: 0.192,
    caminhao: 0.378
};

const COMPENSATION_COST_PER_TON = 25;  // R$ por tonelada
const MIN_COMPENSATION_TONS = 0.05;    // Mínimo para ativar botão
```

**Função de Cálculo:**
```javascript
EMISSÃO (kg CO²) = DISTÂNCIA (km) × FATOR (kg/km)

Exemplo:
430 km × 0.192 (carro) = 82.56 kg CO²
```

#### `assets/js/routers-data.js` - Banco de Dados de Rotas

```javascript
const RoutersDB = {
    routes: [
        { origem: "São Paulo-SP", destino: "Rio de Janeiro-RJ", distancia: 430 },
        // ... mais rotas
    ],
    getAllCities(): [ /* lista de cidades */ ],
    findDistance(origin, destination): /* distância ou null */
};
```

## ✅ Progresso do projeto

 Progresso atual:  
`███████████████████████` **100% Concluído**

---

## 📚 Documentação Técnica

### Arquitetura

A aplicação segue padrão **Model-View-Controller** simplificado:

```
┌───────────────────────────────────────┐
│           CALCULADORA DE CO²          │
├───────────────────────────────────────┤
│                                       │
│  VIEW          MODEL     CONTROLLER   │
│  (HTML+CSS)  (Dados)   (JavaScript)   │
│                                       │
└───────────────────────────────────────┘
```

### Fluxo de Dados

```
1. Usuário preenche formulário
   ↓
2. JavaScript captura eventos
   ↓
3. Validação dos dados
   ↓
4. Cálculo das emissões
   ↓
5. Atualização do DOM
   ↓
6. Exibição dos resultados
```

### HTML5 Semântico

Elementos utilizados:
| Elemento | Propósito |
|----------|-----------|
| `<header>` | Cabeçalho da página |
| `<main>` | Conteúdo principal |
| `<section>` | Seção temática |
| `<article>` | Conteúdo independente |
| `<form>` | Formulário |
| `<fieldset>` | Grupo de campos |
| `<legend>` | Título do fieldset |
| `<label>` | Rótulo de input |
| `<footer>` | Rodapé |

### CSS Organização

```
VARIÁVEIS CSS
↓
RESET E ESTILOS GLOBAIS
↓
COMPONENTES (header, form, results, footer)
↓
RESPONSIVIDADE (Media Queries)
```

### JavaScript Funções Principais

**`initializeAutocomplete()`** - Popula datalist de cidades
**`showDistanceSuggestions()`** - Filtra e exibe rotas
**`selectRoute(route)`** - Auto-preenche forma ao clicar em rota
**`calculateAndDisplayResults()`** - Orquestra cálculos e exibição
**`displayBestTransportTip()`** - Mostra recomendação personalizada
**`displayCarbonCredits()`** - Exibe seção de compensação
**`handleCompensation()`** - Processa compensação de CO²

### Fórmulas

#### Cálculo de Emissão
```
Emissão (kg) = Distância (km) × Fator de Emissão (kg/km)
```

#### Cálculo de Custo de Compensação
```
Custo (R$) = Emissão (tons) × R$ 25.00 por tonelada
Árvores = Emissão (kg) ÷ 20 kg por árvore
```

#### Cálculo de Diferença
```
Diferença = Emissão Selecionada - Emissão Alternativa
Se Diferença < 0 → Economiza (mais verde)
Se Diferença > 0 → Usa mais (menos verde)
```

### Conveções e Padrões

**Nomenclatura de Variáveis:**
```javascript
const distanceInput = document.getElementById('distance');
const selectedTransport = /* valor selecionado */;
const EMISSION_FACTORS = { /* constante */ };
```

**Nomear Funções com Verbos:**
```javascript
function calculateEmission() { }
function displayResults() { }
function handleFormSubmit() { }
```

**Event Listeners:**
```javascript
button.addEventListener('click', handleClick);
form.addEventListener('submit', handleFormSubmit);
checkbox.addEventListener('change', handleToggle);
```

---

## 🛠️ Tecnologias Utilizadas

- **HTML5** - Semântica completa com elementos estruturais
- **CSS3** - Design System com variáveis e convenção BEM
- **JavaScript (Vanilla)** - Sem dependências externas
- **Responsive Design** - Mobile-first e adaptável

### Por que Vanilla JavaScript?

✅ Sem dependências externas
✅ Carregamento rápido
✅ Código simples e legível
✅ Ideal para pequenos projetos
✅ Melhor desempenho

---

## 📱 Responsividade

A aplicação é totalmente responsiva com breakpoints:

| Tela | Tamanho | Alterações |
|------|---------|-----------|
| **Mobile** | Até 480px | Fonte menor, layout 1 coluna |
| **Tablet** | Até 768px | Layout adaptado, grid 2 colunas |
| **Desktop** | Acima de 768px | Layout completo, animações |

### Teste de Responsividade

1. Abra **F12** (Developer Tools)
2. Clique em **"Responsive Design Mode"** (Ctrl+Shift+M)
3. Teste em **480px, 768px, 1024px**
4. Verifique se tudo se adapta

---

## ♿ Acessibilidade

### WCAG Compliance
- ✅ Labels associados aos inputs
- ✅ Atributos `aria-label` em elementos interativos
- ✅ Semântica HTML5 apropriada
- ✅ Contraste de cores WCAG AA
- ✅ Navegação por teclado

### Teste de Acessibilidade

**Navegação por Teclado:**
1. Pressione **Tab** para navegar
2. Pressione **Enter** para ativar botões
3. Use **Setas** para radio buttons
4. Use **Space** para checkboxes

### Exemplo de HTML Acessível

```html
<label for="origin" class="form__label">
  <span class="form__label-icon">📍</span>
  Origem:
</label>
<input 
  type="text" 
  id="origin" 
  name="origin"
  aria-label="Origem do deslocamento"
  required
>
```

---

## 🎨 Design System

### Paleta de Cores

| Cor | Hex | Uso |
|-----|-----|-----|
| Verde Principal | `#10b981` | Botões, headers |
| Verde Escuro | `#059669` | Hover, ênfase |
| Vermelho | `#ef4444` | Erro, alerta |
| Cinza Claro | `#f3f4f6` | Background |
| Cinza Escuro | `#1f2937` | Texto |

### Tipografia

- **Font-family:** System fonts (Inter, Segoe UI, etc)
- **Escala:** 0.875rem → 1.125rem
- **Line-height:** 1.5 (legibilidade)
- **Letter-spacing:** 0.5px (conforto de leitura)

### Espaçamento (Escala Modular)

- `--space-xs`: 4px
- `--space-sm`: 8px
- `--space-md`: 16px (base)
- `--space-lg`: 24px
- `--space-xl`: 32px

### Componentes BEM

```css
/* Botão */
.btn { }
.btn--primary { }
.btn--secondary { }

/* Card */
.card { }
.card__title { }
.card__content { }
.card--highlighted { }

/* Formulário */
.form { }
.form__group { }
.form__input { }
.form__label { }
```

---

## 📊 Fatores de Emissão de CO²

Emissões por quilômetro (baseado em dados de 2024):

| Transporte | Fator | Status | Observação |
|-----------|-------|--------|-----------|
| 🚴 Bicicleta | 0.000 kg/km | ✅ | Zero emissão |
| 🚌 Ônibus | 0.089 kg/km | ✅ | Transporte compartilhado |
| 🏍️ Moto | 0.128 kg/km | ✅ | Transporte individual |
| 🚗 Carro | 0.192 kg/km | ✅ | Transporte individual |
| 🚚 Caminhão | 0.378 kg/km | ✅ | Maior consumo |

---

## 💡 Dicas Úteis

### ⚡ Atalhos de Teclado
- **Tab** - Navegar entre campos
- **Enter** - Enviar formulário
- **Space** - Marcar checkbox
- **Setas** - Selecionar radio button

### 🔄 Recalcular
- Mude qualquer campo
- Clique em "Calcular Emissão" novamente
- Resultados atualizam automaticamente

### 📱 Dispositivos Móveis
- Funciona perfeitamente em smartphones e tablets
- Botões com tamanho tátil adequado
- Toque nos elementos como no desktop

### 🌙 Modo Escuro
- Alguns navegadores permitem ativar modo escuro
- Pressione **F12 → Menu → Tema Escuro**
- Aplicação se adapta automaticamente

---

## 🐛 Solução de Problemas

### ❌ "Arquivo não encontrado"
- Certifique-se de abrir o arquivo **`index.html`**
- Verifique se os arquivos estão nas pastas corretas

### ❌ "Estilos não aparecem"
- Verifique se a pasta `assets/css/` existe
- Certifique-se de que `style.css` está no local correto
- Atualize a página (**F5** ou **Ctrl+R**)

### ❌ "Calculadora não funciona"
- Verifique se a pasta `assets/js/` existe
- Certifique-se de que `script.js` e `routers-data.js` estão corretos
- Abra o console (**F12**) para ver erros
- Atualize a página

### ❌ "Rotas não aparecem"
- Verifique se `routers-data.js` está carregado
- Verifique console para mensagens de erro
- Certifique-se de que as cidades digitadas existem no banco de dados

---

## 🔧 Personalização

### Mudar Cores
1. Abra `assets/css/style.css`
2. Procure pela seção `VARIÁVEIS CSS`
3. Altere os valores das cores:
   ```css
   --color-primary: #00ff00; /* Sua cor */
   ```

### Adicionar Novos Transportes
1. Abra `assets/js/script.js`
2. Encontre `EMISSION_FACTORS`
3. Adicione:
   ```javascript
   seuTransporte: 0.150,
   ```
4. Abra `index.html` e adicione radio button

### Adicionar Novas Rotas
1. Abra `assets/js/routers-data.js`
2. Adicione à array `routes`:
   ```javascript
   { 
     origem: "Cidade A", 
     destino: "Cidade B", 
     distancia: 123 
   }
   ```

### Atualizar Créditos
1. Abra `index.html`
2. Procure na `<footer>`
3. Edite conforme necessário

---

## 📈 Estatísticas do Projeto

| Métrica | Valor |
|---------|-------|
| Linhas de HTML | ~350 |
| Linhas de CSS | ~750 |
| Linhas de JavaScript | ~600 |
| Componentes | 8+ |
| Variáveis CSS | 30+ |
| Breakpoints | 2 |
| Cores principais | 5 |
| Funções JavaScript | 15+ |

---

## 🎓 Conceitos Demonstrados

### HTML5
- ✅ Semântica apropriada
- ✅ Acessibilidade (ARIA)
- ✅ Validação nativa
- ✅ Formulários semânticos

### CSS
- ✅ Design System
- ✅ Variáveis CSS (custom properties)
- ✅ Flexbox e Grid
- ✅ Media Queries
- ✅ Transições e Animações
- ✅ Gradientes e Sombras

### JavaScript
- ✅ DOM Manipulation
- ✅ Event Listeners
- ✅ Arrow Functions
- ✅ Template Literals
- ✅ Validação de Dados
- ✅ Funções Puras
- ✅ Manipulação de Arrays

---

## 🔄 Próximas Melhorias

### Tier 1 - Próximas (Alta Prioridade)
- [ ] Integração com API real de mapas (Google Maps)
- [ ] Modo escuro (dark mode)
- [ ] Histórico de cálculos (localStorage)
- [ ] Exportar resultados em PDF

### Tier 2 - Médio Prazo
- [ ] Integração com APIs de transporte público
- [ ] Gráficos de comparação (Chart.js)
- [ ] Gamificação com badges
- [ ] Sistema de ranking de usuários
- [ ] Compartilhamento de resultados

### Tier 3 - Longo Prazo
- [ ] App mobile (React Native)
- [ ] Sincronização em nuvem (Firebase)
- [ ] Suporte multilíngue (i18n)
- [ ] Integração com redes sociais
- [ ] Análise de dados e estatísticas

---

## 👨‍💻 Autor

Desenvolvido por **Cristiano R. Rosa**  
Projeto **GitHub Copilot DIO** - 2026

---

## 📄 Licença

Este projeto é de código aberto e está disponível sob a licença **MIT**.

```
MIT License

Copyright (c) 2026 Cristiano R. Rosa

Permissão é concedida, gratuitamente, a qualquer pessoa 
que obtenha uma cópia deste software...
```

---

## 🌍 Vamos Tornar o Planeta Mais Verde!

**Desenvolvido com dedicação para um planeta mais sustentável.**

Cada escolha de transporte importa. Use esta calculadora para entender seu impacto ambiental e fazer escolhas mais conscientes para um futuro melhor! 🌱

---

### 📞 Suporte e Feedback

Se encontrar problemas ou tiver sugestões:

1. Verifique a seção "Solução de Problemas"
2. Abra o Developer Tools (F12)
3. Procure por mensagens de erro no console
4. Verifique se todos os arquivos estão no lugar certo

---

**Última atualização:** 4 de junho de 2026  
**Versão:** 1.0.0  
**Status:** ✅ Funcional e Testado
