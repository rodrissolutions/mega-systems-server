import { DataTypes } from "sequelize";

const CartModel = (sq) => {
  sq.define(
    "Cart",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },

      status: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },

      UserId: {
        type: DataTypes.UUID,
        allowNull: false,
        unique: true,
        references: {
          model: "Users",
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

export default CartModel;
