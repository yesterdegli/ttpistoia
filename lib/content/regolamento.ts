export interface RegoleClause {
  number: string;
  text: string;
}

export interface RegoleChapter {
  number: number;
  title: string;
  clauses: RegoleClause[];
}

export const regolamento: RegoleChapter[] = [
  {
    "number": 1,
    "title": "Il Tavolo",
    "clauses": [
      {
        "number": "1.1",
        "text": "La superficie superiore del tavolo chiamata “superficie di gioco”, deve essere rettangolare di metri 2,74 di lunghezza e di metri 1,525 di larghezza e deve trovarsi su un piano orizzontale a metri 0,76 dal pavimento."
      },
      {
        "number": "1.2",
        "text": "La superficie di gioco comprende i bordi superiori del tavolo ma non i lati del tavolo sotto i bordi."
      },
      {
        "number": "1.3",
        "text": "La superficie di gioco può essere di qualsiasi materiale e deve produrre un rimbalzo uniforme di circa 23,00 centimetri. quando una pallina regolamentare è lasciata cadere da un’altezza di centimetri 30,00."
      },
      {
        "number": "1.4",
        "text": "La superficie di gioco deve essere di colore uniformemente scuro e opaco, ma con una “ linea laterale ” bianca, di centimetri 2,00 di larghezza, lungo ogni bordo di metri 2,74 ed una “linea di fondo ” bianca, larga 2,00 centimetri, lungo ogni bordo di metri 1,525."
      },
      {
        "number": "1.5",
        "text": "La superficie di gioco deve essere divisa in due “campi” uguali da una rete verticale parallela alle linee di fondo e deve essere continua per tutta l’estensione di ciascun campo."
      },
      {
        "number": "1.6",
        "text": "Per il doppio, ogni campo deve essere diviso in due “metà campo” uguali da una linea centrale bianca di millimetri 3 di larghezza parallela alle linee laterali; la linea centrale deve essere considerata parte di ciascuna metà campo destra."
      }
    ]
  },
  {
    "number": 2,
    "title": "La Rete",
    "clauses": [
      {
        "number": "2.1",
        "text": "La “rete” consiste nella rete, la sua sospensione ed i paletti di sostegno, inclusi i morsetti di fissaggio al tavolo."
      },
      {
        "number": "2.2",
        "text": "La rete deve essere sospesa ad una corda fissata a ciascuna estremità ad un paletto verticale alto centimetri 15,25; i limiti esterni del paletto si devono trovare a centimetri 15,25 dalla linea laterale."
      },
      {
        "number": "2.3",
        "text": "Il bordo superiore della rete, per tutta la sua lunghezza, deve essere a centimetri 15,25 della superficie di gioco."
      },
      {
        "number": "2.4",
        "text": "La parte inferiore della rete, per tutta la sua lunghezza, deve essere il più possibile a contatto con la superficie di gioco e le sue estremità devono essere il più possibile a contatto con i paletti di sostegno."
      }
    ]
  },
  {
    "number": 3,
    "title": "La Pallina",
    "clauses": [
      {
        "number": "3.1",
        "text": "La pallina deve essere sferica con un diametro di millimetri 40."
      },
      {
        "number": "3.2",
        "text": "La pallina deve pesare grammi 2,7."
      },
      {
        "number": "3.3",
        "text": "La pallina deve essere di celluloide o analogo materiale plastico e deve essere bianca o arancione ed opaca."
      }
    ]
  },
  {
    "number": 4,
    "title": "La Racchetta",
    "clauses": [
      {
        "number": "4.1",
        "text": "La racchetta può essere di qualsiasi dimensione, forma e peso ma il telaio deve essere piatto e rigido."
      },
      {
        "number": "4.2",
        "text": "Almeno l’85% dello spessore del telaio deve essere di legno naturale; uno strato adesivo all’interno del telaio può essere rinforzato con materiale fibroso come: fibra di carbonio, fibra di vetro o carta compressa, ma non deve essere più spesso del 7,5% dello spessore totale o di mm. 0,35, quale che sia il più piccolo."
      },
      {
        "number": "4.3",
        "text": "Un lato del telaio usato per colpire la pallina deve essere ricoperto, o con normale gomma puntinata con puntinatura esterna avente uno spessore totale, compreso l’adesivo, di non più di 2 millimetri, o con gomma sandwich con puntinatura interna o esterna avente uno spessore totale, compreso l’adesivo, di non più di 4 millimetri."
      },
      {
        "number": "4.3.1",
        "text": "La “normale gomma puntinata” è un singolo strato di gomma non cellulare, naturale o sintetica, con puntinatura uniformemente distribuita sulla sua superficie con una densità non inferiore a 10 per centimetri quadrato e non superiore a 30 per centimetri quadrato."
      },
      {
        "number": "4.3.2",
        "text": "La “gomma sandwich” è un singolo strato di gomma cellulare ricoperto con un singolo strato esterno di normale gomma puntinata; lo spessore della gomma puntinata non deve superare i 2 millimetri."
      },
      {
        "number": "4.4",
        "text": "Il materiale di copertura deve estendersi per tutta la superficie del telaio ma non oltre i bordi, ad eccezione della parte più vicina al manico ed impugnata dalle dita, che può essere non ricoperta o coperta con qualsiasi materiale."
      },
      {
        "number": "4.5",
        "text": "Il telaio, qualsiasi strato all’interno del telaio e qualsiasi strato di materiale di copertura o adesivo, sul lato usato per colpire la pallina, devono essere continui e di spessore uniforme."
      },
      {
        "number": "4.6",
        "text": "A partire dal 1 ottobre 2021 la superficie del materiale di copertura su un lato del telaio o la superficie di un lato del telaio, se esso non è ricoperto, dev’essere colorata in modo opaco, nero su di un lato e sull’altro di un colore vivo chiaramente distinguibile dal nero e dal colore della pallina."
      },
      {
        "number": "4.7",
        "text": "La copertura della racchetta dev’essere utilizzata senza alcun trattamento fisico, chimico o di altra natura."
      },
      {
        "number": "4.7.1",
        "text": "Leggere variazioni della continuità della superficie o dell’uniformità del colore dovute a danno accidentale o logorio, possono essere concesse purché non costituiscano un cambiamento significativo delle caratteristiche della superficie."
      },
      {
        "number": "4.8",
        "text": "All’inizio di una partita e ogni qualvolta cambi la racchetta durante una partita, un giocatore deve mostrare al suo avversario e all’arbitro la racchetta che intende usare e deve permettere loro di esaminarla."
      }
    ]
  },
  {
    "number": 5,
    "title": "Definizioni",
    "clauses": [
      {
        "number": "5.1",
        "text": "Uno scambio (rally) è il periodo durante il quale la pallina è in gioco."
      },
      {
        "number": "5.2",
        "text": "La pallina è in gioco dall’ultimo momento nel quale essa è ferma sul palmo della mano libera prima di essere intenzionalmente proiettata verso l’alto nell’esecuzione del servizio, fino a quando lo scambio si conclude con un punto o con un colpo nullo."
      },
      {
        "number": "5.3",
        "text": "Un colpo nullo (let) è uno scambio il cui punto non viene conteggiato."
      },
      {
        "number": "5.4",
        "text": "Un punto (point) è uno scambio che viene conteggiato."
      },
      {
        "number": "5.5",
        "text": "La mano della racchetta (racket hand) è la mano che tiene la racchetta."
      },
      {
        "number": "5.6",
        "text": "La mano libera (free hand) è la mano che non tiene la racchetta. Il braccio libero è il braccio della mano libera."
      },
      {
        "number": "5.7",
        "text": "Un giocatore colpisce (strikes) la pallina se la tocca con la racchetta tenuta con la mano, o con la mano che tiene la racchetta sotto il polso."
      },
      {
        "number": "5.8",
        "text": "Un giocatore ostruisce la pallina se egli, o qualsiasi cosa indossi o porti, la tocca in gioco quando la stessa è al di sopra o in movimento verso la superficie di gioco e non ha ancora oltrepassato la sua linea di fondo, sempreché non abbia già toccato la sua metà campo dopo essere stata colpita dal giocatore avversario."
      },
      {
        "number": "5.9",
        "text": "Il battitore (server) è il giocatore tenuto a colpire per primo la pallina in uno scambio."
      },
      {
        "number": "5.10",
        "text": "Il ribattitore (receiver) è il giocatore tenuto a colpire per secondo la pallina in uno scambio."
      },
      {
        "number": "5.11",
        "text": "L’arbitro (umpire) è la persona nominata per controllare un incontro."
      },
      {
        "number": "5.12",
        "text": "L’assistente arbitro (assistant umpire) è la persona nominata ad assistere l’arbitro in determinate decisioni."
      },
      {
        "number": "5.13",
        "text": "Ogni cosa che un giocatore indossa o porta (wears or carries) comprende ogni cosa che questi indossava o portava diversa dalla pallina all’inizio dello scambio."
      },
      {
        "number": "5.14",
        "text": "La linea di fondo (end line) si considera prolungata indefinitamente in entrambe le direzioni."
      }
    ]
  },
  {
    "number": 6,
    "title": "Il Servizio",
    "clauses": [
      {
        "number": "6.1",
        "text": "Il servizio inizia con la pallina liberamente posta sul palmo aperto della mano libera, ed immobile, del battitore."
      },
      {
        "number": "6.2",
        "text": "Il battitore deve quindi lanciare la pallina quasi verticalmente verso l’alto e senza imprimere effetto così che si sollevi dal palmo della mano libera di almeno 16 centimetri e ricadere senza che abbia toccato nulla prima di essere colpita dal battitore."
      },
      {
        "number": "6.3",
        "text": "Mentre la pallina sta discendendo il battitore la deve colpire in modo che nel singolo essa tocchi dapprima il suo campo e poi, dopo essere passata al di sopra o attorno alla rete, tocchi il campo del ribattitore; nel doppio, la pallina deve toccare successivamente la metà campo destra del battitore e del ribattitore."
      },
      {
        "number": "6.4",
        "text": "Dall’inizio del servizio finché è colpita, la pallina deve essere al di sopra del livello della superficie di gioco e oltre la linea di fondo del battitore, ed essa non deve essere nascosta al ribattitore da nessuna parte del corpo o dall’abbigliamento del battitore o del suo compagno di doppio."
      },
      {
        "number": "6.5",
        "text": "Appena la pallina è stata lanciata, il braccio e la mano libera del battitore devono essere rimosse dallo spazio fra la pallina e la rete. Lo spazio tra la pallina e la rete è delimitato dalla pallina, dalla rete e dalla proiezione verticale dei suoi sostegni."
      },
      {
        "number": "6.6",
        "text": "E’ responsabilità del giocatore servire in modo che l’arbitro o l’assistente arbitro possano accertarsi che egli rispetti tutti i requisiti di un servizio valido e inoltre possano decidere che il servizio è scorretto."
      },
      {
        "number": "6.6.1",
        "text": "Se l’arbitro o l’assistente arbitro sono in dubbio sulla regolarità di un servizio, possono, la prima volta che questo capita in una partita, interrompere il gioco e avvisare il battitore; ma ogni servizio successivo dello stesso giocatore o del suo compagno di doppio che è di dubbia correttezza, verrà considerato scorretto."
      },
      {
        "number": "6.7",
        "text": "Eccezionalmente l’arbitro può disattendere i requisiti di un servizio valido se è convinto che l’ottemperanza è impedita da un problema fisico."
      }
    ]
  },
  {
    "number": 7,
    "title": "Il Rinvio",
    "clauses": [
      {
        "number": "7.1",
        "text": "La pallina, servita o rinviata, deve essere colpita così che tocchi il campo dell’avversario, o direttamente o dopo aver toccato la “ rete ”."
      }
    ]
  },
  {
    "number": 8,
    "title": "L’Ordine di Gioco",
    "clauses": [
      {
        "number": "8.1",
        "text": "Nel singolare, il battitore deve prima effettuare un servizio, il ribattitore deve poi effettuare un rinvio e quindi battitore e ribattitore alternativamente devono effettuare ciascuno un rinvio."
      },
      {
        "number": "8.2",
        "text": "Nel doppio, il battitore deve prima effettuare un servizio, il ribattitore deve poi effettuare un rinvio, il compagno del battitore deve quindi effettuare un rinvio, il compagno del ribattitore deve effettuare un rinvio e quindi ciascun giocatore, secondo questa sequenza, deve effettuare un rinvio."
      },
      {
        "number": "8.3",
        "text": "Nel doppio, quando almeno un giocatore di una coppia è in carrozzina a causa di una disabilità fisica, il battitore deve prima effettuare un servizio, il ribattitore deve poi effettuare un rinvio ma successivamente qualsiasi giocatore della coppia disabile può rinviare la pallina."
      }
    ]
  },
  {
    "number": 9,
    "title": "Un Colpo Nullo",
    "clauses": [
      {
        "number": "9.1",
        "text": "Lo scambio deve considerarsi colpo nullo:"
      },
      {
        "number": "9.1.1",
        "text": "se la pallina, nel servizio, nel passare sopra o intorno alla “rete”, la tocchi, sempre che il servizio sia per il resto valido, o sia stata ostruita dal ribattitore o dal suo compagno;"
      },
      {
        "number": "9.1.2",
        "text": "se il servizio è eseguito quando, il giocatore o coppia che ribatte non sia pronto sempre che né il ribattitore né il suo compagno tentino di colpire la pallina;"
      },
      {
        "number": "9.1.3",
        "text": "se la mancata effettuazione di un servizio valido o un rinvio valido o altrimenti la mancata osservanza delle regole, è dovuta ad un disturbo fuori del controllo del giocatore;"
      },
      {
        "number": "9.1.4",
        "text": "se il gioco è interrotto dall’arbitro o dall’assistente arbitro;"
      },
      {
        "number": "9.1.5",
        "text": "se il ribattitore è in carrozzina a causa di una disabilità fisica e la pallina, durante il servizio, sempre che questo sia per il resto valido:"
      },
      {
        "number": "9.1.5.1",
        "text": "ritorna verso la rete dopo aver toccato la metà campo del ribattitore oppure;"
      },
      {
        "number": "9.1.5.2",
        "text": "si ferma nella metà campo del ribattitore oppure;"
      },
      {
        "number": "9.1.5.3",
        "text": "in una gara di singolo rimbalza sulla metà campo del ribattitore uscendo poi da una delle sue linee laterali."
      },
      {
        "number": "9.2",
        "text": "il gioco può essere interrotto per:"
      },
      {
        "number": "9.2.1",
        "text": "correggere un errore nell’ordine di servizio, risposta o cambio campo;"
      },
      {
        "number": "9.2.2",
        "text": "introdurre il sistema accelerato;"
      },
      {
        "number": "9.2.3",
        "text": "ammonire o penalizzare un giocatore o un tecnico/accompagnatore;"
      },
      {
        "number": "9.2.4",
        "text": "perché le condizioni di gioco sono disturbate in modo tale che potrebbero influenzare l’esito dello scambio."
      }
    ]
  },
  {
    "number": 10,
    "title": "Il Punto",
    "clauses": [
      {
        "number": "10.1",
        "text": "Salvo il caso dello scambio dichiarato colpo nullo, un giocatore acquisisce un punto:"
      },
      {
        "number": "10.1.1",
        "text": "se il suo avversario non esegue un servizio corretto;"
      },
      {
        "number": "10.1.2",
        "text": "se il suo avversario non esegue un rinvio corretto;"
      },
      {
        "number": "10.1.3",
        "text": "se la pallina, dopo essere stata servita o rinviata, tocca qualunque cosa tranne che la rete prima di essere colpita dal suo avversario;"
      },
      {
        "number": "10.1.4",
        "text": "se la pallina, dopo essere stata colpita dal suo avversario, passa al di sopra della sua parte del tavolo o oltre la linea di fondo senza aver toccato il suo campo;"
      },
      {
        "number": "10.1.5",
        "text": "se la pallina, dopo essere stata colpita dal suo avversario, passa attraverso la rete oppure tra la rete e i paletti di sostegno oppure tra la rete e la superficie di gioco."
      },
      {
        "number": "10.1.6",
        "text": "se il suo avversario ostruisce la pallina;"
      },
      {
        "number": "10.1.7",
        "text": "se il suo avversario colpisce intenzionalmente la pallina più di una volta in successione;"
      },
      {
        "number": "10.1.8",
        "text": "se il suo avversario colpisce la pallina con un lato del telaio della racchetta la cui superficie non risponde ai requisiti del punto 4.3, 4.4, 4.5;"
      },
      {
        "number": "10.1.9",
        "text": "se il suo avversario, o qualsiasi cosa indossi o porti, muove la superficie di gioco;"
      },
      {
        "number": "10.1.10",
        "text": "se il suo avversario, o qualsiasi cosa indossi o porti, tocca la rete;"
      },
      {
        "number": "10.1.11",
        "text": "se la mano libera del suo avversario tocca la superficie di gioco;"
      },
      {
        "number": "10.1.12",
        "text": "se, nel doppio, il suo avversario colpisce la pallina fuori dal proprio turno;"
      },
      {
        "number": "10.1.13",
        "text": "se si verifica quanto riportato nell’articolo 15.4 sul sistema accelerato;"
      },
      {
        "number": "10.1.14",
        "text": "se uno o entrambi i giocatori sono in carrozzina a causa di una disabilità fisica e:"
      },
      {
        "number": "10.1.14.1",
        "text": "il loro avversario non mantiene un minimo contatto tra la seduta o il cuscino e la parte posteriore della coscia quando la pallina viene colpita;"
      },
      {
        "number": "10.1.14.2",
        "text": "il loro avversario tocca il tavolo con una qualsiasi mano prima di colpire la pallina;"
      },
      {
        "number": "10.1.14.3",
        "text": "i piedi o la pedana del loro avversario toccano il pavimento durante il gioco;"
      },
      {
        "number": "10.1.15",
        "text": "se, quando la coppia avversaria comprende almeno un giocatore in carrozzina, qualsiasi parte di essa o il piede del suo compagno in piedi superano l’immaginario prolungamento della linea mediana del tavolo"
      }
    ]
  },
  {
    "number": 11,
    "title": "Un Set",
    "clauses": [
      {
        "number": "11.1",
        "text": "Un set sarà vinto da un giocatore o coppia che per prima totalizza 11 punti, ma quando entrambi i giocatori o coppie totalizzano 10 punti, il set sarà vinto dal giocatore o coppia che per primo totalizza 2 punti consecutivi più del suo avversario o coppia."
      }
    ]
  },
  {
    "number": 12,
    "title": "Una Partita",
    "clauses": [
      {
        "number": "12.1",
        "text": "Una partita deve essere disputata al meglio di qualsiasi numero dispari di set."
      }
    ]
  },
  {
    "number": 13,
    "title": "La Scelta del Servizio, della Risposta e del Campo",
    "clauses": [
      {
        "number": "13.1",
        "text": "Il diritto di scegliere l’ordine iniziale di servizio, di risposta ed il campo deve essere deciso per sorteggio, e il vincitore può scegliere di servire o ricevere per primo o di iniziare in un determinato campo."
      },
      {
        "number": "13.2",
        "text": "Quando un giocatore od una coppia hanno scelto di servire o di ricevere per primi o il campo, all’altro giocatore o coppia resterà l’altra scelta."
      },
      {
        "number": "13.3",
        "text": "Dopo che sono stati conteggiati 2 punti il giocatore o coppia che ribatte diverrà battitore e così fino al termine del set o finché entrambi i giocatori o coppie raggiungano i 10 punti, o fino all’introduzione dell’Expedite System, nel qual caso la successione del servizio e della risposta deve rimanere la stessa, ma ogni giocatore o coppia deve servire per un solo punto a turno."
      },
      {
        "number": "13.4",
        "text": "In ciascun set di una partita di doppio, la coppia che ha diritto di servire per prima deve decidere quale dei giocatori inizierà a servire e la coppia avversaria deve decidere poi quale dei giocatori riceverà per primo; nelle successivi set dell’incontro, scelto il primo battitore, il primo ribattitore deve essere il giocatore che serviva su di lui nel set immediatamente precedente."
      },
      {
        "number": "13.5",
        "text": "Nel doppio, a ciascun cambio di servizio il precedente ribattitore diventerà battitore e il compagno del precedente battitore diventerà ribattitore."
      },
      {
        "number": "13.6",
        "text": "Il giocatore o coppia che serve per primo in un set deve ricevere per primo nel set immediatamente successivo della partita e, nell’ultimo possibile set di una partita di doppio, la coppia che deve ricevere successivamente, deve cambiare l’ordine di ribattuta quando una coppia raggiunge i 5 punti."
      },
      {
        "number": "13.7",
        "text": "Il giocatore o coppia che inizia un set in un campo deve cambiare campo nel set immediatamente seguente dell’incontro e, nell’ultimo possibile set di un incontro, i giocatori devono cambiare campo quando il primo giocatore o coppia raggiunge i 5 punti."
      }
    ]
  },
  {
    "number": 14,
    "title": "Errori nell’Ordine di Servizio, di Risposta o di Campo",
    "clauses": [
      {
        "number": "14.1",
        "text": "Se un giocatore serve o riceve fuori turno, il gioco deve essere interrotto dall’arbitro appena l’errore viene rilevato e deve riprendere con quei giocatori che avrebbero dovuto rispettivamente servire e ricevere al punteggio raggiunto, seguendo la successione stabilita all’inizio della partita e, nel doppio, l’ordine di servizio scelto dalla coppia che aveva il diritto di servire per prima nel set durante il quale è stato scoperto l’errore."
      },
      {
        "number": "14.2",
        "text": "Se i giocatori non hanno cambiato il campo quando avrebbero dovuto farlo, il gioco deve essere interrotto dall’arbitro appena l’errore viene scoperto e deve riprendere con i giocatori nel campo che avrebbero dovuto occupare al punteggio raggiunto secondo la successione stabilita all’inizio della partita."
      },
      {
        "number": "14.3",
        "text": "In ogni caso, tutti i punti assegnati prima della scoperta di un errore devono essere considerati acquisiti."
      }
    ]
  },
  {
    "number": 15,
    "title": "Il Sistema Accelerato (Expedite System)",
    "clauses": [
      {
        "number": "15.1",
        "text": "Eccetto quanto disposto dal successivo articolo 15.2, il Sistema Accelerato deve essere introdotto se un set non è terminato dopo 10 minuti di gioco o in qualunque momento su richiesta di entrambi i giocatori o coppie."
      },
      {
        "number": "15.2",
        "text": "Il Sistema Accelerato non verrà introdotto se nel set sono stati assegnati almeno 18 punti."
      },
      {
        "number": "15.3",
        "text": "Se la pallina è in gioco quando viene raggiunto il tempo limite, e viene introdotto il Sistema Accelerato, il gioco deve essere “interrotto dall’arbitro” e ripreso con il servizio al giocatore che serviva nello scambio interrotto; se la pallina non è in gioco quando viene raggiunto il tempo limite, il gioco deve essere ripreso con il servizio al giocatore che riceveva nello scambio immediatamente precedente."
      },
      {
        "number": "15.4",
        "text": "Quindi ciascun giocatore deve servire per un punto a turno sino alla fine del set e se il giocatore o la coppia che ribatte effettua tredici (13) rinvii validi, il ribattitore acquisirà il punto."
      },
      {
        "number": "15.5",
        "text": "L’introduzione del Sistema Accelerato non dovrà alterare l’ordine del servizio e risposta nella partita come definito nell’articolo 13.6."
      },
      {
        "number": "15.6",
        "text": "Una volta introdotto, il Sistema Accelerato resterà in vigore fino al termine della partita."
      }
    ]
  }
];
