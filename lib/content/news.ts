import type { NewsCardData } from "@/components/content/NewsCard";

export type Article = NewsCardData & {
  readingTime: string;
  standfirst: string;
  featured?: boolean;
  body: string[];
  quote?: { text: string; author: string };
  relatedSlugs?: string[];
  facts?: { label: string; value: string }[];
  imageCaption?: string;
};

export const newsCategories = [
  "Tutte",
  "Campionati",
  "Tornei",
  "Vita del TT Pistoia",
] as const;

const PLACEHOLDER = {
  date: "Data in arrivo",
  category: "Categoria in arrivo",
  title: "Titolo in arrivo",
  dek: "Descrizione in arrivo",
  standfirst: "Descrizione in arrivo",
  readingTime: "Tempo di lettura in arrivo",
  imageAlt: "Immagine in arrivo",
  imageCaption: "Didascalia in arrivo",
  body: ["Testo in arrivo"],
  quote: {
    text: "Citazione in arrivo",
    author: "Autore in arrivo",
  },
  facts: [{ label: "Dettaglio in arrivo", value: "In arrivo" }],
} as const;

function placeholderArticle(
  slug: string,
  options?: { featured?: boolean; relatedSlugs?: string[] },
): Article {
  return {
    slug,
    featured: options?.featured,
    relatedSlugs: options?.relatedSlugs,
    date: PLACEHOLDER.date,
    category: PLACEHOLDER.category,
    title: PLACEHOLDER.title,
    dek: PLACEHOLDER.dek,
    standfirst: PLACEHOLDER.standfirst,
    readingTime: PLACEHOLDER.readingTime,
    imageAlt: PLACEHOLDER.imageAlt,
    imageCaption: PLACEHOLDER.imageCaption,
    body: [...PLACEHOLDER.body],
    quote: { ...PLACEHOLDER.quote },
    facts: PLACEHOLDER.facts.map((f) => ({ ...f })),
  };
}

export const articles: Article[] = [
  placeholderArticle("coppa-estiva-regionale", {
    featured: true,
    relatedSlugs: ["nuovo-gruppo-allievi", "giornata-porte-aperte"],
  }),
  placeholderArticle("nuovo-gruppo-allievi"),
  placeholderArticle("giornata-porte-aperte"),
  placeholderArticle("promozione-serie-c2"),
  placeholderArticle("torneo-over-2000"),
  placeholderArticle("nuova-palestra"),
  placeholderArticle("settore-giovanile"),
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getFeaturedArticle(): Article {
  return articles.find((a) => a.featured) ?? articles[0];
}

export function getGridArticles(): NewsCardData[] {
  return articles.filter((a) => !a.featured).slice(0, 6);
}

export function getHomeNews(): NewsCardData[] {
  return articles.slice(0, 3).map(
    ({ slug, date, category, title, dek, imageSrc, imageAlt }) => ({
      slug,
      date,
      category,
      title,
      dek,
      imageSrc,
      imageAlt,
    }),
  );
}
