const BASE_URL = "https://api.openf1.org/v1";

// Função auxiliar para lidar com respostas da API
async function fetchFromAPI(endpoint) {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`);
    
    // Se a API der erro (ex: 429 Too Many Requests), devolvemos null ou array vazio
    if (!response.ok) {
      console.warn(`Aviso API (${response.status}): ${endpoint}`);
      return null;
    }

    return await response.json();
  } catch (error) {
    console.error(`Erro de rede ao aceder a ${endpoint}:`, error);
    return null;
  }
}

export async function getSessions() {
  const data = await fetchFromAPI("/sessions");
  // Se der erro, devolve array vazio para não partir o .map()
  if (!data) return [];
  return data.sort((a, b) => new Date(b.date_start) - new Date(a.date_start));
}

export async function getSessionByKey(key) {
  const data = await fetchFromAPI(`/sessions?session_key=${key}`);
  return data || [];
}

export async function getDriversBySession(key) {
  const data = await fetchFromAPI(`/drivers?session_key=${key}`);
  return data || []; // Garante que devolve sempre um array, mesmo vazio
}

export async function getWeatherBySession(key) {
  const data = await fetchFromAPI(`/weather?session_key=${key}`);
  return data && data.length > 0 ? data[0] : null;
}

export async function getLapsByDriver(sessionKey, driverNumber) {
  const data = await fetchFromAPI(`/laps?session_key=${sessionKey}&driver_number=${driverNumber}`);
  if (!data) return [];
  
  // Filtrar voltas inválidas e ordenar
  const validLaps = data.filter(l => l.lap_duration !== null && l.lap_duration !== undefined);
  return validLaps.sort((a, b) => a.lap_duration - b.lap_duration);
}