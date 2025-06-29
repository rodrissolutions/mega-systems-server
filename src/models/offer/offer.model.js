import { DataTypes } from "sequelize";

const OfferModel = (sq) => {
  sq.define(
    "Offer",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      title: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },

      type: {
        type: DataTypes.ENUM,
        values: ["Global", "Categoría", "Producto", "Servicio"],
        allowNull: false,
      },

      typeValue: {
        type: DataTypes.ENUM,
        values: ["Porcentaje", "Fijo"],
        allowNull: false,
      },
      value: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },

      startDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },

      endDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },

      isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },

      ProductId: {
        type: DataTypes.UUID,
        allowNull: true,
        references: {
          model: "Products",
          key: "id",
        },
      },

      CategoryId: {
        type: DataTypes.UUID,
        allowNull: true,
        references: {
          model: "Categories",
          key: "id",
        },
      },

      ServiceId: {
        type: DataTypes.UUID,
        allowNull: true,
        references: {
          model: "Services",
          key: "id",
        },
      },
    },
    {
      timestamps: false,
    }
  );
};

export default OfferModel;
