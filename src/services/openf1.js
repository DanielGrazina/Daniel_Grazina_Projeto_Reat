const BASE_URL = "https://api.openf1.org/v1";

export async function getSessions() {
  const response = await fetch(`${BASE_URL}/sessions`);
  const data = await response.json();
  return data.sort((a, b) => new Date(b.date_start) - new Date(a.date_start));
}

export async function getSessionByKey(key) {
  const response = await fetch(`${BASE_URL}/sessions?session_key=${key}`);
  return await response.json();
}

export async function getDriversBySession(key) {
  const response = await fetch(`${BASE_URL}/drivers?session_key=${key}`);
  return await response.json();
}

export async function getWeatherBySession(sessionKey) {
  try {
    const response = await fetch(`https://api.openf1.org/v1/weather?session_key=${sessionKey}`);
    const data = await response.json();
    return data.length > 0 ? data[0] : null; 
  } catch (error) {
    console.error("Erro ao buscar weather:", error);
    return null;
  }
}

export async function getLapsByDriver(sessionKey, driverNumber) {
  try {
    const response = await fetch(`https://api.openf1.org/v1/laps?session_key=${sessionKey}&driver_number=${driverNumber}`);
    const data = await response.json();
    
    // Remover voltas que têm duração null ou undefined
    const validLaps = data.filter(l => l.lap_duration !== null && l.lap_duration !== undefined);
    
    // Ordenar voltas
    return validLaps.sort((a, b) => a.lap_duration - b.lap_duration);
    
  } catch (error) {
    console.error("Erro ao buscar voltas:", error);
    return [];
  }
}