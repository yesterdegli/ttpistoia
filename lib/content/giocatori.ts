export type Player = {
  name: string;
  category: string;
};

export type Team = {
  code: string;
  players: Player[];
};

function roster(code: string, names: string[]): Team {
  return {
    code,
    players: names.map((name) => ({ name, category: code })),
  };
}

export const teams: Team[] = [
  roster("C2", [
    "Cristoforo Biagini",
    "Paolo Gori",
    "Andrea Corsini",
    "Mirko Borgioli",
    "Monaldo Tesi",
  ]),
  roster("D1/A", [
    "Moreno Biagini",
    "Alessandro Bachini",
    "Alessio Antinolfi",
    "Massimo Ferrari",
    "Luca Ferretti",
  ]),
  roster("D1/B", [
    "Luca Pancani",
    "Gabriele Roselli",
    "Matteo Degl'innocenti",
    "Andrea Malventi",
    "Marco Burlini",
  ]),
  roster("D2/A", [
    "Antonio Frangioni",
    "Alessandro Giacomelli",
    "Massimo Venturi",
    "Simone Acerbi",
    "Fabio Frosini",
  ]),
  roster("D2/B", [
    "Guelfo Frateschi",
    "Augusto Figuereo Burgos",
    "Alessio Casini",
    "Bruno Campione",
    "Maurizio Seghieri",
  ]),
  roster("D3", [
    "Tommaso Galli",
    "Sofia Neri",
    "Riccardo Lombardi",
    "Giulia Fontana",
    "Davide Barbieri",
  ]),
];

export const giocatoriIntro =
  "Dalla prima squadra ai gruppi giovanili, gli atleti che rappresentano il TT Pistoia asd nei campionati regionali e provinciali, divisi per categoria.";
