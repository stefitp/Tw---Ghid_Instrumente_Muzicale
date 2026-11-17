export const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:3001";

async function request(path, options = {}) {
  const res = await fetch(`${API_URL}${path}`, {
    ...options,
    headers: { "Content-Type": "application/json", ...options.headers },
  });

  if (!res.ok) {
    throw new Error(`Eroare server: ${res.status}`);
  }

  return res.status === 204 ? null : res.json();
}

export function fetchInstrumente() {
  return request("/instrumente");
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