module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('genres', [
            {
                genre_name: 'Rock',
                genre_info: 'La música rock es un género musical que se originó en la década de 1950 en Estados Unidos y Reino Unido. Se caracteriza por sus ritmos fuertes, a menudo impulsados por la guitarra eléctrica, el bajo y la batería, así como por sus letras a menudo centradas en temas como el amor, la libertad, la rebeldía y la vida cotidiana. El rock ha evolucionado a lo largo de las décadas, dando lugar a una amplia variedad de subgéneros, como el rock and roll, el rock clásico, el rock alternativo, el punk rock, el rock nacional, el rock progresivo, el hard rock, entre otros. Cada subgénero tiene sus propias características musicales y culturales distintivas. El rock ha tenido un impacto duradero en la cultura popular y ha sido una fuerza influyente en la música contemporánea. Ha inspirado a generaciones de músicos y ha sido el sonido de movimientos culturales y sociales, desde la contracultura de los años 60 hasta la música de protesta y la expresión artística en la actualidad.',
                genre_path: '../../public/img/genres/rock.jpg',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                genre_name: 'Pop',
                genre_info: 'El pop, abreviatura de "música popular", es un género musical que se caracteriza por su accesibilidad y su enfoque en la melodía y la comercialidad. Surgió en las décadas de 1950 y 1960 como una forma de contrarrestar al rock and roll, ofreciendo una música más suave y fácil de digerir para un público más amplio. El pop ha dado lugar a una gran cantidad de artistas y éxitos a lo largo de los años, desde los íconos del pop como Michael Jackson y Madonna hasta artistas contemporáneos como Taylor Swift y BTS. Es un género que sigue siendo omnipresente en la cultura popular y que sigue teniendo un gran impacto en la música actual. En nuestra página podrán encontrar discos de K-pop, synth-pop, indie-pop, pop rap, entre otros.',
                genre_path: '../../public/img/genres/pop.jpg',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                genre_name: 'Jazz',
                genre_info: 'El jazz es un género musical que se originó a finales del siglo XIX y principios del siglo XX en los Estados Unidos, principalmente en la ciudad de Nueva Orleans. Es conocido por su improvisación, complejidad rítmica y énfasis en la expresión individual y la creatividad. El jazz ha dado lugar a una amplia gama de estilos y subgéneros a lo largo de los años, incluyendo el bebop, el cool jazz, el jazz fusión, el free jazz y muchos más. Es un género que sigue siendo apreciado por su creatividad, su virtuosismo musical y su capacidad para conectar con la audiencia a un nivel emocional y espiritual.',
                genre_path: '../../public/img/genres/jazz.jpg',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                genre_name: 'Hip-hop',
                genre_info: 'El hip-hop es un género musical, cultural y artístico que se originó en las comunidades afroamericanas y latinoamericanas en la década de 1970 en la ciudad de Nueva York, específicamente en el Bronx. Se caracteriza por cuatro elementos principales: el rap, el DJing, el breakdance y el grafiti. El hip-hop ha crecido y evolucionado enormemente desde sus humildes comienzos en el Bronx, convirtiéndose en un fenómeno global que ha influido en la música, el arte, la moda y la cultura en todo el mundo. Es una forma de expresión poderosa y vibrante que sigue siendo relevante y emocionante para millones de personas en todo el mundo.',
                genre_path: '../../public/img/genres/hiphop.jpg',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                genre_name: 'Electrónica',
                genre_info: 'La música electrónica es un género musical que utiliza instrumentos electrónicos y tecnología de producción para crear sonidos y composiciones musicales. A menudo se asocia con la música de baile y la cultura de club, pero abarca una amplia variedad de estilos y subgéneros. Surgió a mediados del siglo XX con la introducción de instrumentos electrónicos como sintetizadores y cajas de ritmos. La música electrónica ha experimentado un crecimiento explosivo en popularidad en las últimas décadas y ha influido en una amplia variedad de géneros musicales y estilos de vida en todo el mundo. Es una forma de expresión artística dinámica y en constante evolución que sigue siendo relevante y emocionante para millones de personas en todo el mundo. Aquí podrán encontrar discos de música electrónica convencional, así como otros subgéneros derivados como la música house, EDM, DRUM AND BASS, Trance, Dubstep, entre otros.',
                genre_path: '../../public/img/genres/electro.jpg',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                genre_name: 'Metal',
                genre_info: 'La música metal es un género musical que se caracteriza por su énfasis en la distorsión, la potencia y la agresividad. Surgió en la década de 1960 y 1970 como una evolución del rock and roll y el hard rock, y desde entonces ha diversificado en una amplia variedad de subgéneros. Aquí encontrarás discos de todos los subgéneros del metal, pasando por el trash metal, black metal, power metal, screamo, entre otros.',
                genre_path: '../../public/img/genres/metal.jpg',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                genre_name: 'Música clásica',
                genre_info: 'La música clásica es un género musical que se originó en Europa occidental alrededor del siglo IX y se desarrolló hasta el siglo XX. Se caracteriza por su composición formal y estructurada, con obras que suelen ser escritas para instrumentos orquestales y grupos de cámara. Incluimos en este género también los álbumes sinfónicos y orquestales de tiempos modernos y contemporáneos.',
                genre_path: '../../public/img/genres/clasica.jpg',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                genre_name: 'Experimental/Indie',
                genre_info: 'La música experimental es un género musical que se caracteriza por su enfoque en la exploración sonora y la innovación creativa. A diferencia de otros géneros más convencionales, la música experimental se centra menos en la estructura y más en la experimentación con diferentes técnicas, sonidos y conceptos musicales. Aquí están reunidos los álbumes que no terminan de encajar dentro de ninguna de nuestras otras categorías.',
                genre_path: '../../public/img/genres/indie.jpg',
                created_at: new Date(),
                updated_at: new Date()
            }
        ], {});
    },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("genres", null, {});
  },
};
