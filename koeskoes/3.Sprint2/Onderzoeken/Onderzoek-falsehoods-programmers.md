# Onderzoek Falsehoods Programmers

"Falsehoods Programmers Believe About..." zijn leugens waarvan je aanvankelijk dacht dat het waar was, maar in werkelijkheid is bewezen dat het niet waar is. In dit onderzoek gaan wij kijken naar wat de beste oplossingen zijn qua karakters voor bepaalde data's en datatypes. Er wordt dus gekeken naar wat er over het algmeen de meest gebruikte data is binnen projecten.

Bron: https://github.com/kdeldycke/awesome-falsehood

## 1. Datum en tijd

- Er zitten altijd 24 uur in een dag
- Er zitten 30 of 31 dagen in een maand
- Een jaar heeft 365 dagen
- Februari is altijd 28 dagen lang
- De tijdzone waarin een programma moet draaien verandert nooit
- De systeemklok zal nooit worden ingesteld op een tijd in het verre verleden of de verre toekomst
- Een minuut op de systeemklok heeft precies dezelfde duur als een minuut op een andere klok
- Een tijdstempel met voldoende nauwkeurigheid kan veilig als uniek worden beschouwd
- De duur van één minuut op de systeemklok zou nooit meer dan een uur zijn
- De lokale tijdsverschuiving (vanaf UTC) verandert niet tijdens kantooruren
- Mijn software wordt alleen intern/lokaal gebruikt, dus ik hoef me geen zorgen te maken over tijdzones
- Ik kan zelf gemakkelijk een tijdzonelijst bijhouden
- De tijd verstrijkt met dezelfde snelheid op de top van een berg en op de bodem van een vallei

Bronnen: [Datum en tijd](https://infiniteundo.com/post/25326999628/falsehoods-programmers-believe-about-time) & [META](https://spaceninja.com/2015/12/08/falsehoods-programmers-believe/)

## 2. E-mails

- E-mailadressen kunnen meerdere '@'s bevatten
- Het procentteken kan leiden tot doorgeven van ongewenste data (security problemen)
- Verschillende leestekens zijn toegestaan
- "Strings" met aanhalingstekens laten je de regels overtreden
- Een e-mail is hoofdlettergevoelig
- Er kunnen emoji's in e-mails
- Er kunnen geïnternationaliseerde domeinnamen gebruikt worden
- U kunt domeinnamen zonder punt hebben
- Uw "domein" kan een IP-adres zijn
- 'Van' en 'Naar' kunnen spaties bevatten

Bronnen: [E-mails](https://www.netmeister.org/blog/email.html) & [META](https://spaceninja.com/2015/12/08/falsehoods-programmers-believe/)

## 3. Multimediums (videos, etc.)

- decodering is bit-exact, dus de gebruikte decoder heeft geen invloed op de kwaliteit
- hardware-decodering betekent dat ik me geen zorgen hoef te maken over de prestaties
- hardware-decodering is altijd sneller dan software-decodering
- Ik kan de klok van het scherm nauwkeurig meten
- Ik kan de audioklok nauwkeurig meten
- Ik kan de audioklok uitsluitend gebruiken voor 'timing'
- Ik kan de videoklok uitsluitend gebruiken voor 'timing'
- alle videoframes zijn uniek
- alle videoframes worden in volgorde gedecodeerd
- alle videobronnen zijn op te zoeken in
- alle videobestanden hebben een 8-bits kleur per kanaal
- videobestanden hebben dezelfde verversingssnelheid in de hele stream
- videobestanden hebben dezelfde resolutie in de hele stream

Bronnen: [Multimedia](https://haasn.dev/posts/2016-12-25-falsehoods-programmers-believe-about-%5Bvideo-stuff%5D.html) & [META](https://spaceninja.com/2015/12/08/falsehoods-programmers-believe/)

## 4. Identiteit (namen, etc.)

- De namen van mensen veranderen niet
- De namen van mensen hebben een volgorde
- Mijn systeem heeft nooit te maken met chinese namen
- Er kan gerust vanuit gaan dat het woordenboek met slechte woorden, geen namen van mensen bevatten
- Mensen hebben namen
- De namen van mensen zijn bijna wereldwijd uniek
- De namen van mensen veranderen, maar alleen bij een bepaalde opgesomde reeks gebeurtenissen
- De namen van mensen zijn geschreven in ASCII
- De namen van mensen worden geschreven in een enkele tekenset
- De namen van mensen worden allemaal in kaart gebracht in Unicode-codepunten
- Namen van personen zijn hoofdlettergevoelig
- De voor- en achternaam van mensen zijn noodzakelijkerwijs verschillend
- Mensen hebben achternaam, familienamen of iets anders dat wordt gedeeld door mensen die worden erkend als hun familieleden

Bronnen: [Identiteit](https://www.kalzumeus.com/2010/06/17/falsehoods-programmers-believe-about-names/) & [META](https://spaceninja.com/2015/12/08/falsehoods-programmers-believe/)

## 5. Telefoonnummer

- Een persoon heeft een telefoonnummer
- Er kan naar elk telefoonnummer gebeld worden
- Een persoon heeft maar één telefoonnummer
- Een telefoonnummer identificeert een persoon op unieke wijze
- Telefoonnummers kunnen niet opnieuw worden gebruikt
- Telefoonnummers die vandaag geldig zijn, zijn altijd geldig
- Elk landnummer komt overeen met precies één land
- Elk land heeft slechts één landnummer
- Een telefoonnummer is overal bereikbaar
- Je kunt een sms naar elk telefoonnummer sturen
- Alleen mobiele telefoons kunnen sms-berichten ontvangen
- Er zijn slechts twee manieren om een ​​telefoonnummer te bellen: binnenlands en vanuit het buitenland
- Alle geldige telefoonnummers horen bij een land

Bronnen: [Telefoonnummer](https://github.com/google/libphonenumber/blob/master/FALSEHOODS.md) & [META](https://spaceninja.com/2015/12/08/falsehoods-programmers-believe/)

## 6. Adres

- Geen gebouwen zijn genummerd nul
- Een weg heeft altijd een naam
- Een enkele postcode zal groter zijn dan een enkel gebouw
- Je krijgt niet meerdere postcodes per gebouw
- Adressen hebben een redelijk aantal tekens - minder dan 100
- Een adres begint met, of bevat in ieder geval een gebouwnummer
- Een straatnaam bevat geen nummer
- Een enkele postcode is groter dan een enkel gebouw
- Een postcode komt overeen met een enkele stad
- Gebouwnummers verschijnen voor straatnamen
- Een klant wil alleen herinneringen die naar één adres worden gemaild
- Elke persoon heeft precies één adres
- Echte plaatsnamen bevatten geen grove woorden

Bronnen: [Adres](https://www.mjt.me.uk/posts/falsehoods-programmers-believe-about-addresses/) & [META](https://spaceninja.com/2015/12/08/falsehoods-programmers-believe/)

## 7. Aantal karakters voor b.v. naam, e-mail, etc.

- Rekening houdende met een (subjectieve) limitatie 'opslag capaciteit' dan zou hier een maximaal aantal karakters goed voor zijn. Dit komt zodat elk gebruiker dan een maximaal aantal karakters heeft voor een invoerveld, waardoor er dus gelimiteerd wordt qua opslag capaciteit per persoon.
- Rekening houdende met een (objectieve) limitatie 'beveiliging', dan komt het volgende aan bod: "Elke interface die gebruikersinvoer accepteert en internaliseert, moet absoluut zonder twijfel de invoer behandelen als een bedreiging die moet worden gevalideerd en gezuiverd. De invoer moet worden gevalideerd om ervoor te zorgen dat deze van het juiste type, de juiste lengte, het formaat en het juiste bereik is".

Bron: https://ux.stackexchange.com/questions/55529/what-should-the-character-limits-for-first-last-name-inputs-be

## 8. Conclusie

Er zijn dus veel "fabelachtige werkelijkheden" die hierboven staan. Toch staan er wel wat punten in deze lijst, die wij wel ter overweging mee kunnen nemen. Zoals bijvoorbeeld dat één persoon meerdere nummers kan hebben. Tevens qua het aantal karakters is het zeer goed om in overweging te nemen dat zowel 'opslag capaciteit' als 'beveiliging' erg belangrijk is en zorgt voor veel kwaliteit van onze product. Dit nemen wij zeker mee voor in de "[Definition of done](https://github.com/HANICA-DWA/sep2021-project-koeskoes/blob/main/koeskoes/1.Pregame/Projectplan/Definition-of-Done.md)".
