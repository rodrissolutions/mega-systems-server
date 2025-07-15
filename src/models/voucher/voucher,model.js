import { DataTypes } from "sequelize";

const VoucherModel = (sq) => {
  sq.define(
    "Voucher",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },

      photo: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isUrl: true,
        },
      },

      status: {
        type: DataTypes.ENUM,
        values: ["Pendiente", "Pagada", "Rechazada"],
        defaultValue: "Pendiente",
      },

      observations: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      SaleId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "Sales",
          key: "id",
        },
      },
    },
    {
      timestamps: false,
    }
  );
};

export default VoucherModel;
