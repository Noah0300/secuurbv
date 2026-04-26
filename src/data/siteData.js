// Secuur BV Website Data
// All content centralized for easy management

// For GitHub Pages, images are at /secuurbv/images/
const BASE_URL = '/secuurbv';
const imageUrl = (path) => `${BASE_URL}${path}`;

export const siteData = {
  company: {
    name: "Secuur Brandveiligheid B.V.",
    shortName: "Secuur BV",
    tagline: "Passieve en bouwkundige brandveiligheid",
    description: "Wij zijn Secuur Brandveiligheid BV. Wij zijn gespecialiseerd in passieve en bouwkundige brandveiligheid in elk pand. Wij zijn een zusterbedrijf van Metz Nederland BV. Dat is te zien in de manier waarop wij projecten aanpakken en uitvoeren. Wij zorgen voor een optimale samenwerking en een maximale informatievoorziening aan alle betrokkenen. Wij houden meer dan anderen rekening met de omgeving waarin wij uw opdracht uitvoeren.",
    location: {
      street: "Cornelis Houtmanstraat 11",
      city: "3124 LB Schiedam",
      country: "Nederland"
    },
    contact: {
      phone: "010 321 42 16",
      phoneRaw: "+31103214216",
      email: "info@secuurbv.nl",
      kvk: "77360672"
    }
  },

  // Homepage sections
  homepage: {
    hero: {
      title: "Secuur Brandveiligheid",
      subtitle: "Extra tijd, wanneer elke seconde telt.",
      backgroundImage: imageUrl('/images/220330-Secuur-BV-header1.jpg'),
      cta: "Neem Contact Op"
    },

    intro: {
      content: "Wij zijn Secuur Brandveiligheid BV. Wij zijn gespecialiseerd in passieve en bouwkundige brandveiligheid in elk pand. Wij zijn een zusterbedrijf van Metz Nederland BV. Dat is te zien in de manier waarop wij projecten aanpakken en uitvoeren. Wij zorgen voor een optimale samenwerking en een maximale informatievoorziening aan alle betrokkenen. Wij houden meer dan anderen rekening met de omgeving waarin wij uw opdracht uitvoeren."
    },

    news: {
      title: "Het Laatste Nieuws",
      subtitle: "Blijf op de hoogte van de laatste ontwikkelingen binnen Secuur Brandveiligheid B.V.",
      items: [
        {
          id: 1,
          image: imageUrl('/images/220330-Secuur-BV-home-onderzoek-en-advies.jpg'),
          title: "Onderzoek en advies",
          excerpt: "Onderzoek en advies naar brandgevaarlijke plekken is de basis voor ons werk. Maar voordat wij ermee aan de slag gaan kijken we vooral naar mogelijk betere alternatieven.",
          link: "/werkwijze"
        },
        {
          id: 2,
          image: imageUrl('/images/220330-Secuur-BV-Werkwijze-Uitvoering-1.jpg'),
          title: "De uitvoering",
          excerpt: "Wij voeren de werkzaamheden altijd in samenwerking uit. Daarbij zullen we overlast voorkomen of tenminste beperken. Onze werkzaamheden zijn bovendien via een digitaal logboek direct in beeld te volgen.",
          link: "/werkwijze"
        },
        {
          id: 3,
          image: imageUrl('/images/220330-Secuur-BV-Werkwijze-Eindrapport-1-1.jpg'),
          title: "Het eindrapport",
          excerpt: "Het eindrapport dat uit ons logboek komt is ook voorzien van alle certificaten en kan direct aan het bevoegd gezag worden voorgelegd.",
          link: "/werkwijze"
        }
      ]
    },

    linkedin: {
      title: "LinkedIn updates",
      subtitle: "De 3 meest recente posts van Secuur Brandveiligheid op LinkedIn",
      posts: [
        {
          id: 1,
          label: "Meest recent",
          sourceUrl: "https://nl.linkedin.com/posts/secuur-brandveiligheid_scl-safetycultureladder-vca-activity-7442552979058102272-gi1H",
          embedUrl: "https://www.linkedin.com/embed/feed/update/urn:li:activity:7442552979058102272"
        },
        {
          id: 2,
          label: "Daarvoor",
          sourceUrl: "https://nl.linkedin.com/posts/secuur-brandveiligheid_brandveiligheid-bouwkundigbrandveiligheid-activity-7431685966542807040-S838",
          embedUrl: "https://www.linkedin.com/embed/feed/update/urn:li:activity:7431685966542807040"
        },
        {
          id: 3,
          label: "Recent",
          sourceUrl: "https://nl.linkedin.com/posts/secuur-brandveiligheid_brandveiligheid-samenwerking-nieuwjaar-activity-7414581231348105216-wiQo",
          embedUrl: "https://www.linkedin.com/embed/feed/update/urn:li:activity:7414581231348105216"
        }
      ]
    },

    certificates: {
      title: "Certificeringen",
      items: [
        {
          image: imageUrl('/images/is04001.png'),
          alt: "ISO 4001"
        },
        {
          image: imageUrl('/images/vca-blackwhite.png'),
          alt: "VCA"
        },
        {
          image: imageUrl('/images/iso9001.png'),
          alt: "ISO 9001"
        }
      ]
    },

    safetySection: {
      title: "Veiligheid heeft een tijd",
      content: "Voor ons zijn de belangrijkste stappen om veiligheid de tijd te geven allereerst het onderzoek & advies. Vervolgens zorgen wij voor de concrete uitvoering van de maatregelen, waar mogelijk met alternatieve oplossingen. Dat doen we vanuit samenwerking omdat we de beste uitvoering willen realiseren én om overlast te voorkomen. Alles leggen we vast in een digitaal logboek waarin ook alle certificaten zijn te vinden. Het eindrapport dat daaruit volgt kunnen wij direct aan het bevoegd gezag voorleggen.",
      backgroundImage: imageUrl('/images/220330-Secuur-BV-Werkwijze-visual-3.jpg')
    }
  },

  // Werkwijze Page
  werkwijze: {
    title: "Onze Werkwijze",
    intro: "Naast de zorg voor een passieve brandveiligheid denken wij altijd aan de belangen van uw bouwers, uw cliënten of uw patiënten. Informeren en communiceren, luisteren naar en begrip hebben voor alle verschillende belangen en die ook bespreekbaar maken, vormen de kern in ons werk. Wij begrijpen kortom heel goed waar we werken en werken uitsluitend Secuur.",
    
    listeningApproach: {
      title: "Een luisterend oor",
      content: "Wij hebben een voorspoken proactieve houding door iedereen in het team en de andere betrokkenen een luisterend oor te bieden en uit te doendigingen positief bespreekbaar te maken. Dat kenmerk onze manier van 'ontzorgen'. Duidelijke afspraken, persoonlijke betrokkenheid en goed samenwerken zorgt namelijk voor minder zorgen en juist meer vertrouwen. Wij hebben daartoe daadkrachtige punten conform de SMART methodiek in onze werkvoorstellen opgenomen."
    },

    sections: [
      {
        id: 1,
        title: "Onderzoek en Advies",
        image: imageUrl('/images/220330-Secuur-BV-Werkwijze-Onderzoek-en-Advies-2.jpg'),
        content: "Onderzoek en advies naar brandgevaarlijke plekken is de basis voor ons werk. Maar voordat wij ermee aan de slag gaan kijken we vooral naar mogelijk betere alternatieven.",
        link: "/werkwijze"
      },
      {
        id: 2,
        title: "De Uitvoering",
        image: imageUrl('/images/220330-Secuur-BV-Werkwijze-Uitvoering-1.jpg'),
        content: "Wij voeren de werkzaamheden altijd in samenwerking uit. Daarbij zullen we overlast voorkomen of tenminste beperken. Onze werkzaamheden zijn bovendien via een digitaal logboek direct in beeld te volgen.",
        link: "/werkwijze"
      },
      {
        id: 3,
        title: "Het Eindrapport",
        image: imageUrl('/images/Het-Eindrapport-1920x1080-1-1.jpg'),
        content: "Het eindrapport dat uit ons logboek komt is ook voorzien van alle certificaten en kan direct aan het bevoegd gezag worden voorgelegd.",
        link: "/werkwijze"
      }
    ]
  },

  // Projecten Page
  projects: [
    {
      id: 1,
      slug: "ziekenhuis-erasmus-mc",
      title: "Ziekenhuis Erasmus MC",
      image: imageUrl('/images/220330-Secuur-BV-Projecten-Erasmus.jpg'),
      excerpt: "Met het Erasmus MC hebben wij een contract gesloten, om gedurende 10 jaar alle bouwkundig onderhoud te plegen en storingen te verhelpen.",
      content: "Met het Erasmus MC hebben wij een contract gesloten, om gedurende 10 jaar alle bouwkundig onderhoud te plegen en storingen te verhelpen. Het Erasmus MC is voortdurend in ontwikkeling om aan de veranderende zorgwensen en -eisen te kunnen blijven voldoen. Daardoor vinden er continu verbouwingen plaats. Als een verbouwing aanpassingen in de infrastructuur van leidingen en bekabeling tot gevolg heeft, dan krijgt de brandveiligheid daarin direct extra aandacht. Jaarlijks gaat het totaal om zo'n 500 mutaties.",
      link: "/projecten/ziekenhuis-erasmus-mc"
    },
    {
      id: 2,
      slug: "parkeergarage-capelle-aan-den-ijssel",
      title: "Parkeergarage Capelle aan den IJssel",
      image: imageUrl('/images/220330-Secuur-BV-Projecten-Capelle.jpg'),
      excerpt: "De oudere parkeergarage in Capelle aan den IJssel was weliswaar nog niet afgeschreven, maar de plafonds vertoonden slijtage waardoor er instortingsgevaar dreigde.",
      content: "De oudere parkeergarage in Capelle aan den IJssel was weliswaar nog niet afgeschreven, maar de plafonds vertoonden slijtage waardoor er instortingsgevaar dreigde. Die plafonds hebben wij verwijderd. Onder het eerste, verborgen plafond bevonden zich echter diverse leidingen. In een totale periode van 6 weken hebben wij de brandvertraging in 20 fases uitgevoerd en zijn er 375 situaties verbeterd.",
      link: "/projecten/parkeergarage-capelle-aan-den-ijssel"
    }
  ],

  // Over Ons Page
  overOns: {
    title: "Over Secuur BV",
    intro: "Secuur Brandveiligheid BV is specialist in passieve en bouwkundige brandveiligheid voor elk type pand.",
    sections: [
      {
        title: "Vakmensen",
        content: "Bij ons werken uitsluitend vakmensen met verstand van brandveiligheid. Samen met onze technische adviseurs en leveranciers van goedgekeurde en gecertificeerde materialen zorgen wij voor de juiste oplossing in iedere situatie. Dankzij korte lijnen kunnen wij snel schakelen.",
        image: imageUrl('/images/220330-Secuur-BV-Over-ons-Vakmensen.jpg')
      },
      {
        title: "Materialen",
        content: "Wij brengen brandvertragende middelen aan op bouwkundige onderdelen zoals vloeren, plafonds, muren en draagconstructies. Daarbij werken wij alleen met gespecialiseerde en gecertificeerde materialen. Zo creeren we extra tijd om een pand veilig te kunnen verlaten.",
        image: imageUrl('/images/220330-Secuur-BV-Over-ons-Materialen.jpg')
      },
      {
        title: "Kwaliteit",
        content: "Wij zijn gecertificeerd volgens ISO 9001, ISO 14001 en VCA*. Kwaliteit, veiligheid en zorgvuldigheid vormen de basis van ons werk. Daarbij stemmen wij onze uitvoering altijd af op de omgeving, zodat overlast zoveel mogelijk beperkt blijft."
      }
    ],
    processSteps: [
      {
        title: "Onderzoek & advies",
        content: "Onderzoek en advies naar brandgevaarlijke plekken is de basis voor ons werk. Maar voordat wij ermee aan de slag gaan kijken we vooral naar mogelijk betere alternatieven.",
        image: imageUrl('/images/220318-Secuur-BV-Werkwijze-Onderzoek-en-Advies-2.jpg'),
        iconImage: imageUrl('/images/220330-Secuur-BV-icon-Onderzoek-en-advies.png')
      },
      {
        title: "De uitvoering",
        content: "Wij voeren de werkzaamheden altijd in samenwerking uit. Daarbij zullen we overlast voorkomen of tenminste beperken. Onze werkzaamheden zijn bovendien via een digitaal logboek direct in beeld te volgen. Dat is Secuur.",
        image: imageUrl('/images/220330-Secuur-BV-Werkwijze-Uitvoering-1.jpg'),
        iconImage: imageUrl('/images/220330-Secuur-BV-icon-Uitvoering.png')
      },
      {
        title: "Het eindrapport",
        content: "Het eindrapport dat uit ons logboek komt is ook voorzien van alle certificaten en kan direct aan het bevoegd gezag worden voorgelegd.",
        image: imageUrl('/images/Het-Eindrapport-1920x1080-1-1.jpg'),
        iconImage: imageUrl('/images/220330-Secuur-BV-icon-Eindrapport.png')
      }
    ]
  },

  // Veiligheid Page
  veiligheid: {
    title: "Veiligheid",
    intro: "Veiligheid is een recht, niet een luxe. Daarom besteden we er onze volledige aandacht aan.",
    sections: [
      {
        title: "Veiligheid heeft een tijd",
        content: "Brand kan iedereen, altijd en overal treffen. De gevolgen zijn vaak groot: materiele schade, financiele impact en vooral veel emotionele onrust. Daarom is het belangrijk om niet alleen aandacht te hebben voor het voorkomen van brand, maar ook voor het beperken van de gevolgen als het toch misgaat.\n\nBrand ontwikkelt zich vaak sneller dan hulpdiensten ter plaatse kunnen zijn. In enkele minuten kan een beginnende brand uitgroeien tot een levensgevaarlijke situatie.",
        image: imageUrl('/images/220330-Secuur-BV-Veiligheid-Visual-1.jpg')
      },
      {
        title: "Bescherming die tijd geeft",
        content: "Juist daarom is het van groot belang dat bouwkundige onderdelen van een pand, zoals vloeren, muren, plafonds en draagconstructies, voldoende brandvertragend zijn beschermd.\n\nSecuur brengt brandvertragende middelen aan die ervoor zorgen dat vuur zich minder snel verspreidt en constructies langer hun functie behouden. Daarmee ontstaat kostbare extra tijd voor bewoners, gebruikers, clienten of patienten om veilig het pand te verlaten.",
        image: imageUrl('/images/220330-Secuur-BV-Veiligheid-visual-2.jpg')
      }
    ]
  },

  // Vacatures
  vacancies: [
    {
      id: 1,
      title: "Enthousiaste Monteur / Applicateur",
      image: imageUrl('/images/Vacature-Uitvoerder.jpeg'),
      excerpt: "Wij zoeken een enthousiaste monteur die samen met ons de brand veiligheid verbetert.",
      content: "Ben je een vakman/vakvrouw met ervaring in het bouwvak? Wij zoeken een enthousiaste monteur/applicateur die wil groeien met ons bedrijf...",
      link: "/vacatures/monteur-applicateur"
    },
    {
      id: 2,
      title: "Werkvoorbereider / Calculator",
      image: imageUrl('/images/Vacature-Werkvoorbereider-Calculator.jpeg'),
      excerpt: "Wij zoeken iemand met affiniteit voor planning, calculatie en organisatie.",
      content: "Heb je ervaring in planning en calculatie? Wij zoeken een werkvoorbereider/calculator die ons helpt projecten optimaal voor te bereiden...",
      link: "/vacatures/werkvoorbereider"
    }
  ],

  // Services
  services: [
    {
      id: 1,
      title: "Onderzoek & Advies",
      description: "Wij voeren professioneel onderzoek uit naar brandgevaarlijke plekken en geven advies op basis van jarenlange ervaring.",
      image: imageUrl('/images/220330-Secuur-BV-icon-Onderzoek-en-advies.png')
    },
    {
      id: 2,
      title: "De Uitvoering",
      description: "Onze gespecialiseerde teams voeren de maatregelen uit met minimale overlast en maximale vakmanschap.",
      image: imageUrl('/images/220330-Secuur-BV-icon-Uitvoering.png')
    },
    {
      id: 3,
      title: "Het Eindrapport",
      description: "Volledig gedocumenteerde resultaten met alle certificaten die klaar zijn voor het bevoegd gezag.",
      image: imageUrl('/images/220330-Secuur-BV-icon-Eindrapport.png')
    }
  ]
};
