# External Interfaces

In dit hoofdstuk volgen de belangrijkste externe interfaces, waar ze voor nodig zijn en wat er zou kunnen gebeuren als deze uit zouden vallen.

## Web server

Ten eerste is het belangrijkste deel de server, die de externe opdrachtgever voor ons beschikbaar stelt. Deze is nodig zodat er QR-codes vanaf andere apparaten gescand kunnen worden en zodat er mails verzonden kunnen worden. Mocht de server wegvallen, dan verliest Giftle zijn volledige werking, aangezien alle communicatie via de mail plaatsvindt.

De server heeft de volgende eigenschappen:

- Domeinnaam: ...
- Opslag: 50GB
- Werkgeheugen: 1GB

## Web server -> database

De connectie tussen de server en de database is ook essentieel voor Giftle. Hierin worden alle bestellingen opgeslagen, samen met de video's. Als de connectie tussen server en database niet meer zou bestaan, kunnen er geen nieuwe Giftles meer besteld worden en geen video's worden geüpload.

## Web server -> SMTP-server

Zoals eerder vermeld is, is e-mail het primaire communicatiemiddel van Giftle. Als deze server zou wegvallen, kan het proces nadat een Giftle besteld is niet gestart worden en zal er dus nooit een video geüpload, verstuurd en geopend kunnen worden.

<!--
The purpose of this section is to answer the following types of questions:

• What are the key external interfaces?
• Has each interface been thought about from a technical perspective?
• Has each interface been thought about from a non-technical perspective? – Who has ownership of the interface?
-->
