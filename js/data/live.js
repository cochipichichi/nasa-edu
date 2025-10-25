// Hooks para datos en vivo (opcional)
// Define tus claves y endpoints aquí si deseas.
const NASA_API_KEY = ''; // agrega tu key si quieres usar APOD en vivo
export async function getAPODLive(){
  if(!NASA_API_KEY) throw new Error('Sin API key');
  const r = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`);
  return r.json();
}
// TODO: integrar TLE/ISS endpoints públicos.
