/* ===== RICETTE ===== */
const recipes = {
  cembotte: {
    title: 'Cembotte — Zuppa di Pesce Molfettese',
    ingredients: [
      '500g pesce di scoglio misto (scorfano, coda di rospo, cicale, gamberetti)',
      '4 pomodori maturi',
      '2 spicchi d\'aglio',
      '1 peperoncino',
      'Prezzemolo fresco q.b.',
      '50ml olio extravergine d\'oliva',
      'Sale q.b.',
      'Pane casereccio per crostini'
    ],
    steps: [
      'Pulite e lavate il pesce accuratamente, lasciatelo scolare.',
      'In un tegame di terracotta scaldate l\'olio, aggiungete aglio e peperoncino. Rosolate finché l\'aglio non dora.',
      'Unite i pomodori maturi, il prezzemolo tritato e il sale. Aggiungete acqua fino a coprire.',
      'Portate a ebollizione, poi aggiungete i pesci a cottura più lunga (scorfano, coda di rospo).',
      'Dopo 15 minuti unite i gamberetti, le cicale e il resto del pesce. Cuocete altri 15 minuti.',
      'Abbrustolite il pane in forno. Versate la zuppa su fette di pane e servite immediatamente.'
    ]
  },
  pescecrudo: {
    title: 'Pesce Crudo alla Molfettese',
    ingredients: [
      'Alici freschissime di giornata',
      'Piccoli pesci di stagione ("merosche", "aghestenèdde")',
      'Polipetti freschi ("pulp\'a tenèriedde")',
      'Succo di limone',
      'Sale marino grosso',
      'Olio extravergine d\'oliva (facoltativo)'
    ],
    steps: [
      'Acquistate il pesce direttamente dai pescatori la mattina presto — la freschezza è tutto.',
      'Spinatate le alici rimuovendo lisca e testa con le mani. Sciacquate brevemente in acqua salata.',
      'I polipetti vanno ammorbiditi lavorandoli a lungo con le mani ("a tenèriedde" = inteneriti).',
      'Disponete il pesce su un piatto da portata.',
      'Condite con solo qualche goccia di limone e sale marino. L\'olio è facoltativo.',
      'Consumate immediatamente, preferibilmente seduti sul porto al mattino.'
    ]
  },
  strascenete: {
    title: 'Strascenète — Orecchiette con Cime di Rapa',
    ingredients: [
      '400g semola di grano duro rimacinata',
      'Acqua tiepida q.b.',
      '1 cucchiaino di sale',
      '600g cime di rapa fresche',
      '3 spicchi d\'aglio',
      '1 peperoncino',
      '4 filetti di acciuga sott\'olio (opzionale)',
      'Olio extravergine d\'oliva abbondante'
    ],
    steps: [
      'Impastate semola, acqua tiepida e sale fino ad ottenere un impasto liscio ed elastico. Coprite e fate riposare 30 minuti.',
      'Ricavate dall\'impasto dei bastoncini del diametro di 1cm. Tagliate a tocchetti di 1cm.',
      'Con il pollice trascinate ogni tocchetto sul piano di lavoro ruvido formando la caratteristica conchiglia.',
      'Pulite le cime di rapa, lavate e tagliate a pezzi. In acqua bollente salata calate prima le cime.',
      'Dopo 3 minuti aggiungete le orecchiette nella stessa acqua. Cuocete insieme fino a cottura.',
      'In padella scaldate olio con aglio, peperoncino e acciughe (se usate). Scolate pasta e verdure, saltate 2 minuti. Servite.'
    ]
  },
  tridde: {
    title: 'U Tridde — Pasta in Brodo di Santo Stefano',
    ingredients: [
      '300g semola rimacinata',
      '3 uova',
      '1 cucchiaio di olio EVO',
      'Prezzemolo fresco tritato',
      'Pecorino o Parmigiano grattugiato abbondante',
      'Per il brodo: ossobuco, carote, sedano, cipolla, alloro',
      'Sale q.b.'
    ],
    steps: [
      'Il giorno prima: impastate semola, uova, olio e un pizzico di sale. Aggiungete prezzemolo e formaggio.',
      'Tirate sfoglie sottili con il mattarello. Lasciatele asciugare su un canovaccio per qualche ora.',
      'Quando le sfoglie sono ben asciutte, spezzettatele a mano in pezzi irregolari di 2-3cm.',
      'Preparate il brodo: cuocete ossobuco e verdure in abbondante acqua per almeno 3 ore. Schiumate spesso.',
      'Filtrate il brodo, aggiustate di sale e portate a ebollizione vigorosa.',
      'Calate il tridde nel brodo bollente e cuocete 5-7 minuti. Servite caldo con abbondante formaggio grattugiato.'
    ]
  },
  scarcedde: {
    title: 'Scarcèdde — Dolce Pasquale Molfettese',
    ingredients: [
      'Per la frolla: 1kg farina, 8 tuorli, 400g zucchero, 200g olio EVO, 1 bustina lievito, buccia di limone, latte q.b.',
      'Per la pasta reale: 400g mandorle pelate, 8 albumi, zucchero q.b., scorza di limone',
      'Per il ripieno: marmellata di amarene o ciliegie',
      'Per la copertura: zucchero a velo, acqua, confettini colorati'
    ],
    steps: [
      'Frolla: montate tuorli con zucchero e olio. Aggiungete farina, lievito, buccia di limone e latte q.b. fino ad ottenere un impasto. Fate riposare.',
      'Pasta reale: frullate le mandorle finemente. Montate gli albumi a neve fermissima, amalgamate delicatamente alle mandorle.',
      'Stendete la frolla tra due fogli di carta forno. Date la forma desiderata (ovale, a ciambella, a colomba).',
      'Distribuite uno strato di pasta reale lasciando 2cm dai bordi, coprite con la marmellata.',
      'Chiudete con altro strato di frolla, sigillate bene i bordi. Cuocete a 180°C fino a doratura.',
      'Da fredde, glassate con zucchero a velo e acqua. Decorate con confettini colorati prima che la glassa asciughi.'
    ]
  },
  cecineri: {
    title: 'Zuppa di Ceci Neri di Molfetta',
    ingredients: [
      '300g ceci neri di Molfetta (messi a bagno 12h)',
      '2 spicchi d\'aglio',
      '1 rametto di rosmarino fresco',
      '1 foglia di alloro',
      'Olio extravergine d\'oliva abbondante',
      'Sale e pepe nero q.b.',
      '200g pasta mista (opzionale)',
      'Peperoncino (opzionale)'
    ],
    steps: [
      'Sciacquate i ceci e cuoceteli in acqua fredda non salata con alloro per 2-3 ore finché teneri.',
      'Prelevate un terzo dei ceci e frullateli con un po\' di acqua di cottura per rendere la zuppa cremosa.',
      'Rimettete tutto in pentola, aggiustate di sale. Aggiungete rosmarino e aglio.',
      'Se usate la pasta, cuocetela direttamente nel brodo di ceci per 10-12 minuti.',
      'Spegnete il fuoco e lasciate riposare 5 minuti.',
      'Servite con un generoso filo di olio EVO a crudo, pepe nero macinato fresco e peperoncino se gradito.'
    ]
  }
};

const modal = document.getElementById('recipeModal');
const modalTitle = document.getElementById('modalTitle');
const modalIngredients = document.getElementById('modalIngredients');
const modalSteps = document.getElementById('modalSteps');

function openRecipe(key) {
  const r = recipes[key];
  if (!r) return;
  modalTitle.textContent = r.title;
  modalIngredients.innerHTML = r.ingredients.map(i => `<li>${i}</li>`).join('');
  modalSteps.innerHTML = r.steps.map(s => `<li>${s}</li>`).join('');
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeRecipe() {
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

document.querySelectorAll('.food-recipe-btn').forEach(btn => {
  btn.addEventListener('click', () => openRecipe(btn.dataset.recipe));
});

document.getElementById('modalClose').addEventListener('click', closeRecipe);

modal.addEventListener('click', e => {
  if (e.target === modal) closeRecipe();
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeRecipe();
});

/* ===== NAVBAR ===== */
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

/* ===== HAMBURGER ===== */
const hamburger = document.getElementById('navHamburger');
const navLinks  = document.getElementById('navLinks');

function closeMenu() {
  hamburger.classList.remove('open');
  navLinks.classList.remove('open');
  hamburger.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}

hamburger.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  hamburger.classList.toggle('open', isOpen);
  hamburger.setAttribute('aria-expanded', String(isOpen));
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    closeMenu();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      const offset = navbar.offsetHeight + 16;
      window.scrollTo({ top: target.offsetTop - offset, behavior: 'smooth' });
    }
  });
});
