import { DataTypes, Sequelize } from "sequelize";

const DeliveryModel = (sq) => {
  sq.define(
    "Delivery",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },

      status: {
        type: DataTypes.ENUM,
        values: ["Pendiente", "Enviado", "Entregado"],
        defaultValue: "Pendiente",
      },

      typeDelivery: {
        type: DataTypes.ENUM,
        values: ["Entrega rápida", "Entrega normal"],
        allowNull: false,
      },

      surchage: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },

      SaleId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "Sales",
          key: "id",
        },
      },

      ResidencyId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "Residencies",
          key: "id",
        },
      },

      createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      timestamps: false,
    }
  );
};

export default DeliveryModel;
