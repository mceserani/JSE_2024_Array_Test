
// Funzione che calcola e restituisce la somma tra due vettori
function vectorAddition(a, b) {
  if (a.length !== b.length) {
    throw new Error('I due vettori devono avere la stessa lunghezza!');
  }
  return a.map((x, i) => x + b[i]);
}
  
// Funzione che calcola e restituisce il prodotto scalare tra due vettori
function dotProduct(a, b) {
  if (a.length !== b.length) {
    throw new Error('I due vettori devono avere la stessa lunghezza!');
  }
  return a.reduce((acc, x, i) => acc + x * b[i], 0);
}

// Funzione che calcola e restituisce la norma di un vettore
function norm(a) {
  return Math.sqrt(a.reduce((acc, x) => acc + x * x, 0));
}

// Funzione che calcola e restituisce il prodotto vettoriale tra due vettori di dimensione 3
function crossProduct(a, b) {
  if (a.length !== 3 || b.length !== 3) {
    throw new Error('I due vettori devono essere di dimensione 3!');
  }
  return [
    a[1] * b[2] - a[2] * b[1],
    a[2] * b[0] - a[0] * b[2],
    a[0] * b[1] - a[1] * b[0]
  ];
}

// Funzione che calcola e restituisce la media di un vettore
function mean(a) {
  return a.reduce((acc, x) => acc + x, 0) / a.length;
}

// Funzione che calcola e restituisce la mediana di un vettore
function median(a) {
  a.sort((x, y) => x - y);
  const m = a.length / 2;
  return m % 1 === 0 ? (a[m - 1] + a[m]) / 2 : a[Math.floor(m)];
}

// Funzione che calcola e restituisce i valori minimo e massimo di un vettore
function minMax(a) {
  return a.reduce((acc, x) => ({
    min: Math.min(acc.min, x),
    max: Math.max(acc.max, x)
  }), { min: Infinity, max: -Infinity });
}

export default {
  vectorAddition,
  dotProduct,
  norm,
  crossProduct,
  mean,
  median,
  minMax
}
