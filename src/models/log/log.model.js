import { Sequelize, DataTypes } from "sequelize";

const LogModel = (sq) => {
  sq.define(
    "Log",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },

      typeEvent: {
        type: DataTypes.ENUM,
        allowNull: false,
        values: [
          "Compra",
          "Cita",
          "Login",
          "Agregar al Carrito",
          "Eliminar del Carrito",
        ],
      },

      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },

      createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },

      UserId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "Users",
          key: "id",
        },
      },
    },
    {
      timestamps: false,
    }
  );
};

export default LogModel;
