// src/data/documenti-storici.ts
// Rassegna stampa e documenti storici del Tennistavolo Pistoia (anni '70 - 2023)
// Stessa struttura dati di storia.ts, per riutilizzare gli stessi componenti
// (YearPills, SeasonAccordion, PhotoSlider) nella nuova pagina Documenti Storici.

export interface DocumentoPhoto {
  src: string;
  alt: string;
  caption: string;
}

export interface DocumentoSection {
  id: string;           // es. "2011" oppure "Anni '70"
  yearStart: number;
  yearEnd: number;
  description: string;  // vuoto per ora: eventuale breve testo introduttivo per l'anno
  photos: DocumentoPhoto[];
}

export const documentiStorici: DocumentoSection[] = [
  {
    id: "Anni '70",
    yearStart: 1970,
    yearEnd: 1979,
    description: ``,
    photos: [
      { src: "/images/documenti-storici/gruppo-storico-dei-migliori-giocatori-toscani-degli-anni-70.webp", alt: "Gruppo storico dei migliori giocatori toscani degli anni '70 (in piedi da sinistra: Balleri, Mazzanti, Ghelardi Sandro, Cosignani, Bellotti accosciati: Salvadori jr., Migliardi P., non pervenuto)", caption: "Gruppo storico dei migliori giocatori toscani degli anni '70 (in piedi da sinistra: Balleri, Mazzanti, Ghelardi Sandro, Cosignani, Bellotti accosciati: Salvadori jr., Migliardi P., non pervenuto)" },
    ],
  },
  {
    id: "1975",
    yearStart: 1975,
    yearEnd: 1975,
    description: ``,
    photos: [
      { src: "/images/documenti-storici/tessera-fitet-di-luca-balleri-1975-e-qui-ebbe-inizio-l-avven.webp", alt: "Tessera FITET di Luca Balleri (1975) (e qui ebbe inizio l'avventura del ping pong a Pistoia...)", caption: "Tessera FITET di Luca Balleri (1975) (e qui ebbe inizio l'avventura del ping pong a Pistoia...)" },
    ],
  },
  {
    id: "1980",
    yearStart: 1980,
    yearEnd: 1980,
    description: ``,
    photos: [
      { src: "/images/documenti-storici/1980-un-pistoiese-primo-in-toscana.webp", alt: "1980 - Un pistoiese primo in Toscana", caption: "1980 - Un pistoiese primo in Toscana" },
    ],
  },
  {
    id: "1994",
    yearStart: 1994,
    yearEnd: 1994,
    description: ``,
    photos: [
      { src: "/images/documenti-storici/il-tirreno-1994-gli-allenamenti-agli-ex-combattenti.webp", alt: "Il Tirreno 1994 - Gli allenamenti agli ex-combattenti", caption: "Il Tirreno 1994 - Gli allenamenti agli ex-combattenti" },
      { src: "/images/documenti-storici/il-tirreno-stagione-1994-1995-serie-c2.webp", alt: "Il Tirreno Stagione 1994-1995 - Serie C2", caption: "Il Tirreno Stagione 1994-1995 - Serie C2" },
    ],
  },
  {
    id: "1995",
    yearStart: 1995,
    yearEnd: 1995,
    description: ``,
    photos: [
      { src: "/images/documenti-storici/il-tirreno-gennaio-1995-pancani-v-a-terni.webp", alt: "Il Tirreno Gennaio 1995 - Pancani V a Terni", caption: "Il Tirreno Gennaio 1995 - Pancani V a Terni" },
      { src: "/images/documenti-storici/la-nazione-marzo-1995-gli-allenamenti-all-istituto-d-arte.webp", alt: "La Nazione Marzo 1995 - Gli allenamenti all'Istituto d'Arte", caption: "La Nazione Marzo 1995 - Gli allenamenti all'Istituto d'Arte" },
    ],
  },
  {
    id: "1998",
    yearStart: 1998,
    yearEnd: 1998,
    description: ``,
    photos: [
      { src: "/images/documenti-storici/la-nazione-gennaio-1998-pistoia-leader-in-toscana.webp", alt: "La Nazione Gennaio 1998 - Pistoia leader in Toscana", caption: "La Nazione Gennaio 1998 - Pistoia leader in Toscana" },
    ],
  },
  {
    id: "2000",
    yearStart: 2000,
    yearEnd: 2000,
    description: ``,
    photos: [
      { src: "/images/documenti-storici/la-nazione-giugno-2000-le-vittorie-a-cascina.webp", alt: "La Nazione Giugno 2000 - Le vittorie a Cascina", caption: "La Nazione Giugno 2000 - Le vittorie a Cascina" },
    ],
  },
  {
    id: "2001",
    yearStart: 2001,
    yearEnd: 2001,
    description: ``,
    photos: [
      { src: "/images/documenti-storici/la-nazione-2001-record-statistico-di-luca-balleri.webp", alt: "La Nazione 2001 - Record statistico di Luca Balleri", caption: "La Nazione 2001 - Record statistico di Luca Balleri" },
    ],
  },
  {
    id: "2003",
    yearStart: 2003,
    yearEnd: 2003,
    description: ``,
    photos: [
      { src: "/images/documenti-storici/maggio-2003-pistoia-in-c1.webp", alt: "Maggio 2003 - Pistoia in C1", caption: "Maggio 2003 - Pistoia in C1" },
    ],
  },
  {
    id: "2004",
    yearStart: 2004,
    yearEnd: 2004,
    description: ``,
    photos: [
      { src: "/images/documenti-storici/settembre-2004-un-ottimo-inizio-d-anno-per-pistoia.webp", alt: "Settembre 2004 - Un ottimo inizio d'anno per Pistoia", caption: "Settembre 2004 - Un ottimo inizio d'anno per Pistoia" },
    ],
  },
  {
    id: "2006",
    yearStart: 2006,
    yearEnd: 2006,
    description: ``,
    photos: [
      { src: "/images/documenti-storici/settembre-2006-paolo-monti-vince-il-iv-open-a-lucca.webp", alt: "Settembre 2006 - Paolo Monti vince il IV Open a Lucca", caption: "Settembre 2006 - Paolo Monti vince il IV Open a Lucca" },
    ],
  },
  {
    id: "2007",
    yearStart: 2007,
    yearEnd: 2007,
    description: ``,
    photos: [
      { src: "/images/documenti-storici/gennaio-2007-esce-in-libreria-il-libro-di-luca-balleri-gli-a.webp", alt: "Gennaio 2007 - Esce in libreria il Libro di Luca Balleri Gli aneddoti del Tennistavolo sono raccontati al grande pubblico", caption: "Gennaio 2007 - Esce in libreria il Libro di Luca Balleri Gli aneddoti del Tennistavolo sono raccontati al grande pubblico" },
    ],
  },
  {
    id: "2008",
    yearStart: 2008,
    yearEnd: 2008,
    description: ``,
    photos: [
      { src: "/images/documenti-storici/novembre-2008-vittoria-a-prato-nel-doppio-maschile-nc.webp", alt: "Novembre 2008 - Vittoria a Prato nel doppio maschile NC", caption: "Novembre 2008 - Vittoria a Prato nel doppio maschile NC" },
    ],
  },
  {
    id: "2009",
    yearStart: 2009,
    yearEnd: 2009,
    description: ``,
    photos: [
      { src: "/images/documenti-storici/maggio-2009-vittorie-a-ripetizione-per-milo-biagini.webp", alt: "Maggio 2009 - Vittorie a ripetizione per Milo Biagini", caption: "Maggio 2009 - Vittorie a ripetizione per Milo Biagini" },
    ],
  },
  {
    id: "2010",
    yearStart: 2010,
    yearEnd: 2010,
    description: ``,
    photos: [
      { src: "/images/documenti-storici/18-maggio-2010-articolo-de-la-nazione-presenta-lo-spareggio.webp", alt: "18 Maggio 2010 - Articolo de \"La Nazione\" presenta lo spareggio per la C2", caption: "18 Maggio 2010 - Articolo de \"La Nazione\" presenta lo spareggio per la C2" },
      { src: "/images/documenti-storici/3-settembre-2010-vittoria-di-luca-balleri-al-torneo-di-bordi.webp", alt: "3 settembre 2010 - Vittoria di Luca Balleri al torneo di Bordighera", caption: "3 settembre 2010 - Vittoria di Luca Balleri al torneo di Bordighera" },
      { src: "/images/documenti-storici/14-settembre-2010-articolo-sul-tirreno-cronaca-di-san-marcel.webp", alt: "14 settembre 2010 - Articolo sul Tirreno (cronaca di San Marcello Pistoiese)", caption: "14 settembre 2010 - Articolo sul Tirreno (cronaca di San Marcello Pistoiese)" },
      { src: "/images/documenti-storici/11-novembre-2010-articolo-de-la-nazione.webp", alt: "11 novembre 2010 - Articolo de \"La Nazione\"", caption: "11 novembre 2010 - Articolo de \"La Nazione\"" },
      { src: "/images/documenti-storici/22-novembre-2010-articolo-di-milo-biagini-sulla-quinta-giorn.webp", alt: "22 novembre 2010 - Articolo di Milo Biagini sulla quinta giornata di campionato 2010-11 (dal sito www.wipnetwork.net/2010/11/sport.html)", caption: "22 novembre 2010 - Articolo di Milo Biagini sulla quinta giornata di campionato 2010-11 (dal sito www.wipnetwork.net/2010/11/sport.html)" },
      { src: "/images/documenti-storici/6-dicembre-2010-articolo-di-milo-biagini-sul-torneo-regional.webp", alt: "6 dicembre 2010 - Articolo di Milo Biagini sul torneo regionale di Poggibonsi (4-5/12/2010) (dal sito http://www.wipnetwork.net/2010/12/cronaca-locale-sport.html)", caption: "6 dicembre 2010 - Articolo di Milo Biagini sul torneo regionale di Poggibonsi (4-5/12/2010) (dal sito http://www.wipnetwork.net/2010/12/cronaca-locale-sport.html)" },
      { src: "/images/documenti-storici/13-dicembre-2010-articolo-di-milo-biagini-sulla-sesta-giorna.webp", alt: "13 dicembre 2010 - Articolo di Milo Biagini sulla sesta giornata di campionato 2010-11 (dal sito http://www.wipnetwork.net/2010/12/sport_12.html)", caption: "13 dicembre 2010 - Articolo di Milo Biagini sulla sesta giornata di campionato 2010-11 (dal sito http://www.wipnetwork.net/2010/12/sport_12.html)" },
      { src: "/images/documenti-storici/23-dicembre-2010-articolo-di-milo-biagini-sul-torneo-regiona.webp", alt: "23 dicembre 2010 - Articolo di Milo Biagini sul torneo regionale di Prato (18-19/12/2010) (dal sito http://www.wipnetwork.net/2010/12/sport_19.html)", caption: "23 dicembre 2010 - Articolo di Milo Biagini sul torneo regionale di Prato (18-19/12/2010) (dal sito http://www.wipnetwork.net/2010/12/sport_19.html)" },
      { src: "/images/documenti-storici/20-dicembre-2010-articolo-de-la-nazione.webp", alt: "20 dicembre 2010 - Articolo de \"La Nazione\"", caption: "20 dicembre 2010 - Articolo de \"La Nazione\"" },
    ],
  },
  {
    id: "2011",
    yearStart: 2011,
    yearEnd: 2011,
    description: ``,
    photos: [
      { src: "/images/documenti-storici/24-gennaio-2011-articolo-di-milo-biagini-sul-campionato-regi.webp", alt: "24 gennaio 2011 - Articolo di Milo Biagini sul campionato regionale (dal sito http://www.wipnetwork.it/articolo.php?id_post=222&rubrica=14)", caption: "24 gennaio 2011 - Articolo di Milo Biagini sul campionato regionale (dal sito http://www.wipnetwork.it/articolo.php?id_post=222&rubrica=14)" },
      { src: "/images/documenti-storici/31-gennaio-2011-articolo-di-milo-biagini-sul-campionato-regi.webp", alt: "31 gennaio 2011 - Articolo di Milo Biagini sul campionato regionale (dal sito http://www.wipnetwork.it/articolo.php?id_post=240&rubrica=14)", caption: "31 gennaio 2011 - Articolo di Milo Biagini sul campionato regionale (dal sito http://www.wipnetwork.it/articolo.php?id_post=240&rubrica=14)" },
      { src: "/images/documenti-storici/6-febbraio-2011-articolo-di-milo-biagini-sul-torneo-regional.webp", alt: "6 febbraio 2011 - Articolo di Milo Biagini sul torneo regionale di Livorno (dal sito http://www.wipnetwork.it/articolo.php?id_post=255&rubrica=14)", caption: "6 febbraio 2011 - Articolo di Milo Biagini sul torneo regionale di Livorno (dal sito http://www.wipnetwork.it/articolo.php?id_post=255&rubrica=14)" },
      { src: "/images/documenti-storici/15-febbraio-2011-articolo-di-milo-biagini-sul-campionato-reg.webp", alt: "15 febbraio 2011 - Articolo di Milo Biagini sul campionato regionale (dal sito http://www.wipnetwork.it/articolo.php?id_post=275&rubrica=14)", caption: "15 febbraio 2011 - Articolo di Milo Biagini sul campionato regionale (dal sito http://www.wipnetwork.it/articolo.php?id_post=275&rubrica=14)" },
      { src: "/images/documenti-storici/22-febbraio-2011-articolo-di-milo-biagini-sul-campionato-reg.webp", alt: "22 febbraio 2011 - Articolo di Milo Biagini sul campionato regionale (dal sito http://www.wipnetwork.it/articolo.php?id_post=285&rubrica=14)", caption: "22 febbraio 2011 - Articolo di Milo Biagini sul campionato regionale (dal sito http://www.wipnetwork.it/articolo.php?id_post=285&rubrica=14)" },
      { src: "/images/documenti-storici/6-marzo-2011-articolo-di-milo-biagini-sul-torneo-regionale-d.webp", alt: "6 marzo 2011 - Articolo di Milo Biagini sul torneo regionale di Firenze (dal sito http://www.wipnetwork.it/articolo.php?id_post=303&rubrica=14)", caption: "6 marzo 2011 - Articolo di Milo Biagini sul torneo regionale di Firenze (dal sito http://www.wipnetwork.it/articolo.php?id_post=303&rubrica=14)" },
      { src: "/images/documenti-storici/13-marzo-2011-articolo-di-milo-biagini-sul-campionato-region.webp", alt: "13 marzo 2011 - Articolo di Milo Biagini sul campionato regionale (dal sito http://www.wipnetwork.it/articolo.php?id_post=315&rubrica=14)", caption: "13 marzo 2011 - Articolo di Milo Biagini sul campionato regionale (dal sito http://www.wipnetwork.it/articolo.php?id_post=315&rubrica=14)" },
      { src: "/images/documenti-storici/21-marzo-2011-articolo-di-milo-biagini-sul-campionato-region.webp", alt: "21 marzo 2011 - Articolo di Milo Biagini sul campionato regionale (dal sito http://www.wipnetwork.it/articolo.php?id_post=334&rubrica=14)", caption: "21 marzo 2011 - Articolo di Milo Biagini sul campionato regionale (dal sito http://www.wipnetwork.it/articolo.php?id_post=334&rubrica=14)" },
      { src: "/images/documenti-storici/28-marzo-2011-articolo-di-milo-biagini-sul-campionato-region.webp", alt: "28 marzo 2011 - Articolo di Milo Biagini sul campionato regionale (dal sito http://www.wipnetwork.it/articolo.php?id_post=345&rubrica=14)", caption: "28 marzo 2011 - Articolo di Milo Biagini sul campionato regionale (dal sito http://www.wipnetwork.it/articolo.php?id_post=345&rubrica=14)" },
      { src: "/images/documenti-storici/4-aprile-2011-articolo-di-milo-biagini-sul-torneo-regionale.webp", alt: "4 aprile 2011 - Articolo di Milo Biagini sul torneo regionale di Volterra (dal sito http://www.wipnetwork.it/articolo.php?id_post=357&rubrica=14)", caption: "4 aprile 2011 - Articolo di Milo Biagini sul torneo regionale di Volterra (dal sito http://www.wipnetwork.it/articolo.php?id_post=357&rubrica=14)" },
      { src: "/images/documenti-storici/11-aprile-2011-articolo-di-milo-biagini-sul-torneo-regionale.webp", alt: "11 aprile 2011 - Articolo di Milo Biagini sul torneo regionale di San Giovanni V. (dal sito http://www.wipnetwork.it/articolo.php?id_post=367&rubrica=14)", caption: "11 aprile 2011 - Articolo di Milo Biagini sul torneo regionale di San Giovanni V. (dal sito http://www.wipnetwork.it/articolo.php?id_post=367&rubrica=14)" },
      { src: "/images/documenti-storici/15-aprile-2011-articolo-de-la-nazione.webp", alt: "15 aprile 2011 - Articolo de \"La Nazione\"", caption: "15 aprile 2011 - Articolo de \"La Nazione\"" },
      { src: "/images/documenti-storici/9-maggio-2011-articolo-di-milo-biagini-sul-campionato-region.webp", alt: "9 maggio 2011 - Articolo di Milo Biagini sul campionato regionale (dal sito http://www.wipnetwork.it/articolo.php?id_post=393&rubrica=14)", caption: "9 maggio 2011 - Articolo di Milo Biagini sul campionato regionale (dal sito http://www.wipnetwork.it/articolo.php?id_post=393&rubrica=14)" },
      { src: "/images/documenti-storici/15-maggio-2011-articolo-di-milo-biagini-sul-campionato-regio.webp", alt: "15 maggio 2011 - Articolo di Milo Biagini sul campionato regionale (dal sito http://www.wipnetwork.it/articolo.php?id_post=399&rubrica=14)", caption: "15 maggio 2011 - Articolo di Milo Biagini sul campionato regionale (dal sito http://www.wipnetwork.it/articolo.php?id_post=399&rubrica=14)" },
      { src: "/images/documenti-storici/29-maggio-2011-articolo-di-milo-biagini-sul-campionato-regio.webp", alt: "29 maggio 2011 - Articolo di Milo Biagini sul campionato regionale (dal sito http://www.wipnetwork.it/articolo.php?id_post=408&rubrica=14)", caption: "29 maggio 2011 - Articolo di Milo Biagini sul campionato regionale (dal sito http://www.wipnetwork.it/articolo.php?id_post=408&rubrica=14)" },
      { src: "/images/documenti-storici/2-giugno-2011-articolo-de-la-nazione.webp", alt: "2 giugno 2011 - Articolo de \"La Nazione\"", caption: "2 giugno 2011 - Articolo de \"La Nazione\"" },
      { src: "/images/documenti-storici/16-giugno-2011-articolo-de-la-nazione.webp", alt: "16 giugno 2011 - Articolo de \"La Nazione\"", caption: "16 giugno 2011 - Articolo de \"La Nazione\"" },
      { src: "/images/documenti-storici/9-novembre-2011-articolo-de-la-nazione.webp", alt: "9 Novembre 2011 - Articolo de \"La Nazione\"", caption: "9 Novembre 2011 - Articolo de \"La Nazione\"" },
    ],
  },
  {
    id: "2012",
    yearStart: 2012,
    yearEnd: 2012,
    description: ``,
    photos: [
      { src: "/images/documenti-storici/22-marzo-2012-articolo-de-la-nazione.webp", alt: "22 Marzo 2012 - Articolo de \"La Nazione\"", caption: "22 Marzo 2012 - Articolo de \"La Nazione\"" },
      { src: "/images/documenti-storici/6-dicembre-2012-articolo-de-la-nazione.webp", alt: "6 Dicembre 2012 - Articolo de \"La Nazione\"", caption: "6 Dicembre 2012 - Articolo de \"La Nazione\"" },
    ],
  },
  {
    id: "2013",
    yearStart: 2013,
    yearEnd: 2013,
    description: ``,
    photos: [
      { src: "/images/documenti-storici/28-aprile-2013-articolo-de-la-nazione.webp", alt: "28 aprile 2013 - Articolo de \"La Nazione\"", caption: "28 aprile 2013 - Articolo de \"La Nazione\"" },
      { src: "/images/documenti-storici/4-luglio-2013-articolo-de-la-nazione.webp", alt: "4 luglio 2013 - Articolo de \"La Nazione\"", caption: "4 luglio 2013 - Articolo de \"La Nazione\"" },
      { src: "/images/documenti-storici/2-dicembre-2013-articolo-de-la-nazione-errore-nell-articolo.webp", alt: "2 Dicembre 2013 - Articolo de \"La Nazione\" (errore nell'articolo: si tratta della scuola media Roncalli!)", caption: "2 Dicembre 2013 - Articolo de \"La Nazione\" (errore nell'articolo: si tratta della scuola media Roncalli!)" },
      { src: "/images/documenti-storici/dicembre-2013-articolo-de-la-nazione.webp", alt: "Dicembre 2013 - Articolo de \"La Nazione\"", caption: "Dicembre 2013 - Articolo de \"La Nazione\"" },
    ],
  },
  {
    id: "2014",
    yearStart: 2014,
    yearEnd: 2014,
    description: ``,
    photos: [
      { src: "/images/documenti-storici/28-aprile-2014-articolo-de-la-nazione.webp", alt: "28 Aprile 2014 - Articolo de \"La Nazione\"", caption: "28 Aprile 2014 - Articolo de \"La Nazione\"" },
    ],
  },
  {
    id: "2018",
    yearStart: 2018,
    yearEnd: 2018,
    description: ``,
    photos: [
      { src: "/images/documenti-storici/gennaio-2018-articolo-de-la-nazione.webp", alt: "Gennaio 2018 - Articolo de \"La Nazione\"", caption: "Gennaio 2018 - Articolo de \"La Nazione\"" },
    ],
  },
  {
    id: "2022",
    yearStart: 2022,
    yearEnd: 2022,
    description: ``,
    photos: [
      { src: "/images/documenti-storici/gennaio-2022-articolo-de-la-nazione-1.webp", alt: "Gennaio 2022 - Articolo de \"La Nazione\"", caption: "Gennaio 2022 - Articolo de \"La Nazione\"" },
      { src: "/images/documenti-storici/gennaio-2022-articolo-de-la-nazione-2.webp", alt: "Gennaio 2022 - Articolo de \"La Nazione\"", caption: "Gennaio 2022 - Articolo de \"La Nazione\"" },
    ],
  },
  {
    id: "2023",
    yearStart: 2023,
    yearEnd: 2023,
    description: ``,
    photos: [
      { src: "/images/documenti-storici/gennaio-2023-articolo-de-la-nazione.webp", alt: "Gennaio 2023 - Articolo de \"La Nazione\"", caption: "Gennaio 2023 - Articolo de \"La Nazione\"" },
    ],
  },
];
