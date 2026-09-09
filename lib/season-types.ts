/** Tipo generico per gallery + accordion (Storia, Documenti storici, …) */
export interface SeasonPhoto {
  src: string;
  alt: string;
  caption: string;
}

export interface SeasonContent {
  id: string;
  yearStart: number;
  yearEnd: number;
  description: string;
  photos: SeasonPhoto[];
}
