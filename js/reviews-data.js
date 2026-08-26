// In questa classe ci devo solo aggiungere le recensioni per non girare con l'API di Google che ad un certo punto costerà
const REVIEWS_DATA = [
    {
        author: 'Evelin Guarna',
        avatar: '🐶',
        rating: 5,
        text: 'Super super carini letizia e Samuel amano gli animali e si sente, il mio cucciolo (maltipoo) li adora entrambi, io da proprietaria posso dire che sono seri, puntuali ed affidabili, che non è poco. Li consiglio vivamente',
        service: 'Dog Sitting',
        date: '4 Marzo 2026'
    },
    {
        author: 'Vanna Cialdoni',
        avatar: '🐶',
        rating: 5,
        text: 'Mi sono affidata ai servizi di Letizia e Samuel durante una breve vacanza dove non potevo portare con me i miei amici pelosetti, loro venivano tutti i giorni a casa, due volte al giorno, davano loro da mangiare, gli facevano tante coccole e li portavano a passeggio, ero tranquilla perché mi mandavano anche foto e video dove vedevo i miei cagnolini felici, sono molto contenta, ero titubante perché sono cani di grossa taglia, ma hanno gestito tutto ottimamente',
        service: 'Dog Sitting',
        date: '6 Marzo 2026'
    },
    /* {
        author: 'Irene',
        avatar: '😺',
        rating: 5,
        text: 'Letizia e Samuel sono stati bravissimi e super affidabili, hanno guardato e provveduto alle mie due gatte durante un breve periodo in cui ho dovuto assentarmi e non ho potuto portarli con me. Mandano tante foto e video se richiesti con aggiornamenti tempestivi sui nostri animali, così mi sento tranquilla a lasciarli per qualche giorno! Sono garantite anche ore di gioco e svago, somministrazione del cibo e treats vari e pulizia lettiera.',
        service: 'Cat Sitting',
        date: '7 Marzo 2026'
    },
    {
        author: 'Viola Tenace',
        avatar: '🐶',
        rating: 5,
        text: 'Ragazza fantastica! Mi ha aiutato a portare fuori la Zoe tutte le volte che ne avevo bisogno e mi mandava sempre tante foto. Grazie ancora !!',
        service: 'Dog Sitting',
        date: '10 Marzo 2026'
    }, */
    {
        author: 'Cristina Claudia Cottini',
        avatar: '🐶',
        rating: 5,
        text: 'Letizia con Tommy e fantastica,poi sempre puntuale e disponibile,non mi ha mai detto di no con i turni che faccio poi.La consiglio.',
        service: 'Dog Sitting',
        date: '12 Marzo 2026'
    },
    {
        author: 'Francesco Franciosa',
        avatar: '🐶',
        rating: 5,
        text: 'Abbiamo lasciato il nostro barboncino toy a Samuel e Letizia e non potevamo fare scelta migliore. Fin dal primo momento si sono dimostrati estremamente premurosi, attenti e pieni di amore per gli animali. Durante tutto il periodo di custodia ci hanno tenuti aggiornati con foto e video meravigliosi del nostro piccolo, dove si percepisce chiaramente la passione e la dedizione che mettono in quello che fanno. Vedere il nostro cane sereno, giocare e ricevere tante attenzioni ci ha davvero tranquillizzati. Samuel e Letizia non fanno semplicemente i dog sitter: si prendono cura dei cani con affetto, come se fossero i loro. Consigliatissimi a chiunque voglia lasciare il proprio amico a quattro zampe in mani sicure, amorevoli e professionali. Grazie ancora di cuore!',
        service: 'Dog Sitting',
        date: '17 Marzo 2026'
    },
    {
        author: 'laura guacci',
        avatar: '🐶',
        rating: 5,
        text: 'Ho affidato la mia cagnolina a Letizia e a Samuel mentre da turista visitavo gli Uffizi e palazzo Pitti. Gentili, affettuosi, precisi e amanti dei cani. Li consiglio vivamente!',
        service: 'Dog Sitting',
        date: '22 Marzo 2026'
    },
    {
        author: 'Renata S',
        avatar: '🐶',
        rating: 5,
        text: 'Anche la mia Lira è tornata tutta contenta dopo la passeggiata con i ragazzi. Bravissimi, molto attenti. Straconsiglio',
        service: 'Dog Sitting',
        date: '25 Marzo 2026'
    },
    {
        author: 'Fabio Bucciardini',
        avatar: '🐶',
        rating: 5,
        text: 'Samuel e Letizia, sono due angeli! Appassionati, precisi e generosi. Hanno ospitato per una settimana Tommy il cane di un nostro caro, ma sono stati già famiglia per lui. In questo tempo hanno dimostrato grande generosità di cuore e professionalità. Se ci fosse anche una sesta stella io gliela darei!',
        service: 'Dog Sitting',
        date: '18 Aprile 2026'
    },
    {
        author: 'Armin Wurzer',
        avatar: '🐶',
        rating: 5,
        text: 'Samuel e Letizia sono veramente bravissimi! Si capisce subite che lo fanno con passione e animo! Sono puntuali, fiducosi e capisci subito che se ne intendono. Ti mandano foto e video, cosi sei sempre informato! Il nostro Border ( che é molto offeso, se non va come gli piace) si é trovato benissimo ed era tutto contento dopo! Ancora un grandissimo grazie!!! Per chi ne avesse bisogno: SOLO DA CONSIGLIARE!!!!',
        service: 'Dog Sitting',
        date: '8 Maggio 2026'
    },
    {
        author: 'Paolo Laschi',
        avatar: '🐔',
        rating: 5,
        text: `Un'eccellenza assoluta per ogni tipo di animale! Ho affidato ai ragazzi di "Zampe in Famiglia" il mio gallo Mauritius lo scorso mese in attesa che fosse pronto il nuovo pollaio e non potevo fare scelta migliore. Gestire un gallo non è da tutti: richiede attenzioni specifiche, sensibilità e una comprensione profonda delle sue abitudini. I ragazzi si sono dimostrati straordinariamente bravi, competenti e super premurosi fin dal primo giorno. Mi hanno aggiornato costantemente, dandomi una serenità incredibile. Si vede che fanno questo lavoro con un amore e una passione rari. Mauritius è tornato a casa sereno e coccolato. Consigliatissimi per chiunque cerchi una seconda famiglia per i propri animali, anche quelli più "insoliti"! Grazie di cuore ragazzi.`,
        service: 'Pet Sitting',
        date: '4 Giugno 2026'
    },
    {
        author: 'Alessia Petracchi',
        avatar: '🐶',
        rating: 5,
        text: 'Abbiamo affidato a questi due straordinari ragazzi per 5 giorni Willy il nostro canino vecchietto di ben 16 anni con le sue problematiche e fissazioni dovute all’ età e con il suo caratterino per nulla semplice …Letizia e Samuel si sono presi cura di Willy nel migliore dei modi… si sono adeguati a tutte le sue esigenze , lo hanno straviziato e ci hanno aggiornato continuamente più volte al giorno … che dire li ho trovati per caso ma non potevo trovare di meglio… non finirò mai di ringraziarli… ❤️🐶',
        service: 'Dog Sitting',
        date: '8 Giugno 2026'
    },
    {
        author: 'Miriana Romanazzo',
        avatar: '🐶',
        rating: 5,
        text: `Esperienza fantastica! Abbiamo affidato la nostra cagnolina a Samuel e Letizia per tre giorni e sono stati eccezionali. Super dolci, attenti e premurosi, ci hanno mandato molti video e foto per tutta la durata del soggiorno. L'hanno amata e curata come se fosse il loro cane. Cinque stelle meritatissime!`,
        service: 'Dog Sitting',
        date: '10 Giugno 2026'
    },
    {
        author: 'Janette Monzillo',
        avatar: '🐶',
        rating: 5,
        text: `Per esigenze lavorative abbiamo dovuto lasciare il nostro cane per un giorno e, cercando su internet, abbiamo scoperto Zampe in Famiglia, ma soprattutto Samuel e Letizia: due ragazzi affidabili e autenticamente amanti degli animali. Vasco è tornato a casa sereno e rilassato e, considerando che è un levriero timoroso e diffidente con gli estranei, non è affatto un risultato scontato. Felici di aver trovato un punto di riferimento al quale affidare Vasco quando non può venire con noi. Consigliatissimi!`,
        service: 'Dog Sitting',
        date: '15 Giugno 2026'
    },
    {
        author: 'Emma Bavecchi',
        avatar: '🐶',
        rating: 5,
        text: `Samuel e Letizia si sono occupati il giorno del battesimo del mio bambino del nostro labrador Cecco ..sono ragazzi eccezionali ci sono piaciuti un sacco educati seri e carini . Cecco non si allonta mai con nessuno invece con loro ha fatto una piccola passeggiata ed è stato coccolato tutto il tempo .SUPER`,
        service: 'Eventi',
        date: '27 Giugno 2026'
    },
    {
        author: 'Carmelo Russo',
        avatar: '🐶',
        rating: 5,
        text: `Persone serie che si prendono cura del proprio amico a quattro zampe come se fosse il proprio. Ve li consiglio`,
        service: 'Dog Sitting',
        date: '30 Giugno 2026'
    },
    {
        author: 'Angela Berni',
        avatar: '🐶',
        rating: 5,
        text: `Letizia una ragazza eccezionale. Si è dimostrata gentile da subito molto dolce e professionale con la mia cagnolina. Inoltre ho apprezzato la sua disponibilità e cosa non dipoco conto le tariffe economiche. È diventata subito un punto di riferimento durante le mie assenze. Grazie di cuore!!`,
        service: 'Dog Sitting',
        date: '5 Luglio 2026'
    },
    {
        author: 'Letizia Scavuzzo',
        avatar: '😺',
        rating: 5,
        text: `Abbiamo affidato A Letizia e Samuel il nostro Mainecoon dodicenne, Bilbo. Nonostante lui non fosse mai stato con nessuno di diverso rispetto alla nostra famiglia, siamo molto soddisfatti della scelta che abbiamo fatto. Letizia e Samuel si sono presi cura di lui in ogni sua esigenza con attenzione e pazienza. Ci hanno tenuti aggiornati ogni giorno con video e fotografie. Sono due ragazzi educati, seri nel loro lavoro e disponibili ❤️ grazie ad entrambi per averci permesso di andare in vacanza tranquilli nel sapere Bilbo con voi`,
        service: 'Cat Sitting',
        date: '20 Luglio 2026'
    },
    {
        author: 'Gianluigi Caramanna',
        avatar: '🐶',
        rating: 5,
        text: `Letizia e Samuel si sono dimostrati sin da subito cortesi e professionali, hanno gestito egregiamente il mio cucciolo di 9 mesi che in genere si spazientisce e stressa facilmente in contesti nuovi ma quando sono andato a riprenderlo l'ho trovato perfettamente a suo agio. Sono stato costantemente aggiornato con foto e video perciò ho potuto godermi la giornata con la certezza che fosse in ottime mani. Dovessi tornare a Firenze sicuramente mi rivolgerò nuovamente a loro❤️`,
        service: 'Dog Sitting',
        date: '28 Luglio 2026'
    },
    {
        author: 'Giorgia C.',
        avatar: '😺',
        rating: 5,
        text: `Ci siamo affidati per la prima volta a un servizio di pet sitting e non potevamo fare scelta migliore. Letizia e Samuel si sono presi cura con grande attenzione e affetto dei nostri tre gatti, facendoci sentire tranquilli fin dal primo giorno. Durante la nostra assenza ci hanno tenuti costantemente aggiornati inviandoci foto e notizie, un gesto che abbiamo apprezzato tantissimo. Si sono dimostrati competenti, affidabili e davvero premurosi con i nostri mici.
Li consigliamo senza alcun dubbio e ci rivolgeremo senz'altro a loro anche in futuro!`,
        service: 'Cat Sitting',
        date: '29 Luglio 2026'
    },
    {
        author: 'Simone Canu',
        avatar: '😺',
        rating: 5,
        text: `Due ragazzi affidabili e simpatici.
Si percepisce l’amore per gli animali.
Consiglio.`,
        service: 'Cat Sitting',
        date: '1 Agosto 2026'
    },
    {
        author: 'Chiara Lucaccini',
        avatar: '😺',
        rating: 5,
        text: `Cercavo una sistemazione per una settimana per il mio gatto. Non volevo che stesse chiuso in una gabbia, per fortuna ho trovato Samuel e Letizia che lo hanno tenuto in casa con loro,accudito e coccolato. Io ero tranquilla perché avevo continui aggiornamenti,con foto e video. Se avete bisogno di un servizio di per sitter rivolgervi a loro, sono affidabili e ameranno anche i vostri amici animali.`,
        service: 'Cat Sitting',
        date: '4 Agosto 2026'
    },
    {
        author: 'Vito Russi',
        avatar: '😺',
        rating: 5,
        text: `abbiamo affidato la nostra gattina chloe per qualche giorno a questi ragazzi fantastici, è stata la miglior scelta! la nostra gattina con loro è stata benissimo, si è affezionata tantissimo sin dal primo istante, e vederla stare così bene ci ha fatto stare ancora più tranquilli mentre eravamo via, sono stati davvero disponibili, gentilissimi e super amorevoli con la nostra gattina, consigliatissimi! per ogni altra esigenza saranno sempre le prime persone a cui mi rivolgerò! grazie ancora!!!`,
        service: 'Cat Sitting',
        date: '5 Agosto 2026'
    },
    {
        author: 'Alessandra Benucci',
        avatar: '😺',
        rating: 5,
        text: `Contentissima di aver affidato il mio gattino alle cure amorevoli di questi ragazzi 🥰 ci hanno trasmesso affidabilità e fiducia fin dal primo momento, li ricontatteremo sicuramente! 🐈 🐾`,
        service: 'Cat Sitting',
        date: '17 Agosto 2026'
    },
    {
        author: 'Tonia Petrone',
        avatar: '😺',
        rating: 5,
        text: `Per fortuna ho trovato due ragazzi eccezionali a cui affidare il mio gattino quando non ci sono. Super affidabili, educati e disponibili.`,
        service: 'Cat Sitting',
        date: '20 Agosto 2026'
    },
];