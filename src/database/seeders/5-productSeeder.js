module.exports = {
  //generos: 1-rock, 2-pop, 3-jazz, 4-hiphop, 5-electrónica, 6-metal, 7-clásica, 8-ritmos latinos, 9-experimental/indie, 10-otro
  //labels: 1-becausemusic, 2-edbanger, 3-vice, 4-emi, 5-parlophone, 6-capitol, 7-subpop, 8-creation, 9-epic, 10-caiman, 11-sonymusic, 12-sonyBGM, 13-sire, 14-domino, 15-kitty, 16-lex
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "products",
      [
        {
          artist_id: 1,
          genre_id: 5,
          product_title: "Cross - Justice",
          product_info:
            "†, también conocido como Cross, es el primer álbum de estudio del dúo francés de música electro house Justice, publicado en 11 de junio de 2007. Recibió un Platino en el Reino Unido el 13 de marzo de 2009 por la venta de 60,000 copias.",
          price: 19.99,
          tracklist: [
            "Genesis",
            "Let There Be Light",
            "D.A.N.C.E.",
            "Newjack",
            "Phantom",
            "Phantom Pt. II",
            "Tthhee Ppaarrttyy",
            "DVNO",
            "Stress",
            "Waters of Nazareth",
            "One Minute to Midnight",
          ].join(", "),
          stock: 100,
          release_date: new Date(2007, 5, 11),
          label_id: 1,
          cover_path: "cross by justice.jpg",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          artist_id: 2,
          genre_id: 3,
          product_title: "Pablo Honey",
          product_info:
            'Pablo Honey es el nombre del álbum debut de la banda británica de rock alternativo Radiohead. Fue lanzado al mercado por EMI, Parlophone y Capitol Records el 22 de febrero de 1993. Su gran éxito fue el sencillo "Creep". La versión estadounidense del álbum tiene una versión especial de "Creep", en la cual el fuckin pronunciado antes del coro es reemplazado por very. El tema "Creep" surgió accidentalmente ya que era una canción que Jonny Greenwood odiaba y trataba de arruinar con ruidos discordantes, así nació el acorde distorsionado, que cambia el ritmo y clima del tema. El mismo llegó al puesto 27 de la Billboard. Las versiones japonesas en cambio tienen un total de 17 pistas, siendo las nuevas: "Pop Is Dead", "Inside my Head", "Million Dollar Question" y dos versiones en directo de "Creep" y "Ripcord".',
          price: 24.99,
          tracklist: ["Hello", "Roll With It", "Wonderwall", "Don't Look Back in Anger", "Hey Now!", "Some Might Say", "Cast No Shadow", "She's Electric", "Morning Glory", "Champagne Supernova"].join(", "),
          stock: 50,
          release_date: new Date(1993, 1, 22),
          label_id: 2,
          cover_path: "radiohead-pabloHoney.jpg",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          artist_id: 3,
          genre_id: 1,
          product_title: "Bleach",
          product_info: "Bleach es el álbum debut de la banda de rock estadounidense Nirvana, lanzado el 15 de junio de 1989 por el sello discográfico Sub Pop. El álbum presenta un sonido más crudo y pesado en comparación con los lanzamientos posteriores de Nirvana y contiene canciones destacadas como 'About a Girl' y 'School'.",
          price: 19.99,
          tracklist: ["Blew", "Floyd the Barber", "About a Girl", "School", "Love Buzz", "Paper Cuts", "Negative Creep", "Scoff", "Swap Meet", "Mr. Moustache", "Sifting", "Big Cheese", "Downer"].join(", "),
          stock: 75,
          release_date: new Date(1989, 5, 15),
          label_id: 3,
          cover_path: "bleach.jpg",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          artist_id: 4,
          genre_id: 1,
          product_title: "What's the Story Morning Glory?",
          product_info: "What's the Story Morning Glory? es el segundo álbum de estudio de la banda británica Oasis, lanzado el 2 de octubre de 1995 por el sello discográfico Creation Records. El álbum es uno de los más exitosos de la banda y contiene éxitos como 'Wonderwall', 'Don't Look Back in Anger' y 'Champagne Supernova'.",
          price: 24.99,
          tracklist: ["Hello", "Roll With It", "Wonderwall", "Don't Look Back in Anger", "Hey Now!", "Some Might Say", "Cast No Shadow", "She's Electric", "Morning Glory", "Champagne Supernova"].join(", "),
          stock: 60,
          release_date: new Date(1995, 9, 2),
          label_id: 7,
          cover_path: "morning.jpg",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          artist_id: 5,
          genre_id: 9,
          product_title: "The Money Store",
          product_info: "The Money Store es el primer álbum de estudio de la banda de hip hop experimental Death Grips, lanzado el 24 de abril de 2012 por el sello discográfico Epic Records. El álbum es conocido por su energía intensa, letras provocativas y producción innovadora.",
          price: 29.99,
          tracklist: ["Get Got", "The Fever (aye aye)", "Lost Boys", "Blackjack", "Hustle Bones", "I've Seen Footage", "Double Helix", "System Blower", "The Cage", "Punk Weight", "Fuck That", "Bitch Please", "Hacker"].join(", "),
          stock: 12,
          release_date: new Date(2012, 3, 24),
          label_id: 8,
          cover_path: "moneystore.jpg",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          artist_id: 6,
          genre_id: 8,
          product_title: "Pa' Otro La'o",
          product_info: "Pa' Otro La'o es el álbum del cantautor dominicano Chichi Peralta, lanzado en el año 2002. Este álbum fusiona diversos géneros musicales como merengue, bachata y música caribeña, creando un sonido distintivo y festivo. Algunas de las canciones más destacadas incluyen 'La Ciguapa', 'Procura', y 'Amor Narcótico'.",
          price: 21.99,
          tracklist: ["La Ciguapa", "Amor Narcótico", "Procura", "Volverte a Ver", "Pensar en Ti", "Como No Voy a Decir", "Paso a Paso", "Estopa", "Fuego", "Echao Pa'lante"].join(", "),
          stock: 45,
          release_date: new Date(2002, 0, 1), // Año, Mes (0-11), Día
          label_id: 9,
          cover_path: "chichi.jpg",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          artist_id: 7,
          genre_id: 8,
          product_title: "Limón y Sal",
          product_info: "Limón y Sal es el cuarto álbum de estudio de la cantautora mexicana Julieta Venegas, lanzado en el año 2006. El álbum presenta un estilo musical fresco y ecléctico que combina elementos de pop, rock y música latina. Algunas de las canciones más populares incluyen 'Me Voy', 'Limón y Sal', y 'Eres Para Mí'.",
          price: 17.99,
          tracklist: ["Me Voy", "Limón y Sal", "De Mis Pasos", "Eres Para Mí", "Primer Día", "Algo Está Cambiando", "Andar Conmigo", "Nada Importante", "Lo Que Pidas", "Oleada"].join(", "),
          stock: 55,
          release_date: new Date(2006, 2, 14),
          label_id: 11,
          cover_path: "limon.jpg",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          artist_id: 8,
          genre_id: 9,
          product_title: "Loveless",
          product_info: "Loveless es el segundo álbum de estudio de la banda irlandesa My Bloody Valentine, lanzado en 1991 por Creation Records. Este álbum es considerado como un hito en la historia del shoegaze y el rock alternativo, conocido por su uso innovador de efectos de guitarra y su atmósfera etérea. Canciones destacadas incluyen 'Only Shallow', 'When You Sleep', y 'Sometimes'.",
          price: 27.99,
          tracklist: [
            "Only Shallow", "Loomer", "Touched", "To Here Knows When",
            "When You Sleep", "I Only Said", "Come In Alone", "Sometimes",
            "Blown a Wish", "What You Want", "Soon"].join(", "),
          stock: 30,
          release_date: new Date(1991, 10, 4),
          label_id: 7,
          cover_path: "mbv.jpg",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          artist_id: 9,
          genre_id: 8,
          product_title: "Brasilian Skies",
          product_info: "Brasilian Skies es el álbum del guitarrista japonés Masayoshi Takanaka, lanzado en el año 1983. Este álbum fusiona la música jazz con elementos de la música brasileña, creando un sonido único y exuberante. Takanaka es conocido por su habilidad técnica en la guitarra y su capacidad para mezclar diferentes estilos musicales.",
          price: 23.99,
          tracklist: ["Bom Dia, Amigo", "Dance Loco", "Love Talkin'", "Hot K.I.S.S.", "Sexy Dance", "Lazy NIght", "Summer Connection", "Macho", "Stranger's Night", "Samba Angel", "Sunset Beach", "Twilight Ocean"].join(", "),
          stock: 40,
          release_date: new Date(1983, 0, 1),
          label_id: 14,
          cover_path: "huehuehue.jpg",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          artist_id: 10,
          genre_id: 4,
          product_title: "Born Like This",
          product_info: "Born Like This es el sexto álbum de estudio del rapero británico MF DOOM, lanzado en el año 2009. El álbum presenta letras ingeniosas y juegos de palabras característicos de MF DOOM, junto con producciones sólidas y colaboraciones destacadas. Canciones notables incluyen 'Gazzillion Ear', 'Ballskin', y 'That's That'.",
          price: 22.99,
          tracklist: ["Supervillain Intro", "Gazzillion Ear", "Ballskin", "Yessir!", "Absolutely", "Rap Ambush", "Lightworks", "Batty Boyz", "Angelz", "Cellz", "Still Dope", "Microwave Mayo", "More Rhymin", "That's That", "Supervillainz", "Bumpy's Message", "Thank ya", "The.Green.Whore.Net", "Gazzillion Ear (jneiro jarel / dave sitek remix)", "Gazzillion Ear (dr who dat? remix)", "Gazzillion Ear (thom yorke remix)"].join(", "),
          stock: 3,
          release_date: new Date(2009, 0, 1),
          label_id: 15,
          cover_path: "bornlikethis.jpg",
          created_at: new Date(),
          updated_at: new Date()
        }
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("products", null, {});
  },
};
