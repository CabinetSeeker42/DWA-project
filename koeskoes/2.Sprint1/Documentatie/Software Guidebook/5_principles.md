# Principles

Elk project heeft zijn eigen regels/ principes. Deze kunnen gaan over de code, maar ook over hoe alles eruit gaat zien. Dit zijn de principes uit dit project;

## Code

- De geschreven variabel- & functienamen moeten in lowerCamelCase geschreven zijn.
- Bij elke functie moet commentaar geschreven staan wat de functie doet en hoe je deze moet gebruiken, eventueel binnen de functie commentaar als er tijdens de code review wat onduidelijkheid plaats vindt.
- Asynchrone functies moeten gebruik maken van async en await, .then en promises zijn niet toegestaan.
- Zo veel mogelijk gebruik gemaakt van const en totaal geen gebruik gemaakt van var.
- De code syntax is in het Engels geschreven
- Code comments zijn in het Engels
- Code comments zijn volgens de Javadoc standaard geschreven
- Code is geformateerd met de extension Prettier - Code formatter
- Indent using Spaces moet op 2 staan
- Functies kunnen complex worden, zorg ervoor dat de comments dit goed uitleggen
- Herhaal jezelf zo min mogelijk. Gebruik hier functies voor of maak components aan.
- Design components op een manier dat ze zo min mogelijk tegelijk doen. Als je een nieuwe functionaliteit moet maken, kan je hier een aparte component voor maken.
- Maak geen volledige moeilijke functionaliteiten als hier ook een module voor is. Kijk bijvoorbeeld naar de QR-code scanner.
- Gebruik, daar waar nodig, hooks.
- Interacties met de database gebeuren met de Mongoose model methode
- Functies hebben zo min mogelijk zijeffecten
- Alle API-calls zijn RESTful.

## Gebruiksvriendlijkheid

- Is het uitvoeren te complex voor een developer, dan kan een gebruiker het al helemaal niet gebruiken.
- De pagina's moeten duidelijk aangeven bij welke stap de gebruiker is en waar hij naartoe kan navigeren.
- Componenten die bij elkaar horen moeten duidelijk gegroepeerd zijn.
- Componenten van dezelfde soort moeten dezelfde stijling krijgen om uniformiteit te behouden.
- Foutmeldingen moeten bij voorkomende errors verschijnen, zodat de gebruiker weet dat en wat er fout gaat
- Het lettertype en de knoppen moeten voor de gemiddelde gebruiker goed leesbaar zijn.

## Kwaliteit

- Gebruik de plug-in prettier voor het formateren van de code
- Testen wordt met Unit Testing gedaan
- De testen moeten uitgevoerd zijn met jest volgens de happy flow + minimaal een (1) alternatieve flow.
- Er mogen geen fouten uit de testen komen.
- Foutmeldingen moeten bij voorkomende errors verschijnen
- Documenteren is goed, maar houd het kort
- Push je geleverde werk pas als het werkt
- Implementeer geen dingen die totaal onnodig zijn
- Vind het wiel niet opnieuw uit
- Tijd is duur. Blijf niet te lang op een probleem zitten en vraag anderen om hulp.

<!--
Intent

The purpose of this section is to simply make it explicit which principles you are following. These could have been explicitly asked for by a stakeholder or they could be principles that you (i.e. the software development team) want to adopt and follow.

Architectural layering strategy.
• No business logic in views.
• No database access in views.
• Use of interfaces.
• Always use an ORM.
• Dependency injection.
• The Hollywood principle (don’t call us, we’ll call you).
• High cohesion, low coupling.
• Follow SOLID (Single responsibility principle, Open/closed principle, Liskov substitution principle, Interface segregation principle, Dependency inversion principle).
• DRY (don’t repeat yourself).
• Ensure all components are stateless (e.g. to ease scaling).
• Prefer a rich domain model.
• Prefer an anaemic domain model.
Principles 192
• Always prefer stored procedures.
• Never use stored procedures.
• Don’t reinvent the wheel.
• Common approaches for error handling, logging, etc.
• Buy rather than build.
• etc
-->
