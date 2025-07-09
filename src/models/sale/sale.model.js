import { DataTypes } from "sequelize";

const SaleModel = (sq) => {
  sq.define(
    "Sale",
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
      },

      subTotal: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },

      disccount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true,
      },

      disccountValue: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true,
      },

      disccountType: {
        type: DataTypes.ENUM,
        values: ["Porcentaje", "Fijo"],
        allowNull: true,
      },

      total: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },

      typeBuy: {
        type: DataTypes.ENUM,
        values: ["Retiro en Tienda", "Entrega a Domicilio"],
        allowNull: false,
      },

      status: {
        type: DataTypes.ENUM,
        values: ["Pendiente", "Pagada", "Rechazada"],
        defaultValue: "Pendiente",
      },

      paymentMethod: {
        type: DataTypes.ENUM,
        values: ["Efectivo", "Transferencia"],
        allowNull: false,
      },

      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
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

export default SaleModel;
