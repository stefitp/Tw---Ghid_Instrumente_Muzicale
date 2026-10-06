// Pasul 2: Datele inițiale de test și valorile permise
const FAMILII = ["coarde", "suflat", "percutie"];

const instrumente = [
  { id: 1, nume: "Chitară clasică", invatat: false, familie: "coarde" },
  { id: 2, nume: "Pian acustic", invatat: true, familie: "coarde" },
  { id: 3, nume: "Saxofon alto", invatat: false, familie: "suflat" }
];

// Pasul 3: Listarea numelor (folosește .map)
function listeazaNume(lista) {
  return lista.map((item) => item.nume);
}

// Pasul 4: Numărarea elementelor active/de învățat (folosește .filter)
function numaraDeInvatat(lista) {
  return lista.filter((item) => !item.invatat).length;
}

// Pasul 5: Căutarea case-insensitive (folosește .filter, toLowerCase, includes)
function cautaDupaNume(lista, text) {
  const query = text.toLowerCase();
  return lista.filter((item) => item.nume.toLowerCase().includes(query));
}

// Pasul 6: Generarea următorului ID (folosește .reduce)
function nextId(lista) {
  return lista.reduce((max, item) => Math.max(max, item.id), 0) + 1;
}

// Adăugarea unui element cu validare (imutabil cu spread operator)
function adaugaInstrument(lista, nume, familie = "coarde") {
  const numeCurat = nume.trim();

  // 1. Validare nume gol
  if (numeCurat === "") {
    console.log("Numele nu poate fi gol.");
    return lista;
  }

  // 2. Validare familie inexistentă
  if (!FAMILII.includes(familie)) {
    console.log(`Familie invalidă: ${familie}`);
    return lista;
  }

  // 3. Creare obiect nou
  const nou = {
    id: nextId(lista),
    nume: numeCurat,
    invatat: false,
    familie: familie
  };

  // 4. Returnare array nou
  return [...lista, nou];
}

// Pasul 7: Comutarea stării (folosește .map și spread pentru obiect)
function comutaInvatat(lista, id) {
  return lista.map((item) => {
    if (item.id === id) {
      return { ...item, invatat: !item.invatat };
    }
    return item;
  });
}

// Ștergerea unui element (folosește .filter)
function stergeInstrument(lista, id) {
  return lista.filter((item) => item.id !== id);
}

// Pasul 8: Testele manuale în consolă
console.log("--- Citire ---");
console.log("Instrumente:", listeazaNume(instrumente).join(", "));
console.log("De învățat:", numaraDeInvatat(instrumente));
console.log(
  "Căutare 'pian':",
  listeazaNume(cautaDupaNume(instrumente, "pian")).join(", ")
);

console.log("--- Adăugare ---");
let lista = adaugaInstrument(instrumente, "Tobe acustice", "percutie");
console.log("Lista nouă:", lista.length, "instrumente");
console.log("Originalul a rămas cu:", instrumente.length, "instrumente");

console.log("--- Modificare și ștergere ---");
lista = comutaInvatat(lista, 1);
console.log("După bifarea id 1, de învățat:", numaraDeInvatat(lista));
lista = stergeInstrument(lista, 3);
console.log("După ștergerea id 3:", listeazaNume(lista).join(", "));

console.log("--- Validare ---");
adaugaInstrument(lista, "");
adaugaInstrument(lista, "Harpă", "electronice");