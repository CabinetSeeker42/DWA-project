# Deployment

## Diagram
Hieronder in het system context diagram is te zien hoe alle interne en externe delen van de applicatie met elkaar in verhouding staan en waaruit deze zijn opgebouwd. Hieronder wat extra informatie over de server:

- CPU: 1 vCPU
- RAM: 1GB
- Opslag: 25GB
- OS: Ubuntu 18.04 x64
- Locatie: Amsterdam

![system_context_diagram](assets/deployment/deployment_diagram.png "System Context diagram")
*Deployment diagram*

## Software

De software wordt geïnstalleerd door Node.js. Via de command prompt worden er commands (npm install) uitgevoerd, die de afhankelijkheden van het project installeren. Zodra dit gedaan is, is het enige wat nog nodig is het uitvoeren van het project. In development wordt dit lokaal gedaan, maar in productie wordt dit uiteraard op de productieserver gedaan.

## Database

De database bevat alle (gevoelige) data. In development heeft het team een database lokaal staan, maar in productie is er een online database waarbij beveiliging hoog in het vaandel staat.

## Mailer

De SMTP Service van Google wordt gebruikt voor het versturen/ontvangen van e-mails.


<!--
Intent

This section is used to describe the mapping between the software (e.g. containers) and the infrastructure. Sometimes this will be a simple one-to-one mapping (e.g. deploy a web application to a single web server) and at other times it will be more complex (e.g. deploy a web application across a number of servers in a server farm). This section answers the following types of questions:

• How and where is the software installed and configured?
• Is it clear how the software will be deployed across the infrastructure elements described in the infrastructure architecture section? (e.g. one-to-one mapping, multiple containers per server, etc)
• If this is still to be decided, what are the options and have they been documented?
• Is it understood how memory and CPU will be partitioned between the processes running on a single piece of infrastructure?
• Are any containers and/or components running in an active-active, active-passive, hot-standby, cold-standby, etc formation?
• Has the deployment and rollback strategy been defined?
• What happens in the event of a software or infrastructure failure?
• Is it clear how data is replicated across sites?
-->
