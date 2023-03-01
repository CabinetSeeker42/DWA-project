# External Interfaces

In dit hoofdstuk volgen de belangrijkste externe interfaces, waar ze voor nodig zijn en wat er zou kunnen gebeuren als deze uit zouden vallen.

## Web server -> SMTP-server

De e-mail is het primaire communicatiemiddel van Giftle. Als deze SMTP-server zou wegvallen, kan het proces nadat een Giftle besteld is niet gestart worden en zal er dus nooit een video geüpload, verstuurd en geopend kunnen worden.

### Hoe werkt het communiceren met de mailserver?

Ten eerste hebben wij de [Nodemailer](https://www.npmjs.com/package/nodemailer) package nodig van [Node.js](https://nodejs.org/en/). Deze module zorgt ervoor dat er gemakkelijk e-mails verzonden kunnen worden via een SMTP server, in ons geval is dat Google SMTP. 

SMTP is een protocol dat werkt volgens een "client-servermodel". Het komt er op neer dat de "client" het initiatief neemt tot communicatie met de "server", die op zijn tijd altijd beschikbaar en reactief is. De "client" is dus de verzendende partij en de "server" de ontvangende.

- In de map ```Express``` staan alle templates voor de e-mails in ```mailTemplate``` die gebruikt worden voor Giftle.
- In de map ```Express``` staan meerdere voorinstellingen in ```commonFunctions``` voor de mail.

#### Een werkende mailserver
Hierover is meer te vinden over in het hoofdstuk ```Werkende mail server``` in de [readme](https://github.com/HANICA-DWA/sep2021-project-koeskoes).
