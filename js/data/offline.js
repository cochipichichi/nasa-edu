// Datos offline (fallback)
export async function getMissions(){ return fetch('../data/missions.json').then(r=>r.json()); }
export async function getAPOD(){ return fetch('../data/apod.json').then(r=>r.json()); }
export async function getTLE(){ return fetch('../data/tles.json').then(r=>r.json()); }
