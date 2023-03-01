# Principles

Elk project heeft zijn eigen regels/ principes. Deze kunnen gaan over de code, maar ook over hoe alles eruit gaat zien. Dit zijn de principes uit dit project;

## Code

- De geschreven variabel- & functienamen moeten in lowerCamelCase geschreven zijn.
- Bij elke functie moet commentaar geschreven staan wat de functie doet en hoe je deze moet gebruiken, eventueel binnen de functie commentaar als er tijdens de code review wat onduidelijkheid plaats vindt.
- Asynchrone functies moeten gebruik maken van [async en await](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await), .then en promises zijn niet toegestaan.
- Zo veel mogelijk gebruik gemaakt van const en totaal geen gebruik gemaakt van var.
- De code syntax is in het Engels geschreven.
- Code comments zijn in het Engels.
- Code comments zijn volgens de [Javadoc](https://www.oracle.com/nl/technical-resources/articles/java/javadoc-tool.html) standaard geschreven.
- Code is geformateerd met de extension [Prettier - Code formatter](https://prettier.io/).
- Indent using Spaces moet op 2 staan.
- Functies kunnen complex worden, zorg ervoor dat de comments dit goed uitleggen.
- Herhaal jezelf zo min mogelijk. Gebruik hier functies voor of maak components aan.
- Design components op een manier dat ze zo min mogelijk tegelijk doen. Als je een nieuwe functionaliteit moet maken, kan je hier een aparte component voor maken.
- Maak geen volledige moeilijke functionaliteiten als hier ook een module voor is. Kijk bijvoorbeeld naar de QR-code scanner.
- Gebruik, daar waar nodig, React [Hooks](https://reactjs.org/docs/hooks-intro.html).
- Interacties met de database gebeuren met de [Mongoose model methode](https://mongoosejs.com/docs/2.7.x/docs/methods-statics.html).
- Functies hebben zo min mogelijk zijeffecten.
- Alle API-calls zijn [RESTful](https://restfulapi.net/).
- Er wordt zoveel mogelijk code in de Mongoose Model Methods gestopt.
- Er wordt zoveel mogelijk gebruik gemaakt van Redux.
- In de Redux (state) store staan bijvoorbeeld alle API calls en websockets.
- In de Local State staan de states die near-realtime aanpassingen moeten doorgeven aan technische componenenten (bijvoorbeeld camera aansturing)
- Het afrekenproces valt buiten de Redux regels, aangezien dit een tijdelijke oplossing voor Magento was. Magento is namelijk nagemaakt en niet officieel gebruikt (dit moet nog wel gebeuren).

## Gebruiksvriendlijkheid

- Is het uitvoeren te complex voor een developer, dan kan een gebruiker het al helemaal niet gebruiken.
- De pagina's moeten duidelijk aangeven bij welke stap de gebruiker is en waar hij naartoe kan navigeren.
- Componenten die bij elkaar horen moeten duidelijk gegroepeerd zijn.
- Componenten van dezelfde soort moeten dezelfde stijling krijgen om uniformiteit te behouden.
- Foutmeldingen moeten bij voorkomende errors verschijnen, zodat de gebruiker weet dat en wat er fout gaat.
- Het lettertype en de knoppen moeten voor de gemiddelde gebruiker goed leesbaar zijn.
- De gebruiker wordt vriendelijk en respectvol benaderd in uitlegteksten
- De gebruiker wordt vriendelijk en respectvol benaderd in foutmeldingen
- De gebruiker moet goede en duidelijke feedback krijgen bij veranderingen binnen de pagina (b.v. camera stopt met opnemen of camera is aan het opnemen)
- Het gebruik van symbolen moet gebruiker de extra feedback geven bij het gebruik van de plug-in
- Knoppen moeten duidelijk knoppen zijn (ook in de mail)
- Als een gebruiker ergens niet bij kan is dit duidelijk aangegeven (disabled input fields)

## Kwaliteit

- Gebruik de plug-in prettier voor het formateren van de code.
- Testen wordt met Unit Testing gedaan.
- De automatische testen moeten uitgevoerd zijn met jest volgens de happy flow + minimaal een (1) alternatieve flow.
- Front-end E2E testen worden met Puppeteer gedaan
- Er mogen geen fouten uit de testen komen.
- Foutmeldingen moeten bij voorkomende errors verschijnen.
- Documenteren is goed, maar houd het kort en krachtig.
- Implementeer geen dingen die totaal onnodig zijn.

