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