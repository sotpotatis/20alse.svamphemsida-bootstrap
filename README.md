# Bootstrap-projekt: egen hemsida om svampar

> ➡️Du hittar hemsidan på https://20alse.ssis.nu/Bootstrap
>
> ➡️Du hittar Figma-prototypen på https://www.figma.com/file/Hmm1WDZMwgcv3CvkNKUOsE/Hemsida-om-svampar?node-id=106%3A78&t=f0O2PNclp9ooXqzD-1

Detta är mitt projekt för en egen hemsida skapad i Bootstrap som är ett projekt i webbutveckling.
Temat på hemsidan är att skriva om ätbara svampar.

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

#### Här är en liten "crash-course" i Pug så att du kan förstå hur jag skrivit innehållet för hemsidor:

Först och främst: *Pug är väldigt likt HTML*. Jag har alltid tänkt i och uttryckt mig i HTML-likande syntax när jag byggt upp hemsidan.
Ett exempel:
```pug
body
    p#exempel(data-example="1")
        span.text-primary Hej!
        span=dynamisk_variabel
```
Koden ovanför blir i HTML översatt till:
```html
<body>
    <p id="exempel" data-example="1">
        <span class="text-primary"> Hej!
        <span>Innehållet av dynamisk_variabel i pug.config.js</span>    
    </p>
</body>
```
Alltså, man kan notera att de huvudsakliga skillnaderna med Pug är att:
* Man behöver inte stänga taggar i syntaxen. För att taggar ska vara "barn" till en "föräldertagg" indenterar man.
* Klasser appliceras med punkter (`.`). Flera klasser kan appliceras efter varandra genom att kedja punkter.
* ID:n sätts genom en hashtag `#` bredvid taggens namn.
* Övriga attribut sätts genom en parentes med attribut i.
* Dynamiska variabler kan sättas i texten genom att använda ett likamedtecken och variabelns namn.

Annat som är bra att känna till är:
* Då `div`-taggar används ofta inom webbutveckling har Pug lagt in så att man kan strunta i att skriva `div`.
Följande exempel resulterar båda i att en div skapas:
```pug
div#exempel.lite.klasser
```
och
```pug
#exempel.lite.klasser
```
Ger följande output:
```html
<div id="exempel" class="lite klasser">
</div>
```
* De huvudsakliga funktionerna jag använder för dynamisk rendering (vilket var det som motiverade användandet av Pug
från början) är *extends/includes* och *each-loopar*. Jag har skrivit om hur jag använder dessa i `.pug`-filer som använder
de i [src/-mappen](src). Se bland annat [layout.pug](src/layout.pug) och [calendar_column.pug](src/calendar_column.pug) för info om *extends/includes* (samt den förstnämnda
även för information om *each-loopar*. Se även [svamplista.pug](src/svamplista.pug) för den fil som mest använder *each-loopar*. Även [letarguide.pug](src/letarguide.pug) använder denna funktion.

Notera att output-HTML alltid finns tillgängligt i [dist/-mappen](dist) ;)

### PurgeCSS

Detta är ett verktyg som användas för att rensa bort CSS som inte används av mig men som finns inlagt i t.ex. Bootstrap som jag också använder till projektet.

## Information

Projektets källkod, alltså den kod som jag skrivit, finns under [src-mappen](src). Med hjälp av magi så tar verktyget `parcel` bort oanvända klasser från Bootstrap-CSS:en och applicerar några egna inställningar (se `src/scss`). Detta verktyg behövs inte att ha installerat om man vill använda hemsidan utan bara när man jobbar på att utveckla den. Själva outputen med rensade CSS-klasser etc., färdigt att läggas på en webbserver, finns under [dist-mappen](dist).
Nämnvärt är att en del saker, t.ex skript, i `dist/` har en komprimerad källkod (detta görs automatiskt av Parcel), vilket gör att en JavaScript-fil
delas upp i flera små filer med mänskligt oläsbar kod. Denna kod injiceras även i vissa HTML-sidor. Man måste i princip alltså kolla `src/` mappen för att se den JavaScript jag skrivit;)

## För utveckling

Om man vill jobba på hemsidan kan man installera de verktyg som krävs så länge man har Node.JS och NPM installerat.

1. Klona repositoryt och skriv `npm install`
2. För att köra en lokal testserver som uppdateras när man uppdaterar källinnehållet, använd kommandot `npm run dev`.
3. För att bygga en hemsida som kan laddas upp till en statisk innehållsserver (i detta fall SFTP-servern på `hem.ssis.nu`),
kör kommandot `npm run build`.

## Övrigt

### Automatisk publicering

För att automatiskt publicera hemsidan använder jag GitLab CI/CD med små modifieringar till samma skript som jag använde till min portfoliohemsida
för att automatiskt ladda upp det via SFTP till skolans servrar varje gång man pushar kod.
Tack Gustav för hjälpen med det skriptet!
För att bygga hemsidan varje gång man committar kod och lägga till det byggda innehållet i comitten använder jag en inbyggd funktion i git som kallas Git Hooks.

### Angående commits

Commit-nummer 8fbbdbf6f872840ef4726fb9c1f2e0060d57f1e9 (se [här](https://git.ssis.nu/albin/bootstrap/-/commit/8fbbdbf6f872840ef4726fb9c1f2e0060d57f1e9))
pushade i princip allt arbete på hemsidan jag gjorde under December. Anledningen till att det är en (väldigt stor) commit är att jag experimenterade med en hel
del grejer. Exempelvis innan jag testade Pug och fick ok att använda det i uppgiften så testade jag [Handlebars](https://handlebarsjs.com/) och [Nunjuncks](https://mozilla.github.io/nunjucks/). Jag ville inte pusha kod som sedan
skulle visat sig radikalt förändras, så jag lät den nya tekniken marinera ett tag.

### Bildkälla för svamparna

Bilderna har laddats upp under https://20alse.ssis.nu/svampbilder. Hemsidan nämner licenserna för bilderna om sådana finns.
De bilder där det krävs att man nämner modifierinar enligt licensen har detta nämnts.
Filstorleken på bilderna har minifierats med hjälp av följande hemsida: https://imagecompressor.com/