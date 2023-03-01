# Sprint planning voor sprint 3

## Sprint backlog (advies)

### Van de mogelijke (extra) user stories uit sprint 2

- [#90](https://github.com/HANICA-DWA/sep2021-project-koeskoes/issues/90) Als ontvanger wil ik een tekstreactie kunnen sturen naar de verzender, zodat ik de koper persoonlijk kan bedanken.
- [#89](https://github.com/HANICA-DWA/sep2021-project-koeskoes/issues/89) Als ontvanger wil ik een videoreactie kunnen sturen naar de verzender, zodat ik de koper persoonlijk kan bedanken.
- [#21](https://github.com/HANICA-DWA/sep2021-project-koeskoes/issues/21) Als ontvanger wil ik eenvoudig de video kunnen delen via social media, zodat ik de video aan anderen kan laten zien.
- [#1](https://github.com/HANICA-DWA/sep2021-project-koeskoes/issues/1) Als webshop beheerder wil ik eenvoudig de plug-in aan een webshop kunnen toevoegen, zodat de klanten makkelijk gebruik kunnen maken van de plug-in. -> Winkelwagen 'nabootsen'. 
- [#125](https://github.com/HANICA-DWA/sep2021-project-koeskoes/issues/125) Als klant wil ik op een uitnodigende pagina komen, zodat ik later nog een keer een Giftle wil bestellen.

### Van de sprint review van sprint 2

- [#7](https://github.com/HANICA-DWA/sep2021-project-koeskoes/issues/7)
  - DoD item dat applicatie naar vermogen tolerant is voor vergissingen (zoals dingen kwijtraken op het moment dat ik nog niet verwacht dat ik ze kwijtraak).
  - Feedback geven over dat er geen audio is opgenomen bij de video & over dat de video verdacht kort is. Geen eis maken, maar gewoon als check zodat we een tip daarover kunnen geven.
  - Icoontjes in knoppen toevoegen bij afspelen, pauzeren en opnieuw afspelen.
  - Video fullscreen kunnen maken.
- [#8](https://github.com/HANICA-DWA/sep2021-project-koeskoes/issues/8)
  - nadenken over of er een 'vorige stap' nodig is, of de startpagina voor de ontvanger nodig is.
  - Video fullscreen kunnen maken.
- [#15](https://github.com/HANICA-DWA/sep2021-project-koeskoes/issues/15)
  - de regular expression is heel nauw, uitbreiden of NPM module gebruiken. Daarbij meer kijken naar "escaping" voor de beveiliging en namen met bijvoorbeeld apostrof et cetera moeten wel kunnen.
- [#19](https://github.com/HANICA-DWA/sep2021-project-koeskoes/issues/19)
  - Knop is nog niet duidelijk genoeg vormgegeven als een knop om het echt een knop te kunnen noemen. Wijzig het dan naar 'URL' in de zin erboven of pas de styling aan (zonder Bootstrap). We moeten meer denken aan de gebruiker.
- [#80](https://github.com/HANICA-DWA/sep2021-project-koeskoes/issues/80)
  - Als er maar 1 camera is de dropdown hiervan weghalen.
  - Als er opgenomen wordt duidelijk feedback geven dat er opgenomen wordt (kader om camerabeeld / label met 'Opname loopt').
  - 'Camerapositie' veranderen naar 'camera'.
  - Als tijd voorbij is wordt opnemen automatisch gestopt, daardoor wordt boolean aangepast. Vervolgens opnieuw opnemen klikken zorgt ervoor dat boolean weer op 'start' staat, gaat niet goed.
  - Op einde moet camera sluiten of iets om het duidelijk te maken dat degene die opneemt niet meer verder kan praten.

### Nieuwe User Stories
- Als klant wil ik op een uitnodigende pagina komen, zodat ik later nog een keer een Giftle wil bestellen.

### Technische taken voor tijdens sprint 3
- Redux state overal toevoegen waar nodig (gaat veel tijd kosten)
- Deployment op de server (gaat veel tijd kosten)
- Alle componenten met pagina's beschrijven (b.v. OrderControl -> OrderControlPage)
- Navigatie verbeteren. Nu is het /orderControl, maar is beter om /buyer/orderControl te doen (i.v.m. mappenstructuur)
- API calls gebruiken we /api
