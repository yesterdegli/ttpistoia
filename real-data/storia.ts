// src/data/storia.ts
// Storia completa del Tennistavolo Pistoia (1992 - 2023/2024)
// Generato a partire dal testo storico ufficiale e dalle foto d'archivio del vecchio sito.

export interface StoriaPhoto {
  src: string;
  alt: string;
  caption: string;
}

export interface StoriaSeason {
  id: string;           // es. "2010-2011" oppure "1992"
  yearStart: number;
  yearEnd: number;
  description: string;  // testo narrativo completo della stagione
  photos: StoriaPhoto[];
}

export const storia: StoriaSeason[] = [
  {
    id: "1992",
    yearStart: 1992,
    yearEnd: 1992,
    description: `L'attività del gruppo sportivo Tennistavolo Pistoia vede la luce all'inizio dell'anno 1992, allorché, su iniziativa personale di Luca Balleri, già noto giocatore di livello nazionale, viene richiesta e ottenuta l'assegnazione della palestra ex-combattenti in via Antonini a Pistoia, principalmente come luogo di allenamento per un esiguo numero di persone, che già in precedenza si erano avvicinate con passione e interesse al tennistavolo (Giovanni Ciraolo e Luca Pancani, nonché un già noto giocatore degli anni ottanta Gianfranco Bini).

Dallo scopo iniziale di semplice divertimento e passatempo, grazie all'opera appassionata, e soprattutto competente di Luca, si è verificata la progressiva trasformazione di un gruppo di giocatori di livello amatoriale, sprovvisti di una qualunque conoscenza tecnica dello sport praticato in veri e propri "giocatori", in grado di competere onorevolmente in manifestazioni agonistiche regionali e nazionali.

In mezzo a difficoltà di ogni tipo, sia a livello burocratico per l'assegnazione e il mantenimento della palestra, sia a livello economico, in quanto, per la mancanza iniziale di una qualsiasi forma di sponsorizzazione, si è proceduto all'acquisto dei materiali di gioco e all'affiliazione alla Federazione Italiana Tennistavolo (F.I.Te.T), avvenuta nello stesso anno (1992) di fondazione della società, grazie al sacrificio di tutti i partecipanti, l'attività si è andata progressivamente allargando e sviluppando, sia quantitativamente, coinvolgendo un numero di persone sempre crescente, che qualitativamente con l'aumento del tasso tecnico di tutti i giocatori.`,
    photos: [],
  },
  {
    id: "1993-1994",
    yearStart: 1993,
    yearEnd: 1994,
    description: `In questi mesi iniziali ha visto la luce il primo nucleo storico del Tennistavolo Pistoia: Marco Fabbri, Riccardo Frosini e i fratelli Monti (Alessandro e Paolo) e poi due giovani juniores Lorenzo Banci e Maurizio Calvani.

Dopo un primo anno di apprendistato, in cui pazientemente Luca si è occupato di impostare, consigliare nella scelta dei materiali di gioco i principianti, nonché comunicare fondamenti tecnico-tattici del tennistavolo, nella stagione 1993-94 si è iniziata l'attività agonistica del gruppo sportivo con la partecipazione al campionato a squadre F.I.Te.T. di serie D2 (in seguito ridenominato D1) e contemporaneamente al campionato U.I.S.P., organizzato dal comitato di Firenze.

I risultati sono andati immediatamente oltre qualunque aspettativa con la vittoria del campionato F.I.Te.T. di serie D2 a punteggio pieno e analogamente del campionato U.I.S.P. La squadra era così composta: Marco Fabbri, Davide Melani, Alessandro e Paolo Monti, Luca Pancani. Nel frattempo, si sono anche avuti i primi risultati individuali nei tornei regionali, organizzati, cioè, dal comitato regionale della F.I.Te.T., segno questo del continuo miglioramento del "bagaglio" tecnico-tattico dei singoli componenti della palestra.`,
    photos: [
      { src: "/images/gallery/palestra-ex-combattenti-gennaio-1994-da-sinistra-riccardo-fr.webp", alt: "Palestra Ex-Combattenti Gennaio 1994 - Da sinistra Riccardo Frosini, Paolo Monti, Renato Bresci, Alessandro Monti", caption: "Palestra Ex-Combattenti Gennaio 1994 - Da sinistra Riccardo Frosini, Paolo Monti, Renato Bresci, Alessandro Monti" },
      { src: "/images/gallery/palestra-ex-combattenti-gennaio-1994-da-sinistra-nicola-mela.webp", alt: "Palestra Ex-Combattenti Gennaio 1994 - Da sinistra Nicola Melani, Matteo Turchi, Luca Balleri, Renato Bresci, Luca Pancani, Alessandro Monti, Riccardo Frosini e Paolo Monti", caption: "Palestra Ex-Combattenti Gennaio 1994 - Da sinistra Nicola Melani, Matteo Turchi, Luca Balleri, Renato Bresci, Luca Pancani, Alessandro Monti, Riccardo Frosini e Paolo Monti" },
      { src: "/images/gallery/palestra-ex-combattenti-gennaio-1994-da-sinistra-melani-ball.webp", alt: "Palestra Ex-Combattenti Gennaio 1994 - Da sinistra Melani, Balleri, Fabbri, Frosini, Turchi, non pervenuto, Galeotti, Melani, non pervenuto", caption: "Palestra Ex-Combattenti Gennaio 1994 - Da sinistra Melani, Balleri, Fabbri, Frosini, Turchi, non pervenuto, Galeotti, Melani, non pervenuto" },
    ],
  },
  {
    id: "1994-1995",
    yearStart: 1994,
    yearEnd: 1995,
    description: `Nella stagione 1994-95, in seguito alla promozione della squadra in serie C2 (nuova denominazione della precedente D1) e, perciò, al maggior livello tecnico e agonistico degli avversari, pur perdurando la situazione di sacrificio economico da parte della società per la mancanza ormai "cronica" di una qualsiasi forma di sponsorizzazione, si è registrato un ulteriore incremento tecnico-tattico degli atleti, che ha permesso la conquista del secondo posto in campionato alle spalle del Tennistavolo Le Signe di Furlani/Giovagnoli, ma che soprattutto ha comportato il piazzamento di alcuni atleti ai primi posti nei tornei regionali disputati e per la prima volta anche in tornei nazionali di categoria. (Luca Pancani sconfitto in semifinale a Siena da Simone Cini 21-19 al terzo set e sempre Luca Pancani quinto classificato al torneo nazionale IV categoria di Terni). La squadra era composta in questa stagione da Marco Fabbri, Riccardo Frosini, Alessandro Monti, Paolo Monti (infortunato per la seconda parte della stagione) e Luca Pancani.

Intanto si verificava una situazione "paradossale" per la quale, in seguito alla prospettiva di vendita da parte dell'associazione ex-combattenti della palestra, di cui fino a quel momento la società si era valsa per gli allenamenti, il gruppo sportivo si è ritrovato improvvisamente senza una sede, in cui poter continuare l'attività.

A questo punto, principalmente grazie all'opera di mediazione con gli organi competenti, ma in particolare grazie all'interesse dimostrato per la soluzione del problema da parte dell'assessore allo sport del Comune di Pistoia, è stata assegnata la palestra dell'istituto d'arte "Policarpo Petrocchi", ambiente sicuramente confortevole, spazioso e, pertanto, molto adatto per la continuazione e lo sviluppo dell'attività.`,
    photos: [
      { src: "/images/gallery/palestra-istituto-d-arte-febbraio-1995-da-sinistra-pancani-m.webp", alt: "Palestra Istituto d'Arte Febbraio 1995 - Da sinistra Pancani, Melani, Fabbri, Banci, non pervenuto, Balleri, Frosini, non pervenuto, Guastini", caption: "Palestra Istituto d'Arte Febbraio 1995 - Da sinistra Pancani, Melani, Fabbri, Banci, non pervenuto, Balleri, Frosini, non pervenuto, Guastini" },
      { src: "/images/gallery/palestra-istituto-d-arte-febbraio-1995-da-sinistra-non-perve.webp", alt: "Palestra Istituto d'Arte Febbraio 1995 - Da sinistra non pervenuto, Melani, non pervenuto, Frosini, Fabbri, Balleri, Pancani, Monti A., Banci, Scannerini", caption: "Palestra Istituto d'Arte Febbraio 1995 - Da sinistra non pervenuto, Melani, non pervenuto, Frosini, Fabbri, Balleri, Pancani, Monti A., Banci, Scannerini" },
      { src: "/images/gallery/palestra-istituto-d-arte-marzo-1995-un-doppio.webp", alt: "Palestra Istituto d'Arte Marzo 1995 - Un doppio", caption: "Palestra Istituto d'Arte Marzo 1995 - Un doppio" },
      { src: "/images/gallery/palestra-istituto-d-arte-marzo-1995-la-prima-squadra-da-sini.webp", alt: "Palestra Istituto d'Arte Marzo 1995 - La prima squadra da sinistra Monti A., l'allenatore Balleri, Fabbri, Pancani, Monti P.", caption: "Palestra Istituto d'Arte Marzo 1995 - La prima squadra da sinistra Monti A., l'allenatore Balleri, Fabbri, Pancani, Monti P." },
      { src: "/images/gallery/palestra-istituto-d-arte-febbraio-1995-fra-gli-altri-balleri.webp", alt: "Palestra Istituto d'Arte Febbraio 1995 - Fra gli altri Balleri, Luca Pratesi, Fabbri, Monti A., Galeotti, Frosini", caption: "Palestra Istituto d'Arte Febbraio 1995 - Fra gli altri Balleri, Luca Pratesi, Fabbri, Monti A., Galeotti, Frosini" },
    ],
  },
  {
    id: "1995-1996",
    yearStart: 1995,
    yearEnd: 1996,
    description: `Nella stagione successiva 1995-96, in conseguenza dell'aumento del numero dei partecipanti alla "vita" della palestra, è stato possibile iscrivere due squadre rispettivamente al campionato regionale di serie D1 (Lorenzo Banci, il veterano Renato Bresci, Maurizio Calvani, Marco Fabbri (infortunato quasi tutta la stagione), Riccardo Frosini e Josè Ringressi) e al campionato nazionale di serie C1 (diritto quest'ultimo conquistato conseguentemente al secondo posto fatto registrare nel campionato precedente; la squadra era così composta: Massimo Mannucci (solo poche partite nel girone di ritorno), Alessandro e Paolo Monti, Luca Pancani). Il campionato di serie D1 si è chiuso con un discreto terzo posto, mentre il campionato di serie C1, anche a causa dell'altissimo livello delle squadre avversarie ha decretato l'amara retrocessione della prima squadra in serie C2. Nonostante ciò, però, l'esperienza si è rivelata positiva, comportando un ulteriore miglioramento dei partecipanti a tale campionato e di riflesso dell'intera palestra (Pancani promosso terza categoria alla fine dell'anno grazie alla brillante semifinale nel torneo di Volterra, sconfitto di misura da un giovanissimo Alessio Zuanigh).`,
    photos: [],
  },
  {
    id: "1996-1997",
    yearStart: 1996,
    yearEnd: 1997,
    description: `Nella stagione 1996-97, la società ha partecipato con due squadre ai campionati di serie C2 (squadra composta da Giovanni Ciraolo, dai fratelli Monti e da Luca Pancani) e D1 (squadra composta da Lorenzo Banci, Renato Bresci, Maurizio Calvani, Marco Fabbri e Riccardo Frosini), classificandosi rispettivamente al secondo (dietro il T.T. Artigianelli Firenze) e al primo posto con la conseguente meritata promozione in serie C2.`,
    photos: [],
  },
  {
    id: "1997-1998",
    yearStart: 1997,
    yearEnd: 1998,
    description: `Nella stagione 1997-98, entrambe le squadre hanno disputato campionati di serie C2. La prima squadra (Alessandro Monti, Paolo Monti e Luca Pancani) si è classificata al secondo posto per differenza partite vinte, pur essendo arrivata a pari punti con il T.T. AGIP Petroli Livorno. Nei conseguenti spareggi a Siena per la promozione il T.T. Pistoia ha superato nella prima giornata CIATT Firenze e T.T. Arezzo, per poi perdere nella seconda giornata con Le Signe e con T.T. AGIP Petroli Livorno, mancando così la promozione. La seconda squadra (Lorenzo Banci, Maurizio Calvani, Marco Fabbri e Riccardo Frosini ritiratosi dalle competizioni dopo poche giornate di campionato) si è ben comportata pur essendo il primo anno di permanenza nella serie C2 ottenendo una sicura salvezza.

Ricordiamo particolarmente che nel dicembre 1997 a Livorno la coppia Pancani-Fabbri vince il torneo di doppio IV cat. sconfiggendo Fausto Mazzocco-Sergio Raspi e che Alessandro Monti raggiunge nello stesso torneo la semifinale nella IV cat. Open (anche Pancani nei quarti) e che nel gennaio 1998 al torneo regionale di Volterra di IV categoria il T.T. Pistoia è risultato vincitore della speciale classifica per le società, assumendo così la leadership in Toscana, grazie alla vittoria di Lorenzo Banci nella IV cat. NC, al terzo posto di Alessandro Monti nella IV cat. Open e al piazzamento nei quarti di finale di Marco Fabbri, Paolo Monti e Luca Pancani. Alla fine della stagione i fratelli Monti e Luca Pancani verranno promossi III cat. dal Comitato Regionale Toscano.`,
    photos: [],
  },
  {
    id: "1998-1999",
    yearStart: 1998,
    yearEnd: 1999,
    description: `Nella stagione 1998-99 a causa di una serie di infortuni (molto grave a Marco Fabbri per la seconda volta "incappato" nella rottura del crociato) la società è stata costretta a inscrivere una sola squadra al campionato di serie C2 (la squadra risultava composta da Lorenzo Banci (uno sola partita disputata), Alessandro e Paolo Monti e Luca Pancani). La stagione è stata comunque molto positiva e si è conclusa con la vittoria finale che ha decretato la promozione in serie C1 (nonostante la sconfitta agli spareggi di Siena dove la squadra orfana di Luca Pancani ma con Lorenzo Banci e il recuperato Marco Fabbri non ce l'ha fatta a vincere gli incontri decisivi).`,
    photos: [],
  },
  {
    id: "1999-2000",
    yearStart: 1999,
    yearEnd: 2000,
    description: `Nella stagione 1999-2000, il T.T. Pistoia è di nuovo protagonista con due squadre rispettivamente nei campionati di serie C1 e D1. Le squadre erano rispettivamente composte da Alessandro Monti, Paolo Monti e Luca Pancani in serie C1 e Maurizio Calvani, Marco Fabbri e Simone Petruzzi in serie D1. In serie C1 anche per una serie di circostanze sfortunante (infortunio a Pancani con Marsciano all'andata e partita con Siena sempre all'andata dove veniva schierato - solo contro il T.T. Pistoia - il greco Maropoulakis falsando così il campionato), abbiamo assistito alla retrocessione in serie C2, mentre in serie D1 dopo un dominio iniziale del T.T. Pistoia con Marco Fabbri protagonista di un campionato eccezionale è stato raggiunto solo un terzo posto per le sconfitte nelle ultime due giornate con T.T. Artigianelli e T.T. Pisa.

La stagione piuttosto piatta soprattutto nei tornei regionali per il T.T. Pistoia ha avuto il suo eccezionale epilogo nel torneo regionale IV cat. di Cascina nel giugno 2000. Luca Pancani ha sbaragliato il campo sia nel doppio in coppia con Francesco Bagnolesi di S. Giovanni Valdarno battendo in finale Rovai-Bellucci, sia nel singolo IV cat. Open battendo fra gli altri i promettenti Petralli e Bonuccelli nonché in semifinale il forte Pugliesi ed in finale il compagno di squadra Marco Fabbri (vincitore del torneo IV cat. NC tenutosi nelle stesso giorno e capace di battere i forti Bellucci, Ringressi e Parronchi prima di arrendersi in una finale molto combattuta a Pancani giocando fra l'altro con una gomma sul diritto non propria).`,
    photos: [
      { src: "/images/gallery/pistoia-giugno-2000-pancani-in-difesa-tagliata-1.webp", alt: "Pistoia Giugno 2000 - Pancani in difesa tagliata", caption: "Pistoia Giugno 2000 - Pancani in difesa tagliata" },
      { src: "/images/gallery/pistoia-giugno-2000-pancani-in-difesa-tagliata-2.webp", alt: "Pistoia Giugno 2000 - Pancani in difesa tagliata", caption: "Pistoia Giugno 2000 - Pancani in difesa tagliata" },
      { src: "/images/gallery/giugno-2000-pancani-vincitore-a-cascina-in-singolo-iv-open-i.webp", alt: "Giugno 2000 - Pancani vincitore a Cascina in singolo IV Open (in finale su Fabbri) e in doppio con Bagnolesi; Fabbri vincitore NC e finalista IV Open", caption: "Giugno 2000 - Pancani vincitore a Cascina in singolo IV Open (in finale su Fabbri) e in doppio con Bagnolesi; Fabbri vincitore NC e finalista IV Open" },
      { src: "/images/gallery/giugno-2000-fabbri-vincitore-nc-sul-podio-con-giannoni-lubra.webp", alt: "Giugno 2000 - Fabbri vincitore NC sul podio con Giannoni, Lubrano ed il compianto Massimo Bianchi", caption: "Giugno 2000 - Fabbri vincitore NC sul podio con Giannoni, Lubrano ed il compianto Massimo Bianchi" },
    ],
  },
  {
    id: "2000-2001",
    yearStart: 2000,
    yearEnd: 2001,
    description: `Nella stagione 2000-2001, il T.T. Pistoia partecipa con una sola squadra (partenze di Alessandro Monti a Sesto Fiorentino in serie B2 e di Lorenzo Banci in serie C2 a Siena e quindi avversario diretto) al campionato regionale di serie C2 ed è sicuramente il campionato più negativo fin qui disputato nella sua storia: la squadra formata da Maurizio Calvani (una sola partita), Marco Fabbri, Paolo Monti e Luca Pancani non riesce mai ad esprimersi secondo il suo potenziale, anche per l'empasse iniziale dovuta al cambio della pallina (40 mm) che ha comportato una crisi di gioco sia in Marco Fabbri che in Luca Pancani, brillanti protagonisti appena 6 mesi prima a Cascina con la vecchia pallina. La stagione si chiude con un negativo quarto posto in campionato alle spalle del fortissimo Porto Santo Stefano, del non trascendentale Poggibonsi e al Siena.

All'inizio della stagione agonistica 2000-2001, la nuova sede di allenamento e gara del T.T. Pistoia è diventata la palestra dell'Istituto Einaudi di Pistoia in Viale Pacinotti`,
    photos: [],
  },
  {
    id: "2001-2002",
    yearStart: 2001,
    yearEnd: 2002,
    description: `Nella stagione 2001-2002, il T.T. Pistoia partecipa con due squadre rispettivamente ai campionati regionali di serie C2 (Marco Fabbri, Alessandro Monti, Paolo Monti, Luca Pancani) e di serie D1 (Roberto Arcuri, Moreno Biagini, Maurizio Carbone, Leonardo Mariotti, Roberto Morassi, Simone Petruzzi). Il campionato di serie D1 vede un buon rendimento del T.T. Pistoia, tenedo conto che la squadra era all'esordio in campionato; solo Petruzzi aveva partecipato nel passato ad un altro campionato regionale. Il piazzamento finale è stato un brillante terzo posto dietro il fortissimo Carrara e il più esperto Cascina. In serie C2 il T.T. Pistoia ha dovuto fronteggiare la forte squadra del CIATT Firenze composta da Falcucci, Giacobbe, Giannoni, Ringressi (5-3 sia all'andata che al ritorno per i fiorentini; ma con un match point sprecato all'andata da Monti A. su Falcucci sul 3 pari e un vantaggio di 2 set a 1 e 8-5 sprecato da Pancani sempre su Falcucci sul 3 pari al ritorno); il rendimento della squadra forse anche per l'impossibilità di non poter vincere il campionato è stato al di sotto delle attese e la stagione si è chiusa con un deludente quarto posto dietro le due squadre del CIATT Firenze ed il Siena (capace di prestazioni sempre sopra le righe quando si trova opposto al T.T. Pistoia). Si devono comunque registrare due buone prestazioni: la prima nel torneo III categoria di Carrara dove Lorenzo Banci (impegnato in questa stagione a Sesto Fiorentino in B2) è stato protagonista di un ottima prestazione sconfiggendo fra gli altri Falcucci e Petralli e sconfitto di misura da Bellini; la seconda nel torneo di chiusura IV cat. a Cascina, dove Luca Pancani ha raggiunto la finale nel singolo (vittorie fra l'altro su Vinci nei quarti e Ringressi in semifinale) sconfitto dal più forte Falcucci e la finale anche nel doppio sempre di Pancani in coppia con Marco Fabbri (sconfitta contro Falcucci-Bellucci).`,
    photos: [],
  },
  {
    id: "2002-2003",
    yearStart: 2002,
    yearEnd: 2003,
    description: `Nella stagione 2002/2003 il Tennistavolo Pistoia partecipa con due squadre ai campionati di serie C2 e di serie D1. Per il campionato regionale di serie C2 la squadra era composta da Marco Fabbri, Alessandro Monti, Paolo Monti, Luca Pancani. Dopo un brutto inizio con la sconfitta casalinga contro il T.T. Livorno di Armando Zuanigh, la squadra ha raggiunto un livello di rendimento costante che ha permesso di raggiungere il secondo posto nella regular season alle spalle della Polisportiva Portammare Pisa di Foresti, Ghelardi, Venturi e Vozu. Le quattro vittorie in altrettante partite ai playoff: 5 a 3 al San Gimignano, 5-0 alla Sestese, 5-3 all'Agip Petroli Livorno e 5-4 alla seconda squadra della Polisportiva Portammare Pisa hanno decretato la promozione in serie C1. L'ultima partita di playoff è ormai passata alla storia come la più drammatica partita giocata nei dieci anni di vita del Tennistavolo Pistoia. Sotto per 4-2, prima Alessandro Monti ha battuto 3-0 il numero uno dei pisani, Alberto Taccini, poi Luca Pancani ha sconfitto dopo aver annullato un match point Fabrizio Ciampi per 12-10 al quinto set ed infine Paolo Monti ha sconfitto Furrer dopo essere stato in svantaggio per 2 set a zero ed aver annullato due match point sul 10-8 per Furrer al quinto set, ribaltando così il risultato e chiudendo l'incontro sul 5-4 per Pistoia. La squadra di D1, orfana del giocatore più forte Simone Petruzzi che ha abbandonato l'attività, ha incontrato non poche difficoltà, ma nel girone di ritorno il rendimento è notevolmente migliorato nei titolari Biagini, Carbone, Mariotti e Morassi ma anche nelle riserve Antinolfi e Franceschi. La stagione è stata ottima anche nei tornei individuali: terzo posto nel doppio per Fabbri-Pancani nel torneo nazionale IV categoria di Roma, secondo posto di Pancani sconfitto da Armando Zuanigh a Cascina (torneo di IV categoria regionale), qualificazione e partecipazione sempre di Pancani agli italiani di III categoria a Terni e soprattutto superamento del girone eliminatorio in questa difficile competizione.`,
    photos: [],
  },
  {
    id: "2003-2004",
    yearStart: 2003,
    yearEnd: 2004,
    description: `Nella stagione 2003/2004 il Tennistavolo Pistoia partecipa con due squadre ai campionati di serie C1 e di serie D1. Per il campionato nazionale di serie C1 la squadra era composta da Luca Balleri, Lorenzo Banci, Marco Fabbri, Alessandro Monti, Paolo Monti, Luca Pancani. Il campionato si è concluso con l'amara retrocessione in serie C2 al termine di una stagione tribolata. Nonostante le due nette vittorie per 5 a 2 con il concorrente diretto D.L.F. Viareggio, la lunga assenza del numero uno Luca Balleri per infortunio è stata la principale causa del risultato negativo. La squadra era incentrata sulla costante presenza di Balleri al rientro a Pistoia, ma purtroppo una serie di infortuni hanno reso orfana la squadra del giocatore più forte e rappresentativo, che in alcune partite non pronto fisicamente ha anche deluso le aspettative.

La squadra, nonostante l'ottimo rendimento di Pancani, si è disunita, gli allenamenti sono stati condotti nel modo sbagliato e vista anche la difficoltà oggettiva di un girone più simile ad una B2 che ad una C1 la retrocessione è stata la conseguenza inevitabile. Purtroppo si è verificata nel modo più beffardo possibile per differenza partite vinte con Marsciano che ha vinto a Pistoia per 5 a 2 al termine di una sciagurata partita e che è stata sconfitta nell'ultima di ritorno per 5 a 4 con 3 punti di un ritrovato Paolo Monti (che ha giocato una parte centrale di campionato molto negativa anche per problemi tecnici per la puntinata sbagliata sul rovescio) e 2 punti di un costante Pancani. Probabilmente sarebbe bastata la presenza di Balleri influenzato in quest'ultima partita per raggiungere la salvezza. Per la serie D1 la squadra era composta da Antinolfi, Biagini, Carbone, Franceschi, Morassi. Ci si poteva aspettare un rendimento leggermente migliore nei protagonisti dell'anno precedente (in particolare Carbone), c'è stato il miglioramento netto di Antinolfi e anche alcune buone prestazioni di Morassi che hanno permesso il raggiungimento del quinto posto con 4 vittorie su 12 incontri giocati.

Nei tornei nazionali da rimarcare due prestazioni sopra le righe: Lorenzo Banci nei primi otto nel primo torneo dell'anno a Boario sconfitto dall'altoatesino Oettl e Paolo Monti nei primi 32 ai campionati italiani IV categoria sconfitto ancora dalla maledizione Oettl. Nei seguenti campionati italiani III categoria Paolo Monti ha sconfitto nel girone il numero 10 di Italia juniores e nazionale italiano ai campionati europei giovanili Simone Nasi. Deludente la stagione nei tornei di Fabbri, Pancani e Alessandro Monti. Luca Balleri è stato autore di due buone prove contro Marco Ghitalla e Pasquale De Rosa nei tornei nazionali III categoria ai quali ha partecipato.`,
    photos: [
      { src: "/images/gallery/tennis-tavolo-pistoia-al-completo-stagione-2003.webp", alt: "Tennis Tavolo Pistoia al completo - Stagione 2003", caption: "Tennis Tavolo Pistoia al completo - Stagione 2003" },
      { src: "/images/gallery/squadra-c1-in-piedi-squadra-d1-accosciati-stagione-2003.webp", alt: "Squadra C1 (in piedi) - Squadra D1 (accosciati) - Stagione 2003", caption: "Squadra C1 (in piedi) - Squadra D1 (accosciati) - Stagione 2003" },
      { src: "/images/gallery/squadra-d1-stagione-2003.webp", alt: "Squadra D1 - Stagione 2003", caption: "Squadra D1 - Stagione 2003" },
    ],
  },
  {
    id: "2004-2005",
    yearStart: 2004,
    yearEnd: 2005,
    description: `Nella stagione 2004/2005 il Tennistavolo Pistoia partecipa con due squadre ai campionati di serie C2 e di serie D1. Per il campionato di serie C2 la squadra era composta da Lorenzo Banci, Marco Fabbri, Alessandro Monti, Paolo Monti, Emanuele Decaria. Nonostante la presenza non costante di Paolo Monti e la mancanza di allenamento di Lorenzo Banci la squadra sa recuperare le due sconfitte nel girone di andata con Artigianelli e Cascina e con un girone di ritorno strepitoso (5 a 1 agli Artigianelli e 5 a 0 a Cascina) approda alla vittoria nella regular season. Ai playoff vittoria per 5 a 4 a Firenze con il CUS, amara sconfitta di misura con il CIATT Firenze per 5 a 4 nonostante due vittorie su Marco Pezzi, vittoria per 5 a 0 con Livorno, prima di arrivare alla partita decisiva contro Arezzo a Pistoia. E' la pagina più amara della storia del Tennistavolo Pistoia. Pistoia si porta 2 a 0 con vittorie di Monti Alessandro su Grigiotti e Monti Paolo su Della Giovampaola Alessio. Poi il crollo: sconfitta di misura per Lorenzo Banci con Luciano Della Giovampaola, sconfitta incredibile di Paolo Monti con Grigiotti (subisce la rimonta avanti 9 a 4 nel set decisivo), sconfitta ai vantaggi del quinto set per Alessandro Monti con Luciano Della Giovampaola, espulsione di Lorenzo Banci dopo la sconfitta ai vantaggi del quinto set con Alessio Della Giovampaola per un gesto di reazione dopo una retina dell'avversario. Probabilmente si è chiuso un capitolo importante del Tennistavolo Pistoia. Pancani già emigrato a Cascina, Paolo Monti si sposterà con Balleri a Pisa nel 2005-2006, Alessandro Monti si ritira dalle gare. Del nucleo storico rimangono a Pistoia Marco Fabbri che dichiara che non giocherà in campionato e Lorenzo Banci. In serie D1 ottimo campionato 7 vittorie e 5 sconfitte con terzo posto finale per la squadra composta da Alessio Antinolfi, Moreno Biagini, Milo Biagini, Maurizio Carbone Roberto Morassi e Sergio Conforti. Soprattutto Alessio Antinolfi si distingue con 64% di vittorie in campionato. Le nuove leve stanno migliorando e crescendo. Si apre una nuova stagione per il Tennistavolo Pistoia che significa rinnovamento e nuove vittorie.

A livello nazionale nei tornei due prestazioni di rilievo: Pancani nei primi 16 a Terni e Pancani-Banci nei primi 8 nel doppio IV cat. ai Campionati Italiani di Jesolo. In Toscana Paolo Monti 3 volte nei primi 8 nei tornei III categoria regionali con conseguente passaggio a terza categoria alla fine della stagione agonistica.`,
    photos: [
      { src: "/images/gallery/maggio-2005-pancani-finalista-a-cascina-nel-iv-open-sconfitt-1.webp", alt: "Maggio 2005 - Pancani finalista a Cascina nel IV Open sconfitto dal brasiliano Rodriguez", caption: "Maggio 2005 - Pancani finalista a Cascina nel IV Open sconfitto dal brasiliano Rodriguez" },
      { src: "/images/gallery/maggio-2005-pancani-finalista-a-cascina-nel-iv-open-sconfitt-2.webp", alt: "Maggio 2005 - Pancani finalista a Cascina nel IV Open sconfitto dal brasiliano Rodriguez", caption: "Maggio 2005 - Pancani finalista a Cascina nel IV Open sconfitto dal brasiliano Rodriguez" },
      { src: "/images/gallery/maggio-2005-pancani-finalista-a-cascina-nel-iv-open-sconfitt-3.webp", alt: "Maggio 2005 - Pancani finalista a Cascina nel IV Open sconfitto dal brasiliano Rodriguez", caption: "Maggio 2005 - Pancani finalista a Cascina nel IV Open sconfitto dal brasiliano Rodriguez" },
      { src: "/images/gallery/maggio-2005-pancani-contro-il-seconda-categoria-maurizio-ras.webp", alt: "Maggio 2005 - Pancani contro il seconda categoria Maurizio Raspi nel torneo assoluto a Cascina", caption: "Maggio 2005 - Pancani contro il seconda categoria Maurizio Raspi nel torneo assoluto a Cascina" },
    ],
  },
  {
    id: "2005-2006",
    yearStart: 2005,
    yearEnd: 2006,
    description: `Nella stagione 2005-2006, il Tennistavolo Pistoia partecipa con tre squadre per la prima volta nella sua storia ai campionati regionali di serie C2 e D1.

Due squadre in serie D1, composte rispettivamente dai seguenti atleti: Milo Biagini, Maurizio Carbone, Ivano Taddei e Lapo Taddei per la prima squadra e Sergio Conforti, Roberto Morassi, Emanuele Decaria, Matteo Venzi per la seconda.

Una squadra in serie C2 composta da: Lorenzo Banci, Marco Fabbri, Alessio Antinolfi, Roberto Nutini da Prato e Moreno Biagini.

In serie D1 ottimo campionato per la prima squadra che grazie alla concretezza di Milo Biagini e alle buone prove dei due Taddei e di Maurizio Carbone lotta fino alla fine per il secondo posto dietro un Cascina troppo forte per tutti e solo con l'ultima sconfitta a Livorno si deve accontentare del terzo posto. La seconda squadra sfortunata in molte occasioni arriva al quinto posto grazie alle ottime prestazioni di Sergio Conforti, spesso autore di tre punti, ed anche al contributo di Decaria e Morassi sempre battaglieri.

In serie C2 l'obiettivo era la salvezza ed è stata ottenuta: le note positive le prestazioni di Alessio Antinolfi in continuo miglioramento, quelle meno positive le prestazioni altalenanti di Nutini e la mancanza di allenamento durante tutta la stagione di Banci che, infatti, poi si ritira dalle competizioni (almeno per il momento) a fine stagione. Marco Fabbri gioca solo 3 partite e non può incidere sulla classifica finale.

E' stato un anno di transizione per il Tennistavolo Pistoia in serie C2 ma la ricostruzione è cominciata e spazio sarà concesso alle nuove leve nelle prossime stagioni.

Luca Pancani ancora a Cascina in B2, è protagonista di un ottima stagione a livello regionale vincitore del Torneo IV Open di Poggibonsi, finalista a Cascina (per la quarta volta su quattro partecipazioni) e vincitore del Torneo di Pontedera con la vittoria in finale sul numero 150 d'Italia Stefano Ferrini. Pancani sarà promosso terza categoria alla fine della stagione. Paolo Monti è competitivo a livello terza categoria sia in Toscana (vincitore a Prato su Cerretti) che a livello nazionale e si ritrova molto vicino alla terza nazionale in classifica F.I.Te.T.`,
    photos: [
      { src: "/images/gallery/aprile-2006-pancani-terzo-nel-torneo-barlazzi-a-firenze-scon.webp", alt: "Aprile 2006 - Pancani terzo nel torneo Barlazzi a Firenze sconfitto dal vincitore Maurizio Ghelardi (per 3-2)", caption: "Aprile 2006 - Pancani terzo nel torneo Barlazzi a Firenze sconfitto dal vincitore Maurizio Ghelardi (per 3-2)" },
      { src: "/images/gallery/giugno-2006-pancani-vincitore-a-pontedera-nel-iv-open-sul-nu-1.webp", alt: "Giugno 2006 - Pancani vincitore a Pontedera nel IV open sul numero 150 d'Italia ed ora seconda categoria Ferrini.", caption: "Giugno 2006 - Pancani vincitore a Pontedera nel IV open sul numero 150 d'Italia ed ora seconda categoria Ferrini." },
      { src: "/images/gallery/giugno-2006-pancani-vincitore-a-pontedera-nel-iv-open-sul-nu-2.webp", alt: "Giugno 2006 - Pancani vincitore a Pontedera nel IV open sul numero 150 d'Italia ed ora seconda categoria Ferrini.", caption: "Giugno 2006 - Pancani vincitore a Pontedera nel IV open sul numero 150 d'Italia ed ora seconda categoria Ferrini." },
    ],
  },
  {
    id: "2006-2007",
    yearStart: 2006,
    yearEnd: 2007,
    description: `Nella stagione 2006-2007, il Tennistavolo Pistoia partecipa con due squadre ai campionati regionali di serie C2 e D1.

In serie D1, la squadra è composta dai seguenti atleti: Maurizio Carbone, Ivano Taddei e Lapo Taddei, Moreno Biagini e Massimo Scannerini.

In serie C2 la squadra è composta da: Marco Fabbri, Alessio Antinolfi, Sergio Conforti, Milo Biagini e Alessandro Masiani.

In serie D1 grande vittoria nella regular season dopo un testa a testa con Prato (sconfitto 5 a 4 a Pistoia al termine di una partita drammatica ed equilibratissima) e Valdarno. Ottime prove di Moreno Biagini e dei due Taddei, ma anche di Maurizio Carbone. La stagione si chiude con la promozione in serie C2 negli spareggi di Firenze.

In serie C2 l'obiettivo era la salvezza anche per questa stagione ed è stata ottenuta con largo anticipo grazie alle vittorie su Livorno e su Viareggio: le note positive le prestazioni di Alessio Antinolfi e Milo Biagini in continuo miglioramento e la costanti prestazioni di Fabbri.

Nei tornei regionali grandi prestazioni di Paolo Monti vincitore di due tornei regionali IV cat. a Lucca e a Firenze (quest'ultimo dominato) e autore di un ottimo campionato in serie C1 con il Pisa che lo porterà nei primi 460 d'Italia e quindi III categoria alla fine della stagione. Dopo Balleri è la migliore classifica nazionale di sempre ottenuta da un pongista pistoiese.

Luca Pancani ancora a Cascina in C1, è protagonista di un ottima stagione in campionato (11 vinte e 6 perse). Il Cascina risulterà promosso in serie B2 alla fine della stagione negli spareggi di Terni. Nei tornei prestazioni altalenanti anche se la vittoria sul numero 190 d'Italia Esposito nel torneo di Terni vale una stagione.

Nei tornei regionali ottime prestazioni di Alessio Antinolfi ormai a ridosso della IV categoria numerata in classifica regionale e di Lapo Taddei che arriva nei primi 8 nel torneo NC di Cascina.

Milo Biagini molto costante nei tornei NC dove passa sempre il girone ed è autore di buone prove.`,
    photos: [
      { src: "/images/gallery/7-gennaio-2007-monti-vincitore-del-quarta-categoria-e-semifi-1.webp", alt: "7 Gennaio 2007 - Monti vincitore del quarta categoria e semifinalista nel terza al Torneo \"G. Barlazzi\" di Firenze", caption: "7 Gennaio 2007 - Monti vincitore del quarta categoria e semifinalista nel terza al Torneo \"G. Barlazzi\" di Firenze" },
      { src: "/images/gallery/7-gennaio-2007-monti-vincitore-del-quarta-categoria-e-semifi-2.webp", alt: "7 Gennaio 2007 - Monti vincitore del quarta categoria e semifinalista nel terza al Torneo \"G. Barlazzi\" di Firenze", caption: "7 Gennaio 2007 - Monti vincitore del quarta categoria e semifinalista nel terza al Torneo \"G. Barlazzi\" di Firenze" },
    ],
  },
  {
    id: "2007-2008",
    yearStart: 2007,
    yearEnd: 2008,
    description: `Nella stagione 2007-2008, il Tennistavolo Pistoia partecipa con quattro squadre (prima volta nella storia) ai campionati regionali di serie C2, D1 (2 squadre) e alla neonata D2.

In serie C2, la squadra è composta dai seguenti atleti: Ivano Taddei e Lapo Taddei, Alessio Antinolfi, Milo Biagini e Marco Fabbri. In serie D1, la squadra "A" è composta da Marco Aresu, Nicola Melani, Sergio Conforti, Massimo Scannerini e Moreno Biagini; la squadra "B" è composta da Massimo Pilato, Maurizio Carbone, Marco Ulivagnoli, Alessandro Masiani e Roberto Morassi.

Anche per questa stagione l'obiettivo dichiarato in un girone molto competitivo di C2 era la salvezza raggiunta in anticipo nonostante il serio infortunio che ha costretto Alessio Antinolfi all'inattività per alcuni mesi. Il settimo posto finale non è esplicativo comunque dei progressi di Antinolfi e dei giovani Lapo Taddei e Milo Biagini sempre più competitivi anche nei tornei regionali e nazionali di categoria. In serie D1, le due squadre hanno ben figurato chiudendo entrambe al sesto posto con molti debuttanti guidati da Marco Aresu, Moreno Biagini e Roberto Morassi. Alessandro Masiani e Nicola Melani si sono distinti per l'attacamento alla maglia, l'impegno e i miglioramenti tecnici conseguiti durante la stagione agonistica.

In serie D2 la nuova squadra composta da Guelfo Frateschi, Claudio Uggiosi, Claudio Clamori, Stefano Corzani, Alessandro Guarino Lo Bianco, Alfonso Santaniello, Alessandro Zoppi, sospinta da Frateschi e Uggiosi, ha dominato il campionato con 15 vittorie e 1 sola sconfitta ottenendo la meritata promozione in serie D1. E' una squadra composta per lo più da dipendenti di Trenitalia che per la prima volta si affacciavano alle competizioni FITeT.

Fuori da Pistoia, Paolo Monti a Pisa è stato protagonista di una stagione molto brillante in serie C1 e nei tornei nazionali terza categoria (spesso vincitore di due partire nel girone). Paolo Monti chiuderà la stagione al 346 posto in Italia (320 come migliore piazzamento durante la stagione), rimanendo classificato terza categoria, laddove solo Luca Balleri nella storia di Pistoia era riuscito per svariate stagioni. Luca Pancani ancora a Cascina in B2 non brilla in campionato (solo due vittorie nella stagione) ma è protagonista in regione al torneo IV categoria di Lucca (semifinale) e a quello di Volterra (finale persa contro il senese Cosci per 3-2).`,
    photos: [],
  },
  {
    id: "2008-2009",
    yearStart: 2008,
    yearEnd: 2009,
    description: `Nella stagione 2008-2009, il Tennistavolo Pistoia partecipa con quattro squadre ai campionati regionali di serie C2, D1 (2 squadre) e alla serie D2.

In serie C2, la squadra è composta dai seguenti atleti: Ivano Taddei, Lapo Taddei, Alessio Antinolfi, Milo Biagini e Marco Fabbri. Posta in un girone di ferro, la prima squadra stenta molto anche per l'assenza di Marco Fabbri per tutto il girone di andata. A metà campionato Pistoia non ha raccolto nemmeno una vittoria perdendo di misura con Sesto, Cascina e Viareggio. La situazione disperata convince il fondatore della società, Luca Balleri, a tornare a giocare dopo il ritiro per un serio infortunio al braccio. Dopo tre lunghi anni, Luca torna alle gare e convince anche Marco Fabbri a dare supporto. Nella prima del girone di ritorno Pistoia vince facile con il Pisa e nella seconda passa 5-4 a Sesto in una partita molto equilibrata con 3 punti di Balleri e 2 di un solido Antinolfi. Livorno, in lotta per la promozione, intimorito, chiede di rimandare la partita. Si gioca, quindi, a Lucca e qui Luca Balleri stecca, perdendo con Alessi anche se vince con Marco Galli. Antinolfi non decolla e Marco Fabbri perde una partita di poco con Alessi. Finisce 5-1. Con Livorno, Pistoia si batte bene e paga forse l'errore di schierare il giovane Lapo Taddei nella prima partita al posto di Antinolfi. Nonostante i tre punti di Balleri che convince contro Bagnoli e Mazzocco e 1 punto di Fabbri che perde dopo un match point annullato con Bagnoli, la partita finisce 5-4 per Livorno. Nella partita successiva ultima spiaggia contro il Cascina ma una prestazione superlativa di Mainardi che batte anche Balleri dà la vittoria a Cascina per 5-3 con due punti di un solidissimo Denis Gradi.

Balleri chiude con 14 vittorie e 3 sconfitte (Alessi, Mainardi e Pugliesi).

Pistoia per la prima volta nella storia retrocede dalla serie C2 in serie D1.

In serie D1, la squadra "A" è composta da Marco Aresu, Sergio Conforti, Moreno Biagini, Nicola Melani, Claudio Uggiosi, Alessandro Zoppi, Guelfo Frateschi; la squadra "B" è composta da Maurizio Carbone, Marco Ulivagnoli, Alessandro Masiani e Roberto Morassi a cui si aggiunge il nuovo arrivato Davide Ruggiero che parte in serie D2 e poi passa in D1.

In serie D1 la squadra "B" fa un campionato tranquillo e si salva agevolmente. La squadra "A" lotta ma non riesce ad evitare l'ultimo posto e retrocede in serie D2.

In serie D2 giocano Capecchi, Guarino, Paolo Seraglini, Clamori, Stefano Corzani, Davide Ruggiero, Massimo Rosi e il fratello di Ivano, Aldo Taddei, al ritorno alle gare dopo più di 20 anni.

Arriviamo ultimi con due vittorie ma non demeritiamo e diamo la possibilità di crescita in particolare a Paolo Seraglini e Davide Ruggiero.

Nei tornei regionali da segnalare, Antinolfi che vince il doppio NC a Prato in coppia con Lapo Taddei e sempre Antinolfi che si impone nel singolo IV categoria NC a Cascina con Davide Ruggiero sorprendentemente nei primi otto. Milo Biagini dimostra progressi importanti nel finale di stagione, arrivando in finale al torneo under 21 di Firenze, sconfitto da Milli, in semifinale a Volterra nel IV NC e vittorioso nel Memorial Trappolini, sconfiggendo Antinolfi in semifinale e Mori in finale. Per Pancani, ancora a Cascina in serie C1, prima parte della stagione da dimenticare a causa dell'obbligato cambio di puntinata. Nella seconda parte Pancani si attesta sul 50% in C1 e soprattutto arriva nei primi otto nel torno III regionale a San Giovanni Valdarno sconfitto di misura da Manzini, nei primi otto a Livorno sconfitto dal vincitore Giovannini, nei primi 16 nel torneo nazionale di Terni (500 partecipanti), sconfiggendo Mugellini, il giovane Silveri e l'esperto Maietti e nei primi 64 ai Campionati Italiani a Bari vittorioso però sul numero 400 d'Italia l'altoatesino Trafojer. Paolo Monti partecipa per la prima volta ad un campionato di serie B2 a Poggibonsi e con alti e bassi ben si comporta rimanendo terza categoria a fine stagione anche grazie ad importanti vittorie nei tornei nazionali.`,
    photos: [
      { src: "/images/gallery/vittoria-a-prato-nel-doppio-nc-di-antinolfi-taddei-ottobre-2.webp", alt: "Vittoria a Prato nel doppio NC di Antinolfi/Taddei - Ottobre 2008", caption: "Vittoria a Prato nel doppio NC di Antinolfi/Taddei - Ottobre 2008" },
      { src: "/images/gallery/la-foto-in-palestra-per-festeggiare-la-vittoria-ottobre-2008.webp", alt: "La foto in palestra per festeggiare la vittoria - Ottobre 2008", caption: "La foto in palestra per festeggiare la vittoria - Ottobre 2008" },
      { src: "/images/gallery/marzo-2009-squadra-d1-tt-pistoia-a-da-sinistra-moreno-biagin.webp", alt: "Marzo 2009 - Squadra D1: TT Pistoia \"A\". Da sinistra: Moreno Biagini, Guelfo Frateschi, Marco Aresu", caption: "Marzo 2009 - Squadra D1: TT Pistoia \"A\". Da sinistra: Moreno Biagini, Guelfo Frateschi, Marco Aresu" },
      { src: "/images/gallery/marzo-2009-squadra-d1-tt-pistoia-b-da-sinistra-maurizio-carb.webp", alt: "Marzo 2009 - Squadra D1: TT Pistoia \"B\". Da sinistra: Maurizio Carbone, Alessandro Masiani, Roberto Morassi, Davide Ruggiero", caption: "Marzo 2009 - Squadra D1: TT Pistoia \"B\". Da sinistra: Maurizio Carbone, Alessandro Masiani, Roberto Morassi, Davide Ruggiero" },
      { src: "/images/gallery/marzo-2009-squadra-d1-tt-pistoia-b-altra-formazione-da-sinis.webp", alt: "Marzo 2009 - Squadra D1: TT Pistoia \"B\" (altra formazione). Da sinistra: Marco Ulivagnoli, Roberto Morassi, Alessandro Masiani", caption: "Marzo 2009 - Squadra D1: TT Pistoia \"B\" (altra formazione). Da sinistra: Marco Ulivagnoli, Roberto Morassi, Alessandro Masiani" },
      { src: "/images/gallery/tt-pistoia-foto-di-gruppo-maggio-2009-da-sinistra-roberto-mo.webp", alt: "TT Pistoia, foto di gruppo (maggio 2009). Da sinistra: Roberto Morassi, Davide Ruggiero, Milo Biagini, Marco Ulivagnoli, Luca Balleri, Lapo Taddei, Ivano Taddei, Alessio Antinolfi, Luca Pancani, Marco Aresu, Paolo Monti. Alcuni atleti sono assenti.", caption: "TT Pistoia, foto di gruppo (maggio 2009). Da sinistra: Roberto Morassi, Davide Ruggiero, Milo Biagini, Marco Ulivagnoli, Luca Balleri, Lapo Taddei, Ivano Taddei, Alessio Antinolfi, Luca Pancani, Marco Aresu, Paolo Monti. Alcuni atleti sono assenti." },
    ],
  },
  {
    id: "2009-2010",
    yearStart: 2009,
    yearEnd: 2010,
    description: `Nella stagione 2009-2010, il Tennistavolo Pistoia partecipa con tre squadre ai campionati regionali di serie D1.

La prima squadra è composta dai seguenti atleti: Alessio Antinolfi, Milo Biagini, Moreno Biagini, Davide Ruggiero e Marco Fabbri (una sola partita). Pistoia domina e vince tutte le partite della regular season. Ai playoff a Pistoia, si gioca la promozione contro la squadra di Limite sull'Arno che schiera Matteo Petralli tornato alle gare dopo molti anni. Petralli fa tre punti e Billi due. Pistoia è sconfitta per 5-3 con il solo Antinolfi che gioca a discreti livelli. Bloccati dall'emozione sia Milo Biagini che Davide Ruggiero giocano sotto tono. Non è finita a Livorno nel secondo turno dei playoff fra le perdenti c'è ancora un posto in palio. Pistoia vince con Valdarno per 5-3 e gioca in finale con il Bernini Livorno. Finisce 5-1 per Livorno con due punti di un fortissimo Viterbo, due punti di Troiani e uno di Caputi. Per Pistoia un solo punto del meno esperto Davide Ruggiero che lotta come un leone. Stecca soprattutto Alessio Antinolfi e Milo Biagini perde anche per un po' di sfortuna con Viterbo una partita che poteva girare il match. Pistoia fallisce la promozione in C2 sul campo, promozione che ottiene per le rinunce del Valdarno e del Lucca a fine agosto.

La seconda squadra è composta da Aresu Marco (operato al ginocchio e praticamente assente tutta la stagione), Corzani Stefano, Frateschi Guelfo, Noga Tomasz Stanislaw, Oclinaria Harold, Rosi Luca, Seraglini Paolo, Tesi Riccardo, Ulivagnoli Marco. Ottiene la salvezza in un girone molto difficile con il polacco Noga che dà l'impulso positivo, Paolo Seraglini che si attesta al 50% e Guelfo Frateschi che dà il suo contributo. Soffrono Harold Oclinaria e Luca Rosi (al primo campionato) ma alla fine riescono a vincere almeno una partita.

La terza squadra è composta da Ardinghi Andrea, Carbone Maurizio, Masiani Alessandro, Morassi Roberto, Taddei Aldo, Taddei Ivano. La salvezza arriva all'ultima giornata in una drammatica partita a Prato che Pistoia vince per 5-4 con tre punti di un solido Aldo Taddei e due punti di Roberto Morassi che vince sul 4 pari dopo un'annata tribolata per una operazione di ernia.

Nei tornei regionali da segnalare, Antinolfi che vince contro Galli, Muratori a San Giovanni Valdarno e Ciampi Fabrizio a Cascina, raggiungendo i quarti di finale nel IV Open e passa quarta categoria alla fine dell'anno. Anche Milo Biagini brilla ai tornei con diversi piazzamenti nei tornei NC e buone prestazioni negli Open e ottiene anche lui il passaggio a quarta categoria. Davide Ruggiero raggiunge la semifinale a Firenze sconfiggendo ai quarti Canesi con una rimonta da 2-0. Riccardo Tesi sempre a Firenze al ritorno in un torneo dopo trenta anni passa il girone e un turno e perde dal favorito Petralli, sconfitto poi da Milo Biagini. Pancani gioca la stagione più deludente di sempre e raccoglie poco sia in regione che in nazione. Paolo Monti non partecipa a tornei regionali ma solo al nazionale di Livorno dove vince una importante partita. Monti gioca solo poche partite in C2 a Poggibonsi per la nascita del secondo figlio, Pancani gioca pochissimo a Cascina in C1 per una serie di eventi negativi che hanno visto il Cascina rischiare la retrocessione. Lapo Taddei a Prato in C1 compie il salto di qualità e vince contro Fabrizio Ciampi, Marco Del Guasta e Massimo Ferri e quasi riesce a trascinare alla salvezza il Prato.`,
    photos: [
      { src: "/images/gallery/3-aprile-2010-milo-biagini-terzo-classificato-al-torneo-nc-d.webp", alt: "3 Aprile 2010 - Milo Biagini terzo classificato al torneo NC di Firenze", caption: "3 Aprile 2010 - Milo Biagini terzo classificato al torneo NC di Firenze" },
      { src: "/images/gallery/3-aprile-2010-milo-biagini-a-firenze-in-attesa-del-servizio.webp", alt: "3 Aprile 2010 - Milo Biagini a Firenze in attesa del servizio", caption: "3 Aprile 2010 - Milo Biagini a Firenze in attesa del servizio" },
      { src: "/images/gallery/aprile-2010-luca-balleri-al-torneo-di-firenze.webp", alt: "Aprile 2010 - Luca Balleri al torneo di Firenze", caption: "Aprile 2010 - Luca Balleri al torneo di Firenze" },
      { src: "/images/gallery/24-aprile-2010-davide-ruggiero-terzo-classificato-al-torneo.webp", alt: "24 Aprile 2010 - Davide Ruggiero terzo classificato al torneo regionale NC di Firenze", caption: "24 Aprile 2010 - Davide Ruggiero terzo classificato al torneo regionale NC di Firenze" },
      { src: "/images/gallery/aprile-2010-torneo-di-firenze-alcune-immagini-di-alessio-ant-1.webp", alt: "Aprile 2010 - Torneo di Firenze - alcune immagini di Alessio Antinolfi, Milo Biagini, Roberto Morassi, Luca Pancani, Davide Ruggiero e Paolo Seraglini", caption: "Aprile 2010 - Torneo di Firenze - alcune immagini di Alessio Antinolfi, Milo Biagini, Roberto Morassi, Luca Pancani, Davide Ruggiero e Paolo Seraglini" },
      { src: "/images/gallery/aprile-2010-torneo-di-firenze-alcune-immagini-di-alessio-ant-2.webp", alt: "Aprile 2010 - Torneo di Firenze - alcune immagini di Alessio Antinolfi, Milo Biagini, Roberto Morassi, Luca Pancani, Davide Ruggiero e Paolo Seraglini", caption: "Aprile 2010 - Torneo di Firenze - alcune immagini di Alessio Antinolfi, Milo Biagini, Roberto Morassi, Luca Pancani, Davide Ruggiero e Paolo Seraglini" },
      { src: "/images/gallery/aprile-2010-torneo-di-firenze-alcune-immagini-di-alessio-ant-3.webp", alt: "Aprile 2010 - Torneo di Firenze - alcune immagini di Alessio Antinolfi, Milo Biagini, Roberto Morassi, Luca Pancani, Davide Ruggiero e Paolo Seraglini", caption: "Aprile 2010 - Torneo di Firenze - alcune immagini di Alessio Antinolfi, Milo Biagini, Roberto Morassi, Luca Pancani, Davide Ruggiero e Paolo Seraglini" },
      { src: "/images/gallery/aprile-2010-torneo-di-firenze-alcune-immagini-di-alessio-ant-4.webp", alt: "Aprile 2010 - Torneo di Firenze - alcune immagini di Alessio Antinolfi, Milo Biagini, Roberto Morassi, Luca Pancani, Davide Ruggiero e Paolo Seraglini", caption: "Aprile 2010 - Torneo di Firenze - alcune immagini di Alessio Antinolfi, Milo Biagini, Roberto Morassi, Luca Pancani, Davide Ruggiero e Paolo Seraglini" },
      { src: "/images/gallery/aprile-2010-torneo-di-firenze-alcune-immagini-di-alessio-ant-5.webp", alt: "Aprile 2010 - Torneo di Firenze - alcune immagini di Alessio Antinolfi, Milo Biagini, Roberto Morassi, Luca Pancani, Davide Ruggiero e Paolo Seraglini", caption: "Aprile 2010 - Torneo di Firenze - alcune immagini di Alessio Antinolfi, Milo Biagini, Roberto Morassi, Luca Pancani, Davide Ruggiero e Paolo Seraglini" },
      { src: "/images/gallery/aprile-2010-torneo-di-firenze-alcune-immagini-di-alessio-ant-6.webp", alt: "Aprile 2010 - Torneo di Firenze - alcune immagini di Alessio Antinolfi, Milo Biagini, Roberto Morassi, Luca Pancani, Davide Ruggiero e Paolo Seraglini", caption: "Aprile 2010 - Torneo di Firenze - alcune immagini di Alessio Antinolfi, Milo Biagini, Roberto Morassi, Luca Pancani, Davide Ruggiero e Paolo Seraglini" },
      { src: "/images/gallery/aprile-2010-torneo-di-firenze-alcune-immagini-di-alessio-ant-7.webp", alt: "Aprile 2010 - Torneo di Firenze - alcune immagini di Alessio Antinolfi, Milo Biagini, Roberto Morassi, Luca Pancani, Davide Ruggiero e Paolo Seraglini", caption: "Aprile 2010 - Torneo di Firenze - alcune immagini di Alessio Antinolfi, Milo Biagini, Roberto Morassi, Luca Pancani, Davide Ruggiero e Paolo Seraglini" },
      { src: "/images/gallery/aprile-2010-torneo-di-firenze-alcune-immagini-di-alessio-ant-8.webp", alt: "Aprile 2010 - Torneo di Firenze - alcune immagini di Alessio Antinolfi, Milo Biagini, Roberto Morassi, Luca Pancani, Davide Ruggiero e Paolo Seraglini", caption: "Aprile 2010 - Torneo di Firenze - alcune immagini di Alessio Antinolfi, Milo Biagini, Roberto Morassi, Luca Pancani, Davide Ruggiero e Paolo Seraglini" },
      { src: "/images/gallery/aprile-2010-torneo-di-firenze-alcune-immagini-di-alessio-ant-9.webp", alt: "Aprile 2010 - Torneo di Firenze - alcune immagini di Alessio Antinolfi, Milo Biagini, Roberto Morassi, Luca Pancani, Davide Ruggiero e Paolo Seraglini", caption: "Aprile 2010 - Torneo di Firenze - alcune immagini di Alessio Antinolfi, Milo Biagini, Roberto Morassi, Luca Pancani, Davide Ruggiero e Paolo Seraglini" },
      { src: "/images/gallery/aprile-2010-torneo-di-firenze-alcune-immagini-di-alessio-ant-10.webp", alt: "Aprile 2010 - Torneo di Firenze - alcune immagini di Alessio Antinolfi, Milo Biagini, Roberto Morassi, Luca Pancani, Davide Ruggiero e Paolo Seraglini", caption: "Aprile 2010 - Torneo di Firenze - alcune immagini di Alessio Antinolfi, Milo Biagini, Roberto Morassi, Luca Pancani, Davide Ruggiero e Paolo Seraglini" },
      { src: "/images/gallery/aprile-2010-torneo-di-firenze-alcune-immagini-di-alessio-ant-11.webp", alt: "Aprile 2010 - Torneo di Firenze - alcune immagini di Alessio Antinolfi, Milo Biagini, Roberto Morassi, Luca Pancani, Davide Ruggiero e Paolo Seraglini", caption: "Aprile 2010 - Torneo di Firenze - alcune immagini di Alessio Antinolfi, Milo Biagini, Roberto Morassi, Luca Pancani, Davide Ruggiero e Paolo Seraglini" },
      { src: "/images/gallery/aprile-2010-torneo-di-firenze-alcune-immagini-di-alessio-ant-12.webp", alt: "Aprile 2010 - Torneo di Firenze - alcune immagini di Alessio Antinolfi, Milo Biagini, Roberto Morassi, Luca Pancani, Davide Ruggiero e Paolo Seraglini", caption: "Aprile 2010 - Torneo di Firenze - alcune immagini di Alessio Antinolfi, Milo Biagini, Roberto Morassi, Luca Pancani, Davide Ruggiero e Paolo Seraglini" },
      { src: "/images/gallery/aprile-2010-torneo-di-firenze-alcune-immagini-di-alessio-ant-13.webp", alt: "Aprile 2010 - Torneo di Firenze - alcune immagini di Alessio Antinolfi, Milo Biagini, Roberto Morassi, Luca Pancani, Davide Ruggiero e Paolo Seraglini", caption: "Aprile 2010 - Torneo di Firenze - alcune immagini di Alessio Antinolfi, Milo Biagini, Roberto Morassi, Luca Pancani, Davide Ruggiero e Paolo Seraglini" },
      { src: "/images/gallery/aprile-2010-torneo-di-firenze-alcune-immagini-di-alessio-ant-14.webp", alt: "Aprile 2010 - Torneo di Firenze - alcune immagini di Alessio Antinolfi, Milo Biagini, Roberto Morassi, Luca Pancani, Davide Ruggiero e Paolo Seraglini", caption: "Aprile 2010 - Torneo di Firenze - alcune immagini di Alessio Antinolfi, Milo Biagini, Roberto Morassi, Luca Pancani, Davide Ruggiero e Paolo Seraglini" },
      { src: "/images/gallery/una-foto-in-palestra-stagione-2009-2010.webp", alt: "Una foto in palestra - Stagione 2009/2010", caption: "Una foto in palestra - Stagione 2009/2010" },
    ],
  },
  {
    id: "2010-2011",
    yearStart: 2010,
    yearEnd: 2011,
    description: `Nella stagione 2010-2011, il Tennistavolo Pistoia partecipa con quattro squadre ai campionati regionali di serie C2, D1 (2 squadre) e D2.

La prima squadra è composta dai seguenti atleti: Luca Balleri, Milo Biagini, Paolo Monti e Luca Pancani, entrambi al rientro a Pistoia dopo 6 stagioni a giro per la Toscana. Pistoia domina il girone di andata fino alla sconfitta di Pisa in condizioni ambientali proibitive, partita che valeva il primato in solitario. Qui si inceppa qualcosa e le due sconfitte successive con Lucca per 5-4 e con Livorno per 5-4 (con Viterbo autore di 3 punti e Mirabelli di 2) chiudono le possibilità di play-off. Pistoia arriva terza superata da Pisa e da Livorno. Balleri e Monti risultano i migliori e Pancani/Biagini navigano con una percentuale a cavallo del 50%.

La seconda squadra in serie D1 è composta da Antinolfi Alessio, Noga Tomasz Stanislaw, Davide Ruggiero e Seraglini Paolo. Domina la regular season sconfiggendo La Fenice Arezzo del forte Noli in entrambe le partite ed arriva ai playoff dove trascinata dal polacco Noga e un battagliero Paolo Seraglini si impone per 5-4 a Prato in una autentica battaglia e per 5-1 a Pistoia raggiungendo la promozione.

La terza squadra in serie D1 è composta da Ardinghi Andrea, Aresu Marco, Fabbri Marco, Frateschi Guelfo, Oclinaria Harold, Taddei Aldo, Taddei Ivano, Tesi Riccardo.

Un campionato in un girone difficilissimo decreta l'amara retrocessione per differenza partite con Limite. Non basta l'inserimento di un positivo Marco Fabbri per salvare la squadra. Deludono i due Taddei anche per alcuni infortuni, mentre ben si comporta Riccardo Tesi. Frateschi va a sprazzi e non riesce a incidere nell'ultima partita che poteva comunque salvare la squadra.

La quarta squadra milita in serie D2 ed è composta da Aresu Marco, Carbone Maurizio, Masiani Alessandro, Morassi Roberto, Rosi Luca e Ulivagnoli Marco. Le prestazioni non sono brillanti e la squadra arriva penultima. Si salvano Rosi molto brillante e Aresu/Carbone che si attestano sul 50% di vittorie.

La stagione dei tornei risulta molto brillante per Pistoia. Luca Balleri si impone nel torneo estivo nazionale di Bordighera sconfiggento fra gli altri il promettente Roberto Perri, l'ex-seconda Genta ed in finale il giovane Matteo Pezzatini di Viareggio con un perentorio 3-0. La stagione di Balleri continua nel primo torneo regionale di Lucca dove sconfiggendo Trinchera, Mainardi, Raffaelli in una partita equilibratissima il veterano Luca approda alla finale che non può giocare al meglio causa un infortunio che blocca la mano destra contro il senese Muratori. Luca vince anche il doppio quarta categoria a Prato in coppia con Matteo Petralli e a Volterra in coppia con il compagno di società Luca Pancani. Nello stesso torneo di Volterra, Luca si qualifica per la semifinale sconfiggendo Muratori per 3-2 ma poi viene espulso per somma di ammonizioni e non può giocare la semifinale contro Paolinelli che poi vincerà il torneo.

Paolo Monti brilla a Firenze nel terza categoria raggiungendo la semifinale sconfiggendo fra gli altri Ferrara e Zuanigh ed uscendo sconfitto in una partita equilibratissima per 3-2 con il vincitore Viterbo.

Brilla Pancani nei tornei regionali che torna a raggiungere ottimi risultati nonostante alcuni infortuni e l'anemia che lo colpisce nei mesi di Aprile e Maggio. A Poggibonsi Pancani raggiunge la semifinale battendo fra gli altri Madrigali, Fallani e Cola prima di cedere di misura a Christian Ciampi. A Livorno Pancani si ripete ed arriva nei quarti sconfiggendo Raffaelli e Christian Ciampi che lo portano esausto alla partita con il padre Fabrizio che poi vincerà il torneo.

Pancani arriva nei primi otto nel torneo III categoria di San Giovanni Valdarno sconfitto di misura da Muratori.

Pancani arriva nei primi 8 anche a Firenze sconfitto ancora da C. Ciampi e risulta fra i primi 5 toscani nei tornei quarta predeterminati classificandosi ai campionati italiani di Terza.

Ai campionati italiani di Quarta Categoria Pancani sconfigge il forte Bertignol per entrare nei primi 128 dove perde dal laziale Corini per 3-2.

Risultati brillanti anche per gli altri: Marco Fabbri vince il torneo NC di San Giovanni Valdarno, Milo Biagini raggiunge gli ottavi a Firenze sconfiggendo Fabrizio Ciampi, Alessio Antinolfi agli ottavi a Poggibonsi sconfiggendo F. Ciampi e Galli e semifinalista a Cascina sconfitto dal vincitore Cola dopo aver superato la testa di serie numero 1 Matteo Pezzatini e Marco Galli, Paolo Seraglini nei quarti dell'NC di Volterra, Noga finalista a Prato sconfitto per 3-2 dal montecatinese Lapo Taddei, Ruggiero nei quarti a Lucca e a Livorno nell'NC ed infine vittoria per Ruggiero-Seraglini nel doppio NC a Cascina.`,
    photos: [
      { src: "/images/gallery/3-settembre-2010-vittoria-di-luca-balleri-al-torneo-di-bordi.webp", alt: "3 settembre 2010 - Vittoria di Luca Balleri al torneo di Bordighera", caption: "3 settembre 2010 - Vittoria di Luca Balleri al torneo di Bordighera" },
      { src: "/images/gallery/14-settembre-2010-articolo-sul-tirreno-cronaca-di-san-marcel.webp", alt: "14 settembre 2010 - Articolo sul Tirreno (cronaca di San Marcello Pistoiese)", caption: "14 settembre 2010 - Articolo sul Tirreno (cronaca di San Marcello Pistoiese)" },
      { src: "/images/gallery/11-novembre-2010-articolo-de-la-nazione.webp", alt: "11 novembre 2010 - Articolo de \"La Nazione\"", caption: "11 novembre 2010 - Articolo de \"La Nazione\"" },
      { src: "/images/gallery/6-marzo-2011-alcuni-atleti-del-tt-pistoia-al-torneo-regional.webp", alt: "6 marzo 2011 - Alcuni atleti del TT Pistoia al Torneo regionale di Firenze (foto gentilmente concesse da Jacopo Santini) Luca Balleri", caption: "6 marzo 2011 - Alcuni atleti del TT Pistoia al Torneo regionale di Firenze (foto gentilmente concesse da Jacopo Santini) Luca Balleri" },
      { src: "/images/gallery/paolo-monti.webp", alt: "Paolo Monti", caption: "Paolo Monti" },
      { src: "/images/gallery/luca-pancani-durante-e-dopo-l-incontro-con-manuele-marchi.webp", alt: "Luca Pancani, durante e... dopo l'incontro con Manuele Marchi", caption: "Luca Pancani, durante e... dopo l'incontro con Manuele Marchi" },
      { src: "/images/gallery/giugno-2011-torneo-di-firenze-foto-varie-1.webp", alt: "Giugno 2011 - Torneo di Firenze - Foto Varie", caption: "Giugno 2011 - Torneo di Firenze - Foto Varie" },
      { src: "/images/gallery/giugno-2011-torneo-di-firenze-foto-varie-2.webp", alt: "Giugno 2011 - Torneo di Firenze - Foto Varie", caption: "Giugno 2011 - Torneo di Firenze - Foto Varie" },
      { src: "/images/gallery/giugno-2011-torneo-di-firenze-foto-varie-3.webp", alt: "Giugno 2011 - Torneo di Firenze - Foto Varie", caption: "Giugno 2011 - Torneo di Firenze - Foto Varie" },
      { src: "/images/gallery/giugno-2011-torneo-di-firenze-foto-varie-4.webp", alt: "Giugno 2011 - Torneo di Firenze - Foto Varie", caption: "Giugno 2011 - Torneo di Firenze - Foto Varie" },
      { src: "/images/gallery/giugno-2011-torneo-di-firenze-foto-varie-5.webp", alt: "Giugno 2011 - Torneo di Firenze - Foto Varie", caption: "Giugno 2011 - Torneo di Firenze - Foto Varie" },
      { src: "/images/gallery/giugno-2011-torneo-di-firenze-foto-varie-6.webp", alt: "Giugno 2011 - Torneo di Firenze - Foto Varie", caption: "Giugno 2011 - Torneo di Firenze - Foto Varie" },
      { src: "/images/gallery/giugno-2011-torneo-di-firenze-foto-varie-7.webp", alt: "Giugno 2011 - Torneo di Firenze - Foto Varie", caption: "Giugno 2011 - Torneo di Firenze - Foto Varie" },
      { src: "/images/gallery/giugno-2011-torneo-di-firenze-foto-varie-8.webp", alt: "Giugno 2011 - Torneo di Firenze - Foto Varie", caption: "Giugno 2011 - Torneo di Firenze - Foto Varie" },
      { src: "/images/gallery/giugno-2011-torneo-di-firenze-foto-varie-9.webp", alt: "Giugno 2011 - Torneo di Firenze - Foto Varie", caption: "Giugno 2011 - Torneo di Firenze - Foto Varie" },
      { src: "/images/gallery/giugno-2011-torneo-di-firenze-foto-varie-10.webp", alt: "Giugno 2011 - Torneo di Firenze - Foto Varie", caption: "Giugno 2011 - Torneo di Firenze - Foto Varie" },
      { src: "/images/gallery/finale-trofeo-trappolini-giugno-2011-ruggiero-in-finale-e-bi-1.webp", alt: "Finale Trofeo Trappolini Giugno 2011 - Ruggiero in finale e Biagini in semifinale", caption: "Finale Trofeo Trappolini Giugno 2011 - Ruggiero in finale e Biagini in semifinale" },
      { src: "/images/gallery/finale-trofeo-trappolini-giugno-2011-ruggiero-in-finale-e-bi-2.webp", alt: "Finale Trofeo Trappolini Giugno 2011 - Ruggiero in finale e Biagini in semifinale", caption: "Finale Trofeo Trappolini Giugno 2011 - Ruggiero in finale e Biagini in semifinale" },
      { src: "/images/gallery/finale-trofeo-trappolini-giugno-2011-ruggiero-in-finale-e-bi-3.webp", alt: "Finale Trofeo Trappolini Giugno 2011 - Ruggiero in finale e Biagini in semifinale", caption: "Finale Trofeo Trappolini Giugno 2011 - Ruggiero in finale e Biagini in semifinale" },
    ],
  },
  {
    id: "2011-2012",
    yearStart: 2011,
    yearEnd: 2012,
    description: `Nella stagione 2011-2012, il Tennistavolo Pistoia partecipa con quattro squadre ai campionati regionali di serie C2 (2 squadre) e D2 (2 squadre).

La prima squadra di serie C2 è composta dai seguenti atleti: Luca Balleri (solo qualche apparizione), Marco Fabbri (solo con Livorno all'andata), Tomasz Stanislaw Noga, Luca Pancani e Davide Ruggiero con Davide e Tomasz alla prima esperienza in C2. Dopo una prima partita da incubo con Cascina dove lo stesso Pancani stecca clamorosamente, la squadra decolla; pur perdendo di misura, sfiora l'impresa a Lucca, gioca alla pari con Livorno nonostante l'assenza di Pancani rimpiazzato da Marco Fabbri e, finalmente, centra due vittorie contro Limite e Viareggio, sfiora la vittoria con la capolista Carrara e vince l'ultima a Pisa. Nel girone di ritorno, complice anche un infortunio a Pancani, Pistoia vince contro Limite e Pisa ma non basta per evitare i playout di Siena dove la squadra brilla e si impone sui padroni di casa per 5-2 e sulla Sestese per 5-4 confermando la serie C2. Pancani e Noga risultano i migliori con circa il 50% di vittorie e contributo importante di Davide Ruggiero che quando conta sfodera la grinta e sostiene la squadra con punti importanti.

La seconda squadra in serie C2 è composta da Alessio Antinolfi, Milo Biagini, Paolo Monti e Paolo Seraglini. Monti trascina con oltre il 90% di vittorie Pistoia alla salvezza (sconfitto solo dal pratese Gamberini per due volte), ben aiutato da Milo Biagini che brilla in diverse occasioni, da alcuni punti importanti di Alessio e da Seraglini che, se pur poco impiegato, dà il suo supporto.

In serie D2 la prima squadra composta dai fratelli Taddei, da Guelfo Frateschi, da Maurizio Carbone e da Luca Rosi, lotta per la promozione ma la manca a favore del Prato. Positive le prestazioni dei due Taddei e di Frateschi. La seconda squadra composta da alcuni esordienti Andrea Corsini, Nicolò Gori e Marco Degli Esposti, coadiuvati da Aresu, Masiani e Morassi si piazza al penultimo posto, con miglioramenti evidenti dei 3 esordienti durante la stagione.

La stagione dei tornei risulta come al solito brillante per gli atleti pistoiesi, con Pancani che si piazza fra i primi 5 atleti nei tornei quarta categoria regionali e si qualifica per i campionati italiani di terza categoria grazie soprattutto alla splendida semifinale di Firenze (dove sconfigge Barducci, Zuanigh, Arcoria e Morante prima di cedere in semifinale per 11-9 al quinto set con l'aretino Terrazzani) e con Monti finalista a Poggibonsi sconfitto dal lucchese Larindi e ottimo piazzato nel torneo nazionale di Arezzo. Buone prestazioni da Antinolfi, Biagini, Ruggiero e Seraglini che in diversi tornei sconfiggono alcuni dei favoriti.`,
    photos: [],
  },
  {
    id: "2012-2013",
    yearStart: 2012,
    yearEnd: 2013,
    description: `Nella stagione 2012-2013, il Tennistavolo Pistoia partecipa con cinque squadre ai campionati regionali di serie C2 (2 squadre), D2 (2 squadre) e la neonata D3 (1 squadra).

La prima squadra di serie C2 è composta dai seguenti atleti: Alessio Antinolfi, Paolo Monti, Tomasz Noga e Luca Pancani. Inserita in un girone di ferro con Pisa e Grosseto (promosse in C1 a fine stagione) su tutte, la squadra va incontro ad un ottimo campionato con 7 vittorie complessive e l'importante vittoria in casa contro la seconda forza del campionato Grosseto. Monti perde una sola partita con Arcoria, Noga ben si comporta, Pancani fra alti e bassi quando conta c'è. Alla fine è un quinto posto dietro Pisa, Grosseto, il Lucca di Vasta e il Viareggio di Badalacchi. Monti gioca part-time e forse la squadra avrebbe potuto lottare per i playoff al completo.

La seconda squadra in serie C2 è composta da Luca Balleri (solo l'ultima partita), Milo Biagini, Paolo Seraglini e Davide Ruggiero. La squadra in lotta per la salvezza fin dall'inizio si salva nella stagione regolare grazie a Milo Biagini autore di un ottimo campionato, ai punti di Ruggiero, a qualche vittoria di Seraglini e al contributo determinante di Luca Balleri che al rientro dopo un lungo infortunio fa 3 punti a Viareggio (contro Pugliesi, Antonini e Giorgetti). Purtroppo una malattia di Seraglini condanna alla retrocessione Pistoia nella fase di play-out, visto che non vi erano altre riserve disponibili e vista l'impossibilità di Paolo di garantire anche la sola presenza ai playout di Arezzo.

In serie D2 la prima squadra composta dai fratelli Taddei, da Guelfo Frateschi, da Marco Aresu e Moreno Biagini (al rientro alle gare dopo alcune stagioni di assenza) e la seconda composta da Andrea Corsini, Nicolò Gori, Marco Degli Esposti, Marco Fabbri, Alessandro Masiani lottano per il primo posto, ma la sconfitta della squadra "B" a Prato contro il CIATT relega al secondo posto a pari merito le due squadre pistoiesi. Ottime prestazioni di Aldo Taddei, di Guelfo Frateschi e dei due giovani Corsini e Degli Esposti che colgono importanti successi.

In serie D3 Morassi guida Borgioli, Carobbi, Corzani e Ulivagnoli (imbattuto) alla vittoria nei playoff di Carrara.

La stagione dei tornei risulta buona per gli atleti pistoiesi, con Pancani che si piazza fra i primi 5 atleti nei tornei quarta categoria regionali e si qualifica per i campionati italiani di terza categoria grazie ai due quarti di finale di San Giovanni sconfitto da Vasta e Firenze sconfitto da Morante e per ben due occasioni arriva ai quarti nel torneo regionale terza categoria di Poggibonsi e ai campionati regionali terza categoria di Firenze sconfiggendo fra gli altri le terze categorie Cretella, Arcoria e Bagnolesi.

Ruggiero è autore di due ottime vittorie contro C. Ciampi e Cola ma manca a volte di continuità. Biagini e Monti limitano molto le attività nei tornei. Seraglini fa alcune vittime come il pisano F. Ciampi e il forte Tulli nel torneo nazionale di Torino.

Pancani va bene nei primi tre tornei nazionali ma stecca ad Alassio e ai Campionati Italiani non superando il girone. Pancani in coppia con la livornese Dianella Baldeschi si impone nel doppio misto a Terni sconfiggendo i liguri Mazzoni e Raggi.

Nel gennaio del 2013 si tengono a Pistoia i primi campionati provinciali della storia e si impone il favorito Monti sconfiggendo Pancani nei quarti, Ruggiero in semifinale e Milo Biagini in finale. Nell'altra semifinale anche Alessio Antinolfi che aveva sconfitto Marco Fabbri.

A livello politico, Luca Balleri è nominato consigliere provinciale della F.I.Te.T. subentrando a Luca Mariotti. Pancani si candida come consigliere nazionale ma la cordata viene sconfitta nelle elezioni di Terni.`,
    photos: [
      { src: "/images/gallery/campionati-provinciali-9-gennaio-2013-1.webp", alt: "Campionati Provinciali 9 gennaio 2013", caption: "Campionati Provinciali 9 gennaio 2013" },
      { src: "/images/gallery/campionati-provinciali-9-gennaio-2013-2.webp", alt: "Campionati Provinciali 9 gennaio 2013", caption: "Campionati Provinciali 9 gennaio 2013" },
      { src: "/images/gallery/campionati-provinciali-9-gennaio-2013-3.webp", alt: "Campionati Provinciali 9 gennaio 2013", caption: "Campionati Provinciali 9 gennaio 2013" },
      { src: "/images/gallery/campionati-provinciali-9-gennaio-2013-4.webp", alt: "Campionati Provinciali 9 gennaio 2013", caption: "Campionati Provinciali 9 gennaio 2013" },
      { src: "/images/gallery/campionati-provinciali-9-gennaio-2013-5.webp", alt: "Campionati Provinciali 9 gennaio 2013", caption: "Campionati Provinciali 9 gennaio 2013" },
      { src: "/images/gallery/campionati-provinciali-9-gennaio-2013-6.webp", alt: "Campionati Provinciali 9 gennaio 2013", caption: "Campionati Provinciali 9 gennaio 2013" },
      { src: "/images/gallery/campionati-provinciali-9-gennaio-2013-7.webp", alt: "Campionati Provinciali 9 gennaio 2013", caption: "Campionati Provinciali 9 gennaio 2013" },
      { src: "/images/gallery/campionati-provinciali-9-gennaio-2013-8.webp", alt: "Campionati Provinciali 9 gennaio 2013", caption: "Campionati Provinciali 9 gennaio 2013" },
      { src: "/images/gallery/campionati-provinciali-9-gennaio-2013-9.webp", alt: "Campionati Provinciali 9 gennaio 2013", caption: "Campionati Provinciali 9 gennaio 2013" },
      { src: "/images/gallery/campionati-provinciali-9-gennaio-2013-10.webp", alt: "Campionati Provinciali 9 gennaio 2013", caption: "Campionati Provinciali 9 gennaio 2013" },
    ],
  },
  {
    id: "2013-2014",
    yearStart: 2013,
    yearEnd: 2014,
    description: `Nella stagione 2013-2014, il Tennistavolo Pistoia partecipa con sei squadre ai campionati regionali di serie C2 (1 squadra), D1 (1 squadra), D2 (2 squadre) e D3 (2 squadre; una del DLF Pistoia); oltre alla iscrizione alla serie B Veterani.

La prima squadra in serie C2 è composta dai seguenti atleti: Luca Balleri (solo la prima partita poi infortunato), Milo Biagini, Tomasz Noga, Luca Pancani e Davide Ruggiero. Sconfitta 5 a 0 a Grosseto nella prima partita, la squadra sa riscattarsi nelle partite del girone di andata vincendole tutte eccetto la sconfitta di misura all'ultima giornata di andata con la capolista Carrara. Da segnalare la vittoria a Pisa in trasferta per 5 a 3 con 3 punti di Biagini e 2 di Noga. Nel girone di ritorno arriviamo con una vittoria di vantaggio alla partita decisiva per i playoff con Pisa. Paghiamo l'emozione e giochiamo sotto tono uscendo sconfitti per 5-2. Il 4-5 finale con Carrara sa di beffa in chiave playoff. Ottima annata per Biagini, Noga e soprattutto Ruggiero che partito dalla D1 dopo 12 vittorie consecutive esordisce in C2 sconfiggendo i forti Petriccioli e Badalacchi e chiudendo con circa il 65% di vittorie. Pancani con problemi di cervicale e rottura retinica gioca pochissimo e non può contribuire. In serie D1 la squadra è composta da Paolo Seraglini, Marco Degli Esposti, Andrea Corsini, Davide Ruggiero (prime partite), Paolo Monti (solo una partita) e Mirko Borgioli (salito in D1 causa infortunio a Degli Esposti). La squadra chiude a metà classifica con Ruggiero imbattuto, Seraglini oltre il 75% di vittorie, Degli Esposti con un buon 35%.

In serie D2 la prima squadra composta dai fratelli Taddei, da Guelfo Frateschi, da Marco Aresu con due presenze episodiche di Antinolfi e Rosi arriva ai playoff di Arezzo; qui una vittoria per 5-4 con Volterra e una sconfitta per 5-4 con Arezzo, rimandano la festa al secondo spareggio in cui Pistoia si impone per 5-4 su Forte dei Marmi conquistando la D1. La seconda squadra è composta da Mirko Borgioli, Nicolò Gori, Alessandro Masiani, Marco Ulivagnoli arriva penultima raggiungendo la salvezza con Borgioli e Ulivagnoli oltre il 50% di vittorie.

In serie D3 la prima squadra ottiene la promozione in D2 con il giovane Lorenzo Tavoletti, Lorenzo Tesi e Patrizia Cusato imbattutti.

La stagione dei tornei risulta buona per gli atleti pistoiesi, soprattutto per Davide Ruggiero che si impone a sorpresa nel torneo di Volterra sconfiggendo fino alla finale nell'ordine Dondoli, Petralli e Betti e che arriva ai quarti di finale (qualificandosi per gli Italiani terza categoria) a Firenze (si impone su Dini prima di perdere da Anselmi). Noga partecipa al torneo di Cascina ed arriva nei quarti sia nel quarta categoria (sconfitto dal giovane Comanducci poi vincitore del torneo) che nel terza (sconfiggendo la terza categoria Mazzocco e poi perdendo da Cosci). Gli altri atleti pistoiesi non brillano più di tanto nei tornei a cui prendono parte eccetto Balleri che perde il campionato regionale veterani over 50 in finale con il fiorentino Fornai.

Nel dicembre 2013 si tengono a Pistoia i secondi campionati provinciali della storia e si impone Milo Biagini in finale su Davide Ruggiero. Semifinalisti Monti e Pancani.`,
    photos: [],
  },
  {
    id: "2014-2015",
    yearStart: 2014,
    yearEnd: 2015,
    description: `La stagione 2014 - 2015 rimarrà nella storia della nostra società come l'anno "horribilis" dal momento della fondazione nel lontano 1992, non per le vicende agonistiche, su cui torneremo fra poco, ma per il tentativo di far chiudere la nostra società, per fortuna fallito, da parte di un gruppo settario che si è creato negli ultimi anni a Pistoia. Oltre ad aver subito continue provocazioni da parte di alcuni membri del movimento scissionista, nonostante la società sia andata incontro a questo gruppo concedendo la prima squadra in serie C2 ed anche il giorno preferito per le gare casalinghe, si è venuto delineando nel corso dei mesi che queste persone avevano sempre meno in comune con i principi culturali, i valori morali e di socializzazione che fin dalla fondazione hanno animato la nostra società. Per far capire la nostra completa buonafede e democrazia, come già scritto, la stagione scorsa la prima squadra in serie C2 era composta da tre di questi personaggi almeno fino al momento della scissione. Abbiamo loro insegnato la disciplina del tennistavolo e senza la benché minima riconoscenza se ne sono andati. Mi riferisco, in particolare, non alle nuove leve che si sono unite al gruppo scissionista, ma ad alcune delle persone con cui abbiamo condiviso molti anni di vita sportiva e agonistica. D'altro lato come se non bastasse quanto accaduto, un altro personaggio, che si era insinuato nella nostra palestra negli ultimi anni, voleva tramutare in un'attività commerciale il normale allenamento. Questo ha creato, come se non fosse bastato, un clima di tensione e di instabilità che ha rovinato completamente il clima sportivo che aveva sempre animato la nostra società. La scissione è avvenuta nel mese di marzo 2015 quando mancavano ancora tre giornate alle fine del campionato ed è stato l'ultimo tentativo di arrecarci danni (squalifiche e multe per squadre incomplete), evitati grazie al supporto degli atleti rimasti e al tesseramento di alcune persone che ci hanno permesso di evitare il peggio e di chiudere i vari campionati dignitosamente. Veniamo, quindi, alle vicende agonistiche. La nota più lieta della stagione è stata il ritorno alle gare di un giocatore che da quasi venti anni si era ritirato dal tennistavolo: il fiorentino, trasferitosi a Quarrata, Gabriele Roselli che con passione sportiva si è riavvicinato al nostro sport. La serie C2 grazie a Balleri, Pancani e Roselli chiude senza penalità le ultime tre giornate; le due D1 si salvano brillantemente. La prima schiera Seraglini che perderà una sola partita in tutta la stagione, Frateschi che ci conferma giocatore di categoria, Aldo Taddei che contribuisce brillantemente e Ivano Taddei che gioca solo alcune partite. La seconda capitata in un girone di ferro schiera Balleri, Pancani, Roselli (prima del loro passaggio forzato in C2) e sfiora la promozione prima della scissione e di alcuni altri eventi su cui torneremo fra poco. Da rimarcare le prestazioni brillanti dell'inossidabile Luca Balleri che sconfigge i più forti giocatori del girone. In serie D2 si assiste alla retrocessione della prima squadra grazie al contributo non continuo di alcuni degli scissionisti e all'impossibilità di Marco Ulivagnoli di giocare alcune delle partite decisive. La seconda D2 con il versiliese Tavoletti e con Eugenio Ulivagnoli raggiunge una tranquilla salvezza. In serie D3 buon campionato del giovane Guarino supportato da Bellandi, Zoppi e nell'altro girone Morassi, Frangioni erano autori di alcune buone prestazioni. Per la prima volta nella storia Pistoia ha schierato una squadra di serie C femminile con Patrizia Cusato e Elisa Vanni che si è qualificata per i playoff ben comportandosi e onorando il nome di Pistoia. Veniamo ora al terzo attacco subito da Pistoia durante la scorsa stagione. Questo attacco è arrivato dalla mancanza di sportività e di educazione di alcuni giovani presenti nel girone di serie D1 di Balleri, Pancani, Roselli sfociato in una vera e propria discussione in una partita di campionato contro Viareggio con alcuni di questi ragazzetti e con i genitori che hanno dimostrato una mancanza totale di capacità di analisi nel riconoscere i limiti comportamentali dei loro figli. Comportamento non migliore e sicuramente non maturo da parte del Comitato Regionale e del Giudice Unico che avrebbe dovuto agire come da regolamento federale, esaminando il solo referto arbitrale, ma che ha inflitto due giornate di squalifica ad un nostro atleta, senza che vi fossero gli estremi nel referto per questa decisione. Concludo con la stagione dei tornei individuali che hanno visto prima Pancani in semifinale a San Giovanni Valdarno vittorioso sui giovani Louafi e Raccanello e sul veterano Morante e, poi, le prestazioni brillanti di Seraglini ad Arezzo (nei primi 8) e ai campionati italiani di Torino. Il tennistavolo Pistoia riparte da qui con energia, con lo stesso spirito che Luca Balleri ha sempre trasmesso a tutti quelli che si sono avvicinati al nostro sport a Pistoia, e contando sul supporto degli atleti rimasti e di quelli del DLF Pistoia che con spirito di collaborazione e amicizia si sono affiancati a noi per la ricostruzione.`,
    photos: [
      { src: "/images/gallery/sport-per-tutti-montecatini-terme-tettuccio-28-settembre-201-1.webp", alt: "Sport per Tutti - Montecatini - Terme Tettuccio - 28 Settembre 2014", caption: "Sport per Tutti - Montecatini - Terme Tettuccio - 28 Settembre 2014" },
      { src: "/images/gallery/sport-per-tutti-montecatini-terme-tettuccio-28-settembre-201-2.webp", alt: "Sport per Tutti - Montecatini - Terme Tettuccio - 28 Settembre 2014", caption: "Sport per Tutti - Montecatini - Terme Tettuccio - 28 Settembre 2014" },
      { src: "/images/gallery/sport-per-tutti-montecatini-terme-tettuccio-28-settembre-201-3.webp", alt: "Sport per Tutti - Montecatini - Terme Tettuccio - 28 Settembre 2014", caption: "Sport per Tutti - Montecatini - Terme Tettuccio - 28 Settembre 2014" },
      { src: "/images/gallery/sport-per-tutti-montecatini-terme-tettuccio-28-settembre-201-4.webp", alt: "Sport per Tutti - Montecatini - Terme Tettuccio - 28 Settembre 2014", caption: "Sport per Tutti - Montecatini - Terme Tettuccio - 28 Settembre 2014" },
      { src: "/images/gallery/sport-per-tutti-montecatini-terme-tettuccio-28-settembre-201-5.webp", alt: "Sport per Tutti - Montecatini - Terme Tettuccio - 28 Settembre 2014", caption: "Sport per Tutti - Montecatini - Terme Tettuccio - 28 Settembre 2014" },
      { src: "/images/gallery/sport-per-tutti-montecatini-terme-tettuccio-28-settembre-201-6.webp", alt: "Sport per Tutti - Montecatini - Terme Tettuccio - 28 Settembre 2014", caption: "Sport per Tutti - Montecatini - Terme Tettuccio - 28 Settembre 2014" },
      { src: "/images/gallery/sport-per-tutti-montecatini-terme-tettuccio-28-settembre-201-7.webp", alt: "Sport per Tutti - Montecatini - Terme Tettuccio - 28 Settembre 2014", caption: "Sport per Tutti - Montecatini - Terme Tettuccio - 28 Settembre 2014" },
      { src: "/images/gallery/sport-per-tutti-montecatini-terme-tettuccio-28-settembre-201-8.webp", alt: "Sport per Tutti - Montecatini - Terme Tettuccio - 28 Settembre 2014", caption: "Sport per Tutti - Montecatini - Terme Tettuccio - 28 Settembre 2014" },
      { src: "/images/gallery/sport-per-tutti-montecatini-terme-tettuccio-28-settembre-201-9.webp", alt: "Sport per Tutti - Montecatini - Terme Tettuccio - 28 Settembre 2014", caption: "Sport per Tutti - Montecatini - Terme Tettuccio - 28 Settembre 2014" },
      { src: "/images/gallery/sport-per-tutti-montecatini-terme-tettuccio-28-settembre-201-10.webp", alt: "Sport per Tutti - Montecatini - Terme Tettuccio - 28 Settembre 2014", caption: "Sport per Tutti - Montecatini - Terme Tettuccio - 28 Settembre 2014" },
      { src: "/images/gallery/sport-per-tutti-montecatini-terme-tettuccio-28-settembre-201-11.webp", alt: "Sport per Tutti - Montecatini - Terme Tettuccio - 28 Settembre 2014", caption: "Sport per Tutti - Montecatini - Terme Tettuccio - 28 Settembre 2014" },
      { src: "/images/gallery/sport-per-tutti-montecatini-terme-tettuccio-28-settembre-201-12.webp", alt: "Sport per Tutti - Montecatini - Terme Tettuccio - 28 Settembre 2014", caption: "Sport per Tutti - Montecatini - Terme Tettuccio - 28 Settembre 2014" },
      { src: "/images/gallery/sport-per-tutti-montecatini-terme-tettuccio-28-settembre-201-13.webp", alt: "Sport per Tutti - Montecatini - Terme Tettuccio - 28 Settembre 2014", caption: "Sport per Tutti - Montecatini - Terme Tettuccio - 28 Settembre 2014" },
      { src: "/images/gallery/sport-per-tutti-montecatini-terme-tettuccio-28-settembre-201-14.webp", alt: "Sport per Tutti - Montecatini - Terme Tettuccio - 28 Settembre 2014", caption: "Sport per Tutti - Montecatini - Terme Tettuccio - 28 Settembre 2014" },
      { src: "/images/gallery/sport-per-tutti-montecatini-terme-tettuccio-28-settembre-201-15.webp", alt: "Sport per Tutti - Montecatini - Terme Tettuccio - 28 Settembre 2014", caption: "Sport per Tutti - Montecatini - Terme Tettuccio - 28 Settembre 2014" },
      { src: "/images/gallery/sport-per-tutti-montecatini-terme-tettuccio-28-settembre-201-16.webp", alt: "Sport per Tutti - Montecatini - Terme Tettuccio - 28 Settembre 2014", caption: "Sport per Tutti - Montecatini - Terme Tettuccio - 28 Settembre 2014" },
      { src: "/images/gallery/campionati-provinciali-27-dicembre-2014-1.webp", alt: "Campionati Provinciali 27 dicembre 2014", caption: "Campionati Provinciali 27 dicembre 2014" },
      { src: "/images/gallery/campionati-provinciali-27-dicembre-2014-2.webp", alt: "Campionati Provinciali 27 dicembre 2014", caption: "Campionati Provinciali 27 dicembre 2014" },
      { src: "/images/gallery/campionati-provinciali-27-dicembre-2014-3.webp", alt: "Campionati Provinciali 27 dicembre 2014", caption: "Campionati Provinciali 27 dicembre 2014" },
      { src: "/images/gallery/campionati-provinciali-27-dicembre-2014-4.webp", alt: "Campionati Provinciali 27 dicembre 2014", caption: "Campionati Provinciali 27 dicembre 2014" },
      { src: "/images/gallery/campionati-provinciali-27-dicembre-2014-5.webp", alt: "Campionati Provinciali 27 dicembre 2014", caption: "Campionati Provinciali 27 dicembre 2014" },
      { src: "/images/gallery/campionati-provinciali-27-dicembre-2014-6.webp", alt: "Campionati Provinciali 27 dicembre 2014", caption: "Campionati Provinciali 27 dicembre 2014" },
    ],
  },
  {
    id: "2015-2016",
    yearStart: 2015,
    yearEnd: 2016,
    description: `La stagione 2015 - 2016 vede il lento rinascere della nostra società dopo la scissione. L'arrivo di uno dei migliori giocatori di Lucca, Roberto Larindi e l'ottima annata di Balleri supportati da un sufficiente Pancani permettono dopo più di 10 anni di arrivare in seconda posizione nel campionato di serie C2 lottando con Cascina e dietro l'imbattibile CIATT Firenze. Ai playoff le condizioni fisiche non ottimali di alcuni giocatori non ci hanno permesso di lottare ad armi pari con le altre formazioni ma ci siamo comunque arrivati. In serie D1 Seraglini, Frateschi, Taddei e Roselli centrano la salvezza in modo rocambolesco. Quando sembravano ormai spacciati, presentadosi all'ultima giornata in trasferta contro la capolista Lucca, praticamente in due (assenza di Frateschi e Roselli) con il supporto di Spinicci salito dalla D2, è successo l'imprevidibile. Tre punti di un grande Seraglini e due punti di Aldo Taddei (di cui uno sul forte Nottolini) ci hanno permesso di andare ai playout evitando la retrocessione diretta. Ai playoff nella prima partita senza Taddei operato, abbiamo perso 5 a 2 a Prato e tutto pareva perduto. Nel ritorno a Pistoia, Taddei rientra senza nemmeno un allenamento, ma con due punti di Seraglini, 2 di Frateschi e uno di Taddei ci siamo imposti per 5 a 1, raggiungendo l'insperata salvezza. Il cuore che in tante occasioni ha contraddistinto Pistoia, ancora una volta ha fatto la differenza. In serie D2 capitiamo in un girone di ferro con Quarrata e San Miniato e nonostante l'impegno di Spinicci, Cusato, Guarino Lo Bianco, Eugenio Ulivagnoli, non siamo riusciti ad evitare la retrocessione.

In serie D3 arriviamo terzi con Bellandi, Frangioni, Morassi, Zoppi.

Concludo con la stagione dei tornei individuali che non hanno visto risultati di livello anche a causa di un innalzamento del livello medio dei tornei di quarta categoria.`,
    photos: [],
  },
  {
    id: "2016-2017",
    yearStart: 2016,
    yearEnd: 2017,
    description: `La stagione 2016 - 2017 vede il passaggio di Balleri in Liguria al TT La Spezia. Pistoia schiera una squadra in serie C2 con Larindi, Pancani e Seraglini. La squadra arriva ai playout, si impone 5 a 1 a Sesto Fiorentino ma a causa di un problema Pistoia non è in grado di schierare la formazione completa al ritorno ed è costretta alla retrocessione in serie D1.

In serie D1 giocano prevalentemente Taddei e Frateschi con Spinicci, Moreno Biagini al ritorno alle competizioni dopo alcune stagioni, Bellandi e Guarino Lo Bianco Paolo. Purtroppo il livello molto alto del girone che vede schierati alcuni tra i migliori giovani toscani porta alla retrocessione della squadra in serie D2. In serie D3 la squadra vince due partite schierando Frangioni, Zoppi, Previti, Tonelli e Guarino Lo Bianco Alessandro. Nei tornei da segnalare la semifinale di Larindi ai campionati regionali di quarta categoria.`,
    photos: [],
  },
  {
    id: "2017-2018",
    yearStart: 2017,
    yearEnd: 2018,
    description: `Nella stagione 2017 - 2018 Pistoia schiera una squadra in serie D1 con Pancani, Biagini, Frateschi, Taddei e Spinicci. La squadra parte male con il solo Pancani che vince praticamente quasi tutti gli incontri ma l'inserimento di Biagini nel girone di ritorno e una crescita di Taddei hanno permesso con tre vittorie di fila di raggiungere la salvezza. Pancani chiude con il 90% di vittorie. L'arrivo di Lorenzo Pallesi è la novità più importante per la società in questa stagione. Lorenzo si mette al servizio della società e si esprime a buoni livelli in serie D2 dove la squadra si salva comodamente schierando oltre a Lorenzo, Moreno Biagini per il girone di andata, Frangioni, Ulivagnoli e Bellandi nonché Guelfo Frateschi per due partite nel girone di andata al rientro da un infortunio al braccio. In serie D3 l'altra notizia lieta della stagione, l'esordio di Pamela Bellari che al primo anno di D3 aiutata da Previti, Zoppi, Guarino Alessandro e Macchini trascina la squadra alla vittoria in campionato sulla rappresentativa di San Miniato.

Nei tornei da segnalare le prestazioni brillantissime di Pamela Bellari in semifinale al torneo quarta categoria di Prato, vittoriosa nel torneo V categoria nazionale di Firenze e nei campionati regionali di V e IV categoria.`,
    photos: [
      { src: "/images/gallery/premiazione-pamela-bellari-da-parte-del-presidente-regionale.webp", alt: "Premiazione Pamela Bellari da parte del Presidente Regionale FITeT - Giugno 2018", caption: "Premiazione Pamela Bellari da parte del Presidente Regionale FITeT - Giugno 2018" },
      { src: "/images/gallery/campionati-provinciali-dicembre-2017-1.webp", alt: "Campionati Provinciali - Dicembre 2017", caption: "Campionati Provinciali - Dicembre 2017" },
      { src: "/images/gallery/campionati-provinciali-dicembre-2017-2.webp", alt: "Campionati Provinciali - Dicembre 2017", caption: "Campionati Provinciali - Dicembre 2017" },
      { src: "/images/gallery/serie-d1-2017-manca-armando-spinicci.webp", alt: "Serie D1 - 2017 (manca Armando Spinicci)", caption: "Serie D1 - 2017 (manca Armando Spinicci)" },
    ],
  },
  {
    id: "2018-2019",
    yearStart: 2018,
    yearEnd: 2019,
    description: `Nella stagione 2018 - 2019 Pistoia schiera una squadra in serie D1 con Pancani, Moreno Biagini, e Spinicci. La squadra arriva ai playoff per la promozione in serie C2 con Pancani protagonista con 38 vittorie e 2 sole sconfitte in stagione regolare. Ai playoff la squadra lotta ma non riesca a centrare la promozione. In serie D2 vengono schierate due formazioni: la squadra A è composta da Andrea Bellandi. Pamela Bellari, Guglielmo Di Grazia, Lorenzo Pallesi e Pierfrancesco Previti arriva a metà classifica con Bellari e Pallesi autori di prestazioni convincenti, la squadra B è composta da Anna Patrizia Cusato, Antonio Frangioni, Guelfo Frateschi, Aldo Taddei, Marco Ulivagnoli arriva terza dopo un campionato brillante trascinata da Aldo Taddei e Guelfo Frateschi. Infine in serie D3 la squadra composta da Cristoforo Biagini, Gianluca Biagioni, Tommaso Bonfanti, Alberto Macchini, Luigi Tosi, Massimo Venturi viene promossa in serie D2 con Biagini, Bonfanti e Tosi protagonisti della promozione.

Nei tornei individuali Pamela Bellari si impone nel torneo nazionale di quinta categoria di Firenze e Cristoforo Biagini arriva al suo primo torneo in semifinale al torneo di sesta categoria di Firenze.`,
    photos: [
      { src: "/images/gallery/info-giocatori-storia-calendario-foto-campionati-links-le-re-1.webp", alt: "Info Giocatori Storia Calendario Foto Campionati Links Le regole E-Mail Tennistavolo Pistoia - Novembre 2018", caption: "Info Giocatori Storia Calendario Foto Campionati Links Le regole E-Mail Tennistavolo Pistoia - Novembre 2018" },
      { src: "/images/gallery/info-giocatori-storia-calendario-foto-campionati-links-le-re-2.webp", alt: "Info Giocatori Storia Calendario Foto Campionati Links Le regole E-Mail Tennistavolo Pistoia - Novembre 2018", caption: "Info Giocatori Storia Calendario Foto Campionati Links Le regole E-Mail Tennistavolo Pistoia - Novembre 2018" },
      { src: "/images/gallery/info-giocatori-storia-calendario-foto-campionati-links-le-re-3.webp", alt: "Info Giocatori Storia Calendario Foto Campionati Links Le regole E-Mail Tennistavolo Pistoia - Novembre 2018", caption: "Info Giocatori Storia Calendario Foto Campionati Links Le regole E-Mail Tennistavolo Pistoia - Novembre 2018" },
      { src: "/images/gallery/premiazione-pamela-bellari-giornata-olimpica-novembre-2018.webp", alt: "Premiazione Pamela Bellari Giornata Olimpica - Novembre 2018", caption: "Premiazione Pamela Bellari Giornata Olimpica - Novembre 2018" },
    ],
  },
  {
    id: "2019-2020",
    yearStart: 2019,
    yearEnd: 2020,
    description: `Nella stagione 2019 - 2020 Pistoia schiera una squadra in serie D1 con Pancani, Moreno Biagini, Spinicci, Aldo Taddei, Roselli. La squadra è destinata alla retrocessione in un girone durissimo in cui solo Pancani riesce ad essere competitivo nonostante un infortunio serio al polso che ne pregiudica alcune prestazioni. Arriva però l'epidemia di Covid e il campionato viene congelato senza retrocessioni e promozioni. In serie D2 vengono schierate due formazioni: la squadra A è composta da Antonio Frangioni, Guelfo Frateschi, Lorenzo Pallesi è a metà classifica al monmento della sospensione del campionato con Frateschi molto brillante. La squadra B è composta da Cristoforo Biagini, Tommaso Bonfanti, Guglielmo Di Grazia e Luigi Tosi e conclude a metà classifica. In serie D3 la squadra è all'ultimo posto con Andrea Balli, Gianluca Biagioni, Paolo Cipriani e Massimo Venturi.

Nei tornei individuali Pamela Bellari, trasferita all'Apuania Carrara, si impone nel torneo regionale quarta categoria di Firenze.`,
    photos: [],
  },
  {
    id: "2020-2021",
    yearStart: 2020,
    yearEnd: 2021,
    description: `Nella stagione 2020 - 2021 i campionati sono sospesi a causa del Covid e solo una competizione regionale a squadre viene organizzata con la Coppa Italia. Pistoia schiera una squadra con Cristoforo Biagini, Guelfo Frateschi, Luca Pancani, Gabriele Roselli, Armando Spinicci e Tommaso Bonfanti. Nei tornei individuali Cristoforo Biagini arriva in finale nel torneo over 2000 di Firenze.`,
    photos: [],
  },
  {
    id: "2021-2022",
    yearStart: 2021,
    yearEnd: 2022,
    description: `Nella stagione 2021 - 2022 i campionati riprendono con ancora qualche piccola perturbazione. In serie D1 Pistoia vince il campionato e torna in C2 con Cristoforo Biagini e Luca Pancani protagonisti di una stagione molto brillante. Anche Guelfo Frateschi e Gabriele Roselli facevano parte della squadra. In serie D2 altra vittoria con la squadra composta da Moreno Biagini, Gianluca Biagioni, Antonio Frangioni, Lorenzo Pallesi, Luigi Tosi si impone nel campionato e centra la promozione in serie D1. In serie D3 molte nuove leve che arrivano a metà classifica: Jacopo Andreotti molto brillante, Alessandro Bartoli, Paolo Cipriani, Samuele Fedi, Giulio Innocenti, Massimo Venturi.

Nei tornei individuali Cristoforo Biagini arriva in finale nel torneo quinta categoria di Vicopisano sconfitto in finale da Giulio Campagna.`,
    photos: [],
  },
  {
    id: "2022-2023",
    yearStart: 2022,
    yearEnd: 2023,
    description: `Prima dell'inizio della stagione avviene l'unione con la società TT Virtus Quarrata dopo quasi 10 anni dalla separazione. La società TT Pistoia acquisisce gli atleti del Quarrata mantenendo i titoli sportivi del Pistoia e perdendo quelli del Quarrata.

Nella stagione 2022 - 2023 Pistoia torna in C2 e la formazione è composta da Cristoforo Biagini, Milo Biagini, Luca Pancani, Gabriele Roselli, Armando Spinicci e centra una storica promozione in serie C1 a quasi vent'anni dalla precedente promozione. La promozione è raggiunta dopo due fasi di playoff con la vittoria per 5 a 2 contro il CIATT Firenze con 3 punti di Davide Ruggiero che recupera da un brutto infortunio alla caviglia e 1 punto di Cristoforo e Milo Biagini. In serie D1 la squadra sfiora la promozione con Jacopo Andreotti, Mirko Borgioli e Andrea Corsini. In serie D2 altra promozione con la squadra A composta da Moreno Biagini, Guelfo Frateschi, Massimo Ferrari e Luigi Tosi. La squadra B arriva a metà classifica con Gianluca Biagioni, Samuele Fedi, Alessandro Giacomelli, Niccolò Gori e Lorenzo Pallesi. In serie D3 siamo protagonisti di un'altra vittoria e conseguente promozione per Alessandro Bartoli, Federico Colli, Lorenzo Fortino, Alessandro Granchi, Massimo Venturi.

Nei tornei individuali ottimi risultati: Davide Ruggiero perde in finale con Citi al torneo di Cascina sconfiggendo in semifinale il compagno di società Cristoforo Biagini. Andrea Corsini arriva al terzo posto del torneo di Sesto Fiorentino nell'over 2000.`,
    photos: [],
  },
  {
    id: "2023-2024",
    yearStart: 2023,
    yearEnd: 2024,
    description: `Nella stagione 2023 - 2024 Pistoia torna in C1 nazionale e la formazione è composta da Cristoforo Biagini, Milo Biagini, Paolo Gori e Davide Ruggiero. Inseriti in un girone di ferro la squadra va incontro alla retrocessione inevitabile. Anche la C2 è inserita in un girone di ferro e purtroppo retrocede in serie D1. La squadra è composta da Jacopo Andreotti, Mirko Borgioli, Andrea Corsini e Luca Pancani. In serie D1 la squadra composta da Moreno Biagini, Guelfo Frateschi, Massimo Ferrari e Niccolò Gori purtroppo retrocede in serie D2. In serie D2 la squadra A arriva all'ultimo posto ma non retrocede. La squadra è composta da Alessandro Bartoli, Gianluca Biagioni, Antonio Frangioni, Gabriele Roselli e Massimo Venturi. La squadra B è composta da Sergio Maria Borgo, Alessandro Giacomelli, Alessandro Granchi e Luigi Tosi ed arriva a metà classifica. In serie D3 arriviamo ad un brillante secondo posto con Giulio Borrello, Federico Colli, Samuele Fedi e Lorenzo Fortino.

Nei tornei individuali ancora ottimi risultati: Davide Ruggiero vince il torneo assoluto di Cascina, Luca Pancani vince il torneo open over 1500 di Sesto Fiorentino e arriva in semifinale al torneo open over 1000 di Firenze e Cristoforo Biagini arriva al terzo posto nei campionati regionali di quarta categoria di Forte dei Marmi. Mirko Borgioli è terzo nel torneo over 2000 di Vaiano.`,
    photos: [],
  },
];
