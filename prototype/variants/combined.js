// PROTOTYPE D — Light Lab base + Workbench moments (polaroids for work, a letter that pops out at the end).
// Websites & apps and IT support are two equal core cards; photo & video sits below them. Copy is local to this variant.
const D = {
  brand: 'Grace Labs',
  by: 'by Daniel Gergely',
  address: '[Street No.], [ZIP City]', // TODO: home address for imprint + privacy notice
  linkedin: 'https://www.linkedin.com/in/danielg98/',
  github: 'https://github.com/Danielgergely',
  whatsapp: '/whatsapp', // Cloudflare redirect rule → wa.me/<number>, so the number never appears in the page
  services: [
    {
      key: 'web', title: 'Websites & apps', head: 'Built for you.', color: '#5ad1ff', core: true,
      line: 'Websites, apps and custom tools that fit how you work. I build them, host them and look after the domain name, so you never have to think about it.',
      items: ['Website design & build', 'Mobile & web apps', 'Custom IT tools & automation', 'Hosting, domains & email', 'Updates & ongoing care'],
    },
    {
      key: 'it', title: 'IT support & advice', head: 'Your tech person.', color: '#ffd06b', core: true,
      line: 'Honest advice and hands-on help, from choosing the right laptop to using AI well in your work.',
      items: ['AI advice & setup', 'Choosing & buying equipment', 'Setup & configuration', 'Wi-Fi, backups & security', 'Troubleshooting & remote help'],
    },
    {
      key: 'media', title: 'Photo & video', head: 'Stories worth keeping.', color: '#ff6fae',
      line: 'Events, portraits and highlight films, shot and edited with care.',
      items: ['Event & church highlights', 'Portraits & teams', 'Sports & season films', 'Short promo clips'],
    },
  ],
  values: {
    title: 'Pay what fits.',
    body: "Many small businesses, churches and people starting out can't pay agency prices, yet they still need good IT, a solid website or images that tell their story. I love helping exactly them. I use the gifts and experience God gave me to keep it as affordable as possible. If you can give something back, wonderful. If not, let's still talk.",
  },
  work: [
    { title: 'Bros Cafe', kind: 'Website', bg: 'linear-gradient(135deg,#f0b77b,#8a4a24)' },
    { title: 'MealOS', kind: 'iOS app', bg: 'linear-gradient(135deg,#7ad3a8,#2c5d6e)' },
    { title: 'Family Taskmaster', kind: 'Film & edit · 3 seasons', bg: 'linear-gradient(135deg,#f6d365,#fda085)' },
    { title: 'Church trip', kind: 'Highlight video', bg: 'linear-gradient(135deg,#a18cd1,#fbc2eb)' },
    { title: 'Season highlights', kind: 'Sports video', bg: 'linear-gradient(135deg,#5ad1ff,#1f3b73)' },
  ],
  about: {
    title: "Hi, I'm Daniel.",
    body: 'MSc in Computer Science and 7+ years as a software developer. IT is my home ground: I build things, fix things and explain them in plain language. Photo and video are what I love doing on the side. Based in Switzerland, working in English, German and Hungarian.',
  },
  email: 'hello@gracelabs.dev',
};

const WORK = [
 {
  "title": "FischerGPT",
  "img": "img/fischergpt.jpg",
  "kind": {
   "en": "AI chat assistant",
   "de": "KI-Chat-Assistent",
   "hu": "MI-csevegőasszisztens"
  },
  "story": {
   "forWho": "Fischer Spindle Group, a Swiss industrial company. This was my master thesis at the University of Zurich (2025).",
   "need": "An AI assistant that knows the company’s own documents, while every employee only sees what they are allowed to see.",
   "did": "Built a secure retrieval system (RAG) behind the company chat assistant, with permission-aware search, and showed that it answers at expert level."
  },
  "cat": "work",
  "tags": "ai rag chatbot llm enterprise documents master thesis uzh fischer"
 },
 {
  "title": "Fischer Planning Lab",
  "bg": "linear-gradient(135deg,#f6d365,#c2703d)",
  "link": "https://studierendenprojekte.wirtschaft.fhnw.ch/en/view/2824",
  "kind": {
   "en": "Planning web app",
   "de": "Planungs-Web-App",
   "hu": "Tervező webalkalmazás"
  },
  "story": {
   "forWho": "Fischer Spindle Group. This was my bachelor thesis at FHNW (2023), with a summary, video and the full thesis behind the link.",
   "need": "Weekly order planning ran on whiteboards, magnets and stickers, and took the team around 7 hours every week.",
   "did": "Built a touch-friendly planning app for large screens that pulls data from the ERP and the timekeeping system, plus a dashboard for the workers."
  },
  "cat": "work",
  "tags": "erp planning web app react python touch bachelor thesis fhnw fischer"
 },
 {
  "title": "Fischer Spindle Portal",
  "cat": "work",
  "bg": "linear-gradient(135deg,#8fa3b8,#2f3e52)",
  "tags": "portal intranet search mongodb sharepoint sap erp integration company fischer spindles",
  "kind": {
   "en": "Company portal",
   "de": "Firmenportal",
   "hu": "Vállalati portál"
  },
  "story": {
   "forWho": "Fischer Spindle Group, where I worked for 6.5 years and grew from assistant to software developer.",
   "need": "Information about every spindle and compressor was spread across many systems, so finding anything took time.",
   "did": "Built one portal where employees find everything about a spindle in one place, connected to MongoDB for spindle data, SharePoint for manuals and datasheets, and SAP for order and quality history."
  }
 },
 {
  "title": "MyCompassion",
  "cat": "work",
  "bg": "linear-gradient(135deg,#5b8cff,#1d3fa8)",
  "link": "https://mycompassion.ch",
  "tags": "app ios android portal web ngo church sponsorship compassion",
  "kind": {
   "en": "Web portal & mobile app",
   "de": "Webportal & Mobile-App",
   "hu": "Webportál és mobilapp"
  },
  "story": {
   "forWho": "Compassion Switzerland, the Christian NGO I work for.",
   "need": "Sponsors want to stay close to the child they support, wherever they are.",
   "did": "Part of the team building the MyCompassion web portal and app, where sponsors follow their sponsored children, write letters and manage their giving."
  }
 },
 {
  "title": "Bros Cafe",
  "img": "img/broscafe.jpg",
  "link": "https://broscafe.hu",
  "kind": {
   "en": "Website & loyalty card",
   "de": "Website & Treuekarte",
   "hu": "Weboldal és hűségkártya"
  },
  "story": {
   "forWho": "Our own cafe: my two brothers and I opened Bros Cafe in Budapest.",
   "need": "A website that feels like the cafe, plus a digital loyalty card for regulars.",
   "did": "Designed and built the site in Hungarian and English, set up hosting, and created an Apple Wallet loyalty card."
  },
  "cat": "others",
  "tags": "website cafe coffee loyalty wallet budapest hungarian"
 },
 {
  "title": "Workman",
  "bg": "linear-gradient(135deg,#9fb8c8,#3d5566)",
  "soon": true,
  "kind": {
   "en": "Website",
   "de": "Website",
   "hu": "Weboldal"
  },
  "story": {
   "forWho": "Workman, craftsmen with heart: carpentry, gardening, caretaking and repairs.",
   "need": "A website for a new business where every job also gives people a chance to get back into work.",
   "did": "In progress: a warm, simple site in German, with design, hosting and domain taken care of."
  },
  "cat": "others",
  "tags": "website craftsman handwerker social business german"
 },
 {
  "title": "Soar in Spirit",
  "cat": "others",
  "bg": "linear-gradient(135deg,#d9b48f,#8c5a3c)",
  "soon": true,
  "tags": "website pottery ceramics art studio hungarian siss small business",
  "kind": {
   "en": "Pottery studio website",
   "de": "Website für ein Töpferatelier",
   "hu": "Kerámiastúdió weboldala"
  },
  "story": {
   "forWho": "Soar in Spirit, the pottery studio of a potter who wants to show her work online.",
   "need": "A simple, beautiful site she can be proud of, without having to deal with any tech.",
   "did": "In progress: design, build, hosting and the siss.hu domain, all taken care of."
  }
 },
 {
  "title": "66",
  "img": "img/66.jpg",
  "link": "https://66.broscafe.hu",
  "kind": {
   "en": "Bible quiz game",
   "de": "Bibel-Quizspiel",
   "hu": "Bibliai kvízjáték"
  },
  "story": {
   "forWho": "Churches, youth groups and anyone who loves the Bible.",
   "need": "A fun way to get to know the 66 books of the Bible, alone or as a group.",
   "did": "Designed and built a quiz racing game with solo races, live group quizzes and a daily challenge."
  },
  "cat": "fun",
  "tags": "game bible quiz church youth web"
 },
 {
  "title": "MealOS",
  "bg": "linear-gradient(135deg,#7ad3a8,#2c5d6e)",
  "kind": {
   "en": "iPad app",
   "de": "iPad-App",
   "hu": "iPad-app"
  },
  "story": {
   "forWho": "Our own family kitchen.",
   "need": "One place to plan the week’s meals, keep our recipes and know what to buy.",
   "did": "Built an iPad app that plans the week, stores recipes, turns them into one smart shopping list, and syncs it with the whole household over iCloud."
  },
  "cat": "fun",
  "tags": "app ipad ios swift meal planning recipes shopping family"
 },
 {
  "title": "Trip highlights",
  "cat": "photo",
  "bg": "linear-gradient(135deg,#8ec5d6,#2e5e7a)",
  "soon": true,
  "tags": "photo photography trip travel highlights",
  "kind": {
   "en": "Photo series",
   "de": "Fotoserie",
   "hu": "Fotósorozat"
  },
  "story": {
   "forWho": "Placeholder: a trip with a few photo highlights.",
   "need": "",
   "did": "Your photos here."
  },
  "gallery": []
 }
];
const CATS = ['work', 'others', 'photo', 'fun'];

const I18N = {
  en: {
    headline: 'Your tech person.',
    sub: 'Agency quality at a price that fits. IT help, websites and apps, plus photo and video.',
    btn1: 'Tell me what you need', btn2: 'What I do',
    heroNote: "I do the work first. You pay afterwards, only if you're happy and only what you can.",
    payKicker: "How it works",
    payTitle: "Pay what fits.",
    s1t: "Just ask.",
    s1b: "Tell me what you need. Asking costs nothing, and there are no silly questions.",
    s2t: "I do the work.",
    s2b: "You see the finished result before you pay anything.",
    s3t: "You decide.",
    s3b: "If you're happy, pay what it's worth to you and what fits your budget. If money is tight, that's okay too.",
    payNote: "The only exception: costs I pay to others, like domain names, hosting or equipment. I pass those on at cost, and we always agree on them first.",
    payBody: "Many small businesses, churches and people starting out can't pay agency prices. I love helping exactly them, with the gifts and experience God gave me.",
    contactLead: "Asking is free. A sentence is enough to start.",
    svcKicker: "One light",
    svcTitle: "Three ways I can help.",
    badgeCore: "Core",
    badgeAlso: "Also",
    asksLabel: "People ask me things like",
    quotes: ["“", "”"],
    cards: [{"kicker": "Websites & apps", "head": "Built for you.", "line": "A website, an app or a small tool that saves you time. I design and build it, then take care of hosting and the domain name, so you don't have to.", "items": ["Website design & build", "Mobile & web apps", "Custom tools & automation", "Hosting, domain & email", "Updates & care"], "asks": ["I'd love a website for my pottery.", "Can we stop doing this in Excel?"]}, {"kicker": "IT support & advice", "head": "Your tech person.", "line": "Honest advice and hands-on help with everything digital, explained in plain language.", "items": ["AI advice & setup", "Choosing & buying equipment", "Setup & configuration", "Wi-Fi, backups & security", "Troubleshooting & remote help"], "asks": ["Which laptop should I buy?", "Can AI help with our newsletter?"]}, {"kicker": "Photo & video", "head": "Stories worth keeping.", "line": "Events, portraits and short films, shot and edited with care.", "items": ["Event & church highlights", "Portraits & team photos", "Sports & season films", "Short promo clips"], "asks": ["Could you film our church weekend?", "We need photos for our website."]}],
    workKicker: "Selected work",
    workTitle: "Things I've made.",
    workSub: "Scroll sideways through each row, search, or tap a photo for the story.",
    soon: "Coming soon",
    stFor: "For",
    stNeed: "What they needed",
    stDid: "What I did",
    stVisit: "Have a look",
    aboutKicker: "About",
    aboutTitle: "Hi, I'm Daniel.",
    aboutP1: "Everything I can do, I was given. Grace Labs is my way of passing it on: good IT, websites and media for people who can't pay agency prices.",
    aboutP2: "I'm a software developer with an MSc in Informatics from the University of Zurich and more than 7 years of experience. By day I build software for a Christian NGO. With my two brothers I also run a small cafe in Budapest, so I know what it's like to build something with little time and a tight budget.",
    aboutP3: "Away from the keyboard I'm a dad first, and I love sport, especially football and running.",
    aboutChips: ["MSc Informatics, UZH", "7+ years in software", "Co-founder of Bros Cafe", "English · German · Hungarian"],
    photoPh: "Your photo here",
    contactKicker: "Contact",
    letterTitle: "Tell me what you need.",
    lName: "Your name",
    lContact: "Email or phone",
    lHelp: "How can I help?",
    lPh: "e.g. my laptop is slow, I need a website, can AI help my shop…",
    lSend: "Send",
    lOr: "or write to",
    lThanks: "Thanks ♥ talk soon",
    cat_work: "At work",
    cat_others: "For others",
    cat_fun: "My own projects",
    searchPh: "Search: website, AI, app, game…",
    noResults: "Nothing found. Try another word.",
    cat_photo: "Photography",
    replyNote: "I reply within 24 hours, usually much faster.",
    altLabel: "Prefer to chat?",
    waBtn: "Message me on WhatsApp",
    country: "Switzerland",
    fNav: "Explore",
    fElse: "Elsewhere",
    lgPrivacy: "Privacy",
    lgImprint: "Imprint",
    navSvc: 'Services', navWork: 'Work', navAbout: 'About', navCta: 'Get in touch',
  },
  de: {
    headline: 'Dein Tech-Mensch.',
    sub: 'Agenturqualität zu einem Preis, der passt. IT-Hilfe, Websites und Apps, dazu Foto und Video.',
    btn1: 'Erzähl mir, was du brauchst', btn2: 'Was ich mache',
    heroNote: "Ich mache die Arbeit zuerst. Du zahlst danach, nur wenn du zufrieden bist, und nur so viel, wie du kannst.",
    payKicker: "So funktioniert's",
    payTitle: "Zahl, was passt.",
    s1t: "Frag einfach.",
    s1b: "Erzähl mir, was du brauchst. Fragen kostet nichts, und es gibt keine dummen Fragen.",
    s2t: "Ich mache die Arbeit.",
    s2b: "Du siehst das fertige Ergebnis, bevor du etwas bezahlst.",
    s3t: "Du entscheidest.",
    s3b: "Wenn du zufrieden bist, zahlst du, was es dir wert ist und was in dein Budget passt. Wenn das Geld knapp ist, ist das auch okay.",
    payNote: "Einzige Ausnahme: Kosten, die ich an andere zahle, etwa für Domain, Hosting oder Geräte. Die gebe ich zum Selbstkostenpreis weiter, und wir sprechen sie immer vorher ab.",
    payBody: "Viele kleine Firmen, Kirchen und Menschen, die gerade etwas aufbauen, können sich keine Agenturpreise leisten. Genau ihnen helfe ich gern, mit den Gaben und der Erfahrung, die Gott mir geschenkt hat.",
    contactLead: "Fragen kostet nichts. Ein Satz reicht für den Anfang.",
    svcKicker: "Ein Licht",
    svcTitle: "Drei Wege, wie ich helfe.",
    badgeCore: "Schwerpunkt",
    badgeAlso: "Ausserdem",
    asksLabel: "Typische Fragen",
    quotes: ["«", "»"],
    cards: [{"kicker": "Websites & Apps", "head": "Für dich gebaut.", "line": "Eine Website, eine App oder ein kleines Tool, das dir Zeit spart. Ich gestalte und baue es und kümmere mich um Hosting und Domain, damit du es nicht musst.", "items": ["Webdesign & Umsetzung", "Mobile & Web-Apps", "Eigene Tools & Automatisierung", "Hosting, Domain & E-Mail", "Updates & Pflege"], "asks": ["Ich hätte gern eine Website für meine Töpferei.", "Können wir aufhören, das in Excel zu machen?"]}, {"kicker": "IT-Support & Beratung", "head": "Dein Tech-Mensch.", "line": "Ehrliche Beratung und praktische Hilfe bei allem Digitalen, in verständlicher Sprache.", "items": ["KI-Beratung & Einrichtung", "Geräte auswählen & kaufen", "Einrichtung & Konfiguration", "WLAN, Backups & Sicherheit", "Fehlersuche & Fernhilfe"], "asks": ["Welchen Laptop soll ich kaufen?", "Kann KI bei unserem Newsletter helfen?"]}, {"kicker": "Foto & Video", "head": "Geschichten, die bleiben.", "line": "Anlässe, Porträts und kurze Filme, mit Sorgfalt gedreht und geschnitten.", "items": ["Highlights von Anlässen & Gemeinde", "Porträts & Teamfotos", "Sport- & Saisonfilme", "Kurze Promo-Clips"], "asks": ["Kannst du unser Gemeindewochenende filmen?", "Wir brauchen Fotos für unsere Website."]}],
    workKicker: "Ausgewählte Arbeiten",
    workTitle: "Was ich gemacht habe.",
    workSub: "Wisch durch die Reihen, such oder tipp auf ein Foto für die Geschichte dahinter.",
    soon: "Bald online",
    stFor: "Für",
    stNeed: "Was gebraucht wurde",
    stDid: "Was ich gemacht habe",
    stVisit: "Anschauen",
    aboutKicker: "Über mich",
    aboutTitle: "Hi, ich bin Daniel.",
    aboutP1: "Alles, was ich kann, habe ich geschenkt bekommen. Grace Labs ist meine Art, es weiterzugeben: gute IT, Websites und Medien für Menschen, die sich keine Agenturpreise leisten können.",
    aboutP2: "Ich bin Softwareentwickler mit einem Master in Informatik der Universität Zürich und über 7 Jahren Erfahrung. Tagsüber entwickle ich Software für eine christliche NGO. Mit meinen zwei Brüdern betreibe ich ausserdem ein kleines Café in Budapest. Ich weiss also, wie es ist, mit wenig Zeit und knappem Budget etwas aufzubauen.",
    aboutP3: "Neben der Tastatur bin ich vor allem Papa, und ich liebe Sport, besonders Fussball und Laufen.",
    aboutChips: ["Master in Informatik, UZH", "7+ Jahre Softwareentwicklung", "Mitgründer von Bros Cafe", "Deutsch · Englisch · Ungarisch"],
    photoPh: "Dein Foto hier",
    contactKicker: "Kontakt",
    letterTitle: "Erzähl mir, was du brauchst.",
    lName: "Dein Name",
    lContact: "E-Mail oder Telefon",
    lHelp: "Wobei kann ich helfen?",
    lPh: "z. B. mein Laptop ist langsam, ich brauche eine Website, kann KI meinem Laden helfen…",
    lSend: "Senden",
    lOr: "oder schreib an",
    lThanks: "Danke ♥ bis bald",
    cat_work: "Bei der Arbeit",
    cat_others: "Für andere",
    cat_fun: "Eigene Projekte",
    searchPh: "Suchen: Website, KI, App, Spiel…",
    noResults: "Nichts gefunden. Versuch ein anderes Wort.",
    cat_photo: "Fotografie",
    replyNote: "Ich antworte innert 24 Stunden, meistens viel schneller.",
    altLabel: "Lieber chatten?",
    waBtn: "Schreib mir auf WhatsApp",
    country: "Schweiz",
    fNav: "Entdecken",
    fElse: "Anderswo",
    lgPrivacy: "Datenschutz",
    lgImprint: "Impressum",
    navSvc: 'Angebot', navWork: 'Arbeiten', navAbout: 'Über mich', navCta: 'Kontakt',
  },
  hu: {
    headline: 'A te informatikusod.',
    sub: 'Ügynökségi minőség, a pénztárcádhoz igazítva. IT-segítség, weboldalak és appok, plusz fotó és videó.',
    btn1: 'Mondd el, mire van szükséged', btn2: 'Miben segítek',
    heroNote: "Először elvégzem a munkát. Utána fizetsz, csak ha elégedett vagy, és csak annyit, amennyit tudsz.",
    payKicker: "Így működik",
    payTitle: "Annyit fizetsz, amennyi belefér.",
    s1t: "Csak kérdezz.",
    s1b: "Mondd el, mire van szükséged. A kérdezés ingyenes, és nincs buta kérdés.",
    s2t: "Elvégzem a munkát.",
    s2b: "A kész eredményt még azelőtt látod, hogy bármit fizetnél.",
    s3t: "Te döntesz.",
    s3b: "Ha elégedett vagy, annyit fizetsz, amennyit megér neked, és amennyi a keretedbe belefér. Ha szűkös a pénz, az sem baj.",
    payNote: "Egyetlen kivétel: a külső költségek, például domain, tárhely vagy eszközök. Ezeket önköltségen adom tovább, és mindig előre egyeztetjük.",
    payBody: "Sok kis cég, gyülekezet és induló vállalkozó nem engedheti meg magának az ügynökségi árakat. Pont nekik segítek szívesen, azokkal a képességekkel és tapasztalattal, amiket Istentől kaptam.",
    contactLead: "A kérdezés ingyenes. Egy mondat elég az induláshoz.",
    svcKicker: "Egy fény",
    svcTitle: "Három terület, amiben segítek.",
    badgeCore: "Fő terület",
    badgeAlso: "Emellett",
    asksLabel: "Ilyeneket kérdeznek tőlem",
    quotes: ["„", "”"],
    cards: [{"kicker": "Weboldalak és appok", "head": "Neked készül.", "line": "Weboldal, app vagy egy kis eszköz, ami időt spórol neked. Megtervezem és elkészítem, a tárhelyet és a domaint pedig én intézem, hogy neked ne kelljen.", "items": ["Weboldaltervezés és -fejlesztés", "Mobil- és webes appok", "Egyedi eszközök és automatizálás", "Tárhely, domain és e-mail", "Frissítések és karbantartás"], "asks": ["Szeretnék egy weboldalt a fazekasműhelyemnek.", "Meg tudnánk oldani, hogy ne Excelben csináljuk?"]}, {"kicker": "IT-támogatás és tanácsadás", "head": "A te informatikusod.", "line": "Őszinte tanács és kézzelfogható segítség mindenben, ami digitális, érthető nyelven.", "items": ["MI-tanácsadás és beállítás", "Eszközök kiválasztása és beszerzése", "Telepítés és beállítás", "Wi-Fi, mentés és biztonság", "Hibaelhárítás és távsegítség"], "asks": ["Milyen laptopot vegyek?", "Segíthet a mesterséges intelligencia a hírlevelünkben?"]}, {"kicker": "Fotó és videó", "head": "Történetek, amik megmaradnak.", "line": "Események, portrék és rövid filmek, gondosan felvéve és megvágva.", "items": ["Események és gyülekezeti alkalmak", "Portrék és csapatfotók", "Sport- és szezonösszefoglalók", "Rövid promóciós videók"], "asks": ["Le tudnád filmezni a gyülekezeti hétvégénket?", "Fotók kellenének a weboldalunkra."]}],
    workKicker: "Válogatott munkák",
    workTitle: "Amiket készítettem.",
    workSub: "Görgess oldalra a sorokban, keress, vagy koppints egy képre a történetért.",
    soon: "Hamarosan",
    stFor: "Kinek",
    stNeed: "Mire volt szükség",
    stDid: "Mit csináltam",
    stVisit: "Megnézem",
    aboutKicker: "Rólam",
    aboutTitle: "Szia, Dániel vagyok.",
    aboutP1: "Mindent, amit tudok, ajándékba kaptam. A Grace Labs az én módom arra, hogy továbbadjam: jó IT, weboldalak és média azoknak, akik nem engedhetik meg maguknak az ügynökségi árakat.",
    aboutP2: "Szoftverfejlesztő vagyok, informatikus mesterdiplomával a Zürichi Egyetemről és több mint 7 év tapasztalattal. Napközben egy keresztény segélyszervezetnek fejlesztek szoftvert, a két testvéremmel pedig egy kis kávézót viszünk Budapesten. Tudom tehát, milyen kevés idővel és szűkös kerettel felépíteni valamit.",
    aboutP3: "A billentyűzeten kívül mindenekelőtt apa vagyok, és imádom a sportot, főleg a focit és a futást.",
    aboutChips: ["Informatikus MSc, UZH", "7+ év szoftverfejlesztés", "A Bros Cafe társalapítója", "magyar · német · angol"],
    photoPh: "Ide jön a fotód",
    contactKicker: "Kapcsolat",
    letterTitle: "Mondd el, mire van szükséged.",
    lName: "A neved",
    lContact: "E-mail vagy telefon",
    lHelp: "Miben segíthetek?",
    lPh: "pl. lassú a laptopom, kellene egy weboldal, segíthet a MI a boltomnak…",
    lSend: "Küldés",
    lOr: "vagy írj ide:",
    lThanks: "Köszönöm ♥ hamarosan jelentkezem",
    cat_work: "Munkában",
    cat_others: "Másoknak",
    cat_fun: "Saját projektek",
    searchPh: "Keresés: weboldal, MI, app, játék…",
    noResults: "Nincs találat. Próbálj egy másik szót.",
    cat_photo: "Fotózás",
    replyNote: "24 órán belül válaszolok, általában sokkal hamarabb.",
    altLabel: "Inkább chatelnél?",
    waBtn: "Írj nekem WhatsAppon",
    country: "Svájc",
    fNav: "Oldalak",
    fElse: "Máshol",
    lgPrivacy: "Adatvédelem",
    lgImprint: "Impresszum",
    navSvc: 'Szolgáltatások', navWork: 'Munkáim', navAbout: 'Rólam', navCta: 'Kapcsolat',
  },
};

const LEGAL = {
  en: {
    privacy: () => `<h2>Privacy notice</h2><p class="upd">Last updated: November 2026</p>
<h3>Who is responsible</h3><p>Daniel Gergely, Grace Labs, ${D.address}, Switzerland, hello@gracelabs.dev.</p>
<h3>In short</h3><p>No cookies, no tracking, no analytics. I only use the details you send me to answer you and to help with your request.</p>
<h3>When you contact me</h3><p>If you use the contact form, email or WhatsApp, I receive your name, contact details and message. I use them only to reply and to work on your request. I keep them as long as we're in contact and delete them afterwards, unless the law requires me to keep them (for example invoices, which must be kept for 10 years).</p>
<h3>Services I use</h3><ul><li><b>Cloudflare</b> hosts this website and delivers the contact form. Like any web server, it briefly processes technical data such as your IP address to deliver the page and protect it from attacks.</li><li><b>Apple iCloud</b> hosts my email (hello@gracelabs.dev).</li><li><b>Resend</b> forwards contact form messages to my inbox, and <b>Telegram</b> tells me on my phone that a new message has arrived, without its content.</li><li>If you contact me on <b>WhatsApp</b>, WhatsApp's own privacy policy applies.</li></ul><p>Some of these providers are based in the USA. They are certified under the Swiss–US and EU–US Data Privacy Framework or use comparable safeguards.</p>
<h3>Stored in your browser</h3><p>The site remembers your language choice in your own browser. It is never sent to me.</p>
<h3>Your rights</h3><p>You can ask at any time which data I have about you, and have it corrected or deleted. Just write to hello@gracelabs.dev. If you think I'm handling your data wrongly, you can contact the Swiss Federal Data Protection and Information Commissioner (FDPIC) or the data protection authority in your country.</p>`,
    imprint: () => `<h2>Imprint</h2><p><b>Grace Labs</b><br>Daniel Gergely<br>${D.address}<br>Switzerland</p><p>Email: hello@gracelabs.dev</p>
<p>Grace Labs is run by Daniel Gergely as a sole proprietorship. It is not entered in the commercial register and not registered for VAT.</p>
<h3>Liability</h3><p>I take care to keep the content of this site accurate, but cannot guarantee that it is complete or up to date. I am not responsible for the content of external websites linked from here.</p>
<h3>Copyright</h3><p>Texts, photos and design on this site belong to Daniel Gergely unless stated otherwise. Please ask before reusing them.</p>`,
  },
  de: {
    privacy: () => `<h2>Datenschutzerklärung</h2><p class="upd">Stand: November 2026</p>
<h3>Verantwortlich</h3><p>Daniel Gergely, Grace Labs, ${D.address}, Schweiz, hello@gracelabs.dev.</p>
<h3>Kurz gesagt</h3><p>Keine Cookies, kein Tracking, keine Statistik. Ich verwende deine Angaben nur, um dir zu antworten und bei deinem Anliegen zu helfen.</p>
<h3>Wenn du mich kontaktierst</h3><p>Wenn du das Kontaktformular, E-Mail oder WhatsApp nutzt, erhalte ich deinen Namen, deine Kontaktangaben und deine Nachricht. Ich verwende sie nur, um dir zu antworten und an deinem Anliegen zu arbeiten. Ich bewahre sie auf, solange wir in Kontakt sind, und lösche sie danach, ausser das Gesetz verlangt eine Aufbewahrung (zum Beispiel Rechnungen, die 10 Jahre aufbewahrt werden müssen).</p>
<h3>Dienste, die ich nutze</h3><ul><li><b>Cloudflare</b> betreibt diese Website und stellt das Kontaktformular zu. Wie jeder Webserver verarbeitet Cloudflare kurz technische Daten wie deine IP-Adresse, um die Seite auszuliefern und vor Angriffen zu schützen.</li><li><b>Apple iCloud</b> betreibt mein E-Mail-Postfach (hello@gracelabs.dev).</li><li><b>Resend</b> leitet Nachrichten aus dem Kontaktformular an mein Postfach weiter, und <b>Telegram</b> zeigt mir auf dem Handy an, dass eine neue Nachricht eingegangen ist, ohne deren Inhalt.</li><li>Wenn du mich über <b>WhatsApp</b> kontaktierst, gilt die Datenschutzerklärung von WhatsApp.</li></ul><p>Einige dieser Anbieter haben ihren Sitz in den USA. Sie sind unter dem Swiss-U.S. bzw. EU-U.S. Data Privacy Framework zertifiziert oder verwenden vergleichbare Garantien.</p>
<h3>In deinem Browser gespeichert</h3><p>Die Website merkt sich deine Sprachwahl in deinem eigenen Browser. Diese Angabe wird nie an mich übermittelt.</p>
<h3>Deine Rechte</h3><p>Du kannst jederzeit Auskunft verlangen, welche Daten ich über dich habe, und sie berichtigen oder löschen lassen. Schreib einfach an hello@gracelabs.dev. Wenn du findest, dass ich deine Daten falsch bearbeite, kannst du dich an den Eidgenössischen Datenschutz- und Öffentlichkeitsbeauftragten (EDÖB) oder an die Datenschutzbehörde in deinem Land wenden.</p>`,
    imprint: () => `<h2>Impressum</h2><p><b>Grace Labs</b><br>Daniel Gergely<br>${D.address}<br>Schweiz</p><p>E-Mail: hello@gracelabs.dev</p>
<p>Grace Labs wird von Daniel Gergely als Einzelunternehmen geführt. Es ist nicht im Handelsregister eingetragen und nicht mehrwertsteuerpflichtig.</p>
<h3>Haftung</h3><p>Ich achte darauf, dass die Inhalte dieser Website korrekt sind, kann aber keine Gewähr für Vollständigkeit und Aktualität übernehmen. Für die Inhalte verlinkter externer Websites bin ich nicht verantwortlich.</p>
<h3>Urheberrecht</h3><p>Texte, Fotos und Gestaltung dieser Website gehören Daniel Gergely, sofern nicht anders angegeben. Bitte frag nach, bevor du sie weiterverwendest.</p>`,
  },
  hu: {
    privacy: () => `<h2>Adatvédelmi tájékoztató</h2><p class="upd">Utolsó frissítés: 2026. november</p>
<h3>Ki felel az adatokért</h3><p>Gergely Dániel, Grace Labs, ${D.address}, Svájc, hello@gracelabs.dev.</p>
<h3>Röviden</h3><p>Nincs süti, nincs követés, nincs statisztika. Az adataidat csak arra használom, hogy válaszoljak neked és segítsek a kérésedben.</p>
<h3>Ha felveszed velem a kapcsolatot</h3><p>Ha a kapcsolatfelvételi űrlapot, e-mailt vagy WhatsAppot használod, megkapom a nevedet, az elérhetőségedet és az üzenetedet. Ezeket csak arra használom, hogy válaszoljak és foglalkozzam a kéréseddel. Addig őrzöm meg őket, amíg kapcsolatban vagyunk, utána törlöm, kivéve, ha a törvény megőrzést ír elő (például a számlákat 10 évig meg kell őrizni).</p>
<h3>Szolgáltatások, amelyeket használok</h3><ul><li>A <b>Cloudflare</b> üzemelteti ezt a weboldalt, és továbbítja a kapcsolatfelvételi űrlapot. Mint minden webszerver, rövid ideig technikai adatokat (például az IP-címedet) kezel, hogy megjelenítse az oldalt és megvédje a támadásoktól.</li><li>Az <b>Apple iCloud</b> kezeli az e-mail-fiókomat (hello@gracelabs.dev).</li><li>A <b>Resend</b> továbbítja az űrlapüzeneteket a postafiókomba, a <b>Telegram</b> pedig jelzi a telefonomon, hogy új üzenet érkezett, a tartalma nélkül.</li><li>Ha <b>WhatsAppon</b> keresel, a WhatsApp saját adatvédelmi szabályai érvényesek.</li></ul><p>Néhány szolgáltató az Egyesült Államokban működik. Ezek a svájci–amerikai, illetve az EU–amerikai adatvédelmi keretrendszer (Data Privacy Framework) szerint tanúsítottak, vagy ezzel egyenértékű garanciákat alkalmaznak.</p>
<h3>A böngésződben tárolva</h3><p>Az oldal a böngésződben megjegyzi, melyik nyelvet választottad. Ezt az adatot soha nem kapom meg.</p>
<h3>A jogaid</h3><p>Bármikor megkérdezheted, milyen adatokat tárolok rólad, és kérheted azok helyesbítését vagy törlését. Elég, ha írsz a hello@gracelabs.dev címre. Ha úgy gondolod, hogy helytelenül kezelem az adataidat, fordulhatsz a svájci szövetségi adatvédelmi biztoshoz (EDÖB) vagy a saját országod adatvédelmi hatóságához (Magyarországon a NAIH-hoz).</p>`,
    imprint: () => `<h2>Impresszum</h2><p><b>Grace Labs</b><br>Gergely Dániel<br>${D.address}<br>Svájc</p><p>E-mail: hello@gracelabs.dev</p>
<p>A Grace Labs-et Gergely Dániel egyéni vállalkozóként működteti. A vállalkozás nincs bejegyezve a svájci cégjegyzékbe, és nem áfaköteles.</p>
<h3>Felelősség</h3><p>Igyekszem, hogy az oldal tartalma pontos legyen, de nem vállalok felelősséget a teljességéért és naprakészségéért. A hivatkozott külső weboldalak tartalmáért nem vagyok felelős.</p>
<h3>Szerzői jog</h3><p>Az oldalon található szövegek, fotók és dizájn Gergely Dániel tulajdonát képezik, hacsak másként nem jelöltük. Kérlek, kérdezz meg, mielőtt felhasználnád őket.</p>`,
  },
};

const WHITE = '255,240,220';
const hex = h => [1, 3, 5].map(i => parseInt(h.slice(i, i + 2), 16)).join(',');
const HEAD_AT = 0.85; // beam front sits at 85% of the viewport height, so things light up as they come into view

const CSS = `
html,body{margin:0;overflow-x:hidden;background:#08080b;color:#f2efe9;font-family:Inter,system-ui,sans-serif;-webkit-font-smoothing:antialiased;-webkit-text-size-adjust:100%}
.d-beam{position:fixed;inset:0;width:100%;height:100%;z-index:0;pointer-events:none}
.d-nav{position:fixed;top:0;left:0;right:0;z-index:10;display:flex;justify-content:space-between;align-items:center;padding:18px 5vw;font-size:15px;background:rgba(8,8,11,.72);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);border-bottom:1px solid rgba(255,255,255,.05)}
.d-nav b{font:500 20px Fraunces,serif;white-space:nowrap}
.d-nav>div{display:flex;align-items:center;white-space:nowrap}
.d-nav a{color:inherit;opacity:.75;margin-left:26px;text-decoration:none}.d-nav a:hover{opacity:1}
.d-nav .cta{opacity:1;padding:9px 16px;border-radius:99px;border:1px solid rgba(255,208,107,.5);color:#ffd06b}
main{position:relative;z-index:1}
section{position:relative}
[data-lit]{opacity:.42;transition:opacity .9s ease}
[data-lit].lit{opacity:1}
.k{font-size:13px;font-weight:600;letter-spacing:.2em;text-transform:uppercase;color:#ffd9a8;margin-bottom:14px}
h1,h2,h3{font-family:Fraunces,serif;font-weight:300;letter-spacing:-.02em;margin:0}
p{margin:0}
/* hero */
.d-hero{min-height:100svh;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:90px 6vw 60px;box-sizing:border-box}
.d-source{width:14px;height:14px;border-radius:50%;background:#fff;margin-top:9vh;box-shadow:0 0 20px 6px #fff6e0,0 0 80px 30px rgba(255,214,160,.35),0 0 200px 80px rgba(255,190,120,.12);animation:dp 3s ease-in-out infinite}
@keyframes dp{50%{transform:scale(1.25)}}
.d-hero h1{font-size:clamp(56px,9vw,128px);line-height:.9}
.d-hero .by{font-size:13px;font-weight:600;letter-spacing:.24em;text-transform:uppercase;color:#bdb6ab;margin:16px 0 34px}
.d-hero .headline{font:italic 300 clamp(34px,4.6vw,58px)/1.05 Fraunces,serif;color:#ffd9a8;margin:0 0 18px;letter-spacing:-.01em}
.d-hero p{max-width:600px;color:#e2ddd5;font-size:clamp(18px,1.6vw,21px);line-height:1.6}
.d-lang{display:inline-flex;gap:2px;margin-left:22px;padding:3px;border-radius:99px;background:rgba(255,255,255,.06);vertical-align:middle}
.d-lang button{border:0;background:none;color:#bdb6ab;font:600 12px Inter,sans-serif;letter-spacing:.06em;padding:6px 10px;border-radius:99px;cursor:pointer}
.d-lang button.on{background:#f2efe9;color:#111}
.d-btns{display:flex;gap:12px;margin-top:30px;flex-wrap:wrap;justify-content:center}
.btn{display:inline-block;padding:15px 26px;border-radius:99px;font-weight:600;font-size:16px;text-decoration:none;cursor:pointer;border:0}
.btn.primary{background:#ffd06b;color:#1a1208}
.btn.ghost{border:1px solid rgba(255,255,255,.3);color:#f2efe9;background:rgba(255,255,255,.04)}
/* prism */
.d-prism-sec{padding:16vh 6vw 0;display:flex;flex-direction:column;align-items:center;text-align:center}
.d-prism-sec h2{font-size:clamp(34px,4.4vw,56px);line-height:1.05}
.d-prism{width:200px;height:180px;margin-top:40px}
.d-prism svg{width:100%;height:100%;overflow:visible}
.d-prism .fill{opacity:0;transition:opacity 1.2s}.d-prism.lit .fill{opacity:1}
/* services */
.d-services{display:grid;grid-template-columns:1fr 1fr;gap:4vw 5vw;padding:20vh 6vw 0;align-items:start;max-width:1200px;margin:0 auto}
.d-card.media{grid-column:1/-1;justify-self:center;width:min(620px,100%);margin-top:4vh}
@property --s{syntax:'<angle>';inherits:false;initial-value:0deg}
.d-card{position:relative;border-radius:24px;padding:34px 30px;background:rgba(13,13,17,.88);border:1px solid rgba(255,255,255,.06);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);transition:box-shadow 1.4s .3s}
.d-card>*{opacity:.16;transition:opacity .9s ease var(--d,0ms)}
.d-card.lit>*{opacity:1}
.d-card:before{content:'';position:absolute;inset:-1px;border-radius:inherit;padding:1.5px;pointer-events:none;
 background:conic-gradient(rgb(var(--c)) 0deg var(--s),transparent var(--s) calc(360deg - var(--s)),rgb(var(--c)) calc(360deg - var(--s)));
 -webkit-mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);-webkit-mask-composite:xor;mask-composite:exclude;
 opacity:0;transition:--s 1.4s cubic-bezier(.45,0,.2,1),opacity .2s}
.d-card.lit:before{--s:180deg;opacity:1}
.d-card.lit{box-shadow:0 0 70px -12px rgba(var(--c),.45)}
.d-card .k{color:rgb(var(--c))}
.d-card .asks{margin-top:4px;padding:16px 18px;border-radius:14px;background:rgba(255,255,255,.035);display:flex;flex-direction:column;gap:6px}
.d-card .asks small{font-size:12px;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:#9f988e;margin-bottom:2px}
.d-card .asks span{font:italic 300 19px/1.35 Fraunces,serif;color:#e8e3da}
.d-card .badge{position:absolute;top:-13px;left:30px;background:rgb(var(--c));color:#1a1208;font-size:12px;font-weight:700;letter-spacing:.08em;padding:6px 12px;border-radius:99px;text-transform:uppercase}
.d-card h3{font-size:34px;line-height:1.05;margin-bottom:8px;transition:color 1s}
.d-card.core h3{font-size:40px}
.d-card.lit h3{color:rgb(var(--c))}
.d-card .head{font:italic 300 21px Fraunces,serif;color:#e8e3da;margin-bottom:14px}
.d-card p{color:#d3cec6;font-size:17px;line-height:1.6;margin-bottom:18px}
.d-card ul{list-style:none;padding:0;margin:22px 0 0;display:flex;flex-wrap:wrap;gap:8px}
.d-card li{padding:7px 13px;border-radius:99px;border:1px solid rgba(var(--c),.35);background:rgba(var(--c),.08);font-size:14px;color:#f2efe9}
/* lens */
.d-lens-sec{height:46vh;display:flex;justify-content:center;align-items:center}
.d-lens{width:150px;height:46px;border-radius:50%;border:1px solid rgba(255,255,255,.25);background:radial-gradient(ellipse,rgba(255,255,255,.12),transparent 70%);transition:box-shadow 1s}
.d-lens.lit{box-shadow:0 0 60px 10px rgba(255,236,210,.35)}
/* text sections */
.d-text{padding:10vh 7vw 10vh 16vw;max-width:820px}
.d-text h2{font-size:clamp(46px,6vw,84px);line-height:1;margin-bottom:24px}
.d-text p{font-size:clamp(18px,1.7vw,21px);line-height:1.65;color:#e2ddd5}
.d-steps{list-style:none;padding:0;margin:8px 0 30px;display:grid;gap:14px}
.d-steps li{display:grid;grid-template-columns:52px 1fr;gap:16px;align-items:start;padding:20px 22px;border-radius:18px;background:rgba(22,22,28,.72);border:1px solid rgba(255,255,255,.08)}
.d-steps .n{width:40px;height:40px;border-radius:50%;display:grid;place-items:center;font:500 20px Fraunces,serif;color:#1a1208;background:#ffd06b}
.d-steps b{display:block;font:400 26px/1.15 Fraunces,serif;margin:4px 0 6px}
.d-steps p{font-size:17px!important;color:#d3cec6!important}
.d-text .note{font-size:15px!important;color:#b8b2a8!important;border-left:2px solid rgba(255,208,107,.5);padding-left:14px;margin-bottom:22px}
.d-hero .promise{margin-top:22px;font-size:15px;color:#cfc8bd;max-width:460px}
/* work polaroids */
.d-work{padding:10vh 5vw 6vh 16vw}
.d-work h2{font-size:clamp(40px,5vw,70px);line-height:1;margin-bottom:10px}
.d-work .sub{color:#cfcac2;font-size:18px}
.d-work{padding-right:0!important}
.d-search{width:min(440px,calc(100% - 6vw));box-sizing:border-box;margin:26px 0 8px;padding:14px 20px 14px 46px;border-radius:99px;border:1px solid rgba(255,255,255,.18);
 background:rgba(255,255,255,.05) url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='18' height='18' fill='none' stroke='%23bdb6ab' stroke-width='2'><circle cx='8' cy='8' r='6'/><path d='m13 13 4 4'/></svg>") 18px 50%/18px no-repeat;color:inherit;font:inherit;font-size:16px;outline:none}
.d-search:focus{border-color:rgba(255,208,107,.6)}
.d-row{margin-top:26px}
.d-row-h{display:flex;align-items:center;gap:10px;font:400 26px Fraunces,serif}
.d-row-h:before{content:'';width:9px;height:9px;border-radius:50%;background:rgb(var(--c));box-shadow:0 0 12px 2px rgba(var(--c),.6)}
.d-row-h .n{font:600 12px Inter,sans-serif;letter-spacing:.1em;color:#9f988e}
.d-strip{display:flex;gap:20px;overflow-x:auto;scroll-snap-type:x proximity;padding:18px 6vw 34px 4px;scrollbar-width:none;
 -webkit-mask-image:linear-gradient(90deg,#000 calc(100% - 70px),transparent);mask-image:linear-gradient(90deg,#000 calc(100% - 70px),transparent)}
.d-strip::-webkit-scrollbar{display:none}
.d-pol{position:relative;flex:0 0 270px;scroll-snap-align:start;appearance:none;font:inherit;text-align:left;cursor:pointer;padding:0;overflow:hidden;
 border-radius:20px;background:rgba(18,18,24,.9);border:1px solid rgba(255,255,255,.08);color:#f2efe9;
 opacity:0;transform:translateX(60px);transition:transform .8s cubic-bezier(.2,.8,.2,1) calc(var(--i) * 90ms),opacity .7s calc(var(--i) * 90ms),border-color .35s,box-shadow .35s}
.d-row.lit .d-pol{opacity:1;transform:none}
.d-row.lit .d-pol:hover,.d-row.lit .d-pol:focus-visible{transform:translateY(-6px);transition-delay:0s;transition-duration:.35s;outline:none;border-color:rgba(var(--c),.7);box-shadow:0 0 60px -12px rgba(var(--c),.55)}
.d-pol[hidden],.d-row[hidden]{display:none}
.d-pol .ph{height:168px;background:var(--bg) center top/cover;position:relative;transition:transform .6s}
.d-pol:hover .ph{transform:scale(1.04)}
.d-pol .ph:after{content:'';position:absolute;inset:40% 0 0;background:linear-gradient(transparent,rgba(18,18,24,.95))}
.d-pol .soon{position:absolute;z-index:1;top:12px;left:12px;background:rgba(8,8,11,.7);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);color:rgb(var(--c));font:600 10px Inter,sans-serif;letter-spacing:.12em;text-transform:uppercase;padding:6px 10px;border-radius:99px;border:1px solid rgba(var(--c),.4)}
.d-pol .meta{position:relative;padding:4px 20px 20px;margin-top:-26px}
.d-pol small{display:block;font-size:11px;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:rgb(var(--c));margin-bottom:6px}
.d-pol b{display:block;font:400 24px/1.15 Fraunces,serif;letter-spacing:-.01em;padding-right:34px}
.d-pol .go{position:absolute;right:16px;bottom:20px;width:28px;height:28px;border-radius:50%;display:grid;place-items:center;border:1px solid rgba(var(--c),.45);color:rgb(var(--c));font-size:16px;transition:background .3s,color .3s}
.d-pol:hover .go{background:rgb(var(--c));color:#111}
.d-none{color:#bdb6ab;margin-top:20px}
.d-story{border:1px solid rgba(var(--c),.45);padding:0;border-radius:24px;background:#131318;color:#f2efe9;width:min(560px,92vw);max-height:88vh;overflow:auto;box-shadow:0 0 90px -20px rgba(var(--c),.45),0 40px 120px rgba(0,0,0,.7)}
.d-story.iris{animation:iris .75s cubic-bezier(.65,0,.25,1)}
@keyframes iris{from{clip-path:circle(0 at var(--ox) var(--oy))}to{clip-path:circle(140% at var(--ox) var(--oy))}}
.d-story::backdrop{background:rgba(0,0,0,.66);backdrop-filter:blur(5px);-webkit-backdrop-filter:blur(5px);animation:fadein .4s}
@keyframes fadein{from{opacity:0}}
.d-ring{position:fixed;z-index:9999;width:60px;height:60px;margin:-30px 0 0 -30px;border-radius:50%;border:2px solid rgb(var(--c));pointer-events:none;
 box-shadow:0 0 30px rgba(var(--c),.6),inset 0 0 30px rgba(var(--c),.4);animation:ring .75s cubic-bezier(.4,0,.2,1) forwards}
@keyframes ring{from{transform:scale(.2);opacity:1}to{transform:scale(16);opacity:0}}
.d-story .ph{height:250px;background:var(--bg) center top/cover;position:relative}
.d-story .ph:after{content:'';position:absolute;inset:50% 0 0;background:linear-gradient(transparent,#131318)}
.d-story .k{color:rgb(var(--c))}
.d-story .in{padding:26px 28px 30px}
.d-story h3{font-size:38px;margin:4px 0 18px}
.d-story dl{margin:0;display:grid;gap:14px}
.d-story dt{font-size:12px;font-weight:600;letter-spacing:.16em;text-transform:uppercase;color:#9f988e}
.d-story dd{margin:4px 0 0;font-size:17px;line-height:1.55;color:#e2ddd5}
.d-story .x{position:absolute;top:12px;right:12px;width:38px;height:38px;border-radius:50%;border:0;background:rgba(0,0,0,.55);color:#fff;font-size:22px;cursor:pointer}
.d-story .btn{margin-top:22px}
.d-story .gal{display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin-top:20px}
.d-story .gal img{width:100%;aspect-ratio:1;object-fit:cover;border-radius:6px;cursor:zoom-in}
.d-story .gal img:first-child{grid-column:span 2;grid-row:span 2}
/* about */
.d-about{padding:12vh 7vw 10vh 16vw}
.d-about-grid{display:grid;grid-template-columns:280px 1fr;gap:5vw;align-items:center;max-width:1100px}
.d-portrait{margin:0;background:#fbfaf6;padding:12px 12px 18px;transform:rotate(-3deg);box-shadow:0 2px 3px rgba(0,0,0,.35),0 22px 50px rgba(0,0,0,.55)}
.d-portrait .ph{height:300px;display:grid;place-items:center;background:linear-gradient(160deg,#3a3430,#1d1a18);color:#bdb6ab;font-size:14px}
.d-portrait figcaption{font:700 26px Caveat,cursive;color:#2b2622;margin-top:10px}
.d-about h2{font-size:clamp(46px,6vw,84px);line-height:1;margin-bottom:22px}
.d-about p{font-size:clamp(17px,1.5vw,19px);line-height:1.65;color:#e2ddd5;margin-bottom:14px}
.d-chips{list-style:none;padding:0;margin:20px 0 0;display:flex;flex-wrap:wrap;gap:8px}
.d-about .sdg{font:700 30px Caveat,cursive;color:#ffd9a8;margin-top:22px}
.d-chips li{padding:8px 14px;border-radius:99px;border:1px solid rgba(255,208,107,.35);background:rgba(255,208,107,.07);font-size:14px}
/* contact: envelope + letter */
.d-contact{min-height:100svh;box-sizing:border-box;display:flex;flex-direction:column;align-items:center;padding:12vh 5vw 8vh;text-align:center}
.d-contact .lead{font-size:19px;color:#d9d4cc;margin-bottom:26px}
.d-env-wrap{position:relative;width:min(560px,92vw);display:flex;flex-direction:column;align-items:center}
.d-letter{position:relative;z-index:3;width:88%;box-sizing:border-box;background:#fbf8f2;color:#2a2622;border-radius:6px;padding:28px 28px 24px;text-align:left;
 box-shadow:0 20px 60px rgba(0,0,0,.45);opacity:0;transform:translateY(160px) scale(.96);pointer-events:none;
 transition:transform 1s .55s cubic-bezier(.2,.9,.25,1.1),opacity .5s .55s}
.d-env-wrap.lit .d-letter{opacity:1;transform:none;pointer-events:auto}
.d-letter h3{font:700 clamp(30px,5vw,38px)/1.1 Caveat,cursive;margin-bottom:14px}
.d-letter label{display:block;font-size:13px;font-weight:600;letter-spacing:.04em;color:#6b635b;margin:12px 0 4px}
.d-letter input,.d-letter textarea{width:100%;box-sizing:border-box;border:0;border-bottom:1.5px solid #c9c0b3;background:transparent;font:500 22px Caveat,cursive;color:#2a2622;padding:6px 2px;outline:none}
.d-letter input:focus,.d-letter textarea:focus{border-bottom-color:#a3361f}
.d-letter textarea{resize:vertical;min-height:104px;line-height:1.3}
.d-letter .row{display:flex;justify-content:space-between;align-items:center;gap:12px;margin-top:20px;flex-wrap:wrap}
.d-letter button{background:#a3361f;color:#fff;border:0;border-radius:99px;padding:14px 26px;font:600 16px Inter,sans-serif;cursor:pointer}
.d-letter .or{font-size:14px;color:#6b635b}.d-letter .or a{color:#a3361f}
.d-env{position:relative;width:100%;height:250px;margin-top:-70px;z-index:2}
.d-env .back{position:absolute;inset:0;background:#d8c09a;border-radius:8px;box-shadow:0 30px 70px rgba(0,0,0,.5)}
.d-env .front{position:absolute;inset:0;border-radius:8px;z-index:2;
 background:linear-gradient(to top right,#cdb48c 50%,transparent 50.5%) left/50.5% 100% no-repeat,linear-gradient(to top left,#c9ae85 50%,transparent 50.5%) right/50.5% 100% no-repeat}
.d-env .flap{position:absolute;left:0;right:0;top:0;height:150px;background:#c4a87e;clip-path:polygon(0 0,100% 0,50% 100%);transform-origin:top;transition:transform .6s;border-radius:8px 8px 0 0;z-index:3}
.d-env .seal{position:absolute;left:50%;top:126px;width:52px;height:52px;transform:translate(-50%,-50%);border-radius:50%;z-index:4;background:radial-gradient(circle at 40% 35%,#d4513e,#8a2014);color:#f6d7c8;font:600 16px Fraunces,serif;display:grid;place-items:center;transition:opacity .3s}
.d-env-wrap.lit .flap{transform:rotateX(180deg);z-index:1}
.d-env-wrap.lit .seal{opacity:0}
.d-contact .reply{display:inline-flex;align-items:center;gap:10px;margin:-14px 0 26px;font-size:15px;color:#cfe9d6;padding:8px 16px;border-radius:99px;background:rgba(80,200,120,.08);border:1px solid rgba(80,200,120,.25)}
.d-contact .reply .dot{width:8px;height:8px;border-radius:50%;background:#4ade80;box-shadow:0 0 10px #4ade80;animation:dp 2s ease-in-out infinite}
.d-alt{display:flex;align-items:center;gap:14px;flex-wrap:wrap;justify-content:center;margin-top:34px;font-size:16px;color:#d9d4cc}
.d-alt .wa{display:inline-flex;align-items:center;gap:10px;padding:13px 22px;border-radius:99px;border:1px solid rgba(37,211,102,.55);color:#4ade80;text-decoration:none;font-weight:600;transition:background .3s,color .3s}
.d-alt .wa:hover{background:#25d366;color:#08240f}
.d-footer{position:relative;z-index:1;border-top:1px solid rgba(255,255,255,.08);background:rgba(8,8,11,.9);padding:60px 6vw 30px;margin-top:40px}
.f-grid{display:grid;grid-template-columns:1.4fr 1fr 1fr 1fr;gap:40px;max-width:1200px;margin:0 auto}
.f-brand b{display:block;font:500 26px Fraunces,serif}
.f-brand span{font-size:12px;font-weight:600;letter-spacing:.2em;text-transform:uppercase;color:#9f988e}
.f-brand p{font:italic 300 22px Fraunces,serif;color:#ffd9a8;margin-top:16px}
.d-footer h4{font-size:12px;font-weight:600;letter-spacing:.18em;text-transform:uppercase;color:#9f988e;margin:4px 0 14px}
.f-grid a{display:block;color:#e2ddd5;text-decoration:none;font-size:15px;padding:5px 0}
.f-grid a:hover,.f-legal a:hover{color:#ffd06b}
.f-bottom{max-width:1200px;margin:48px auto 0;padding-top:22px;border-top:1px solid rgba(255,255,255,.06);display:flex;flex-wrap:wrap;gap:16px 28px;align-items:center;justify-content:space-between;font-size:14px;color:#9a948b}
.f-legal{display:flex;gap:20px}.f-legal a{color:#cfc8bd;text-decoration:none}
.d-footer .d-lang{margin-left:0}
.d-legaldlg{border:1px solid rgba(255,255,255,.12);padding:0;border-radius:22px;background:#131318;color:#e2ddd5;width:min(720px,92vw);max-height:86vh;overflow:hidden;box-shadow:0 40px 120px rgba(0,0,0,.7)}
.d-legaldlg::backdrop{background:rgba(0,0,0,.66);backdrop-filter:blur(5px);-webkit-backdrop-filter:blur(5px)}
.d-legaldlg .body{padding:40px 40px 34px;overflow:auto;max-height:86vh;box-sizing:border-box;scrollbar-color:rgba(255,255,255,.2) transparent}
.d-legaldlg h2{font-size:40px;color:#f2efe9;margin:0 0 6px}
.d-legaldlg .upd{font-size:13px;color:#9a948b;margin-bottom:10px}
.d-legaldlg h3{font:600 13px Inter,sans-serif;letter-spacing:.14em;text-transform:uppercase;color:#ffd9a8;margin:26px 0 8px}
.d-legaldlg p,.d-legaldlg li{font-size:16px;line-height:1.65;margin:0 0 10px}
.d-legaldlg ul{padding-left:20px;margin:0 0 10px}
.d-legaldlg .x{position:absolute;top:14px;right:14px;width:38px;height:38px;border-radius:50%;border:0;background:rgba(255,255,255,.08);color:#fff;font-size:22px;cursor:pointer}
@media (max-width:820px){
 .d-nav a:not(.cta){display:none}
 .d-lang{margin-left:10px}.d-lang button{padding:6px 8px}
 .d-nav .cta{padding:8px 12px;font-size:14px}
}
@media (max-width:440px){.d-nav .cta{display:none}
 .d-services{grid-template-columns:1fr;gap:12vh;padding:16vh 6vw 0}
 .d-card.media{margin-top:0}
 .d-steps li{grid-template-columns:30px 1fr;gap:12px;padding:16px 16px}
 .d-steps .n{width:30px;height:30px;font-size:16px}
 .d-steps b{font-size:22px;margin-top:0}
 .d-card{padding:28px 22px}
 .d-text,.d-work{padding-left:14vw;padding-right:6vw}
 .d-pol{flex-basis:230px}.d-pol .ph{height:140px}.d-pol b{font-size:21px}
 .d-strip{gap:16px}
 .d-about{padding-left:14vw;padding-right:6vw}
 .d-about-grid{grid-template-columns:1fr}
 .d-portrait{width:220px}.d-portrait .ph{height:230px}
 .d-letter{padding:22px 18px 18px}
 .f-grid{grid-template-columns:1fr 1fr;gap:30px}.f-brand{grid-column:1/-1}
 .d-legaldlg .body{padding:30px 22px}.d-legaldlg h2{font-size:30px}
 .d-env{height:170px;margin-top:-50px}.d-env .flap{height:100px}.d-env .seal{top:86px}
 .d-contact{padding-top:10vh}
}
`;

export function mount(root) {
  const style = document.createElement('style');
  style.textContent = CSS;
  document.head.append(style);

  const bgOf = w => (w.img ? `url(${w.img})` : w.bg);
  const CAT_C = { work: '#ffd06b', others: '#5ad1ff', photo: '#ff6fae', fun: '#b69cff' };
  const pol = (w, i, n) => `<button class="d-pol" data-i="${i}" style="--i:${n};--bg:${bgOf(w)}">
    ${w.soon ? '<span class="soon" data-t="soon"></span>' : ''}<div class="ph"></div>
    <div class="meta"><small data-kind="${i}"></small><b>${w.title}</b><span class="go">↗</span></div></button>`;
  const rows = CATS.map(c => {
    const items = WORK.map((w, i) => [w, i]).filter(([w]) => w.cat === c);
    return `<div class="d-row" data-cat="${c}" data-lit-only data-off="60" style="--c:${hex(CAT_C[c])}"><div class="d-row-h"><span data-t="cat_${c}"></span><span class="n"></span></div>
      <div class="d-strip">${items.map(([w, i], n) => pol(w, i, n)).join('')}</div></div>`;
  }).join('');

  root.insertAdjacentHTML('afterbegin', `
  <canvas class="d-beam"></canvas>
  <nav class="d-nav"><b>${D.brand}</b><div><a href="#svc" data-t="navSvc">Services</a><a href="#work" data-t="navWork">Work</a><a href="#about" data-t="navAbout">About</a><a class="cta" href="#contact" data-t="navCta">Get in touch</a><span class="d-lang">${['en', 'de', 'hu'].map(l => `<button data-lang="${l}">${l.toUpperCase()}</button>`).join('')}</span></div></nav>
  <main>
    <section class="d-hero">
      <h1>${D.brand}</h1>
      <div class="by">${D.by}</div>
      <h2 class="headline" data-t="headline"></h2>
      <p data-t="sub"></p>
      <div class="d-btns"><a class="btn primary" href="#contact" data-t="btn1"></a><a class="btn ghost" href="#svc" data-t="btn2"></a></div>
      <p class="promise" data-t="heroNote"></p>
      <div class="d-source"></div>
    </section>
    <section class="d-prism-sec">
      <div class="k" data-lit data-t="svcKicker"></div>
      <h2 data-lit data-t="svcTitle"></h2>
      <div class="d-prism" data-lit-only>
        <svg viewBox="0 0 220 200"><defs>
          <linearGradient id="dpg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#5ad1ff" stop-opacity=".35"/><stop offset=".5" stop-color="#ffd06b" stop-opacity=".3"/><stop offset="1" stop-color="#ff6fae" stop-opacity=".35"/></linearGradient>
          <linearGradient id="dps" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".85"/><stop offset="1" stop-color="#fff" stop-opacity=".2"/></linearGradient></defs>
          <polygon points="110,6 214,194 6,194" fill="rgba(255,255,255,.03)" stroke="url(#dps)" stroke-width="1.5"/>
          <polygon class="fill" points="110,6 214,194 6,194" fill="url(#dpg)"/>
        </svg>
      </div>
    </section>
    <section class="d-services" id="svc">
      ${D.services.map(s => `<article class="d-card ${s.core ? 'core' : 'media'}" data-lit-only data-color="${s.color}" data-w="${s.core ? 1.15 : 0.75}" style="--c:${hex(s.color)}"></article>`).join('')}
    </section>
    <section class="d-lens-sec"><div class="d-lens" data-lit-only></div></section>
    <section class="d-text" id="values">
      <div class="k" data-lit data-t="payKicker"></div>
      <h2 data-lit data-t="payTitle"></h2>
      <ol class="d-steps">${[1, 2, 3].map(n => `<li data-lit><span class="n">${n}</span><div><b data-t="s${n}t"></b><p data-t="s${n}b"></p></div></li>`).join('')}</ol>
      <p class="note" data-lit data-t="payNote"></p>
      <p data-lit data-t="payBody"></p>
    </section>
    <section class="d-work" id="work">
      <div class="k" data-lit data-t="workKicker"></div>
      <h2 data-lit data-t="workTitle"></h2>
      <p class="sub" data-lit data-t="workSub"></p>
      <input class="d-search" type="search" data-tp="searchPh" data-lit aria-label="Search">
      ${rows}
      <p class="d-none" data-t="noResults" hidden></p>
      <dialog class="d-story"><button class="x" aria-label="Close">×</button><div class="body"></div></dialog>
    </section>
    <section class="d-about" id="about">
      <div class="d-about-grid">
        <figure class="d-portrait" data-lit><div class="ph" data-t="photoPh"></div><figcaption>Daniel</figcaption></figure>
        <div>
          <div class="k" data-lit data-t="aboutKicker"></div>
          <h2 data-lit data-t="aboutTitle"></h2>
          <p data-lit data-t="aboutP1"></p>
          <p data-lit data-t="aboutP2"></p>
          <p data-lit data-t="aboutP3"></p>
          <ul class="d-chips" data-lit></ul>
          <p class="sdg" data-lit>Soli Deo Gloria.</p>
        </div>
      </div>
    </section>
    <section class="d-contact" id="contact">
      <div class="k" data-lit data-t="contactKicker"></div>
      <p class="lead" data-lit data-t="contactLead"></p>
      <p class="reply" data-lit><span class="dot"></span><span data-t="replyNote"></span></p>
      <div class="d-env-wrap" data-lit-only data-anchor=".d-env" data-off="80">
        <form class="d-letter">
          <h3 data-t="letterTitle"></h3>
          <label data-t="lName"></label><input autocomplete="name">
          <label data-t="lContact"></label><input autocomplete="email">
          <label data-t="lHelp"></label><textarea rows="3" data-tp="lPh"></textarea>
          <div class="row"><button data-t="lSend"></button><span class="or"><span data-t="lOr"></span> <a href="mailto:${D.email}">${D.email}</a></span></div>
        </form>
        <div class="d-env"><div class="back"></div><div class="front"></div><div class="flap"></div><div class="seal">GL</div></div>
      </div>
      <div class="d-alt" data-lit><span data-t="altLabel"></span>
        <a class="wa" href="${D.whatsapp}" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.8 11.9 11.9 0 0 0 4.6 4c1.7.7 2.4.8 3.2.7.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3Z"/></svg><span data-t="waBtn"></span></a>
      </div>
    </section>
  </main>
  <footer class="d-footer">
    <div class="f-grid">
      <div class="f-brand"><b>${D.brand}</b><span>${D.by}</span><p data-t="headline"></p></div>
      <div><h4 data-t="fNav"></h4><a href="#svc" data-t="navSvc"></a><a href="#work" data-t="navWork"></a><a href="#about" data-t="navAbout"></a><a href="#contact" data-t="contactKicker"></a></div>
      <div><h4 data-t="contactKicker"></h4><a href="mailto:hello@gracelabs.dev">hello@gracelabs.dev</a><a href="${D.whatsapp}" target="_blank" rel="noopener">WhatsApp</a></div>
      <div><h4 data-t="fElse"></h4><a href="${D.linkedin}" target="_blank" rel="noopener">LinkedIn ↗</a><a href="${D.github}" target="_blank" rel="noopener">GitHub ↗</a></div>
    </div>
    <div class="f-bottom"><span>© 2026 ${D.brand} · Daniel Gergely · <span data-t="country"></span></span>
      <span class="f-legal"><a href="#" data-legal="privacy" data-t="lgPrivacy"></a><a href="#" data-legal="imprint" data-t="lgImprint"></a></span>
      <span class="d-lang">${['en', 'de', 'hu'].map(l => `<button data-lang="${l}">${l.toUpperCase()}</button>`).join('')}</span></div>
    <dialog class="d-legaldlg"><button class="x" aria-label="Close">×</button><div class="body"></div></dialog>
  </footer>`);

  // EN / DE / HU. Work stories are English-only until the facts are confirmed.
  let curLang = 'en', filterWork = null;
  const setLang = l => {
    const t = I18N[l] || I18N.en;
    root.querySelectorAll('.d-card').forEach((el, i) => {
      const c = t.cards[i], [o, e] = t.quotes;
      const parts = [
        `<span class="badge">${el.classList.contains('core') ? t.badgeCore : t.badgeAlso}</span>`,
        `<div class="k">${c.kicker}</div>`, `<h3>${c.head}</h3>`, `<p>${c.line}</p>`,
        `<div class="asks"><small>${t.asksLabel}</small>${c.asks.map(a => `<span>${o}${a}${e}</span>`).join('')}</div>`,
        `<ul>${c.items.map(x => `<li>${x}</li>`).join('')}</ul>`,
      ];
      el.innerHTML = parts.map((h, n) => h.replace(/^<(\w+)/, `<$1 style="--d:${n * 110}ms"`)).join('');
    });
    root.querySelectorAll('[data-t]').forEach(el => { el.textContent = t[el.dataset.t]; });
    root.querySelectorAll('[data-tp]').forEach(el => { el.placeholder = t[el.dataset.tp]; });
    root.querySelectorAll('[data-kind]').forEach(el => { el.textContent = WORK[+el.dataset.kind].kind[l]; });
    root.querySelector('.d-chips').innerHTML = t.aboutChips.map(c => `<li>${c}</li>`).join('');
    curLang = l;
    if (filterWork) filterWork();
    root.querySelectorAll('[data-lang]').forEach(b => b.classList.toggle('on', b.dataset.lang === l));
    document.documentElement.lang = l;
    try { localStorage.setItem('gl-lang', l); } catch {}
  };
  root.querySelectorAll('[data-lang]').forEach(b => (b.onclick = () => { setLang(b.dataset.lang); build(); }));
  let saved = 'en';
  try { saved = localStorage.getItem('gl-lang') || (navigator.language || 'en').slice(0, 2); } catch {}
  setLang(I18N[saved] ? saved : 'en');

  const q = s => root.querySelector(s);
  const cv = q('.d-beam'), g = cv.getContext('2d');
  const litEls = [...root.querySelectorAll('[data-lit],[data-lit-only]')];
  let dpr = 1, segs = [], litAt = [], head = 0, lastW = 0;
  // layout-viewport height: does not jump when the mobile browser bar shows or hides
  const vh = () => document.documentElement.clientHeight;

  const pt = (el, fx = 0.5, fy = 0.5) => {
    const r = el.getBoundingClientRect();
    return { x: r.left + r.width * fx, y: r.top + scrollY + r.height * fy };
  };

  function build() {
    dpr = Math.min(devicePixelRatio, 2);
    lastW = innerWidth;
    cv.width = innerWidth * dpr; cv.height = Math.max(innerHeight, vh()) * dpr;
    const mobile = innerWidth <= 820;
    const src = pt(q('.d-source')), prism = q('.d-prism');
    const pIn = pt(prism, 0.5, 0.1), pOut = pt(prism, 0.5, 0.75);
    const lens = pt(q('.d-lens'));
    const gx = innerWidth * (mobile ? 0.06 : 0.09);
    const turnY = pt(q('#values'), 0, 0).y + innerHeight * 0.06;
    const downY = pt(q('#about'), 0, 1).y;
    const seal = pt(q('.d-env .seal'));
    segs = [{ a: src, b: pIn, c: WHITE, w: 1 }, { a: pIn, b: pOut, c: WHITE, w: 1.3 }];
    const cards = [...root.querySelectorAll('.d-card')];
    const mediaBottom = pt(q('.d-card.media'), 0.5, 1).y;
    cards.forEach((el, i) => {
      const c = hex(el.dataset.color), w = +el.dataset.w;
      const off = mobile ? (i - 1) * 16 : 0;
      const top = pt(el, 0.5, 0), bot = pt(el, 0.5, 1);
      top.x += off; bot.x += off;
      segs.push({ a: pOut, b: top, c, w }, { a: top, b: bot, c, w: w * 0.6 });
      // core beams drop past the photo & video card before meeting in the lens
      if (!mobile && el.classList.contains('core')) {
        const drop = { x: bot.x, y: mediaBottom + 30 };
        segs.push({ a: bot, b: drop, c, w }, { a: drop, b: lens, c, w });
      } else segs.push({ a: bot, b: lens, c, w });
    });
    const turn = { x: gx, y: turnY }, down = { x: gx, y: downY };
    segs.push({ a: lens, b: turn, c: WHITE, w: 1 }, { a: turn, b: down, c: WHITE, w: 1 }, { a: down, b: seal, c: WHITE, w: 1.1 });
    litAt = litEls.map(el => {
      const anchor = el.dataset.anchor ? el.querySelector(el.dataset.anchor) : el;
      return pt(anchor, 0.5, 0).y + (+el.dataset.off || 0);
    });
  }

  const motes = Array.from({ length: 200 }, () => ({ s: Math.random(), k: Math.random(), o: (Math.random() - 0.5) * 18, sp: 0.0002 + Math.random() * 0.0006, ph: Math.random() * 7 }));

  function glowLine(a, b, c, w, flick) {
    for (const [lw, al] of [[34, 0.035], [16, 0.08], [7, 0.22], [2.2, 0.95]]) {
      g.strokeStyle = `rgba(${c},${al * flick})`; g.lineWidth = lw * w;
      g.beginPath(); g.moveTo(a.x, a.y); g.lineTo(b.x, b.y); g.stroke();
    }
  }
  function flare(p, c, r) {
    const gr = g.createRadialGradient(p.x, p.y, 0, p.x, p.y, r);
    gr.addColorStop(0, 'rgba(255,255,255,.95)'); gr.addColorStop(0.15, `rgba(${c},.55)`); gr.addColorStop(1, `rgba(${c},0)`);
    g.fillStyle = gr; g.beginPath(); g.arc(p.x, p.y, r, 0, 7); g.fill();
  }

  function frame(time) {
    // the light only moves forward: scrolling back up leaves the lit path in place
    const target = scrollY + vh() * HEAD_AT;
    if (target > head) head += (target - head) * 0.1;
    g.setTransform(1, 0, 0, 1, 0, 0);
    g.clearRect(0, 0, cv.width, cv.height);
    g.setTransform(dpr, 0, 0, dpr, 0, -scrollY * dpr);
    g.globalCompositeOperation = 'lighter';
    g.lineCap = 'round';
    const flick = 0.93 + 0.07 * Math.sin(time * 0.013) * Math.sin(time * 0.0071);
    const top = scrollY - 100, bottom = scrollY + innerHeight + 100;
    segs.forEach(s => {
      if (head <= s.a.y) return;
      const k = Math.min(1, (head - s.a.y) / Math.max(1, s.b.y - s.a.y));
      const e = { x: s.a.x + (s.b.x - s.a.x) * k, y: s.a.y + (s.b.y - s.a.y) * k };
      if (Math.max(s.a.y, e.y) < top || s.a.y > bottom) return;
      glowLine(s.a, e, s.c, s.w, flick);
      if (k < 1) flare(e, s.c, 60 * Math.max(0.8, s.w));
    });
    motes.forEach(m => {
      const s = segs[Math.floor(m.k * segs.length)];
      if (!s || head <= s.a.y) return;
      m.s = (m.s + m.sp) % 1;
      const k = Math.min(m.s, (head - s.a.y) / Math.max(1, s.b.y - s.a.y));
      const x = s.a.x + (s.b.x - s.a.x) * k + m.o + Math.sin(time * 0.001 + m.ph) * 4;
      const y = s.a.y + (s.b.y - s.a.y) * k;
      if (y < top || y > bottom) return;
      g.fillStyle = `rgba(${s.c},${0.25 + 0.35 * Math.abs(Math.sin(time * 0.002 + m.ph))})`;
      g.beginPath(); g.arc(x, y, 1.1, 0, 7); g.fill();
    });
    litEls.forEach((el, i) => el.classList.toggle('lit', head > litAt[i]));
    requestAnimationFrame(frame);
  }

  // polaroid story cards
  const dlg = q('.d-story');
  const openStory = (i, x, y, c) => {
    const w = WORK[i], t = I18N[curLang], st = w.story;
    dlg.style.setProperty('--c', c);
    const row = (k, v) => (v ? `<div><dt>${t[k]}</dt><dd>${v}</dd></div>` : '');
    dlg.querySelector('.body').innerHTML = `<div class="ph" style="--bg:${bgOf(w)}"></div><div class="in">
      <div class="k">${w.kind[curLang]}${w.soon ? ' · ' + t.soon : ''}</div><h3>${w.title}</h3>
      <dl>${row('stFor', st.forWho)}${row('stNeed', st.need)}${row('stDid', st.did)}</dl>
      ${w.gallery && w.gallery.length ? `<div class="gal">${w.gallery.map(src => `<img src="${src}" loading="lazy" alt="">`).join('')}</div>` : ''}
      ${w.link ? `<a class="btn primary" href="${w.link}" target="_blank" rel="noopener">${t.stVisit} ↗</a>` : ''}</div>`;
    dlg.showModal();
    // camera-iris opening from the tapped card (a nod to the One Shot lens dive)
    const r = dlg.getBoundingClientRect();
    dlg.style.setProperty('--ox', `${x - r.left}px`); dlg.style.setProperty('--oy', `${y - r.top}px`);
    dlg.classList.remove('iris'); void dlg.offsetWidth; dlg.classList.add('iris');
    const ring = document.createElement('div');
    ring.className = 'd-ring'; ring.style.cssText = `left:${x}px;top:${y}px;--c:${c}`;
    document.body.append(ring); setTimeout(() => ring.remove(), 800);
  };
  root.querySelectorAll('.d-pol').forEach(b => (b.onclick = () => {
    const r = b.getBoundingClientRect();
    openStory(+b.dataset.i, r.left + r.width / 2, r.top + r.height * 0.35, getComputedStyle(b.closest('.d-row')).getPropertyValue('--c').trim());
  }));
  dlg.querySelector('.x').onclick = () => dlg.close();
  dlg.addEventListener('click', e => { if (e.target === dlg) dlg.close(); });
  const legalDlg = q('.d-legaldlg');
  root.querySelectorAll('[data-legal]').forEach(a => (a.onclick = e => {
    e.preventDefault();
    legalDlg.querySelector('.body').innerHTML = LEGAL[curLang][a.dataset.legal]();
    legalDlg.showModal(); legalDlg.querySelector('.body').scrollTop = 0;
  }));
  legalDlg.querySelector('.x').onclick = () => legalDlg.close();
  legalDlg.addEventListener('click', e => { if (e.target === legalDlg) legalDlg.close(); });
  q('.d-letter').onsubmit = e => { e.preventDefault(); e.target.querySelector('button').textContent = I18N[curLang].lThanks; };

  // search across all rows
  const searchEl = q('.d-search');
  filterWork = () => {
    const words = searchEl.value.toLowerCase().trim().split(/\s+/).filter(Boolean);
    let total = 0;
    root.querySelectorAll('.d-row').forEach(row => {
      let shown = 0;
      row.querySelectorAll('.d-pol').forEach(b => {
        const w = WORK[+b.dataset.i];
        const hay = [w.title, w.kind[curLang], w.tags, I18N[curLang]['cat_' + w.cat]].join(' ').toLowerCase();
        const ok = words.every(x => hay.includes(x));
        b.hidden = !ok; shown += ok;
      });
      row.hidden = !shown; total += shown;
      row.querySelector('.n').textContent = shown;
    });
    q('.d-none').hidden = total > 0;
  };
  searchEl.addEventListener('input', () => { filterWork(); build(); });
  filterWork();

  build();
  head = scrollY + vh() * HEAD_AT;
  addEventListener('resize', () => { if (innerWidth !== lastW || innerHeight * dpr > cv.height) build(); });
  document.fonts?.ready.then(build);
  setTimeout(build, 600);
  requestAnimationFrame(frame);
}
