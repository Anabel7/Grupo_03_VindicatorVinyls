const bcrypt = require("bcryptjs"); // Importa bcrypt para hashear las contraseñas

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const usersData = [
      {
        name: "Ejemplo 1",
        user: "ejemplo1",
        email: "ejemplo1@example.com",
        password: await bcrypt.hash("password1", 10), // Hashea la contraseña
        avatar_path: "ej1.jpg",
        rol: "cliente",
      },
      {
        name: "Ejemplo 2",
        user: "ejemplo2",
        email: "ejemplo2@example.com",
        password: await bcrypt.hash("password2", 10), // Hashea la contraseña
        avatar_path: "ej2.jpg",
        rol: "admin",
      },
      {
        name: "vivi",
        user: "vivi",
        email: "vivi@gmail.com",
        password: await bcrypt.hash("prueba10", 10), // Hashea la contraseña
        avatar_path: "1710447687738_img_.gif",
        rol: "admin",
      },
      // Agregar más usuarios si es necesario
    ];

    // Inserta los datos en la base de datos
    await queryInterface.bulkInsert("users", usersData, {});

    // Si tienes asociaciones con otros modelos, aquí también puedes insertar datos asociados
  },

  down: async (queryInterface, Sequelize) => {
    // Elimina los datos insertados en la migración 'up'
    await queryInterface.bulkDelete("users", null, {});
  },
};
