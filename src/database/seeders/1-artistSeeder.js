module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('artists', [
            {
                artist_name: 'Justice',
                artist_info: 'Justice es un dúo de música electrónica originario de Francia, formado por Gaspard Augé y Xavier de Rosnay en 2003. Son conocidos por su estilo único que fusiona elementos de la música electrónica, el rock y el funk, creando un sonido distintivo que ha ganado una amplia base de fanáticos en todo el mundo.',
                artist_path: 'justice.jpg',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                artist_name: 'Radiohead',
                artist_info: "Radiohead es una banda de rock alternativo originaria de Abingdon, Oxfordshire, Inglaterra. Formada en 1985, la banda está compuesta por Thom Yorke (voz, guitarra, piano), Jonny Greenwood (guitarra, teclados, otros instrumentos), Colin Greenwood (bajo), Ed O'Brien (guitarra, coros) y Philip Selway (batería, percusión).",
                artist_path: 'radiohead.jpg',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                artist_name: 'Nirvana',
                artist_info: "Radiohead es una banda de rock alternativo originaria de Abingdon, Oxfordshire, Inglaterra. Formada en 1985, la banda está compuesta por Thom Yorke (voz, guitarra, piano), Jonny Greenwood (guitarra, teclados, otros instrumentos), Colin Greenwood (bajo), Ed O'Brien (guitarra, coros) y Philip Selway (batería, percusión).",
                artist_path: 'radiohead.jpg',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                artist_name: 'Oasis',
                artist_info: "Oasis fue una banda inglesa de rock alternativo, formada en Mánchester en 1990. En sus inicios, conocidos como Rain (en español, «Lluvia»), el grupo contaba en sus filas con el cantante Chris Hutton, el guitarrista Paul Arthurs, el bajista Paul McGuigan y el baterista Daniel Alexander, a los que más tarde se unirían, en 1991, Liam Gallagher en la voz y Tony McCarroll como batería. El último en formar parte del grupo fue el hermano mayor de Liam, Noel Gallagher (a petición de su propio hermano), quien obtuvo el papel de compositor principal, guitarrista principal y cantante secundario.",
                artist_path: 'oasis.jpg',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                artist_name: 'Death Grips',
                artist_info: "Death Grips es una banda de hip hop experimental originaria de Sacramento, California, formada en el 2010. El grupo está conformado por el rapero/vocalista Stefan Burnett, conocido por su nombre artístico MC Ride, el baterista y productor Zach Hill, y el coproductor Andy Morin (a menudo erróneamente llamado Flatlander, el cual es otro nombre que Death Grips utiliza para referirse a la producción de su música como banda). La música del grupo ha sido descrita como una combinación entre hip hop, música industrial y noise. En abril del 2011 lanzaron el mixtape titulado ExMilitary, seguido por dos álbumes de estudio en el 2012, The Money Store en abril, y No Love Deep Web en octubre, y un tercer álbum en noviembre del 2013, titulado Government Plates.",
                artist_path: 'deathgrips.jpg',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                artist_name: 'Chichí Peralta',
                artist_info: "Pedro René Peralta Soto (Santo Domingo; 9 de julio de 1966), más conocido como Chichí Peralta, es un cantautor, músico, compositor, arreglista y productor musical dominicano. Su música se caracteriza por la fusión de ritmos latinos llegando a incluirse dentro de la llamada world music. Ha combinado el son con el jazz, el merengue con el pop, ritmos africanos, hip hop, rap, bachata, guaguancó, ritmos brasileños, plena, salsa, vallenato, cumbia, texturas sinfónicas, ritmos árabes, e instrumentos exóticos de la India y el Japón, entre otros.",
                artist_path: 'chichiperalta.jpg',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                artist_name: 'Julieta Venegas',
                artist_info: "Julieta Venegas es una reconocida cantante, compositora y músico mexicana, nacida el 24 de noviembre de 1970 en Long Beach, California, Estados Unidos. Es una de las artistas más destacadas en la escena musical latina contemporánea y ha ganado reconocimiento internacional por su talento y originalidad. Fue integrante de la banda mexicana de ska y reggae Tijuana No!, en la que compuso la canción más exitosa de la agrupación: «Pobre de ti», junto a Álex Zúñiga. En 1996 comenzó su carrera como solista cuando viajó a la Ciudad de México apoyada por la banda Café Tacvba. Consiguió un contrato con el sello discográfico BMG/Ariola, lanzando su álbum debut Aquí (1997) al igual que su siguiente producción Bueninvento (2000) discos producidos por Gustavo Santaolalla, los cuales fueron alabados por los críticos y propagándose en el público del rock en México, Centroamérica y América del Sur. Su siguiente álbum de estudio Sí (2003) la lleva a la fama en Estados Unidos, América Latina y España. Lanza su cuarta producción Limón y Sal (2006), ahora con el sello de Sony & BMG, con el cual rompe fronteras y alcanza popularidad en América, Europa y Asia. Con su primer álbum en vivo MTV Unplugged (2008), se consolidó a nivel mundial y la populariza más en países no hispanohablantes como Australia, India, South Africa, Brasil, Reino Unido y Japón, llegando sus propuestas musicales a muchas regiones de África y Oceanía.",
                artist_path: 'julietavenegas.jpg',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                artist_name: 'My Bloody Valentine',
                artist_info: "My Bloody Valentine es una banda de rock alternativo formada en 1983 en Dublín, Irlanda por Kevin Shields y Colm Ó Cíosóig. Influenciada por el post-punk, el rock experimental y el noise rock de bandas como Sonic Youth, quedaron establecidos como una leyenda del rock independiente, y máximos exponentes del shoegaze, siendo una gran inspiración e influencia para muchas bandas contemporáneas. Marcaron fuertes tendencias y toda una forma de hacer música que se fundamenta en guitarras distorsionadas y semi-ambientales, con efectos de reverb, el uso del brazo de trémolo en las Fender Jaguar y Jazzmaster como un rasgo particular en el sonido, y voces femeninas frágiles y melódicas contrapuestas a ambientes extremadamente densos. Por eso, su guitarrista, Kevin Shields, es también una figura de la época, y es padre del modelo que siguen otras bandas similares como Lush. La banda empezó a disolverse tras dos años de su éxito de 1991 Loveless concluyendo su separación finalmente en 1997. En 2007, Shields anunció tras 10 años de separación que la banda volvería a reunirse y que estaría grabando nuevo material. El nombre de la banda es tomado de la película de horror de 1981 del mismo nombre.",
                artist_path: 'mybloodyvalentine.jpg',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                artist_name: 'Masayoshi Takanaka',
                artist_info: "Masayoshi Takanaka (高中 正義 en japonés, nacido el 27 de marzo de 1953 en Shinagawa, Tokio, Japón). Es un guitarrista, compositor y productor japonés cuya obra influenció el género del City pop al final de los años 70 y durante los 80.",
                artist_path: 'masayoshitakanaka.jpg',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                artist_name: 'MF DOOM',
                artist_info: "Daniel Dumilei, mejor conocido por su nombre artístico MF DOOM o simplemente DOOM, fue un rapero, compositor y productor discográfico británico-estadounidense. Es reconocido por sus intrincados juegos de palabras, su característica máscara, y por su personaje de escenario como “supervillano”, Dumile se convirtió en un icono en la música Underground hip hop y del rap alternativo en la década de los 2000. Luego de su fallecimiento, la revista Variety lo describió como una de las “figuras más enigmáticas, impredecibles y celebradas” de su género.",
                artist_path: 'mfdoom.jpg',
                created_at: new Date(),
                updated_at: new Date()
            }
        ], {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('artists', null, {});
    }
};