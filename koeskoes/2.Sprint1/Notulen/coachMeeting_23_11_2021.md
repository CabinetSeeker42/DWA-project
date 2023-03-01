# Notulen Coach meeting

## Afspraken:
* Volgende week kijken naar het software guidebook
* Voldoet alles aan REST

## Overig

* Een maniertje vinden om acceptatiecriteria te laten zien tijdens de Sprint Review
* Veel routes kunnen in mongoose model methode 
* Worden er niet stiekem async gebruikt
* Is alles wel goed RESTful?

### DoD
* I.p.v. deze lettergrootte naar schaalbaarheid (b.v. 50% en 200%)
* Alle interactie met db met Mongoose model methode
* Zo min mogelijk zijeffecten
* Duidelijk korte code
* Inhoudelijk wat minder automatische controle, dus meer nakdenken bij nakijken
* Geeft de functie naam aan dat alles wordt gedaan? generateCode -> generateRandomCode
* Voldoet het aan REST?


### Tests
* Generate random code
* Lijstje met skipped tests
* Request parameter i.p.v. request body
* Test voor testen of database in de goede toestand is
* Mongoose model methodes testen
* Tests moeten voor db zijn
  
#### Upload Test
* Maak een aparte functie in een apart file voor line 29 tot 34 en test die
* Mock date.now output
* Move code apart testen


