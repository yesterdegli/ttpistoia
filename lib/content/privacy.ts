import { contactIntro } from "@/lib/content/contatti";
import { SITE } from "@/lib/site";

export type LegalSection = {
  id: string;
  title: string;
  paragraphs: string[];
  list?: string[];
};

export const privacyMeta = {
  lastUpdated: "2 settembre 2026",
  intro:
    "La presente informativa descrive come TT Pistoia asd tratta i dati personali in relazione al sito web del club. Il sito ha finalità informative: non raccoglie dati tramite moduli di contatto; l'unico canale di comunicazione indicato è costituito da email e telefono.",
};

export const privacySections: LegalSection[] = [
  {
    id: "titolare",
    title: "Titolare del trattamento",
    paragraphs: [
      `Il titolare del trattamento è ${SITE.name}, con sede operativa in ${SITE.address.line1}, ${SITE.address.line2}, ${SITE.address.line3}.`,
      `Per qualsiasi richiesta relativa alla privacy è possibile scrivere a ${SITE.email} o telefonare al ${SITE.phone} (${contactIntro.referent}).`,
    ],
  },
  {
    id: "dati",
    title: "Tipologia di dati trattati",
    paragraphs: [
      "In relazione alla navigazione del sito possono essere trattati, in modo automatico, dati tecnici quali indirizzo IP, tipo di browser, sistema operativo, pagine visitate, data e ora di accesso.",
      "Se l'utente contatta volontariamente il club via email o telefono, possono essere trattati dati identificativi e di contatto (ad esempio nome, indirizzo email, numero di telefono) e il contenuto del messaggio.",
      "Il sito non prevede registrazione utenti, newsletter, moduli di contatto online né profilazione commerciale.",
    ],
  },
  {
    id: "finalita",
    title: "Finalità e base giuridica",
    paragraphs: [
      "I dati sono trattati per le finalità indicate di seguito, ciascuna supportata da una base giuridica ai sensi del Regolamento (UE) 2016/679 (GDPR).",
    ],
    list: [
      "Garantire il corretto funzionamento, la sicurezza e la manutenzione del sito (base giuridica: legittimo interesse del titolare).",
      "Rispondere a richieste di informazioni inviate volontariamente via email o telefono (base giuridica: esecuzione di misure precontrattuali o legittimo interesse).",
      "Adempiere a obblighi di legge e difendere un diritto in sede giudiziaria, ove necessario (base giuridica: obbligo legale o legittimo interesse).",
    ],
  },
  {
    id: "conservazione",
    title: "Periodo di conservazione",
    paragraphs: [
      "I dati tecnici di navigazione sono conservati per il tempo strettamente necessario al funzionamento del sito e, di norma, per un periodo non superiore a 12 mesi, salvo obblighi di legge diversi.",
      "I dati contenuti nelle comunicazioni via email o telefono sono conservati per il tempo necessario a gestire la richiesta e, successivamente, per un periodo proporzionato alle finalità perseguite o agli obblighi di legge applicabili.",
    ],
  },
  {
    id: "destinatari",
    title: "Destinatari e responsabili del trattamento",
    paragraphs: [
      "I dati possono essere trattati da personale autorizzato del titolare e da fornitori tecnici che operano come responsabili del trattamento (ad esempio servizi di hosting e infrastruttura web), nominati per iscritto e vincolati a istruzioni documentate.",
      "I dati non sono diffusi né ceduti a terzi per finalità di marketing.",
    ],
  },
  {
    id: "terze-parti",
    title: "Servizi di terze parti",
    paragraphs: [
      "La pagina Contatti può includere una mappa interattiva fornita da Google Maps (Google Ireland Limited). Caricando la mappa, il browser può comunicare dati tecnici a Google secondo le modalità descritte nella relativa informativa privacy.",
      "Eventuali link verso siti esterni (social network, federazioni sportive, altri siti) sono gestiti dai rispettivi titolari: si consiglia di consultare le informative privacy di ciascun servizio.",
    ],
  },
  {
    id: "cookie",
    title: "Cookie e tecnologie simili",
    paragraphs: [
      "Il sito utilizza cookie necessari al funzionamento e alla memorizzazione delle preferenze sui cookie. Google Maps, nella pagina Contatti, viene caricato solo previo consenso.",
      "Per l'elenco completo, le finalità e la gestione delle preferenze consulta la Cookie policy dedicata.",
    ],
  },
  {
    id: "diritti",
    title: "Diritti dell'interessato",
    paragraphs: [
      "In qualità di interessato, ai sensi degli artt. 15–22 del GDPR, ha diritto di chiedere al titolare l'accesso ai dati, la rettifica, la cancellazione, la limitazione del trattamento, l'opposizione e la portabilità dei dati, ove applicabile.",
      "Qualora il trattamento si basi sul consenso, può revocarlo in qualsiasi momento senza pregiudicare la liceità del trattamento basato sul consenso prestato prima della revoca.",
      `Per esercitare i propri diritti può scrivere a ${SITE.email} indicando l'oggetto «Privacy» e allegando, ove necessario, un documento di identità.`,
    ],
  },
  {
    id: "reclamo",
    title: "Reclamo all'autorità di controllo",
    paragraphs: [
      "Qualora ritenga che il trattamento dei suoi dati personali violi la normativa applicabile, ha diritto di proporre reclamo al Garante per la protezione dei dati personali (www.garanteprivacy.it) o di adire l'autorità competente dello Stato membro in cui risiede abitualmente o lavora.",
    ],
  },
  {
    id: "modifiche",
    title: "Modifiche all'informativa",
    paragraphs: [
      "Il titolare si riserva di aggiornare la presente informativa per adeguarla a modifiche normative, tecniche o organizzative. La data dell'ultimo aggiornamento è indicata in alto.",
      "Si invita a consultare periodicamente questa pagina per verificare eventuali cambiamenti.",
    ],
  },
];
