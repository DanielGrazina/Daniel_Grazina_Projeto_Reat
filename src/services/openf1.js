// src/services/openf1.js
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