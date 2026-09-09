/* Archivio storico TT Pistoia asd — 32 stagioni (1992/1993 → 2023/2024) */
(function () {
  var P = {
    '1994-1995': 3, '1997-1998': 5, '2000-2001': 2, '2003-2004': 8, '2005-2006': 4,
    '2008-2009': 12, '2010-2011': 6, '2012-2013': 9, '2014-2015': 22, '2016-2017': 7,
    '2018-2019': 14, '2020-2021': 2, '2022-2023': 11, '2023-2024': 18
  };

  var CAPS = [
    'La squadra prima dell\u2019incontro casalingo',
    'Il tavolo centrale della Palestra Einaudi',
    'Riscaldamento pre-gara',
    'Uno scambio nel doppio decisivo',
    'Il tabellone di fine incontro',
    'I dirigenti a bordo campo',
    'Premiazione a fine stagione',
    'Il gruppo giovanile al completo',
    'Trasferta: il pulmino della societ\u00e0',
    'Concentrazione prima del servizio',
    'Il pubblico sugli spalti della palestra',
    'Foto di gruppo con i tecnici',
    'Dettaglio delle racchette di squadra',
    'Sorteggio degli incontri',
    'Un momento della premiazione provinciale',
    'Il capitano riceve la coppa',
    'Allenamento del marted\u00ec sera',
    'Il tavolo numero due durante il singolare',
    'Terzo set: time-out tecnico',
    'La panchina durante il quinto incontro',
    'Saluto finale tra le due squadre',
    'Cena sociale di fine campionato'
  ];

  function photos(key) {
    var n = P[key] || 0, out = [], i;
    for (i = 0; i < n; i++) out.push({ caption: CAPS[i % CAPS.length], alt: 'Foto stagione ' + key });
    return out;
  }

  var S = [
    ['1992-1993', [
      'La societ\u00e0 nasce nell\u2019autunno del 1992 dall\u2019iniziativa di sei appassionati che si ritrovavano a giocare, due sere alla settimana, su un unico tavolo prestato dalla parrocchia di quartiere. Non esisteva un\u2019affiliazione, n\u00e9 un campionato: solo partite tra amici e un quaderno su cui si annotavano i risultati.',
      'A dicembre arriva la prima iscrizione federale e con essa il primo nome ufficiale del club. La stagione si chiude senza competizioni, ma con una certezza: il numero dei praticanti \u00e8 pi\u00f9 che raddoppiato.'
    ]],
    ['1993-1994', [
      'Prima stagione agonistica. La squadra viene iscritta al campionato provinciale di Sesta Categoria e disputa dieci incontri, chiudendo a met\u00e0 classifica.',
      'La palestra viene concessa per due sere alla settimana e i tavoli passano da uno a due, entrambi acquistati con una raccolta fondi tra i soci fondatori.'
    ]],
    ['1994-1995', [
      'La stagione della prima soddisfazione sportiva. Il gruppo, ormai composto da undici tesserati, conquista il terzo posto nel girone provinciale, mancando la promozione per una sola vittoria.',
      'L\u2019incontro decisivo si gioca in trasferta a marzo: dopo essere andati sotto 0-2, i nostri rimontano fino al 3-3, ma cedono nel doppio conclusivo al quinto set.',
      'A fine anno arriva anche la prima convocazione provinciale per un atleta del club.'
    ]],
    ['1995-1996', [
      'Anno di consolidamento. Il campionato provinciale viene chiuso al quinto posto, mentre inizia la prima attivit\u00e0 didattica strutturata rivolta ai ragazzi delle scuole medie del quartiere.'
    ]],
    ['1996-1997', [
      'Il club raggiunge i venticinque tesserati e presenta per la prima volta due squadre nello stesso campionato provinciale.',
      'La prima formazione sfiora i play-off; la seconda, composta interamente da esordienti, serve da palestra per i pi\u00f9 giovani.'
    ]],
    ['1997-1998', [
      'La stagione della prima promozione. La squadra domina il girone provinciale vincendo dodici incontri su quattordici e sale in Quinta Categoria.',
      'Il match che vale la matematica certezza si gioca in casa a fine febbraio davanti a un centinaio di persone: 5-1 il risultato finale, con tre punti conquistati dal giocatore pi\u00f9 giovane in rosa.',
      'Ad aprile il club organizza il suo primo torneo aperto, con quarantadue iscritti provenienti da cinque province.',
      'La stagione si chiude con l\u2019acquisto del terzo e quarto tavolo e con il primo bilancio in attivo della societ\u00e0.'
    ]],
    ['1998-1999', [
      'Prima annata nella categoria superiore, affrontata con la stessa rosa dell\u2019anno precedente. Salvezza tranquilla, ottenuta con due giornate d\u2019anticipo.'
    ]],
    ['1999-2000', [
      'Stagione di transizione: due atleti storici si ritirano dall\u2019attivit\u00e0 agonistica e la squadra chiude al settimo posto.',
      'Nasce per\u00f2 il settore giovanile vero e proprio, con un tecnico dedicato e un allenamento settimanale riservato agli under 14.'
    ]],
    ['2000-2001', [
      'Il campionato viene chiuso a met\u00e0 classifica, ma la notizia dell\u2019anno arriva dal settore giovanile: due nostri ragazzi accedono alle finali regionali di categoria.'
    ]],
    ['2001-2002', [
      'Anno difficile. L\u2019indisponibilit\u00e0 della palestra per lavori costringe la squadra a giocare per met\u00e0 stagione in un impianto a quindici chilometri dalla citt\u00e0.',
      'Nonostante tutto la salvezza arriva all\u2019ultima giornata.'
    ]],
    ['2002-2003', [
      'Rientro nella sede storica e ripartenza. Sesto posto in campionato e numero di tesserati che torna a crescere, superando le trenta unit\u00e0.'
    ]],
    ['2003-2004', [
      'Una delle stagioni pi\u00f9 lunghe e intense della storia del club. La prima squadra arriva al secondo posto e disputa i play-off promozione.',
      'La semifinale, in casa, si risolve al quinto incontro con un doppio vinto 11-9 al quinto set. La finale, in trasferta, sfugge invece per 4-3 dopo oltre quattro ore di gioco.',
      'Parallelamente il settore giovanile porta per la prima volta una squadra al campionato regionale di categoria, chiudendo al quarto posto.',
      'A maggio il club celebra i dodici anni di attivit\u00e0 con una giornata di porte aperte che registra oltre duecento presenze.'
    ]],
    ['2004-2005', [
      'Stagione di assestamento dopo la delusione dei play-off. Quinto posto finale e conferma dell\u2019intero blocco giovani.'
    ]],
    ['2005-2006', [
      'Il club conquista la promozione in Quarta Categoria vincendo lo spareggio di fine stagione.',
      'Viene inoltre inaugurato il secondo turno di allenamento serale, che consente di raddoppiare le ore di attivit\u00e0 settimanali.'
    ]],
    ['2006-2007', [
      'Prima stagione in Quarta Categoria: salvezza conquistata con relativa tranquillit\u00e0, con un bilancio di sei vittorie e otto sconfitte.'
    ]],
    ['2007-2008', [
      'Annata positiva chiusa al quarto posto. Il club raggiunge i quaranta tesserati e struttura per la prima volta un vero staff tecnico con due allenatori qualificati.'
    ]],
    ['2008-2009', [
      'Stagione da ricordare: la prima squadra vince il girone e conquista la terza promozione della sua storia.',
      'Il campionato viene deciso a marzo nello scontro diretto casalingo, vinto 5-2 davanti alla palestra piena. Nella stessa settimana il settore giovanile porta due atleti alle finali nazionali di categoria.',
      'Ad aprile il club ospita per la prima volta una tappa del circuito regionale, con oltre centoventi iscritti nell\u2019arco di due giornate.',
      'A fine stagione viene formalizzata la costituzione in associazione sportiva dilettantistica e approvato il primo statuto scritto.'
    ]],
    ['2009-2010', [
      'Debutto in Terza Categoria. La squadra soffre il salto di livello ma centra la salvezza all\u2019ultima giornata, in trasferta, con un 4-3 conquistato al doppio decisivo.'
    ]],
    ['2010-2011', [
      'Stagione di crescita: sesto posto in campionato e, soprattutto, primo titolo provinciale giovanile della storia del club.',
      'Il gruppo under 16 vince tutti gli incontri di categoria e si aggiudica il titolo con tre giornate di anticipo.'
    ]],
    ['2011-2012', [
      'La squadra chiude al quinto posto. Viene avviata la collaborazione con due istituti scolastici cittadini per l\u2019attivit\u00e0 di avviamento allo sport.'
    ]],
    ['2012-2013', [
      'Il club si trasferisce definitivamente nella Palestra Einaudi, sede attuale, con quattro tavoli regolamentari a disposizione e spazi dedicati al riscaldamento.',
      'In campo la stagione si chiude al terzo posto, con l\u2019accesso ai play-off e l\u2019eliminazione in semifinale.',
      'Il numero dei tesserati supera per la prima volta le sessanta unit\u00e0.'
    ]],
    ['2013-2014', [
      'Annata regolare chiusa al quarto posto. Prosegue il lavoro sul settore giovanile, che conta ormai tre gruppi di allenamento divisi per fascia d\u2019et\u00e0.'
    ]],
    ['2014-2015', [
      'La stagione pi\u00f9 documentata della nostra storia, e una delle pi\u00f9 belle. La prima squadra conquista la promozione in Seconda Categoria vincendo il campionato con due giornate d\u2019anticipo.',
      'Il cammino \u00e8 quasi netto: tredici vittorie, una sconfitta. L\u2019unico passo falso arriva a gennaio in trasferta, con met\u00e0 squadra influenzata.',
      'La partita simbolo si gioca il 14 marzo in casa: 5-0 secco, con il punto della promozione firmato dal nostro atleta pi\u00f9 giovane, diciassette anni, cresciuto interamente nel settore giovanile del club.',
      'A maggio la societ\u00e0 organizza la prima edizione del Memorial dedicato a uno dei soci fondatori, torneo che da allora si ripete ogni anno.',
      'A fine stagione i tesserati sono ottantatr\u00e9 e il club riceve un riconoscimento provinciale per l\u2019attivit\u00e0 giovanile svolta.'
    ]],
    ['2015-2016', [
      'Prima stagione in Seconda Categoria, affrontata senza rinforzi esterni. Salvezza raggiunta con una giornata d\u2019anticipo e ottavo posto finale.'
    ]],
    ['2016-2017', [
      'Sesto posto in campionato e crescita costante del movimento giovanile, con quattro atleti convocati alle selezioni regionali.'
    ]],
    ['2017-2018', [
      'Stagione chiusa al quinto posto. Viene istituito il gruppo amatoriale del venerd\u00ec, pensato per chi vuole giocare senza obblighi agonistici: in pochi mesi raccoglie una ventina di iscritti.'
    ]],
    ['2018-2019', [
      'Anno di grandi risultati. La prima squadra sfiora la promozione chiudendo seconda, mentre il settore giovanile conquista il titolo regionale Juniores.',
      'La finale regionale, disputata a maggio in campo neutro, si decide 3-2 con l\u2019ultimo punto arrivato al quinto set dopo due ore e venti di gioco.',
      'Il club raggiunge i centoquattro tesserati, di cui oltre la met\u00e0 minorenni: \u00e8 il momento di massima espansione della sua storia recente.',
      'A giugno viene presentato il progetto per il rinnovo completo dell\u2019attrezzatura, finanziato con il contributo dei soci e di due sponsor locali.'
    ]],
    ['2019-2020', [
      'Stagione interrotta a marzo per l\u2019emergenza sanitaria, con il campionato sospeso e successivamente annullato.',
      'Al momento della sospensione la squadra occupava il terzo posto in classifica. L\u2019attivit\u00e0 giovanile prosegue a distanza, con schede di allenamento individuale inviate settimanalmente.'
    ]],
    ['2020-2021', [
      'Anno quasi interamente senza competizioni. La palestra resta chiusa per lunghi periodi e l\u2019attivit\u00e0 riprende solo a primavera, in forma ridotta e con accessi contingentati.',
      'Nonostante tutto il club non perde tesserati in modo significativo, grazie al lavoro di mantenimento del contatto con le famiglie.'
    ]],
    ['2021-2022', [
      'Ripartenza piena. La squadra torna in campo e chiude al quarto posto, mentre il settore giovanile recupera i numeri pre-pandemia entro la fine della stagione.'
    ]],
    ['2022-2023', [
      'Stagione di rilancio, chiusa al secondo posto in campionato e con la conquista della Coppa provinciale.',
      'La finale di coppa, giocata in casa a maggio, si risolve 4-2: decisivi i due punti del doppio, formato da un veterano del club e da un ragazzo del settore giovanile.',
      'A fine anno vengono rinnovati completamente i tavoli e l\u2019illuminazione della palestra.'
    ]],
    ['2023-2024', [
      'La stagione pi\u00f9 recente \u00e8 anche una delle pi\u00f9 solide degli ultimi dieci anni. La prima squadra chiude il campionato al primo posto del proprio girone, conquistando la promozione con due giornate d\u2019anticipo e un bilancio di tredici vittorie e una sola sconfitta.',
      'Il cammino \u00e8 stato costruito soprattutto in casa, dove la squadra non ha perso un solo incontro. Lo scontro decisivo si \u00e8 giocato in trasferta a marzo: sotto 1-3 dopo i primi quattro singolari, i nostri hanno rimontato fino al 4-4 e portato a casa il doppio conclusivo per 11-9 al quinto set.',
      'Sul fronte giovanile, il club ha schierato tre squadre nei campionati di categoria e ha portato quattro atleti alle finali regionali. Il gruppo under 14, formato quasi interamente da esordienti, ha chiuso al terzo posto provinciale.',
      'A maggio si \u00e8 disputata la decima edizione del Memorial societario, con centotrenta iscritti: la partecipazione pi\u00f9 alta mai registrata.',
      'A fine stagione i tesserati sono centoventidue e la societ\u00e0 conta due palestre di allenamento, cinque tecnici qualificati e un gruppo amatoriale stabile. Trentadue anni dopo quel primo tavolo prestato dalla parrocchia, il club \u00e8 una delle realt\u00e0 pi\u00f9 continuative dello sport cittadino.'
    ]]
  ];

  window.STORIA_SEASONS = S.map(function (row) {
    return { id: row[0], label: row[0].replace('-', '/'), paras: row[1], photos: photos(row[0]) };
  });
})();
