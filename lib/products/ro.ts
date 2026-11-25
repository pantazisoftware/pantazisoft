import type { ProductCopy, ProductSlug } from "./types";

export const ro: Record<ProductSlug, ProductCopy> = {
  "fabricator-pro": {
    name: "FabricatorPro",
    category: "Aplicație de calcul pentru confecții metalice, pe iPhone",
    tagline:
      "30 de calculatoare pentru confecții metalice: tăieturi la unghi, șei de țeavă, desfășurate de con și tabele de atelier.",
    title: "FabricatorPro — Calculator pentru confecții metalice, pe iPhone",
    description:
      "30 de calculatoare pentru confecții metalice într-o aplicație iOS care merge offline: unghiuri, șei de țeavă, desfășurate de con, optimizare debitare, tabele de filete.",
    keywords: [
      "calculator confecții metalice",
      "calculator șa de țeavă",
      "șablon gură de pește",
      "desfășurată trunchi de con",
      "calculator unghi de tăiere",
      "optimizare debitare",
      "tabel burghie și tarozi",
      "aplicație sudori",
    ],
    h1: "FabricatorPro: 30 de calculatoare pentru confecții metalice, în buzunar",
    lead: "Trusa de atelier pe care o scoți cu o singură mână. FabricatorPro calculează tăieturi la unghi, șei de țeavă, desfășurate de con și de piramidă, geometria porților și calcule de atelier, apoi tipărește rezultatul ca șablon 1:1 pe care îl înfășori pe material.",
    facts: [
      { label: "Platformă", value: "iPhone (iOS)" },
      { label: "Instrumente", value: "30, în 7 categorii" },
      { label: "Unități", value: "Metrice și imperiale" },
      { label: "Conexiune", value: "Funcționează complet offline" },
    ],
    overview: [
      "FabricatorPro este o aplicație iOS pentru cei care taie, sudează și construiesc în metal. Înlocuiește caietul cu formule, tabelele de buzunar și tăieturile de probă cu 30 de calculatoare dedicate, fiecare gândit în jurul unei lucrări reale de atelier.",
      "Fiecare instrument la care contează potrivirea desenează o diagramă 2D clară, cu previzualizare 3D opțională, ca să vezi îmbinarea înainte să o tai. Desfășuratele se exportă ca șabloane PDF la scara 1:1, pe care le tipărești sau le trasezi direct pe material, și ca fișiere DXF pentru CAD și CNC. Aplicația funcționează fără semnal, trece oricând între metric și imperial și păstrează istoricul calculelor salvate.",
    ],
    features: [
      {
        title: "Unghiuri, tăieturi și îmbinări",
        body: "Tăieturi simple la unghi, tăieturi compuse, unghiuri de îmbinare a profilelor și un calculator Pitagora / 3-4-5, plus verificarea echerului, ca ramele să se potrivească din prima.",
      },
      {
        title: "Șei de țeavă și guri de pește",
        body: "Șabloane rotund pe rotund și rotund pe plat, pătrat pe rotund și racorduri în Y. Desfășurate 2D cu previzualizare 3D, gata de tipărit 1:1 și înfășurat pe țeavă.",
      },
      {
        title: "Pâlnii, conuri și tranziții",
        body: "Desfășoară trunchiuri de con și de piramidă, tranziții rotund–pătrat și dreptunghi–rotund și spire de melc transportor, fără încercări pe tablă.",
      },
      {
        title: "Geometria porților și a gardurilor",
        body: "Distribuie uniform barele verticale, cu presetări pentru siguranța copiilor, planifică porți culisante pe teren în pantă și echilibrează porțile batante cu calculul momentului contragreutății.",
      },
      {
        title: "Instrumente de atelier",
        body: "Optimizatorul de debitare folosește un algoritm de împachetare (first-fit-decreasing) pentru a reduce pierderile de material. Calculatorul de angrenaje rezolvă rapoarte în mai multe trepte. Cilindrul hidraulic dimensionează alezajul, forța și presiunea.",
      },
      {
        title: "Tabele de găurire, filetare și strângere",
        body: "Referințe de filete disponibile offline, pentru metric M2–M30 și UNC/UNF: burghie pentru filetare, găuri de trecere, cupluri de strângere pe clase de rezistență și un convertor de unități.",
      },
    ],
    audience: [
      "Sudori și confecționeri metalici care trasează îmbinări în atelier",
      "Instalatori și țevari care taie șei, guri de pește și racorduri în Y",
      "Tinichigii care desfășoară conuri, pâlnii și tranziții",
      "Constructori de porți și garduri care distribuie bare și echilibrează contragreutăți",
      "Pasionați și ateliere mici care vor tabele de referință fără semnal",
    ],
    steps: [
      {
        title: "Alege un instrument",
        body: "Deschide una dintre cele șapte categorii și alege calculatorul potrivit lucrării, de la o tăietură simplă la unghi până la o tranziție rotund–pătrat.",
      },
      {
        title: "Introdu dimensiunile",
        body: "Scrie cotele în metric sau imperial. Diagrama și rezultatele se actualizează pe măsură ce tastezi, cu previzualizare 3D acolo unde contează potrivirea.",
      },
      {
        title: "Tipărește, exportă sau salvează",
        body: "Tipărește un șablon PDF 1:1, exportă un DXF pentru CAD sau CNC ori salvează calculul în istoric pentru următoarea lucrare.",
      },
    ],
    catalogue: {
      title: "Toate cele 30 de instrumente FabricatorPro",
      intro:
        "Fiecare calculator este construit în jurul unui flux real de lucru. Șaisprezece instrumente de bază sunt gratuite pentru totdeauna; cele marcate Pro se deblochează cu FabricatorPro Pro. Denumirile sunt cele din aplicație.",
      groups: [
        {
          name: "Unghiuri și tăieturi",
          summary: "Îmbinări de rame, tăieturi compuse și verificări de echer.",
          tools: [
            {
              name: "Miter Calculator",
              body: "Unghiul și lungimea de tăiere, din unghiul îmbinării și lățimea profilului.",
            },
            {
              name: "Compound Miter",
              body: "Tăietură în două planuri, cu înclinare, pentru cornișe, rame înclinate și acoperișuri.",
            },
            {
              name: "Profile Join Angle",
              pro: true,
              body: "Îmbină două profile pe direcții oarecare, cu analiza rostului și a suprapunerii.",
            },
            {
              name: "Bisector",
              body: "Bisectoarea unghiului, cu calculul decalajului profilului.",
            },
            {
              name: "Pythagoras / 3-4-5",
              body: "Rezolvă triunghiul dreptunghic, verifică echerul pe diagonale și aplică teorema cosinusului.",
            },
          ],
        },
        {
          name: "Tăieturi de țeavă",
          summary: "Șei, guri de pește și intersecții de țevi.",
          tools: [
            {
              name: "Round on Round",
              body: "Șablon de șa / gură de pește, cu desfășurată 2D și previzualizare 3D.",
            },
            {
              name: "Round on Flat",
              body: "Tăietură eliptică țeavă pe placă, ca desfășurată sinusoidală.",
            },
            {
              name: "Square on Square",
              pro: true,
              body: "Desfășurata fiecărei fețe când două țevi pătrate se intersectează la orice unghi.",
            },
            {
              name: "Square on Round",
              pro: true,
              body: "Țeavă pătrată pe țeavă rotundă, cu fiecare față rezolvată separat.",
            },
            {
              name: "Y-Pipe Connector",
              pro: true,
              body: "Două ramuri care se unesc într-o singură ieșire, cu schemă 2D și previzualizare 3D.",
            },
          ],
        },
        {
          name: "Pâlnii și buncăre",
          summary: "Desfășurate din tablă pentru conuri, tranziții și melci.",
          tools: [
            {
              name: "Truncated Cone",
              body: "Desfășurata unei pâlnii rotunde sau a unei reducții: sector de coroană circulară, cu așezarea pe foaie.",
            },
            {
              name: "Truncated Pyramid",
              pro: true,
              body: "Panourile unei pâlnii pătrate, cu muchii comune și linii de îndoire.",
            },
            {
              name: "Round to Square",
              pro: true,
              body: "Piesă de tranziție de la rotund la pătrat: patru triunghiuri de colț și patru panouri curbe.",
            },
            {
              name: "Rectangle to Round",
              pro: true,
              body: "Tranziție asimetrică dreptunghi–rotund, desfășurată în mai multe panouri.",
            },
            {
              name: "Auger Screw",
              pro: true,
              body: "Desfășurata spirei de melc: raze desfășurate, unghiul sectorului și materialul necesar.",
            },
          ],
        },
        {
          name: "Porți și garduri",
          summary:
            "Distanța dintre bare, șine în pantă și echilibrarea contragreutății.",
          tools: [
            {
              name: "Bar Spacing",
              body: "Distribuie uniform barele după număr, distanța maximă sau distanța dorită.",
            },
            {
              name: "Sliding Gate Slope",
              body: "Înălțimea stâlpilor, garda la sol și lungimea reală a șinei pe teren denivelat.",
            },
            {
              name: "Gate Counterweight",
              pro: true,
              body: "Echilibrul de momente pentru porți batante și autoportante, cu analiza încărcării balamalelor.",
            },
          ],
        },
        {
          name: "Atelier",
          summary: "Liste de debitare, transmisii și dimensionare hidraulică.",
          tools: [
            {
              name: "Cutting Optimizer",
              pro: true,
              body: "Optimizare a debitării cu lățimea tăieturii, procentul de pierderi și schema vizuală.",
            },
            {
              name: "Gear Train RPM",
              pro: true,
              body: "Rapoarte în mai multe trepte: turația de ieșire, cuplul, randamentul și sensul de rotație.",
            },
            {
              name: "Hydraulic Cylinder",
              body: "Forță, alezaj, presiune, viteză, timp de cursă și volum de ulei, hidraulic sau pneumatic.",
            },
          ],
        },
        {
          name: "Geometrie și utilitare",
          summary: "Poligoane, arce, greutăți, scări și dilatare termică.",
          tools: [
            {
              name: "Polygon Calculator",
              body: "Toate dimensiunile, unghiurile, aria și perimetrul oricărui poligon regulat.",
            },
            {
              name: "Circle Division",
              body: "Împarte un cerc în N părți egale, cu șablon de hârtie 1:1 de înfășurat pe piesă.",
            },
            {
              name: "Arc Length",
              body: "Arc, coardă, săgeată și rază: află restul din oricare două valori.",
            },
            {
              name: "Weight Calculator",
              pro: true,
              body: "Oțel, inox, aluminiu și cupru, pentru tablă, țeavă, cornier, platbandă sau rotund.",
            },
            {
              name: "Stair Calculator",
              pro: true,
              body: "Contratreaptă, treaptă, lungimea vangului și unghiul, cu verificarea confortului după formula Blondel.",
            },
            {
              name: "Thermal Expansion",
              pro: true,
              body: "Dilatarea liniară a metalelor uzuale, din lungime și variația de temperatură.",
            },
          ],
        },
        {
          name: "Utilitare",
          summary: "Tabele de referință mereu la îndemână.",
          tools: [
            {
              name: "Unit Converter",
              body: "Lungime (inclusiv țoli fracționari), arie, greutate, presiune, temperatură și cuplu.",
            },
            {
              name: "Drill & Tap Chart",
              body: "Tabel cu căutare pentru metric (M2–M30) și UNC/UNF, cu burghiul de filetare și gaura de trecere.",
            },
            {
              name: "Bolt Torque Chart",
              body: "Cuplul de strângere pe dimensiune și clasă de rezistență, uscat și lubrifiat, cu forța de strângere.",
            },
          ],
        },
      ],
    },
    lists: [
      {
        title: "Gratuit și Pro",
        intro:
          "FabricatorPro se descarcă gratuit, iar instrumentele de bază rămân gratuite. Pro este un upgrade opțional, disponibil ca abonament lunar sau ca achiziție unică pe viață, prin App Store.",
        items: [
          "Gratuit: șaisprezece instrumente de bază, printre care Miter, Round on Round, Truncated Cone și Bar Spacing",
          "Gratuit: tabelele complete de găurire și filetare, de cupluri de strângere și convertorul de unități",
          "Pro: toate cele 30 de instrumente",
          "Pro: calcule salvate nelimitate",
          "Pro: export DXF pentru CAD și CNC",
          "Pro: previzualizări 2D și 3D complete",
        ],
      },
    ],
    faqs: [
      {
        q: "FabricatorPro funcționează fără conexiune la internet?",
        a: "Da. Toate calculatoarele și tabelele de referință funcționează complet offline, deci aplicația poate fi folosită în atelier sau pe șantier, acolo unde nu există semnal.",
      },
      {
        q: "Pot tipări desfășuratele la mărime reală?",
        a: "Da. Desfășuratele se exportă ca șabloane PDF la scara 1:1, pe care le tipărești și le înfășori pe țeavă sau le trasezi direct pe tablă.",
      },
      {
        q: "Aplicația lucrează atât în unități metrice, cât și imperiale?",
        a: "Da. Unitățile metrice și imperiale sunt disponibile peste tot, cu comutare pe loc, iar convertorul de unități lucrează și cu țoli fracționari.",
      },
      {
        q: "Care instrumente sunt gratuite?",
        a: "Șaisprezece instrumente de bază sunt gratuite pentru totdeauna, printre care Miter, Compound Miter, Round on Round, Round on Flat, Truncated Cone, Bar Spacing și tabelele Drill & Tap, Bolt Torque și Unit Converter. Pro le deblochează pe celelalte.",
      },
      {
        q: "Pot exporta pentru CAD sau pentru o mașină CNC?",
        a: "Da. Cu Pro, desfășuratele pot fi exportate ca fișiere DXF, pentru programe CAD și fluxuri CNC.",
      },
      {
        q: "Aplicația îmi colectează datele?",
        a: "Nu. FabricatorPro rulează în întregime pe dispozitivul tău. Nu există cont, analiză de date, reclame sau urmărire de către terți; calculele salvate rămân pe iPhone.",
      },
    ],
    imageAlt: "Pictograma aplicației FabricatorPro",
    screenshots: [
      {
        alt: "Ecranul principal FabricatorPro, cu toate categoriile de instrumente",
        caption: "Orice instrument, la o atingere",
      },
      {
        alt: "Calculatorul FabricatorPro pentru șa de țeavă rotund pe rotund",
        caption: "Rotund pe rotund",
      },
      {
        alt: "Calculatorul FabricatorPro pentru desfășurata trunchiului de con",
        caption: "Trunchi de con",
      },
      {
        alt: "Optimizatorul de debitare FabricatorPro, cu reducerea pierderilor",
        caption: "Optimizare debitare",
      },
      {
        alt: "Tabelul FabricatorPro de burghie și tarozi",
        caption: "Tabel de găurire și filetare",
      },
      {
        alt: "Calculatorul FabricatorPro pentru desfășurata trunchiului de piramidă",
        caption: "Trunchi de piramidă",
      },
      {
        alt: "Desfășurata spirei de melc în FabricatorPro",
        caption: "Melc transportor",
      },
      {
        alt: "Calculatorul FabricatorPro pentru distanța dintre bare la porți și garduri",
        caption: "Distanța dintre bare",
      },
      {
        alt: "Calculatorul FabricatorPro pentru echilibrarea contragreutății porții",
        caption: "Contragreutate poartă",
      },
      {
        alt: "Calculatorul FabricatorPro pentru turația unui tren de angrenaje",
        caption: "Turație angrenaje",
      },
      {
        alt: "Calculatorul FabricatorPro pentru greutatea materialului",
        caption: "Calculator de greutate",
      },
      {
        alt: "Calculatorul de scări FabricatorPro",
        caption: "Calculator de scări",
      },
      {
        alt: "Convertorul de unități FabricatorPro",
        caption: "Convertor de unități",
      },
      {
        alt: "Istoricul calculelor salvate în FabricatorPro",
        caption: "Istoric salvat",
      },
    ],
  },

  remoto: {
    name: "Remoto",
    category: "Telecomandă TV pentru iPhone",
    tagline:
      "Telecomandă fără reclame, pe iPhone, pentru Android TV, Google TV, Chromecast, Mi Box și Nvidia Shield.",
    title: "Remoto — Telecomandă iPhone fără reclame pentru Android TV",
    description:
      "Telecomandă rapidă, nativă, pe iPhone, pentru Android TV, Google TV, Chromecast, Mi Box și Nvidia Shield. Se asociază în circa 30 de secunde. Fără reclame, fără cont.",
    keywords: [
      "telecomandă Android TV iPhone",
      "aplicație telecomandă Google TV",
      "telecomandă Chromecast iPhone",
      "telecomandă Mi Box",
      "telecomandă Nvidia Shield iPhone",
      "telecomandă TV fără reclame",
    ],
    h1: "Remoto: telecomanda de pe iPhone pentru Android TV, fără reclame",
    lead: "Remoto este o telecomandă iOS nativă și curată, care se asociază cu dispozitivul tău Android TV sau Google TV în aproximativ 30 de secunde și apoi nu te mai încurcă. Fără autentificare, fără urmărire, niciodată vreo reclamă.",
    facts: [
      { label: "Platformă", value: "iPhone, iOS 16 sau mai nou" },
      { label: "Funcționează cu", value: "Android TV și Google TV" },
      { label: "Asociere", value: "Aproximativ 30 de secunde" },
      { label: "Limbi", value: "8" },
    ],
    overview: [
      "Remoto înlocuiește telecomanda de plastic pe care ai pierdut-o între pernele canapelei. Găsește automat toate dispozitivele Android TV și Google TV din rețeaua ta Wi-Fi, se asociază cu un cod din 6 cifre afișat pe televizor și îți dă telecomanda completă: săgeți, volum, pornire, controale media și de canale, cu feedback haptic la fiecare apăsare.",
      "Cele mai multe aplicații de telecomandă sunt îngropate în bannere, reclame pe tot ecranul și mesaje de tipul „urmărește un video ca să deblochezi”. Remoto nu are nimic din toate acestea. Comenzile circulă printr-o conexiune criptată direct de la iPhone la televizor, în rețeaua locală. Nimic nu trece printr-un server, pentru că nu există unul.",
    ],
    features: [
      {
        title: "Niciodată reclame",
        body: "Fără bannere, fără reclame pe tot ecranul, fără „urmărește un video ca să deblochezi”. O telecomandă care se deschide pe loc și își face treaba.",
      },
      {
        title: "Descoperire instantanee",
        body: "Găsește automat, prin Bonjour, toate dispozitivele Android TV și Google TV din rețeaua Wi-Fi. Nu trebuie să introduci adrese IP.",
      },
      {
        title: "Telecomandă completă",
        body: "Săgeți, OK, Înapoi, Acasă, Meniu și Asistent, plus butoane reale de volum și pornire, la fel ca pe telecomanda fizică.",
      },
      {
        title: "Media și canale",
        body: "Redare, pauză, derulare înapoi și înainte, cu schimbarea canalelor și buton de Ghid pentru televiziunea live.",
      },
      {
        title: "Feedback haptic",
        body: "Fiecare apăsare se simte ca un buton adevărat, așa că poți controla televizorul fără să te uiți la telefon.",
      },
      {
        title: "Confidențialitate din construcție",
        body: "Fără SDK-uri de analiză, fără cont, fără urmărire. Comenzile sunt criptate și trimise direct către televizor, niciodată prin noi.",
      },
    ],
    audience: [
      "Oricine a pierdut sau a stricat telecomanda unui dispozitiv Android TV sau Google TV",
      "Posesorii de Chromecast cu Google TV, Mi Box, Mi TV Stick sau Nvidia Shield",
      "Cei sătui să scrie căutări cu tastatura de pe ecranul televizorului",
      "Familiile cu mai multe televizoare, care vor o singură telecomandă pe telefon",
      "Oricine vrea o telecomandă fără reclame și care nu colectează date",
    ],
    steps: [
      {
        title: "Deschide aplicația",
        body: "Remoto caută în rețeaua Wi-Fi televizoarele compatibile, prin descoperirea Bonjour de la Apple. Singura permisiune necesară este accesul la rețeaua locală.",
      },
      {
        title: "Asociază o singură dată",
        body: "Televizorul afișează un cod din 6 cifre. Îl introduci. Remoto generează pe iPhone un certificat privat, îl păstrează în Keychain și se asociază prin TLS reciproc.",
      },
      {
        title: "Preia controlul",
        body: "Fiecare apăsare circulă printr-un canal criptat, direct de la iPhone la televizor. Nimic nu trece prin serverele noastre; nu avem servere.",
      },
    ],
    lists: [
      {
        title: "Televizoare și dispozitive compatibile",
        intro:
          "Remoto funcționează cu orice dispozitiv care folosește protocolul Android TV Remote v2, printre care:",
        items: [
          "Xiaomi Mi Box S, Mi TV Stick și Mi TV",
          "Google Chromecast cu Google TV",
          "Nvidia Shield TV și Shield TV Pro",
          "Televizoare smart TCL, Hisense, Philips și Sony cu Android TV / Google TV",
          "Box-uri Android TV certificate (H96 / X96 cu Google Play)",
        ],
        note: "Necesită un iPhone cu iOS 16 sau mai nou, în aceeași rețea Wi-Fi cu televizorul. Apple TV, Samsung, LG, Roku și Fire TV folosesc alte protocoale și nu sunt compatibile.",
      },
      {
        title: "Ce este gratuit, pentru totdeauna",
        intro: "Telecomanda de bază rămâne gratuită, fără nicio condiție.",
        items: [
          "Descoperirea instantanee a televizoarelor prin Wi-Fi",
          "Săgeți complete: OK, Înapoi, Acasă, Meniu, Asistent",
          "Butoane de volum și de pornire",
          "Control media: redare, pauză, derulare înapoi și înainte",
          "Schimbarea canalelor și Ghid pentru televiziunea live",
          "Feedback haptic la fiecare apăsare",
          "8 limbi, cu posibilitatea de a alege limba din Setări",
          "Un dispozitiv asociat",
        ],
      },
      {
        title: "Ce adaugă Remoto Pro",
        intro:
          "Pro se deblochează o singură dată, prin App Store. Fără abonament, fără reînnoire automată: îl cumperi o dată și este al tău.",
        items: [
          "Mod touchpad pentru televizoarele cu cursor",
          "Tastatura iOS completă: scrii pe telefon și trimiți către televizor",
          "Grilă de aplicații și favorite: YouTube, Netflix, Prime Video, Disney+, Spotify, Twitch și altele, la o atingere",
          "Dispozitive asociate nelimitate, schimbate din partea de sus a telecomenzii",
          "Widgeturi pe ecranul principal și pe ecranul de blocare",
          "Comenzi vocale cu Siri: dai mai tare, oprești sunetul sau pui pauză fără să atingi telefonul",
          "Alegerea inteligentă a televizorului pentru Siri și widgeturi, când ai mai multe",
          "Asistență prioritară",
        ],
      },
      {
        title: "Confidențialitate, fără note de subsol",
        intro:
          "Nimic nu părăsește telefonul, în afară de comenzile criptate trimise direct către televizor. Nu există servere din care să se scurgă date, pentru că nu avem servere.",
        items: [
          "Fără SDK-uri de analiză: nicio telemetrie, nicio statistică de utilizare",
          "Fără cont: fără e-mail, fără parolă, fără sincronizare în cloud",
          "Fără urmărire: nimic nu este colectat, vândut sau partajat",
          "Eticheta de confidențialitate din App Store este „Data Not Collected” (nu se colectează date)",
        ],
      },
    ],
    faqs: [
      {
        q: "Remoto funcționează cu Apple TV?",
        a: "Nu. Apple TV folosește un alt protocol, proprietar. Remoto este doar pentru dispozitive Android TV, Google TV și Mi Box.",
      },
      {
        q: "Dar cu Samsung, LG, Roku sau Fire TV?",
        a: "Nu. Acestea folosesc alte protocoale. Am ales să livrăm un singur lucru care funcționează impecabil, nu patru care funcționează pe jumătate.",
      },
      {
        q: "Trebuie să fiu în aceeași rețea Wi-Fi cu televizorul?",
        a: "Da. Remoto comunică direct cu televizorul, în rețeaua locală. Așa a fost gândit: fără date mobile, fără VPN și fără server intermediar în cloud.",
      },
      {
        q: "Am nevoie de un cont Google sau Xiaomi?",
        a: "Nu. Descoperirea și asocierea sunt gestionate integral de protocolul Android TV Remote, deja prezent pe dispozitivul tău.",
      },
      {
        q: "Va deveni Pro un abonament?",
        a: "Nu avem asemenea planuri. Dacă vom adăuga vreodată servicii care ne costă lunar, ele vor fi o opțiune separată. Deblocarea Pro actuală rămâne o achiziție pe viață.",
      },
      {
        q: "Ce se întâmplă dacă îmi pierd iPhone-ul?",
        a: "Restaurezi dintr-o copie de rezervă iCloud și deschizi aplicația. Deblocarea Pro se restaurează din App Store, iar reasocierea televizorului durează aproximativ 20 de secunde.",
      },
      {
        q: "Ce televizor controlează Siri dacă am mai multe?",
        a: "Cel pe care l-ai ales ca televizor țintă în Setări ▸ Control vocal. Widgeturile respectă aceeași setare, așa că butonul de pauză de pe ecranul de blocare ajunge mereu la televizorul la care te uiți.",
      },
      {
        q: "Există suport pentru Apple Watch?",
        a: "Este planificat pentru o actualizare viitoare. Widgeturile pentru ecranul principal și cel de blocare și comenzile Siri sunt disponibile deja.",
      },
    ],
    imageAlt: "Pictograma aplicației Remoto",
    screenshots: [
      {
        alt: "Remoto caută televizoarele din apropiere și afișează un box Xiaomi descoperit și deja asociat",
        caption: "Îți găsește televizorul în câteva secunde",
      },
      {
        alt: "Touchpadul pe tot ecranul din Remoto: glisezi ca să navighezi, atingi ca să selectezi, atingi cu două degete pentru înapoi",
        caption: "Glisează ca să navighezi",
      },
      {
        alt: "Grila de scurtături Remoto cu aplicațiile TV preferate, printre care YouTube, Netflix, Prime Video, Disney+, Max, Hulu și Spotify",
        caption: "Sari direct într-o aplicație",
      },
      {
        alt: "O căutare scrisă în Remoto cu tastatura iPhone-ului și trimisă dintr-odată către televizor",
        caption: "Scrie pe telefon, nu pe televizor",
      },
      {
        alt: "Ecranul de blocare al unui iPhone, cu controalele Remoto de redare și volum disponibile fără deblocare",
        caption: "Controlează de pe ecranul de blocare",
      },
      {
        alt: "Un widget pe ecranul principal iOS, cu săgețile, volumul și butoanele de redare Remoto",
        caption: "Un widget pe ecranul principal",
      },
      {
        alt: "Setările Remoto, cu starea Pro, televizoarele asociate și comutatoarele pentru feedback haptic, sunet și menținerea ecranului aprins",
        caption: "Haptic, sunet și 8 limbi",
      },
    ],
    note: "Android TV și Google TV sunt mărci comerciale ale Google LLC. Remoto nu este afiliat, susținut sau sponsorizat de Google, Xiaomi, Nvidia, TCL, Hisense, Philips sau Sony.",
  },

  feedfast: {
    name: "FeedFast",
    category: "Changelog, panou de feedback și monitorizare uptime",
    tagline:
      "Changelog, panou de feedback și pagină de status, într-un singur hub public pentru fiecare proiect.",
    title: "FeedFast — Changelog, feedback și pagină de status, într-un loc",
    description:
      "Un hub public pentru fiecare proiect: note de lansare, un panou de feedback cu voturi fără cont și monitorizare uptime. Cu widgeturi, API REST și server MCP.",
    keywords: [
      "instrument changelog",
      "panou de feedback",
      "cereri de funcționalități",
      "pagină de status",
      "monitorizare uptime",
      "widget changelog",
      "server MCP changelog",
    ],
    h1: "FeedFast: changelog, panou de feedback și pagină de status, într-un singur hub",
    lead: "FeedFast dă fiecărui proiect o singură pagină publică, cu note de lansare, un panou de feedback pe care oamenii pot vota și o pagină de status sinceră. Este făcut pentru dezvoltatorii independenți și echipele SaaS mici, care preferă să livreze decât să jongleze cu trei unelte.",
    facts: [
      { label: "Tip", value: "Aplicație web" },
      {
        label: "Pentru",
        value: "Dezvoltatori independenți și echipe SaaS mici",
      },
      { label: "Module", value: "Feedback, changelog, uptime" },
      { label: "Se extinde cu", value: "Widgeturi, API REST, server MCP" },
    ],
    overview: [
      "FeedFast reunește trei abonamente separate într-un singur hub public pentru fiecare proiect. Utilizatorii propun idei și le votează fără să-și facă cont. Tu scrii notele de lansare în markdown și le publici pe o pagină, într-un flux RSS și într-un widget pe care îl poți integra. Verificări HTTP programate îți urmăresc serviciile și alimentează o pagină publică de status.",
      "Cele trei module sunt legate într-o singură buclă: utilizatorii cer și votează, tu livrezi, iar marcarea unei cereri ca rezolvată o transformă într-o notă de lansare, cu răspuns public. Widgetul „Ce e nou” o anunță apoi chiar în produsul tău. Aceleași acțiuni sunt disponibile printr-un API REST și un server MCP, așa că un agent AI poate tria panoul și publica changelogul în locul tău.",
    ],
    features: [
      {
        title: "Panou de feedback fără cont",
        body: "Oricine poate propune și vota fără să se înregistreze. Cererile trec prin stările Deschis, Planificat, În lucru, Finalizat și Respins, stau în categorii definite de tine și se ordonează după voturi, noutate sau tendință.",
      },
      {
        title: "Changelog în markdown",
        body: "Scrii într-un editor markdown cu două panouri, salvezi ciorna, apoi publici. Fiecare notă actualizează pagina publică, fluxul RSS și widgetul „Ce e nou”, cu etichete colorate precum Nou, Îmbunătățit și Reparat.",
      },
      {
        title: "Monitorizare uptime fără alarme false",
        body: "Verificări HTTP cu metodă, cod de răspuns așteptat și timeout configurabile. Un incident se deschide abia după două verificări eșuate la rând, așa că o singură sincopă nu te trezește, iar la revenire primești un e-mail.",
      },
      {
        title: "O pagină de status sinceră",
        body: "Disponibilitatea este afișată pe 24 de ore, 7, 30 și 90 de zile. Mentenanța programată suspendă incidentele și este exclusă din procentul de uptime. Abonații se înscriu prin e-mail cu dublă confirmare sau printr-un flux RSS de status.",
      },
      {
        title: "Widgeturi integrabile",
        body: "Un singur tag de script, apoi atribute data în pagina ta: buton de feedback, bară de uptime, carduri sau listă de changelog și o insignă „Ce e nou”. Cinci teme, redate în shadow DOM, aproximativ 12 KB comprimat, fără cookie-uri.",
      },
      {
        title: "API REST și server MCP",
        body: "Un API REST cu chei doar pentru citire sau pentru citire și scriere și un server MCP cu douăsprezece unelte, printre care publicarea unei note de lansare, rezolvarea unei cereri și programarea mentenanței. Disponibile în planul Pro.",
      },
      {
        title: "Protecție anti-spam și identitate verificată",
        body: "Un câmp-capcană, limite de linkuri și limite de trafic pe IP țin panoul curat. Opțional, poți semna identitatea utilizatorilor tăi cu HMAC-SHA256, ca mesajele să vină din conturi verificate.",
      },
    ],
    audience: [
      "Dezvoltatori independenți care vor un singur loc pentru noutăți și cereri",
      "Echipe SaaS mici care înlocuiesc unelte separate de changelog, feedback și status",
      "Echipe care vor ca agenții AI să trieze feedbackul și să publice notele de lansare",
      "Produse care au nevoie de o pagină publică de status în care utilizatorii să aibă încredere",
    ],
    steps: [
      {
        title: "Creează un proiect",
        body: "Fiecare proiect primește propriul hub public, cu panou de feedback, changelog și pagină de status.",
      },
      {
        title: "Integrează widgeturile",
        body: "Adaugi un tag de script cu identificatorul proiectului, apoi plasezi widgeturile, prin atribute data, oriunde vrei în produsul tău.",
      },
      {
        title: "Închide bucla",
        body: "Utilizatorii cer și votează, tu livrezi, iar rezolvarea unei cereri publică nota de lansare și răspunde public. Monitoarele țin pagina de status la zi.",
      },
    ],
    freeTools: [
      {
        name: "Zonă de test pentru widgeturi",
        body: "Toate widgeturile, stilurile și butoanele, live, cu codul de lipit.",
        href: "https://feedfa.st/tools/widget-playground",
      },
      {
        name: "Galerie de butoane de feedback",
        body: "Modele de butoane de copiat, de la discrete la îndrăznețe, fiecare funcțional.",
        href: "https://feedfa.st/tools/feedback-buttons",
      },
      {
        name: "Generator de formular de feedback HTML",
        body: "Îți construiești propriul formular de feedback, cu propriul cod, pe API-ul FeedFast.",
        href: "https://feedfa.st/tools/feedback-modal",
      },
      {
        name: "Exemple de pagini de status",
        body: "Opt șabloane de copiat, construite în jurul unui widget de uptime live.",
        href: "https://feedfa.st/tools/status-page-designs",
      },
      {
        name: "Șabloane de changelog",
        body: "Cinci șabloane, previzualizate exact cum vor fi publicate.",
        href: "https://feedfa.st/tools/changelog-designer",
      },
    ],
    faqs: [
      {
        q: "Utilizatorii au nevoie de cont ca să propună sau să voteze?",
        a: "Nu. Oricine poate propune o idee și vota fără să-și facă un cont. Dacă preferi, poți transmite din aplicația ta o identitate semnată, astfel încât mesajele să fie legate de utilizatori verificați.",
      },
      {
        q: "Cum evită FeedFast alertele false de uptime?",
        a: "Un incident se deschide doar după două verificări eșuate consecutiv, deci un răspuns lent sau o sincopă de rețea nu declanșează o alertă. Ferestrele de mentenanță programată suspendă complet incidentele.",
      },
      {
        q: "Poate un agent AI să-mi administreze changelogul și feedbackul?",
        a: "Da. FeedFast oferă un server MCP, găzduit sau ca pachet npm, cu unelte pentru listarea feedbackului, rezolvarea cererilor, publicarea notelor de lansare, citirea uptime-ului și programarea mentenanței. Nu are acces la codul tău sau la lansările tale.",
      },
      {
        q: "Widgetul setează cookie-uri sau îmi încetinește site-ul?",
        a: "Widgetul nu setează cookie-uri, este redat într-un shadow DOM, ca să nu intre în conflict cu stilurile tale, și are aproximativ 12 KB comprimat.",
      },
      {
        q: "Există un flux RSS?",
        a: "Da. Fiecare proiect are un flux RSS pentru changelog, cu textul complet al fiecărei note, și un flux separat pentru actualizările de status.",
      },
    ],
    imageAlt:
      "FeedFast: spune-le utilizatorilor ce ai lansat și ce s-a stricat. O notă de changelog, o cerere de feedback planificată cu 128 de voturi și o bară de status cu 99,94% uptime.",
    screenshots: [
      {
        alt: "Panoul public de feedback FeedFast, cu idei ordonate după voturi și filtre după stare și tip",
        caption: "Panou public de feedback",
      },
      {
        alt: "Changelog-ul public FeedFast, cu note de lansare datate și etichetate",
        caption: "Changelog public",
      },
      {
        alt: "Pagina de status FeedFast, care arată toate sistemele funcționale și o mentenanță programată",
        caption: "Pagină de status",
      },
      {
        alt: "Zona de test pentru widgeturile FeedFast, unde vezi widgeturile de feedback și changelog în stiluri diferite",
        caption: "Testare widgeturi",
      },
      {
        alt: "Pagina serverului MCP FeedFast, cu un instrument AI care publică o notă în changelog și închide o cerere",
        caption: "Server MCP pentru instrumente AI",
      },
      {
        alt: "Monitorizarea uptime FeedFast, cu bara de disponibilitate pe 90 de zile pentru un site",
        caption: "Monitorizare uptime",
      },
    ],
  },

  bookify: {
    name: "Bookify",
    category: "Software de programări online",
    tagline:
      "Programări online pentru afaceri de servicii: un link de rezervare, un calendar al echipei și remindere prin SMS.",
    title: "Bookify — Programări online pentru saloane, clinici și studiouri",
    description:
      "Clienții se programează singuri, la orice oră. Pagină de rezervări cu brandul tău, calendar comun, remindere SMS, sincronizare cu Google și Apple, plată cu cardul.",
    keywords: [
      "programări online",
      "software programări",
      "sistem de rezervări salon",
      "aplicație programări frizerie",
      "programări clinică",
      "reminder SMS programări",
    ],
    h1: "Bookify: programări online pentru afaceri de servicii",
    lead: "Cu Bookify, clienții se programează singuri, la orice oră, printr-un singur link, iar echipa ta lucrează dintr-un singur calendar. Reminderele prin SMS, sincronizarea calendarelor în ambele sensuri și plata opțională cu cardul sunt incluse.",
    facts: [
      { label: "Tip", value: "Aplicație web" },
      { label: "Pentru", value: "Saloane, clinici, antrenori, studiouri" },
      { label: "Echipă", value: "De la o persoană la zece" },
      {
        label: "Se sincronizează cu",
        value: "Google Calendar, Apple / CalDAV",
      },
    ],
    overview: [
      "Bookify este un sistem de programări pentru afacerile care vând timp: o pagină publică de rezervări pentru clienți și un singur calendar pentru echipă. Clienții îți deschid linkul, aleg serviciul și ora și confirmă. Nu au de instalat nicio aplicație și nu trebuie să-și facă un cont.",
      "În spatele paginii, Bookify afișează doar intervalele cu adevărat libere. Ține cont de programul de lucru, de pauzele dintre programări și de zilele libere și blochează timpul în care ești ocupat într-un alt calendar. Rezultatul este un program în care poți avea încredere, fără suprapuneri de descurcat.",
    ],
    features: [
      {
        title: "Un singur link de programare",
        body: "Un link pentru profilul tău, pentru site sau pentru mesaje. Clienții aleg serviciul și ora și confirmă, fără să instaleze nimic și fără cont.",
      },
      {
        title: "O pagină de rezervări care arată ca afacerea ta",
        body: "O personalizezi cu logo, culori și fotografii. Fiecare locație are hartă, indicații de drum și date de contact, iar pagina este construită ca să fie găsită în căutările locale.",
      },
      {
        title: "Un calendar pentru toată echipa",
        body: "Vizualizare pe zi, săptămână și lună, pentru toți angajații și toate locațiile, cu programul de lucru evidențiat. Tragi o programare ca să o muți sau să-i schimbi durata; conflictele sunt verificate, iar clientul primește un SMS.",
      },
      {
        title: "Zero suprapuneri",
        body: "Programul de lucru, pauzele și zilele libere sunt respectate întotdeauna, așa că un interval oferit unui client este cu adevărat disponibil.",
      },
      {
        title: "Sincronizare în ambele sensuri",
        body: "Se sincronizează cu Google Calendar și Apple / CalDAV în ambele direcții. Evenimentele din alte calendare îți blochează automat disponibilitatea.",
      },
      {
        title: "Remindere prin SMS",
        body: "O confirmare la efectuarea programării, apoi remindere cu 24 de ore și cu 2 ore înainte. Fiecare tip de mesaj poate fi dezactivat.",
      },
      {
        title: "Plată la rezervare",
        body: "Încasezi cu cardul, prin Stripe, chiar la programare. Intervalul este rezervat cât timp clientul plătește și se eliberează automat dacă plata nu se finalizează.",
      },
      {
        title: "Roluri în echipă",
        body: "Inviți angajații prin e-mail și îi dai fiecăruia accesul potrivit: proprietar, administrator, manager sau angajat.",
      },
    ],
    audience: [
      "Saloane de coafură, frizerii, saloane de unghii, înfrumusețare și spa",
      "Clinici, cabinete stomatologice, kinetoterapie și masaj",
      "Antrenori personali, studiouri de yoga și pilates, meditatori și coachi",
      "Fotografi și ateliere de detailing auto",
      "Studiouri cu o singură persoană și echipe de până la zece oameni",
    ],
    steps: [
      {
        title: "Alege-ți linkul",
        body: "Alegi un nume pentru pagina ta de rezervări și îți creezi contul.",
      },
      {
        title: "Adaugă serviciile",
        body: "Dai fiecărui serviciu un nume și o durată. Programul de lucru pornește de la o variantă implicită și poate fi schimbat pentru fiecare persoană.",
      },
      {
        title: "Distribuie linkul și primește programări",
        body: "Pui linkul în profil sau pe site. Programările noi apar în calendar pe măsură ce sunt făcute.",
      },
    ],
    faqs: [
      {
        q: "Clienții trebuie să instaleze ceva?",
        a: "Nu. Deschid linkul tău, aleg serviciul și ora și confirmă. Fără aplicație și fără cont.",
      },
      {
        q: "Bookify funcționează cu calendarul pe care îl am deja?",
        a: "Da. Se sincronizează în ambele sensuri cu Google Calendar și Apple / CalDAV: programările apar în calendarul tău, iar evenimentele pe care le ai deja blochează acele ore pentru clienți.",
      },
      {
        q: "Cum funcționează reminderele prin SMS?",
        a: "Clientul primește un SMS de confirmare când se programează, apoi un reminder cu 24 de ore înainte și încă unul cu 2 ore înainte de programare. Poți dezactiva fiecare dintre ele.",
      },
      {
        q: "Pot clienții să plătească atunci când se programează?",
        a: "Da. Plata la rezervare se face cu cardul, prin Stripe. Intervalul este păstrat cât timp clientul plătește și se eliberează automat dacă plata nu este finalizată.",
      },
      {
        q: "Poate folosi toată echipa mea Bookify?",
        a: "Da. Inviți angajații prin e-mail și îi atribui fiecăruia un rol: proprietar, administrator, manager sau angajat. Toți lucrează din același calendar.",
      },
      {
        q: "Ce se întâmplă cu datele mele dacă renunț la Bookify?",
        a: "Nimic nu se șterge când te oprești; datele rămân în contul tău. Poți cere din cont o copie sau ștergerea completă, conform GDPR.",
      },
    ],
    imageAlt:
      "Calendarul de programări Bookify, cu o săptămână de rezervări pentru o afacere de servicii.",
    screenshots: [
      {
        alt: "Pagina de programări Bookify a unui salon, cu fotografie de copertă, adresă, galerie și lista serviciilor",
        caption: "Pagina de programări",
      },
      {
        alt: "Confirmarea unei programări în Bookify, cu SMS-ul trimis clientului și notificarea trimisă afacerii",
        caption: "Programare confirmată",
      },
      {
        alt: "Calendarul echipei în Bookify, cu programările unei săptămâni pentru fiecare membru",
        caption: "Calendarul echipei",
      },
    ],
  },

  webscore: {
    name: "WebScore",
    category: "Instrument de audit pentru site-uri",
    tagline:
      "Audit de site pentru viteză, SEO, accesibilitate, securitate și vizibilitate în AI, cu remedieri ordonate după impact.",
    title: "WebScore — Audit de site: viteză, SEO, securitate, vizibilitate AI",
    description:
      "Introduci un URL și primești șase audituri în circa un minut: performanță, SEO, accesibilitate, securitate, vizibilitate AI și bune practici. Cu remedierea alături.",
    keywords: [
      "audit site",
      "audit SEO",
      "verificare Core Web Vitals",
      "audit accesibilitate",
      "verificare securitate site",
      "audit vizibilitate AI",
      "verificare llms.txt",
    ],
    h1: "WebScore: auditul de site care îți spune ce să repari mai întâi",
    lead: "Introduci un URL, iar WebScore rulează șase audituri în aproximativ un minut: viteză, SEO, accesibilitate, securitate, vizibilitate în AI și bune practici. Fiecare problemă este ordonată după cât te costă și are remedierea chiar lângă ea.",
    facts: [
      { label: "Tip", value: "Aplicație web" },
      { label: "Audituri la o scanare", value: "6" },
      { label: "Durata scanării", value: "Aproximativ un minut" },
      { label: "Instalare", value: "Nu este necesară" },
    ],
    overview: [
      "WebScore este un instrument de audit pentru site-uri. În loc să rulezi o unealtă pentru viteză, alta pentru SEO și a treia pentru securitate, introduci un URL și primești un singur raport care le acoperă pe toate, cu un scor pentru fiecare zonă.",
      "Raportul este util datorită ordinii. Fiecare problemă arată câte puncte te costă și cât efort cere remedierea, așa că începi de sus și cobori. Fiecare problemă vine cu pași de urmat și cu un rezumat pe care îl poți copia direct pentru un programator sau pentru un agent AI de programare.",
    ],
    features: [
      {
        title: "Performanță",
        body: "Găsește imaginile, scripturile și deplasările de layout care îți încetinesc paginile importante și raportează indicatorii Core Web Vitals: timpul de încărcare, stabilitatea layoutului și timpul de blocare.",
      },
      {
        title: "SEO",
        body: "Arată ce împiedică motoarele de căutare să înțeleagă, să indexeze și să afișeze fiecare pagină, de la o meta-descriere lipsă până la probleme de structură.",
      },
      {
        title: "Accesibilitate",
        body: "Scoate la iveală barierele pentru vizitatorii care folosesc tastatura, cititoare de ecran sau au vedere slabă, de exemplu linkuri fără nume accesibil.",
      },
      {
        title: "Securitate",
        body: "Verifică HTTPS, antetele de securitate, cookie-urile și autentificarea e-mailului, inclusiv dacă domeniul tău are o politică DMARC.",
      },
      {
        title: "Vizibilitate în AI",
        body: "Testează dacă roboții AI pot ajunge la paginile tale, le pot înțelege și le pot cita, inclusiv dacă site-ul publică un fișier llms.txt.",
      },
      {
        title: "Bune practici",
        body: "Semnalează erorile din browser, tehnicile învechite și codul fragil, înainte ca acestea să devină probleme vizibile.",
      },
    ],
    audience: [
      "Proprietari de site-uri care vor să știe ce remediere contează cel mai mult",
      "Programatori care vor o cerință clară, nu o listă brută de avertismente",
      "Echipe mici, fără un specialist dedicat în SEO sau performanță",
      "Oricine întreține un site cu ajutorul unui agent AI de programare",
    ],
    steps: [
      {
        title: "Scanează",
        body: "Introduci un URL. Toate cele șase audituri rulează în aproximativ un minut, fără nimic de instalat.",
      },
      {
        title: "Repară",
        body: "Începi cu prima problemă din lista ordonată. Urmezi pașii chiar tu sau copiezi rezumatul pentru programatorul tău ori pentru agentul AI.",
      },
      {
        title: "Verifică",
        body: "Scanezi din nou pagina, ca să confirmi că problema a dispărut și că scorul s-a schimbat.",
      },
    ],
    lists: [
      {
        title: "Dincolo de o singură scanare",
        items: [
          "Monitorizare: scanări programate zilnic sau săptămânal, pentru până la 10 site-uri, cu alerte pe e-mail când un scor scade sau apare o problemă nouă",
          "Istoricul scanărilor, ca să vezi cum a evoluat fiecare scor",
          "Export PDF al raportului complet, cu toate problemele ordonate după impact",
          "Integrare cu Google Search Console",
          "Server MCP, prin care un agent AI poate scana site-uri, citi remedierile și porni sau opri monitorizarea",
          "Audit AI de conversie: capturi adnotate de desktop și mobil, analizate pentru claritate, încredere, îndemnuri la acțiune și obstacole",
          "Indicatori de domeniu: backlinkuri, domenii care trimit către tine și autoritate",
        ],
      },
    ],
    freeTools: [
      {
        name: "Generator de metadate",
        body: "Titlu, descriere, etichete Open Graph și Twitter, gata de lipit.",
        href: "https://webscore.now/tools/metadata",
      },
      {
        name: "Generator de schema markup",
        body: "JSON-LD pentru organizații, afaceri locale, articole, produse și întrebări frecvente.",
        href: "https://webscore.now/tools/schema-generator",
      },
      {
        name: "Verificare și generator robots.txt",
        body: "Găsește erori de sintaxă și crawlere de căutare sau AI blocate, ori scrie un fișier nou.",
        href: "https://webscore.now/tools/robots-txt",
      },
      {
        name: "Verificare llms.txt",
        body: "Verifică llms.txt-ul unui site după formatul llmstxt.org, inclusiv linkurile nefuncționale.",
        href: "https://webscore.now/tools/llms-txt-checker",
      },
      {
        name: "Verificare favicon",
        body: "Toate dimensiunile, apple-touch-icon, manifestul web și cum apare iconița în Google.",
        href: "https://webscore.now/tools/favicon-checker",
      },
      {
        name: "Verificare linkuri interne",
        body: "Linkuri nefuncționale, lanțuri de redirecționări, linkuri nofollow și texte de ancoră goale.",
        href: "https://webscore.now/tools/internal-links",
      },
      {
        name: "Verificare lizibilitate",
        body: "Flesch, Flesch-Kincaid, Gunning Fog, SMOG și alți indici pentru orice pagină.",
        href: "https://webscore.now/tools/readability",
      },
      {
        name: "Verificare certificat SSL",
        body: "Data expirării, lanțul de certificate și versiunile de protocol, cu o notă de securitate.",
        href: "https://webscore.now/tools/ssl",
      },
      {
        name: "Verificare securitate e-mail",
        body: "Înregistrările SPF, DKIM și DMARC, împotriva falsificării și pentru livrare mai bună.",
        href: "https://webscore.now/tools/email-security",
      },
      {
        name: "Generator DNS pentru e-mail",
        body: "Creează înregistrările SPF, DKIM și DMARC pentru furnizorii tăi de e-mail.",
        href: "https://webscore.now/tools/email-dns-generator",
      },
      {
        name: "Generator de favicon",
        body: "favicon.ico, PNG-uri de la 16 la 512 px, apple-touch-icon și manifest dintr-o singură imagine.",
        href: "https://webscore.now/tools/favicon",
      },
      {
        name: "Generator de imagini Open Graph",
        body: "Creează imaginea afișată când pagina ta e distribuită pe rețelele sociale.",
        href: "https://webscore.now/tools/og-image",
      },
      {
        name: "Convertor de imagini în WebP și AVIF",
        body: "Convertește JPEG, PNG și GIF în browser; imaginile nu părăsesc dispozitivul.",
        href: "https://webscore.now/tools/image-converter",
      },
      {
        name: "Compresor de imagini",
        body: "Micșorează fișiere JPEG, PNG, WebP și AVIF fără să schimbe formatul, în browser.",
        href: "https://webscore.now/tools/image-compressor",
      },
      {
        name: "Generator de linkuri UTM",
        body: "Linkuri de campanie urmăribile pentru Google Analytics și orice alt instrument.",
        href: "https://webscore.now/tools/utm-builder",
      },
      {
        name: "Generator de coduri QR",
        body: "Un cod QR pentru orice link sau text, ca PNG la rezoluție mare sau SVG.",
        href: "https://webscore.now/tools/qr-code",
      },
    ],
    faqs: [
      {
        q: "Ce este un audit de site?",
        a: "Un audit de site este o verificare sistematică a semnalelor care decid dacă un site poate fi găsit, se încarcă repede, funcționează fiabil, inspiră încredere și convertește vizitatorii. WebScore face automat această verificare și transformă rezultatul într-o listă ordonată de remedieri.",
      },
      {
        q: "Poate o singură scanare să acopere Core Web Vitals, SEO, accesibilitate și securitate?",
        a: "Da. O singură scanare le acoperă pe toate pentru aceeași pagină, împreună cu vizibilitatea în AI și bunele practici, fiecare cu propriul scor.",
      },
      {
        q: "Prin ce diferă WebScore de Lighthouse?",
        a: "WebScore combină semnale de tip Lighthouse cu verificări mai profunde de SEO, securitate, autentificare a e-mailului, vizibilitate în AI și indicatori de domeniu, apoi prioritizează remedierile, în loc să te lase cu o listă nediferențiată.",
      },
      {
        q: "Ce nu face WebScore?",
        a: "Nu face cercetare de cuvinte-cheie și nici monitorizare de poziții și nu are propriul index de backlinkuri. Pentru asemenea sarcini sunt mai potrivite suitele SEO dedicate.",
      },
      {
        q: "Poate un agent AI să folosească WebScore?",
        a: "Da. WebScore găzduiește un server MCP care funcționează cu Claude Code, Claude Desktop, Cursor, Codex și orice alt client MCP. Prin el, un agent poate scana site-uri, citi remedierile, prelua indicatorii de domeniu și porni sau opri monitorizarea.",
      },
    ],
    imageAlt:
      "Panoul WebScore, cu un scor general de sănătate a site-ului de 92, scoruri separate pentru performanță, SEO, accesibilitate și securitate și un grafic al evoluției scorului.",
    screenshots: [
      {
        alt: "Prezentarea generală WebScore, cu scorul total 96 și scoruri separate pentru performanță, SEO, accesibilitate, securitate și vizibilitate în AI",
        caption: "Prezentare generală",
      },
      {
        alt: "Lista „Repară mai întâi” din WebScore, cu problema cu cel mai mare impact și cum se rezolvă",
        caption: "Repară mai întâi",
      },
      {
        alt: "Raportul de performanță WebScore, cu Core Web Vitals",
        caption: "Performanță",
      },
      {
        alt: "Raportul SEO WebScore, cu verificări tehnice, titluri și linkuri",
        caption: "SEO",
      },
      {
        alt: "Raportul de vizibilitate în AI din WebScore, cu accesul crawlerelor AI și cât de ușor pot răspunde pe baza site-ului",
        caption: "Vizibilitate în AI",
      },
      {
        alt: "Raportul de securitate WebScore, cu headere de securitate, HTTPS și verificări pentru e-mail",
        caption: "Securitate",
      },
    ],
  },

  gdprfix: {
    name: "GDPR Fix",
    category: "Verificare a conformității cookie-urilor",
    tagline:
      "Verifică dacă site-ul tău respectă GDPR și ePrivacy în privința cookie-urilor și îți spune cum să repari fiecare problemă.",
    title: "GDPR Fix — Verificare cookie-uri pentru GDPR și ePrivacy",
    description:
      "Scanează un site pentru încălcări ale consimțământului: cookie-uri setate fără acord, bannere înșelătoare, lipsuri în politică. Scor 0–100 și remediere pentru fiecare.",
    keywords: [
      "verificare cookie-uri",
      "scanner cookie GDPR",
      "verificare consimțământ cookie",
      "conformitate ePrivacy",
      "audit banner cookie",
      "generator politică cookie",
      "conformitate GDPR site",
    ],
    h1: "GDPR Fix: găsește problemele cu cookie-urile înaintea autorităților",
    lead: "GDPR Fix îți scanează site-ul așa cum ar face-o o autoritate de control: îl încarcă într-un browser real înainte de consimțământ, după acceptare și după refuz și raportează fiecare cookie, tracker și problemă de banner în raport cu GDPR și Directiva ePrivacy, cu remedierea pentru fiecare.",
    facts: [
      { label: "Tip", value: "Aplicație web" },
      { label: "Verifică în raport cu", value: "GDPR și Directiva ePrivacy" },
      { label: "Rezultat", value: "Un scor de la 0 la 100" },
      { label: "Instalare", value: "Fără cod de adăugat, fără instalare" },
    ],
    overview: [
      "GDPR Fix este un instrument care verifică dacă un site respectă regulile privind cookie-urile. Introduci un URL, iar el verifică cookie-urile, trackerele, bannerul de consimțământ și politica de cookie-uri, apoi îi dă site-ului un scor de conformitate de la 0 la 100: Critic sub 50, Necesită lucru între 50 și 69 și Bun de la 70 în sus.",
      "Fiecare problemă este legată de regula pe care o încalcă, de exemplu articolul 5 alineatul (3) din Directiva ePrivacy sau articolele 13 și 28 din GDPR, și vine cu remedierea. Poți parcurge lista singur, poți copia un prompt gata făcut pentru un asistent AI sau poți conecta un instrument AI de programare prin MCP, ca să repare și să scaneze din nou.",
    ],
    features: [
      {
        title: "Detectarea cookie-urilor",
        body: "Găsește fiecare cookie propriu și de la terți setat de site și arată care dintre ele se activează înainte ca vizitatorul să-și dea consimțământul.",
      },
      {
        title: "Auditul bannerului de consimțământ",
        body: "Verifică dacă bannerul există, dacă blochează cookie-urile până la consimțământ, dacă opțiunea de refuz apare din primul ecran și dacă refuzul este la fel de simplu ca acceptarea.",
      },
      {
        title: "Lista de verificare a politicii de cookie-uri",
        body: "Analizează politica de cookie-uri după șapte criterii, printre care dacă enumeră toate cookie-urile, precizează perioadele de păstrare, menționează serviciile terților și explică drepturile vizitatorilor.",
      },
      {
        title: "Scripturi de la terți",
        body: "Enumeră fiecare tracker, pixel și conținut încorporat din pagină care primește datele vizitatorilor tăi.",
      },
      {
        title: "Probleme legate de lege",
        body: "Fiecare problemă trimite la articolul sau ghidul relevant, de exemplu art. 5 alin. (3) ePrivacy, art. 13 GDPR, art. 28 GDPR sau Ghidurile EDPB 03/2022.",
      },
      {
        title: "O remediere pentru fiecare problemă",
        body: "Fiecare problemă vine cu instrucțiuni de remediere și cu un buton „Copy to LLM”, care copiază problema și soluția ca prompt pentru un asistent AI.",
      },
      {
        title: "Politică de cookie-uri generată cu AI",
        body: "Generează o politică de cookie-uri pe baza cookie-urilor găsite efectiv pe site, gata de copiat și lipit.",
      },
      {
        title: "Server MCP pentru instrumente AI",
        body: "Conectezi Claude Code, Cursor, VS Code sau Claude Desktop ca să pornești scanări, să citești rapoarte și să verifici starea scanării. Asistentul te întreabă înainte să pornească o scanare și vede doar scanările tale.",
      },
    ],
    audience: [
      "Proprietari de site-uri accesibile din Uniunea Europeană",
      "Magazine online pe WordPress, WooCommerce, Shopify, Wix sau Webflow",
      "Produse SaaS și aplicații Next.js",
      "Agenții de marketing care verifică site-urile clienților",
      "Site-uri din sănătate, finanțe și educație",
      "Bloggeri și publicații care folosesc statistici sau reclame",
    ],
    steps: [
      {
        title: "Introdu adresa site-ului",
        body: "Scrii adresa și te autentifici gratuit cu Google sau printr-un link pe e-mail. Nu ai cod de adăugat și nimic de instalat.",
      },
      {
        title: "Scanare într-un browser real",
        body: "Un browser fără interfață îți încarcă site-ul de trei ori: înainte de consimțământ, după acceptare și după refuz, și înregistrează ce se întâmplă de fiecare dată.",
      },
      {
        title: "Repară și scanează din nou",
        body: "Rezolvi singur problemele, în ordinea priorității, sau conectezi un instrument AI prin MCP ca să le repare, apoi scanezi din nou ca să confirmi.",
      },
    ],
    freeTools: [
      {
        name: "Generator Google Consent Mode v2",
        body: "Alegi categoriile și regiunile bannerului și primești codul gtag.",
        href: "https://gdprfix.eu/tools/consent-mode",
      },
      {
        name: "Blocare a scripturilor de urmărire",
        body: "Rescrie etichetele de urmărire astfel încât să aștepte consimțământul.",
        href: "https://gdprfix.eu/tools/script-blocker",
      },
      {
        name: "Designer de banner pentru cookie-uri",
        body: "Șase modele de banner conforme, cu previzualizare; alegi culoarea și copiezi codul.",
        href: "https://gdprfix.eu/tools/banner-designer",
      },
    ],
    faqs: [
      {
        q: "Site-ul meu trebuie să respecte GDPR?",
        a: "Dacă site-ul poate fi accesat din Uniunea Europeană sau prelucrează date personale ale rezidenților UE, da. Consimțământul pentru cookie-uri este reglementat în special de Directiva ePrivacy, care se aplică alături de GDPR.",
      },
      {
        q: "Care este diferența dintre GDPR și ePrivacy?",
        a: "Directiva ePrivacy stabilește regulile pentru consimțământul la cookie-uri: ce se poate stoca pe dispozitivul vizitatorului și când. GDPR este cadrul mai larg privind prelucrarea datelor personale. GDPR Fix verifică ambele.",
      },
      {
        q: "Cât de precisă este scanarea?",
        a: "GDPR Fix folosește un browser real, fără interfață, înregistrează cookie-urile în fiecare etapă (înainte de consimțământ, după acceptare și după refuz) și leagă fiecare problemă de articolul relevant.",
      },
      {
        q: "Am nevoie de un cont?",
        a: "Da, o autentificare gratuită cu Google sau printr-un link pe e-mail, ca rezultatele scanărilor să poată fi salvate.",
      },
      {
        q: "Cât de des ar trebui să-mi scanez site-ul?",
        a: "După fiecare schimbare importantă, cum ar fi un plugin, un script sau un instrument de marketing nou, și cel puțin o dată pe trimestru.",
      },
      {
        q: "Poate un instrument AI să repare problemele în locul meu?",
        a: "Da. GDPR Fix are un server MCP care funcționează cu Claude Code, Cursor, VS Code și Claude Desktop. Instrumentul AI poate citi raportul, aplica remedierile și porni o scanare nouă ca să le verifice.",
      },
      {
        q: "Ce face butonul „Copy to LLM”?",
        a: "Copiază un prompt care conține problema și instrucțiunile de remediere, ca să-l poți lipi în orice asistent AI.",
      },
    ],
    imageAlt:
      "GDPR Fix: găsește problemele cu cookie-urile înaintea autorităților. Un indicator de conformitate care arată scorul 82 din 100, calificat Bun.",
    screenshots: [
      {
        alt: "Prezentarea raportului GDPR Fix, cu scorul de conformitate, un rezumat și numărul de cookie-uri setate fără consimțământ",
        caption: "Prezentarea raportului",
      },
      {
        alt: "Planul de remediere GDPR Fix, cu problemele în ordinea priorității și pașii pentru fiecare",
        caption: "Probleme și plan de remediere",
      },
      {
        alt: "Raportul de cookie-uri GDPR Fix, care compară cookie-urile înainte de consimțământ, după acceptare și după refuz",
        caption: "Cookie-uri pe etape",
      },
      {
        alt: "Lista de verificare a politicii de cookie-uri în GDPR Fix, cu criteriile îndeplinite și neîndeplinite și o politică generată",
        caption: "Verificarea politicii",
      },
      {
        alt: "Fereastra GDPR Fix pentru conectarea Claude Code, Cursor sau VS Code prin MCP",
        caption: "Conectează instrumentul AI",
      },
      {
        alt: "Generatorul Google Consent Mode v2 din GDPR Fix, cu codul gata de copiat",
        caption: "Generator Consent Mode v2",
      },
    ],
  },

  memo: {
    name: "Memo",
    category: "Colectare de fotografii la evenimente, prin cod QR",
    tagline:
      "Adună fotografiile tuturor invitaților de la un eveniment cu un singur cod QR. Fără aplicație, fără cont.",
    title: "Memo — Fotografiile de la nuntă și evenimente, printr-un cod QR",
    description:
      "Invitații scanează un cod QR și își încarcă fotografiile direct din telefon. Fără aplicație, fără cont. Perete foto live, descărcare la calitate maximă, carduri QR.",
    keywords: [
      "poze nuntă cod QR",
      "album foto nuntă invitați",
      "colectare fotografii eveniment",
      "album foto cod QR",
      "poze de la invitați",
      "perete foto live",
    ],
    h1: "Memo: toate fotografiile de la eveniment, cu un singur cod QR",
    lead: "Memo adună fotografiile făcute de invitații tăi. Ei scanează un cod QR cu camera telefonului și le încarcă, fără aplicație și fără cont. Tu primești toate fotografiile într-un singur album, la calitate maximă.",
    facts: [
      { label: "Tip", value: "Aplicație web" },
      { label: "Pentru", value: "Nunți, petreceri, evenimente de firmă" },
      { label: "Invitații au nevoie de", value: "Doar camera telefonului" },
      { label: "Limbi", value: "6, inclusiv română și engleză" },
    ],
    overview: [
      "Cele mai bune fotografii de la un eveniment sunt, de obicei, în telefoanele invitaților, iar cele mai multe nu ajung niciodată la gazde. Memo rezolvă asta cu un singur cod QR. Creezi un album, tipărești codul pe un card pentru mese, iar invitații își încarcă fotografiile scanându-l.",
      "Fotografiile sosesc pe măsură ce sunt făcute, așa că le poți afișa pe un ecran din sală, ca perete foto live. După eveniment, totul se păstrează la calitatea originală și poate fi descărcat oricând ca arhivă ZIP. Albumele nu sunt listate public, iar tu poți verifica fotografiile încărcate înainte să le vadă altcineva.",
    ],
    features: [
      {
        title: "Un singur cod QR pentru toți invitații",
        body: "Invitații îl scanează cu camera telefonului, ating linkul și încarcă. Fără aplicație de descărcat și fără cont de creat.",
      },
      {
        title: "Designer de cod QR și șabloane de tipar",
        body: "Alegi un stil sau îți creezi propriul card, apoi descarci un PDF gata de tipar, în format A3, A4, A5 sau A6.",
      },
      {
        title: "Perete foto live",
        body: "Fotografiile apar pe un ecran din sală pe măsură ce invitații le încarcă, iar albumul devine parte din eveniment.",
      },
      {
        title: "Secțiuni pentru fiecare moment al zilei",
        body: "Invitații aleg unde se potrivesc fotografiile lor, de exemplu ceremonie, petrecere sau after-party, așa că albumul ajunge la tine deja organizat.",
      },
      {
        title: "Privat, cu moderare",
        body: "Albumele nu sunt listate public. Moderatorii pot verifica fotografiile încărcate înainte ca acestea să devină vizibile pentru ceilalți invitați.",
      },
      {
        title: "Calitate originală, integrală",
        body: "Fotografiile se păstrează la rezoluție maximă, cu datele GPS și ale camerei eliminate. Descarci totul, oricând, ca arhivă ZIP.",
      },
      {
        title: "Fotografii, video și carte de oaspeți audio",
        body: "Invitații pot încărca și clipuri video, nu doar fotografii, și pot lăsa mesaje vocale într-o carte de oaspeți audio.",
      },
    ],
    audience: [
      "Cupluri care își organizează nunta",
      "Familii care organizează zile de naștere, botezuri și aniversări",
      "Companii care organizează evenimente de firmă și întâlniri de echipă",
      "Școli și familii care organizează absolviri",
      "Organizatori de evenimente și fotografi care vor și fotografiile invitaților",
    ],
    steps: [
      {
        title: "Creează albumul",
        body: "Adaugi numele evenimentului, data și locația. Durează aproximativ un minut.",
      },
      {
        title: "Tipărește cardul QR",
        body: "Alegi un șablon și descarci un PDF gata de tipar, pentru mese, pentru intrare sau pentru invitații.",
      },
      {
        title: "Privește cum sosesc fotografiile",
        body: "Invitații scanează și încarcă. Vezi fiecare fotografie în timp real și le poți afișa pe peretele foto.",
      },
    ],
    freeTools: [
      {
        name: "Vânătoare de poze",
        body: "Un cartonaș de printat cu provocări foto și codul QR al albumului.",
        href: "https://me-mo.ro/tools/wedding-photo-scavenger-hunt",
      },
      {
        name: "Listă de cadre foto",
        body: "Pozele care nu trebuie să lipsească, de editat, printat și dat fotografului.",
        href: "https://me-mo.ro/tools/wedding-shot-list",
      },
      {
        name: "Program pe ore",
        body: "Programe de printat pentru nunți, botezuri și aniversări.",
        href: "https://me-mo.ro/tools/wedding-timeline",
      },
    ],
    faqs: [
      {
        q: "Invitații mei au nevoie de o aplicație?",
        a: "Nu. Scanează codul QR cu camera telefonului, ating linkul și încarcă. Nimic de instalat și niciun cont de creat.",
      },
      {
        q: "Albumul este privat?",
        a: "Da. Albumele nu sunt listate public, deci doar cei care au codul QR sau linkul pot ajunge la ele, iar moderatorii pot verifica fotografiile înainte să devină vizibile.",
      },
      {
        q: "Pot descărca toate fotografiile?",
        a: "Da. Fotografiile sunt păstrate la rezoluția originală și poți descărca oricând întregul album, ca arhivă ZIP.",
      },
      {
        q: "Memo acceptă și video?",
        a: "Da. Invitații pot încărca atât fotografii, cât și clipuri video.",
      },
      {
        q: "Pentru ce fel de evenimente este Memo?",
        a: "Nunți, zile de naștere, botezuri, aniversări, absolviri și evenimente de firmă: orice ocazie la care mulți oameni fac fotografii și vrei să le ai pe toate într-un singur loc.",
      },
      {
        q: "În ce limbi este disponibil Memo?",
        a: "Memo este disponibil în română, engleză, franceză, germană, italiană și spaniolă.",
      },
    ],
    imageAlt:
      "Memo: albume foto digitale pentru evenimente, în care invitații adaugă fotografii în timp real, scanând un cod QR.",
    screenshots: [
      {
        alt: "Pagina pentru invitați a unui album de nuntă în Memo, cu butoane pentru fotografie, video sau încărcare din galerie",
        caption: "Pagina pentru invitați",
      },
      {
        alt: "Albumul Memo cu toate fotografiile încărcate de invitați, filtrate pe secțiuni",
        caption: "Toate fotografiile",
      },
      {
        alt: "Designerul de coduri QR din Memo, cu șabloane pentru codul albumului",
        caption: "Designer QR",
      },
      {
        alt: "Editorul de tipărire Memo pentru un cartonaș de masă cu codul QR al albumului",
        caption: "Editor de tipărire",
      },
      {
        alt: "Galeria pentru invitați din Memo, pe telefon, cu fotografiile împărtășite",
        caption: "Galeria invitaților",
      },
      {
        alt: "Prezentarea pe tot ecranul a fotografiilor invitaților în Memo",
        caption: "Prezentare live",
      },
    ],
  },
};
