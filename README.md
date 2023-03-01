# sep2021-project-koeskoes

<img src="https://upload.wikimedia.org/wikipedia/commons/5/5a/Cuscus1.jpg" alt="koeskoes" width="200"/>

## Giftle

Meer informatie over de opdracht Giftle zelf vind je in het [hoofdstuk Context](https://github.com/HANICA-DWA/sep2021-project-koeskoes/blob/main/koeskoes/4.Sprint3/Documentatie/Software%20Guidebook/01_context.md) van het [Software Guidebook](https://github.com/HANICA-DWA/sep2021-project-koeskoes/tree/main/koeskoes/4.Sprint3/Documentatie/Software%20Guidebook).

In deze README is verder te vinden:

- [Installatiegids Giftle voor developers](https://github.com/HANICA-DWA/sep2021-project-koeskoes#installatiegids-giftle-voor-developers)
- [Mailserver gebruiken](https://github.com/HANICA-DWA/sep2021-project-koeskoes#mailserver-gebruiken)
- [Runnen van de testen](https://github.com/HANICA-DWA/sep2021-project-koeskoes#runnen-van-de-testen)

## Installatiegids Giftle voor developers

### Installatie: algemeen

Om goed voorbereid te zijn op deze installatie en om de installatie helemaal goed te krijgen, is het van belang dat de meest recente versies van Node.js en MongoDB zijn geïnstalleerd:

- [Node.js](https://nodejs.org/en/)
- [MongoDB](https://www.mongodb.com/try/download/community)

### Installatie: FFmpeg

Giftle maakt voor het verwerken van videos gebruik van FFmpeg, wat lokaal op je computer geïnstalleerd moet worden. Verdere uitleg staat in de guides hieronder.

- [FFmpeg installatie Windows](https://www.wikihow.com/Install-FFmpeg-on-Windows)
- [FFmpeg installatie MacOS](https://trac.ffmpeg.org/wiki/CompilationGuide/macOS)
- [FFmpeg installatie Linux - Ubuntu 18.04](https://linuxize.com/post/how-to-install-ffmpeg-on-ubuntu-18-04/)

### Installatie: Project Giftle

Nu bovengenoemde software geïnstalleerd is, kun je verder met het installeren van het project Giftle. Om het project Giftle online te zetten klik je op de volgende link: [Giftle online zetten](https://github.com/HANICA-DWA/sep2021-project-koeskoes/blob/main/koeskoes/4.Sprint3/Documentatie/Software%20Guidebook/11_deployment.md).

- Clone deze repository.

- Start mongodb op als dit nog niet gedaan is.

- Open 2 terminals:
  
  - In terminal 1 navigeer naar `/locatie/van/de/repo/sep2021-project-koeskoes/koeskoes/0.Giftle/`
  
  - In terminal 2 navigaar naar `/locatie/van/de/repo/sep2021-project-koeskoes/koeskoes/0.Giftle/Express/`

- In terminal 2 volg de volgende stappen

```
npm i of npm install
node app.js
```

```
Output
Server started on port 4000
```

- Wanneer de Express server is opgestart, volg de volgende stappen in terminal 1

```
npm i of npm install
npm start
```

```
Output
Compiled successfully!
```

- Nu zal de React applicatie jouw browser naar keuze openen en naar de volgende pagina navigeren:

`http://localhost:3000/`

- Deze pagina zal een 404 bericht moeten weergeven.

### Beschikbare URL's

Zodra de React applicatie is opgestart kan je naar de volgende URL's navigeren. 

> Voor alle URL's waar :textCode in staat moet een textCode beschikbaar zijn in de database om op deze pagina te komen.

```
http://localhost:3000/checkout
http://localhost:3000/checked-out
http://localhost:3000/magento-checked-out
http://localhost:3000/orderControl/:textCode
http://localhost:3000/buyer/noTextCode  - Alleen bereikbaar via de orderControl pagina
http://localhost:3000/buyer             - Alleen bereikbaar via de orderControl pagina
http://localhost:3000/buyer/create      - Alleen bereikbaar via de orderControl pagina
http://localhost:3000/buyer/thankyou
http://localhost:3000/buyer/reaction/:textCode
http://localhost:3000/receiver
http://localhost:3000/receiver/qr-code
http://localhost:3000/receiver/scan
http://localhost:3000/receiver/textcode
http://localhost:3000/receiver/watchvideo/:textCode
http://localhost:3000/receiver/watchSharedVideo/:textCode
http://localhost:3000/receiver/reaction/:textCode
http://localhost:3000/receiver/text-reaction/:textCode
http://localhost:3000/receiver/video-reaction/:textCode
http://localhost:3000/receiver/reaction-sent
http://localhost:3000/receiver/reaction-already-sent
http://localhost:3000/employee/checkorders
```

## Mailserver gebruiken

- Omdat deze applicatie gebruik maakt van de Google SMTP server moet je een Google account hebben met een Google mail.

- Volg vervolgens [deze](https://support.google.com/mail/answer/185833?hl=en) stappen om een `App password` te maken voor de mail.

- Maak een `.env` bestand in de volgende locatie:

`/locatie/van/de/repo/sep2021-project-koeskoes/koeskoes/0.Giftle/Express/`

- Maak vervolgens 3 variabelen aan in dit bestand:

```
EMAILUSERNAME=<Google E-mail>
EMAILPASSWORD=<Google App Password>
MAILTIMEOUT=<Wachttijd in milliseconden>
```

## Maximum bestandsgrootte

- Navigeer naar de volgende map:

`/locatie/van/de/repo/sep2021-project-koeskoes/koeskoes/0.Giftle/Express`

- Maak een `.env` bestand aan als deze nog niet bestaat.

- Voeg in dit bestand de volgende regel toe

```
MAXUPLOADSIZE=<Bestandsgrootte in bytes>
```

## Hostname en websocket verbinding

- Navigeer naar de volgende map:

`/locatie/van/de/repo/sep2021-project-koeskoes/koeskoes/0.Giftle/Express`

- Maak een `.env` bestand aan als deze nog niet bestaat.

- Voeg in dit bestand de volgende regels toe

```
CLIENTHOSTNAME=<Bijvoorbeeld "http://localhost:3000">
SERVERHOSTNAME=<Bijvoorbeeld "http://localhost:4000">
```

- Navigeer vervolgens naar de volgende map:

`/locatie/van/de/repo/sep2021-project-koeskoes/koeskoes/0.Giftle`

- Maak een `.env` bestand aan als deze nog niet bestaat.

- Voeg in dit bestand de volgende regels toe

```
REACT_APP_CLIENTHOSTNAME=<Bijvoorbeeld "http://localhost:3000">
REACT_APP_SERVERHOSTNAME=<Bijvoorbeeld "http://localhost:4000">
REACT_APP_WEBSOCKETPROTOCOL=<"ws" of "wss">
```



## Runnen van de testen

Om alle testen goed te kunnen runnen moet de mailserver ingesteld zijn en moet deze volledig werken. Ook moet het .env bestand correct ingesteld zijn volgens bovenstaande stappen.

### React testen

- Navigeer naar de volgende map:

`/locatie/van/de/repo/sep2021-project-koeskoes/koeskoes/0.Giftle/`

- Voer het volgende commando uit:

```
npm test
```

### E2E testen

- Navigeer naar de volgende map:

`/locatie/van/de/repo/sep2021-project-koeskoes/koeskoes/0.Giftle/`

- Voer het volgende commando uit:

```
node ./Express/seed.js
```

```
Output
The seed has successfully been planted
```

```
npm run e2e
```

### Unit testen

- Navigeer naar de volgende map:

`/locatie/van/de/repo/sep2021-project-koeskoes/koeskoes/0.Giftle/Express/`

- Open het .env bestand en voeg de volgende regel toe

```
ACCEPTEDVIDEOFORMATS="3gp f4v mkv mov mp4 ogg ogv webm m4v"
```

- Voer het volgende commando uit:

```
npm test
```
