/* pug.config.js
Detta är en konfigurationsfil för templating-verktyget Pug.
Jag har skrivit mer om det i README.md.
Det är här nedanför jag definierar mycket av innehållet som visas på hemsidan
i form av texter och liknande. */
module.exports = {
  "locals": {
    "mushroom_categories": [
      {
        "title": "Soppar",
        "id": "soppar",
        "description": "Soppar är bra nybörjarsvampar då de är karaktäristiska och det finns ytterst få soppar som är giftiga. Däremot är de inte heller att underskatta för den mer rutinerade svampletaren. Det är inte mycket som slår en nytillagad smörsopp.",
        "mushrooms": [
          {
            "name": "Smörsopp",
            "id": "smorsopp",
            "badges": [
              {
                "text": "smarrig",
                "color": "bg-success"
              }
            ],
            "about": "Denna matsvamp är en fyrstjärnig sopp och tillhör en av de godare sopparna man kan hitta. Den har också ett karaktäristiskt utseende. Det kan dock ändå vara lite knepigt att hitta ett fint exemplar. Svampen är nämligen som godast när den inte vuxit så längre. Som de flesta soppar tenderar denna att smaka sämre och ha fått påhälsning av kryp och maskar i takt med dess ålder.",
            "appearance": "Svampen kännetecknas av dess smörfärgade rör på undersidan. I regnig väderlek blir svampen även glansig på hatten. Yngre exemplar har en vit ring runt foten och kan ha en hinna utanför rören. Denna bör man ta bort.",
            "location": "Svampen kan hittas över hela Sverige men växer i symbios med tall. Då den blir hal och glansig på hatten är det ultimat att plocka den när det är torrt ute, men om man hittar den ute i skogen en regnig dag får man självklart inte missa den.",
            "image": "https://20alse.ssis.nu/svampbilder/smorsopp.jpg",
            "imageLicense": {
              "type": "CC BY-SA 3.0",
              "extraText": "Inga modifikationer av originalbilden har gjorts förutom att filstorleken har komprimerats.",
              "sourceURL": "https://commons.wikimedia.org/w/index.php?curid=4209808",
              "sourceName": "walt sturgeon (Mycowalt) via Wikimedia Commons"
            },
            "monthData": {
              "onTheWayIn": [7, 8],
              "primeTime": 9,
              "onTheWayOut": [10, 11]
            }
          },
          {
            "name": "Karl-Johansvamp",
            "id": "stensopp",
            "badges": [
              {
                "text": "smarrig",
                "color": "bg-success"
              },
              {
                "text": "nybörjarvänlig",
                "color": "bg-info"
              }
            ],
            "about": "Vi har nog alla hört namnet oavsett våra erfarenheter med svamp. Detta är en femstjärning sopp som är mycket smarrig och har en mild smak med nötiga toner. Svampen är även känd under namnet stensopp.",
            "appearance": "Foten på svampen är ljusbrun eller vit och knubbig. Hatten kan vara både ljusbrun och mörkbrun. På yngre svampar är rören vita och på äldre är de gula/gulbruna.",
            "location": "Enligt Artportalen hittar man främst denna svamp i södra Sverige, men den förekommer också på nordligare ställen.",
            "image": "https://20alse.ssis.nu/svampbilder/karljohan.jpg",
            "imageLicense": {
              "type": "CC0 1.0",
              "sourceURL": "https://www.flickr.com/photos/volvob12b/16424322871",
              "sourceName": "Bernard Spragg via Flickr"
            },
            "monthData": {
              "onTheWayIn": [6, 7, 8],
              "primeTime": [9, 10, 11],
              "onTheWayOut": 12
            }
          },
          {
            "name": "Björksopp",
            "id": "bjorksopp",
            "badges": [],
            "about": "En trestjärning matsvamp. Äldre exemplar är inte lika goda som yngre.",
            "appearance": "Namnet av svampen ger en ledtråd om dess utseende. Foten liknar en björk.",
            "location": "Förekommer över hela landet.",
            "image": "https://20alse.ssis.nu/svampbilder/bjorksopp.jpg",
            "imageLicense": {
              "type": "CC BY 4.0",
              "extraText": "Inga modifikationer av originalbilden har gjorts förutom att filstorleken har komprimerats.",
              "sourceURL": "https://commons.wikimedia.org/wiki/File:Leccinum_scabrum_Birkenr%C3%B6hrling_1.jpg",
              "sourceName": "Holger Krisp via Wikimedia Commons"
            },
            "monthData": {
              "onTheWayIn": [7, 8],
              "primeTime": 9,
              "onTheWayOut": 10
            }
          },
          {
            "name": "Aspsopp",
            "id": "aspsopp",
            "badges": [],
            "about": "Som man hör på namnet så växer denna sopp tillsammans med asp. Den tillhör strävsopparna.",
            "appearance": "Hatten är rödbrun eller orange. Rören är vita. Om man skär svampen är snitten rodnande, men sedan övergår de till att bli svartare.",
            "location": "Förekommer över hela landet.",
            "image": "https://20alse.ssis.nu/svampbilder/aspsopp.jpg",
            "imageLicense": {
              "type": "CC BY-SA 4.0",
              "extraText": "Inga modifikationer av originalbilden har gjorts förutom att filstorleken har komprimerats.",
              "sourceURL": "https://commons.wikimedia.org/wiki/File:Leccinum_aurantiacum.jpg",
              "sourceName": "Hans Hillewaert via Wikimedia Commons"
            },
            "monthData": {
              "onTheWayIn": [7, 8],
              "primeTime": 9,
              "onTheWayOut": 10
            }
          },
          {
            "name": "Tegelsopp",
            "id": "tegelsopp",
            "badges": [],
            "about": "Tegelsopp är enligt Svampguiden en av de mer fastare strävsopparna. Svampen är mild och passar likt många andra strävsoppar därför bra att ha tillsammans med andra svampar.",
            "appearance": "Hatten är rödbrun eller orange. Rören är vita. Om man skär svampen är snitten rodnande, men sedan övergår de till att bli svartare.",
            "location": "Förekommer över hela landet.",
            "image": "https://20alse.ssis.nu/svampbilder/tegelsopp.jpg",
            "imageLicense": {
              "type": "CC BY 2.0",
              "extraText": "Inga modifikationer av originalbilden har gjorts förutom att filstorleken har komprimerats.",
              "sourceURL": "https://www.flickr.com/photos/demartigny/6103226302",
              "sourceName": "Charles de Mille-Isles via Flickr"
            },
            "monthData": {
              "onTheWayIn": 7,
              "primeTime": [8, 9],
              "onTheWayOut": [10, 11]
            }
          }
        ]
      },
      {
        "title": "Kantareller & dess kompisar",
        "id": "kantareller-och-kompisar",
        "description": "Släktet kantareller rymmer flera svampar, men jag har slagit ihop kantareller och väldigt snarlika besläktade svampar inom grannarter.",
        "mushrooms": [
          {
            "name": "Kantarell",
            "id": "kantarell",
            "badges": [
              {
                "text": "smarrig",
                "color": "bg-success"
              },
              {
                "text": "nybörjarvänlig",
                "color": "bg-info"
              }
            ],
            "about": "Kantarellen hör till en våra allra mest kända svampar och har fått smeknamnet \"skogens guld\" av en anledning. Dens popularitet beror på flera faktorer, däribland att den är lätt att känna igen, att den är mångsidig i matlagning, att den ytterst sällan är maskangripen, och sist att det finns få saker som slår smörstekta kantareller.",
            "appearance": "Svampen är svår att förväxla och karaktäriseras av dess guldskimrande utsida med rör i samma färg som svampen. Hatten kan ibland vara veckad och kantareller kommer i olika former och storlekar. Den enda förväxlingssvampen kallas \"falsk kantarell\" och skiljer sig en hel del från kantarellens utseende. Sök online för att hitta en bild om du är osäker.",
            "location": "Arten förekommer i löv- och barrskogar i hela Sverige, däremot begränsat i Norrlands inland och fjällen.",
            "image": "https://20alse.ssis.nu/svampbilder/kantareller.png",
            "monthData": {
              "onTheWayIn": 6,
              "primeTime": [7, 8, 9],
              "onTheWayOut": 10
            }
          },
          {
            "name": "Svart trumpetsvamp",
            "id": "svart-trumpetsvamp",
            "badges": [
              {
                "text": "sällsynt",
                "color": "bg-warning"
              }
            ],
            "about": "Svart trumpetsvamp är en riktigt god svamp och i mitt tycke är den underskattad. Detta kanske beror på att den är ytterst sällsynt.",
            "appearance": "Svart trumpetsvamp har en trattformad hatt med tunt kött.",
            "location": "Denna svamp hittar man ofta dold bland mossa i löv- och blandskogar. Den förekommer (men är mer sällsynt) i norra delar av Sverige.",
            "image": "https://20alse.ssis.nu/svampbilder/svart_trumpetsvamp.jpg",
            "imageLicense": {
              "type": "CC BY-SA 4.0",
              "extraText": "Inga modifikationer av originalbilden har gjorts förutom att filstorleken har komprimerats.",
              "sourceURL": "https://commons.wikimedia.org/wiki/File:Craterellus_cornucopioides_3.jpg",
              "sourceName": "Franck Hidvégi via Wikimedia Commons"
            },
            "monthData": {
              "onTheWayIn": 8,
              "primeTime": [9, 10],
              "onTheWayOut": 11
            }
          },
          {
            "name": "Trattkantarell",
            "id": "trattkantarell",
            "badges": [],
            "about": "Här har vi en riktigt smarrig, fyrstjärning matsvamp som dessutom inte har några giftiga förväxlingssvampar om du inte är riktigt slarvig. Ofta växer flera trattkantareller nära varandra, så se till att titta efter ordentligt om du hittar en!",
            "appearance": "Hatten är tunn och brun eller ljusbrun och foten är gul. Hatten har skivor som når ner en bit på foten.",
            "location": "Förekommer över hela landet och trivs i mossig barrskog.",
            "image": "https://20alse.ssis.nu/svampbilder/trattkantareller.png",
            "monthData": {
              "onTheWayIn": 9,
              "primeTime": 10,
              "onTheWayOut": 11
            }
          }
        ]
      },
      {
        "title": "Taggsvampar",
        "id": "taggsvampar",
        "description": "Endast en taggsvamp kan anses eftertraktad och få är ätliga, men om du hittar den bleka taggsvampen är ett av skogens guldfynd.",
        "mushrooms": [
          {
            "name": "Blek taggsvamp",
            "id": "blek-taggsvamp",
            "badges": [
              {
                "text": "smarrig",
                "color": "bg-success"
              }
            ],
            "about": "En femstjärning och otroligt smarrig men relativt sällsynt. Har inga farliga förväxlingssvampar.",
            "appearance": "Blek färg samt små \"taggar\" under hatten. Trillar lätt sönder vid tryck.",
            "location": "Förekommer i många olika skogstyper i Sverige.",
            "image": "https://20alse.ssis.nu/svampbilder/blek_taggsvamp.jpg",
            "imageLicense": {
              "type": "CC BY-SA 3.0",
              "extraText": "Inga modifikationer av originalbilden har gjorts förutom att filstorleken har komprimerats.",
              "sourceURL": "https://commons.wikimedia.org/wiki/File:HydnumRepandum.JPG",
              "sourceName": "Archenzo via Wikimedia Commons"
            },
            "monthData": {
              "onTheWayIn": 8,
              "primeTime": [9, 10],
              "onTheWayOut": 11
            }
          },
            {
            "name": "Brödticka",
            "id": "brodticka",
            "badges": [],
            "about": "En enstjärning matsvamp som till skillnad från sin kollega, blek taggsvamp, inte är ansedd som någon god matsvamp. Den är däremot ätlig, men endast som ung. Som äldre är den inte giftig, men oaptitlig.",
            "appearance": "Som namnet antyder påminner färgen på hatten om bröd. Undersidan samt foten är vit och kan vara orangefläckig.",
            "location": "",
            "image": "https://20alse.ssis.nu/svampbilder/brodticka.jpg",
            "imageLicense": {
              "type": "CC BY-SA 4.0",
              "extraText": "Inga modifikationer av originalbilden har gjorts förutom att filstorleken har komprimerats.",
              "sourceURL": "https://commons.wikimedia.org/wiki/File:Kr%C3%A1snoporka_%C5%BEemli%C4%8Dka_%28Albatrellus_confluens%29_11.JPG",
              "sourceName": "svajcr via Wikimedia Commons"
            },
            "monthData": {
              "onTheWayIn": 8,
              "primeTime": 9,
              "onTheWayOut": 10
            }
          }
        ],
      }
    ], // Lista över olika svampkategorier. Det är också här information om alla svampar definieras.
    "menu_items": [
      {
        "url": "./index.pug",
        "text": "Startsida",
        "icon": "bi-house-fill"
      },
      {
        "url": "./svamplista.pug",
        "text": "Svamplista",
        "icon": "bi-list-ul"
      },
      {
        "url": "./letarguide.pug",
        "text": "Letarguide",
        "icon": "bi-info-square-fill"
      },
      {
        "url": "./svampkalender.pug",
        "text": "Svampkalender",
        "icon": "bi-calendar-range-fill"
      },
      {
        "url": "mailto:20alse@stockholmscience.se",
        "text": "Kontakt",
        "icon": "bi-envelope-fill"
      }
    ], // Lista över flikar i menyn.
    "further_reading_websites": [{
      "title": "Svampguiden",
      "description": "Information om många olika svampar",
      "url": "http://svampguiden.com"
    },
    {
      "title": "Skogsskafferiet",
      "description": "Information om svampar samt andra ätbara ting i naturen",
      "url": "https://www.skogsskafferiet.se/"
    },
    {
      "title": "Artportalen",
      "description": "Se vart olika svampar och växter hittats i Sverige",
      "url": "https://www.artportalen.se/"
    },
    {
      "title": "ICA's svamprecept",
      "description": "ICA har över 1000 olika recept på svamprätter",
      "url": "https://www.ica.se/recept/svamp/"
    },
    {
      "title": "Coop's svamprecept",
      "description": "Coop har drygt 250 olika recept på svamp",
      "url": "https://www.coop.se/recept/svamp/"
    }
    ], // Lista över hemsidor att läsa mer om svampar på (för letarguide-sidan).
    "image_licenses_information": { // Vissa bilder har en CC-licens jag måste länka till. Här definierar jag texter och länkar till de licenserna så jag slipper upprepa mig.
      "CC BY-SA 3.0": {
        "url": "https://creativecommons.org/licenses/by-sa/3.0/deed.en"
      },
      "CC BY 3.0": {
        "url": "https://creativecommons.org/licenses/by/3.0/deed.en"
      },
      "CC0 1.0": {
        "url": "https://creativecommons.org/publicdomain/zero/1.0/"
      },
      "CC BY-SA 4.0": {
        "url": "https://creativecommons.org/licenses/by-sa/4.0/deed.en"
      },
      "CC BY 4.0": {
        "url": "https://creativecommons.org/licenses/by/4.0/"
      },
      "CC BY 2.0": {
        "url": "https://creativecommons.org/licenses/by/2.0/"
      }
    }
  }
}
