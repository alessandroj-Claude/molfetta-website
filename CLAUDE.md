# Molfetta Website — CLAUDE.md

## Comportamento Claude
- Avvia sempre ogni sessione con `/caveman:caveman` (full mode)
- Aggiorna roadmap a ogni step completato
- Push su GitHub dopo ogni step completato

## Stack Tecnico
- HTML5 / CSS3 / JavaScript vanilla
- Nessuna dipendenza esterna
- Hosting: GitHub Pages (futuro)

## Struttura File
```
├── index.html      # pagina principale
├── style.css       # stili globali
├── script.js       # JS: navbar, smooth scroll
├── images/         # immagini città
└── CLAUDE.md       # questo file
```

## Sezioni Sito
- **Navbar** — logo + link ancore
- **Hero** — titolo, sottotitolo, sfondo
- **La Città** — info generali (pop, provincia, coordinate)
- **Storia** — origini medievali, porto, sviluppo
- **Galleria** — griglia immagini
- **Footer** — credits

## Comandi Git
```bash
git status
git add <file>
git commit -m "tipo: descrizione breve"
git push origin main
```

### Tipi di commit
- `feat:` nuova funzionalità
- `content:` aggiunta/modifica contenuto
- `style:` modifiche CSS/layout
- `fix:` correzione bug

## Stato Attuale (2026-04-18)
- Sito creato e funzionante localmente
- Git inizializzato, primo commit fatto su branch `main`
- GitHub repo creata e pushata: https://github.com/alessandroj-Claude/molfetta-website

## Roadmap
- [x] Aggiungere immagini reali della città (Wikimedia Commons CC)
- [x] Sezione "Cosa Vedere" con mappa (6 POI + OpenStreetMap embed + link Wikipedia per ogni card)
- [x] Sezione "Gastronomia" (6 piatti tipici con tag, ingredienti, hover cards + modal popup con ricette reali)
- [x] Sezione "Eventi e Feste" (6 eventi: Carnevale, San Corrado, Settimana Santa, Corpus Domini, Estate Molfettese, Madonna dei Martiri)
- [x] Deploy su GitHub Pages → https://alessandroj-claude.github.io/molfetta-website/
- [ ] Versione mobile ottimizzata
