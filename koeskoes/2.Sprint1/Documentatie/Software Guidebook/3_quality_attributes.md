# Quality Attributes

## Prestatie (b.v. latency and throughput)

De performance qua latency en throughput moet goed zijn, wat inhoudt dat er niet te lang gewacht moet worden op data vanuit de database of de API. Tevens moet de website gebruiksvriendelijk en makkelijk te navigeren zijn.

## Schaalbaarheid (b.v. data and traffic volumes)

Voor de development is schaalbaarheid niet nodig, maar in de productie waarschijnlijk wel. Dit in verband met hoeveel de plug-in gebruikt wordt in een webshop en de hoeveelheid gebruikers die de plug-in gebruiken.

## Beschikbaarheid (b.v. uptime, downtime, scheduled maintenance, 24x7, 99.9%, etc)

De plug-in moet 24/7 beschikbaar zijn, tenzij er onderhoud aan de plug-in is. Als dit zo is, zal het onderhoud minimaal 24 uur van te voren aangegeven moeten worden aan de gebruikers.

## Beveiliging (b.v. authentication, authorisation, data confidentiality, etc)

Er kan een maximale bestandsgrootte ingesteld worden, zodat de server video's kan opslaan. Bovendien kunnen QR-codes die niet naar een andere pagina binnen de plug-in leiden, niet gescand worden via de ingebouwde QR-scanner van Giftle. Dit zorgt ervoor dat de gebruiker niet naar onbekende/externe websites wordt gelokt. Ten slotte worden gegevens niet aan "third-party companies" verkocht.

## Uitbreidbaarheid

Uitbreidbaarheid is mogelijk. De gewenste aanpak is wel om de scrum methode te gebruiken met een "project board" en eventuele "sprints" voor de "user stories" met de daarbijbehorende taken. Op deze manier is uitbreiding van het project op een efficiënte manier mogelijk. Dit is vanaf het begin van het project exact op deze manier gedaan .

## (Her)bruikbaarheid

Ten eerste kunnen door het gebruik van componenten en functies delen van de code opnieuw gebruikt worden zonder teveel herhaling. Ook moet de plug-in gebruikt kunnen worden in de browser Safari op alle Apple-devices en in de browser Chrome op alle Windows- en Android-devices. Gebruikers moeten op zowel smartphone als computer (met webcam en microfoon) de plug-in kunnen gebruiken. Voor iPhones moet de plug-in vanaf de iPhone 6 gebruikt kunnen worden. Ten slotte hebben knoppen op de frontend de voorwaarde dat ze een functie hebben.

## Management en toezicht

De mogelijkheid moet er zijn om het systeem op enkele stukken aan te passen, daarom worden er met meerdere 'react components' gewerkt.

### Betrouwbaarheid

De plug-in is afhankelijk van het volgende:
* Webserver
* Mailserver
* Database
* Internetverbinding
* Browser
* Camera
* Microfoon

## Wettelijke, nalevings- en regelgevende vereisten (b.v. data protection act)

Om Giftle aan deze vereisten te laten voldoen, moet er rekening gehouden worden met het volgende:
* De gebruiker moet de algemene voorwaarden kunnen lezen en op basis hiervan akkoord gaan.
* De privacy wetgeving van Europa moet nagevolgd worden. Zie [autoriteitpersoonsgegevens](https://www.autoriteitpersoonsgegevens.nl/nl/over-privacy/wetten/internationale-privacywetgeving).
* Wettelijke vereisten voor langetermijnarchivering van bedrijfsgegevens. Zie [autoriteitpersoonsgegevens](https://www.autoriteitpersoonsgegevens.nl/nl/over-privacy/persoonsgegevens/bewaren-van-persoonsgegevens).
* Wettelijke vereisten voor log bestanden. Zie [logbestanden](https://cip-overheid.nl/media/1169/bid-operationale-producten-bir-015-logging-beleid-10.pdf).
* Wettelijke vereisten voor 'audit trails'. Zie [audit trails](https://www.graydon.nl/nl/resources/blog/strategie/wat-een-audit-trail).

## Internationalisering (i18n) en localisatie (L10n)

* Comments van code is in het Engels geschreven.
* Code is in het Engels geschreven.
* Front-end is in het Nederlands geschreven.
* Ondersteuning voor meerdere talen (voor front-end) is niet aanwezig.

## Toegankelijkheid

Toegankelijkheid is alleen beschikbaar voor het development team en de opdrachtgever.

<!--
Intent

This section is about summarising the key quality attributes and should answer the following types of questions:

* Is there a clear understanding of the quality attributes that the architecture must satisfy?
* Are the quality attributes SMART (specific, measurable, achievable, relevant and timely)?
* Have quality attributes that are usually taken for granted been explicitly marked as out of scope if they are not needed? (b.v. “user interface elements will only be presented in English” to indicate that multi-language support is not explicitly catered for)
* Are any of the quality attributes unrealistic? (b.v. true 24x7 availability is typically very costly to implement inside many organisations)

In addition, if any of the quality attributes are deemed as “architecturally significant” and therefore influence the architecture, why not make a note of them so that you can refer back to them later in the document.
-->
