# Operation and Support

Wij gebruiken software als:
| Software | Waarvoor gebruikt? |
|-----------------|--------------------------------------------------------------------------------------------------------------------------------|
| GitHub | Voor user stories en taken te beheren en bewaken met als voordeel dat tijd en informatie hierin goed opgeslagen kunnen worden. |
| Discord | Communicatie makkelijk te maken met thuiswerken. |
| Figma/Adobe XD | Om makkelijk wireframes te maken en beheren. |
| Node.js | Om packages te installeren voor het project om makkelijk en efficient te werk te gaan. |

Deze bovenstaande software zorgt ervoor dat het systeem goed te bewaken en te beheren is. Uiteraard wordt er wel verwacht dat deze software/technieken bekend zijn bij de meeste programmeurs.

Dit bewaken en beheren wordt doorgevoerd in alle lagen van de architectuur. Er zijn drie architectuur lagen, namelijk:
1. De GUI laag. Dit is wat de gebruiker te zien krijgt (React-Redux).
2. De Objecten laag. Dit is het "hart" van het systeem, de verbindende schakel tussen de andere lagen. In de objecten laag zit kennis opgeslagen, op twee manieren:
   - Runtime waarden (bijvoorbeeld videonaam of een e-mailadres)
   - Structurele kennis, qua data en processing
3. Database Laag (MongoDB).

Errors worden gelogd in de console en zijn te zien in de browser. Informatie/data wordt niet gelogged, maar wel opgeslagen in de database.

Ten slotte hoeven configuratiewijzigingen intern niet opnieuw worden opgestart. Extern moet dit, naar alle waarschijnlijkheid, wel gedaan worden. Dit ligt meer aan de externe software zelf.

<!--
Intent

Most systems will be subject to support and operational requirements, particularly around how they are monitored, managed and administered. Including a dedicated section in the software guidebook lets you be explicit about how your software will or does support those requirements. This section should address the following types of questions:

• Is it clear how the software provides the ability for operation/support teams to monitor and manage the system?
• How is this achieved across all tiers of the architecture?
• How can operational staff diagnose problems?
• Where are errors and information logged? (e.g. log files, Windows Event Log, SMNP, JMX, WMI, custom diagnostics, etc)
• Do configuration changes require a restart?
• Arethereanymanualhousekeepingtasksthatneedtobeperformedonaregularbasis?
• Does old data need to be periodically archived?
-->
