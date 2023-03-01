# Meeting scrumcoach

- Laten weten aan coach hoever we zijn wanneer deadline spike van applicatie op server zetten is bereikt. Heroku is een voorbeeld van een cloud-platform die we eventueel kunnen gebruiken.

## Testen

- Tests afmaken en zorgen dat ze goed runnen (en dus slagen). Komende week tests weer laten zien. Maak goede inhoudsopgaves met describes.
- GenerateUniqueRandomCode verplaatsen naar setCode.
- Zoveel mogelijk code in modellen.

## Software Guidebook

- Iets meer schrijven voor een nieuwe developer, info die deze niet uit de code kan halen.
- Techtribes is aan de korte kant maar een goed voorbeeld.

### Per hoofdstuk
1. Context: voeg contextdiagram toe. Funcionaliteit boven, integreren webshop onder. Zet een 'to do' bij de dingen die er nog niet zijn.
2. Functional Overview: meer puntsgewijs. Neem voorbeeld aan techtribes. Misschien een aantal wireframes/screenshots erbij.
3. Quality Attributes: belangrijk dat alles waar is, dat alles getest is en dat alles concreet is. Liever zeggen dat je ergens niet mee bezig bent dan doen alsof (schaalbaarheid, uitbreidbaarheid). Bij beveiliging link naar code waarin dat te zien is. Bij bruikbaarheid een lijstje op welke browsers en devices getest is. Als er niet meer naar wetten wordt gekeken moet dit eruit ('to do' erbij). Toegankelijkheid gaat over mensen met een handicap, zijn we niet mee bezig geweest.
4. Constraints: gebruik van react-redux is ook een constraint. Bij kennis zeggen dat je te maken hebt met een team van beginnende programmeurs.
5. Principles: dingen die gaat om onze team-interactie eruit halen.
6. Software architecture: iedereen moet de diagrammen kunnen uitleggen a.d.h.v. de code. Tekst moet bij de diagrammen. Context diagram naar hoofdstuk context (1) toe. Component diagram: Express-kant moet er nog bij.
7. External Interfaces: alleen te SMTP server.
8. Code: voor nu laten staan, Jest en Redux moeten naar constraint bijvoorbeeld. Noteren: 'to do' Lars moet nog nadenken over feedback over dit hoofdstuk.
9. Data: data gaat alleen over het Mongo datamodel / data in de database. Het model klopt niet en voegt niets toe dus kan weg.
10. Infrastructure architecture: goed kijken naar reader. Infrastructuur gaat over apparaten en firewall et cetera. Voor ons niet heel erg interessant. Noteren: 'to do' Lars zegt dat we dit gaan we later doen.
11. Deployment: in de server in het diagram moet de API. Deployment is infrastructure diagram gecombineerd met juiste blokken uit containerdiagram.
12. Operation and Support: wat moet je doen om het aan de praat te krijgen? Neem voorbeeld aan techtribes.
13. Decision Log: alle onderzoekjes kun je hier kwijt. Goed begin.

