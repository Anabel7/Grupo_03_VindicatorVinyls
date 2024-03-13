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
            // Agregar más disqueras según sea necesario
        ], {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('labels', null, {});
    }
};