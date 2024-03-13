module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('products', [
            {
                artist_id: 1,
                genre_id: 1,
                product_title: 'Cross - Justice',
                product_info: '†, también conocido como Cross, es el primer álbum de estudio del dúo francés de música electro house Justice, publicado en 11 de junio de 2007. Recibió un Platino en el Reino Unido el 13 de marzo de 2009 por la venta de 60,000 copias.',
                price: 19.99,
                tracklist: ["Genesis",
                "Let There Be Light",
                "D.A.N.C.E.",
                "Newjack",
                "Phantom",
                "Phantom Pt. II",
                "Tthhee Ppaarrttyy",
                "DVNO",
                "Stress",
                "Waters of Nazareth",
                "One Minute to Midnight"],
                stock: 100,
                release_date: new Date(),
                label_id: 1,
                cover_path: '../../public/img/products/crossJustice.jpg',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                artist_id: 2,
                genre_id: 2,
                product_title: 'Pablo Honey',
                product_info: 'Pablo Honey es el nombre del álbum debut de la banda británica de rock alternativo Radiohead. Fue lanzado al mercado por EMI, Parlophone y Capitol Records el 22 de febrero de 1993. Su gran éxito fue el sencillo "Creep". La versión estadounidense del álbum tiene una versión especial de "Creep", en la cual el fuckin pronunciado antes del coro es reemplazado por very. El tema "Creep" surgió accidentalmente ya que era una canción que Jonny Greenwood odiaba y trataba de arruinar con ruidos discordantes, así nació el acorde distorsionado, que cambia el ritmo y clima del tema. El mismo llegó al puesto 27 de la Billboard. Las versiones japonesas en cambio tienen un total de 17 pistas, siendo las nuevas: "Pop Is Dead", "Inside my Head", "Million Dollar Question" y dos versiones en directo de "Creep" y "Ripcord".',
                price: 24.99,
                tracklist: 'Lista de canciones del Producto 2',
                stock: 50,
                release_date: new Date(),
                label_id: 2,
                cover_path: '../../public/img/products/pabloHoney.jpg',
                created_at: new Date(),
                updated_at: new Date()
            },
            // Agregar más productos según sea necesario
        ], {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('products', null, {});
    }
};