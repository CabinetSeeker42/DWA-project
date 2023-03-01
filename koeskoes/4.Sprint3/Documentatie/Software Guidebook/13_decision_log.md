# Decision Log

Bij het kiezen van frameworks hebben we enkele belangrijke overwegingen moeten maken. Wij waren compleet vrij in het maken van deze keuzes en hebben daarom uitgebreid onderzoek gedaan. De keuzes hebben wij op de manier van "proof of concept" gemaakt. Een "proof of concept" is een realisatie van een bepaalde methode of een idee om de haalbaarheid ervan aan te tonen, of een demonstratie met als doel te verifiëren dat een concept of theorie praktisch potentieel heeft.

Hieronder volgen de belangrijkste keuzes die wij hebben moeten maken, inclusief de beargumentatie van elke beslissing.

## 1. Waarom Bootstrap _over foundation en materialize_?

Een snelle keuze waarom wij voor Bootstrap hebben gekozen is dat iedereen hiermee ervaring heeft. Aangezien er weinig tijd over blijft om aan zulke (CSS) frameworks te werken, hebben wij besloten om Bootstrap voor gemak te gaan gebruiken. Tevens buiten het feit dat Bootstrap één van de meest gebruikte en betrouwbare framework is.

## 2. Onderzoek SMTP

Er is onderzoek gedaan naar zeventien verschillende SMTP-services. Zeven hiervan zijn uitgekozen op basis van de hoeveelheid e-mails die verstuurd konden worden. In de conclusie is SendPulse het beste om te gebruiken als SMTP-services. Uiteindelijk hebben wij toch voor de Google SMTP gekozen, aangezien dit erg makkelijk was om te koppelen en de hoeeelheid e-mails per dag (500 mails) genoeg is.

## 3. Onderzoek bestand formaat

Er is onderzoek gedaan naar welk (video)bestandsformaat het beste is om te gebruiken. Hieruit is gekomen dat .mp4 het beste en het meeste gebruikt wordt.

## 4. Onderzoek integratie met webshops / plug-in

Uit dit onderzoek is gebleken dat het met een webshop koppelen als plug-in te veel werk kost. Hierdoor is er gekozen om een webshop winkelmand na te bouwen van Magento, zodat het proces goed zichtbaar blijft voor de opdrachtgever. De plug-in werkt dus nog niet met een echte webshop!

## 5. Onderzoek video converters

Uit dit onderzoek is gebleken dat FFmpeg de grootste en bekendste video converter is. Aangezien er weinig tijd was hebben wij hiervoor gekozen. Deze tool kan de nodige video formaten converteren.

## 6. Onderzoek QR stijling

Er is onderzoek gedaan naar hoe goed een QR-code leesbaar is als deze "gestyled" is. Uit het onderzoek blijkt dat een QR-code een hele metamorfose kan ondergaan, zolang de QR-code maar leesbaar is. Dit is te doen door het contrast tussen de kleuren hoog te houden en een "quiet zone" toe te voegen. Daarnaast moet de code vierkant zijn en mag er maximaal 30% van de code wegvallen voor de QR-code om te werken.

## 7. Onderzoek thema CSS

Er is onderzoek gedaan naar de beste manier om snel en gemakkelijk te laten zien om van thema te veranderen zonder een backend systeem te hebben. Er waren drie mogelijkheden hiervoor, maar custom CSS was toch het meest eenvoudig om te gebruiken. Daarom hebben wij drie extra thema bestanden, zodat wij kunnen laten zien dat er van thema veranderd kan worden van de plug-in voor de webshops.

<!--
Intent

The purpose of this section is to simply record the major decisions that have been made, including both the technology choices (e.g. products, frameworks, etc) and the overall architecture (e.g. the structure of the software, architectural style, decomposition, patterns, etc). For example:

• Why did you choose technology or framework “X” over “Y” and “Z”?
• How did you do this? Product evaluation or proof of concept?
• Were you forced into making a decision about “X” based upon corporate policy or enterprise architecture strategies?
• Why did you choose the selected software architecture? What other options did you consider?
• How do you know that the solution satisfies the major non-functional requirements?
• etc
-->
