# Operation and Support

### Voor de installatie van deze applicatie gaan wij ervan uit dat je ervaring hebt met Ubuntu en de Linux commandline

<br>

## Installeer Ubuntu 18.04

<br>

## Update en upgrade

    sudo apt-get update
    
    sudo apt-get upgrade

## Installeer nodejs & npm - [Source]([How To Install Node.js on Ubuntu 20.04 | DigitalOcean](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-20-04))

    curl -sL https://deb.nodesource.com/setup_16.x -o nodesource_setup.sh
    
    sudo bash nodesource_setup.sh
    
    sudo apt install nodejs

## Installeer mongodb - [Source](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/)

    wget -qO - https://www.mongodb.org/static/pgp/server-5.0.asc | sudo apt-key add -
    
    echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/5.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-5.0.list
    
    sudo apt-get update
    
    sudo apt-get install -y mongodb-org
    
    sudo systemctl start mongod
    
    sudo systemctl status mongod

## Creëer database "create read update delete" rol en gebruiker

    mongosh
    
    use giftle
    
    db.createRole(
    {
      role: "crudRole",
      privileges: [
        {
          actions: [ "find", "update", "insert", "remove" ],
          resource: { db: "giftle", collection: "" }
        }
      ],
      roles: []
    })
    
    db.createUser(
    {
      user: "crudUser",
      pwd: "yCC4L4K9ULEjRC",
      roles: [
        {
          role: "crudRole",
          db:"giftle"
        }
      ]
    })
    
    exit

## Webapplicatie plaatsen op de server

    - Open een FTP applicatie naar keuze (bijv. FileZilla Client).
    
    - Verbind met de server.
    
    - Navigeer naar de map /var/.
    
    - Maak een nieuwe map aan genaamd "www". Dit maakt het makkelijk voor andere om de webapplicatie te vinden.
    
    - Plaats de webapplicatie in de "www" map.

## Node modules installeren

    cd /var/www
    
    npm install

## Installeer FFmpeg

    sudo apt update
    
    sudo apt install ffmpeg

## Automatisch opstarten na server restart - [Source]([Run a script on boot using systemd on Ubuntu 18.04 &ndash; ServerOK](https://serverok.in/run-a-script-on-boot-using-systemd-on-ubuntu-18-04))

    nano /etc/systemd/system/sok-startup.service
    - [Unit]
    - Description=Start up script
    - ConditionPathExists=/etc/rc.local
    
    - [Service]
    - Type=forking
    - ExecStart=/etc/rc.local start
    - TimeoutSec=0
    - StandardOutput=tty
    - RemainAfterExit=yes
    - SysVStartPriority=99
    
    - [Install]
    - WantedBy=multi-user.target
    
    nano /etc/rc.local
    - #!/bin/bash
    
    - sudo rm -rf /tmp/mongodb-27017.sock ; sudo service mongod start ; cd /var/www/ ; npm start
    
    - exit 0
    
    chmod 755 /etc/rc.local
    
    systemctl daemon-reload
    
    systemctl enable sok-startup.service
    
    sudo reboot

<!--
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
-->

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
