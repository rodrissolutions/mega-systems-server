import { DataTypes } from "sequelize";

const ResidencyModel = (sq) => {
  sq.define(
    "Residency",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      fullName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      province: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      phone: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [10, 10],
        },
      },

      city: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      mainStreet: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      secondaryStreet: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      type: {
        type: DataTypes.ENUM,
        values: ["Casa", "Trabajo"],
        allowNull: false,
      },

      reference: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      latitude: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      longitude: {
        type: DataTypes.STRING,
        allowNull: false,
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

export default ResidencyModel;
