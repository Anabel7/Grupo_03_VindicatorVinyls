const db = require("../../database/models");

module.exports = {
  list: (req, res) => {
    db.User.findAll()
      .then((usuarios) => {
        //cantidad total de usuarios en la base.
        const count = usuarios.length;

        //creamos el array para los detalles de los productos
        const users = usuarios.map((usuario) => {
          return {
            id: usuario.user_id,
            name: usuario.name,
            email: usuario.email,
            detail: `/api/users/${usuario.user_id}`,
          };
        });

        return res.status(200).json({
          count: count,
          users: users,
          status: 200,
        });
      })
      .catch((error) => {
        console.error("Error al listar el total de usuarios:", error);
        return res.status(500).json({ error: "Error interno del servidor" });
      });
  },
  show: (req, res) => {
    db.User.findByPk(req.params.id)
      .then((usuario) => {
        if (!usuario) {
          return res.status(404).json({ error: "Usuario no encontrado" });
        }
        let dataUser = {
          id: usuario.user_id,
          name: usuario.name,
          username: usuario.user,
          email: usuario.email,
          rol: usuario.rol,
          avatar: `/img/users/${usuario.avatar_path}`,
        };
        res.status(200).json({
          data: dataUser,
          status: 200,
        });
      })
      .catch((error) => {
        console.error("No se encuentra el usuario por id:", error);
        return res.status(500).json({ error: "Error interno del servidor" });
      });
  },
};
