# Onderzoek integratie met webshops / plug-in

Om Giftle daadwerkelijk beschikbaar te maken voor de uiteindelijke gebruikers, moet ervoor gezorgd worden dat webshopeigenaren gemakkelijk de plug-in van Giftle kunnen downloaden. Wegens gebrek aan kennis over het maken van een plug-in, zal er in dit document onderzoek gedaan worden naar de webshop Magento. Magento is open source, waardoor we bestaande code kunnen gebruiken en de gemaakte plug-in dus ook daadwerkelijk kunnen testen.

## Magento nabootsen

Zoals eerder vermeld is, is Magento open source. Dit betekent dat de sourcecode via [deze github repository](https://github.com/magento/magento2) te vinden is. In deze repository is ook een [installation guide](https://devdocs.magento.com/guides/v2.4/install-gde/bk-install-guide.html) te vinden, waarin staat dat je de GitHub van Magento kan clonen en vervolgens kan installeren via de command line en Composer & Git commands.

Na dit geprobeerd te hebben, blijkt het installeren en maken van een gehele Magento webshop erg veel werk te zijn. Teveel werk om alleen te kunnen testen of de Giftle plug-in in het betalingsproces verwerkt kan worden.

Als we het winkelmandje zouden willen nabootsen is binnen de repository de CSS gemakkelijk te vinden, namelijk in de map app/design/frontend/Magento. Bovendien maakt Magento gebruik van Bootstrap, net als de Giftle applicatie.

## Plug-in maken

Voor het maken van een plug-in in Magento is een guide beschikbaar, die [hier](https://devdocs.magento.com/guides/v2.4/extension-dev-guide/plugins.html) te vinden is. Het is belangrijk dat we ons hier houden aan de conventies die opgesteld zijn, anders kan het mogelijk niet correct werken.

## Giftle plug-in: wat en waar

Het element wat toegevoegd zal worden binnen de webshop, is niet erg groot. In het betaalproces moet er een korte uitleg over Giftle verschijnen en zal de koper van het cadeau de optie moeten krijgen om ook een Giftle mee te bestellen. Dit kan dus in de vorm van een simpele checkbox.

Het toevoegen van extra cadeauopties binnen het standaard betaalproces van Magento gaat via het winkelmandje. Zoals in de afbeelding hieronder te zien is, staat er onder de lijst met artikelen een dropdown genaamd 'Gift options'. Als hierop geklikt wordt, zal dus ook de optie om een Giftle toe te voegen moeten verschijnen.

! [Standaard winkelmandje Magento](https://docs.magento.com/user-guide/sales/assets/storefront-cart-full.png)
*Standaard winkelmandje Magento*

## Conclusie

Doordat het installeren en maken van een gehele Magento webshop veel werk blijkt te zijn en we geen gehele webshop nodig hebben om de plug-in te kunnen testen, zijn we tot de conclusie gekomen dat het handiger is als we slechts het winkelmandje van Magento nabootsen. Hierdoor kunnen we alsnog de plug-in op de goede plaats in de website plaatsen, maar hoeven we niet teveel werk hieromheen te doen.