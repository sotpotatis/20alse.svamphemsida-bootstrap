# Bootstrap-projekt: egen hemsida om svampar

Detta är mitt projekt för en egen hemsida skapad i Bootstrap som är ett projekt i webbutveckling.
Temat på hemsidan är att skriva om ätbara svampar

## Bakgrund

Jag lutade åt att använda Tailwind men ville använda Bootstrap då det var ett tag sen. Jag kan redan mycket Tailwind och ville experimentera med att automatiskt ta bort onödiga klasser i CSS:en samt anpassa färger i Bootstrap. 

Till detta använde jag först två separata verktyg som heter `sass` och `purgecss` men bytte sedan till verktyget `parcel` som med ett kommando gör det de ovannämnda försöker åstadkomma och mycket mer.

## Verktyg/bibliotek använda

Många moderna hemsidor byggs via paketeringsverktyg, den mest kända är troligtvis Webpack. Det paketeringsverktyg gör är att de optimerar hemsidan samt underlättar hantering av saker såsom bilder och liknande. 
Jag ville lära mig mer om verktyg inom webbutveckling och behövde dessutom ett verktyg som kunde hjälpa mig att ta bort onödig CSS som jag inte använder från Bootstrap samt ett som kan hjälpa mig att anpassa färger. 
Valet föll på Parcel, ett verktyg som har många likheter med Webpack, men som verkade smidigare och krävde mindre konfiguration.

### Sass

För att anpassa Bootstraps färger så används ett filformat som heter `scss`, vilket man kan beskriva som "CSS fast med variabler."
I mappen [scss](src/scss) kan man hitta exempel på hur jah använder det för att anpassa färger i Bootstrap utan egen CSS.

### Pug

Jag ville inte heller kopiera och klistra in kod för att kopiera kodsegment, t.ex. på svamplistan. Om man ska ändra en sak måste man ändra överallt. Därför använde jag ett verktyg som heter Pug som finns implementerat som ett plugin i Parcel.
Jag skapade därför ett dataformat för varje svamp som man kan hitta i filen [pug.config.js](pug.config.js) där man också hittar alla svampar.
Tack vare Pug's stöd för "for-loop"-liknande templating så räckte det med att bara definiera HTML:en för varje svamp en gång och sedan se det automatiskt kopieras
för varje svamp.

Jag har också använt Pug's funktion att separera sidor i block och skapa "templates". På så sätt kan jag definiera saker såsom meny och metataggar en gång (se filen [layout.pug](src/layout.pug))
och sedan "importera" denna i varje sida jag skapar för att ytterligare minska hur mycket kod jag behöver repetera.

### PurgeCSS

Detta är ett verktyg som användas för att rensa bort onödig CSS.

## Information

Projektets källkod, alltså den HTML:en som jag skrivit, finns under [src-mappen](src). Med hjälp av magi så tar verktyget `parcel` bort oanvända klasser från Bootstrap-CSS:en och applicerar några egna inställningar (se `src/scss`). Detta verktyg behövs inte att ha installerat om man vill använda hemsidan utan bara när man jobbar på att utveckla den. Själva outputen med rensade CSS-klasser etc., färdigt att läggas på en webbserver, finns under [dist-mappen](dist).

**För utveckling**

Detta behövs endast om man vill jobba på hemsidan och är för egen referens.
För att köra en lokal testserver som uppdateras när man uppdaterar källinnehållet, använd kommandot `npm run dev`.