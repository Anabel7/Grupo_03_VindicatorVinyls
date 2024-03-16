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
            // Agregar más artistas según sea necesario
        ], {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('artists', null, {});
    }
};