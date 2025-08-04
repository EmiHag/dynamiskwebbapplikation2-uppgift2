# Star Wars Film Search – React App

En React-applikation som låter användare söka i Star Wars-filmer via **The Star Wars API (SWAPI)**. Appen visar detaljer om filmer baserat på söksträng på titel, regissör eller handling.

## Funktionalitet

- Sökning på del av filmens titel, regissör eller handling (skiftlägesokänslig).
- Visar information om första matchande filmen:
  - Titel
  - Regissör
  - Producent
  - Handling ("opening crawl")
  - Releasedatum
- Visar antal karaktärer och rymdskepp i filmen.
- Visar antal filmer som matchar sökningen.

## Teknik och verktyg

- React med funktionella komponenter och hooks (`useState`, `useEffect`).
- Fetch API för att hämta filmdata från SWAPI.
- Filtrering och sökning sker på klienten utan nya API-anrop.

## Struktur

- `App.jsx`: Huvudkomponent med datahämtning och söklogik.
- `SearchBar`: Sökfält med sökknapp.
- `FilmDetails`: Visar detaljerad information om vald film.
- `MatchCount`: Visar antal träffar.

## Installation och körning

1. Klona repo eller ladda ner koden.
2. Kör `npm install` för att installera beroenden.
3. Starta appen med `npm start`.
4. Öppna webbläsaren på `http://localhost:3000`.

## Dokumentation

En separat dokumentfil medföljer som innehåller:

- Komponentöversikt och skiss.
- Beskrivning av komponenternas roller.
- Reflektion kring återanvändbarhet.

## Betyg och omdöme

Projektet genomfördes som del av en kurs och uppfyller samtliga kriterier för betyg VG.

---

**API-dokumentation:** https://swapi.dev/

