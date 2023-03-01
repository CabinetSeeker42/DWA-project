# Sprint review | Sprint 1

## Agenda

### Rollen

| Rol              | Naam                |
| ---------------- | ------------------- |
| **Scrummaster**  | Jordi               |
| **Scrumbord**    | Sven                |
| **Demonstratie** | Sjoerd              |
| **Notulist**     | Ilse                |

### Gesprekspunten

- Rollen binnen gesprek vermelden.
- Agendapunten uitleggen.
- Sprintplanning bespreken (wat we van plan waren).
- A.d.h.v. Scrumbord laten zien welke US 100% af zijn.
- A.d.h.v. Scrumbord laten zien welke US niet af zijn.
  - #109 refresh na toestaan webcam/microfoon
- Onderzoek naar Magento
- Demonstratie van de US die af zijn (acceptatiecriteria & DoD benadrukken).
- Vragen naar feedback.

## Notulen

### Code review

- In software guidebook duidelijk beschrijven wat de criteria zijn voor: óf redux-state, óf lokale state.
- RewatchVideo: Progressbar wellicht een apart component maken wat props meekrijgt en in de render wordt aangeroepen. Overweeg om andere useCallbacks kwijt te raken door meer componentjes te maken.
- Bij navigate onderzoek doen naar waarom deze niet goed werken, i.p.v. maar gewoon een workaround gebruiken. History.push() is de manier om dit te doen. In het algemeen: als je een workaround moet gebruiken door een rare fout, doe dit niet op deze manier. Ga onderzoek doen naar waarom het niet werkt.

### Sprint review

#### Algemeen

- Iets meer inzicht en achtergrond in automatisch herladen na toestaan microfoon/camera. Goede betrouwbare bron waar wordt bewezen dat het onmogelijk is naar Robert sturen, anders beargumenteren waarom het ons niet lukt.
- DoD toevoegen: labels duidelijk maken, gebruiker wordt vriendelijk en respectvol benaderd (foutmeldingen etc.), simpele user interface eisen toevoegen. Bijvoorbeeld dat systeem de gebruiker moet voorzien van goede feedback op alle veranderingen binnen de pagina. Bijvoorbeeld als camera stopt, dit erg duidelijk maken.
- Video groot weergeven mogelijk maken (morgen tijdens sprintplannning over hebben).
- Deployment op de server & transitie naar redux zijn beide grote taken die komende sprintplanning aan bod moeten komen. Beargumentatie waarom dit in belang is voor de product owner. Basis functionaliteiten sowieso in komende sprint toevoegen. Richtingen komende sprint:
  1. Meer focus op webshopeigenaar die Giftle koopt (zoals configuratie prijzen, teksten mailtjes, styling).
  2. Deny's voorkeur: _Meer focus op zender en ontvanger en user experience volledig en gelikt afmaken._
- [Promisify](https://www.npmjs.com/package/es6-promisify) gebruiken om een promise te maken van een callback.

#### User stories

- US 11 (#19): Knop is nog niet duidelijk genoeg vormgegeven als een knop om het echt een knop te kunnen noemen. Wijzig het dan naar 'URL' in de zin erboven of pas de styling aan (zonder Bootstrap). We moeten meer denken aan de gebruiker.
- US 14 (#82): 
  - 'Camerapositie' veranderen naar 'camera'. 
  - Als tijd voorbij is wordt opnemen automatisch gestopt, daardoor wordt boolean aangepast. Vervolgens opnieuw opnemen klikken zorgt ervoor dat boolean weer op 'start' staat, gaat niet goed.
  - Op einde moet camera sluiten of iets om het duidelijk te maken dat degene die opneemt niet meer verder kan praten.
- US 18 (#80): 
  - Als er maar 1 camera is de dropdown hiervan weghalen.
  - Als er opgenomen wordt duidelijk feedback geven dat er opgenomen wordt (kader om camerabeeld / label met 'Opname loopt').
- US 12 (#7):
  - DoD item dat applicatie naar vermogen tolerant is voor vergissingen (zoals dingen kwijtraken op het moment dat ik nog niet verwacht dat ik ze kwijtraak).
  - Feedback geven over dat er geen audio is opgenomen bij de video & over dat de video verdacht kort is. Geen eis maken, maar gewoon als check zodat we een tip daarover kunnen geven.
  - Icoontjes in knoppen toevoegen bij afspelen, pauzeren en opnieuw afspelen.
- US 13 (#15): de regular expression is heel nauw, uitbreiden of NPM module gebruiken. Daarbij meer kijken naar "__escaping__" voor de beveiliging en namen met bijvoorbeeld apostrof et cetera moeten wel kunnen.
- US 16 (#88): -
- US 8 (#12): -
- US 15 (#8): nadenken over of er een 'vorige stap' nodig is, of de startpagina voor de ontvanger nodig is.
- US 9 (#17): -
