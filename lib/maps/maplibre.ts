export async function loadMapLibre() {
  const maplibre = await import("maplibre-gl");
  return maplibre;
}
