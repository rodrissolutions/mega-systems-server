import { DataTypes } from "sequelize";

const BankAccountModel = (sq) => {
  sq.define(
    "BankAccount",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },

      bankName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      accountHolder: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      accountNumber: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },

      accountType: {
        type: DataTypes.ENUM,
        values: ["Ahorro", "Corriente"],
        allowNull: false,
      },

      identification: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
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

export default BankAccountModel;
