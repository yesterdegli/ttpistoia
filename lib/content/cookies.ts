import { contactIntro } from "@/lib/content/contatti";
import type { LegalSection } from "@/lib/content/privacy";
import { SITE } from "@/lib/site";

export const cookieMeta = {
  lastUpdated: "2 settembre 2026",
  intro:
    "Questa pagina descrive i cookie e le tecnologie simili utilizzate dal sito TT Pistoia asd. Il sito è essenzialmente informativo: non utilizza strumenti di profilazione o analytics di terze parti. L'unico servizio facoltativo che può impostare cookie di terze parti è Google Maps, caricato solo previo consenso.",
};

export type CookieCategory = {
  id: keyof import("@/lib/cookie-consent").CookiePreferences;
  name: string;
  required: boolean;
  description: string;
  provider?: string;
  duration?: string;
};

export const cookieCategories: CookieCategory[] = [
  {
    id: "maps",
    name: "Google Maps",
    required: false,
    provider: "Google Ireland Limited",
    duration: "Variabile (cookie di terze parti)",
    description:
      "Utilizzato nella pagina Contatti per mostrare la mappa interattiva della palestra. Il servizio può raccogliere dati tecnici e impostare cookie secondo l'informativa di Google. La mappa non viene caricata finché non presti il consenso.",
  },
];

export const cookieSections: LegalSection[] = [
  {
    id: "cosa-sono",
    title: "Cosa sono i cookie",
    paragraphs: [
      "I cookie sono piccoli file di testo che i siti visitati possono inviare al browser dell'utente, dove vengono memorizzati per essere poi ritrasmessi agli stessi siti in occasione di visite successive.",
      "Tecnologie analoghe (ad esempio localStorage) possono essere usate per memorizzare preferenze tecniche, come la scelta relativa ai cookie.",
    ],
  },
  {
    id: "tipologie",
    title: "Tipologie utilizzate su questo sito",
    paragraphs: [
      "Il sito distingue tra cookie necessari e cookie facoltativi di terze parti.",
    ],
    list: [
      "Cookie necessari: indispensabili al funzionamento del sito e alla memorizzazione della preferenza sui cookie. Non richiedono consenso.",
      "Cookie facoltativi: servizi di terze parti attivati solo su tua scelta, come la mappa Google Maps nella pagina Contatti.",
    ],
  },
  {
    id: "elenco",
    title: "Elenco dei cookie",
    paragraphs: [
      "Di seguito le categorie attualmente previste. Puoi aggiornare le tue scelte in qualsiasi momento dalla sezione Preferenze in fondo a questa pagina o dal link «Gestisci cookie» nel footer.",
    ],
  },
  {
    id: "consenso",
    title: "Come esprimere o revocare il consenso",
    paragraphs: [
      "Al primo accesso viene mostrato un banner che permette di accettare tutti i cookie facoltativi o di proseguire con i soli cookie necessari.",
      "Puoi modificare o revocare il consenso in qualsiasi momento. La revoca non pregiudica la liceità del trattamento basato sul consenso prestato in precedenza.",
      "Puoi anche gestire i cookie dalle impostazioni del browser. La disabilitazione dei cookie necessari potrebbe impedire la corretta memorizzazione delle preferenze.",
    ],
  },
  {
    id: "terze-parti",
    title: "Cookie di terze parti",
    paragraphs: [
      "Google Maps (pagina Contatti): per maggiori informazioni consulta l'informativa privacy di Google (policies.google.com/privacy).",
      "Eventuali link verso siti esterni (social network, federazioni sportive) sono regolati dalle informative dei rispettivi titolari.",
    ],
  },
  {
    id: "titolare",
    title: "Titolare e contatti",
    paragraphs: [
      `Il titolare del trattamento è ${SITE.name}, ${SITE.address.line1}, ${SITE.address.line2}, ${SITE.address.line3}.`,
      `Per domande su cookie e privacy: ${SITE.email} o ${SITE.phone} (${contactIntro.referent}). Per l'informativa completa sui dati personali consulta la Privacy policy.`,
    ],
  },
  {
    id: "modifiche",
    title: "Aggiornamenti",
    paragraphs: [
      "Il titolare può aggiornare la presente cookie policy per adeguarla a modifiche normative o tecniche. La data dell'ultimo aggiornamento è indicata in alto.",
    ],
  },
];
