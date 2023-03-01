# Meeting scrumcoach

- Sprint review om 12 uur in C2.04. Stukje interessante code laten zien bij sprint review voor Lars (per persoon).
- Ook een installatiegids maken voor de programmeurs maken, maar daar gaan we het later nog over hebben (hoeft nu nog niet, pas bij eindverantwoording). QR-code goed uitleggen voor komende programmeurs. Maar is nu nog niet nodig.
- Voor de eindverantwoording: netwerkverkeer in redux, nu is het te onduidelijk. Ook bijhouden van huidige en vorige pagina is redux-state.

## Deployen naar de server

- Moet per user story naar de server gebuild worden (in DoD). Naar server gooien als code gereviewd is.
- TO DO: Komende week moet iedereen naar de server kunnen builden.

## Testen

- Testen of de validaties binnen het model werken (unique geeft een fout als tweemaal hetzelfde geinsert wordt, et cetera).
- Zelfgemaakte functies testen.
- Elke functie moet in een aparte test getest worden. Als je een functie nodig hebt binnen een test, moet deze eerst getest worden en kan deze daarna wel gebruikt worden binnen de test van een andere functie.
- Bijv. bij common functies betere strings meegeven aan de testen zelf (specifieker). Aan de namen kunnen zien wat er precies getest wordt.

## C4-modellen

### 1. Context

- [x] Bij het eerste C4-model even pijltjes van de SMTP-server naar de koper en ontvanger trekken, net als in de andere modellen.

### 2. Container

- [x] Proberen src-mapnaam aan te passen naar naar SPA. Zorg dat naamgeving mappen overeenkomt met de code. Dit eigenlijk in alle diagrammen, zodat alle diagrammen ook mooi overeenkomen.

### 3. Component

#### Client

- [ ] Indeling van buyer, receiver en employee in het model uitleggen. In navigatie zelf (niet alleen bij het importeren) ook de verdeling doorvoeren. Homepagina is buyer, daarna buyer/upload, buyer/record, et cetera. Zo blijft het duidelijk. Zet bij de buyer, receiver en employee dat het pagina's zijn, bij de common dat het geen pagina's zijn.
- [ ] Als het allemaal pages zijn, noem ze ook daadwerkelijk page. Dit maakt het duidelijker.
- [x] In de code is het niet handig om alle redux actions en reducers in componenten te zetten. Daarom Redux als component beschouwen en in het diagram zetten.
- [x] Geen 'gebruikt' naar de API, maar duidelijk maken dat het requests zijn.

#### Server

- [x] In de code moet generateUniqueRandomCode verplaatst worden naar onder het uploadmodel, waardoor de pijl van commonFunctions naar de database verdwijnt.
- [x] Bij de pijl naar routes wordt i.p.v. 'gebruikt' 'configureert'.

## Software guidebook

- [x] Meer tekst/toelichting bij de diagrammen.

### 04. Constraints

- [x] I.p.v. wat er nu staat: hoelang we met javascript, node, redux, et cetera bezig zijn. 

### 07. External interfaces

- [x] Duidelijker uitleggen hoe we met de mailserver communiceren. (Misschien anders bij diagram, ligt eraan hoeveel het is).

### 10. Infrastructure

- [x] Infrastructure hoeft niet aangezien deze zo makkelijk is dat alle informatie binnen deployment staat. Dit noteren in het hoofdstuk.

### 11. Deployment

- [x] Bij de server info, details over de server beschrijven.
- [x] Blokjes binnen het diagram zijn i.p.v. wat het nu is, de blokjes uit het containerdiagram.
