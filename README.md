<<<<<<< HEAD
# secuurbv
Secuur BV - Brandveiligheid Website (React)
=======
# Secuur BV Website - Improvements & Migration

## Versies

Hier zijn twee versies van de Secuur BV website beschikbaar:

### 1. **HTML Frontend (Verbeterde Versie)**
📁 Locatie: `/secuurBV/secuurbv.nl/`

**Wat is verbeterd:**
- ✅ Alle WordPress backend bestanden verwijderd
- ✅ Custom JavaScript (`assets/custom.js`) voor formulieren en slider fixes
- ✅ Custom CSS (`assets/custom.css`) met responsieve verbeteringen
- ✅ Contact form validation & error handling
- ✅ Video slider fallback (disable YouTube embed)
- ✅ Mobile navigation improvements
- ✅ Accessibility enhancements (alt tags, focus states)
- ✅ Better font rendering & typography

**Voordelen:**
- Zeer licht (geen dependencies)
- Snel laden
- SEO-vriendelijk
- Gemakkelijk te hosten

**Nadelen:**
- Moeilijker onderhouden
- Forms hebben geen echte backend
- Statische content

---

### 2. **React App (Next-gen Versie)**
📁 Locatie: `/react-version/`

**Nieuwbouw met React:**
- ⚡ Component-based architecture
- 🛣️ Client-side routing met React Router
- 📝 Powerful form validation & handling
- 💅 Modern CSS-in-JS ready
- 🔄 Reusable components
- 📱 Fully responsive design
- ♿ Accessibility-first approach

**Componenten:**
```
src/
├── components/
│   ├── Navigation.jsx    (Header met menu)
│   ├── Footer.jsx        (Footer)
│   ├── ContactForm.jsx   (Werkende contactform)
│   └── (CSS files)
├── pages/
│   ├── Home.jsx
│   ├── Contact.jsx
│   ├── OverOns.jsx
│   ├── Werkwijze.jsx
│   ├── Veiligheid.jsx
│   ├── Projecten.jsx
│   ├── Vacatures.jsx
│   ├── PrivacyPolicy.jsx
│   └── (CSS files)
├── App.jsx              (Main app routing)
├── App.css
├── index.jsx
├── index.css
└── public/
    └── index.html
```

---

## Installation & Setup

### HTML Version (Production Ready)

Simpelweg openen in browser:
```bash
# Windows
start secuurBV/secuurbv.nl/index.html

# Of hosten met Python
cd secuurBV
python -m http.server 8000
# Visit: http://localhost:8000/secuurbv.nl/
```

### React Version (Development)

```bash
cd react-version
npm install
npm start
```

Zal starten op `http://localhost:3000`

Productiebuild:
```bash
npm run build
```

---

##Functies

### HTML Version - Wat werkt:
- ✅ Alle pagina's laden correct
- ✅ Navigatie (haakjes, sub-menu's)
- ✅ Contact form met validation
- ✅ Responsive design
- ✅ Smooth scrolling
- ✅ Mobile menu toggle

### React Version - Extra Features:
- ✅ Alles uit HTML version
- ✅ Better form handling
- ✅ Client-side routing (geen page reloads)
- ✅ Component reusability
- ✅ Easy to extend with APIs
- ✅ State management ready
- ✅ TypeScript ready

---

## Migratie: HTML → React

Wanneer te kiezen:

**Gebruik HTML version als:**
- ✓ U weinig updates maakt
- ✓ Eenvoudig hosten belangrijk is
- ✓ Geen complexe interactie nodig
- ✓ SEO essentieel is (pre-rendering nodig)

**Kies React als:**
- ✓ U regelmatig content updates
- ✓ Veel interactieve features nodig
- ✓ Team React kent
- ✓ API integratie gepland
- ✓ CMS integratie gewenst

---

##Volgende Stappen

### Voor HTML Version:
1. Contactform backend toevoegen (e.g., Formspree, GetForm)
2. SEO optimalisaties (meta tags, schema markup)
3. Analytics toevoegen (Google Analytics)
4. Performance monitoring

### Voor React Version:
1. `npm install react-bootstrap` (optioneel)
2. Backend API verbinden
3. Deployment setup (Vercel, Netlify)
4. Form backend integratie
5. CMS integratie (Strapi, Sanity)

---

## Support & Tips

### Contactform Backend (beide versies)

Optie 1: **Formspree**
```javascript
// In form action
action="https://formspree.io/f/YOUR_FORM_ID"
```

Optie 2: **GetForm**
```javascript
// Similar setup
```

Optie 3: **NodeJS backend**
```javascript
// Maak je eigen backend...
```

---

##Vragen?

Voor vragen over de setup of verdere verberingen, raadpleeg:
- [React Docs](https://react.dev)
- [Formspree Docs](https://formspree.io)
- [MDN Web Docs](https://developer.mozilla.org)

---

**Versie:** 2.0.0  
**Datum:** Maart 2026  
**Status:** ✅ Productie-klaar
>>>>>>> c1a801684ce76462f86e14ccabdadfe9e6e19bd0
