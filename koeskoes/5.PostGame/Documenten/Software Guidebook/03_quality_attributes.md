# Quality Attributes

## Beveiliging (b.v. authentication, authorisation, data confidentiality, etc)

Er is een maximale video duur, dit is zodat de server genoeg video's kan opslaan. Bovendien kunnen QR-codes die niet naar een andere pagina binnen de plug-in leiden, niet gescand worden via de ingebouwde QR-scanner van Giftle ["0.giftle/src/components/Receiver/ScanQR.jsx"]. Dit zorgt ervoor dat de gebruiker niet naar onbekende/externe websites wordt gelokt.

## (Her)bruikbaarheid

Op het moment is de applicatie getest op de volgende apparaten/browsers:

### Browsers

- Chrome
- Edge
- Firefox

### Devices

- PC (3840x2160)
- PC (1920x1080)
- Android (OnePlus 9)

### Ondersteunde breedtes

- 320px

- 576px

- 768px

- 992px

- 1000px

- 1200px

- 1400px

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

[TODO] Als hier niet meer naar gekeken wordt, moet dit eruit gehaald worden

Om Giftle aan deze vereisten te laten voldoen, moet er rekening gehouden worden met het volgende:

* De gebruiker moet de algemene voorwaarden kunnen lezen en op basis hiervan akkoord gaan.
* De privacy wetgeving van Europa moet nagevolgd worden. Zie [autoriteitpersoonsgegevens](https://www.autoriteitpersoonsgegevens.nl/nl/over-privacy/wetten/internationale-privacywetgeving).
* Wettelijke vereisten voor langetermijnarchivering van bedrijfsgegevens. Zie [autoriteitpersoonsgegevens](https://www.autoriteitpersoonsgegevens.nl/nl/over-privacy/persoonsgegevens/bewaren-van-persoonsgegevens).
* Wettelijke vereisten voor log bestanden. Zie [logbestanden](https://cip-overheid.nl/media/1169/bid-operationale-producten-bir-015-logging-beleid-10.pdf).
* Wettelijke vereisten voor 'audit trails'. Zie [audit trails](https://www.graydon.nl/nl/resources/blog/strategie/wat-een-audit-trail).

Op dit moment hebben wij hier nog geen rekening mee gehouden, maar het is belangrijk om deze wetgevingen door te nemen en in overweging te nemen als Giftle daadwerkelijk voor het publiek ingezet gaat worden.

## Internationalisering (i18n) en localisatie (L10n)

* Comments van code is in het Engels geschreven.
* Code is in het Engels geschreven.
* Front-end is in het Nederlands geschreven.
* Ondersteuning voor meerdere talen (voor front-end) is niet aanwezig.

## Toegankelijkheid, prestatie, schaalbaarheid, beschikbaarheid en uitbreidbaarheid

Hier houden wij ons niet mee bezig.

