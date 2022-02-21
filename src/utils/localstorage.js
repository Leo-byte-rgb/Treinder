export function getItem(label) {
  const r = localStorage.getItem(
    `TRAINDER:${label}`,
  );

  return r;
}

export function setItem(label, item) {
  if (!(item instanceof String)) {
    localStorage.setItem(
      `TRAINDER:${label}`,
      JSON.stringify(item),
    );
  }
  localStorage.setItem(
    `TRAINDER:${label}`,
    item,
  );
}

export function removeItem(label) {
  localStorage.removeItem(
    `TRAINDER:${label}`,
  );
}
