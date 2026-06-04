/* ========================================
   ROUTERS DATA - Database de Rotas do Brasil
   Base de dados de rotas entre cidades brasileiras
   com distâncias aproximadas em quilômetros
   ======================================== */

/**
 * Objeto global RoutersDB
 * Gerencia dados de rotas entre cidades brasileiras
 * Estrutura de cada rota: { origem: string, destino: string, distancia: number }
 */
const RoutersDB = {
  /**
   * Array de rotas com origem, destino e distância
   * Inclui: capitais, cidades regionais e principais conexões
   * Total: 50+ rotas populares do Brasil
   */
  routers: [
    // ===== ROTAS ENTRE CAPITAIS - SUDESTE =====
    { origem: 'São Paulo-SP', destino: 'Rio de Janeiro-RJ', distancia: 430 },
    { origem: 'São Paulo-SP', destino: 'Belo Horizonte-MG', distancia: 586 },
    { origem: 'Rio de Janeiro-RJ', destino: 'Belo Horizonte-MG', distancia: 456 },
    { origem: 'Rio de Janeiro-RJ', destino: 'Niterói-RJ', distancia: 25 },
    
    // ===== ROTAS ENTRE CAPITAIS - CENTRO-OESTE =====
    { origem: 'São Paulo-SP', destino: 'Brasília-DF', distancia: 1016 },
    { origem: 'Belo Horizonte-MG', destino: 'Brasília-DF', distancia: 715 },
    { origem: 'Brasília-DF', destino: 'Goiânia-GO', distancia: 209 },
    
    // ===== ROTAS ENTRE CAPITAIS - NORDESTE =====
    { origem: 'Salvador-BA', destino: 'Recife-PE', distancia: 794 },
    { origem: 'Recife-PE', destino: 'Fortaleza-CE', distancia: 736 },
    { origem: 'Fortaleza-CE', destino: 'São Luís-MA', distancia: 725 },
    { origem: 'Salvador-BA', destino: 'Fortaleza-CE', distancia: 1128 },
    { origem: 'Brasília-DF', destino: 'Salvador-BA', distancia: 1471 },
    
    // ===== ROTAS ENTRE CAPITAIS - SUL =====
    { origem: 'São Paulo-SP', destino: 'Curitiba-PR', distancia: 406 },
    { origem: 'Curitiba-PR', destino: 'Porto Alegre-RS', distancia: 1151 },
    { origem: 'Curitiba-PR', destino: 'Florianópolis-SC', distancia: 540 },
    { origem: 'Rio de Janeiro-RJ', destino: 'Curitiba-PR', distancia: 836 },
    
    // ===== ROTAS ENTRE CAPITAIS - NORTE =====
    { origem: 'Manaus-AM', destino: 'Belém-PA', distancia: 1476 },
    { origem: 'Belém-PA', destino: 'São Luís-MA', distancia: 1223 },
    
    // ===== ROTAS REGIONAIS - SÃO PAULO =====
    { origem: 'São Paulo-SP', destino: 'Campinas-SP', distancia: 95 },
    { origem: 'São Paulo-SP', destino: 'Santos-SP', distancia: 63 },
    { origem: 'São Paulo-SP', destino: 'Sorocaba-SP', distancia: 108 },
    { origem: 'São Paulo-SP', destino: 'Ribeirão Preto-SP', distancia: 312 },
    { origem: 'Campinas-SP', destino: 'Ribeirão Preto-SP', distancia: 227 },
    
    // ===== ROTAS REGIONAIS - RIO DE JANEIRO =====
    { origem: 'Rio de Janeiro-RJ', destino: 'Petrópolis-RJ', distancia: 65 },
    { origem: 'Rio de Janeiro-RJ', destino: 'Angra dos Reis-RJ', distancia: 153 },
    
    // ===== ROTAS REGIONAIS - MINAS GERAIS =====
    { origem: 'Belo Horizonte-MG', destino: 'Ouro Preto-MG', distancia: 101 },
    { origem: 'Belo Horizonte-MG', destino: 'Juiz de Fora-MG', distancia: 262 },
    { origem: 'Belo Horizonte-MG', destino: 'Montes Claros-MG', distancia: 425 },
    
    // ===== ROTAS REGIONAIS - BAHIA =====
    { origem: 'Salvador-BA', destino: 'Ilhéus-BA', distancia: 460 },
    { origem: 'Salvador-BA', destino: 'Feira de Santana-BA', distancia: 109 },
    
    // ===== ROTAS REGIONAIS - CEARÁ =====
    { origem: 'Fortaleza-CE', destino: 'Juazeiro do Norte-CE', distancia: 500 },
    { origem: 'Fortaleza-CE', destino: 'Sobral-CE', distancia: 240 },
    
    // ===== ROTAS REGIONAIS - PERNAMBUCO =====
    { origem: 'Recife-PE', destino: 'Olinda-PE', distancia: 9 },
    { origem: 'Recife-PE', destino: 'Caruaru-PE', distancia: 136 },
    
    // ===== ROTAS REGIONAIS - PARANÁ =====
    { origem: 'Curitiba-PR', destino: 'Londrina-PR', distancia: 341 },
    { origem: 'Curitiba-PR', destino: 'Maringá-PR', distancia: 404 },
    { origem: 'Curitiba-PR', destino: 'Cascavel-PR', distancia: 625 },
    
    // ===== ROTAS REGIONAIS - RIO GRANDE DO SUL =====
    { origem: 'Porto Alegre-RS', destino: 'Caxias do Sul-RS', distancia: 202 },
    { origem: 'Porto Alegre-RS', destino: 'Santa Maria-RS', distancia: 293 },
    { origem: 'Porto Alegre-RS', destino: 'Pelotas-RS', distancia: 275 },
    
    // ===== ROTAS REGIONAIS - SANTA CATARINA =====
    { origem: 'Florianópolis-SC', destino: 'Blumenau-SC', distancia: 118 },
    { origem: 'Florianópolis-SC', destino: 'Joinville-SC', distancia: 161 },
    
    // ===== ROTAS REGIONAIS - GOIÁS =====
    { origem: 'Goiânia-GO', destino: 'Anápolis-GO', distancia: 55 },
    
    // ===== ROTAS REGIONAIS - MATO GROSSO =====
    { origem: 'Cuiabá-MT', destino: 'Brasília-DF', distancia: 916 },
    
    // ===== ROTAS REGIONAIS - MATO GROSSO DO SUL =====
    { origem: 'Campo Grande-MS', destino: 'Dourados-MS', distancia: 225 },
    
    // ===== ROTAS ADICIONAIS - CONEXÕES INTER-REGIONAIS =====
    { origem: 'Rio de Janeiro-RJ', destino: 'Salvador-BA', distancia: 1560 },
    { origem: 'São Paulo-SP', destino: 'Salvador-BA', distancia: 1747 },
    { origem: 'São Paulo-SP', destino: 'Porto Alegre-RS', distancia: 1118 },
    { origem: 'Brasília-DF', destino: 'Manaus-AM', distancia: 2100 },
    { origem: 'Brasília-DF', destino: 'Recife-PE', distancia: 1872 }
  ],

  /**
   * Retorna array único e ordenado com todas as cidades das rotas
   * Útil para autocomplete ou validação de cidades
   * 
   * @returns {Array<string>} Array de nomes de cidades ordenado alfabeticamente
   */
  getAllCities: function() {
    const citiesSet = new Set();
    
    // Extrai todas as cidades de origem e destino
    this.routers.forEach(route => {
      if (route.origem) citiesSet.add(route.origem);
      if (route.destino) citiesSet.add(route.destino);
    });
    
    // Converte para array e ordena alfabeticamente
    return Array.from(citiesSet).sort();
  },

  /**
   * Busca a distância entre duas cidades
   * Suporta busca bidirecional e entrada parcial (apenas nome da cidade)
   * Remove acentos para matching mais flexível
   * 
   * @param {string} origin - Cidade de origem (ex: 'São Paulo' ou 'São Paulo-SP')
   * @param {string} destination - Cidade de destino (ex: 'Rio' ou 'Rio de Janeiro-RJ')
   * @returns {number|null} Distância em km se encontrado, null caso contrário
   */
  findDistance: function(origin, destination) {
    // Validar entrada
    if (!origin || !destination) {
      return null;
    }

    /**
     * Remove acentos de uma string para comparação mais flexível
     * Exemplo: 'São Paulo' → 'Sao Paulo'
     */
    const removeAccents = (str) => {
      return str ? str.normalize('NFD').replace(/[\u0300-\u036f]/g, '') : '';
    };

    // Normaliza entradas: remove espaços, converte para lowercase, remove acentos
    const normalizedOrigin = removeAccents(origin.trim().toLowerCase());
    const normalizedDestination = removeAccents(destination.trim().toLowerCase());

    /**
     * Verifica se um input da entrada bate com uma cidade no banco de dados
     * Suporta entrada parcial (ex: 'Sao Paulo' bate com 'Sao Paulo-SP')
     */
    const matchCity = (input, dbCity) => {
      if (!dbCity) return false;
      
      // Remove acentos da cidade do BD
      const dbNormalized = removeAccents(dbCity.toLowerCase());
      
      // Comparação exata (com UF)
      if (dbNormalized === input) {
        return true;
      }
      
      // Comparação com apenas o nome (sem UF)
      // Ex: 'sao paulo' bate com 'sao paulo-sp'
      const cityOnly = dbNormalized.split('-')[0].trim();
      if (cityOnly === input) {
        return true;
      }
      
      return false;
    };

    // Busca em ambas as direções (ida e volta)
    for (const route of this.routers) {
      // Verifica correspondência direta (origem → destino)
      const originMatch = matchCity(normalizedOrigin, route.origem);
      const destMatch = matchCity(normalizedDestination, route.destino);
      
      if (originMatch && destMatch) {
        return route.distancia;
      }

      // Verifica correspondência reversa (destino → origem)
      const originMatch2 = matchCity(normalizedOrigin, route.destino);
      const destMatch2 = matchCity(normalizedDestination, route.origem);
      
      if (originMatch2 && destMatch2) {
        return route.distancia;
      }
    }

    // Não encontrou rota
    return null;
  }
};

console.log('✓ RoutersDB carregado com sucesso');
console.log(`✓ Total de cidades: ${RoutersDB.getAllCities().length}`);
console.log(`✓ Total de rotas: ${RoutersDB.routers.length}`);
