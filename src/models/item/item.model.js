import { DataTypes } from "sequelize";

const ItemModel = (sq) => {
  sq.define(
    "Item",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },

      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      CartId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "Carts",
          key: "id",
        },
      },

      ProductId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "Products",
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

export default ItemModel;
