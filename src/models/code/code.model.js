import { DataTypes } from "sequelize";

const CodeModel = (sq) => {
  sq.define(
    "Code",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },

      code: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          len: [4, 4],
        },
      },

      type: {
        type: DataTypes.ENUM,
        allowNull: false,
        values: [
          "Verificación",
          "Recuperación",
          "Compra",
          "Entrega",
          "Cancelación",
        ],
      },

      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },

      expirationTime: {
        type: DataTypes.DATE,
        allowNull: true,
      },

      isValid: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
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

export default CodeModel;
