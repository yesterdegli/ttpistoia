const FITET_CAMPIONATI_BASE =
  "https://portale.fitet.org/risultati/campionati/";

export function fitetStandingsEmbedUrl(camId: number) {
  return `/api/fitet/classifica?CAM=${camId}`;
}

export function fitetStandingsDirectUrl(camId: number) {
  return `${FITET_CAMPIONATI_BASE}classifica_squadre.php?CAM=${camId}`;
}
