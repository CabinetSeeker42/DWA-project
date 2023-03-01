
## DoD Items

### Alles moet gedocumenteerd zijn

-   Het software guidebook moet bijgewerkt zijn
-   Overal zijn wireframes van gemaakt
-   Bij onderzoeken is er een goed opgesteld onderzoeksplan

### Alles moet gebruiksvriendelijk zijn

-  De pagina's moeten duidelijk aangeven bij welke stap de gebruiker is en waar hij naartoe kan navigeren.
-  Componenten die bij elkaar horen moeten duidelijk gegroepeerd zijn.
-  Componenten van dezelfde soort moeten dezelfde stijling krijgen om uniformiteit te behouden.
-  Het lettertype en de knoppen moeten voor de gemiddelde gebruiker goed leesbaar zijn.
-  De gebruiker wordt vriendelijk en respectvol benaderd in uitlegteksten
-  De gebruiker wordt vriendelijk en respectvol benaderd in foutmeldingen
-  De gebruiker moet goede en duidelijke feedback krijgen bij veranderingen binnen de pagina (b.v. camera stopt met opnemen of camera is aan het opnemen)
-  Het gebruik van symbolen moet gebruiker de extra feedback geven bij het gebruik van de plug-in
-  Knoppen moeten duidelijk knoppen zijn (ook in de mail)
-  Als een gebruiker ergens niet bij kan is dit duidelijk aangegeven  (disabled input fields)

### Alle code moet gereviewd zijn

-  De geschreven variabel- & functienamen moeten in lowerCamelCase geschreven zijn.
-  Bij elke functie moet commentaar geschreven  staan wat de functie doet en hoe je deze moet gebruiken, eventueel binnen de functie commentaar als er tijdens de code review wat onduidelijkheid plaats vindt.
-  Asynchrone functies moeten gebruik maken van async en await, .then en promises zijn niet toegestaan.
-  Zo veel mogelijk gebruik gemaakt van const en totaal geen gebruik gemaakt van var.
-  De code syntax is in het Engels geschreven
-  Code comments zijn in het Engels
-  Code comments zijn volgens de Javadoc standaard geschreven
-  Code is geformateerd met de extension Prettier - Code formatter
-  Indent using Spaces moet op 2 staan
-  Functies hebben zo min mogelijk zijeffecten 
-  Code is duidelijk en in een oogopslag te begrijpen
-  Alle functienamen geven duidelijke beschrijvingen van de functie. Bijvoorbeeld: generateRandomCode --> generateNonExistingRandomCode, zodat duidelijk wordt dat de code altijd een niet bestaande code is.
-  Waar mogelijk worden er Mongoose Model Methods gebruikt.
-  Alle server interacties zijn RESTful
-  Er wordt zoveel mogelijk code in de Mongoose Model Methods gestopt.
-  Er wordt zoveel mogelijk gebruik gemaakt van Redux. 
-  In de Redux (state) store staan bijvoorbeeld alle API calls en websockets.
-  In de Local State staan de states die near-realtime aanpassingen moeten doorgeven aan technische componenenten (bijvoorbeeld camera aansturing) 

### Alle features moeten getest zijn

-  Alle features moeten handmatig getest zijn.
-  Automatische Jest tests worden gebruikt bij serverside code (b.v. database en REST api calls)
-  Er worden goede E2E tests gebruikt, als deze van toepassing zijn.
-  Er mogen geen fouten uit de testen komen.

### Acceptatie criteria

-  Voldoet aan de acceptie criteria per item
