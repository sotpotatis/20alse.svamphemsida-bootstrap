# Bootstrap-projekt: egen hemsida

Detta är en repository för mitt projekt för en egen hemsida skapad i Bootstrap som är ett projekt i webbutveckling.

### Bakgrund

Jag lutade åt att använda Tailwind men ville använda Bootstrap då det var ett tag sen och experimenterade med att automatiskt ta bort onödiga klasser i CSS:en samt anpassa färger. Till detta använde jag först två separata verktyg som heter `sass` och `purgecss` men bytte sedan till verktyget `parcel` som med ett kommando gör det de ovannämnda försöker åstadkomma och mycket mer.

### Information

Projektets källkod, alltså den HTML:en som jag skrivit, finns under [src-mappen](src). Med hjälp av magi så tar verktyget `parcel` bort oanvända klasser från Bootstrap-CSS:en och applicerar några egna inställningar (se `src/scss`). Detta verktyg behövs inte att ha installerat om man vill använda hemsidan utan bara när man jobbar på att utveckla den. Själva outputen med rensade CSS-klasser etc., färdigt att läggas på en webbserver, finns under [dist-mappen](dist).

**För utveckling**

Detta behövs endast om man vill jobba på hemsidan och är för egen referens.
För att köra en lokal testserver som uppdateras när man uppdaterar källinnehållet, använd kommandot `npm run dev`.