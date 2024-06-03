module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('labels', [
            {
                label_name: 'Because Music',
                label_info: 'Because Music​ es una compañía discográfica independiente francesa fundada en el 2005 por el productor argelino-francés Emmanuel de Buretel y que hasta la fecha sigue activo. La discográfica cuenta con una variedad de músicos incluido Manu Chao, Uffie, The Beta Band, Nortec Collective, entre muchos otros.',
                label_path: '../../public/img/labels/because.jpg',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                label_name: 'Ed Banger Records',
                label_info: 'Ed Banger Records es un sello francés de música electrónica dirigido por Pedro Winter. Fue fundado en 2003 como una división de Headbangers Entertainment. Es la discográfica de los siguientes grupos electrónicos franceses: Justice, SebastiAn, Mr. Oizo, Breakbot, Uffie, Cassius, Krazy Baldhead, DJ Mehdi, Mr.',
                label_path: '../../public/img/labels/edBanger.jpg',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                label_name: 'Vice Records',
                label_info: 'Vice Records es un sello discográfico independiente fundado en 1999 como una subsidiaria de Vice Media, una empresa de medios de comunicación con sede en Brooklyn, Nueva York. Vice Records se ha destacado por su enfoque en la música alternativa y underground, así como por su asociación con una variedad de artistas influyentes en diversos géneros musicales.',
                label_path: '../../public/img/labels/vice.jpg',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                label_name: 'EMI',
                label_info: 'EMI Records fue una destacada compañía discográfica británica que operó durante más de 80 años antes de ser adquirida por Universal Music Group en 2012. ',
                label_path: '../../public/img/labels/emi.jpg',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                label_name: 'Parlophone',
                label_info: 'Parlophone Records es un sello discográfico con una rica historia y un legado significativo en la música popular. Con su papel crucial en el lanzamiento y promoción de los Beatles, así como su asociación con una variedad de artistas influyentes, Parlophone ha dejado una marca indeleble en la industria musical y continúa siendo una fuerza importante en el panorama musical actual.',
                label_path: '../../public/img/labels/parlophone.jpg',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                label_name: 'Capitol Records',
                label_info: 'Capitol Records, LLC es un sello discográfico estadounidense propiedad de Universal Music Group a través de su etiqueta Capitol Music Group. Fue fundada como el primer sello discográfico de la Costa Oeste de los Estados Unidos en 1942 por Johnny Mercer, Buddy DeSylva, y Glenn E. Wallichs, y más tarde fue adquirida por el conglomerado británico EMI en su filial de Norteamérica en el año 1955. EMI fue más tarde adquirida por Universal Music Group (EMI era propiedad de Sony Music Entertainment, hasta que se cambió a Universal Music Group) en 2010 y fusionada con la compañía un año luego, volviendo a Capitol y Capitol Music Group parte de Universal Music Group. El edificio principal ubicado en Los Ángeles es una reconocida marca de California. Entre los artistas actualmente firmados por Capitol Records se encuentran Megadeth, Katy Perry, Sir Paul McCartney, Mary J. Blige, The Beach Boys, Beastie Boys, Neil Diamond, Eagles, Brian Wilson, Beck, Avenged Sevenfold, 5 Seconds of Summer, Don Henley, Sam Smith, Migos, Lil Yachty, Ice Spice, NF, Emeli Sandé, Troye Sivan, Calum Scott, Tori Kelly, Jon Bellion, NCT 127, Niall Horan, Duncan Laurence y SuperM.',
                label_path: '../../public/img/labels/capitol.jpg',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                label_name: 'Sub pop',
                label_info: 'Sub Pop es un sello discográfico independiente de Seattle, Washington, famoso por ser el primero en contratar a bandas como Nirvana, Soundgarden y varias otras de la emergente escena local grunge.1​ El sello ha sido considerado como uno de los que dio los primeros pasos para la popularización del grunge. Actualmente el 49% del sello es manejado por Time Warner, uno de los más grandes conglomerados de medios en el mundo.',
                label_path: '../../public/img/labels/subpop.jpg',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                label_name: 'Creation Records',
                label_info: 'Creation Records fue una compañía discográfica independiente británica entre los años 1983 y 1999. Fue fundada por el músico y productor Alan McGee, junto a Dick Green y Joe Foster. El nombre de la discográfica se debe a la banda de rock de los años 60s The Creation, de la cual McGee era un gran admirador.',
                label_path: '../../public/img/labels/creation.jpg',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                label_name: 'Epic Records',
                label_info: 'Epic Records es una compañía discográfica estadounidense, perteneciente a Sony Music Entertainment. Esta casa discográfica es muy conocida por lanzar el disco más vendido de la historia, Thriller de Michael Jackson.',
                label_path: '../../public/img/labels/epic.jpg',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                label_name: 'Caiman Music',
                label_info: 'Caimán Music fue fundada en España en el año 2000. Desde sus inicios, la compañía se ha centrado en promover y distribuir música latina, especialmente música tropical como salsa, merengue, bachata y reguetón. A lo largo de los años, Caimán Music ha lanzado álbumes y sencillos de artistas reconocidos en la escena musical latina, así como de nuevos talentos que buscan abrirse camino en la industria. La compañía ha colaborado con artistas como Elvis Crespo, Grupo Manía, Johnny Ventura, entre otros.',
                label_path: '../../public/img/labels/caiman.jpg',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                label_name: 'Sony Music',
                label_info: 'Sony Music (abreviada como SM) es una compañía de música estadounidense propiedad de Sony, que se incorpora como Sociedad General de Sony Music Holdings, Inc. a través de Sony Entertainment Inc., una subsidiaria de Sony Corporation of America. La compañía se fundó por primera vez en 1929 como American Record Corporation y pasó a llamarse Columbia Recording Corporation en 1938, tras su adquisición por Columbia Broadcasting System. En 1966, la compañía se reorganizó para convertirse en CBS Records. Sony Corporation compró la compañía en 1988 y la nombró Sony Music Entertainment en 1991.',
                label_path: '../../public/img/labels/sonymusic.jpg',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                label_name: 'Sony BGM Music Entertainment',
                label_info: 'Sony BMG Music Entertainment fue formada como resultado de la fusión entre Sony Music Entertainment (parte de Sony Corporation) y BMG Music Entertainment (parte de Bertelsmann AG). La fusión se completó en 2004, creando una de las compañías discográficas más grandes del mundo en ese momento. Sony BMG representaba a una gran cantidad de artistas reconocidos en la industria musical, incluyendo a Beyoncé, Britney Spears, Justin Timberlake, Alicia Keys, Usher, entre muchos otros. Además de los artistas individuales, la compañía también tenía varios sellos discográficos bajo su paraguas, como Columbia Records, RCA Records y Epic Records, entre otros.',
                label_path: '../../public/img/labels/sonybgm.jpg',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                label_name: 'Sire Records',
                label_info: 'Sire Records es un influyente sello discográfico estadounidense conocido por su papel en el desarrollo y la promoción de artistas alternativos y de vanguardia. Fue fundada en 1966 por Seymour Stein y Richard Gottehrer en Nueva York. En sus primeros años, la compañía se centró principalmente en la música pop y rock convencional, lanzando música de artistas como The Ramones, Talking Heads y The Pretenders.',
                label_path: '../../public/img/labels/sire.jpg',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                label_name: 'Domino',
                label_info: 'Domino Records es una compañía discográfica independiente fundada en Londres, Inglaterra en 1993. Posee también oficinas en Brooklyn (Estados Unidos). Stephen Pastel preside la disquera subsidiaria Geographic Music, la cual lanza música underground británica y también de otras partes del mundo. La compañía fue fundada en 1993, por Laurence Bell y su pareja Jacqui Rice. La primera referencia de la empresa fue el sencillo «Soul and Fire» de Sebadoh, bajo la licencia de Sub Pop Records para poder ser lanzado en el Reino Unido. Domino celebró su primer álbum número 1 en Reino Unido en octubre de 2005, You Could Have It So Much Better de Franz Ferdinand, y su primer sencillo número 1 en el Reino Unido con la canción de Arctic Monkeys "I Bet You Look Good on the Dancefloor", más adelante ese mismo mes.',
                label_path: '../../public/img/labels/domino.jpg',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                label_name: 'Kitty Records',
                label_info: 'Kitty Records es un sello discográfico japonés que fue fundado en 1973 como parte de la corporación japonesa Kitty Film. Originalmente, el sello se centraba principalmente en la producción y distribución de bandas sonoras de anime y música pop japonesa. Con el tiempo, Kitty Records expandió su catálogo para incluir una variedad de géneros musicales, incluyendo pop, rock, jazz, música electrónica y más. El sello ha lanzado música de una amplia gama de artistas japoneses, tanto establecidos como emergentes.',
                label_path: '../../public/img/labels/kitty.jpg',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                label_name: 'Lex Records',
                label_info: 'Lex Records fue fundado en 2001 por Tom Brown y James "Gone" Griffith. Desde su creación, el sello se ha dedicado a lanzar música alternativa y de vanguardia, con un enfoque en artistas que desafían las convenciones musicales establecidas. Lex Records se ha destacado por su eclecticismo y su voluntad de trabajar con artistas que exploran sonidos únicos y experimentales. El sello abarca una amplia gama de géneros musicales, incluyendo hip hop, electrónica, indie rock, música experimental y más.',
                label_path: '../../public/img/labels/lex.jpg',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                label_name: 'DGC Records',
                label_info: 'DGC Records es un sello discográfico estadounidense propiedad de Universal Music Group, fundado por David Geffen el 20 de marzo de 1990. Actualmente opera como sello auxiliar de Interscope Records.',
                label_path: '../../public/img/labels/dgc.jpg',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                label_name: 'Big Hit Music',
                label_info: 'Big Hit Music (en hangul, 빅히트 뮤직), anteriormente Big Hit Entertainment, es una empresa de entretenimiento surcoreana fundada en 2005 por Bang Si-hyuk. Fue renombrada como Big Hit Music por su empresa matriz HYBE, antes Big Hit Entertainment Co., Ltd... A fecha de 2022, tiene contrato con el solista Lee Hyun, los grupos BTS y TXT.',
                label_path: '../../public/img/labels/bighit.jpg',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                label_name: 'Deathwish Inc.',
                label_info: "Deathwish Inc. es un sello discográfico independiente estadounidense fundado en 2000 por Jacob Bannon y Tre McCarthy en Boston, Massachusetts. La etiqueta se especializa en música hardcore punk, metal y otros géneros relacionados. A lo largo de los años, Deathwish ha ganado reconocimiento por lanzar música innovadora y emocionante de artistas influyentes en la escena underground. Su catálogo incluye álbumes de bandas como Converge, Code Orange, Deafheaven, Touché Amoré, Harm's Way, y muchas más.",
                label_path: '../../public/img/labels/deathwish.jpg',
                created_at: new Date(),
                updated_at: new Date()
            }
        ], {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('labels', null, {});
    }
};