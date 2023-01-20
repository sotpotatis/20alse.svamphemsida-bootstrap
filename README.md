# Bootstrap-projekt: egen hemsida om svampar

Detta är mitt projekt för en egen hemsida skapad i Bootstrap som är ett projekt i webbutveckling.
Temat på hemsidan är att skriva om ätbara svampar

## Bakgrund

Jag lutade åt att använda Tailwind men ville använda Bootstrap då det var ett tag sen. Jag kan redan mycket Tailwind och ville experimentera med att automatiskt ta bort onödiga klasser i CSS:en samt anpassa färger i Bootstrap. 

Till detta använde jag först två separata verktyg som heter `sass` och `purgecss` men bytte sedan till verktyget `parcel` som med ett kommando gör det de ovannämnda försöker åstadkomma och mycket mer.

## Hur hemsidan fungerar

Många moderna hemsidor byggs via packeteringsverktyg, den mest kända är troligtvis Webpack. Det packeteringsverktyg gör är att de optimerar hemsidan samt underlättar hantering av saker såsom bilder och liknande. Jag ville använda "det senaste" inom webbutveckling och behövde dessutom ett verktyg som kunde hjälpa mig att ta bort onödig CSS som jag inte använder från Bootstrap samt ett som kan hjälpa mig att anpassa färger. Valet föll på Parcel, vilket har många likheter med Webpack.

### Sass
### PurgeCSS
### Pug
Jag ville inte heller kopiera och klistra in kod för att kopiera kodsegment, t.ex. på svamplistan. Om man ska ändra en sak måste man ändra överallt. Därför använde jag ett verktyg som heter Pug som finns implementerat som ett plugin i Parcel.

## Information

Projektets källkod, alltså den HTML:en som jag skrivit, finns under [src-mappen](src). Med hjälp av magi så tar verktyget `parcel` bort oanvända klasser från Bootstrap-CSS:en och applicerar några egna inställningar (se `src/scss`). Detta verktyg behövs inte att ha installerat om man vill använda hemsidan utan bara när man jobbar på att utveckla den. Själva outputen med rensade CSS-klasser etc., färdigt att läggas på en webbserver, finns under [dist-mappen](dist).

**För utveckling**

Detta behövs endast om man vill jobba på hemsidan och är för egen referens.
För att köra en lokal testserver som uppdateras när man uppdaterar källinnehållet, använd kommandot `npm run dev`.