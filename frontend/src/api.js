// Toate cererile HTTP stau aici; componentele nu apelează fetch direct.
export const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:3001";

// Funcție comună: trimite JSON și aruncă eroare dacă răspunsul nu este 2xx
async function request(path, options = {}) {
  const res = await fetch(`${API_URL}${path}`, {
    ...options,
    headers: { "Content-Type": "application/json", ...options.headers },
  });

  if (!res.ok) {
    throw new Error(`Eroare server: ${res.status}`);
  }

  // 204 No Content nu are corp
  return res.status === 204 ? null : res.json();
}

export function fetchInstrumente() {
  return request("/instrumente");
}

export function fetchInstrument(id) {
  return request(`/instrumente/${id}`);
}

export function createInstrument(instrument) {
  return request("/instrumente", {
    method: "POST",
    body: JSON.stringify(instrument),
  });
}

export function updateInstrument(id, changes) {
  return request(`/instrumente/${id}`, {
    method: "PATCH",
    body: JSON.stringify(changes),
  });
}

export function deleteInstrument(id) {
  return request(`/instrumente/${id}`, {
    method: "DELETE",
  });
}