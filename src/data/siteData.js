// Secuur BV Website Data
// All content centralized for easy management

// Helper function for image paths (works with GitHub Pages subdir)
const imageUrl = (path) => `${process.env.PUBLIC_URL}${path}`;

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
          link: "/werkwijze/onderzoek-en-advies"
        },
        {
          id: 2,
          image: imageUrl('/images/220330-Secuur-BV-Werkwijze-Uitvoering-1.jpg'),
          title: "De uitvoering",
          excerpt: "Wij voeren de werkzaamheden altijd in samenwerking uit. Daarbij zullen we overlast voorkomen of tenminste beperken. Onze werkzaamheden zijn bovendien via een digitaal logboek direct in beeld te volgen.",
          link: "/werkwijze/de-uitvoering"
        },
        {
          id: 3,
          image: imageUrl('/images/220330-Secuur-BV-Werkwijze-Eindrapport-1.jpg'),
          title: "Het eindrapport",
          excerpt: "Het eindrapport dat uit ons logboek komt is ook voorzien van alle certificaten en kan direct aan het bevoegd gezag worden voorgelegd.",
          link: "/werkwijze/het-eindrapport"
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
        link: "/werkwijze/onderzoek-en-advies"
      },
      {
        id: 2,
        title: "De Uitvoering",
        image: imageUrl('/images/220330-Secuur-BV-Werkwijze-Uitvoering-1.jpg'),
        content: "Wij voeren de werkzaamheden altijd in samenwerking uit. Daarbij zullen we overlast voorkomen of tenminste beperken. Onze werkzaamheden zijn bovendien via een digitaal logboek direct in beeld te volgen.",
        link: "/werkwijze/de-uitvoering"
      },
      {
        id: 3,
        title: "Het Eindrapport",
        image: imageUrl('/images/220330-Secuur-BV-Werkwijze-Eindrapport-1.jpg'),
        content: "Het eindrapport dat uit ons logboek komt is ook voorzien van alle certificaten en kan direct aan het bevoegd gezag worden voorgelegd.",
        link: "/werkwijze/het-eindrapport"
      }
    ]
  },

  // Projecten Page
  projects: [
    {
      id: 1,
      title: "Ziekenhuis Erasmus MC",
      image: imageUrl('/images/220330-Secuur-BV-Projecten-Erasmus.jpg'),
      excerpt: "Met het Erasmus MC hebben wij een contract gesloten, om gedurende 10 jaar alle bouwkundig onderhoud te plegen en storingen te verhelpen.",
      content: "Bij het grootste ziekenhuis van Nederland werken wij gezamenlijk aan het onderhoud van alle brandveiligheidsvoorzieningen. Het Erasmus MC is een groot ziekenhuis met verschillende locaties, waar dagelijks veel patiënten en bezoekers komen. Daarom is het uiterst belangrijk dat alle brandveiligheidsmaatregelen volledig functionaal zijn. Wij hebben een 10-jarig contract met het ziekenhuis waarbij wij alle bouwkundige brandveiligheid onderhouden en storingen onmiddellijk verhelpen.",
      link: "/projecten/ziekenhuis-erasmus-mc"
    },
    {
      id: 2,
      title: "Parkeergarage Capelle aan den IJssel",
      image: imageUrl('/images/220330-Secuur-BV-Projecten-Capelle.jpg'),
      excerpt: "De oudere parkeergarage in Capelle aan den IJssel was weliswaar nog niet afgeschreven, maar de plafonds vertoonden slijtage waardoor er instortingsgevaar dreigde.",
      content: "De parkeergarage in Capelle aan den IJssel was gebouwd in de jaren negentig. Na ruim 20 jaar waren echter de betonnen kastplafonds ernstig gehavend. De spanten vertoonden roest en er was instortingsgevaar. Door een slimme oplossing met een ondersteunende constructie hebben we voorkomen dat de hele parkeergarage gesloten moest worden. In plaats daarvan konden we gefaseerd de plafonds vervangen en saneren.",
      link: "/projecten/parkeergarage-capelle"
    }
  ],

  // Over Ons Page
  overOns: {
    title: "Over Secuur BV",
    intro: "Secuur Brandveiligheid B.V. is een jong en ambitieus bedrijf dat zich richt op het bieden van totaaloplossingen op het gebied van passieve en bouwkundige brandveiligheid.",
    sections: [
      {
        title: "Vakmanschap",
        content: "Onze medewerkers zijn deskundigen op hun vakgebied. Zij hebben jarenlange ervaring en worden regelmatig bijgeschoold.",
        image: imageUrl('/images/220330-Secuur-BV-Over-ons-Vakmensen.jpg')
      },
      {
        title: "Materialen",
        content: "Wij werken alleen met materialen van topkwaliteit. Dit garandeert dat uw brandveiligheidsvoorzieningen lang meegaan.",
        image: imageUrl('/images/220330-Secuur-BV-Over-ons-Materialen.jpg')
      },
      {
        title: "Partnership",
        content: "Wij zijn een dochteronderneming van Metz Nederland BV. Dit geeft ons de mogelijkheid om altijd optimale service te leveren."
      }
    ]
  },

  // Veiligheid Page
  veiligheid: {
    title: "Veiligheid",
    intro: "Veiligheid is een recht, niet een luxe. Daarom besteden we er onze volledige aandacht aan.",
    sections: [
      {
        title: "Professioneel Onderzoek",
        content: "Onze professionals voeren grondige onderzoeken uit naar mogelijke brandgevaren.",
        image: imageUrl('/images/220330-Secuur-BV-Veiligheid-Visual-1.jpg')
      },
      {
        title: "Expert Advies",
        content: "Wij geven deskundig advies op basis van jarenlange ervaring en kennis van regelgeving.",
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
