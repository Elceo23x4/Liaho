export async function loadMapLibre() {
  const module = await import("maplibre-gl");
  return module;
}
