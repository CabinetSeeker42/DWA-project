# Onderzoek theme css

## Inleiding

De opdrachtgever wil graag dat er per webshop een aparte styling komt die de betreffende webshop gebruikt. Er zijn verschillende opties
om de styling aan te passen. In het kopje "Welke opties zijn er" is hier meer informatie over te vinden.

## Welke opties zijn er?

Er zijn verschillende opties om CSS te stylen. Dit zijn de verschillende opties:

| Opties            | Uitleg                                                                                     |
| ----------------- | ------------------------------------------------------------------------------------------ |
| Bootstrap theme's | Bootstrap custom theme's, waarbij kleur wordt aangepast door te "overriden".               |
| Custom CSS files  | Eigen gemaakte CSS files, die dus ingeladen worden.                                        |
| NPM module        | Theme's (bootstrap of andere soortgelijke) van een npm module die ingeladen kunnen worden. |

### Bootstrap theme's

Bootstrap heeft twee methode's voor het veranderen van de CSS (thema).

1. Via package manager -> sass override, kan lastig worden omdat Bootstrap niet altijd "override" wil worden.
2. jsDelivr (no cache) -> sass override, kan dus ook lastig worden met het "overriden" van files.
3. jsDelivr (cached) -> niet handig om te gebruiken, dus deze valt af i.v.m. cached redenen.

Bron: https://getbootstrap.com/docs/5.1/customize/overview/

### Custom CSS files

Er kan gebruik gemaakt worden van custom css bestanden. Deze custom bestanden "overriden" ook de Bootstrap bestanden. Een voordeel van custom css bestanden is wel dat er gekozen kan worden welke bestand eerst wordt geladen. In dit geval zou Bootstrap boven komen te staan en de custom css bestanden beneden komen te staan, zodat deze custom css bestanden altijd als laatste toegevoegd kunnen worden.

### NPM module

Er zijn nog weinig Bootstrap theme's die gebruikt kunnen worden met onze (huidige) versie van Bootstrap. De huidige Bootstrap versie van dit project is "Bootstrap V5.1.3".

Bron: https://www.npmjs.com/

## Conclusie

Nu is het tijd om te kijken welke optie het beste bij ons past. Bootstrap theme's zelf is dus te riskant om te gebruiken vanwege "override" problemen. Een thema van een NPM module is niet handig voor onze versie van Bootstrap 5.1.3. De custom css bestanden is een stuk handiger en op het moment eenvoudiger te implementeren. Tevens is er met custom css een stuk meer vrijheid, wat Bootstrap en een thema van een NPM Module niet biedt. Hierom kiezen wij voor custom css bestanden.
